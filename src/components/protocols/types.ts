//src/components/protocols/types.ts

export type ProtocolItemKind = "protocol" | "standard" | "family" | "milestone";

export interface ProtocolCatalogItem {
  id: string;
  translationKey: string;
  route?: string;
  publicationDate: string;
  historicalRfc: string;
  isNavigable: boolean;
  kind: ProtocolItemKind;
}

export interface ProtocolCatalogGroup {
  id: string;
  descriptionKey?: string;
  items: ProtocolCatalogItem[];
}

export interface ProtocolTimelineItem {
  id: string;
  translationKey: string;
  publicationDate: string;
  historicalRfc: string;
  color: string;
  route?: string;
  isNavigable?: boolean;
  year?: string;
}

