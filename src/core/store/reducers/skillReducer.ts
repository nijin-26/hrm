import { skillList } from "../../constants";
import { IContextAction, ISkills } from "../../interfaces/Common";
import actionTypes from "../actionTypes";

export const skillsReducer = (state: ISkills[], action: IContextAction) => {
  switch (action.type) {
    case actionTypes.SET_SKILLS: {
      return skillList; // TODO: Fetch from API
    }
    default:
      return state;
  }
};
