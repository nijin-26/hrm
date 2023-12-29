import { IContextAction, IDepartment } from "../../interfaces/Common";
import actionTypes from "../actionTypes";

const initialDepartments: IDepartment[] = [];

export const departmentsReducer = (
  state = initialDepartments,
  action: IContextAction
): IDepartment[] => {
  switch (action.type) {
    case actionTypes.SET_DEPARTMENTS:
      return action.payload;
    default:
      return state;
  }
};
