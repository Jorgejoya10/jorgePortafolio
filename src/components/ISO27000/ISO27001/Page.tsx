// src/components/ISO27001/Page.tsx
import React from "react";
import { useTranslation } from "react-i18next";
// Si tu header tiene contenido propio, descomenta la siguiente línea.

const ISO27001: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="max-w-6xl mx-auto px-2">

      {/* Título + badge */}
      <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
        {t("iso27001.page.title")}
        {" "}
        <span className="align-middle ml-2 text-green-600 font-semibold text-base md:text-lg">
          {t("iso27001.page.badgeCertifiable")}
        </span>
      </h1>

      {/* Nota / descargo */}
       <p
        className="md:text-xs text-xs mt-1 text-justify"
        dangerouslySetInnerHTML={{
          __html: t("iso27001.page.notice"),
        }}
      />

      {/* Intro */}
      <p className="mt-6 text-base md:text-lg">
        {t("iso27001.page.intro")}
      </p>

      {/* ¿Qué es un SGSI? (card) */}
      <div className="mt-8 rounded-x border border-neutral-200 p-5 md:p-7">
        <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-3">
          {t("iso27001.page.whatsISMS.title")}
        </h2>
        <p className="text-base md:text-lg text-center">
          {t("iso27001.page.whatsISMS.body")}
        </p>
      </div>

      {/* ¿Qué espero lograr…? */}
      <section className="mt-10">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-4">
          {t("iso27001.page.objectives.title")}
        </h2>

        <p className="text-base md:text-lg mb-3">
          {t("iso27001.page.objectives.preamble")}
        </p>

        <ol className="list-decimal pl-6 space-y-1 mb-6">
          <li>{t("iso27001.page.objectives.items.missionAligned")}</li>
          <li>{t("iso27001.page.objectives.items.securityServices")}</li>
        </ol>

        <ol className="list-decimal pl-6 space-y-1 mb-6">
          <li>{t("iso27001.page.services.confidentiality")}</li>
          <li>{t("iso27001.page.services.integrity")}</li>
          <li>{t("iso27001.page.services.authentication")}</li>
          <li>{t("iso27001.page.services.nonRepudiation")}</li>
          <li>{t("iso27001.page.services.accessControl")}</li>
        </ol>

        <p className="text-base md:text-lg">
          {t("iso27001.page.availability.note.prefix")}{" "}
          <b>{t("iso27001.page.availability.term")}</b>{" "}
          {t("iso27001.page.availability.note.mid")}{" "}
          <b>99.9%</b>. {t("iso27001.page.availability.note.suffix")}
        </p>
      </section>
    </section>
  );
};

export default ISO27001;
