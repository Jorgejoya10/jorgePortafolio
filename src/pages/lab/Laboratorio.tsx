// src/pages/seguridad/lab/Laboratorio.tsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import Playground from "../../components/seguridad/lab/Playground";
import {
  CATALOG,
  findMeta,
  type Era,
  type Status,
} from "../../components/seguridad/lab/registry-ui";

export default function Laboratorio() {
  const { algoId } = useParams<{ algoId: string }>();
  const meta = findMeta(algoId);


  return (
    <main className="min-h-screen">
      {/* Contenido */}
      <section className="p-6 md:p-10 max-w-6xl">
        {!meta ? (
          <Landing />
        ) : (
          <>
            {/* Breadcrumbs */}
            <div className="text-sm text-neutral-400 mb-4">
              <Link to="/security/lab" className="hover:underline">
                Laboratorio
              </Link>{" "}
              · {meta.name} ({meta.year})
            </div>

            <header className="mb-4 flex flex-wrap items-center gap-3">
              <h1 className="text-3xl md:text-4xl font-bold">{meta.name}</h1>
              <StatusPill status={meta.status} />
              <span className="text-neutral-500">Año: {meta.year}</span>
            </header>

            <TimelineNav activeId={meta.id} />

            <div className="mt-6">
              <Playground algoId={meta.id} />
            </div>

          </>
        )}
      </section>
    </main>
  );
}

/* ---------- Landing (sin algoritmo seleccionado) ---------- */

function Landing() {

  return (
    <>
      <h1 className="text-4xl font-extrabold mb-2">Laboratorio de Criptografía</h1>
      <p className="text-neutral-800 mb-6">
        Recorre la evolución de los algoritmos criptograficos, desde los clásicos hasta los estándares actuales.
      </p>

      {/* Timeline horizontal para saltar rápido */}
      <TimelineNav />

      {/* Timeline vertical (hitosa) */}
      <div className="mt-10">
        <VerticalTimeline />
      </div>
    </>
  );
}

/* ---------- Componentes auxiliares ---------- */

function StatusPill({ status }: { status: Status }) {
  const map: Record<Status, string> = {
    recommended:
      "bg-green-500/15 text-green-400 border border-green-500/30 px-2 py-0.5 rounded-full text-xs",
    legacy:
      "bg-amber-500/15 text-amber-400 border border-amber-500/30 px-2 py-0.5 rounded-full text-xs",
    insecure:
      "bg-red-500/15 text-red-400 border border-red-500/30 px-2 py-0.5 rounded-full text-xs",
  };
  const label: Record<Status, string> = {
    recommended: "recomendado",
    legacy: "legacy",
    insecure: "inseguro",
  };
  return <span className={map[status]}>{label[status]}</span>;
}

/** Timeline horizontal de chips por año/algoritmo */
function TimelineNav({ activeId }: { activeId?: string }) {
  const sorted = [...CATALOG].sort((a, b) => a.year - b.year);
  return (
    <div className="overflow-x-auto pb-2">
      <div className="flex items-center gap-3 min-w-max">
        {sorted.map((a, i) => (
          <React.Fragment key={a.id}>
            <Link
              to={`/security/lab/${a.id}`}
              className={`px-3 py-1 rounded-full border text-sm whitespace-nowrap ${
                activeId === a.id
                  ? "bg-white text-black border-white"
                  : "bg-neutral-900 border-neutral-700 hover:border-neutral-500 text-neutral-200"
              }`}
              title={`${a.name} (${a.year})`}
            >
              {a.year} · {a.name}
            </Link>
            {i < sorted.length - 1 && (
              <div className="h-px w-8 bg-neutral-700" aria-hidden="true" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

/** Timeline vertical tipo “hitos” */
function VerticalTimeline() {
  const sorted = [...CATALOG].sort((a, b) => a.year - b.year);
  return (
    <ol className="relative border-s border-neutral-800">
      {sorted.map((a) => (
        <li key={a.id} className="ms-6 py-5">
          {/* punto */}
          <span className="absolute -start-1.5 mt-2 h-3 w-3 rounded-full bg-neutral-700 ring-4 ring-white/0" />
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm text-neutral-500 w-16">{a.year}</span>
            <Link
              to={`/security/lab/${a.id}`}
              className="font-semibold hover:underline"
            >
              {a.name}
            </Link>
            <StatusPill status={a.status} />
            <span className="text-xs uppercase tracking-wide text-neutral-400">
              {ERA_LABELS[a.era]}
            </span>
          </div>
        </li>
      ))}
    </ol>
  );
}

const ERA_LABELS: Record<Era, string> = {
  classics: "Clásicos",
  "modern-symmetric": "Simétricos modernos",
  "public-key": "Clave pública",
};
