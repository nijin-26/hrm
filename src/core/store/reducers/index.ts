import { IAppContextState } from "../../interfaces/AppContextInterface";
import { IContextAction } from "../../interfaces/Common";
import { departmentsReducer } from "./departmentsReducer";
import { filteredEmployeesReducer, employeeReducer } from "./employeeReducers";
import { filterSortReducer } from "./filterSortReducer";
import { rolesReducer } from "./rolesReducer";
import { skillsReducer } from "./skillReducer";

const rootReducer = (
  state: IAppContextState,
  action: IContextAction
): IAppContextState => {
  return {
    employees: employeeReducer(state.employees, action),
    filteredEmployees: filteredEmployeesReducer(state, action),
    filterSort: filterSortReducer(state.filterSort, action),
    skills: skillsReducer(state.skills, action),
    roles: rolesReducer(state.roles, action),
    departments: departmentsReducer(state.departments, action),
  };
};

export default rootReducer;
