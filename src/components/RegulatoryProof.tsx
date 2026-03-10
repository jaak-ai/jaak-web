export default function RegulatoryProof() {
  const stats = [
    {
      value: "Millones",
      label: "de verificaciones procesadas",
      sub: "en entornos regulados",
      icon: "⚡",
    },
    {
      value: "100%",
      label: "de clientes activos",
      sub: "en banca y servicios financieros",
      icon: "🏦",
    },
    {
      value: "24/7",
      label: "operación continua",
      sub: "bajo marcos regulatorios estrictos",
      icon: "🛡️",
    },
  ];

  return (
    <section className="py-16 bg-[#060610] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-4">
          {stats.map((s, i) => (
            <div
              key={i}
              className="relative rounded-2xl p-6 border border-white/8 group hover:border-[#0066ff]/30 transition-all duration-300"
              style={{
                background: "linear-gradient(145deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
                backdropFilter: "blur(12px)",
              }}
            >
              <div className="text-2xl mb-4">{s.icon}</div>
              <div className="text-2xl md:text-3xl font-black bg-gradient-to-r from-[#0066ff] to-[#00d4aa] bg-clip-text text-transparent mb-1">
                {s.value}
              </div>
              <div className="text-white/80 font-semibold text-sm mb-0.5">{s.label}</div>
              <div className="text-white/40 text-xs">{s.sub}</div>
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: "radial-gradient(ellipse at top left, rgba(0,102,255,0.06), transparent 70%)" }}
              />
            </div>
          ))}
        </div>

        <p className="text-center text-white/35 text-sm mt-8 max-w-2xl mx-auto leading-relaxed">
          Procesos utilizados en entornos financieros con exigencias regulatorias equivalentes
          a banca tradicional y entidades supervisadas.
        </p>
      </div>
    </section>
  );
}
