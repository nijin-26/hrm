import { AxiosError, AxiosResponse } from "axios";
import { getCookie, setCookie } from "../utils/cookie";
import { refreshAccessToken } from "./authAPI";
import API from ".";

enum HTTP_STATUS {
  SUCCESS = 200,
  BAD_REQUEST = 400,
  NOT_FOUND = 404,
  FORBIDDEN = 403,
  SERVER_ERROR = 500,
  UNAUTHORIZED = 401,
}

export async function onResponseError(error: AxiosError): Promise<AxiosError> {
  if (error.response?.status === HTTP_STATUS.SERVER_ERROR) {
    return Promise.reject(error.response.data);
  } else if (error.response?.status === HTTP_STATUS.UNAUTHORIZED) {
    // Get new access token with refresh token.
    const { config } = error;
    const currRefreshToken = getCookie("refreshToken");
    const updatedTokensResponse = await refreshAccessToken(currRefreshToken!);
    if (updatedTokensResponse) {
      setCookie("accessToken", updatedTokensResponse.data.access_token);
      setCookie("refreshToken", updatedTokensResponse.data.refresh_token);
      return API(config!);
    } else return Promise.reject(error.response);
  } else return Promise.reject(error.response);
}

export function onResponse(response: AxiosResponse) {
  if (response.status === HTTP_STATUS.SUCCESS) {
    return Promise.resolve(response.data);
  }
}
