import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  darkMode: boolean;
}

const sectionColors: Record<string, string> = {
  hero: "#000000", // o blanco si darkMode es false
  frontend: "#ADD5C8",
  backend: "#F9DD69",
  security: "#B5C0E2",
  projects: "#000000", // o blanco si darkMode es false
};

const sectionIds = ["hero", "frontend", "backend", "security", "projects"];

const AnimateBackground = ({ darkMode }: Props) => {
  const bgRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const bg = bgRef.current;
    if (!bg) return;

    // Ajustar colores según darkMode
    sectionColors.hero = darkMode ? "#000000" : "#ffffff";
    sectionColors.projects = darkMode ? "#000000" : "#ffffff";

    gsap.set(bg, { backgroundColor: sectionColors.hero });

    const triggers: ScrollTrigger[] = [];

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (!section) return;

      const nextColor = sectionColors[id];

      const trigger = ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",
        scrub: true,
        onEnter: () => {
          gsap.to(bg, {
            backgroundColor: nextColor,
            duration: 0.1,
            overwrite: "auto",
          });
        },
        onEnterBack: () => {
          gsap.to(bg, {
            backgroundColor: nextColor,
            duration: 0.1,
            overwrite: "auto",
          });
        },
      });

      triggers.push(trigger);
    });

    return () => {
      triggers.forEach((trigger) => trigger.kill());
    };
  }, [darkMode]);

  return <div ref={bgRef} className="fixed inset-0 -z-10 transition-colors duration-500" />;
};

export default AnimateBackground;


