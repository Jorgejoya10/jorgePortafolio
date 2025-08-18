import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const StandardsIntro = () => {
  const { t } = useTranslation();

  return (
    <section className="max-w-6xl mx-auto px-2 space-y-10">
      {/* ¿Qué es ISO? */}
      <div className="space-y-5">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 text-center sm:text-left">
          <img
            src="/seguridad/iso.png"
            alt="ISO Logo"
            className="w-20 sm:w-24 md:w-32 h-auto mx-auto sm:mx-0"
          />
          <h1 className="text-3xl sm:text-3xl md:text-5xl font-extrabold leading-tight">
            {t("standards.standardsIntro.title")}
          </h1>
        </div>

        <p className="text-lg leading-relaxed text-justify">
          {t("standards.standardsIntro.description1")}
        </p>
        <p className="text-lg leading-relaxed text-justify">
          {t("standards.standardsIntro.description2")}
        </p>
      </div>

      {/* Importancia de los estándares */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">
          {t("standards.standardsIntro.whyTitle")}
        </h2>
        <p className="text-lg leading-relaxed text-justify">
          {t("standards.standardsIntro.whyText1")}
        </p>
        <p className="text-lg leading-relaxed text-justify">
          {t("standards.standardsIntro.whyText2")}
        </p>
      </div>

      {/* Estándar: ISO 7498-2 */}
      <Link
        to="/security/ISO7498-2"
        className="group block transition-all duration-300"
      >
        <div className="border-l-4 border-blue-600 group-hover:border-transparent pl-6 space-y-2 transition-all duration-300">
          <h3 className="text-xl font-bold relative inline-block">
            {t("standards.standardsIntro.standard1.title")}
            <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-blue-600 group-hover:w-full transition-all duration-300" />
          </h3>
          <p className="text-base leading-relaxed text-justify">
            {t("standards.standardsIntro.standard1.description1")}
          </p>
        </div>
      </Link>

      {/* Estándar: ISO 27000 */}
      <Link
        to="/security/ISO27000"
        className="group block transition-all duration-300"
      >
        <div className="border-l-4 border-green-600 group-hover:border-transparent pl-6 space-y-2 transition-all duration-300">
          <h3 className="text-xl font-bold relative inline-block">
            {t("standards.standardsIntro.standard2.title")}
            <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-green-600 group-hover:w-full transition-all duration-300" />
          </h3>
          <p className="text-base leading-relaxed text-justify">
            {t("standards.standardsIntro.standard2.description1")}
          </p>
          <p className="text-base leading-relaxed text-justify">
            {t("standards.standardsIntro.standard2.description2")}
          </p>
        </div>
      </Link>
    </section>
  );
};

export default StandardsIntro;
