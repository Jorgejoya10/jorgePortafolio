const Home = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
        Jorge Chávez
      </h1>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-light mb-">
        Desarrollador Full Stack y Arquitecto de Software Seguro
      </h2>

      <p className="max-w-2xl text-base sm:text-lg  leading-relaxed">
        Soy ingeniero en computación por la UNAM, apasionado por el desarrollo
        web moderno y la seguridad informática. He trabajado en proyectos que
        combinan interfaces elegantes con arquitecturas seguras, integrando
        tecnologías como React, Node.js, MongoDB y protocolos criptográficos.
        Actualmente curso un diplomado en Seguridad de la Información en el
        <a
          href="https://siberiano.aragon.unam.mx/labsec/dsi_etcom3/calendario"
          target="_blank"
          className="text-blue-400 underline ml-1"
        >
          LabSec UNAM
        </a>{" "}
        y desarrollo mi tesis profesional enfocada en el diseño e implementación
        de software seguro.
      </p>
    </section>
  )
}

export default Home
