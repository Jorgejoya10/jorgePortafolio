import { useTranslation } from "react-i18next";

const SecurityDefinition = () => {
  const { t } = useTranslation();

  return (
    <div className="text-center space-y-4">
      <h2 className="text-3xl md:text-4xl font-extrabold">
        {t("iso7498.securityDefinition.title")}
      </h2>
      <p className="max-w-3xl mx-auto text-lg leading-relaxed">
        {t("iso7498.securityDefinition.body.1")}
        <strong>{t("iso7498.securityDefinition.terms.asset")}</strong>
        {t("iso7498.securityDefinition.body.2")}
        <strong>{t("iso7498.securityDefinition.terms.vulnerability")}</strong>
        {t("iso7498.securityDefinition.body.3")}
        <strong>{t("iso7498.securityDefinition.terms.threat")}</strong>
        {t("iso7498.securityDefinition.body.4")}
      </p>
    </div>
  );
};

export default SecurityDefinition;
