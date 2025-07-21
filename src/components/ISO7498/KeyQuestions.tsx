import { useTranslation } from "react-i18next";

const KeyQuestions = () => {
  const { t } = useTranslation();

  return (
    <div className="p-6 md:p-10 rounded-lg border my-4">
      <h3 className="text-center text-2xl md:text-3xl font-bold mb-6">
        {t("iso7498.keyQuestions.title")}
      </h3>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg list-disc list-inside">
        <li>{t("iso7498.keyQuestions.list.0")}</li>
        <li>{t("iso7498.keyQuestions.list.1")}</li>
        <li>{t("iso7498.keyQuestions.list.2")}</li>
        <li>{t("iso7498.keyQuestions.list.3")}</li>
        <li>{t("iso7498.keyQuestions.list.4")}</li>
        <li>{t("iso7498.keyQuestions.list.5")}</li>
      </ul>
      <p className="mt-6 text-base md:text-lg leading-relaxed">
        {t("iso7498.keyQuestions.conclusion")}
      </p>
    </div>
  );
};

export default KeyQuestions;
