import { IFilterSelect } from "../../../core/interfaces/Common";
import { FilterSelectWrapper } from "./FilterSelect.style";
import { CSSProperties, useTheme } from "styled-components";

const FilterSelect = ({
  options,
  value,
  onChange,
  ...props
}: IFilterSelect) => {
  const theme = useTheme();

  const selectThemeStyle = {
    color: theme.primary,
  } as CSSProperties;

  return (
    <FilterSelectWrapper style={selectThemeStyle}>
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
