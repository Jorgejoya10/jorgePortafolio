// src/lab/registry.ts
import type { Algorithm } from "./core/types";

// ✅ Implementaciones listas
import CaesarImpl from "./algos/caesar";

// ⏳ Cuando tengas las demás, las importas aquí:
// import VigenereImpl from "./algos/vigenere";
// import DESImpl from "./algos/des";
// import TDESImpl from "./algos/3des";
// import AESGCMImpl from "./algos/aes_gcm";
// import RSAImpl from "./algos/rsa";
// import ElGamalImpl from "./algos/elgamal";

/**
 * Tabla canónica id -> implementación lógica.
 * Solo incluimos lo que está implementado para evitar errores de import.
 */
const TABLE: Record<string, Algorithm> = {
  "caesar": CaesarImpl,
  // "vigenere": VigenereImpl,
  // "des": DESImpl,
  // "3des": TDESImpl,
  // "aes-gcm": AESGCMImpl,
  // "rsa": RSAImpl,
  // "elgamal": ElGamalImpl,
};

export const getAlgoImpl = (id: string): Algorithm | undefined => TABLE[id];
