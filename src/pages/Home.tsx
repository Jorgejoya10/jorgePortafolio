import { useTranslation } from "react-i18next";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import Roadmap from "../components/Roadmap";

const Home = () => {
  const { t } = useTranslation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [0, window.innerHeight], [17, -17]);
  const rotateY = useTransform(x, [0, window.innerWidth], [-17, 17]);

  useEffect(() => {
    x.set(mousePosition.x);
    y.set(mousePosition.y);
  }, [mousePosition]);

  return (
    <section className="min-h-screen relative overflow-hidden px-4 sm:px-8 flex flex-col items-center text-center mt-4">
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
        <motion.img
          src="imagenes/dibujo.png"
          alt="Avatar"
          className="w-32 sm:w-40 md:w-48"
          style={{
            rotateX,
            rotateY,
          }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
        />
        <div className="text-center md:text-left">
          <p className="text-base sm:text-xl md:text-xl mb-1">
            {t("home.hello")}{" "}
            <span className="text-purple-500 font-medium">Jorge Chávez.</span>
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2">
            {t("home.subtitle")}
          </h1>
        </div>
      </div>

      <p className="relative z-10 mt-6 max-w-3xl text-sm sm:text-base md:text-lg leading-relaxed">
        {t("home.description")}
      </p>

      <div className="relative z-10 mt-2 w-full">
        <Roadmap />
      </div>
    </section>
  );
};

export default Home;
