import React, { useState } from "react";
import {
  DropDownContent,
  SearchSkillInput,
  SelectedSkills,
  SelectedSkillTag,
  SkillSearchContainer,
} from "./SearchSkill.styles";

import { IoIosRemoveCircleOutline } from "react-icons/io";

interface searchSkillProps {
  listOfSkills: { id: string; name: string }[];
  selectedSkills: { id: string; name: string }[];
  handleSelectedSkills: (value: string) => void;
  removeSelectedSkill: (value: string) => void;
}

const SearchSkill = ({
  listOfSkills,
  selectedSkills,
  handleSelectedSkills,
  removeSelectedSkill,
}: searchSkillProps) => {
  const [showList, setShowList] = useState(false);
  const [searchInput, setSearchInput] = useState<string>("");

  return (
    <SkillSearchContainer>
      <div>
        <SelectedSkills>
          {selectedSkills.map((sk) => (
            <SelectedSkillTag key={sk.id}>
              <span>{sk.name}</span>
              <IoIosRemoveCircleOutline
                onClick={() => removeSelectedSkill(sk.id)}
                className="remove-skill-btn"
              />
            </SelectedSkillTag>
          ))}
        </SelectedSkills>
        <SearchSkillInput
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
            {listOfSkills.map((sk) => {
              if (sk.name.toLowerCase().includes(searchInput.toLowerCase())) {
                return (
                  <li
                    key={sk.id}
                    onClick={() => {
                      handleSelectedSkills(sk.id);
                      setShowList(false);
                    }}
                  >
                    {sk.name}
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
