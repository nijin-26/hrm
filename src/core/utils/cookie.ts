type TCookieName = "accessToken" | "refreshToken";

export const setCookie = (name: TCookieName, value: string) => {
  const cookieValue = encodeURIComponent(value);
  document.cookie = `${name}=${cookieValue}; path=/`;
};

export const getCookie = (name: TCookieName) => {
  const value = `; ${document.cookie}`;
  const parts: string[] = value?.split(`; ${name}=`) ?? [];
  if (parts && parts.length === 2) return parts?.pop()?.split(";")?.shift();
  return null;
};

export const removeCookie = (name: TCookieName) => {
  const pastExpirationDate = new Date(
    "Thu, 01 Jan 1970 00:00:00 UTC"
  ).toUTCString();
  document.cookie = `${name}=; expires=${pastExpirationDate}; path=/`;
};

// !:
// const setCookieWithExpirationFromJwt = (name: string, jwtToken: string) => {
//   const decodedToken: { exp?: number } = jwtDecode(jwtToken);

//   if (decodedToken.exp) {
//     const expirationDate = new Date(decodedToken.exp * 1000);

//     const expiresAttribute = `expires=${expirationDate.toUTCString()}`;

//     const cookieValue = encodeURIComponent(jwtToken);

//     document.cookie = `${name}=${cookieValue}; ${expiresAttribute}; path=/`;
//   } else {
//     console.error("JWT token doesn't contain 'exp' claim.");
//   }
// };
