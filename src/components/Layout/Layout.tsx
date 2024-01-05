import NavBar from "../common/NavBar/NavBar";
import { GlobalStyle } from "../../core/styles/global";
import { Navigate, Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ScrollToTop from "../common/ScrollToTopButton/ScrollToTopButton";
import useAuth from "../../core/hooks/useAuth";
import "react-toastify/dist/ReactToastify.css";

const Layout = () => {
  const { user } = useAuth(); // Custome Hook

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
        {user.isAuthenticated ? (
          <Outlet />
        ) : (
          <Navigate to={"/login"} replace={true} />
        )}  
      </main>
      <ScrollToTop />
    </div>
  );
};

export default Layout;
