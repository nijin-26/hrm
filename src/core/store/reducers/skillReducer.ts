import { skillList } from "../../constants";
import { IContextAction, ISkills } from "../../interfaces/Common";

export const skillsReducer = (state: ISkills[], action: IContextAction) => {
  switch (action.type) {
    case "FETCH_SKILLS": {
      return skillList; // TODO: Fetch from API
    }
    default:
      return state;
  }
};
