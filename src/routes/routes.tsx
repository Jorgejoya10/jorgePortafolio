import type { RouteObject } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Desarrollo from "../pages/Desarrollo";
import Seguridad from "../pages/Seguridad";
import Standars from "../pages/seguridad/ISO/Standars";
import ISO7498 from "../pages/seguridad/ISO/ISO7498";
import ISO27000 from "../pages/seguridad/ISO/ISO27000";
import Cryptology from "../pages/seguridad/Cryptology/Cryptology";
import Cryptography from "../pages/seguridad/Cryptology/Cryptography";
import Steganography from "../pages/seguridad/Cryptology/Steganography";
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
          { path: "ISO7498-2", element: <ISO7498 /> },
          { path: "Standars", element: <Standars /> },
          { path: "ISO27000", element: <ISO27000 /> },
          { path: "Cryptology", element: <Cryptology /> },
          { path: "Cryptography", element: <Cryptography /> },
          { path: "Steganography", element: <Steganography /> },
          { path: "Protocols", element: <Protocols /> },
        ],
      },
      { path: "terms", element: <Terms /> },
      { path: "privacy", element: <Privacy /> },
    ],
  },
];

export default routes;
