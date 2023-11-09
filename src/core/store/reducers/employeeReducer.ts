import { IContextAction, IEmployeeDetails } from "../../interfaces/Common";

export const employeeReducer = (
  state: IEmployeeDetails[],
  action: IContextAction
) => {
  switch (action.type) {
    case "FETCH_EMPLOYEES": {
      return state;
    }
    default:
      return state;
  }
};
