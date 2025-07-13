// src/components/seguridad/Section.tsx
import type { ReactNode } from "react";

interface SectionProps {
  icon: ReactNode;
  title: string;
  items?: string[];
  collapsed?: boolean;
}

const Section = ({ icon, title, items = [], collapsed = false }: SectionProps) => {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 font-bold text-sm mb-1">
        <span>{icon}</span>
        {!collapsed && <span>{title}</span>}
      </div>
      {!collapsed &&
        items.map((item, idx) => (
          <p key={idx} className="pl-6 text-sm">
            {item}
          </p>
        ))}
    </div>
  );
};

export default Section;
