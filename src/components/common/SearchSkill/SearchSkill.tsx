import { KeyboardEvent, useState } from "react";
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
  position,
  placeholder,
  listOfSkills,
  selectedSkills,
  handleSelectedSkills,
  removeSelectedSkill,
}: ISearchSkills) => {
  const [showList, setShowList] = useState(false);
  const [searchInput, setSearchInput] = useState<string>("");

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Backspace") {
    }
  };

  return (
    <>
      <SkillSearchContainer>
        <div>
          {position === "inside" && (
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
          )}
          <SearchSkillInput
            placeholder={placeholder}
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onFocus={() => setShowList(true)}
            onBlur={() => {
              setTimeout(() => setShowList(false), 100);
            }}
            onKeyDown={handleKeyDown}
          />
        </div>
        {showList && (
          <DropDownContent>
            <ul>
              {listOfSkills.map(
                (skill) =>
                  skill.name
                    .toLowerCase()
                    .includes(searchInput.toLowerCase()) && (
                    <li
                      key={skill.id}
                      onClick={() => {
                        handleSelectedSkills(skill.id);
                        setShowList(false);
                      }}
                    >
                      {skill.name}
                    </li>
                  )
              )}
            </ul>
          </DropDownContent>
        )}
      </SkillSearchContainer>
      {position === "outside" && (
        <SelectedSkills className={position}>
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
      )}
    </>
  );
};

export default SearchSkill;
