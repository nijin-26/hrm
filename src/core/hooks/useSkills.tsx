import { skillList } from "../constants";
import { useState, useEffect } from "react";
import { ISkills } from "../interfaces/Common";

function useSkills() {
  const [searchInput, setSearchInput] = useState<string>("");
  const [skills, setSkills] = useState<ISkills[]>([]);
  const [selectedSkills, setSelectedSkills] = useState<ISkills[]>([]);

  useEffect(() => {
    // TODO: Fetch all skills from Firebase
    setSkills(skillList);
  }, [skillList]);

  const handleInput = (value: string) => setSearchInput(value);

  const handleSelectedSkills = (id: string) => {
    const selectedSkill = skills.find((skill) => skill.id === id);
    const updatedListOfSkills = skills.filter((skill) => skill.id !== id);
    setSelectedSkills((prev) => [...prev, selectedSkill] as ISkills[]);
    setSkills(updatedListOfSkills);
  };

  const handleRemoveSelectedSkill = (id: string) => {
    const selectedSkill = selectedSkills.find((skill) => skill.id === id);
    const updatedListOfSelectedSkills = selectedSkills.filter(
      (skill) => skill.id !== id
    );

    setSelectedSkills(updatedListOfSelectedSkills);
    setSkills((prev) => [...prev, selectedSkill] as ISkills[]);
  };

  const handleResetSkills = () => {
    setSearchInput("");
    setSelectedSkills([]);
    setSkills(skillList);
  };

  return {
    skills,
    selectedSkills,
    searchInput,
    handleInput,
    handleSelectedSkills,
    handleRemoveSelectedSkill,
    handleResetSkills,
  };
}

export default useSkills;
