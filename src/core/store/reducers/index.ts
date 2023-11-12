import { IAppContextState } from "../../interfaces/AppContextInterface";
import { IContextAction } from "../../interfaces/Common";
import { filteredEmployeesReducer, employeeReducer } from "./employeeReducers";
import { filterReducer } from "./filterReducer";
import { skillsReducer } from "./skillReducer";

const rootReducer = (
  state: IAppContextState,
  action: IContextAction
): IAppContextState => {
  return {
    employees: employeeReducer(state.employees, action),
    filteredEmployees: filteredEmployeesReducer(state, action),
    skills: skillsReducer(state.skills, action),
    roles: [], // TODO:
    department: [], //TODO:
    filter: filterReducer(state.filter, action),
  };
};

export default rootReducer;
