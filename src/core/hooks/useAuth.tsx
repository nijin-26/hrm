import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { jwtDecode } from "jwt-decode";

import { signInUserWithEmail } from "../api/authAPI";
import { loginUser, logoutUser } from "../store/reducers/authReducer";
import { IAppContextState } from "../interfaces/AppContextInterface";

const useAuth = () => {
  const [loading, setLoading] = useState(false);

  // Redux
  const dispatch = useDispatch();
  const user = useSelector((state: IAppContextState) => state.auth.user);

  const [cookies, setCookie, removeCookie] = useCookies(["accessToken"]); // Ref: https://www.npmjs.com/package/react-cookie
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = cookies.accessToken;
    if (accessToken) {
      dispatch(loginUser());

      const decodedToken = jwtDecode(accessToken); // jwt-decode npm package
      const currentTime = Math.floor(Date.now() / 1000);

      // Check token expiry
      if (decodedToken && decodedToken.exp! < currentTime) {
        logout();
      }
    }
  }, [cookies.accessToken, dispatch]);

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      const authResponse = await signInUserWithEmail({ email, password });

      if (authResponse) {
        console.log(authResponse, "auth response");
        const accessToken = authResponse.data.idToken; // JWT Access Token
        dispatch(loginUser());
        setCookie("accessToken", accessToken, { path: "/" });
        toast.success("Welcome. You are succesfully logged in.");
        navigate("/");
        setLoading(false);
      }
    } catch (error: any) {
      console.log(error.response.data.error.message);
      setLoading(false);
      if (error.response.data.error.message === "INVALID_LOGIN_CREDENTIALS")
        toast.error("Invalid login credentials. Try Again");
      else {
        toast.error("Error Login. Try Again");
        console.log(error, "Login Error");
      }
    }
  };

  const logout = () => {
    removeCookie("accessToken", { path: "/" });
    dispatch(logoutUser());
  };

  return {
    user,
    loading,
    login,
    logout,
  };
};

export default useAuth;
