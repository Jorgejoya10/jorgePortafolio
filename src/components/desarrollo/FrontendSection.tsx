import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const cards = [
  {
    titleKey: "planning",
    image: "/frontend/plan.png",
    bg: "bg-black text-white",
  },
  {
    titleKey: "design",
    image: "/frontend/design.png",
    bg: "bg-green-900 text-white",
  },
  {
    titleKey: "testing",
    image: "/frontend/test.png",
    bg: "bg-gray-100 text-gray-900",
  },
  {
    titleKey: "creativity",
    image: "/frontend/creative.png",
    bg: "bg-white text-black",
  },
];

const FrontendSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative w-full min-h-screen px-6 py-16 overflow-hidden">
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-center mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {t("frontend.title")}
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {cards.map((card, index) => (
          <motion.div
            key={card.titleKey}
            className={`rounded-2xl overflow-hidden p-4 flex flex-col items-center ${card.bg}`}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img src={card.image} alt={t(`frontend.${card.titleKey}`)} className="w-40 mb-4" />
            <h3 className="text-xl font-semibold">{t(`frontend.${card.titleKey}`)}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FrontendSection;
