import React from "react";

export type Era = "classics" | "modern-symmetric" | "public-key";
export type Status = "insecure" | "legacy" | "recommended";

export interface AlgoMeta {
  id: string;
  name: string;
  year: number;
  era: Era;
  status: Status;
  ui: React.LazyExoticComponent<React.ComponentType<{algoId: string}>>;
}

export const CATALOG: AlgoMeta[] = [
  { id:"caesar",   name:"César",     year:-50,  era:"classics",         status:"insecure",
    ui: React.lazy(() => import("./Cesar")) },         // <-- sin /algorithms y usando 'Cesar'
//   { id:"vigenere", name:"Vigenère",  year:1553, era:"classics",         status:"insecure",
//     ui: React.lazy(() => import("./Vigenere")) },
//   { id:"des",      name:"DES",       year:1977, era:"modern-symmetric", status:"insecure",
//     ui: React.lazy(() => import("./DES")) },
//   { id:"3des",     name:"3DES",      year:1998, era:"modern-symmetric", status:"legacy",
//     ui: React.lazy(() => import("./TripleDES")) },
//   { id:"aes-gcm",  name:"AES (GCM)", year:2001, era:"modern-symmetric", status:"recommended",
//     ui: React.lazy(() => import("./AES")) },
//   { id:"rsa",      name:"RSA",       year:1977, era:"public-key",       status:"recommended",
//     ui: React.lazy(() => import("./RSA")) },
//   { id:"elgamal",  name:"ElGamal",   year:1985, era:"public-key",       status:"legacy",
//     ui: React.lazy(() => import("./ElGamal")) },
];

export const byEra = (e: Era) => CATALOG.filter(x => x.era === e);
export const findMeta = (id?: string) => CATALOG.find(x => x.id === id);
export const indexOfId = (id: string) => CATALOG.findIndex(x => x.id === id);
