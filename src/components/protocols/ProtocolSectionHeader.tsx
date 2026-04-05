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
      <h2 className="text-2xl md:text-[40px] font-bold tracking-tight leading-tight">
        {title}
      </h2>

      {description && (
        <p className="max-w-[1200px] text-sm md:text-base leading-7 text-neutral-800 dark:text-neutral-300">
          {description}
        </p>
      )}
    </div>
  );
};

export default ProtocolSectionHeader;