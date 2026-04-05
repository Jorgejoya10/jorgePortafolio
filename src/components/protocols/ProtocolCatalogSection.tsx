// src/components/protocols/ProtocolCatalogSection.tsx

import type { ProtocolCatalogItem } from "./types";
import ProtocolCatalogTable from "./ProtocolCatalogTable";
import ProtocolSectionHeader from "./ProtocolSectionHeader";

interface ProtocolCatalogSectionProps {
  groupId: string;
  title: string;
  description?: string;
  items: ProtocolCatalogItem[];
}

const ProtocolCatalogSection = ({
  title,
  description,
  items,
}: ProtocolCatalogSectionProps) => {
  return (
    <section className="space-y-4">
      <ProtocolSectionHeader title={title} description={description} />
      <ProtocolCatalogTable items={items} />
    </section>
  );
};

export default ProtocolCatalogSection;