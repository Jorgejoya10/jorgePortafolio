import Marquee from "react-fast-marquee";
import { useOutletContext } from "react-router-dom";
import {
  FaReact, FaNodeJs, FaPython, FaGitAlt, FaAngular,
  FaJava, FaDocker, FaAws, FaLinux
} from "react-icons/fa";
import {
  SiTypescript, SiMongodb, SiPostgresql, SiTailwindcss, SiNextdotjs
} from "react-icons/si";

const icons = [
  FaReact, FaNodeJs, FaPython, FaGitAlt, FaAngular,
  FaJava, FaDocker, FaAws, FaLinux,
  SiTypescript, SiMongodb, SiPostgresql, SiTailwindcss, SiNextdotjs
];

const Carrusel = () => {
  const { darkMode }: { darkMode: boolean } = useOutletContext();
  const duplicatedIcons = [...icons, ...icons];

  return (
    <div className="w-full mt-16">
      <Marquee
        gradient={false}
        speed={30}
        className="flex gap-1"
      >
        {duplicatedIcons.map((Icon, index) => (
          <div key={index} className="mx-4">
            <Icon
              size={23}
              className={`transition-colors duration-500 ${
                darkMode ? "text-white" : "text-slate-800"
              }`}
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Carrusel;
