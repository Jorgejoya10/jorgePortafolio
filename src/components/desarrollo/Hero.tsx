// src/components/desarrollo/Hero.tsx

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Carrusel from "../Carrusel";

interface HeroProps {
  darkMode: boolean;
}


const languages: Record<"es" | "en" | "fr" | "de", string> = {
  es: "Desarrollo web",
  en: "Web Development",
  fr: "Développement Web",
  de: "Webentwicklung",
};

const Hero = ({darkMode}: HeroProps) => {
  const { i18n } = useTranslation();
  const title =
    languages[i18n.language as keyof typeof languages] || languages.en;

    console.log("Modo oscuro activo:", darkMode);


  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Astronauta con ternario */}
      <motion.img
        src={darkMode ? "/proyectos/astronauta.png" : "/proyectos/astronautaDark.png"}
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

      {/* Título */}
      <motion.h1
        key={title}
        className="text-5xl md:text-7xl font-bold z-10 text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {title}
      </motion.h1>

      {/* Carrusel */}
      <div className="w-full mt-12 z-10">
        <Carrusel />
      </div>
    </section>
  );
};

export default Hero;
