// src/pages/Seguridad.tsx
import { useOutletContext } from "react-router-dom";
import SideBar from '../components/seguridad/SideBar';

interface ContextType {
  darkMode: boolean;
}

export default function Seguridad() {
  const { darkMode } = useOutletContext<ContextType>();

  return (
    <div className="flex min-h-screen">
      <SideBar darkMode={darkMode} />
      <main className="flex-1 pt-[72px]">
        {/* tu contenido */}
      </main>
    </div>
  );
}
