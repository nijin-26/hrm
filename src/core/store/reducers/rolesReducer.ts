import { IContextAction, IRoles } from "../../interfaces/Common";
import actionTypes from "../actionTypes";

const initialRoles: IRoles[] = [];

export const rolesReducer = (
  state = initialRoles,
  action: IContextAction
): IRoles[] => {
  switch (action.type) {
    case actionTypes.SET_ROLES:
      return action.payload;
    default:
      return state;
  }
};
