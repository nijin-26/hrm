import {
  AiOutlineMail,
  AiOutlineMobile,
  AiTwotoneCalendar,
} from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { LiaBirthdayCakeSolid } from "react-icons/lia";

import styles from "./style.module.scss";

import { useTheme } from "styled-components";

import placeholder from "../../assets/placeholder-image.png";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { departments, employees, roles, skillList } from "../../core/constants";
import { IEmployeeDetails } from "../../core/interfaces/interfaces";
import { getFormattedDate } from "../../core/utils/formatDate";

const EmployeeView = () => {
  const [selectedEmployee, setSelectedEmployee] = useState<IEmployeeDetails>();
  const theme = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  let department =
    selectedEmployee &&
    departments.find(
      (department) => department.id === selectedEmployee?.department
    );

  let role =
    selectedEmployee &&
    roles.find((role) => role.id === selectedEmployee?.role);

  useEffect(() => {
    const employeeId = location.pathname.split("/")[2];
    const selected = employees.find((employee) => employee.id === employeeId);
    if (selected) setSelectedEmployee(selected as IEmployeeDetails);
    else navigate("/"); // TODO: Toast message - Employee Not found
  }, []);

  return (
    <section className={styles.viewEmployeeContainer}>
      <div className={styles.employeeDetails}>
        <div className={styles.leftSide}>
          <div className={styles.employeeImage}>
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
              <a href="mailto:${selectedEmployee.email}">
                {selectedEmployee?.email}
              </a>
            </span>
          </div>
          <div className={styles.employeeDetailTag}>
            <AiOutlineMobile />
            <span>
              <a href="tel:${selectedEmployee.mobile}">
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
      <div className={styles.selectedSkillContainer}>
        {selectedEmployee?.skill?.map((skillId) => {
          const skill = skillList.find((skill) => skill.id === skillId);
          return (
            skill && (
              <span key={skill.id} className={styles.selectedSkillTag}>
                {skill.name}
              </span>
            )
          );
        })}
      </div>
    </section>
  );
};

export default EmployeeView;
