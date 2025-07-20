const KeyQuestions = () => {
  return (
    <div className="bg-white p-6 md:p-10 rounded-lg shadow-md my-4">
      <h3 className="text-center text-2xl md:text-3xl font-bold mb-6 text-gray-900">
        Es normal que tengas preguntas.
      </h3>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-800 text-lg list-disc list-inside">
        <li>¿Qué es un sistema?</li>
        <li>¿Qué es un activo?</li>
        <li>¿Qué es una vulnerabilidad?</li>
        <li>¿Qué es una amenaza?</li>
        <li>¿Qué es el riesgo?</li>
        <li>¿Qué es un ataque?</li>
      </ul>
      <p className="mt-6 text-gray-600 text-base md:text-lg leading-relaxed">
        Para poder responder estas preguntas primero debemos definir cuál es
        nuestro sistema que queremos proteger. Puede ser casi cualquier cosa:
        una casa, un automóvil, un edificio o un sistema informático.
      </p>
    </div>
  );
};

export default KeyQuestions;
