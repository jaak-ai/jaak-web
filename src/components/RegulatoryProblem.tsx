export default function RegulatoryProblem() {
  const consequences = [
    { label: "Observaciones en auditorías", icon: "📋" },
    { label: "Multas y sanciones", icon: "💸" },
    { label: "Riesgo legal y reputacional", icon: "⚠️" },
    { label: "Retrabajo operativo constante", icon: "🔄" },
  ];

  return (
    <section className="py-24 relative overflow-hidden" style={{ background: "#141a3a" }}>
      <div
        className="absolute top-1/2 right-0 w-[350px] h-[350px] rounded-full blur-[100px] pointer-events-none"
        style={{ background: "rgba(200,60,60,0.06)" }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6"
              style={{ color: "#ff8a8a", border: "1px solid rgba(255,100,100,0.20)", background: "rgba(255,100,100,0.08)" }}
            >
              El problema real
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
              El problema no es verificar identidades.{" "}
              <span style={{ color: "rgba(255,255,255,0.40)" }}>
                Es demostrar que cumpliste correctamente.
              </span>
            </h2>
            <div className="space-y-5">
              <p className="text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.52)" }}>
                Las organizaciones reguladas fallan cuando no pueden demostrar
                cómo validaron una identidad, cómo conservaron la evidencia
                o cómo garantizaron trazabilidad ante una auditoría.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.52)" }}>
                La mayoría de los problemas regulatorios no nacen del fraude,
                sino de{" "}
                <span className="font-medium" style={{ color: "rgba(255,255,255,0.80)" }}>
                  procesos no defendibles.
                </span>
              </p>
            </div>
          </div>

          {/* Right – consequence glass card */}
          <div
            className="rounded-3xl p-7"
            style={{
              background: "linear-gradient(145deg, rgba(200,60,60,0.07) 0%, rgba(255,100,100,0.02) 100%)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(200,60,60,0.15)",
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: "rgba(200,60,60,0.15)" }}
              >
                <svg className="w-5 h-5" style={{ color: "#ff8a8a" }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <div className="text-white font-bold text-sm">Sin evidencia defendible, te expones a:</div>
                <div className="text-xs" style={{ color: "rgba(255,255,255,0.38)" }}>Consecuencias regulatorias evitables</div>
              </div>
            </div>
            <ul className="space-y-3">
              {consequences.map((c, i) => (
                <li
                  key={i}
                  className="flex items-center gap-4 p-4 rounded-2xl transition-all duration-200"
                  style={{
                    background: "rgba(200,60,60,0.05)",
                    border: "1px solid rgba(200,60,60,0.10)",
                  }}
                >
                  <span className="text-xl">{c.icon}</span>
                  <span className="font-medium text-sm" style={{ color: "#ff9898" }}>{c.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
