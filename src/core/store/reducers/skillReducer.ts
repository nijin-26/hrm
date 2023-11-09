import { IContextAction, ISkills } from "../../interfaces/Common";

export const skillsReducer = (state: ISkills[], action: IContextAction) => {
  switch (action.type) {
    case "FETCH_SKILLS": {
      return state;
    }
    default:
      return state;
  }
};
