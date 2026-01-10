export default function ImplementationSteps() {
  const steps = [
    {
      number: "1",
      title: "Evaluación regulatoria",
      description: "Analizamos tu marco regulatorio y mapeamos los controles que necesitas cumplir.",
    },
    {
      number: "2",
      title: "Integración controlada",
      description: "Implementamos JAAK en tu operación con acompañamiento técnico y regulatorio.",
    },
    {
      number: "3",
      title: "Operación continua",
      description: "Monitoreamos cumplimiento y generamos evidencia auditable desde el día uno.",
    },
  ];

  return (
    <section className="py-20 bg-[#f9fafb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-black text-[#0a0f1c] mb-12 text-center">
            Implementación estructurada.
          </h2>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {steps.map((step) => (
              <div key={step.number} className="relative">
                <div className="flex items-start gap-4">
                  <span className="w-10 h-10 bg-[#0a0f1c] text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-[#0a0f1c] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-[#4b5563]">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Note */}
          <p className="text-center text-[#6b7280] italic">
            No vendemos rápido. Vendemos correcto y defendible.
          </p>
        </div>
      </div>
    </section>
  );
}
