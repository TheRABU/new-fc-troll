import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Rootlayout from "../layouts/Rootlayout";
import Home from "../pages/Homepage/Home";
import GenerateImage from "../pages/GenerateImagePage/GenerateImage";

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
  ]);
  return <RouterProvider router={router} />;
};

export default Allroutes;
