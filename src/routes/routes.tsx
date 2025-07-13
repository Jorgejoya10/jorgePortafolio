import type { RouteObject } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Desarrollo from "../pages/Desarrollo";
import Seguridad from "../pages/Seguridad";
import ISO from "../pages/seguridad/ISO";
import Cryptography from "../pages/seguridad/Cryptography";
import Protocols from "../pages/seguridad/Protocols";
import Privacy from "../pages/legal/Privacy";
import Terms from "../pages/legal/Terms";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "development", element: <Desarrollo /> },
      {
        path: "security",
        element: <Seguridad />,
        children: [
          { path: "ISO", element: <ISO /> },
          { path: "Cryptography", element: <Cryptography /> },
          { path: "Protocols", element: <Protocols /> },
        ],
      },
      { path: "terms", element: <Terms /> },
      { path: "privacy", element: <Privacy /> },
    ],
  },
];

export default routes;
