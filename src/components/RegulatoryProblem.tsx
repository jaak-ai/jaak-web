export default function RegulatoryProblem() {
  const consequences = [
    { label: "Observaciones en auditorías", icon: "📋" },
    { label: "Multas y sanciones", icon: "💸" },
    { label: "Riesgo legal y reputacional", icon: "⚠️" },
    { label: "Retrabajo operativo constante", icon: "🔄" },
  ];

  return (
    <section className="py-24 bg-[#060610] relative overflow-hidden">
      {/* ambient */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-[#ff4444]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold text-[#ff6b6b] border border-[#ff6b6b]/20 bg-[#ff6b6b]/8 mb-6">
              El problema real
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
              El problema no es{" "}
              <span className="text-white">verificar identidades.</span>
              <br />
              <span className="text-white/45">Es demostrar que cumpliste correctamente.</span>
            </h2>

            <div className="space-y-5">
              <p className="text-lg text-white/55 leading-relaxed">
                Las organizaciones reguladas fallan cuando no pueden demostrar
                cómo validaron una identidad, cómo conservaron la evidencia
                o cómo garantizaron trazabilidad ante una auditoría.
              </p>
              <p className="text-lg text-white/55 leading-relaxed">
                La mayoría de los problemas regulatorios no nacen del fraude,
                sino de <span className="text-white/80 font-medium">procesos no defendibles.</span>
              </p>
            </div>
          </div>

          {/* Right – glass consequence card */}
          <div
            className="rounded-3xl p-7 border border-[#ff4444]/15"
            style={{
              background: "linear-gradient(145deg, rgba(255,68,68,0.06) 0%, rgba(255,107,107,0.02) 100%)",
              backdropFilter: "blur(20px)",
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#ff4444]/15 flex items-center justify-center">
                <svg className="w-5 h-5 text-[#ff6b6b]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <div className="text-white font-bold text-sm">Sin evidencia defendible, te expones a:</div>
                <div className="text-white/40 text-xs">Consecuencias regulatorias evitables</div>
              </div>
            </div>

            <ul className="space-y-3">
              {consequences.map((c, i) => (
                <li
                  key={i}
                  className="flex items-center gap-4 p-4 rounded-2xl border border-[#ff4444]/10 transition-all duration-200 hover:border-[#ff4444]/25"
                  style={{ background: "rgba(255,68,68,0.04)" }}
                >
                  <span className="text-xl">{c.icon}</span>
                  <span className="text-[#ff8080] font-medium text-sm">{c.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
