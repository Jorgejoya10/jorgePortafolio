interface Props {
  id: string;
}

const SecuritySection = ({ id }: Props) => {
  return (
    <section
      id={id}
      className="w-full px-6 py-12 flex flex-col items-center gap-6"
    >
      {/* Encabezado azul */}
      <div className="bg-[#B5C0E2] rounded-[2rem] px-10 py-8 text-left w-full max-w-4xl h-100">
        <h2 className="text-8xl font-bold text-[#6350E2] leading-tight">
          Es protección
        </h2>
        <h2 className="text-8xl font-bold text-black leading-tight">
          de activos.
        </h2>
        <p className="text-2xl text-gray-700 mt-2">“Cyber Seguridad”</p>
      </div>

      {/* Tarjeta central */}
      <div className="bg-white rounded-[2rem] p-6 w-full max-w-4xl">
        <div className="flex items-end justify-between gap-15">
          <img
          src="/desarrollo/seguridad.png"
          alt="Arquitectura de Seguridad"
          className="w-110 h-auto rounded-xl mb-2"
        />
        <p className="text-4xl font-semibold text-gray-600">Siempre trabajando bajo los estándares internacionales.</p>
        </div>
        <p className="text-7xl font-bold text-black mt-2">
          Creación de una <br /> arquitectura de seguridad.
        </p>
      </div>

      {/* Tarjetas inferiores */}
      <div className="flex flex-col sm:flex-row gap-6 w-full max-w-4xl">
        {/* Criptografía */}
        <div className="flex-1 bg-black rounded-[1.5rem] px-6 py-8 flex flex-col items-center text-center">
          <img
            src="/desarrollo/cripto.jpg"
            alt="Fases del desarrollo"
            className="w-74 h-auto mb-4"
          />
          <p className="text-5xl text-white font-semibold">
            Es tener <br /> fundamentos matemáticos.
          </p>
        </div>

        {/* Seguridad en fases */}
        <div className="flex-1 bg-black rounded-[1.5rem] px-6 py-8 flex flex-col items-center text-center">
          <img
            src="/desarrollo/fases.png"
            alt="Fases del desarrollo"
            className="w-74 h-auto mb-4"
          />
          <p className="text-5xl text-white font-semibold">
            Es seguridad en <br /> todas las fases <br /> del desarrollo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
