export default function Results() {
  const results = [
    {
      icon: "↓",
      color: "text-[#2DB6C1]",
      text: "Fraude operativo y documental",
    },
    {
      icon: "↑",
      color: "text-[#2DB6C1]",
      text: "Conversión en onboarding digital",
    },
    {
      icon: "↓",
      color: "text-[#2DB6C1]",
      text: "Coste de compliance y revisiones manuales",
    },
    {
      icon: "✓",
      color: "text-[#10b981]",
      text: "Auditorías superadas sin estrés ni improvisación",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Section header */}
          <h2 className="text-3xl md:text-4xl font-black text-[#0a0f1c] mb-10">
            Qué consiguen nuestros clientes
          </h2>

          {/* Results list */}
          <div className="space-y-6">
            {results.map((result, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-5 bg-[#f9fafb] rounded-xl border border-[#e5e7eb]"
              >
                <span className={`text-2xl font-bold ${result.color}`}>
                  {result.icon}
                </span>
                <span className="text-lg text-[#374151]">{result.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
