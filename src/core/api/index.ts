import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { onRequest, onRequestError } from "./requestInterceptor";
import { onResponse, onResponseError } from "./responseInterceptor";
import { FirebaseData } from "../interfaces/APIDataInterface";

const API = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT,
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

export const getData = (
  url: string,
  config?: AxiosRequestConfig
): Promise<FirebaseData> => {
  return API.get(url, config);
};

export const postData = (
  url: string,
  payload: object,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<FirebaseData>> => {
  return API.post<FirebaseData>(url, payload, config);
};

export const updateData = (
  url: string,
  payload: object,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<FirebaseData>> => {
  return API.put<FirebaseData>(url, payload, config);
};

export const deleteData = (
  url: string,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<FirebaseData>> => {
  return API.delete<FirebaseData>(url, config);
};

export default API;
