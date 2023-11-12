import { IFilterReducer } from "../../interfaces/AppContextInterface";
import { IContextAction } from "../../interfaces/Common";
import actionTypes from "../actionTypes";

// For setting filter options / Inputs

export const filterReducer = (
  state: IFilterReducer,
  action: IContextAction
) => {
  switch (action.type) {
    case actionTypes.SET_FILTERS: {
      const { name, value } = action.payload;
      return {
        ...state,
        [name]: value,
      };
    }
    default:
      return state;
  }
};
