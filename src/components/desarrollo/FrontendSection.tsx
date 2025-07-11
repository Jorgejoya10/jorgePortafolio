import { useTranslation } from "react-i18next";

interface Props {
  id: string;
}

const FrontendSection = ({ id }: Props) => {
  const { t } = useTranslation();

  return (
    <section
      id={id}
      className="w-full px-6 py-12 flex flex-col items-center gap-6"
    >
      {/* Encabezado */}
      <div className="bg-[#ADD5C8] rounded-[2rem] px-5 py-6 sm:px-10 sm:py-8 text-left w-full max-w-4xl h-auto">
        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight text-[#165842] break-words">
          {t("frontend.title")} <br />
          <span className="text-black">{t("frontend.subtitle")}</span>
        </h2>
      </div>

      {/* Planeación del proyecto */}
      <div className="bg-black rounded-[2rem] px-6 py-6 sm:px-10 sm:py-8 text-white flex flex-col sm:flex-row items-center justify-between w-full max-w-4xl h-auto gap-6">
        <p className="text-3xl sm:text-5xl md:text-6xl font-semibold leading-tight text-center sm:text-left max-w-xs whitespace-pre-line">
          {t("frontend.planning")}
        </p>
        <img
          src="/desarrollo/planeacion.png"
          alt="Planeación"
          className="w-72 sm:w-96 md:w-110 h-auto"
        />
      </div>

      {/* Diseño y Responsive */}
      <div className="flex flex-col md:flex-row gap-6 w-full max-w-4xl">
        {/* Diseño */}
        <div className="bg-[#165842] text-white w-full md:flex-1 rounded-[2rem] px-6 py-8 flex flex-col items-center justify-center gap-6">
          <img
            src="/desarrollo/diseño.png"
            alt="Diseño"
            className="w-72 h-auto mb-4"
          />
          <p className="text-4xl md:text-5xl font-semibold text-center whitespace-pre-line">
            {t("frontend.design")}
          </p>
        </div>

        {/* Responsive Design */}
        <div className="bg-[#DBE4E0] text-black w-full md:flex-1 rounded-[2rem] px-6 py-8 flex items-center justify-center relative">
          <img
            src="/desarrollo/movil.png"
            alt="Responsive"
            className="w-full max-w-[250px] h-auto"
          />
          <div className="absolute inset-0 flex items-center justify-start ml-16 lg:ml-28">
            <p className="text-[3rem] md:text-[3rem] leading-tight font-bold text-black text-center max-w-[80px] whitespace-pre-line">
              {t("frontend.responsive")}
            </p>
          </div>
        </div>
      </div>

      {/* Creatividad */}
      <div className="bg-white rounded-[2rem] p-6 w-full max-w-4xl text-black relative overflow-hidden flex flex-col gap-6 md:block">
        {/* Imagen (arriba en móvil, derecha en desktop) */}
        <div className="w-full md:w-[70%] md:max-w-[600px] md:absolute md:top-6 md:right-6">
          <img
            src="/desarrollo/creatividad.png"
            alt="Creatividad"
            className="w-full h-auto rounded-xl"
          />
        </div>

        {/* Texto (debajo en móvil, abajo a la izquierda en desktop) */}
        <div className="mt-0 md:mt-[320px]">
          <h2 className="text-4xl md:text-8xl font-bold leading-tight whitespace-pre-line">
            {t("frontend.creativity.title")}
          </h2>
          <p className="text-base md:text-2xl text-gray-600 mt-3">
            {t("frontend.creativity.description")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default FrontendSection;
