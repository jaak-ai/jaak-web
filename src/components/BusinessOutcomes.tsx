const outcomes = [
  { icon: "📉", label: "Menor exposición a sanciones y observaciones regulatorias" },
  { icon: "✅", label: "Menos retrabajo en auditorías internas y externas" },
  { icon: "🔄", label: "Procesos consistentes y repetibles ante autoridades" },
  { icon: "📈", label: "Escalabilidad operativa sin incrementar riesgo" },
];

export default function BusinessOutcomes() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: "#141a3a" }}>
      <div
        className="absolute top-1/2 left-0 w-[300px] h-[300px] rounded-full blur-[80px] pointer-events-none"
        style={{ background: "rgba(45,182,193,0.06)" }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6"
                style={{ color: "#2AD796", border: "1px solid rgba(42,215,150,0.22)", background: "rgba(42,215,150,0.08)" }}
              >
                Resultados
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
                El resultado para tu organización.
              </h2>
              <p
                className="text-lg leading-relaxed pl-5"
                style={{ color: "rgba(255,255,255,0.62)", borderLeft: "2px solid #2DB6C1" }}
              >
                Compliance deja de ser un freno y se convierte en una{" "}
                <span className="font-semibold text-white">ventaja operativa.</span>
              </p>
            </div>

            {/* Right */}
            <div className="space-y-3">
              {outcomes.map((outcome, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-5 px-5 py-4 rounded-2xl transition-all duration-300"
                  style={{
                    background: "linear-gradient(90deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                    style={{ background: "rgba(45,182,193,0.12)" }}
                  >
                    {outcome.icon}
                  </div>
                  <span className="text-sm leading-relaxed transition-colors" style={{ color: "rgba(255,255,255,0.65)" }}>
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
