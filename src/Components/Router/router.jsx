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
import AboutUs from "../../Pages/AboutUs/AboutUs";
import AddPackage from "../../Pages/AddPackage/AddPackage";
import ManagePackage from "../../Pages/ManagePackage/ManagePackage";
import UpdatePackage from "../../Pages/ManagePackage/UpdatePackage";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    Component: Root,
    children: [
      { index: true, 
        loader:()=>fetch('https://tour-package-booking-management-server-qysjrbna2.vercel.app/limitedPackages'),
        Component: Home },
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
        // loader: () => fetch("https://tour-package-booking-management-server-qysjrbna2.vercel.app/allPackage"),
        Component: AllPackage,
      },
      {
        path: "package/:id",
        // loader: ({ params }) =>
        //   fetch(`https://tour-package-booking-management-server-qysjrbna2.vercel.app/allPackage/${params.id}`),
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
      {
        path: "add-package",
        element: (
          <PrivateRoute>
            <AddPackage></AddPackage>
          </PrivateRoute>
        ),
      },
      {
        path: "managePackage",
        element: (
          <PrivateRoute>
           <ManagePackage></ManagePackage>
          </PrivateRoute>
        ),
      },
      {
        path:'about-us',
        Component: AboutUs
      },
      {
        path:'update/:id',
        loader: ({params})=>fetch(`https://tour-package-booking-management-server-qysjrbna2.vercel.app/allPackage/${params.id}`),
        Component: UpdatePackage
      },
    ],
  },
]);
