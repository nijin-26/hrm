import { IEmployeeDetails } from "../interfaces/interfaces";
import { getFormattedDate } from "./formatDate";

import { BiEdit, BiUserMinus } from "react-icons/bi";

export const getEmployeeData = (employees: IEmployeeDetails[]) => {
  return employees.map((employee) => {
    return {
      ...employee,
      dateOfJoin: getFormattedDate(employee.dateOfJoin as number)[0],
      actions: (
        <div className="action-btn-container">
          <span>
            <BiEdit />
          </span>
          <span>
            <BiUserMinus />
          </span>
        </div>
      ),
    };
  });
};
