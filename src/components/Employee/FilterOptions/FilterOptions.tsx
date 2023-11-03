import { useEffect, useState } from "react";
import SearchSkill from "../../common/SearchSkill/SearchSkill";
import { ISkills } from "../../../core/interfaces/interfaces";
import FilterSelect from "../../common/FilterSelect/FilterSelect";
import { FilterOptionsWrapper } from "./FilterOptions.style";
import { departments, roles, skillList } from "../../../core/constants";

const FilterOptions = () => {
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedRole, setSelectedRole] = useState("");

  const [skills, setSkills] = useState<ISkills[]>([]);
  const [selectedSkills, setSelectedSkills] = useState<ISkills[]>([]);

  useEffect(() => {
    //TODO: Fetch all skills from firebase
    setSkills(skillList);
  }, [skillList]);

  const handleSelectedSkills = (id: string) => {
    const selectedSkill = skills.filter((skill) => skill.id === id);
    const updateListOfSkills = skills.filter((skill) => skill.id !== id);
    setSelectedSkills((prev) => [...prev, ...selectedSkill] as ISkills[]);
    setSkills(updateListOfSkills);
  };

  const handleRemoveSelectedSkill = (id: string) => {
    const selectedSkill = selectedSkills.find((skill) => skill.id === id);
    const updatedListOfSelectedSkills = selectedSkills.filter(
      (skill) => skill.id !== id
    );

    setSelectedSkills(updatedListOfSelectedSkills);
    setSkills((prev) => [...prev, selectedSkill] as ISkills[]);
  };
  return (
    <FilterOptionsWrapper className="flex">
      <FilterSelect
        options={departments}
        value={selectedDepartment}
        onChange={(e) => setSelectedDepartment(e.target.value)}
      />
      <FilterSelect
        options={roles}
        value={selectedRole}
        onChange={(e) => setSelectedRole(e.target.value)}
      />
      <SearchSkill
        placeholder="Search by skills"
        listOfSkills={skills}
        selectedSkills={selectedSkills}
        handleSelectedSkills={handleSelectedSkills}
        removeSelectedSkill={handleRemoveSelectedSkill}
      />
    </FilterOptionsWrapper>
  );
};

export default FilterOptions;
