import { GlobalStyle } from "../../core/styles/global";
import useAuth from "../../core/hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const LoginLayout = () => {
  const { user } = useAuth(); // Custom Hook
  return (
    <>
      <GlobalStyle />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover
        theme="colored"
      />
      <h2 style={{ textAlign: "center", fontSize: "28px" }}>
        Welcome to HR Management   App
      </h2>
      {user.isAuthenticated ? <Navigate to="/" replace={true} /> : <Outlet />}
    </>
  );
};

export default LoginLayout;
