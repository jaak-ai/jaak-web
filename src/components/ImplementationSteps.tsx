const steps = [
  {
    number: "01",
    title: "Evaluación regulatoria",
    description: "Analizamos tu marco regulatorio y mapeamos los controles que necesitas cumplir.",
    icon: "🔍",
    color: "#0066ff",
  },
  {
    number: "02",
    title: "Integración controlada",
    description: "Implementamos JAAK en tu operación con acompañamiento técnico y regulatorio.",
    icon: "🔗",
    color: "#00d4aa",
  },
  {
    number: "03",
    title: "Operación continua",
    description: "Monitoreamos cumplimiento y generamos evidencia auditable desde el día uno.",
    icon: "📊",
    color: "#7c3aed",
  },
];

export default function ImplementationSteps() {
  return (
    <section className="py-24 bg-[#060610] relative overflow-hidden">
      {/* ambient */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-[#0066ff]/6 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold text-white/50 border border-white/10 bg-white/5 mb-6">
            Proceso
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
            Implementación{" "}
            <span className="bg-gradient-to-r from-[#0066ff] to-[#00d4aa] bg-clip-text text-transparent">
              estructurada.
            </span>
          </h2>
          <p className="text-white/40 text-lg max-w-md mx-auto">
            Tres pasos para operar con cumplimiento desde el primer día.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div key={step.number} className="relative flex flex-col items-center text-center">
              {/* Number circle */}
              <div
                className="relative w-24 h-24 rounded-3xl flex items-center justify-center mb-6 shadow-2xl"
                style={{
                  background: `linear-gradient(145deg, ${step.color}25, ${step.color}10)`,
                  border: `1px solid ${step.color}30`,
                  backdropFilter: "blur(12px)",
                }}
              >
                <span className="text-3xl">{step.icon}</span>
                {/* step number badge */}
                <div
                  className="absolute -top-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center text-xs font-black text-white"
                  style={{ background: `linear-gradient(135deg, ${step.color}, ${step.color}cc)` }}
                >
                  {i + 1}
                </div>
              </div>

              <div
                className="w-full rounded-3xl p-6 border border-white/8 transition-all duration-300 hover:border-white/15"
                style={{
                  background: "linear-gradient(145deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
                  backdropFilter: "blur(16px)",
                }}
              >
                <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div
          className="mt-12 rounded-2xl px-8 py-5 border border-white/6 text-center"
          style={{ background: "rgba(255,255,255,0.02)" }}
        >
          <p className="text-white/35 text-sm italic">
            No vendemos rápido. Vendemos correcto y defendible.
          </p>
        </div>
      </div>
    </section>
  );
}
