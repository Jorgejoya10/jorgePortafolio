import { useTranslation } from "react-i18next";

const SystemDiagram = () => {
  const { t } = useTranslation();

  return (
    <div className="mx-auto w-60 border-2 p-6 rounded-lg text-center shadow-inner my-10">
      <h4 className="text-2xl font-bold mb-4">{t("iso7498.systemDiagram.title")}</h4>
      <ul className="text-lg font-medium leading-8 ">
        <li>{t("iso7498.systemDiagram.items.0")}</li>
        <li>{t("iso7498.systemDiagram.items.1")}</li>
        <li>{t("iso7498.systemDiagram.items.2")}</li>
        <li>{t("iso7498.systemDiagram.items.3")}</li>
      </ul>
    </div>
  );
};

export default SystemDiagram;
