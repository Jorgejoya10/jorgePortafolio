// src/components/protocols/ProtocolTimeline.tsx

import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import type { ProtocolTimelineItem } from "./types";

interface ProtocolTimelineProps {
  items: ProtocolTimelineItem[];
  activeItemId?: string | null;
  onSelect: (item: ProtocolTimelineItem) => void;
}

const ProtocolTimeline = ({
  items,
  activeItemId,
  onSelect,
}: ProtocolTimelineProps) => {
  const { t } = useTranslation();

  const groupedByYear = useMemo(() => {
    return items.reduce<Record<string, ProtocolTimelineItem[]>>((acc, item) => {
      const year = item.publicationDate.slice(0, 4);
      if (!acc[year]) acc[year] = [];
      acc[year].push(item);
      return acc;
    }, {});
  }, [items]);

  const years = Object.keys(groupedByYear).sort();

  // fuerza ancho suficiente para que exista scroll horizontal
  const timelineWidth = Math.max(years.length * 190, 1200);

  return (
    <div className="w-full overflow-x-auto overflow-y-hidden pb-4">
      <div
        className="relative px-6 pt-8 pb-6"
        style={{
          width: `${timelineWidth}px`,
          minWidth: "100%",
        }}
      >
        <div className="absolute left-6 right-6 top-[72px] h-1 rounded-full bg-slate-300/80 dark:bg-slate-700/80" />

        <div className="relative flex items-start gap-12">
          {years.map((year) => {
            const yearItems = groupedByYear[year];

            return (
              <div
                key={year}
                className="flex min-w-[150px] flex-col items-center"
              >
                <div className="mb-4 text-sm font-bold">
                  {year}
                </div>

                <div className="mb-4 flex items-center gap-2">
                  {yearItems.map((item) => {
                    const name = t(`${item.translationKey}.name`);
                    const isActive = activeItemId === item.id;

                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => onSelect(item)}
                        title={name}
                        className={`h-5 w-5 rounded-full border-2 border-white shadow transition-transform hover:scale-110 dark:border-neutral-950 ${
                          isActive ? "ring-4 ring-black/15 dark:ring-white/20" : ""
                        }`}
                        style={{ backgroundColor: item.color }}
                        aria-label={name}
                      />
                    );
                  })}
                </div>

                <div className="flex flex-col items-center gap-1 text-center">
                  {yearItems.map((item) => {
                    const name = t(`${item.translationKey}.name`);
                    // const isActive = activeItemId === item.id;

                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => onSelect(item)}
                        className={`text-xs font-medium transition hover:underline`}
                      >
                        {name}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProtocolTimeline;