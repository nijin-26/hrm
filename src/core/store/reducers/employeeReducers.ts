import { employees } from "../../constants";

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

export const employeeFilterReducer = (
  state: IEmployeeDetails[],
  action: IContextAction
) => {
  switch (action.type) {
    case actionTypes.SET_FILTERED_EMPLOYEES: {
      return action.payload;
    }
    case actionTypes.SEARCH_EMPLOYEE: {
      const updateList = state.filter((employee) =>
        employee.fullName?.toLowerCase().includes(action.payload)
      );
      return updateList;
    }
    default:
      return state;
  }
};
