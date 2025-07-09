import { useTranslation } from "react-i18next";
import Roadmap from "../components/Roadmap";

const Home = () => {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen flex flex-col items-center text-center px-4 sm:px-8 mt-4">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <img
          src="imagenes/dibujo.png"
          alt="Avatar"
          className="w-32 sm:w-40 md:w-48"
        />
        <div className="text-center md:text-left">
          <p className="text-base sm:text-xl md:text-x mb-1">
            {t("home.hello")}{" "}
            <span className="text-purple-500 font-medium">Jorge Chávez.</span>
          </p>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2">
            {t("home.subtitle")}
          </h1>
        </div>
      </div>
      <p className="mt-6 max-w-3xl text-sm sm:text-base md:text-lg leading-relaxed">
        {t("home.description")}
      </p>
      <div className="mt-2 w-full">
        <Roadmap />
      </div>
    </section>
  );
};

export default Home;
