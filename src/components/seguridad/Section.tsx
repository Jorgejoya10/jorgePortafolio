import type { ReactNode } from "react";
import { Link } from "react-router-dom";

interface SectionProps {
  icon: ReactNode;
  title: string;
  to?: string;
  items: { label: string; to: string }[];
  collapsed: boolean;
}

const Section = ({ icon, title, to, items = [], collapsed = false }: SectionProps) => {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 font-bold text-sm mb-1">
        {to ? (
          <Link to={to} className="hover:scale-105 transition-transform">
            <span>{icon}</span>
          </Link>
        ) : (
          <span>{icon}</span>
        )}

        {!collapsed &&
          (to ? (
            <Link to={to} className="hover:underline">
              <span>{title}</span>
            </Link>
          ) : (
            <span>{title}</span>
          ))}
      </div>

      {!collapsed && (
        <ul className="mt-2 space-y-1">
          {items.map((item, idx) => (
            <li key={idx}>
              <Link to={item.to} className="text-sm hover:underline">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Section;
