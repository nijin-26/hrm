import { ReactNode } from "react";
import NavBar from "../common/NavBar/NavBar";
import { GlobalStyle } from "../../core/styles/global";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <GlobalStyle />
      <NavBar />
      <main className="container">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
