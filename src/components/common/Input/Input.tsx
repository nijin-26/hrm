import { FieldHookConfig, FormikProps, useField } from "formik";
import { InputWrapper } from "./Input.style";
import { IEmployeeDetails } from "../../../core/interfaces/Common";

const Input = ({ label, ...props }: any) => {
  const [field, meta] = useField(props);

  return (
    <InputWrapper>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </InputWrapper>
  );
};

export default Input;
