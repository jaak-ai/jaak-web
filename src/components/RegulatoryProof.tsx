export default function RegulatoryProof() {
  const stats = [
    { value: "Millones", label: "de verificaciones procesadas", sub: "en entornos regulados", icon: "⚡" },
    { value: "100%", label: "de clientes activos", sub: "en banca y servicios financieros", icon: "🏦" },
    { value: "24/7", label: "operación continua", sub: "bajo marcos regulatorios estrictos", icon: "🛡️" },
  ];

  return (
    <section className="py-16 relative overflow-hidden" style={{ background: "#0E1133" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-4">
          {stats.map((s, i) => (
            <div
              key={i}
              className="relative rounded-2xl p-6 transition-all duration-300 group"
              style={{
                background: "linear-gradient(145deg, rgba(45,182,193,0.07) 0%, rgba(255,255,255,0.02) 100%)",
                border: "1px solid rgba(45,182,193,0.12)",
                backdropFilter: "blur(12px)",
              }}
            >
              <div className="text-2xl mb-4">{s.icon}</div>
              <div
                className="text-2xl md:text-3xl font-black mb-1"
                style={{
                  background: "linear-gradient(90deg, #2DB6C1, #2AD796)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {s.value}
              </div>
              <div className="font-semibold text-sm mb-0.5" style={{ color: "rgba(255,255,255,0.80)" }}>{s.label}</div>
              <div className="text-xs" style={{ color: "rgba(255,255,255,0.38)" }}>{s.sub}</div>
            </div>
          ))}
        </div>
        <p className="text-center text-sm mt-8 max-w-2xl mx-auto leading-relaxed"
          style={{ color: "rgba(255,255,255,0.35)" }}>
          Procesos utilizados en entornos financieros con exigencias regulatorias equivalentes a banca tradicional y entidades supervisadas.
        </p>
      </div>
    </section>
  );
}
