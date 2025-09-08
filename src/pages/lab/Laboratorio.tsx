import { useParams, Link, useNavigate } from "react-router-dom";
import Playground from "../../components/seguridad/lab/Playground";
import { CATALOG, byEra, findMeta, indexOfId } from "../../components/seguridad/lab/registry-ui";

export default function Laboratorio() {
  const { algoId } = useParams<{algoId: string}>();
  const meta = findMeta(algoId);
  const nav = useNavigate();

  const idx = meta ? indexOfId(meta.id) : -1;
  const prev = idx > 0 ? CATALOG[idx-1] : null;
  const next = idx >= 0 && idx < CATALOG.length-1 ? CATALOG[idx+1] : null;

  return (
    <main className="min-h-screen grid md:grid-cols-[260px_1fr]">
      <aside className="border-r border-neutral-800 p-4 sticky top-0 h-screen overflow-auto">
        <h2 className="text-lg font-bold mb-3">Línea del tiempo</h2>
        <EraBlock title="Clásicos" items={byEra("classics")} />
        <EraBlock title="Simétricos modernos" items={byEra("modern-symmetric")} />
        <EraBlock title="Clave pública" items={byEra("public-key")} />
      </aside>

      <section className="p-6 md:p-10 max-w-5xl">
        {!meta ? (
          <>
            <h1 className="text-4xl font-extrabold mb-3">Laboratorio de Criptografía</h1>
            <p className="text-neutral-300 mb-6">Recorre la evolución de los cifrados. Todo corre en tu navegador.</p>
            <Link to={`/security/lab/${CATALOG[0].id}`} className="px-4 py-2 rounded bg-white text-black font-semibold">
              Empezar recorrido
            </Link>
          </>
        ) : (
          <>
            <div className="text-sm text-neutral-400 mb-4">
              <Link to="/security/lab" className="hover:underline">Laboratorio</Link> · {meta.name} ({meta.year})
            </div>
            <h1 className="text-3xl font-bold mb-6">{meta.name}</h1>
            <Playground algoId={meta.id} />

            <div className="flex justify-between mt-10">
              <button disabled={!prev} onClick={()=>prev && nav(`/security/lab/${prev.id}`)}
                className="px-3 py-2 rounded border border-neutral-700 disabled:opacity-40">
                {prev ? `← ${prev.name}` : " "}
              </button>
              <button disabled={!next} onClick={()=>next && nav(`/security/lab/${next.id}`)}
                className="px-3 py-2 rounded bg-white text-black font-semibold disabled:opacity-40">
                {next ? `${next.name} →` : " "}
              </button>
            </div>
          </>
        )}
      </section>
    </main>
  );
}

function EraBlock({ title, items }:{title:string; items: typeof CATALOG}) {
  return (
    <div className="mb-4">
      <div className="text-sm uppercase tracking-wide text-neutral-400 mb-2">{title}</div>
      <nav className="space-y-1">
        {items.map(a => (
          <Link key={a.id} to={`/security/lab/${a.id}`} className="block px-3 py-1 rounded text-neutral-300 hover:bg-neutral-900">
            {a.name} <span className="text-neutral-500">({a.year})</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}
