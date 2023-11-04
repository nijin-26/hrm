import { ReactNode } from "react";
import NavBar from "../common/NavBar/NavBar";
import { GlobalStyle } from "../../core/styles/global";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <GlobalStyle />
      <NavBar />
      <main className="container">{children}</main>
    </div>
  );
};

export default Layout;
