import type { RouteObject } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Desarrollo from "../pages/Desarrollo";
import Seguridad from "../pages/Seguridad";
import Privacy from '../pages/legal/Privacy'
import Terms from '../pages/legal/Terms'

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />, 
    children: [
      { path: "", element: <Home /> },
      { path: "desarrollo", element: <Desarrollo /> },
      { path: "seguridad", element: <Seguridad /> },
      { path: "terms", element: <Terms /> },
{ path: "privacy", element: <Privacy /> },
    ],
  },
];

export default routes;
