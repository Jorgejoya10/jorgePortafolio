import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Roadmap = () => {
  const { t } = useTranslation();

  const steps = t("roadmap.steps", { returnObjects: true }) as {
    title: string;
    description: string;
    date: string;
    logo: string;
    link?: string;
  }[];

  return (
    <section className="py-12 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">
        {t("roadmap.title")}
      </h2>
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
            <div
              className="dark:bg-white/5 backdrop-blur-md border border-white/80 dark:border-white/10 
                         p-6 rounded-xl shadow-md text-left flex flex-col sm:flex-row items-start gap-4 
                         transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl"
            >
              <img
                src={step.logo}
                alt="logo"
                className="w-12 h-12 object-contain"
              />
              <div>
                <h3 className="text-purple-500 dark:text-purple-400 font-semibold text-xl">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base mb-1">{step.description}</p>
                <div className="flex items-center gap-4">
                  <p className="text-xs text-gray-400 dark:text-gray-500">
                    {step.date}
                  </p>
                  {step.link && (
                    <a
                      href={step.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-purple-500"
                    >
                      {t("roadmap.visitSite")} ↗
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Roadmap;
