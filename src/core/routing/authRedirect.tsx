import { useLocation, Navigate } from "react-router-dom";
import { AuthKey, routingConfig } from "./routerConfig.ts";

export function RequireAuth({ children }: { children: JSX.Element }) {
  let location = useLocation();

  const isLoggedIn = localStorage.getItem('auth')

  if (!isLoggedIn) {
    return (
      <Navigate
        to={routingConfig.defaultRedirect}
        state={{ from: location }}
        replace
      />
    );
  }

  return children;
}
