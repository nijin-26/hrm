import { useCookies } from "react-cookie";
import { refreshAccessToken } from "../api/authAPI";

const useRefreshToken = () => {
  const [cookies, setCookie] = useCookies(["accessToken", "refreshToken"]);

  const refresh = async () => {
    const response = await refreshAccessToken(cookies.refreshToken);
    console.log(response, "refresh response");
    // return response.data.accessToken;
  };

  return refresh;
};

export default useRefreshToken;
