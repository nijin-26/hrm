import { combineReducers } from "redux";
import { employeeReducer } from "./employeeReducers";
import { skillsReducer } from "./skillReducer";
import { departmentsReducer } from "./departmentsReducer";
import { rolesReducer } from "./rolesReducer";
import { filterSortReducer } from "./filterSortReducer";
import { filteredEmployeesReducer } from "./filteredEmployeesReducer";
import { authReducer } from "./authReducer";

export const appReducer = combineReducers({
  auth: authReducer,
  employees: employeeReducer,
  filteredEmployees: filteredEmployeesReducer,
  skills: skillsReducer,
  departments: departmentsReducer,
  roles: rolesReducer,
  filterSort: filterSortReducer,
});
