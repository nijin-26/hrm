import { createBrowserRouter } from "react-router-dom";
import EmployeeListing from "../../pages/EmployeeListing/EmployeeListing";
import EmployeeForm from "../../pages/EmployeeForm/EmployeeForm";
import EmployeeView from "../../pages/EmployeeView/EmployeeView";
import ErrorPage from "./ErrorPage";
import Layout from "../../components/Layout/Layout";

export const routes = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <EmployeeListing />,
      },
      {
        path: "/add",
        element: <EmployeeForm />,
      },
      {
        path: "/edit/:id",
        element: <EmployeeForm />,
      },
      {
        path: "/view/:id",
        element: <EmployeeView />,
      },
    ],
  },
]);
