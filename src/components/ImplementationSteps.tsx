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
    <section className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-12 text-center">
            Implementación{" "}
            <span className="bg-gradient-to-r from-[#0066ff] to-[#00d4aa] bg-clip-text text-transparent">
              estructurada.
            </span>
          </h2>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {steps.map((step) => (
              <div key={step.number} className="relative">
                <div className="flex flex-col items-center text-center">
                  <span className="w-14 h-14 bg-gradient-to-br from-[#0066ff] to-[#00d4aa] text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">
                    {step.number}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-white/60">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Note */}
          <p className="text-center text-white/40 italic">
            No vendemos rápido. Vendemos correcto y defendible.
          </p>
        </div>
      </div>
    </section>
  );
}
