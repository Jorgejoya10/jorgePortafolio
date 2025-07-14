import { useOutletContext, Outlet, useLocation } from "react-router-dom";
import SideBar from "../components/seguridad/SideBar";
import SecurityLanding from "./seguridad/SecurityLanding";

interface ContextType {
  darkMode: boolean;
}

export default function Seguridad() {
  const { darkMode } = useOutletContext<ContextType>();
  const location = useLocation();

  const isRootSecurityPath = location.pathname === "/security";

  return (
    <div className="flex min-h-screen">
      <SideBar darkMode={darkMode} />
      <main className="flex-1 pt-[10px] pl-10 px-4 transition-all duration-300">
        {isRootSecurityPath ? <SecurityLanding /> : <Outlet />}
      </main>
    </div>
  );
}
