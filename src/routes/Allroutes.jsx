import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Rootlayout from "../layouts/Rootlayout";
import Home from "../pages/Homepage/Home";
import GenerateImage from "../pages/GenerateImagePage/GenerateImage";
import Authlayout from "../layouts/Authlayout";
import Login from "../pages/LoginPage/Login";
import Signup from "../pages/SignupPage/Signup";

const Allroutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Rootlayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/generate-image",
          element: <GenerateImage />,
        },
      ],
    },
    {
      path: "/",
      element: <Authlayout />,
      children: [
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/sign-up",
          element: <Signup />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Allroutes;
