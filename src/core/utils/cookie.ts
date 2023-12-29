import { jwtDecode } from "jwt-decode";

type TCookieName = "accessToken" | "refreshToken";

export function setCookie(name: TCookieName, value: string) {
  let decodedToken;
  let expiration;
  let cookieValue;

  if (name === "accessToken") {
    decodedToken = jwtDecode(value);
    expiration = new Date(0); // Start with Unix epoch

    if (decodedToken && decodedToken.exp) {
      expiration.setUTCSeconds(decodedToken.exp);
    }

    cookieValue =
      encodeURIComponent(value) +
      (decodedToken.exp ? `; expires=${expiration.toUTCString()}` : "");
  } else cookieValue = encodeURIComponent(value);

  document.cookie = `${name}=${cookieValue}; path=/`;
}

export const removeCookie = (name: TCookieName) => {
  const pastExpirationDate = new Date(
    "Thu, 01 Jan 1970 00:00:00 UTC"
  ).toUTCString();
  document.cookie = `${name}=; expires=${pastExpirationDate}; path=/`;
};

// *: Referenced from Boilerplate code.
export const getCookie = (name: TCookieName) => {
  const value = `; ${document.cookie}`;
  const parts: string[] = value?.split(`; ${name}=`) ?? [];
  if (parts && parts.length === 2) return parts?.pop()?.split(";")?.shift();
  return null;
};
