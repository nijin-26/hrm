import { AxiosError, AxiosRequestConfig } from "axios";
import { getCookie } from "../utils/cookie";

export const onRequest = (config: AxiosRequestConfig) => {
  // !: Bearer token method is not working for firebase.
  // const headers = token ? { Authorization: `Bearer ${token}` } : {};

  //*Ref: (Authenticate with ID/Access token)[https://firebase.google.com/docs/database/rest/auth#authenticate_with_an_id_token]

  const accessToken = getCookie("accessToken");

  // Add the auth query parameter to the URL
  if (config.url && config.url.includes("?auth=")) {
    // Replace the existing value with the new access token
    config.url = config.url.replace(
      /\?auth=.*?(&|$)/, //regex
      `?auth=${accessToken}$1`
    );
  } else {
    if (config.url && !config.url.includes("?auth")) {
      config.url += `?auth=${accessToken}`;
    }
  }

  config.headers = {
    "Content-Type": "application/json",
    ...config.headers,
    // ...headers,
  };
  return config;
};

export const onRequestError = (error: AxiosError): Promise<AxiosError> =>
  Promise.reject(error);
