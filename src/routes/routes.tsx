import type { RouteObject } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Desarrollo from "../pages/Desarrollo";
import Seguridad from "../pages/Seguridad";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />, 
    children: [
      { path: "", element: <Home /> },
      { path: "desarrollo", element: <Desarrollo /> },
      { path: "seguridad", element: <Seguridad /> },
    ],
  },
];

export default routes;
