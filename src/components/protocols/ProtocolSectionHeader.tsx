// src/components/protocols/ProtocolSectionHeader.tsx

interface ProtocolSectionHeaderProps {
  title: string;
  description?: string;
}

const ProtocolSectionHeader = ({
  title,
  description,
}: ProtocolSectionHeaderProps) => {
  return (
    <div className="space-y-2">
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{title}</h2>

      {description && (
        <p className="text-sm md:text-base leading-7 text-neutral-700 dark:text-neutral-300">
          {description}
        </p>
      )}
    </div>
  );
};

export default ProtocolSectionHeader;