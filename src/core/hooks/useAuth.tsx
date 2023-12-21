import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

import { useCookies } from "react-cookie";
import API, { signInUserWithEmail } from "../api/authAPI";
import { loginUser, logoutUser } from "../store/reducers/authReducer";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { IAppContextState } from "../interfaces/AppContextInterface";

const useAuth = () => {
  const [loading, setLoading] = useState(false);

  // Redux
  const dispatch = useDispatch();
  const user = useSelector((state: IAppContextState) => state.auth.user);

  const [cookies, setCookie, removeCookie] = useCookies(["authToken"]);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("use effect called", cookies, dispatch);
    const authToken = cookies.authToken;

    if (authToken) {
      dispatch(loginUser());

      const decodedToken = decodeToken(authToken);
      const currentTime = Math.floor(Date.now() / 1000);

      if (decodedToken && decodedToken.exp < currentTime) {
        logout();
      }
    }
  }, [cookies.authToken, dispatch]);

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      const authResponse = await signInUserWithEmail({ email, password });

      if (authResponse) {
        const authToken = authResponse.data.localId;
        dispatch(loginUser());
        setCookie("authToken", authToken, { path: "/" });
        toast.success("Welcome. You are succesfully logged in.");
        navigate("/");
        setLoading(false);
      }
    } catch (error: any) {
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
    removeCookie("authToken", { path: "/" });
    dispatch(logoutUser());
  };

  // useEffect(() => {
  //   const interceptor = API.interceptors.response.use(
  //     (response) => response,
  //     (error) => {
  //       if (error.response.status === 401) {
  //         console.log("Unauthorized");
  //         logout();
  //       }
  //       return Promise.reject(error);
  //     }
  //   );

  //   return () => {
  //     API.interceptors.response.eject(interceptor);
  //   };
  // }, [logout]);

  return {
    user,
    loading,
    login,
    logout,
  };
};

const decodeToken = (token: string) => {
  try {
    return JSON.parse(atob(token.split(".")[1]));
  } catch (error) {
    return null;
  }
};

export default useAuth;
