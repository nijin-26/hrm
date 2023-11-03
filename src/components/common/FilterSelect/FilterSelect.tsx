import { IFilterSelect } from "../../../core/interfaces/interfaces";

const FilterSelect = ({
  options,
  value,
  onChange,
  ...props
}: IFilterSelect) => {
  return (
    <select value={value} onChange={onChange} {...props}>
      {options.map((option) => (
        <option key={option.id} value={option.id}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default FilterSelect;
