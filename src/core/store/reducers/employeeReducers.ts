import { getEmployeeData } from "../../utils/getEmployeeData";
import actionTypes from "../actionTypes";

// Interfaces
import {
  IAppContextState,
  IFilterSortReducer,
} from "../../interfaces/AppContextInterface";

import { IContextAction, IEmployeeDetails } from "../../interfaces/Common";

export const employeeReducer = (
  state: IEmployeeDetails[],
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

export const filteredEmployeesReducer = (
  state: IAppContextState,
  action: IContextAction
): IEmployeeDetails[] => {
  switch (action.type) {
    case actionTypes.FILTER_SORT_EMPLOYEES: {
      let filteredEmployees = filterEmployees(
        state.employees,
        state.filterSort
      );
      filteredEmployees = sortEmployees(filteredEmployees, state.filterSort);

      return filteredEmployees;
    }
    default:
      return state.filteredEmployees;
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

const filterEmployees = (
  employees: IEmployeeDetails[],
  filterOptions: IFilterSortReducer
): IEmployeeDetails[] => {
  const { name, department, role, skills } = filterOptions;

  let filteredEmployees = [...employees];

  if (name !== "") {
    filteredEmployees = filteredEmployees.filter((employee) =>
      employee.fullName?.toLowerCase().includes(name.toLowerCase())
    );
  }

  if (department !== "") {
    filteredEmployees = filteredEmployees.filter((employee) =>
      employee.department?.includes(department)
    );
  }

  if (role !== "") {
    filteredEmployees = filteredEmployees.filter((employee) =>
      employee.role?.includes(role)
    );
  }

  if (skills.length > 0) {
    filteredEmployees = filteredEmployees.filter((employee) =>
      skills.every((selectedSkill) =>
        employee.skill?.includes(selectedSkill.id)
      )
    );
  }

  return filteredEmployees;
};

const sortEmployees = (
  employees: IEmployeeDetails[],
  sortOptions: IFilterSortReducer
): IEmployeeDetails[] => {
  const { sortBy, sortOrder } = sortOptions;

  return employees.sort((a, b) => {
    const aValue = (a as any)[sortBy]?.toLowerCase();
    const bValue = (b as any)[sortBy]?.toLowerCase();

    if (aValue < bValue) return sortOrder === "asc" ? -1 : 1;
    if (aValue > bValue) return sortOrder === "asc" ? 1 : -1;
    return 0;
  });
};
