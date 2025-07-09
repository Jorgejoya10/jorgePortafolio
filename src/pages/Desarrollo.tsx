import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const keywords = [
  "React.js",
  "TypeScript",
  "Tailwind CSS",
  "GraphQL",
  "MongoDB",
  "Node.js",
  "APIs REST",
  "Diseño UI",
  "Performance",
  "Deploys",
  "Elegancia",
  "Creatividad",
];

const Desarrollo = () => {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center px-6 py-24">
      {/* Contenido sobre el fondo */}
      <div className="relative z-10 flex flex-col items-center">
        <motion.h1
          className="text-sm tracking-widest uppercase mb-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {t("desarrollo.section_title")}
        </motion.h1>

        <motion.h2
          className="text-4xl md:text-6xl font-light text-center max-w-3xl mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          {t("desarrollo.headline")}
        </motion.h2>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center max-w-5xl"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {keywords.map((keyword, idx) => (
            <motion.div
              key={idx}
              className="text-lg transition duration-300"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              {keyword}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Desarrollo;
