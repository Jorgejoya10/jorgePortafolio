const questions = [
  {
    title: "1. ¿Qué quiero proteger?",
    body: "Los componentes fundamentales de mi sistema. Si alguno de estos falla o se pierde, el sistema deja de funcionar. Más comúnmente llamados activos.",
    note: "* Existe una área de seguridad encargada de clasificar la jerarquía de los activos. Administración de Riesgos.",
  },
  {
    title: "2. ¿Qué debilidades tiene mi sistema?",
    body: "El sistema puede tener debilidades inherentes de cada activo. A esas debilidades se les conoce como vulnerabilidades.",
    note: "* Existe una área de seguridad dedicada a la búsqueda de vulnerabilidades llamada Pentesting.",
  },
  {
    title: "3. ¿Contra qué lo quiero proteger?",
    body: "De cualquier evento o circunstancia con el potencial de provocar pérdida o daño de mis activos. A esto le llamamos amenaza.",
    note: "* Existe una área de seguridad dedicada al análisis de amenazas. Administración de Riesgos.",
  },
  {
    title: "4. ¿Cómo lo protejo?",
    body: "Existen diferentes propiedades de seguridad que puedo garantizar de manera absoluta. Mejor conocidas como servicios de seguridad.",
    note: "* Es tema de este estándar saber qué servicios puedo garantizar y cómo puedo hacerlo.",
  },
  {
    title: "5. ¿Qué pasa si fallo en proteger?",
    body: "Un ataque es una funcionalidad que explotando una vulnerabilidad concreta una amenaza.",
    note: "* Existe una área de seguridad dedicada a gestionar ataques. Respuesta a incidentes.",
  },
  {
    title:
      "6. ¿Se puede calcular la probabilidad de ocurrencia de un ataque?",
    body: "Sí, el riesgo es la probabilidad de ocurrencia multiplicado por el impacto que esta provocaría a mi sistema.",
    note: "R = P (ocurrencia) × Impacto",
  },
];

const DeepQuestions = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {questions.map((q, idx) => (
        <div key={idx} className="rounded-md p-6 shadow-sm border">
          <p className="font-semibold text-lg mb-2">{q.title}</p>
          <p className="leading-relaxed">{q.body}</p>
          <p className="text-sm mt-2 italic text-gray-500">{q.note}</p>
        </div>
      ))}
    </div>
  );
};

export default DeepQuestions;
