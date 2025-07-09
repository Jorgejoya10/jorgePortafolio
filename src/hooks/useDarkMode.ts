import { useEffect, useState } from "react";

const useDarkMode = (): [boolean, (val: boolean) => void] => {
  const [darkMode, setDarkMode] = useState(true);

  // Cargar preferencia al montar
  useEffect(() => {
    const stored = localStorage.getItem("darkMode");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const initialMode = stored !== null ? stored === "true" : prefersDark;

    setDarkMode(initialMode);
    document.documentElement.classList.toggle("dark", initialMode);
  }, []);

  // Actualizar cuando cambia el estado
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode.toString());
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return [darkMode, setDarkMode];
};

export default useDarkMode;
