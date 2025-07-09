import { useTranslation } from "react-i18next";

const Privacy = () => {
  const { t } = useTranslation();

  return (
    <section className="max-w-4xl mx-auto px-6 py-12 text-gray-300">
      <h1 className="text-3xl font-bold mb-6">{t("privacy.title")}</h1>

      <p className="mb-2 italic text-sm text-gray-400">
        {t("privacy.updated")}
      </p>

      <p className="mb-6">{t("privacy.intro")}</p>

      {/* 1. Responsable */}
      <h2 className="text-xl font-semibold mt-8 mb-2">{t("privacy.1.title")}</h2>
      <p>{t("privacy.1.content")}</p>

      {/* 2. Finalidad */}
      <h2 className="text-xl font-semibold mt-8 mb-2">{t("privacy.2.title")}</h2>
      <ul className="list-disc list-inside mb-2 space-y-1">
        <li>{t("privacy.2.list.0")}</li>
        <li>{t("privacy.2.list.1")}</li>
      </ul>
      <p>{t("privacy.2.footer")}</p>

      {/* 3. Conservación */}
      <h2 className="text-xl font-semibold mt-8 mb-2">{t("privacy.3.title")}</h2>
      <p>{t("privacy.3.content")}</p>

      {/* 4. Transferencias */}
      <h2 className="text-xl font-semibold mt-8 mb-2">{t("privacy.4.title")}</h2>
      <p>{t("privacy.4.content")}</p>

      {/* 5. Derechos ARCO */}
      <h2 className="text-xl font-semibold mt-8 mb-2">{t("privacy.5.title")}</h2>
      <ul className="list-disc list-inside mb-2 space-y-1">
        <li>{t("privacy.5.list.0")}</li>
        <li>{t("privacy.5.list.1")}</li>
        <li>{t("privacy.5.list.2")}</li>
        <li>{t("privacy.5.list.3")}</li>
      </ul>
      <p>{t("privacy.5.footer")}</p>

      {/* 6. Modificaciones */}
      <h2 className="text-xl font-semibold mt-8 mb-2">{t("privacy.6.title")}</h2>
      <p>{t("privacy.6.content")}</p>

      {/* 7. Consentimiento */}
      <h2 className="text-xl font-semibold mt-8 mb-2">{t("privacy.7.title")}</h2>
      <p>{t("privacy.7.content")}</p>
    </section>
  );
};

export default Privacy;
