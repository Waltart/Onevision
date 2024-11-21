import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import OneVisionAgency from "pages/OneVisionAgency";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "onevisionagency",
      element: <OneVisionAgency />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
