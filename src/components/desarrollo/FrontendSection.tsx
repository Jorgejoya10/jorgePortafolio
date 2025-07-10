import { useTranslation } from "react-i18next";

interface Props {
  id: string;
}

const FrontendSection = ({ id }: Props) => {
  const { t } = useTranslation();

  return (
    <section id={id} className="w-full px-6 py-12 flex flex-col items-center gap-6">
      {/* Encabezado */}
      <div className="bg-[#ADD5C8] rounded-[2rem] px-10 py-8 text-left w-full max-w-4xl h-130">
        <h2 className="text-8xl font-bold leading-tight text-[#165842]">
          {t("frontend.title")} <br />
          <span className="text-black">{t("frontend.subtitle")}</span>
        </h2>
      </div>

      {/* Planeación del proyecto */}
      <div className="bg-black rounded-[2rem] px-10 py-8 text-white flex items-center justify-between w-full max-w-4xl h-140">
        <p className="text-6xl font-semibold leading-tight max-w-sm whitespace-pre-line">
          {t("frontend.planning")}
        </p>
        <img
          src="/desarrollo/planeacion.png"
          alt="Planeación"
          className="w-110 h-auto"
        />
      </div>

      {/* Diseño y Responsive */}
      <div className="flex gap-6 w-full max-w-4xl">
        {/* Diseño */}
        <div className="bg-[#165842] text-white flex-1 rounded-[2rem] px-8 py-10 flex flex-col items-center justify-center gap-8">
          <img
            src="/desarrollo/diseño.png"
            alt="Diseño"
            className="w-100 h-auto mb-4"
          />
          <p className="text-6xl font-semibold whitespace-pre-line">{t("frontend.design")}</p>
        </div>

        {/* Responsive Design */}
        <div className="bg-[#DBE4E0] text-black flex-1 rounded-[2rem] px-8 py-10 flex items-center justify-center relative">
          <img
            src="/desarrollo/movil.png"
            alt="Responsive"
            className="w-full h-auto max-w-[300px]"
          />
          <div className="absolute inset-0 flex items-center justify-start ml-22">
            <p className="text-[4rem] leading-[5rem] font-bold text-black text-center max-w-[90px] whitespace-pre-line">
              {t("frontend.responsive")}
            </p>
          </div>
        </div>
      </div>

      {/* Creatividad */}
      <div className="bg-white rounded-[2rem] p-6 w-full max-w-4xl text-black relative overflow-hidden">
        {/* Imagen arriba a la derecha */}
        <div className="absolute top-6 right-6 w-[70%] max-w-[600px]">
          <img
            src="/desarrollo/creatividad.png"
            alt="Creatividad"
            className="w-full h-auto rounded-xl"
          />
        </div>

        {/* Texto abajo a la izquierda */}
        <div className="mt-[320px]">
          <h2 className="text-8xl font-bold leading-22 whitespace-pre-line">
            {t("frontend.creativity.title")}
          </h2>
          <p className="text-2xl text-gray-600 mt-3">
            {t("frontend.creativity.description")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default FrontendSection;
