export default function RegulatedUseCases() {
  const useCases = [
    {
      title: "Instituciones financieras",
      points: [
        "Onboarding conforme a regulación",
        "Evidencia defendible ante autoridades",
        "Reducción de observaciones regulatorias",
      ],
    },
    {
      title: "Empresas reguladas",
      points: [
        "Control de identidad en procesos críticos",
        "Firma electrónica con respaldo legal",
        "Evidencia lista para inspección",
      ],
    },
    {
      title: "Operaciones de alto riesgo",
      points: [
        "Eliminación de procesos manuales no auditables",
        "Centralización de identidad y consentimiento",
        "Continuidad operativa sin sobresaltos regulatorios",
      ],
    },
  ];

  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-12 text-center">
            Soluciones para{" "}
            <span className="bg-gradient-to-r from-[#0066ff] to-[#00d4aa] bg-clip-text text-transparent">
              entornos regulados
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-[#0066ff]/50 transition-colors">
                <h3 className="text-lg font-bold text-white mb-4">
                  {useCase.title}
                </h3>
                <ul className="space-y-3">
                  {useCase.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-white/60">
                      <svg className="w-5 h-5 text-[#00d4aa] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
