// import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Download } from "lucide-react";

interface NavProps {
  setIsModalOpen: (value: boolean) => void;
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const Nav = ({ setIsModalOpen, darkMode, setDarkMode }: NavProps) => {
  const { t, i18n } = useTranslation();
  const language = i18n.language;
  const downloadCV = () => {
    const lang = i18n.language;
    const fileName =
      lang === "es" ? "CV-Jorge-Español2.pdf" : "CV-Jorge-English2.pdf";
    const url = `/cv/${fileName}`;
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    link.click();
  };
  const toggleLanguage = () => {
    const newLang = i18n.language === "es" ? "en" : "es";
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

        {/* ENLACES */}
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
          {/* Descarga PDF */}
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
