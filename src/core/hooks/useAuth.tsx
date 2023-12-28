import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
// import { useCookies } from "react-cookie";
import { jwtDecode } from "jwt-decode";

import { signInUserWithEmail } from "../api/authAPI";
import { loginUser, logoutUser } from "../store/reducers/authReducer";
import { IAppContextState } from "../interfaces/AppContextInterface";
import { getCookie, removeCookie, setCookie } from "../utils/cookie";

const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Redux
  const dispatch = useDispatch();
  const user = useSelector((state: IAppContextState) => state.auth.user);

  // ! Currently, avoided react-cookie package since I am not implementing intereceptors in react component or hook.
  // const [cookies, setCookie, removeCookie] = useCookies(["accessToken"]); // Ref: https://www.npmjs.com/package/react-cookie

  useEffect(() => {
    const accessToken = getCookie("accessToken");
    if (accessToken) {
      dispatch(loginUser());

      const decodedToken = jwtDecode(accessToken); // jwt-decode npm package
      const currentTime = Math.floor(Date.now() / 1000);

      // Check token expiry
      if (decodedToken && decodedToken.exp! < currentTime) {
        logout(); //If token expired, clear cookie and logout user
      }
    }
  }, []);

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      const authResponse = await signInUserWithEmail({
        email,
        password,
        returnSecureToken: true,
      });

      if (authResponse) {
        console.log(authResponse, "auth response");
        const accessToken = authResponse.data.idToken; // JWT Access Token
        const refreshToken = authResponse.data.refreshToken;
        setCookie("accessToken", accessToken);
        setCookie("refreshToken", refreshToken);
        dispatch(loginUser());
        toast.success("Welcome. You are succesfully logged in.");
        navigate("/");
        setLoading(false);
      }
    } catch (error: any) {
      if (error.response.data.error.message === "INVALID_LOGIN_CREDENTIALS") {
        toast.error("Invalid login credentials. Try Again");
      } else {
        toast.error("Error Login. Try Again");
        console.log(error, "Login Error");
      }
      setLoading(false);
    }
  };

  const logout = () => {
    removeCookie("accessToken");
    removeCookie("refreshToken");
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
