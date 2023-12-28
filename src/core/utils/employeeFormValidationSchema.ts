import * as Yup from "yup";

export const employeeFormValidationSchema = (mode: string) => {
  const validationObj = {
    id: Yup.string(),
    fullName: Yup.string().required("Full Name is required"),
    dateOfBirth: Yup.string().required("Date of Birth is required"),
    dateOfJoin: Yup.string().required("Date of Joining is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),

    mobile: Yup.string()
      .required("Mobile number is required")
      .matches(/^[0-9]+$/, "Mobile number must only contain digits")
      .min(10, "Mobile number must be at least 10 digits")
      .max(10, "Mobile number must not exceed 10 digits"),
    workLocation: Yup.string().required("Work Location is required"),
    imageURL: Yup.string(),
    department: Yup.string().required("Department is required"),
    role: Yup.string().required("Role is required"),
    skill: Yup.array().of(Yup.string()),
  };
  console.log(mode, "schemaa");
  if (mode !== "edit")
    return Yup.object().shape({
      ...validationObj,
      password: Yup.string().required("Temporary password is required"),
    });
  else return Yup.object().shape(validationObj);
};
