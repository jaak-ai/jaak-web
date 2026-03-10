const steps = [
  { number: "01", title: "Evaluación regulatoria",  description: "Analizamos tu marco regulatorio y mapeamos los controles que necesitas cumplir.",          icon: "🔍" },
  { number: "02", title: "Integración controlada",  description: "Implementamos JAAK en tu operación con acompañamiento técnico y regulatorio.",             icon: "🔗" },
  { number: "03", title: "Operación continua",      description: "Monitoreamos cumplimiento y generamos evidencia auditable desde el día uno.",               icon: "📊" },
];

export default function ImplementationSteps() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: "#ffffff" }}>
      <div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(circle at bottom right, rgba(45,182,193,0.07), transparent 60%)" }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6"
            style={{ color: "#64748B", border: "1px solid rgba(14,17,51,0.10)", background: "rgba(14,17,51,0.03)" }}
          >
            Proceso
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4" style={{ color: "#0E1133" }}>
            Implementación{" "}
            <span style={{
              background: "linear-gradient(90deg, #2DB6C1, #2AD796)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              estructurada.
            </span>
          </h2>
          <p className="text-lg max-w-md mx-auto" style={{ color: "#64748B" }}>
            Tres pasos para operar con cumplimiento desde el primer día.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div key={step.number} className="flex flex-col items-center text-center">
              <div
                className="relative w-24 h-24 rounded-3xl flex items-center justify-center mb-6"
                style={{
                  background: "linear-gradient(145deg, rgba(45,182,193,0.12), rgba(42,215,150,0.06))",
                  border: "1px solid rgba(45,182,193,0.20)",
                  boxShadow: "0 8px 32px rgba(45,182,193,0.10)",
                }}
              >
                <span className="text-3xl">{step.icon}</span>
                <div
                  className="absolute -top-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center text-xs font-black text-white"
                  style={{ background: "linear-gradient(135deg, #2DB6C1, #2AD796)", boxShadow: "0 2px 8px rgba(45,182,193,0.35)" }}
                >
                  {i + 1}
                </div>
              </div>

              <div
                className="w-full rounded-3xl p-6 transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: "rgba(255,255,255,0.82)",
                  backdropFilter: "blur(16px)",
                  border: "1px solid rgba(45,182,193,0.12)",
                  boxShadow: "0 4px 20px rgba(33,42,69,0.05)",
                }}
              >
                <h3 className="text-lg font-bold mb-3" style={{ color: "#0E1133" }}>{step.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#64748B" }}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div
          className="mt-12 rounded-2xl px-8 py-5 text-center"
          style={{
            background: "rgba(45,182,193,0.04)",
            border: "1px solid rgba(45,182,193,0.14)",
          }}
        >
          <p className="text-sm italic font-medium" style={{ color: "#64748B" }}>
            No vendemos rápido. Vendemos correcto y defendible.
          </p>
        </div>
      </div>
    </section>
  );
}
