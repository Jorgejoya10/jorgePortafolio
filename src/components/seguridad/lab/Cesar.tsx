import { useMemo, useState } from "react";
import { useAlgorithmRunner } from "../../../lab/core/useAlgorithmRunner";

type Props = { algoId: string };

export default function Cesar({ algoId }: Props) {
  const { run } = useAlgorithmRunner();

  const [shift, setShift] = useState(3);
  const [input, setInput] = useState("HELLO WORLD");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  // Generates the Caesar cipher mapping for display
  const mapping = useMemo(() => {
    const A = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const k = ((shift % 26) + 26) % 26;
    return A.split("").map((ch, i) => `${ch}→${A[(i + k) % 26]}`).join("  ");
  }, [shift]);

  // Handles encryption and decryption
  const handleRun = async (mode: "encrypt" | "decrypt") => {
    setError("");
    try {
      const args =
        mode === "encrypt"
          ? { plaintext: input, shift }
          : { ciphertext: input, shift };
      const res = await run(algoId, mode, args);
      setOutput(new TextDecoder().decode(res.output));
    } catch (e: any) {
      setError(e?.message ?? String(e));
      setOutput("");
    }
  };

  // Ensures shift stays within 0–25
  const clampShift = (v: number) => {
    const n = Number.isFinite(v) ? v : 0;
    setShift(((Math.round(n) % 26) + 26) % 26);
  };

  // Input controls for shift value
  function ShiftInput() {
    return (
      <label className="flex flex-col gap-1">
        <span className="text-sm text-neutral-400">Desplazamiento (0–25)</span>
        <input
          type="number"
          min={0}
          max={25}
          value={shift}
          onChange={e => clampShift(Number(e.target.value))}
          className="rounded-md border border-neutral-700 p-2"
        />
        <input
          type="range"
          min={0}
          max={25}
          value={shift}
          onChange={e => clampShift(Number(e.target.value))}
          className="w-full"
        />
        <div className="text-xs text-neutral-400 break-words">{mapping}</div>
      </label>
    );
  }

  // Input controls for text
  function TextInput() {
    return (
      <label className="flex flex-col gap-1 md:col-span-2">
        <span className="text-sm text-neutral-400">Texto</span>
        <textarea
          rows={4}
          className="w-full rounded-md border border-neutral-700 p-3"
          value={input}
          onChange={e => setInput(e.target.value)}
          spellCheck={false}
        />
      </label>
    );
  }

  return (
    <div className="space-y-5">
      <p className="text-neutral-300">
        Cifrado por sustitución monoalfabética. Solo transforma letras A–Z (ignora acentos y deja otros
        caracteres tal cual). <span className="text-red-400 font-semibold">Inseguro</span> hoy en día.
      </p>

      <div className="grid md:grid-cols-3 gap-4">
        <TextInput />
        <ShiftInput />
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => handleRun("encrypt")}
          className="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-500"
        >
          Cifrar
        </button>
        <button
          onClick={() => handleRun("decrypt")}
          className="px-4 py-2 rounded-md bg-neutral-500 hover:bg-neutral-600"
        >
          Descifrar
        </button>
        <button
          onClick={() => {
            setInput("");
            setOutput("");
            setError("");
          }}
          className="px-4 py-2 rounded-md border border-neutral-700"
        >
          Limpiar
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
          className="w-full rounded-md border border-neutral-700 p-3"
          value={output}
        />
      </div>

      <div className="rounded-xl border border-neutral-700 p-4 text-sm text-neutral-800">
        <b>Consejo didáctico:</b> prueba con distintos desplazamientos y observa cómo el patrón de
        frecuencias en español/inglés permite romperlo rápidamente.
      </div>
    </div>
  );
}


