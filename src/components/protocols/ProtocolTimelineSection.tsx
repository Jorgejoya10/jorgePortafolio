// src/components/protocols/ProtocolTimelineSection.tsx

import { useState } from "react";
import type { ProtocolTimelineItem } from "./types";
import ProtocolSectionHeader from "./ProtocolSectionHeader";
import ProtocolTimeline from "./ProtocolTimeline";
import ProtocolTimelineModal from "./ProtocolTimelineModal";

interface ProtocolTimelineSectionProps {
  title: string;
  subtitle: string;
  items: ProtocolTimelineItem[];
}

const ProtocolTimelineSection = ({
  title,
  subtitle,
  items,
}: ProtocolTimelineSectionProps) => {
  const [selectedItem, setSelectedItem] = useState<ProtocolTimelineItem | null>(
    items[0] ?? null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSelect = (item: ProtocolTimelineItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="space-y-6">
      <ProtocolSectionHeader title={title} description={subtitle} />

      <div className="rounded-3xl border p-6">
        <ProtocolTimeline
          items={items}
          activeItemId={selectedItem?.id ?? null}
          onSelect={handleSelect}
        />
      </div>

      <ProtocolTimelineModal
        item={selectedItem}
        isOpen={isModalOpen}
        onClose={handleClose}
      />
    </section>
  );
};

export default ProtocolTimelineSection;