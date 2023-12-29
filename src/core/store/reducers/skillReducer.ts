import { IContextAction, ISkills } from "../../interfaces/Common";
import actionTypes from "../actionTypes";

const initialSkills: ISkills[] = [];

export const skillsReducer = (
  state = initialSkills,
  action: IContextAction
): ISkills[] => {
  switch (action.type) {
    case actionTypes.SET_SKILLS: {
      return action.payload;
    }
    default:
      return state;
  }
};
