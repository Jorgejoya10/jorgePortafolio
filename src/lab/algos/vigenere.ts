import type { Algorithm, RunnerResult } from "../core/types";
import { strToBytes } from "../core/utils";

const ALPH_EN = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const ALPH_ES = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";

function stripAccentsKeepEnye(s: string) {
  return s
    .replace(/[áàäâ]/gi, "a")
    .replace(/[éèëê]/gi, "e")
    .replace(/[íìïî]/gi, "i")
    .replace(/[óòöô]/gi, "o")
    .replace(/[úùüû]/gi, "u")
    .replace(/ç/gi, "c"); // no tocar ñ
}

function normalize(s: string) {
  return stripAccentsKeepEnye(s).toUpperCase();
}

function normalizeKey(key: string, alphabet: string) {
  const K = normalize(key).split("").filter(ch => alphabet.includes(ch)).join("");
  if (!K.length) throw new Error("Clave inválida: no contiene letras del alfabeto seleccionado.");
  return K;
}

function vigenereCore(text: string, key: string, alphabet: string, enc: boolean) {
  const N = alphabet.length;
  const T = normalize(text);
  const K = normalizeKey(key, alphabet);
  let j = 0;
  const out: string[] = [];
  for (const ch of T) {
    const i = alphabet.indexOf(ch);
    if (i === -1) { out.push(ch); continue; }
    const k = alphabet.indexOf(K[j % K.length]);
    j++;
    const idx = enc ? (i + k) % N : (i - k + N) % N;
    out.push(alphabet[idx]);
  }
  return out.join("");
}

const VigenereImpl: Algorithm = {
  id: "vigenere",
  name: "Vigenère",
  year: 1553,
  kind: "classical",
  category: "classics",

  async encrypt(p: Record<string, any>): Promise<RunnerResult> {
    const alphabet = (p.alphabet === "en" ? ALPH_EN : ALPH_ES);
    const out = vigenereCore(String(p.text ?? ""), String(p.key ?? ""), alphabet, true);
    return { output: strToBytes(out), meta: { alphabet: p.alphabet ?? "es" } };
  },
  async decrypt(p: Record<string, any>): Promise<RunnerResult> {
    const alphabet = (p.alphabet === "en" ? ALPH_EN : ALPH_ES);
    const out = vigenereCore(String(p.text ?? ""), String(p.key ?? ""), alphabet, false);
    return { output: strToBytes(out), meta: { alphabet: p.alphabet ?? "es" } };
  },
};

export default VigenereImpl;
