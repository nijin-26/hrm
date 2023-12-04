import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { onResponse, onResponseError } from "./responseInterceptor";
import { FirebaseData } from "../interfaces/APIDataInterface";

const API: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  timeout: 120000,
});

API.interceptors.response.use(
  onResponse as unknown as (
    value: AxiosResponse<any, any>
  ) => AxiosResponse<any, any> | Promise<AxiosResponse<any, any>>,
  onResponseError
);

export const getEmployeeData = (
  url: string,
  config?: AxiosRequestConfig
): Promise<FirebaseData> => {
  return API.get(url, config);
};

export const getEmployeeById = (
  url: string,
  config?: AxiosRequestConfig
): Promise<FirebaseData> => {
  return API.get(url, config);
};

// export const postData = (
//   url: string,
//   payload: object,
//   config?: AxiosRequestConfig
// ) => {
//   return API.post<FirebaseData>(url, payload, config);
// };

// * Used PUT method for posting a employee because direct posting is like pushing to firebase db, which generates a unique id, but here I need the 4 digit id I generated.
// ? Reference: https://firebase.google.com/docs/reference/rest/database
export const postEmployeeData = (
  url: string,
  payload: object,
  config?: AxiosRequestConfig
) => {
  return API.put<FirebaseData>(url, payload, config);
};

export const updateEmployeeData = (
  url: string,
  payload: object,
  config?: AxiosRequestConfig
) => {
  return API.put<FirebaseData>(url, payload, config);
};

export const deleteData = (
  url: string,
  config?: AxiosRequestConfig
): Promise<FirebaseData> => {
  return API.delete(url, config);
};

export default API;
