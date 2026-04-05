// src/components/protocols/ProtocolTimelineModal.tsx

import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import type { ProtocolTimelineItem } from "./types";

interface ProtocolTimelineModalProps {
  item: ProtocolTimelineItem | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProtocolTimelineModal = ({
  item,
  isOpen,
  onClose,
}: ProtocolTimelineModalProps) => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !item) return null;

  const name = t(`${item.translationKey}.name`);
  const title = t(`${item.translationKey}.title`);
  const osiLayer = t(`${item.translationKey}.osiLayer`);

  const objectiveKey = `${item.translationKey}.shortObjective`;
  const noteKey = `${item.translationKey}.historicalNote`;

  const shortObjective = i18n.exists(objectiveKey) ? t(objectiveKey) : title;
  const historicalNote = i18n.exists(noteKey) ? t(noteKey) : "";

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/45 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl overflow-hidden rounded-3xl border "
        onClick={(event) => event.stopPropagation()}
      >
        <div
          className="h-2 w-full"
          style={{ backgroundColor: item.color }}
          aria-hidden="true"
        />

        <div className="p-6 md:p-8">
          <div className="mb-6 flex items-start justify-between gap-4">
            <div className="space-y-2">
              <p className="text-sm font-semibold tracking-wide">
                {item.publicationDate}
              </p>
              <h3 className="text-3xl font-bold tracking-tight">{name}</h3>
              <p className="text-base">
                {title}
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="rounded-full border  px-3 py-1.5 text-sm font-medium  transition hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-900"
            >
              ×
            </button>
          </div>

          <div className="mb-6 grid gap-3 md:grid-cols-3">
            <div className="rounded-2xl border border-neutral-200 p-4 dark:border-neutral-800">
              <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                RFC
              </p>
              <p className="mt-1 text-sm font-medium">{item.historicalRfc}</p>
            </div>

            <div className="rounded-2xl border border-neutral-200 p-4 dark:border-neutral-800">
              <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                OSI
              </p>
              <p className="mt-1 text-sm font-medium">{osiLayer}</p>
            </div>

            <div className="rounded-2xl border border-neutral-200 p-4 dark:border-neutral-800">
              <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                Date
              </p>
              <p className="mt-1 text-sm font-medium">{item.publicationDate}</p>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-lg font-semibold">
              {t("protocols.timeline.modal.objectiveTitle")}
            </h4>
            <p className="text-sm leading-7 text-neutral-700 dark:text-neutral-300">
              {shortObjective}
            </p>

            {historicalNote && (
              <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-900/40">
                <p className="text-sm leading-7 text-neutral-700 dark:text-neutral-300">
                  {historicalNote}
                </p>
              </div>
            )}
          </div>

          {item.isNavigable && item.route && (
            <div className="mt-8">
              <Link
                to={item.route}
                className="inline-flex items-center rounded-xl border border-neutral-300 px-4 py-2 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-100 dark:hover:bg-neutral-900"
              >
                {t("protocols.timeline.modal.viewSpec")}
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProtocolTimelineModal;