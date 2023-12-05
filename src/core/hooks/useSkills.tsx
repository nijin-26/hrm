import { useState, useEffect } from "react";
import { ISkills } from "../interfaces/Common";
import { useAppContext } from "../context/AppContext";

function useSkills() {
  const [searchInput, setSearchInput] = useState<string>("");
  const [skills, setSkills] = useState<ISkills[]>([]);
  const [selectedSkills, setSelectedSkills] = useState<ISkills[]>([]);

  const { state } = useAppContext();

  useEffect(() => {
    setSkills([...state.skills]);

    return () => handleResetSkills();
  }, [state.skills]);

  const handleInput = (value: string) => setSearchInput(value);
  const handleSelectedSkills = (ids: string | string[]) => {
    const idArray = Array.isArray(ids) ? ids : [ids];

    // Filter skills that are not already in selectedSkills
    const selectedSkillsToAdd = state.skills.filter(
      (skill) =>
        idArray.includes(skill.id) &&
        !selectedSkills.some((selectedSkill) => selectedSkill.id === skill.id)
    );

    const updatedListOfSkills = state.skills.filter(
      (skill) =>
        !idArray.includes(skill.id) &&
        !selectedSkills.some((selectedSkill) => selectedSkill.id === skill.id)
    );

    setSelectedSkills((prev) => [...prev, ...selectedSkillsToAdd]);
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
    setSkills(state.skills);
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
