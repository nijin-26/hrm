import { GlobalStyle } from "../../core/styles/global";
import useAuth from "../../core/hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";

const LoginLayout = () => {
  const { user } = useAuth(); // Custom Hook
  return (
    <>
      <GlobalStyle />
      {user.isAuthenticated ? <Navigate to="/" replace={true} /> : <Outlet />}
    </>
  );
};

export default LoginLayout;
