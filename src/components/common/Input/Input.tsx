import { useField } from "formik";
import { InputWrapper } from "./Input.style";

const Input = ({ label, ...props }: any) => {
  const [field, meta] = useField(props);

  return (
    <InputWrapper>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />

      {meta.touched && meta.error ? (
        <span className="error">{meta.error}</span>
      ) : (
        <span className="errorPlaceHolder">Error Placeholder</span>
      )}
    </InputWrapper>
  );
};

export default Input;
