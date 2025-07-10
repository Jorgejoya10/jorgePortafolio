
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto", // Puedes cambiar a "auto" si prefieres sin animación
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
