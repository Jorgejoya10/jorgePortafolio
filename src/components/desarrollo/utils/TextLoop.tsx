import { Typewriter } from "react-simple-typewriter";
import { useTranslation } from "react-i18next";

const TextLoop = () => {
  const { i18n } = useTranslation();

  const roles: Record<"es" | "en", string[]> = {
    es: [
      "Desarrollador Web.",
      "Web Developer.",
      "Développeur Web.",
      "网络开发人员.",
      "Sviluppatore Web.",
      "웹 개발자.",
      'forbróir gréasáin.',
      'वेब डेवलपर.'
    ],
    en: [
      "Web Developer.",
      "Desarrollador Web.",
      "Développeur Web.",
      "网络开发人员.",
      "Sviluppatore Web.",
      "웹 개발자.",
      'forbróir gréasáin.',
      'वेब डेवलपर.'
    ],
  };

  const words = roles[i18n.language as "es" | "en"] || roles.en;

  return (
    <span className=" text-3xl md:text-5xl font-bold">
      <Typewriter
        words={words}
        loop={0} // infinito
        cursor
        cursorStyle="|"
        typeSpeed={80}
        deleteSpeed={60}
        delaySpeed={1500}
      />
    </span>
  );
};

export default TextLoop;
