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
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight leading-tight max-w-5xl">
        {title}
      </h2>

      {description && (
        <p className="max-w-5xl text-sm md:text-base leading-7">
          {description}
        </p>
      )}
    </div>
  );
};

export default ProtocolSectionHeader;