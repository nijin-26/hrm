import { IFilterSelect } from "../../../core/interfaces/interfaces";
import { FilterSelectWrapper } from "./FilterSelect.style";

const FilterSelect = ({
  options,
  value,
  onChange,
  ...props
}: IFilterSelect) => {
  return (
    <FilterSelectWrapper>
      <select value={value} onChange={onChange} {...props}>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </FilterSelectWrapper>
  );
};

export default FilterSelect;
