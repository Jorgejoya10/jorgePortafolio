// src/components/protocols/ProtocolTimelineSection.tsx

import type { ProtocolTimelineItem } from "./types";
import ProtocolSectionHeader from "./ProtocolSectionHeader";

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
  return (
    <section className="space-y-6">
      <ProtocolSectionHeader title={title} description={subtitle} />

      <div className="rounded-2xl border p-6">
        <div className="flex flex-wrap gap-4 text-sm">
          {items.length > 0 ? (
            items.map((item) => (
              <div
                key={item.id}
                className="rounded-full border"
              >
                {item.year} — {item.translationKey.split(".").pop()}
              </div>
            ))
          ) : (
            <span >
              Timeline component in progress.
            </span>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProtocolTimelineSection;