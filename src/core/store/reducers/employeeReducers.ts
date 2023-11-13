import { IAppContextState } from "../../interfaces/AppContextInterface";

import { IContextAction, IEmployeeDetails } from "../../interfaces/Common";
import { getEmployeeData } from "../../utils/getEmployeeData";
import actionTypes from "../actionTypes";

export const employeeReducer = (
  state: IEmployeeDetails[],
  action: IContextAction
) => {
  switch (action.type) {
    case actionTypes.SET_EMPLOYEES: {
      const employeeData = getEmployeeData(action.payload);
      return employeeData;
    }
    case actionTypes.ADD_EMPLOYEE: {
      const updatedEmployee = [...state, action.payload];
      const employeeData = getEmployeeData(updatedEmployee);
      return employeeData;
    }
    case actionTypes.UPDATE_EMPLOYEE: {
      const updatedEmployees = state.map((employee) => {
        if (employee.id === action.payload.id) return { ...action.payload };
        else return employee;
      });
      return getEmployeeData(updatedEmployees);
    }
    case actionTypes.DELETE_EMPLOYEE: {
      return state;
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
    case actionTypes.FILTER_SORT_EMPLOYEES: {
      const { name, department, role, skills, sortBy, sortOrder } =
        state.filterSort;

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

      filteredEmployees = filteredEmployees.sort((a, b) => {
        const aValue = (a as any)[sortBy]?.toLowerCase();
        const bValue = (b as any)[sortBy]?.toLowerCase();

        if (aValue < bValue) return sortOrder === "asc" ? -1 : 1;
        if (aValue > bValue) return sortOrder === "asc" ? 1 : -1;
        return 0;
      });

      return filteredEmployees;
    }
    default:
      return state.filteredEmployees;
  }
};
