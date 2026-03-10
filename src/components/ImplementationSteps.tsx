const steps = [
  { number: "01", title: "Evaluación regulatoria", description: "Analizamos tu marco regulatorio y mapeamos los controles que necesitas cumplir.", icon: "🔍", color: "#2DB6C1" },
  { number: "02", title: "Integración controlada", description: "Implementamos JAAK en tu operación con acompañamiento técnico y regulatorio.", icon: "🔗", color: "#2AD796" },
  { number: "03", title: "Operación continua", description: "Monitoreamos cumplimiento y generamos evidencia auditable desde el día uno.", icon: "📊", color: "#2DB6C1" },
];

export default function ImplementationSteps() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: "#0E1133" }}>
      <div
        className="absolute top-1/2 right-0 w-[350px] h-[350px] rounded-full blur-[100px] pointer-events-none"
        style={{ background: "rgba(42,215,150,0.06)" }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6"
            style={{ color: "rgba(255,255,255,0.42)", border: "1px solid rgba(255,255,255,0.10)", background: "rgba(255,255,255,0.04)" }}
          >
            Proceso
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
            Implementación{" "}
            <span style={{
              background: "linear-gradient(90deg, #2DB6C1, #2AD796)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>estructurada.</span>
          </h2>
          <p className="text-lg max-w-md mx-auto" style={{ color: "rgba(255,255,255,0.38)" }}>
            Tres pasos para operar con cumplimiento desde el primer día.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div key={step.number} className="flex flex-col items-center text-center">
              <div
                className="relative w-24 h-24 rounded-3xl flex items-center justify-center mb-6"
                style={{
                  background: `linear-gradient(145deg, rgba(45,182,193,0.18), rgba(45,182,193,0.06))`,
                  border: `1px solid rgba(45,182,193,0.22)`,
                  backdropFilter: "blur(12px)",
                  boxShadow: "0 8px 32px rgba(45,182,193,0.10)",
                }}
              >
                <span className="text-3xl">{step.icon}</span>
                <div
                  className="absolute -top-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center text-xs font-black text-white"
                  style={{ background: "linear-gradient(135deg, #2DB6C1, #2AD796)" }}
                >
                  {i + 1}
                </div>
              </div>
              <div
                className="w-full rounded-3xl p-6 transition-all duration-300"
                style={{
                  background: "linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)",
                  backdropFilter: "blur(16px)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.48)" }}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div
          className="mt-12 rounded-2xl px-8 py-5 text-center"
          style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p className="text-sm italic" style={{ color: "rgba(255,255,255,0.32)" }}>
            No vendemos rápido. Vendemos correcto y defendible.
          </p>
        </div>
      </div>
    </section>
  );
}
