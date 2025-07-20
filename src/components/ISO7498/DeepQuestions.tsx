import { useTranslation } from "react-i18next";

const DeepQuestions = () => {
  const { t } = useTranslation();
  const questions = t("iso7498.deepQuestions", { returnObjects: true }) as {
    title: string;
    body: string;
    note: string;
  }[];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {questions.map((q, idx) => (
        <div key={idx} className="rounded-md p-6 shadow-sm border">
          <p className="font-semibold text-lg mb-2">{q.title}</p>
          <p className="leading-relaxed">{q.body}</p>
          <p className="text-sm mt-2 italic text-gray-500">{q.note}</p>
        </div>
      ))}
    </div>
  );
};

export default DeepQuestions;
