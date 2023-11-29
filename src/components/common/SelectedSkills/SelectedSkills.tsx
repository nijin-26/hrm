import { IoIosRemoveCircleOutline } from "react-icons/io";
import { ISkills } from "../../../core/interfaces/Common";
import {
  SelectedSkillsContainer,
  SelectedSkillTag,
} from "./SelectedSkills.styles";

const SelectedSkills = ({
  selectedSkills,
  removeSelectedSkill,
}: {
  selectedSkills: ISkills[];
  removeSelectedSkill: (value: string) => void;
}) => {
  return (
    <SelectedSkillsContainer>
      {selectedSkills.map((skill) => (
        <SelectedSkillTag key={skill.id}>
          <span>{skill.name}</span>
          <IoIosRemoveCircleOutline
            onClick={() => removeSelectedSkill(skill.id)}
            className="remove-skill-btn"
          />
        </SelectedSkillTag>
      ))}
    </SelectedSkillsContainer>
  );
};

export default SelectedSkills;
