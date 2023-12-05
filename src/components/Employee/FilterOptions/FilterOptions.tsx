import { ChangeEvent, useEffect } from "react";
import SearchSkill from "../../common/SearchSkill/SearchSkill";
import FilterSelect from "../../common/FilterSelect/FilterSelect";
import { FilterOptionsWrapper } from "./FilterOptions.styles";
import useSkills from "../../../core/hooks/useSkills";

import { MdFilterListOff } from "react-icons/md";
import { IFilterOptions } from "../../../core/interfaces/Common";
import { Tooltip } from "react-tooltip";
import SelectedSkills from "../../common/SelectedSkills/SelectedSkills";

// Store
import { IAppContextState } from "../../../core/interfaces/AppContextInterface";
import actionTypes from "../../../core/context/actionTypes";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";

const FilterOptions = ({ departments, roles }: IFilterOptions) => {
  const state = useSelector((state: IAppContextState) => state);
  const dispatch = useDispatch<Dispatch>();
  const { filterSort } = state;

  const {
    skills,
    selectedSkills,
    searchInput,
    handleInput,
    handleSelectedSkills,
    handleRemoveSelectedSkill,
    handleResetSkills,
  } = useSkills();

  useEffect(() => {
    // Store selected skills in Global Store for filtering employees.
    dispatch({
      type: actionTypes.SET_FILTERS,
      payload: {
        name: "skills",
        value: selectedSkills,
      },
    });
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
  };

  const handleClearFilters = () => {
    handleResetSkills();
    dispatch({ type: actionTypes.RESET_FILTERS });
  };

  return (
    <div>
      <FilterOptionsWrapper className="flex">
        <FilterSelect
          placeholder="Department"
          name="department"
          options={departments}
          value={filterSort.department}
          onChange={handleFilterChange}
        />
        <FilterSelect
          placeholder="Role"
          name="role"
          options={roles}
          value={filterSort.role}
          onChange={handleFilterChange}
        />

        <div className="skillWrapper">
          <SearchSkill
            placeholder="Search by skills"
            searchInput={searchInput}
            handleInput={handleInput}
            listOfSkills={skills}
            handleSelectedSkills={handleSelectedSkills}
          />
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
        </div>
      </FilterOptionsWrapper>
      <SelectedSkills
        selectedSkills={selectedSkills}
        removeSelectedSkill={handleRemoveSelectedSkill}
      />
    </div>
  );
};

export default FilterOptions;
