import { IAppContextState } from "../../interfaces/AppContextInterface";
import { IContextAction } from "../../interfaces/Common";
import { employeeFilterReducer, employeeReducer } from "./employeeReducers";
import { skillsReducer } from "./skillReducer";

const rootReducer = (
  { employees, filteredEmployees, skills }: IAppContextState,
  action: IContextAction
): IAppContextState => {
  return {
    employees: employeeReducer(employees, action),
    filteredEmployees: employeeFilterReducer(filteredEmployees, action),
    skills: skillsReducer(skills, action),
    roles: [], // TODO:
    department: [], //TODO:
  };
};

export default rootReducer;
