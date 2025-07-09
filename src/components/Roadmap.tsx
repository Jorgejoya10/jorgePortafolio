import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Roadmap = () => {
  const { t } = useTranslation();

  const steps = t("roadmap.steps", { returnObjects: true }) as {
    title: string;
    description: string;
    date: string;
    logo: string;
  }[];

  return (
    <section className="py-12 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">{t("roadmap.title")}</h2>
      <div className="relative border-l-4 border-purple-500 ml-4">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="mb-12 pl-6 relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="absolute -left-4 top-0 w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold">
              {index + 1}
            </div>
            <div className="bg-gray-900 p-6 rounded-lg shadow-md text-left flex flex-col sm:flex-row items-start gap-4">
              <img src={step.logo} alt="logo" className="w-12 h-12 object-contain" />
              <div>
                <h3 className="text-purple-400 font-semibold text-xl">{step.title}</h3>
                <p className="text-sm sm:text-base text-gray-300 mb-1">{step.description}</p>
                <p className="text-xs text-gray-400">{step.date}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Roadmap;
