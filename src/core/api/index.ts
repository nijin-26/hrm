import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { onResponse, onResponseError } from "./responseInterceptor";
import { FirebaseData } from "../interfaces/APIDataInterface";
import { onRequest, onRequestError } from "./requestInterceptor";
import { IEmployeeDetails } from "../interfaces/Common";

const API: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  timeout: 120000,
});

API.interceptors.request.use(
  onRequest as unknown as (
    value: InternalAxiosRequestConfig<any>
  ) =>
    | InternalAxiosRequestConfig<any>
    | Promise<InternalAxiosRequestConfig<any>>,
  onRequestError
);

API.interceptors.response.use(
  onResponse as unknown as (
    value: AxiosResponse<any, any>
  ) => AxiosResponse<any, any> | Promise<AxiosResponse<any, any>>,
  onResponseError
);

export const getEmployeeData = (): Promise<FirebaseData> => {
  return API.get("/.json");
};

export const getEmployeeById = (employeeId: string): Promise<FirebaseData> => {
  return API.get(`/employee/${employeeId}.json`);
};

type IEmployee = {
  [id: string]: {
    [id: string]: string;
  };
};

export const getEmployeeByEmail = (email: string): Promise<IEmployee> => {
  return API.get(`/employee/.json?orderBy="email"&equalTo="${email}"`);
};

// * Used PUT method for posting a employee because direct posting is like pushing to firebase db, which generates a unique id, but here I need the 4 digit id I generated.
// ? Reference: https://firebase.google.com/docs/reference/rest/database
export const postEmployeeData = (
  empId: string,
  employeeData: IEmployeeDetails
) => {
  return API.put<FirebaseData>(`/employee/${empId}.json`, employeeData);
};

export const updateEmployeeData = (
  empId: string,
  employeeData: IEmployeeDetails
) => {
  return API.put<FirebaseData>(`/employee/${empId}.json`, employeeData);
};

export const deleteData = (employeeId: string): Promise<FirebaseData> => {
  return API.delete(`/employee/${employeeId}.json`);
};

export default API;
