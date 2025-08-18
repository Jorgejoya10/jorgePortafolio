import { useTranslation } from "react-i18next";

const SecurityDefinition = () => {
  const { t } = useTranslation();

  return (
    <div className="text-center space-y-4 my-10">
      <h2 className="text-3xl md:text-4xl font-extrabold">
        {t("iso7498.securityDefinition.title")}
      </h2>
      <p className="max-w-3xl mx-auto text-lg leading-relaxed">
        {t("iso7498.securityDefinition.definition")}{" "}
        
      </p>
    </div>
  );
};

export default SecurityDefinition;
