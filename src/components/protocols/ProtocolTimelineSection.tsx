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
    <section className="space-y-4">
      <ProtocolSectionHeader title={title} description={subtitle} />

      <div className="rounded-2xl border border-neutral-200 p-6 dark:border-neutral-800">
        <p className="text-sm text-neutral-600 dark:text-neutral-300">
          Timeline component in progress.
        </p>

        <p className="mt-2 text-xs text-neutral-500 dark:text-neutral-400">
          Registered items: {items.length}
        </p>
      </div>
    </section>
  );
};

export default ProtocolTimelineSection;