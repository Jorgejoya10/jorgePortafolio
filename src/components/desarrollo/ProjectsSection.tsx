import { useTranslation } from "react-i18next";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  id: string;
}

const projectImages = [
  "/proyectos/air.png",
  "/proyectos/cielito.png",
  "/proyectos/comida.png",
  "/proyectos/guitar.png",
  "/proyectos/muebles.png",
  "/proyectos/unam.png",
];

const ProjectsSection = ({ id }: Props) => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCards = 5;

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < projectImages.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handleCardClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section
      id={id}
      className="w-full px-6 py-7 flex flex-col items-center justify-center overflow-hidden"
    >
      <h2 className="text-6xl font-bold mb-12">{t("projects.title")}</h2>

      <div className="relative w-full max-w-[1600px] h-[500px] flex items-center justify-center perspective-[1500px]">
        {/* Flecha izquierda */}
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="absolute left-0 z-10 p-2 rounded-full shadow-xl hover:bg-gray-200 transition disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ChevronLeft size={32} />
        </button>

        {/* Carrusel */}
        <div className="relative w-full h-full flex items-center justify-center">
          {projectImages.map((src, index) => {
            const offset = index - currentIndex;
            if (Math.abs(offset) >= visibleCards) return null;

            const isActive = offset === 0;

            return (
              <motion.div
                key={index}
                className={`hover:scale-110 absolute w-[450px] h-[300px] overflow-hidden rounded-2xl shadow-2xl cursor-pointer transition-all`}
                animate={{
                  x: offset * 120,
                  scale: isActive ? 1.1 : 0.9,
                  zIndex: visibleCards - Math.abs(offset),
                  rotateY: offset * -10,
                  opacity: 1 - Math.abs(offset) * 0.2,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                onClick={() => handleCardClick(index)}
              >
                <img
                  src={src}
                  alt={`Project ${index}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            );
          })}
        </div>

        {/* Flecha derecha */}
        <button
          onClick={handleNext}
          disabled={currentIndex === projectImages.length - 1}
          className="absolute right-0 z-10 p-2 rounded-full shadow-xl hover:bg-gray-200 transition disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ChevronRight size={32} />
        </button>
      </div>
    </section>
  );
};

export default ProjectsSection;
