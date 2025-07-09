import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

interface FooterProps {
  darkMode: boolean;
}

const Footer = ({ darkMode }: FooterProps) => {
  const { t } = useTranslation();

  return (
    <footer className="relative z-10 w-full py-8 px-6 mt-12 border-t">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
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

        {/* Navegación */}
        <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
          <Link to="/terms" className="hover:text-purple-400 transition duration-300">
            {t("footer.terms")}
          </Link>
          <Link to="/privacy" className="hover:text-purple-400 transition duration-300">
            {t("footer.privacy")}
          </Link>
        </div>

        {/* Derechos */}
        <p className="text-xs text-center md:text-right opacity-60">
          © {new Date().getFullYear()} Jorge Chávez. {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
