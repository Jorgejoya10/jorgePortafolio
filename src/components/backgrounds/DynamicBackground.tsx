import AnimateBackground from "./AnimateBackground";
import Geometric from "./Geometric";
import Gradient from "./Gradient";

interface Props {
  type: "gradient" | "geometric" | "animated-gradient";
  darkMode: boolean;
}

const DynamicBackground = ({ type, darkMode }: Props) => {
  switch (type) {
    case "geometric":
      return <Geometric darkMode={darkMode} />;

    case "gradient":
      return <Gradient darkMode={darkMode} />;
      
      case "animated-gradient":
        return <AnimateBackground darkMode={darkMode}/>;
        // return <Gradient darkMode={darkMode} />;
        // return <Geometric darkMode={darkMode} />;

    default:
      return null;
  }
};

export default DynamicBackground;
