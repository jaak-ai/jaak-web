const outcomes = [
  { icon: "📉", label: "Menor exposición a sanciones y observaciones regulatorias" },
  { icon: "✅", label: "Menos retrabajo en auditorías internas y externas" },
  { icon: "🔄", label: "Procesos consistentes y repetibles ante autoridades" },
  { icon: "📈", label: "Escalabilidad operativa sin incrementar riesgo" },
];

export default function BusinessOutcomes() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: "#F4FBFC" }}>
      <div
        className="absolute top-1/2 left-0 w-[350px] h-[350px] pointer-events-none"
        style={{ background: "radial-gradient(circle at left, rgba(45,182,193,0.07), transparent 60%)" }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6"
                style={{ color: "#2AD796", border: "1px solid rgba(42,215,150,0.25)", background: "rgba(42,215,150,0.07)" }}
              >
                Resultados
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 leading-tight" style={{ color: "#0E1133" }}>
                El resultado para tu organización.
              </h2>
              <p
                className="text-lg leading-relaxed pl-5"
                style={{ color: "#4A5568", borderLeft: "2px solid #2DB6C1" }}
              >
                Compliance deja de ser un freno y se convierte en una{" "}
                <span className="font-semibold" style={{ color: "#0E1133" }}>ventaja operativa.</span>
              </p>
            </div>

            <div className="space-y-3">
              {outcomes.map((outcome, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-5 px-5 py-4 rounded-2xl transition-all duration-300 hover:-translate-x-0.5"
                  style={{
                    background: "rgba(255,255,255,0.80)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(45,182,193,0.12)",
                    boxShadow: "0 2px 8px rgba(33,42,69,0.04)",
                  }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                    style={{ background: "rgba(45,182,193,0.10)" }}
                  >
                    {outcome.icon}
                  </div>
                  <span className="text-sm leading-relaxed font-medium" style={{ color: "#374151" }}>
                    {outcome.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
