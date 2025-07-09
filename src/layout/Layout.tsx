import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Nav from "../components/Navbar";
import ContactModal from "../components/ContactoModal";
import { Toaster } from "react-hot-toast";
import Footer from "../components/footer/footer";
import DynamicBackground from "../components/backgrounds/DynamicBackground";
import useDarkMode from "../hooks/useDarkMode";

const Layout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [darkMode, setDarkMode] = useDarkMode();
  const location = useLocation();

  // Función para determinar tipo de fondo por ruta

  const getBackgroundType = (pathname: string): "gradient" | "geometric" => {
    const gradientRoutes = ["/desarrollo", "/terms", "/privacy"];
    return gradientRoutes.includes(pathname) ? "gradient" : "geometric";
  };

  const backgroundType = getBackgroundType(location.pathname);

  return (
    <div
      className={`flex flex-col min-h-screen w-full relative overflow-hidden ${
        darkMode ? "text-white" : "text-black"
      }`}
    >
      {/* Fondo dinámico según ruta */}
      <DynamicBackground type={backgroundType} darkMode={darkMode} />

      {/* Notificaciones */}
      <Toaster position="bottom-right" reverseOrder={false} />

      {/* Navbar y contenido */}
      <div className="relative z-10">
        <Nav
          setIsModalOpen={setIsModalOpen}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
        <main className="flex-1 pt-20 px-4 md:px-8">
          <Outlet />
        </main>
      </div>

      {/* Modal de contacto */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        darkMode={darkMode}
      />

      {/* Footer */}
      <Footer darkMode={darkMode} />
    </div>
  );
};

export default Layout;
