import { privateRoute } from "./privateRoutes";
import { publicRoute } from "./publicRoutes";

export const routingConfig = {
  private: privateRoute,
  public: publicRoute,
  defaultRedirect: "/",
};

export const AuthKey = "AccessToken";
