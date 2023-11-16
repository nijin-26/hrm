import NavBar from "../common/NavBar/NavBar";
import { GlobalStyle } from "../../core/styles/global";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Layout = () => {
  return (
    <div>
      <GlobalStyle />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover
        theme="colored"
      />
      <NavBar />
      <main className="container">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
