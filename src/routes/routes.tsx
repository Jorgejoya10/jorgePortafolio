// src/routes/routes.tsx
import type { RouteObject } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Desarrollo from "../pages/Desarrollo";
import Seguridad from "../pages/Seguridad";
import Standars from "../pages/seguridad/ISO/Standars";
import ISO7498 from "../pages/seguridad/ISO/ISO7498";
import ISO27000 from "../pages/seguridad/ISO/ISO27000";
import ISO27001 from "../components/ISO27000/ISO27001/Page";
import ISO27002 from "../components/ISO27000/ISO27002/Page";
import Cryptology from "../pages/seguridad/Cryptology/Cryptology";
import Cryptography from "../pages/seguridad/Cryptology/Cryptography";
import Steganography from "../pages/seguridad/Cryptology/Steganography";
import Protocols from "../pages/seguridad/Protocols";
import Privacy from "../pages/legal/Privacy";
import Terms from "../pages/legal/Terms";
import Enterprise from "../pages/Enterprise";
import Laboratorio from "../pages/lab/Laboratorio";

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
          { path: "ISO27001", element: <ISO27001 /> },
          { path: "ISO27002", element: <ISO27002 /> },
          { path: "Standars", element: <Standars /> },
          { path: "ISO27000", element: <ISO27000 /> },
          { path: "Cryptology", element: <Cryptology /> },
          { path: "Cryptography", element: <Cryptography /> },
          { path: "Steganography", element: <Steganography /> },
          { path: "Protocols", element: <Protocols /> },
          { path: "lab", element: <Laboratorio /> },
          { path: "lab/:algoId", element: <Laboratorio /> },
        ],
      },
      { path: "Terms", element: <Terms /> },
      { path: "Privacy", element: <Privacy /> },
      { path: "Enterprise", element: <Enterprise /> },
    ],
  },
];

export default routes;
