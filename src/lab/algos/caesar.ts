import type { Algorithm, RunnerResult } from "../core/types";
import { strToBytes } from "../core/utils";

const A = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// normaliza: quita acentos básicos y convierte a mayúsculas
function normalizeLetters(s: string) {
  return s
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // elimina diacríticos
    .toUpperCase();
}

function shiftChar(ch: string, k: number) {
  const i = A.indexOf(ch);
  if (i < 0) return ch; // no es A..Z
  const j = (i + k + 26) % 26;
  return A[j];
}

function runCaesar(text: string, k: number): string {
  const norm = normalizeLetters(text);
  const kk = ((k % 26) + 26) % 26;
  return [...norm].map((ch) => shiftChar(ch, kk)).join("");
}

const CaesarImpl: Algorithm = {
  id: "caesar",
  name: "César",
  year: -50,
  kind: "classical",
  category: "classics",

  async encrypt(params: Record<string, any>): Promise<RunnerResult> {
    const plaintext = String(params.plaintext ?? "");
    const k = Number(params.shift ?? 0);
    const out = runCaesar(plaintext, k);
    return { output: strToBytes(out), meta: { shift: ((k % 26) + 26) % 26 } };
  },

  async decrypt(params: Record<string, any>): Promise<RunnerResult> {
    const ciphertext = String(params.ciphertext ?? "");
    const k = Number(params.shift ?? 0);
    const out = runCaesar(ciphertext, -k);
    return { output: strToBytes(out), meta: { shift: ((-k % 26) + 26) % 26 } };
  },
};

export default CaesarImpl;
