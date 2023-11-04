import { useField } from "formik";
import { SelectWrapper } from "./Select.style";

const Select = ({ label, datas, placeholder, ...props }: any) => {
  const [field, meta] = useField(props);
  return (
    <SelectWrapper>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} autoComplete="off">
        <option value="" selected disabled>
          {placeholder}
        </option>
        {datas.map((data: any) => (
          <option key={data.id} value={data.id}>
            {data.name}
          </option>
        ))}
      </select>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </SelectWrapper>
  );
};
export default Select;
