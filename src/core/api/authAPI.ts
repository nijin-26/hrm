import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

// * REF: https://firebase.google.com/docs/reference/rest/auth

const authBaseURL = "https://identitytoolkit.googleapis.com/v1";
const authSignupURL = `/accounts:signUp?key=${process.env.REACT_APP_FIREBASE_API_KEY}`;
const authSignInURL = `/accounts:signInWithPassword?key=${process.env.REACT_APP_FIREBASE_API_KEY}`;

const API: AxiosInstance = axios.create({
  baseURL: authBaseURL,
  timeout: 120000,
});

export const signupUserWithEmail = async () => {
  return await API.post(authSignupURL, {
    email: "nijin@gmail.com",
    password: "nijin@123",
    returnSecureToken: true,
  });
};
