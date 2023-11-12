import { ChangeEvent, useEffect, useState } from "react";
import SearchSkill from "../../common/SearchSkill/SearchSkill";
import FilterSelect from "../../common/FilterSelect/FilterSelect";
import { FilterOptionsWrapper } from "./FilterOptions.style";
import { departments, roles } from "../../../core/constants";
import useSkills from "../../../core/hooks/useSkills";

import { MdFilterListOff } from "react-icons/md";
import { IFilterOptions } from "../../../core/interfaces/Common";
import { Tooltip } from "react-tooltip";
import { useAppContext } from "../../../core/store/AppContext";
import actionTypes from "../../../core/store/actionTypes";

const FilterOptions = ({ handleToggleFilter }: IFilterOptions) => {
  const { state, dispatch } = useAppContext();
  const { filter } = state;

  const {
    skills,
    selectedSkills,
    handleSelectedSkills,
    handleRemoveSelectedSkill,
    handleResetSkills,
  } = useSkills();

  useEffect(() => {
    dispatch({
      type: actionTypes.SET_FILTERS,
      payload: {
        name: skills,
        value: selectedSkills,
      },
    });
    dispatch({ type: actionTypes.FILTER_EMPLOYEES });
  }, [selectedSkills]);

  const handleFilterChange = (e: ChangeEvent) => {
    const target = e.target as HTMLSelectElement;
    dispatch({
      type: actionTypes.SET_FILTERS,
      payload: {
        name: target.name,
        value: target.value,
      },
    });
    dispatch({ type: actionTypes.FILTER_EMPLOYEES });
  };

  const handleClearFilters = () => {
    handleResetSkills();
  };

  return (
    <FilterOptionsWrapper className="flex">
      <FilterSelect
        name="department"
        options={departments}
        value={filter.department}
        onChange={handleFilterChange}
      />
      <FilterSelect
        name="role"
        options={roles}
        value={filter.role}
        onChange={handleFilterChange}
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
