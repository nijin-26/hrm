import { IContextAction, IEmployeeDetails } from "../../interfaces/Common";
import { IFilterSortReducer } from "../../interfaces/AppContextInterface";
import actionTypes from "../actionTypes";
import { getEmployeeData } from "../../utils/getEmployeeData";

const initialFilteredEmployees: IEmployeeDetails[] = [];

export const filteredEmployeesReducer = (
  state = initialFilteredEmployees,
  action: IContextAction
): IEmployeeDetails[] => {
  switch (action.type) {
    case actionTypes.SET_FILTERED_EMPLOYEES: {
      return getEmployeeData(action.payload);
    }
    case actionTypes.FILTER_SORT_EMPLOYEES: {
      let filteredEmployees = filterEmployees(
        action.payload.employees,
        action.payload.filterSort
      );
      filteredEmployees = sortEmployees(
        filteredEmployees,
        action.payload.filterSort
      );

      return filteredEmployees;
    }
    default:
      return state;
  }
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
