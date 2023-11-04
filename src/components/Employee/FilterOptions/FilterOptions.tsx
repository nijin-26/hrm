import { useState } from "react";
import SearchSkill from "../../common/SearchSkill/SearchSkill";
import FilterSelect from "../../common/FilterSelect/FilterSelect";
import { FilterOptionsWrapper } from "./FilterOptions.style";
import { departments, roles } from "../../../core/constants";
import useSkills from "../../../core/hooks/useSkills";

const FilterOptions = () => {
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedRole, setSelectedRole] = useState("");

  const {
    skills,
    selectedSkills,
    handleSelectedSkills,
    handleRemoveSelectedSkill,
  } = useSkills();

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
