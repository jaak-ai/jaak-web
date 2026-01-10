export default function UseCases() {
  const cases = [
    {
      title: "Fintech & Servicios Financieros",
      benefits: [
        "Onboarding rápido sin sacrificar control",
        "Evidencia sólida ante CNBV, UIF, auditores",
      ],
    },
    {
      title: "Empresas con contratos digitales",
      benefits: [
        "Firma electrónica con valor legal",
        "Pruebas de identidad y consentimiento verificables",
      ],
    },
    {
      title: "Negocios regulados en expansión",
      benefits: [
        "Cumplimiento local e internacional",
        "Operación escalable sin rehacer procesos",
      ],
    },
  ];

  return (
    <section className="py-20 bg-[#f9fafb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <h2 className="text-3xl md:text-4xl font-black text-[#0a0f1c] mb-10">
            Para quién es JAAK hoy
          </h2>

          {/* Use cases grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {cases.map((useCase, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border border-[#e5e7eb]"
              >
                <h3 className="text-lg font-bold text-[#0a0f1c] mb-4">
                  {useCase.title}
                </h3>
                <ul className="space-y-3">
                  {useCase.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-[#4b5563]">
                      <span className="text-[#2DB6C1] mt-1">•</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Disclaimer */}
          <div className="bg-[#0a0f1c] rounded-xl p-6 text-center">
            <p className="text-white text-lg">
              Si no estás en un entorno regulado, JAAK no es para ti.
              <br />
              <span className="text-white/60">Y eso está bien.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
