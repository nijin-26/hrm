import { IContextAction, IDepartment } from "../../interfaces/Common";
import actionTypes from "../actionTypes";

export const departmentsReducer = (
  state: IDepartment[],
  action: IContextAction
) => {
  switch (action.type) {
    case actionTypes.SET_DEPARTMENTS:
      return action.payload;
    default:
      return state;
  }
};
