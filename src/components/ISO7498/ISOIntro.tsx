import { useTranslation } from "react-i18next";

const ISOIntro = () => {
  const { t } = useTranslation();

  return (
    <section className="max-w-6xl mx-auto px-6 py-16 space-y-16">
      <div className=" p-8 rounded-lg border">
        <p className="text-lg md:text-xl leading-relaxed">
          <span className="font-semibold">
            {t("iso7498.isoIntro.highlight")}
          </span>{" "}
          {t("iso7498.isoIntro.body")}
        </p>
      </div>
    </section>
  );
};

export default ISOIntro;
