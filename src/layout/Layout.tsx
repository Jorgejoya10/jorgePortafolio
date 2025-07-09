import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Nav from "../components/Navbar";
import ContactModal from "../components/ContactoModal";
import Background from "../components/Background";
import { Toaster } from "react-hot-toast";

const Layout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  // Cargar preferencia al iniciar
  useEffect(() => {
    const storedTheme = localStorage.getItem("darkMode");
    if (storedTheme !== null) {
      setDarkMode(storedTheme === "true");
    }
  }, []);
  // Guardar preferencia al cambiar
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  return (
    <div
      className={`min-h-screen w-full relative overflow-hidden ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* Notificaciones */}
      <Toaster position="bottom-right" reverseOrder={false} />
      {/* Fondo decorativo dinámico */}
      <Background darkMode={darkMode} />

      {/* Navbar y contenido */}
      <div className="relative z-10">
        <Nav
          setIsModalOpen={setIsModalOpen}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
        <main className="pt-20 px-4 md:px-8">
          <Outlet />
        </main>
      </div>

      {/* Modal de contacto */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        darkMode={darkMode}
      />
    </div>
  );
};

export default Layout;
