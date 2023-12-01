// Interfaces
import { IAppContextState } from "../../interfaces/AppContextInterface";
import { IContextAction } from "../../interfaces/Common";

// Utils
import { getArrayFromObjects } from "../../utils/getArrayFromObjects";
import { getEmployeeData } from "../../utils/getEmployeeData";

// Action Type
import actionTypes from "../actionTypes";

// Reducers
import { filteredEmployeesReducer, employeeReducer } from "./employeeReducers";
import { departmentsReducer } from "./departmentsReducer";
import { filterSortReducer } from "./filterSortReducer";
import { rolesReducer } from "./rolesReducer";
import { skillsReducer } from "./skillReducer";

const rootReducer = (
  state: IAppContextState,
  action: IContextAction
): IAppContextState => {
  if (action.type === actionTypes.SET_ALL_DATA) {
    return setAllData(state, action);
  } else {
    return {
      employees: employeeReducer(state.employees, action),
      filteredEmployees: filteredEmployeesReducer(state, action),
      filterSort: filterSortReducer(state.filterSort, action),
      skills: skillsReducer(state.skills, action),
      roles: rolesReducer(state.roles, action),
      departments: departmentsReducer(state.departments, action),
    };
  }
};

const setAllData = (state: IAppContextState, action: IContextAction) => {
  const employeeData = getEmployeeData(
    getArrayFromObjects(action.payload.employee)
  );
  return {
    ...state,
    employees: employeeData,
    filteredEmployees: employeeData,
    skills: getArrayFromObjects(action.payload.skill),
    roles: getArrayFromObjects(action.payload.role),
    departments: getArrayFromObjects(action.payload.department),
  };
};

export default rootReducer;
