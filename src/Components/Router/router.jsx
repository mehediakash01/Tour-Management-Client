import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../../Pages/Home/Home";
import Login from "../../Auth/AuthLayout/Login";
import Register from "../../Auth/AuthLayout/Register";
import ErrorPage from "../../Pages/Error/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import MyBookings from "../MyBookings/MyBookings";
import AllPackage from "../../Pages/AllPackage/AllPackage";
import PackageDetails from "../../Pages/PackageDetails/PackageDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    Component: Root,
    children: [
      { index: true, Component: Home },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "allPackage",
        loader: () => fetch("http://localhost:3000/allPackage"),
        Component: AllPackage,
      },
      {
        path: "package/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/allPackage/${params.id}`),
        element: (
          <PrivateRoute>
            <PackageDetails> </PackageDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "my-bookings",
        element: (
          <PrivateRoute>
            <MyBookings></MyBookings>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
