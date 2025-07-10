import { useOutletContext } from "react-router-dom";
import Hero from '../components/desarrollo/Hero'
import FrontendSection from '../components/desarrollo/FrontendSection'

const Desarrollo = () => {
  const { darkMode } = useOutletContext<{ darkMode: boolean }>();

  return (
    <div>
      <Hero darkMode={darkMode} />
      <FrontendSection />
      {/* <BackendSection /> */}
      {/* <SecuritySection /> */}
      {/* <ProjectsSection /> */}
    </div>
  );
};

export default Desarrollo;
