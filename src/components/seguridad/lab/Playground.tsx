import { Suspense } from "react";
import { findMeta } from "./registry-ui";

export default function Playground({ algoId }: { algoId: string }) {
  const meta = findMeta(algoId);
  if (!meta) return <div className="text-red-400">Algoritmo no encontrado.</div>;
  const AlgoUI = meta.ui;
  return (
    <Suspense fallback={<div className="text-neutral-400">Cargando módulo…</div>}>
      <AlgoUI algoId={algoId} />
    </Suspense>
  );
}
