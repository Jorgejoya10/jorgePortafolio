const HeaderAndNotice = () => {
  return (
    <section className="max-w-6xl mx-auto">
      <h1 className="md:text-5xl font-bold mb-2">
        Information Processing Systems - Open Systems Interconnection - Basic
        Reference Model. Part 2: Security Architecture.
      </h1>
      <p className="text-xs mt-1 text-justify">
        *Este análisis hace referencia a conceptos clave del estándar{" "}
        <strong>ISO 7498-2</strong>, parte de la familia 7498 sobre arquitectura
        de seguridad para sistemas abiertos. La parte 2 tiene un costo
        aproximado de <strong>150 USD</strong> en el sitio oficial de{" "}
        <a
          href="https://www.iso.org/standard/14256.html"
          className="text-blue-600 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          ISO.
        </a>
        {" "}No contamos con derechos de autor para su distribución completa,
        pero sí podemos presentar de forma legítima fragmentos y explicaciones
        basadas en su contenido, ya que ha sido adquirido legalmente para
        estudio y análisis. Además, puedes consultar de forma gratuita la
        primera parte de la familia{" "}
        <a
          href="https://www.iso.org/es/contents/data/standard/02/02/20269.html?browse=tc"
          className="text-blue-600 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          ISO 7498
        </a>
        , que ofrece definiciones y fundamentos relevantes para comprender el
        marco de seguridad abordado en esta sección.
      </p>
    </section>
  );
};

export default HeaderAndNotice;
