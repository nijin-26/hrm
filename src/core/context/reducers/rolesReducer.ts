import { IContextAction, IRoles } from "../../interfaces/Common";
import actionTypes from "../actionTypes";

export const rolesReducer = (state: IRoles[], action: IContextAction) => {
  switch (action.type) {
    case actionTypes.SET_ROLES:
      return action.payload;
    default:
      return state;
  }
};
