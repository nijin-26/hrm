import { getEmployeeData } from "../../utils/getEmployeeData";
import actionTypes from "../actionTypes";

import { IContextAction, IEmployeeDetails } from "../../interfaces/Common";

const initialEmployeeState: IEmployeeDetails[] = [];

export const employeeReducer = (
  state = initialEmployeeState,
  action: IContextAction
) => {
  switch (action.type) {
    case actionTypes.SET_EMPLOYEES:
      return getEmployeeData(action.payload);
    case actionTypes.ADD_EMPLOYEE:
      return addEmployee(state, action.payload);
    case actionTypes.UPDATE_EMPLOYEE:
      return updateEmployee(state, action.payload);
    case actionTypes.DELETE_EMPLOYEE:
      return deleteEmployee(state, action.payload);
    default:
      return state;
  }
};

const getUpdatedEmployeeData = (
  employees: IEmployeeDetails[]
): IEmployeeDetails[] => {
  return getEmployeeData(employees);
};

const addEmployee = (
  state: IEmployeeDetails[],
  payload: IContextAction["payload"]
): IEmployeeDetails[] => {
  const updatedEmployee = [...state, { ...payload.data, id: payload.id }];
  return getUpdatedEmployeeData(updatedEmployee);
};

const updateEmployee = (
  state: IEmployeeDetails[],
  payload: IContextAction["payload"]
): IEmployeeDetails[] => {
  const updatedEmployees = state.map((employee) => {
    return employee.id === payload.id
      ? { ...payload.data, id: payload.id }
      : employee;
  });
  return getUpdatedEmployeeData(updatedEmployees);
};

const deleteEmployee = (
  state: IEmployeeDetails[],
  payload: IContextAction["payload"]
): IEmployeeDetails[] => {
  const updatedEmployees = state.filter((employee) => employee.id !== payload);
  return updatedEmployees;
};
