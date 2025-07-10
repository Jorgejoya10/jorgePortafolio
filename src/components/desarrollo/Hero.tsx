import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Carrusel from "./utils/Carrusel";
import TextLoop from "./utils/TextLoop"; 

interface HeroProps {
  darkMode: boolean;
}

const Hero = ({ darkMode }: HeroProps) => {
  const { i18n } = useTranslation();

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Astronauta */}
      <motion.img
        src={
          darkMode
            ? "/proyectos/astronauta.png"
            : "/proyectos/astronautaDark.png"
        }
        alt="Astronauta"
        className="absolute top-1 right-10 w-56 md:w-86 z-10"
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{
          duration: 1.8,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* Título animado */}
      <motion.div
        key={i18n.language}
        className="z-10 text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <TextLoop />
      </motion.div>

      {/* Carrusel */}
      <div className="w-full mt-30 z-10">
        <Carrusel />
      </div>
    </section>
  );
};

export default Hero;
