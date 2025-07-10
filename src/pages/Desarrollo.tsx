import { useOutletContext } from "react-router-dom";
import Hero from "../components/desarrollo/Hero";
import FrontendSection from "../components/desarrollo/FrontendSection";
import BackendSection from "../components/desarrollo/BackendSection";
import SecuritySection from "../components/desarrollo/SecuritySection";
import ProjectsSection from "../components/desarrollo/ProjectsSection";

const Desarrollo = () => {
  const { darkMode } = useOutletContext<{ darkMode: boolean }>();

  return (
    <div>
      <Hero darkMode={darkMode} id="hero"/>
      <FrontendSection id="frontend" />
      <BackendSection id="backend" />
      <SecuritySection id="security" />
      <ProjectsSection id="projects" />
    </div>
  );
};

export default Desarrollo;
