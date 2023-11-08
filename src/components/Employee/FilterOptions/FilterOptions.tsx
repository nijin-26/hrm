import { useState } from "react";
import SearchSkill from "../../common/SearchSkill/SearchSkill";
import FilterSelect from "../../common/FilterSelect/FilterSelect";
import { FilterOptionsWrapper } from "./FilterOptions.style";
import { departments, roles } from "../../../core/constants";
import useSkills from "../../../core/hooks/useSkills";

import { MdFilterListOff } from "react-icons/md";
import { IFilterOptions } from "../../../core/interfaces/interfaces";
import { Tooltip } from "react-tooltip";

const FilterOptions = ({ handleToggleFilter }: IFilterOptions) => {
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedRole, setSelectedRole] = useState("");

  const {
    skills,
    selectedSkills,
    handleSelectedSkills,
    handleRemoveSelectedSkill,
    handleResetSkills,
  } = useSkills();

  const handleClearFilters = () => {
    handleResetSkills();
    setSelectedDepartment("");
    setSelectedRole("");
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
      <div className="skillWrapper">
        <SearchSkill
          position="inside"
          placeholder="Search by skills"
          listOfSkills={skills}
          selectedSkills={selectedSkills}
          handleSelectedSkills={handleSelectedSkills}
          removeSelectedSkill={handleRemoveSelectedSkill}
        />
      </div>

      <MdFilterListOff
        className="clear-filter"
        size={36}
        onClick={handleClearFilters}
      />
      <Tooltip
        anchorSelect=".clear-filter"
        content="Clear All Filters"
        place="right"
        variant="info"
      />
    </FilterOptionsWrapper>
  );
};

export default FilterOptions;
