import { KeyboardEvent, useState } from "react";
import {
  DropDownContent,
  SearchSkillInput,
  SkillSearchContainer,
} from "./SearchSkill.styles";

import { IoIosRemoveCircleOutline } from "react-icons/io";
import { ISearchSkills } from "../../../core/interfaces/Common";

const SearchSkill = ({
  placeholder,
  listOfSkills,
  searchInput,
  handleInput,
  handleSelectedSkills,
}: ISearchSkills) => {
  const [showList, setShowList] = useState(false);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Backspace") {
    }
  };

  const renderSkills = () => {
    const filteredSkills = listOfSkills.filter((skill) =>
      skill.name.toLowerCase().includes(searchInput.toLowerCase())
    );

    if (filteredSkills.length === 0) {
      return <li style={{ color: "red" }}>Not Found</li>;
    }

    return filteredSkills.map((skill) => (
      <li
        key={skill.id}
        onClick={() => {
          handleSelectedSkills(skill.id);
          setShowList(false);
        }}
      >
        {skill.name}
      </li>
    ));
  };

  return (
    <SkillSearchContainer>
      <div>
        <SearchSkillInput
          placeholder={placeholder}
          value={searchInput}
          onChange={(e) => handleInput(e.target.value)}
          onFocus={() => setShowList(true)}
          onBlur={() => {
            setTimeout(() => setShowList(false), 100);
          }}
          onKeyDown={handleKeyDown}
        />
      </div>
      {showList && (
        <DropDownContent>
          {listOfSkills.length ? (
            <ul>{renderSkills()}</ul>
          ) : (
            <p style={{ color: "red", fontWeight: 600 }}>Skill not found</p>
          )}
        </DropDownContent>
      )}
    </SkillSearchContainer>
  );
};

export default SearchSkill;
