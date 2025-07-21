import { useLocation, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  // Cierra el menú al hacer click fuera en el menu movil
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Cierra el menú al cambiar de ruta en menu movil
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

  const handleNavClick = (path: string) => {
    if (location.pathname === path) {
      if (path === "/development") {
        // Si ya estamos en /development, forzamos recarga para que se detecten correctamente las secciones
        window.location.reload();
      } else {
        // En cualquier otra ruta, solo hacemos scroll al top
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      navigate(path);

      if (path === "/development") {
        // Si vamos hacia /development desde otra ruta, recargamos ligeramente después de navegar
        setTimeout(() => {
          window.location.reload();
        }, 100); // Ajusta el delay si es necesario
      }
    }
  };

  const toggleLanguage = () => {
    const newLang = language === "en" ? "es" : "en";
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
          <button onClick={() => handleNavClick("/")}>
            <img
              src={darkMode ? "/logo/logoDark.png" : "/logo/logoLight.png"}
              alt="Logo"
              className="h-10 transition duration-300 ease-in-out hover:cursor-pointer"
            />
          </button>{" "}
        </div>

        {/* Menú hamburguesa (solo móvil) */}
        <div className="md:hidden relative -left-5" ref={menuRef}>
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
              <button
                onClick={() => {
                  handleNavClick("/development");
                  setIsOpen(false);
                }}
                className="block py-2 px-4 hover:underline w-full text-left"
              >
                {t("navbar.development")}
              </button>
              <button
                onClick={() => {
                  handleNavClick("/security");
                  setIsOpen(false);
                }}
                className="block py-2 px-4 hover:underline w-full text-left"
              >
                {t("navbar.security")}
              </button>
            </div>
          )}
        </div>

        {/* ENLACES (desktop) */}
        <div className="hidden md:flex items-center gap-6 font-medium">
          <button
            onClick={() => handleNavClick("/development")}
            className="hover:text-gray-400 cursor-pointer"
          >
            {t("navbar.development")}
          </button>
          <button
            onClick={() => handleNavClick("/security")}
            className="hover:text-gray-400 cursor-pointer"
          >
            {t("navbar.security")}
          </button>
        </div>

        {/* Boton de contacto. */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsModalOpen(true)}
            className={`${
              darkMode ? "btn-dark" : "btn-light"
            } hover:cursor-pointer`}
          >
            {t("navbar.contact")}
          </button>

          {/* Boton para descargar C.V */}
          <button
            onClick={downloadCV}
            className="p-2 rounded hover:bg-white/10 transition hover:cursor-pointer"
            title={t("navbar.download_cv")}
          >
            <Download size={20} />
          </button>

          <button onClick={toggleLanguage} className="w-6 h-6">
            <img
              src={language === "en" ? "/icons/españa.png" : "/icons/eu.png"}
              alt={language === "en" ? "Español" : "English"}
              className="w-full h-full object-cover rounded hover:cursor-pointer"
            />
          </button>

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
