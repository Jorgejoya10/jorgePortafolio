// src/pages/seguridad/SecurityLanding.tsx
import { useTranslation } from "react-i18next";

const SecurityLanding = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full px-6 py-12 md:py-10 text-center">
      <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
        {t("securityLanding.title")}
      </h1>
      <p className="text-base md:text-lg max-w-2xl mx-auto font-medium italic mb-2">
        “{t("securityLanding.quote")}”
      </p>
      <p className="text-sm font-bold text-neutral-400 mb-10">ISO 7498-2</p>

      <p className="text-lg md:text-xl font-semibold max-w-3xl mx-auto mb-12">
        {t("securityLanding.context")}
      </p>
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        <a
          href="https://www.nist.gov/cybersecurity"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/seguridad/nist.png"
            alt="NIST"
            className="w-52 h-52 object-contain hover:scale-105 transition-transform duration-300"
          />
        </a>
        <a
          href="https://www.sans.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/seguridad/sans.png"
            alt="SANS"
            className="w-52 h-52 object-contain hover:scale-105 transition-transform duration-300"
          />
        </a>
        <a
          href="https://www.nsa.gov/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/seguridad/nsa.png"
            alt="NSA"
            className="w-52 h-52 object-contain hover:scale-105 transition-transform duration-300"
          />
        </a>
        <a
          href="https://www.iso.org/obp/ui/es/#iso:std:iso:7498:-2:ed-1:v1:en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/seguridad/isoWhite.png"
            alt="ISO"
            className="w-52 h-52 object-contain hover:scale-105 transition-transform duration-300"
          />
        </a>
      </div>

      <p className="text-base md:text-lg font-medium max-w-3xl mx-auto">
        {t("securityLanding.description")}
      </p>
    </section>
  );
};

export default SecurityLanding;
