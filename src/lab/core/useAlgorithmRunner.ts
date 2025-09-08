import { useCallback } from "react";
import { getAlgoImpl } from "../registry";
import type { Mode } from "./types";

export function useAlgorithmRunner() {
  const run = useCallback(async (id: string, mode: Mode, params: Record<string,any>) => {
    const impl = getAlgoImpl(id);
    if (!impl) throw new Error(`Algorithm not implemented: ${id}`);
    if (mode === "encrypt") return impl.encrypt(params);
    if (mode === "decrypt" && impl.decrypt) return impl.decrypt(params);
    if (mode === "sign"    && impl.sign)    return impl.sign(params);
    if (mode === "verify"  && impl.verify)  return { output: new Uint8Array(), meta: { ok: await impl.verify(params) } };
    throw new Error(`Mode not supported for ${id}: ${mode}`);
  }, []);
  return { run };
}

