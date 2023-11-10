import { IEmployeeDetails } from "../interfaces/Common";
import { getFormattedDate } from "./formatDate";

import { BiEdit, BiUserMinus } from "react-icons/bi";

export const getEmployeeData = (
  employees: IEmployeeDetails[]
): IEmployeeDetails[] => {
  return employees.map((employee) => {
    return {
      ...employee,
      dateOfJoin: getFormattedDate(employee.dateOfJoin as number)[0],
      dateOfBirth: getFormattedDate(employee.dateOfBirth as number)[0],
      actions: (
        <div className="action-btn-container">
          <span id="edit">
            <BiEdit />
          </span>
          <span id="remove">
            <BiUserMinus />
          </span>
        </div>
      ),
    };
  });
};
