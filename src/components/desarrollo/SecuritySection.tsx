import { useTranslation } from "react-i18next";

interface Props {
  id: string;
}

const SecuritySection = ({ id }: Props) => {
  const { t } = useTranslation();

  return (
    <section
      id={id}
      className="w-full px-6 py-12 flex flex-col items-center gap-6"
    >
      {/* Encabezado azul */}
      <div className="bg-[#B5C0E2] rounded-[2rem] px-6 md:px-10 py-8 text-left w-full max-w-4xl">
        <h2 className="text-5xl md:text-8xl font-bold text-[#6350E2] leading-tight">
          {t("security.title1")}
        </h2>
        <h2 className="text-5xl md:text-8xl font-bold text-black leading-tight">
          {t("security.title2")}
        </h2>
        <p className="text-lg md:text-2xl text-gray-700 mt-2">
          {t("security.subtitle")}
        </p>
      </div>

      {/* Tarjeta central */}
      <div className="bg-white rounded-[2rem] p-4 md:p-6 w-full max-w-4xl">
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-6 md:gap-15">
          <img
            src="/desarrollo/seguridad.png"
            alt="Arquitectura de Seguridad"
            className="w-full md:w-110 h-auto rounded-xl mb-2"
          />
          <p className="text-2xl md:text-4xl font-semibold text-gray-600 text-center md:text-left">
            {t("security.standards")}
          </p>
        </div>
        <p className="text-4xl md:text-7xl font-bold text-black mt-4 whitespace-pre-line text-center md:text-left">
          {t("security.architecture")}
        </p>
      </div>

      {/* Tarjetas inferiores */}
      <div className="flex flex-col md:flex-row gap-6 w-full max-w-4xl">
        {/* Criptografía */}
        <div className="flex-1 bg-black rounded-[1.5rem] px-4 md:px-6 py-6 md:py-8 flex flex-col items-center text-center">
          <img
            src="/desarrollo/cripto.jpg"
            alt="Criptografía"
            className="w-full max-w-[280px] h-auto mb-4"
          />
          <p className="text-3xl md:text-5xl text-white font-semibold whitespace-pre-line">
            {t("security.math")}
          </p>
        </div>

        {/* Seguridad en fases */}
        <div className="flex-1 bg-black rounded-[1.5rem] px-4 md:px-6 py-6 md:py-8 flex flex-col items-center text-center">
          <img
            src="/desarrollo/fases.png"
            alt="Fases del desarrollo"
            className="w-full max-w-[280px] h-auto mb-4"
          />
          <p className="text-3xl md:text-5xl text-white font-semibold whitespace-pre-line">
            {t("security.phases")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
