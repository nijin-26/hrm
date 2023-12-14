import * as Yup from "yup";

export const loginFormValidationSchema = Yup.object().shape({
  name: Yup.string()
    .email("Invalid email address.")
    .required("User name is required."),
  password: Yup.string()
    .min(8, "Password must be 8 characters long")
    .matches(/[0-9]/, "Password requires a number")
    .matches(/[a-z]/, "Password requires a lowercase letter")
    .matches(/[A-Z]/, "Password requires an uppercase letter")
    .matches(/[^\w]/, "Password requires a symbol")
    .required("Password is required"),
});
