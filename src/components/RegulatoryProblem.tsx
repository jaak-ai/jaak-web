export default function RegulatoryProblem() {
  const consequences = [
    { label: "Observaciones en auditorías",   icon: "📋" },
    { label: "Multas y sanciones",             icon: "💸" },
    { label: "Riesgo legal y reputacional",    icon: "⚠️" },
    { label: "Retrabajo operativo constante",  icon: "🔄" },
  ];

  return (
    <section className="py-24 relative overflow-hidden" style={{ background: "#F4FBFC" }}>
      {/* subtle teal glow top-right */}
      <div
        className="absolute top-0 right-0 w-[400px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(circle at top right, rgba(45,182,193,0.08), transparent 65%)" }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6"
              style={{ color: "#dc2626", border: "1px solid rgba(220,38,38,0.18)", background: "rgba(220,38,38,0.06)" }}
            >
              El problema real
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 leading-tight" style={{ color: "#0E1133" }}>
              El problema no es verificar identidades.{" "}
              <span style={{ color: "#64748B" }}>Es demostrar que cumpliste correctamente.</span>
            </h2>
            <div className="space-y-4">
              <p className="text-lg leading-relaxed" style={{ color: "#4A5568" }}>
                Las organizaciones reguladas fallan cuando no pueden demostrar cómo validaron una identidad,
                cómo conservaron la evidencia o cómo garantizaron trazabilidad ante una auditoría.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: "#4A5568" }}>
                La mayoría de los problemas regulatorios no nacen del fraude, sino de{" "}
                <span className="font-semibold" style={{ color: "#0E1133" }}>procesos no defendibles.</span>
              </p>
            </div>
          </div>

          {/* Right — consequence glass card */}
          <div
            className="rounded-3xl p-7"
            style={{
              background: "rgba(255,255,255,0.78)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(220,38,38,0.12)",
              boxShadow: "0 8px 40px rgba(220,38,38,0.06), 0 2px 8px rgba(33,42,69,0.05)",
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(220,38,38,0.08)" }}>
                <svg className="w-5 h-5" style={{ color: "#dc2626" }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <div className="font-bold text-sm" style={{ color: "#0E1133" }}>Sin evidencia defendible, te expones a:</div>
                <div className="text-xs" style={{ color: "#94A3B8" }}>Consecuencias regulatorias evitables</div>
              </div>
            </div>
            <ul className="space-y-3">
              {consequences.map((c, i) => (
                <li
                  key={i}
                  className="flex items-center gap-4 p-4 rounded-2xl"
                  style={{
                    background: "rgba(220,38,38,0.04)",
                    border: "1px solid rgba(220,38,38,0.10)",
                  }}
                >
                  <span className="text-xl">{c.icon}</span>
                  <span className="font-medium text-sm" style={{ color: "#b91c1c" }}>{c.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
