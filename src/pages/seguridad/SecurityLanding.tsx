import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { FaUserShield, FaBug, FaLock, FaClipboardCheck } from "react-icons/fa";

const SecurityLanding = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full px-6 py-12 md:py-10 text-center">
      <h1 className="text-3xl md:text-5xl font-extrabold mb-8">
        {t("securityLanding.title")}
      </h1>
      <p className="text-base md:text-lg max-w-2xl mx-auto font-medium italic mb-2">
        “{t("securityLanding.quote")}”
      </p>
      <p className="text-sm font-bold text-neutral-400 mb-10">ISO 7498-2</p>

      <p className="text-lg md:text-xl font-semibold max-w-3xl mx-auto mb-12">
        {t("securityLanding.context")}
      </p>

      {/* Logos institucionales */}
      <div className="flex flex-wrap justify-center gap-4 mb-12 p-4 rounded-xl">
        <a href="https://www.nist.gov/cybersecurity" target="_blank" rel="noopener noreferrer">
          <img src="/seguridad/nist.png" alt="NIST" className="w-52 h-52 object-contain hover:scale-105 transition-transform duration-300" />
        </a>
        <a href="https://www.sans.org/" target="_blank" rel="noopener noreferrer">
          <img src="/seguridad/sans.png" alt="SANS" className="w-52 h-52 object-contain hover:scale-105 transition-transform duration-300" />
        </a>
        <a href="https://www.nsa.gov/" target="_blank" rel="noopener noreferrer">
          <img src="/seguridad/nsa.png" alt="NSA" className="w-52 h-52 object-contain hover:scale-105 transition-transform duration-300" />
        </a>
        <a href="https://www.iso.org/obp/ui/es/#iso:std:iso:7498:-2:ed-1:v1:en" target="_blank" rel="noopener noreferrer">
          <img src="/seguridad/isoWhite.png" alt="ISO" className="w-52 h-52 object-contain hover:scale-105 transition-transform duration-300" />
        </a>
      </div>

      {/* Descripción principal */}
      <p className="text-base md:text-lg font-medium max-w-3xl mx-auto mb-16">
        {t("securityLanding.description")}
      </p>

      <div className="max-w-5xl mx-auto mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          {t("securityServices.title")}
        </h2>
        <div className="grid md:grid-cols-2 gap-6 text-left">
          <div className="p-6 rounded-xl border hover:scale-105 transition">
            <div className="flex items-center gap-3 mb-3">
              <FaClipboardCheck className="text-xl" />
              <h3 className="font-bold text-lg">
                {t("securityServices.audit.title")}
              </h3>
            </div>
            <p className="text-sm text-neutral-400">
              {t("securityServices.audit.description")}
            </p>
          </div>

          <div className=" p-6 rounded-xl border hover:scale-105 transition">
            <div className="flex items-center gap-3 mb-3">
              <FaBug className="text-xl" />
              <h3 className="font-bold text-lg">
                {t("securityServices.testing.title")}
              </h3>
            </div>
            <p className="text-sm text-neutral-400">
              {t("securityServices.testing.description")}
            </p>
          </div>

          <div className=" p-6 rounded-xl border hover:scale-105 transition">
            <div className="flex items-center gap-3 mb-3">
              <FaUserShield className="text-xl" />
              <h3 className="font-bold text-lg">
                {t("securityServices.certification.title")}
              </h3>
            </div>
            <p className="text-sm text-neutral-400">
              {t("securityServices.certification.description")}
            </p>
          </div>

          <div className=" p-6 rounded-xl border hover:scale-105 transition">
            <div className="flex items-center gap-3 mb-3">
              <FaLock className="text-xl" />
              <h3 className="font-bold text-lg">
                {t("securityServices.consulting.title")}
              </h3>
            </div>
            <p className="text-sm text-neutral-400">
              {t("securityServices.consulting.description")}
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <h3 className="text-xl font-semibold mb-2">
          {t("securityServices.cta")}
        </h3>
        <Link
          to="/enterprise"
          className="inline-block mt-4 px-6 py-2 rounded-lg border font-semibold transition hover:bg-white/10"
        >
          {t("securityServices.contact")}
        </Link>
      </div>
    



    </section>
  );
};

export default SecurityLanding;
