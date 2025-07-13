// src/pages/Seguridad.tsx
import { useOutletContext, Outlet } from "react-router-dom";
import SideBar from "../components/seguridad/SideBar";

interface ContextType {
  darkMode: boolean;
}

export default function Seguridad() {
  const { darkMode } = useOutletContext<ContextType>();

  return (
    <div className="flex min-h-screen">
      <SideBar darkMode={darkMode} />
      <main className="flex-1 pt-[10px] pl-10 px-4 transition-all duration-300">
        <Outlet />
      </main>
    </div>
  );
}
