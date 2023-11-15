import { IAppContextState } from "../../interfaces/AppContextInterface";
import { IContextAction } from "../../interfaces/Common";
import { getArrayFromObjects } from "../../utils/getArrayFromObjects";
import { getEmployeeData } from "../../utils/getEmployeeData";
import actionTypes from "../actionTypes";
import { departmentsReducer } from "./departmentsReducer";
import { filteredEmployeesReducer, employeeReducer } from "./employeeReducers";
import { filterSortReducer } from "./filterSortReducer";
import { rolesReducer } from "./rolesReducer";
import { skillsReducer } from "./skillReducer";

const rootReducer = (
  state: IAppContextState,
  action: IContextAction
): IAppContextState => {
  if (action.type === actionTypes.SET_ALL_DATA) {
    const employeeData = getEmployeeData(
      getArrayFromObjects(action.payload.employee)
    );
    const updatedState = {
      ...state,
      employees: employeeData,
      filteredEmployees: employeeData,
      skills: getArrayFromObjects(action.payload.skill),
      roles: getArrayFromObjects(action.payload.role),
      departments: getArrayFromObjects(action.payload.department),
    };
    return updatedState;
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

export default rootReducer;

// switch (action.type) {
//   case actionTypes.SET_ALL_DATA:
//     break;

//   default:
//     return {
//       employees: employeeReducer(state.employees, action),
//       filteredEmployees: filteredEmployeesReducer(state, action),
//       filterSort: filterSortReducer(state.filterSort, action),
//       skills: skillsReducer(state.skills, action),
//       roles: rolesReducer(state.roles, action),
//       departments: departmentsReducer(state.departments, action),
//     };
// }
