import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../../Pages/Home/Home";
import Login from "../../Auth/AuthLayout/Login";
import Register from "../../Auth/AuthLayout/Register";

export const router = createBrowserRouter([
  {
    path: "/",
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
    ],
  },
]);
