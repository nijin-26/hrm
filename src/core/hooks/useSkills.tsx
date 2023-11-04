import { skillList } from "../constants";
import { useState, useEffect } from "react";
import { ISkills } from "../interfaces/interfaces";

function useSkills() {
  const [skills, setSkills] = useState<ISkills[]>([]);
  const [selectedSkills, setSelectedSkills] = useState<ISkills[]>([]);

  useEffect(() => {
    // TODO: Fetch all skills from Firebase
    setSkills(skillList);
  }, [skillList]);

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

  return {
    skills,
    selectedSkills,
    handleSelectedSkills,
    handleRemoveSelectedSkill,
  };
}

export default useSkills;
