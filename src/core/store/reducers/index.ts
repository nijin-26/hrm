import { IAppContextState } from "../../interfaces/AppContextInterface";
import { IContextAction } from "../../interfaces/Common";
import { filteredEmployeesReducer, employeeReducer } from "./employeeReducers";
import { filterSortReducer } from "./filterSortReducer";
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
    roles: [], // TODO:
    department: [], //TODO:
  };
};

export default rootReducer;
