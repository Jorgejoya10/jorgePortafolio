// src/components/protocols/ProtocolsIntro.tsx

interface ProtocolsIntroProps {
  title: string;
  intro: string;
}

const ProtocolsIntro = ({ title, intro }: ProtocolsIntroProps) => {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl md:text-6xl font-bold tracking-tight max-w-5xl">{title}</h1>

      <p className="max-w-5xl text-sm md:text-base leading-7">
        {intro}
      </p>
    </section>
  );
};

export default ProtocolsIntro;