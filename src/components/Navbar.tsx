import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Download } from "lucide-react";
import { useState, useEffect, useRef } from "react";

interface NavProps {
  setIsModalOpen: (value: boolean) => void;
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const Nav = ({ setIsModalOpen, darkMode, setDarkMode }: NavProps) => {
  const { t, i18n } = useTranslation();
  const language = i18n.language;
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const location = useLocation(); // Detecta cambio de ruta

  // Cierra el menú al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Cierra el menú al cambiar de ruta
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const downloadCV = () => {
    const fileName =
      language === "es" ? "CV-Jorge-Español2.pdf" : "CV-Jorge-English2.pdf";
    const url = `/cv/${fileName}`;
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    link.click();
  };

  const toggleLanguage = () => {
    const newLang = language === "es" ? "en" : "es";
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className="w-full fixed top-3 z-50 px-4">
      <div
        className={`max-w-7xl mx-auto py-3 px-4 md:px-8 flex justify-between items-center ${
          darkMode ? "navbar-dark" : "navbar-light"
        }`}
      >
        {/* LOGO */}
        <div className="flex items-center gap-3">
          <Link to="/">
            <img
              src={darkMode ? "/logo/logoDark.png" : "/logo/logoLight.png"}
              alt="Logo"
              className="h-10 transition duration-300 ease-in-out"
            />
          </Link>
        </div>

        {/* Menú hamburguesa (solo móvil) */}
        <div className="md:hidden relative -left-8" ref={menuRef}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {isOpen && (
            <div
              className={`absolute mt-6 w-48 p-4 z-50 ${
                darkMode ? "menu-dark" : "menu-light"
              }`}
            >
              <Link
                to="/desarrollo"
                className="block py-2 px-4 hover:underline"
              >
                Desarrollo
              </Link>
              <Link to="/seguridad" className="block py-2 px-4 hover:underline">
                Seguridad
              </Link>
            </div>
          )}
        </div>

        {/* ENLACES (desktop) */}
        <div className="hidden md:flex items-center gap-6 font-medium">
          <Link to="/desarrollo" className="hover:text-gray-400">
            {t("navbar.development")}
          </Link>
          <Link to="/seguridad" className="hover:text-gray-400">
            {t("navbar.security")}
          </Link>
        </div>

        {/* TOGGLES */}
        <div className="flex items-center gap-3">
          {/* Contacto */}
          <button
            onClick={() => setIsModalOpen(true)}
            className={`${darkMode ? "btn-dark" : "btn-light"}`}
          >
            {t("navbar.contact")}
          </button>

          {/* Descargar CV */}
          <button
            onClick={downloadCV}
            className="p-2 rounded hover:bg-white/10 transition hover:cursor-pointer"
            title={t("navbar.download_cv")}
          >
            <Download size={20} />
          </button>

          {/* Idioma */}
          <button onClick={toggleLanguage} className="w-6 h-6">
            <img
              src={language === "en" ? "/icons/españa.png" : "/icons/eu.png"}
              alt={language === "en" ? "Español" : "English"}
              className="w-full h-full object-cover rounded hover:cursor-pointer"
            />
          </button>

          {/* Modo oscuro */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`${darkMode ? "btn-dark" : "btn-light"}`}
          >
            {darkMode ? "🌞" : "🌙"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
