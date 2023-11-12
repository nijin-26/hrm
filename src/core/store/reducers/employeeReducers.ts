import { employees } from "../../constants";
import { IAppContextState } from "../../interfaces/AppContextInterface";

import { IContextAction, IEmployeeDetails } from "../../interfaces/Common";
import { getEmployeeData } from "../../utils/getEmployeeData";
import actionTypes from "../actionTypes";

export const employeeReducer = (
  state: IEmployeeDetails[],
  action: IContextAction
) => {
  switch (action.type) {
    case actionTypes.FETCH_EMPLOYEES: {
      //TODO: Call API
      const employeeData = getEmployeeData(employees);
      return employeeData;
    }
    default:
      return state;
  }
};

export const filteredEmployeesReducer = (
  state: IAppContextState,
  action: IContextAction
): IEmployeeDetails[] => {
  const { employees } = state;
  let filteredEmployees = [...employees];

  switch (action.type) {
    case actionTypes.FILTER_EMPLOYEES: {
      const { name, department, role, skills } = state.filter;

      if (name !== "")
        filteredEmployees = filteredEmployees.filter((employee) =>
          employee.fullName?.toLowerCase().includes(name.toLowerCase())
        );

      if (department !== "")
        filteredEmployees = filteredEmployees.filter((employee) =>
          employee.department?.includes(department)
        );

      if (role !== "")
        filteredEmployees = filteredEmployees.filter((employee) =>
          employee.role?.includes(role)
        );

      if (skills.length > 0) {
        filteredEmployees = filteredEmployees.filter((employee) => {
          return skills.every((selectedSkill) =>
            employee.skill?.includes(selectedSkill.id)
          );
        });
      }

      return filteredEmployees;
    }
    case actionTypes.RESET_FILTERS: {
      return state.filteredEmployees;
    }
    default:
      return state.filteredEmployees;
  }
};
