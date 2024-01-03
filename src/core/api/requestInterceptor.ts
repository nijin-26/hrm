import { AxiosError, AxiosRequestConfig } from "axios";
import { cookies } from "../utils/cookie";

export const onRequest = (config: AxiosRequestConfig) => {
  // !: Bearer token method is not applicable for firebase.
  // const headers = token ? { Authorization: `Bearer ${token}` } : {};

  //*Ref: (Authenticate with ID/Access token)[https://firebase.google.com/docs/database/rest/auth#authenticate_with_an_id_token]

  const accessToken = cookies.get("accessToken");

  // If url already contains params then add '&' else use '?'
  const separator = config.url && config.url.includes("?") ? "&" : "?";

  // Add the auth query parameter to the URL
  if (config.url && config.url.includes("?auth=")) {
    // Replace the existing value with the new access token
    config.url = config.url.replace(
      /\?auth=.*?(&|$)/, //regex
      `${separator}auth=${accessToken}`
    );
  } else {
    config.url += `${separator}auth=${accessToken}`;
  }

  config.headers = {
    "Content-Type": "application/json",
    ...config.headers,
  };
  return config;
};

export const onRequestError = (error: AxiosError): Promise<AxiosError> =>
  Promise.reject(error);
