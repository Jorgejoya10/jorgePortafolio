// src/lab/core/utils.ts

/** TextEncoder/TextDecoder compartidos */
export const te = new TextEncoder();
export const td = new TextDecoder();

/** Strings ⇄ bytes */
export function strToBytes(s: string): Uint8Array {
  return te.encode(s ?? "");
}
export function bytesToStr(b: Uint8Array): string {
  return td.decode(b ?? new Uint8Array());
}

/** Bytes ⇄ hex */
export function bytesToHex(b: Uint8Array): string {
  return Array.from(b, x => x.toString(16).padStart(2, "0")).join("");
}
export function hexToBytes(hex: string): Uint8Array {
  const clean = (hex || "").replace(/[^0-9a-f]/gi, "").toLowerCase();
  const out = new Uint8Array(clean.length / 2);
  for (let i = 0; i < out.length; i++) {
    out[i] = parseInt(clean.substr(i * 2, 2), 16);
  }
  return out;
}

/** Bytes ⇄ Base64 (funciona en navegador y Node) */
export function bytesToB64(b: Uint8Array): string {
  if (typeof btoa === "function") {
    let s = "";
    b.forEach(ch => (s += String.fromCharCode(ch)));
    return btoa(s);
  }
  // fallback Node
  // @ts-ignore
  return Buffer.from(b).toString("base64");
}
export function b64ToBytes(b64: string): Uint8Array {
  if (typeof atob === "function") {
    const bin = atob(b64 || "");
    const out = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
    return out;
  }
  // fallback Node
  // @ts-ignore
  return new Uint8Array(Buffer.from(b64 || "", "base64"));
}

/** Random seguro del navegador */
export function randomBytes(len: number): Uint8Array {
  const u = new Uint8Array(len);
  (globalThis.crypto as Crypto).getRandomValues(u);
  return u;
}
