import { useTranslation } from "react-i18next";

const Terms = () => {
  const { t } = useTranslation();
  const sections = t("terms.sections", { returnObjects: true }) as {
    title: string;
    content: string;
    list?: string[];
  }[];

  return (
    <section className="max-w-4xl mx-auto px-6 py-12 text-gray-300">
      <h1 className="text-3xl font-bold mb-2">{t("terms.title")}</h1>
      <p className="text-sm text-gray-400 mb-6 italic">{t("terms.updated")}</p>
      <p className="mb-8">{t("terms.intro")}</p>

      {sections.map((section, index) => (
        <div key={index} className="mb-6">
          <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
          <p className="mb-2">{section.content}</p>
          {section.list && (
            <ul className="list-disc list-inside space-y-1">
              {section.list.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </section>
  );
};

export default Terms;
