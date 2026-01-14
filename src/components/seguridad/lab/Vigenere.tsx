import { useMemo, useState } from "react";
import { useAlgorithmRunner } from "../../../lab/core/useAlgorithmRunner";

type Props = { algoId: string };

export default function Vigenere({ algoId }: Props) {
  const { run } = useAlgorithmRunner();

  const [text, setText] = useState("ATAQUE AL AMANECER");
  const [key, setKey] = useState("CLAVE");
  const [alphabet, setAlphabet] = useState<"es" | "en">("es");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const keyPreview = useMemo(() => {
    // muestra la clave repetida solo sobre letras del alfabeto elegido
    const alph = alphabet === "es" ? "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ" : "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const K = normalizeKey(key, alph);
    if (!K) return "";
    let i = 0;
    return [...normalizeText(text)].map((ch) => {
      if (alph.includes(ch)) {
        const k = K[i % K.length]; i++;
        return k;
      }
      return " ";
    }).join("");
  }, [text, key, alphabet]);

  async function doRun(mode: "encrypt" | "decrypt") {
    setError("");
    try {
      const res = await run(algoId, mode, { text, key, alphabet });
      setOutput(new TextDecoder().decode(res.output));
    } catch (e: any) {
      setOutput("");
      setError(e?.message ?? String(e));
    }
  }

  const keyOk = useMemo(() => {
    const alph = alphabet === "es" ? "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ" : "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return normalizeKey(key, alph).length > 0;
  }, [key, alphabet]);

  return (
    <div className="space-y-5">
      <p className="text-neutral-300">
        Cifrado polialfabético que usa una <b>tabla de Vigenère</b> (tabula recta) y una clave que
        se repite sobre el texto. Aquí trabajamos por defecto con el alfabeto español (incluye Ñ).
      </p>

      <div className="grid md:grid-cols-3 gap-4">
        <label className="flex flex-col gap-1 md:col-span-2">
          <span className="text-sm text-neutral-400">Texto</span>
          <textarea
            rows={4}
            className="w-full rounded-md bg-neutral-900 border border-neutral-700 p-3"
            value={text}
            onChange={(e) => setText(e.target.value)}
            spellCheck={false}
          />
        </label>

        <div className="flex flex-col gap-3">
          <label className="flex flex-col gap-1">
            <span className="text-sm text-neutral-400">Clave</span>
            <input
              className="rounded-md bg-neutral-900 border border-neutral-700 p-2"
              value={key}
              onChange={(e) => setKey(e.target.value)}
            />
            {!keyOk && (
              <span className="text-xs text-red-400">
                La clave debe contener al menos una letra del alfabeto seleccionado.
              </span>
            )}
          </label>

          <label className="flex flex-col gap-1">
            <span className="text-sm text-neutral-400">Alfabeto</span>
            <select
              value={alphabet}
              onChange={(e) => setAlphabet(e.target.value as "es" | "en")}
              className="rounded-md bg-neutral-900 border border-neutral-700 p-2"
            >
              <option value="es">Español (A–Z + Ñ)</option>
              <option value="en">Inglés (A–Z)</option>
            </select>
          </label>
        </div>
      </div>

      <div className="rounded-md border border-neutral-700 bg-neutral-900 p-3 text-xs font-mono text-neutral-300">
        <div className="mb-1 text-neutral-400">Clave repetida (sobre letras):</div>
        <pre className="whitespace-pre-wrap break-words">{keyPreview}</pre>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => doRun("encrypt")}
          disabled={!keyOk}
          className="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-500 disabled:opacity-40"
        >
          Cifrar
        </button>
        <button
          onClick={() => doRun("decrypt")}
          disabled={!keyOk}
          className="px-4 py-2 rounded-md bg-neutral-700 hover:bg-neutral-600 disabled:opacity-40"
        >
          Descifrar
        </button>
        <button
          onClick={() => { setOutput(""); }}
          className="px-4 py-2 rounded-md border border-neutral-700"
        >
          Limpiar salida
        </button>
      </div>

      {error && (
        <div className="rounded-md border border-red-700 bg-red-950/40 p-3 text-red-300">
          {error}
        </div>
      )}

      <div>
        <h4 className="text-sm text-neutral-400 mb-1">Salida</h4>
        <textarea
          rows={4}
          readOnly
          className="w-full rounded-md bg-neutral-900 border border-neutral-700 p-3"
          value={output}
        />
      </div>

      <div className="rounded-xl border border-neutral-700 bg-neutral-900 p-4 text-sm text-neutral-300">
        <b>Notas:</b> se ignoran tildes (á→a, ü→u) y se preservan espacios/puntuación. Vigenère es
        vulnerable a Kasiski/Friedman y análisis de frecuencia por sub-alfabetos.
      </div>
    </div>
  );
}

/* helpers locales (solo para el preview de la clave) */
function normalizeText(s: string) {
  return stripAccentsKeepEnye(s).toUpperCase();
}

function normalizeKey(k: string, alph: string) {
  return normalizeText(k)
    .split("")
    .filter((ch) => alph.includes(ch))
    .join("");
}

function stripAccentsKeepEnye(s: string) {
  return s
    .replace(/[áàäâ]/gi, "a")
    .replace(/[éèëê]/gi, "e")
    .replace(/[íìïî]/gi, "i")
    .replace(/[óòöô]/gi, "o")
    .replace(/[úùüû]/gi, "u")
    .replace(/ç/gi, "c"); // ñ se conserva tal cual
}

