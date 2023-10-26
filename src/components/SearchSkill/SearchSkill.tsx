import React, { useState } from "react";
import {
  DropDownContent,
  SearchSkillInput,
  SelectedSkills,
  SelectedSkillTag,
  SkillSearchContainer,
} from "./SearchSkill.styles";

import { IoIosRemoveCircleOutline } from "react-icons/io";

const SearchSkill = () => {
  const [showList, setShowList] = useState(false);

  return (
    <SkillSearchContainer>
      <div>
        <SelectedSkills>
          <SelectedSkillTag>
            <span>HTML</span>
            <IoIosRemoveCircleOutline className="remove-skill-btn" />
          </SelectedSkillTag>
        </SelectedSkills>
        <SearchSkillInput
          onFocus={() => setShowList(true)}
          onBlur={() => setShowList(false)}
        />
      </div>
      {showList && (
        <DropDownContent>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>ReactJs</li>
            <li>Angular</li>
          </ul>
        </DropDownContent>
      )}
    </SkillSearchContainer>
  );
};

export default SearchSkill;
