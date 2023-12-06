// React Hooks
import { useEffect, useState } from "react";

// External Libraries
import { Fade } from "react-awesome-reveal";
import { useLocation, useNavigate } from "react-router-dom";
import styled, { CSSProperties, useTheme } from "styled-components";
import { toast } from "react-toastify";

import Modal from "../../components/common/Modal/Modal";
import DeleteConfirmation from "../../components/Employee/DeleteConfirmation/DeleteConfirmation";

// React Icons
import {
  AiOutlineMail,
  AiOutlineMobile,
  AiTwotoneCalendar,
} from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { BiEdit, BiUserMinus } from "react-icons/bi";

// Styles
import styles from "./style.module.scss";

// Assets
import placeholder from "../../assets/placeholder-image.png";

// Interfaces
import { IEmployeeDetails } from "../../core/interfaces/Common";

// Utility Functions
import { getFormattedDate } from "../../core/utils/formatDate";

// App Context
import { deleteData, getEmployeeById } from "../../core/api";
import { useDispatch, useSelector } from "react-redux";
import { IAppContextState } from "../../core/interfaces/AppContextInterface";
import { Dispatch } from "redux";
import actionTypes from "../../core/store/actionTypes";

const EmployeeView = () => {
  // State
  const [toggleDeleteModal, setToggleDeleteModal] = useState<boolean>(false);

  // Context and Hooks
  const state = useSelector((state: IAppContextState) => state);
  const dispatch = useDispatch<Dispatch>();

  const [selectedEmployee, setSelectedEmployee] = useState<IEmployeeDetails>();
  const theme = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  // Extract employeeId from the URL
  const employeeId = location.pathname.split("/")[2];

  // Fetch employee details on component mount
  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response: unknown = await getEmployeeById(
          `/employee/${employeeId}.json`
        );

        // If employee details are found, update the state
        if (response) {
          setSelectedEmployee(response as IEmployeeDetails);
        } else {
          toast.error("Employee not found");
          navigate("/");
        }
      } catch (error) {
        // Handle errors during employee details fetch
        toast.error("Error getting employee details.");
        console.log(error, "Error getting employee details");
      }
    };

    // Check if employee is already available in the global state
    let selected = state.employees.find(
      (employee) => employee.id === employeeId
    );

    // If found, update the local state; otherwise, fetch from the API
    if (selected) {
      setSelectedEmployee(selected as IEmployeeDetails);
    } else {
      fetchEmployee();
    }
  }, []);

  // Delete employee
  const handleEmployeeDelete = async () => {
    try {
      await deleteData(`/employee/${employeeId}.json`);

      // Update global state to remove the deleted employee
      dispatch({ type: actionTypes.DELETE_EMPLOYEE, payload: employeeId });

      // Show success toast and update UI
      toast.success("Employee deleted successfully.");
      setToggleDeleteModal(false);
      navigate("/");
    } catch (error) {
      toast.error("Error in deleting employee. Try Again");
    }
  };

  // Extract department and role details based on selected employee
  let department =
    selectedEmployee &&
    state.departments.find(
      (department) => department.id === selectedEmployee?.department
    );

  let role =
    selectedEmployee &&
    state.roles.find((role) => role.id === selectedEmployee?.role);

  // Styling for employee details and links
  const employeeDetailsStyle: CSSProperties = {
    color: theme.fontColor,
  };

  const linkStyle: CSSProperties = {
    color: theme.fontColor,
  };

  // Styled component for selected skills container
  const SelectedSkillsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;
    margin-bottom: 30px;
    padding: 0 20px;

    .selectedSkillTag {
      border-radius: 50px;
      padding: 10px;

      &:nth-child(even) {
        background-color: ${(props) => props.theme.primary};
        color: ${(props) => props.theme.secondary};
      }

      &:nth-child(odd) {
        background-color: ${(props) => props.theme.secondary};
        color: ${(props) => props.theme.primary};
      }
    }
  `;

  return (
    <Fade>
      <div className={styles.buttonContainer}>
        <span onClick={() => navigate(`/edit/${employeeId}`)}>
          <BiEdit />
        </span>
        <span onClick={() => setToggleDeleteModal(true)}>
          <BiUserMinus />
        </span>
      </div>
      <section className={styles.viewEmployeeContainer}>
        <div className={styles.employeeDetails} style={employeeDetailsStyle}>
          <div className={styles.leftSide}>
            <div
              className={styles.employeeImage}
              style={{ border: `1px solid ${theme.secondary}` }}
            >
              <img
                src={
                  selectedEmployee?.imageURL
                    ? selectedEmployee.imageURL
                    : placeholder
                }
                width="200"
                alt="employee_image"
              />
            </div>
            <p style={{ fontWeight: 500 }}>{selectedEmployee?.id}</p>
          </div>
          <div>
            <h2>{selectedEmployee?.fullName}</h2>
            <h3>
              {department && department.name} - {role && role.name}
            </h3>
            <div className={styles.employeeDetailTag}>
              <AiOutlineMail />
              <span>
                <a href={`mailto:${selectedEmployee?.email}`} style={linkStyle}>
                  {selectedEmployee?.email}
                </a>
              </span>
            </div>
            <div className={styles.employeeDetailTag}>
              <AiOutlineMobile />
              <span>
                <a href={`tel:${selectedEmployee?.mobile}`} style={linkStyle}>
                  {selectedEmployee?.mobile}
                </a>
              </span>
            </div>
            <div className={styles.employeeDetailTag}>
              <HiOutlineLocationMarker />
              <span>{selectedEmployee?.workLocation}</span>
            </div>
            <div className={styles.employeeDetailTag}>
              <AiTwotoneCalendar />
              <span>
                {selectedEmployee &&
                  getFormattedDate(selectedEmployee?.dateOfJoin as number)[0]}
              </span>
            </div>
            <div className={styles.employeeDetailTag}>
              <LiaBirthdayCakeSolid />
              <span>
                {selectedEmployee &&
                  getFormattedDate(selectedEmployee?.dateOfBirth as number)[0]}
              </span>
            </div>
          </div>
        </div>
        <h4>Skills</h4>
        <SelectedSkillsContainer>
          {selectedEmployee?.skill?.map((skillId) => {
            const skill = state.skills.find((skill) => skill.id === skillId);
            return (
              skill && (
                <span key={skill.id} className="selectedSkillTag">
                  {skill.name}
                </span>
              )
            );
          })}
        </SelectedSkillsContainer>
        <Modal
          isOpen={toggleDeleteModal}
          handleModalClose={() => setToggleDeleteModal(false)}
        >
          <DeleteConfirmation
            handleModalClose={() => setToggleDeleteModal(false)}
            handleEmployeeDelete={handleEmployeeDelete}
            employeeId={employeeId}
          />
        </Modal>
      </section>
    </Fade>
  );
};

export default EmployeeView;
