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
    case actionTypes.SEARCH_EMPLOYEE: {
      const {
        employeeList,
        searchInput,
      }: { employeeList: IEmployeeDetails[]; searchInput: string } =
        action.payload;

      const updateList = employeeList.filter((employee) =>
        employee.fullName?.toLowerCase().includes(searchInput)
      );
      return updateList;
    }
    case actionTypes.FILTER_BY_DEPARTMENT: {
      return state;
    }
    case actionTypes.FILTER_BY_ROLE: {
      return state;
    }
    case actionTypes.FILTER_BY_SKILLS: {
      return state;
    }
    default:
      return state;
  }
};
