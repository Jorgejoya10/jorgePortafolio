import { useTranslation } from "react-i18next";

const HeaderAndNotice = () => {
  const { t } = useTranslation();

  return (
    <section className="max-w-6xl mx-auto">
      <h1 className="md:text-5xl text-xl font-bold mb-2">
        {t("iso7498.headerAndNotice.title")}
      </h1>
      <p
        className="md:text-xs text-xs mt-1 text-justify"
        dangerouslySetInnerHTML={{
          __html: t("iso7498.headerAndNotice.paragraph"),
        }}
      />
    </section>
  );
};

export default HeaderAndNotice;
