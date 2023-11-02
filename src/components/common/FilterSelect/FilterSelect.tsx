import { IFilterSelect } from "../../../core/interfaces/interfaces";

const FilterSelect = ({
  value,
  onChange,
  children,
  ...props
}: IFilterSelect) => {
  return (
    <select value={value} onChange={onChange} {...props}>
      {children}
    </select>
  );
};

export default FilterSelect;
