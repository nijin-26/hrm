import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

import { signInUserWithEmail } from "../api/authAPI";
import { loginUser, logoutUser } from "../store/reducers/authReducer";
import { IAppContextState } from "../interfaces/AppContextInterface";
import { cookies } from "../utils/cookie";

type TDecodedToken = {
  exp: number;
  email: string;
};

const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Redux
  const dispatch = useDispatch();
  const user = useSelector((state: IAppContextState) => state.auth.user);

  useEffect(() => {
    const accessToken = cookies.get("accessToken");
    if (accessToken) {
      const decodedToken: TDecodedToken = jwtDecode(accessToken); // jwt-decode npm package

      const currentTime = Math.floor(Date.now() / 1000);

      // Check token expiry
      if (decodedToken && decodedToken.exp! < currentTime) {
        logout(); //If token expired, clear cookie and logout user
      } else dispatch(loginUser(decodedToken.email)); // If token isn't expired.
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
        cookies.set("accessToken", accessToken, { path: "/" });
        cookies.set("refreshToken", refreshToken, { path: "/" });
        const decodedToken: TDecodedToken = jwtDecode(accessToken); // jwt-decode npm package
        dispatch(loginUser(decodedToken.email));
        toast.success("Welcome Back.");
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
    cookies.remove("accessToken");
    cookies.remove("refreshToken");
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
