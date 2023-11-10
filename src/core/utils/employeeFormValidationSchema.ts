import * as Yup from "yup";

export const employeeFormValidationSchema = Yup.object().shape({
  id: Yup.string(),
  fullName: Yup.string().required("Full Name is required"),
  dateOfBirth: Yup.string().required("Date of Birth is required"),
  dateOfJoin: Yup.string().required("Date of Joining is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  mobile: Yup.string().required("Mobile number is required"),
  workLocation: Yup.string().required("Work Location is required"),
  imageURL: Yup.string(),
  department: Yup.string().required("Department is required"),
  role: Yup.string().required("Role is required"),
  skill: Yup.array().of(Yup.string()),
});
