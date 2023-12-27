import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

// * REF: https://firebase.google.com/docs/reference/rest/auth

const authBaseURL = "https://identitytoolkit.googleapis.com/v1";
const authSignupURL = `/accounts:signUp?key=${process.env.REACT_APP_FIREBASE_API_KEY}`;
const authSignInURL = `/accounts:signInWithPassword?key=${process.env.REACT_APP_FIREBASE_API_KEY}`;

const refreshTokenBaseURL = "https://securetoken.googleapis.com/v1";
const refreshTokenURL = `/token?key=${process.env.REACT_APP_FIREBASE_API_KEY}`;

const API: AxiosInstance = axios.create({
  baseURL: authBaseURL,
  timeout: 120000,
});

// Create Axios instance for Refresh Token API
const refreshTokenAPI: AxiosInstance = axios.create({
  baseURL: refreshTokenBaseURL,
  timeout: 120000,
});

type TAuthData = {
  email: string;
  password: string;
  returnSecureToken?: boolean;
};

export const signUpUserWithEmail = async (authData: TAuthData) => {
  return await API.post(authSignupURL, authData);
};

export const signInUserWithEmail = async (authData: TAuthData) => {
  return await API.post(authSignInURL, authData);
};

export const refreshAccessToken = async (currentRefreshToken: string) => {
  return await refreshTokenAPI.post(refreshTokenURL, {
    grant_type: "refresh_token",
    refresh_token: currentRefreshToken,
  });
};

export default API;
