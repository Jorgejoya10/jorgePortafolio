export type AlgoKind = "classical" | "block" | "public";
export type Category = "classics" | "modern-symmetric" | "public-key";
export type Mode = "encrypt" | "decrypt" | "sign" | "verify";

export interface RunnerResult { output: Uint8Array; meta?: Record<string,any>; }

export interface Algorithm {
  id: string; name: string; year: number;
  kind: AlgoKind; category: Category;
  encrypt(p: Record<string,any>): Promise<RunnerResult>;
  decrypt?(p: Record<string,any>): Promise<RunnerResult>;
  sign?   (p: Record<string,any>): Promise<RunnerResult>;
  verify? (p: Record<string,any>): Promise<boolean>;
}
