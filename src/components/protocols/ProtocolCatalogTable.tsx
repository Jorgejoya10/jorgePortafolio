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
      <table className="w-full min-w-[980px] border-collapse">
        <thead>
          <tr className="border-b border-neutral-300 dark:border-neutral-700">
            <th className="px-5 py-4 text-left text-sm font-bold">
              {t("protocols.tables.headers.protocol")}
            </th>
            <th className="px-5 py-4 text-left text-sm font-bold">
              {t("protocols.tables.headers.title")}
            </th>
            <th className="px-5 py-4 text-left text-sm font-bold">
              {t("protocols.tables.headers.osiLayer")}
            </th>
            <th className="px-5 py-4 text-left text-sm font-bold">
              {t("protocols.tables.headers.historicalRfc")}
            </th>
            <th className="px-5 py-4 text-left text-sm font-bold">
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
                className="border-b border-neutral-300 transition-colors hover:bg-neutral-50/70 dark:border-neutral-700 dark:hover:bg-neutral-900/40"
              >
                <td className="px-5 py-5 text-sm font-semibold align-middle">
                  {item.isNavigable && item.route ? (
                    <Link
                      to={item.route}
                      className="text-blue-600 hover:underline dark:text-blue-400"
                    >
                      {name}
                    </Link>
                  ) : (
                    <span className="text-neutral-700 dark:text-neutral-300">
                      {name}
                    </span>
                  )}
                </td>

                <td className="px-5 py-5 text-sm ">
                  {title}
                </td>

                <td className="px-5 py-5 text-sm ">
                  {osiLayer}
                </td>

                <td className="px-5 py-5 text-sm ">
                  {item.historicalRfc}
                </td>

                <td className="px-5 py-5 text-sm ">
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