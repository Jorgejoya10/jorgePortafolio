import { useTranslation } from "react-i18next";

interface Props {
  id: string;
}

const BackendSection = ({ id }: Props) => {
  const { t } = useTranslation();

  return (
    <section id={id} className="w-full px-6 py-12 flex flex-col items-center gap-6">
      {/* Header amarillo */}
      <div className="bg-[#F9DD69] rounded-[2rem] px-10 py-8 text-left w-full max-w-4xl h-120">
        <h2 className="text-8xl font-bold text-[#E6951F] leading-snug">
          {t("backend.title")} <br />
          <span className="text-black">{t("backend.subtitle")}</span>
        </h2>
        <p className="text-2xl text-gray-700 mt-2">{t("backend.description")}</p>
      </div>

      {/* Imagen central automatización */}
      <div className="bg-white rounded-[2rem] overflow-hidden w-full max-w-4xl">
        <img
          src="/desarrollo/automate.png"
          alt="Automatización"
          className="w-full h-auto"
        />
        <p className="text-6xl font-bold text-black px-8 py-6">
          {t("backend.automation")}
        </p>
      </div>

      {/* Dos tarjetas laterales */}
      <div className="flex flex-col sm:flex-row gap-6 w-full max-w-4xl">
        {/* Tarjeta izquierda */}
        <div className="bg-[#D1D3D4] flex-1 rounded-[1.5rem] px-6 py-8 flex flex-col items-center text-center gap-2">
          <img
            src="/desarrollo/db.png"
            alt="Almacenar"
            className="w-54 h-54 mb-4"
          />
          <p className="text-5xl font-bold text-black whitespace-pre-line">
            {t("backend.store")}
          </p>
        </div>

        {/* Tarjeta derecha */}
        <div className="bg-black flex-1 rounded-[1.5rem] px-6 py-8 flex flex-col items-center text-center gap-2">
          <img
            src="/desarrollo/negocio.png"
            alt="Lógica de negocio"
            className="w-54 h-54 mb-4"
          />
          <p className="text-5xl font-semibold text-white whitespace-pre-line">
            {t("backend.logic")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default BackendSection;
