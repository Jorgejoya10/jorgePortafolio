// src/components/protocols/ProtocolCatalogTable.tsx

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import type { ProtocolCatalogItem } from "./types";

interface ProtocolCatalogTableProps {
  items: ProtocolCatalogItem[];
}

const ProtocolCatalogTable = ({ items }: ProtocolCatalogTableProps) => {
  const { t } = useTranslation();

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[900px] border-collapse">
        <thead>
          <tr className="border-b border-neutral-300 dark:border-neutral-700">
            <th className="px-4 py-4 text-left text-sm font-semibold">
              {t("protocols.tables.headers.protocol")}
            </th>
            <th className="px-4 py-4 text-left text-sm font-semibold">
              {t("protocols.tables.headers.title")}
            </th>
            <th className="px-4 py-4 text-left text-sm font-semibold">
              {t("protocols.tables.headers.osiLayer")}
            </th>
            <th className="px-4 py-4 text-left text-sm font-semibold">
              {t("protocols.tables.headers.historicalRfc")}
            </th>
            <th className="px-4 py-4 text-left text-sm font-semibold">
              {t("protocols.tables.headers.publicationDate")}
            </th>
          </tr>
        </thead>

        <tbody>
          {items.map((item) => {
            const name = t(`${item.translationKey}.name`);
            const title = t(`${item.translationKey}.title`);
            const osiLayer = t(`${item.translationKey}.osiLayer`);

            return (
              <tr
                key={item.id}
                className="border-b border-neutral-200 transition-colors hover:bg-neutral-50 dark:border-neutral-800 dark:hover:bg-neutral-900/40"
              >
                <td className="px-4 py-4 text-sm font-semibold">
                  {item.isNavigable && item.route ? (
                    <Link
                      to={item.route}
                      className="text-blue-600 hover:underline dark:text-blue-400"
                    >
                      {name}
                    </Link>
                  ) : (
                    <span className="text-neutral-500 dark:text-neutral-400">
                      {name}
                    </span>
                  )}
                </td>

                <td className="px-4 py-4 text-sm text-neutral-800 dark:text-neutral-200">
                  {title}
                </td>

                <td className="px-4 py-4 text-sm text-neutral-800 dark:text-neutral-200">
                  {osiLayer}
                </td>

                <td className="px-4 py-4 text-sm text-neutral-800 dark:text-neutral-200">
                  {item.historicalRfc}
                </td>

                <td className="px-4 py-4 text-sm text-neutral-800 dark:text-neutral-200">
                  {item.publicationDate}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProtocolCatalogTable;