interface Props {
  id: string;
}

const BackendSection = ({ id }: Props) => {
  return (
    <section id={id} className="w-full px-6 py-12 flex flex-col items-center gap-6">
      {/* Encabezado */}
      <div className="bg-[#ADD5C8] rounded-[2rem] px-10 py-8 text-left w-full max-w-4xl h-130">
        <h2 className="text-8xl font-bold leading-tight text-[#165842]">
          El desarrollo <br />
          <span className="text-black">es más que código.</span>
        </h2>
      </div>

      {/* Planeación del proyecto */}
      <div className="bg-black rounded-[2rem] px-10 py-8 text-white flex items-center justify-between w-full max-w-4xl h-140">
        <p className="text-6xl font-semibold leading-tight max-w-sm">
          Es planeación <br />
          del proyecto.
        </p>
        <img
          src="/desarrollo/planeacion.png"
          alt="Planeación"
          className="w-110 h-auto rounded-xl"
        />
      </div>

      {/* Diseño y Testeo */}
      <div className="flex gap-6 w-full max-w-4xl">
        {/* Diseño */}
        <div className="bg-[#165842] text-white flex-1 rounded-[2rem] px-8 py-10 flex flex-col items-center justify-center">
          <img
            src="/desarrollo/diseño.png"
            alt="Diseño"
            className="w-64 h-64 mb-4"
          />
          <p className="text-6xl font-semibold">Es diseño.</p>
        </div>

        {/* Testeo */}
        <div className="bg-[#DBE4E0] text-black flex-1 rounded-[2rem] px-8 py-10 flex flex-col items-center justify-center">
          <img
            src="/desarrollo/testeo.png"
            alt="Testeo"
            className="w-64 h-64 mb-4"
          />
          <p className="text-6xl font-semibold">Es testeo.</p>
        </div>
      </div>

      {/* Creatividad */}

      <div className="bg-white rounded-[2rem] p-6 w-full max-w-4xl text-black relative overflow-hidden">
        {/* Imagen en la esquina superior derecha */}
        <div className="absolute top-6 right-6 w-[70%] max-w-[600px]">
          <img
            src="/desarrollo/creatividad.png"
            alt="Creatividad"
            className="w-full h-auto rounded-xl"
          />
        </div>

        {/* Texto abajo a la izquierda */}
        <div className="mt-[320px]">
          {/* Ajusta el margen según la altura de tu imagen */}
          <h2 className="text-7xl font-bold leading-tight">
            Es <br />
            <span className="text-7xl">creatividad.</span>
          </h2>
          <p className="text-xl text-gray-600 mt-3">
            Algunos lo llaman “Frontend”.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BackendSection;
