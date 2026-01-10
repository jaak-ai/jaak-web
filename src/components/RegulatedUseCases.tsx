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
    <section className="py-20 bg-[#f9fafb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-[#e5e7eb]">
                <h3 className="text-lg font-bold text-[#0a0f1c] mb-4">
                  {useCase.title}
                </h3>
                <ul className="space-y-3">
                  {useCase.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-[#4b5563]">
                      <span className="text-[#0a0f1c] mt-1">•</span>
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
