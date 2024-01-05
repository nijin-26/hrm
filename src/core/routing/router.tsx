import { Navigate, createBrowserRouter } from "react-router-dom";

// Components
import EmployeeListing from "../../pages/EmployeeListing/EmployeeListing";
import EmployeeForm from "../../pages/EmployeeForm/EmployeeForm";
import EmployeeView from "../../pages/EmployeeView/EmployeeView";
import ErrorPage from "./ErrorPage";
import Login from "../../pages/Auth/Login/Login";

// Layout Components
import Layout from "../../components/Layout/Layout";
import LoginLayout from "../../components/Layout/LoginLayout";

export const routes = createBrowserRouter(
  [
    {
      element: <LoginLayout />,
      children: [
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
    {
      element: <Layout />, // Protected Route
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <EmployeeListing />,
        },
        {
          path: "add",
          element: <EmployeeForm />,
        },
        {
          path: "edit/:id",
          element: <EmployeeForm />,
        },
        {
          path: "view/:id",
          element: <EmployeeView />,
        },
      ],
    },
    { path: "*", element: <Navigate to="/login" replace /> },
  ],
  { basename: "/" }
);
