import * as Yup from "yup";

import styles from "./Login.module.scss";
import { Formik, Form } from "formik";
import Input from "../../../components/common/Input/Input";
import Button from "../../../components/common/Button/Button";
import { loginFormValidationSchema } from "../../../core/utils/loginFormValidationSchema";

const Login = () => {
  const initialValues = {
    name: "",
    password: "",
  };

  const handleLogin = (values: { name: string; password: string }) => {
    console.log(values, "values");
  };

  return (
    <div className={styles.container}>
      <h2>Employee Login</h2>
      <Formik
        initialValues={initialValues}
        validateOnChange={false}
        validationSchema={loginFormValidationSchema}
        onSubmit={handleLogin}
      >
        <Form className={styles.formContainer}>
          <Input
            label="User Name"
            name="name"
            type="text"
            placeholder="Enter user name"
          />
          <Input
            label="Password"
            name="password"
            type="password"
            placeholder="Enter Password"
          />
          <div className={styles.button}>
            <Button type="submit">Login</Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
