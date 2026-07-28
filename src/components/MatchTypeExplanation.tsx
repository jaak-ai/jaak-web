const cards = [
  {
    title: "Fuentes restrictivas",
    kicker: "Sanciones, bloqueos e inhabilitaciones",
    description:
      "Una coincidencia confirmada puede implicar restricciones legales, regulatorias o contractuales. Requiere atención prioritaria y validación del alcance aplicable.",
    color: "#DC2626",
  },
  {
    title: "Fuentes indicativas",
    kicker: "PEP, alertas regulatorias y otras señales",
    description:
      "Una coincidencia no significa que exista un delito. Puede implicar debida diligencia reforzada, documentación adicional y mayor conocimiento de la relación.",
    color: "#D97706",
  },
  {
    title: "Fuentes de validación",
    kicker: "Directorios y registros preventivos",
    description:
      "Se utilizan para confirmar un estatus o registro. Aparecer en ellas no necesariamente representa una conducta de riesgo.",
    color: "#1ECAD3",
  },
];

export default function MatchTypeExplanation() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-sr className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-black text-[#202945] mb-4">
            Una coincidencia es el inicio del análisis
          </h2>
        </div>

        <div data-sr-grid className="grid md:grid-cols-3 gap-6 mb-10">
          {cards.map((card) => (
            <div key={card.title} className="p-7 rounded-2xl border border-gray-100 bg-gray-50">
              <div className="w-2.5 h-2.5 rounded-full mb-5" style={{ background: card.color }} />
              <h3 className="text-lg font-bold text-[#202945] mb-1">{card.title}</h3>
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-4">{card.kicker}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>

        <div data-sr className="p-5 rounded-xl bg-gray-50 border border-gray-100 text-center">
          <p className="text-sm text-gray-600">
            JAAK ayuda a identificar y documentar coincidencias. La decisión de aceptar, rechazar o escalar
            una relación corresponde a las políticas y análisis de cada organización.
          </p>
        </div>
      </div>
    </section>
  );
}
