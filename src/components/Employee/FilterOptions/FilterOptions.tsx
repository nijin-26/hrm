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
    const selectedSkill = skills.filter((sk) => sk.id === id);
    const updateListOfSkills = skills.filter((sk) => sk.id !== id);
    setSelectedSkills((prev) => [...prev, ...selectedSkill] as ISkills[]);
    setSkills(updateListOfSkills);
  };

  const handleRemoveSelectedSkill = (id: string) => {
    const selectedSkill = selectedSkills.find((sk) => sk.id === id);
    const updatedListOfSelectedSkills = selectedSkills.filter(
      (sk) => sk.id !== id
    );

    setSelectedSkills(updatedListOfSelectedSkills);
    setSkills((prev) => [...prev, selectedSkill] as ISkills[]);
  };
  return (
    <FilterOptionsWrapper className="flex">
      <FilterSelect
        value={selectedDepartment}
        onChange={(e) => setSelectedDepartment(e.target.value)}
      >
        {departments.map((dept) => (
          <option value={dept.id}>{dept.name}</option>
        ))}
      </FilterSelect>
      <FilterSelect
        value={selectedRole}
        onChange={(e) => setSelectedRole(e.target.value)}
      >
        {roles.map((role) => (
          <option value={role.id}>{role.name}</option>
        ))}
      </FilterSelect>
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
