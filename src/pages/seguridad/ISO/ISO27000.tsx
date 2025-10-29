import { Lock } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function ISO27000() {
  const { t } = useTranslation();

  // Solo ID y disponibilidad; el título viene del JSON por i18n.
  const standards: { id: string; available: boolean }[] = [
    { id: "27000", available: false },
    { id: "27001", available: true },
    { id: "27002", available: true },
    { id: "27003", available: false },
    { id: "27004", available: false },
    { id: "27005", available: false },
    { id: "27006", available: false },
    { id: "27007", available: false },
    { id: "27008", available: false },
    { id: "27009", available: false },
    { id: "27017", available: false },
    { id: "27018", available: false },
    { id: "27019", available: false },
  ];

  // Genera href solo para estándares con página disponible
  const hrefFor = (id: string, available: boolean) =>
    available && (id === "27001" || id === "27002") ? `/security/ISO${id}` : undefined;

  return (
    <main className="min-h-screen p-2 md:p-2">
      <h1 className="text-7xl font-bold mb-6">{t("iso27000.title")}</h1>

      <p className="max-w-5xl mb-10">
        {t("iso27000.description.prefix")} <b>ISO 27001</b>{" "}
        {t("iso27000.description.mid")} <b>ISO 27002</b>{" "}
        {t("iso27000.description.suffix")}
      </p>

      <table className="w-full border-collapse">
        <thead>
          <tr className="text-left border-">
            <th className="py-3 px-4 font-semibold">{t("iso27000.table.standard")}</th>
            <th className="py-3 px-4 font-semibold">{t("iso27000.table.title")}</th>
            <th className="py-3 px-4 font-semibold text-center">{t("iso27000.table.status")}</th>
          </tr>
        </thead>
        <tbody>
          {standards.map((std) => {
            const href = hrefFor(std.id, std.available);
            const isLink = Boolean(href);

            return (
              <tr
                key={std.id}
                className={`border-b border-neutral-800 ${
                  std.available ? "hover:bg-gray-100" : "opacity-30"
                }`}
              >
                {/* Columna: ISO/IEC #### */}
                <td className="py-3 px-4 font-mono text-sm text-blue-400">
                  {isLink ? (
                    <Link to={href!} className="hover:underline">
                      ISO/IEC {std.id}
                    </Link>
                  ) : (
                    <>ISO/IEC {std.id}</>
                  )}
                </td>

                {/* Columna: Título */}
                <td className="py-3 px-4">
                  {isLink ? (
                    <Link to={href!} className="hover:underline">
                      {t(`iso27000.items.${std.id}.title`)}
                    </Link>
                  ) : (
                    t(`iso27000.items.${std.id}.title`)
                  )}
                </td>

                {/* Columna: Estado */}
                <td className="py-3 px-4 text-center">
                  {std.available ? (
                    <span className="px-3 py-1 text-xs rounded bg-green-700/30 text-green-400 border border-green-700">
                      {t("iso27000.status.available")}
                    </span>
                  ) : (
                    <span
                      className="inline-flex items-center gap-1 px-3 py-1 text-xs rounded bg-neutral-800 text-neutral-500 border border-neutral-700"
                      aria-disabled="true"
                    >
                      <Lock size={12} /> {t("iso27000.status.locked")}
                    </span>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <p className="mt-10 text-neutral-500 text-sm">
        {t("iso27000.footer.comingSoon")}
      </p>
    </main>
  );
}
