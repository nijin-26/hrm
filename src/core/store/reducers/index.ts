import { IAppContextState } from "../../interfaces/AppContextInterface";
import { IContextAction } from "../../interfaces/Common";
import { employeeReducer } from "./employeeReducer";
import { skillsReducer } from "./skillReducer";

const rootReducer = (
  state: IAppContextState,
  action: IContextAction
): IAppContextState => {
  return {
    employees: employeeReducer(state.employees, action),
    skills: skillsReducer(state.skills, action),
    roles: [], // TODO:
    department: [], //TODO:
  };
};

export default rootReducer;
