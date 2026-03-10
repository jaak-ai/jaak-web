const outcomes = [
  {
    icon: "📉",
    label: "Menor exposición a sanciones y observaciones regulatorias",
    color: "#0066ff",
  },
  {
    icon: "✅",
    label: "Menos retrabajo en auditorías internas y externas",
    color: "#00d4aa",
  },
  {
    icon: "🔄",
    label: "Procesos consistentes y repetibles ante autoridades",
    color: "#7c3aed",
  },
  {
    icon: "📈",
    label: "Escalabilidad operativa sin incrementar riesgo",
    color: "#f59e0b",
  },
];

export default function BusinessOutcomes() {
  return (
    <section className="py-24 bg-[#060610] relative overflow-hidden">
      {/* ambient */}
      <div className="absolute top-1/2 left-0 w-[350px] h-[350px] bg-[#7c3aed]/6 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold text-[#00d4aa] border border-[#00d4aa]/20 bg-[#00d4aa]/8 mb-6">
                Resultados
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
                El resultado para tu organización.
              </h2>
              <p
                className="text-lg text-white/70 leading-relaxed pl-5 border-l-2"
                style={{ borderColor: "#0066ff" }}
              >
                Compliance deja de ser un freno y se convierte en una{" "}
                <span className="text-white font-semibold">ventaja operativa.</span>
              </p>
            </div>

            {/* Right – outcome cards */}
            <div className="space-y-3">
              {outcomes.map((outcome, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-5 px-5 py-4 rounded-2xl border border-white/8 transition-all duration-300 hover:-translate-x-1"
                  style={{
                    background: "linear-gradient(90deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                    style={{ background: `${outcome.color}18` }}
                  >
                    {outcome.icon}
                  </div>
                  <span className="text-white/70 text-sm leading-relaxed group-hover:text-white/85 transition-colors">
                    {outcome.label}
                  </span>
                  <div
                    className="w-1 h-8 rounded-full flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity ml-auto"
                    style={{ background: `linear-gradient(to bottom, ${outcome.color}, transparent)` }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
