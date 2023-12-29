import { IFilterSortReducer } from "../../interfaces/AppContextInterface";
import { IContextAction } from "../../interfaces/Common";
import actionTypes from "../actionTypes";

// For setting filter options / Inputs

const initialFilterSort: IFilterSortReducer = {
  name: "",
  department: "",
  role: "",
  skills: [],
  sortBy: "",
  sortOrder: "",
};

export const filterSortReducer = (
  state = initialFilterSort,
  action: IContextAction
): IFilterSortReducer => {
  switch (action.type) {
    case actionTypes.SET_FILTERS: {
      const { name, value } = action.payload;
      return {
        ...state,
        [name]: value,
      };
    }
    case actionTypes.RESET_FILTERS:
      return {
        ...state,
        name: "",
        department: "",
        role: "",
        skills: [],
      };
    case actionTypes.SET_SORT_BY:
      return {
        ...state,
        sortBy: action.payload,
      };
    case actionTypes.SET_SORT_ORDER:
      return {
        ...state,
        sortOrder: action.payload,
      };
    default:
      return state;
  }
};
