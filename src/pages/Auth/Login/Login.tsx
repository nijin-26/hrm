import styles from "./Login.module.scss";
import { Formik, Form } from "formik";
import Input from "../../../components/common/Input/Input";
import Button from "../../../components/common/Button/Button";
import { loginFormValidationSchema } from "../../../core/utils/loginFormValidationSchema";

import useAuth from "../../../core/hooks/useAuth";

const Login = () => {
  const { loading, login } = useAuth();

  const initialValues = {
    email: "",
    password: "",
  };

  const handleLogin = async (values: { email: string; password: string }) => {
    login(values.email, values.password);
  };

  return (
    <div className={styles.container}>
      <h2>Employee Login</h2>
      <Formik
        initialValues={initialValues}
        validateOnChange={false}
        // validationSchema={loginFormValidationSchema}

        onSubmit={handleLogin}
      >
        <Form className={styles.formContainer}>
          <Input
            label="User Name"
            name="email"
            type="text"
            placeholder="Enter user name (admin@qb.com)" // For testing purpose
          />
          <Input
            label="Password"
            name="password"
            type="password"
            placeholder="Enter Password (admin@123)" // For testing purpose
          />

          <div className={styles.button}>
            <Button
              type="submit"
              btnType={loading ? "disabled" : "primary"}
              loading={loading}
            >
              Login
            </Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
