// React Hooks
import { useEffect, useState } from "react";

// External Libraries
import { Fade } from "react-awesome-reveal";
import { useLocation, useNavigate } from "react-router-dom";
import styled, { CSSProperties, useTheme } from "styled-components";

// React Icons
import {
  AiOutlineMail,
  AiOutlineMobile,
  AiTwotoneCalendar,
} from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { LiaBirthdayCakeSolid } from "react-icons/lia";

// Styles
import styles from "./style.module.scss";

// Assets
import placeholder from "../../assets/placeholder-image.png";

// Interfaces
import { IEmployeeDetails } from "../../core/interfaces/Common";

// Utility Functions
import { getFormattedDate } from "../../core/utils/formatDate";

// App Context
import { useAppContext } from "../../core/store/AppContext";

const EmployeeView = () => {
  const { state } = useAppContext();
  const [selectedEmployee, setSelectedEmployee] = useState<IEmployeeDetails>();
  const theme = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const employeeId = location.pathname.split("/")[2];
    const selected = state.employees.find(
      (employee) => employee.id === employeeId
    );
    if (selected) setSelectedEmployee(selected as IEmployeeDetails);
    else navigate("/"); // TODO: Toast message - Employee Not found
  }, []);

  let department =
    selectedEmployee &&
    state.departments.find(
      (department) => department.id === selectedEmployee?.department
    );

  let role =
    selectedEmployee &&
    state.roles.find((role) => role.id === selectedEmployee?.role);

  const employeeDetailsStyle = {
    color: theme.fontColor,
  } as CSSProperties;

  const linkStyle = {
    color: theme.fontColor,
  } as CSSProperties;

  const SelectedSkillsContainer = styled.div`
    display: flex;
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
      </section>
    </Fade>
  );
};

export default EmployeeView;
