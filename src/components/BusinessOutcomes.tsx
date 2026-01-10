export default function BusinessOutcomes() {
  const outcomes = [
    "Menor exposición a sanciones y observaciones regulatorias",
    "Menos retrabajo en auditorías internas y externas",
    "Procesos consistentes y repetibles ante autoridades",
    "Escalabilidad operativa sin incrementar riesgo",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-black text-[#0a0f1c] mb-8">
            El resultado para tu organización.
          </h2>

          {/* Outcomes List */}
          <ul className="space-y-4 mb-10">
            {outcomes.map((outcome, index) => (
              <li key={index} className="flex items-start gap-4 text-lg text-[#374151]">
                <span className="w-6 h-6 bg-[#0a0f1c] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                {outcome}
              </li>
            ))}
          </ul>

          {/* Closing Statement */}
          <p className="text-lg text-[#4b5563] leading-relaxed border-l-4 border-[#0a0f1c] pl-6">
            Compliance deja de ser un freno y se convierte en una ventaja operativa.
          </p>
        </div>
      </div>
    </section>
  );
}
