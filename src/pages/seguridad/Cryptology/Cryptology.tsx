import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Cryptology() {
  const { t } = useTranslation();

  return (
    <main className="w-full">
      <div className="px-2 py-2 md:px-3 md:py-3">
        <div className="max-w-5xl">
          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900">
            {t("cryptology.title")}
          </h1>

          {/* Intro */}
          <div className="mt-4 space-y-4 text-base md:text-lg leading-relaxed text-slate-900">
            <p>{t("cryptology.intro.p1")}</p>
            <p>{t("cryptology.intro.p2")}</p>
            <p>{t("cryptology.intro.p3")}</p>
          </div>

          {/* Steganography */}
          <section className="mt-10 md:mt-12">
            <Link
              to="/security/Steganography"
              className="group block transition-all duration-300"
            >
              <div className="border-l-4 border-blue-600 group-hover:border-transparent pl-6 space-y-4 transition-all duration-300">
                <h2 className="text-xl font-bold relative inline-block">
                  {t("cryptology.steganography.title")}
                  <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-blue-600 group-hover:w-full transition-all duration-300" />
                </h2>

                <p className="text-lg leading-relaxed text-justify">
                  {t("cryptology.steganography.p1")}
                </p>

                <p className="text-lg leading-relaxed text-justify">
                  {t("cryptology.steganography.p2")}
                </p>
              </div>
            </Link>
          </section>

          {/* Cryptography */}
          <section className="mt-10 md:mt-12">
            <Link
              to="/security/Cryptography"
              className="group block transition-all duration-300"
            >
              <div className="border-l-4 border-green-600 group-hover:border-transparent pl-6 space-y-4 transition-all duration-300">
                <h2 className="text-xl font-bold relative inline-block">
                  {t("cryptology.cryptography.title")}
                  <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-green-600 group-hover:w-full transition-all duration-300" />
                </h2>

                <p className="text-lg leading-relaxed text-justify">
                  {t("cryptology.cryptography.p1")}
                </p>

                <p className="text-lg leading-relaxed text-justify">
                  {t("cryptology.cryptography.p2")}
                </p>

                <p className="text-lg leading-relaxed text-justify">
                  <span className="font-semibold">
                    {t("cryptology.cryptography.noteLabel")}
                  </span>{" "}
                  {t("cryptology.cryptography.note")}
                </p>
              </div>
            </Link>
          </section>
        </div>
      </div>
    </main>
  );
}
