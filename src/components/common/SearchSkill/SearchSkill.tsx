import { useState } from "react";
import {
  DropDownContent,
  SearchSkillInput,
  SelectedSkills,
  SelectedSkillTag,
  SkillSearchContainer,
} from "./SearchSkill.styles";

import { IoIosRemoveCircleOutline } from "react-icons/io";
import { ISearchSkills } from "../../../core/interfaces/interfaces";

const SearchSkill = ({
  placeholder,
  listOfSkills,
  selectedSkills,
  handleSelectedSkills,
  removeSelectedSkill,
}: ISearchSkills) => {
  const [showList, setShowList] = useState(false);
  const [searchInput, setSearchInput] = useState<string>("");

  return (
    <SkillSearchContainer>
      <div>
        <SelectedSkills>
          {selectedSkills.map((skill) => (
            <SelectedSkillTag key={skill.id}>
              <span>{skill.name}</span>
              <IoIosRemoveCircleOutline
                onClick={() => removeSelectedSkill(skill.id)}
                className="remove-skill-btn"
              />
            </SelectedSkillTag>
          ))}
        </SelectedSkills>
        <SearchSkillInput
          placeholder={placeholder}
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onFocus={() => setShowList(true)}
          onBlur={() => {
            setTimeout(() => setShowList(false), 100);
          }}
        />
      </div>
      {showList && (
        <DropDownContent>
          <ul>
            {listOfSkills.map((skill) => {
              if (
                skill.name.toLowerCase().includes(searchInput.toLowerCase())
              ) {
                return (
                  <li
                    key={skill.id}
                    onClick={() => {
                      handleSelectedSkills(skill.id);
                      setShowList(false);
                    }}
                  >
                    {skill.name}
                  </li>
                );
              }
            })}
          </ul>
        </DropDownContent>
      )}
    </SkillSearchContainer>
  );
};

export default SearchSkill;
