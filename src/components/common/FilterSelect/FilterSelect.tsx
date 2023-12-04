import { IFilterSelect } from "../../../core/interfaces/Common";
import { FilterSelectWrapper } from "./FilterSelect.styles";
import { CSSProperties, useTheme } from "styled-components";

const FilterSelect = ({
  placeholder,
  options,
  value,
  onChange,
  name,
  ...props
}: IFilterSelect) => {
  const theme = useTheme();

  const selectThemeStyle = {
    color: theme.primary,
  } as CSSProperties;

  return (
    <FilterSelectWrapper style={selectThemeStyle}>
      <select
        autoComplete="off"
        value={value}
        name={name}
        onChange={onChange}
        {...props}
      >
        <option value="" selected>
          {placeholder}
        </option>
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
