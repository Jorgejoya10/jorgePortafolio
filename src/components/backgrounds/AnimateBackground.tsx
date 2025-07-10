import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  darkMode: boolean;
}

const AnimateBackground = ({ darkMode }: Props) => {
  const bgRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const bg = bgRef.current;
    if (!bg) return;

    // Colores base según darkMode
    const colorStart = darkMode ? "#000000" : "#ffffff";
    const colorEnd = "#D1FAE5"; // puedes parametrizarlo si lo deseas

    // Interpolación entre colores
    const from = gsap.utils.splitColor(colorStart);
    const to = gsap.utils.splitColor(colorEnd);
    const interpolate = gsap.utils.interpolate(from, to);

    gsap.set(bg, { backgroundColor: colorStart });

    ScrollTrigger.create({
      trigger: bg,
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress;
        const interpolated = interpolate(progress); // → [r, g, b]
        const rgbString = `rgb(${interpolated.map(Math.round).join(",")})`;

        gsap.to(bg, {
          backgroundColor: rgbString,
          duration: 0.3,
          overwrite: "auto",
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [darkMode]);

  return <div ref={bgRef} className="absolute inset-0 -z-10" />;
};

export default AnimateBackground;
