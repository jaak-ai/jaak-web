export default function Differentiator() {
  const comparisons = [
    {
      bad: "Verificación manual con riesgo de error",
      good: "Automatización con evidencia inmutable",
    },
    {
      bad: "PDFs firmados sin cadena de custodia",
      good: "Firmas con trazabilidad forense completa",
    },
    {
      bad: "Reportes que no pasan auditorías",
      good: "Evidencia lista para CNBV, UIF y litigio",
    },
    {
      bad: "\"Confía en mí\" como única prueba",
      good: "No repudio técnico y legal demostrable",
    },
  ];

  return (
    <section className="py-24 bg-[#0a0f1c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#2DB6C1]/20 text-[#2DB6C1] text-sm font-semibold rounded-full mb-4">
            Diferenciador
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
            No es solo compliance
          </h2>
          <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#2DB6C1] to-[#2AD796] bg-clip-text text-transparent">
            Es compliance operable
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-16">
          {comparisons.map((item, index) => (
            <div key={index} className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <div className="flex items-start gap-4 mb-4 pb-4 border-b border-white/10">
                <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-white/50 line-through">{item.bad}</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#2DB6C1]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#2DB6C1]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-white font-medium">{item.good}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Regulatory frameworks */}
        <div className="bg-gradient-to-r from-[#2DB6C1]/10 to-[#2AD796]/10 rounded-3xl p-8 md:p-12 border border-[#2DB6C1]/20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Diseñado para marcos regulatorios reales
              </h3>
              <p className="text-white/70 mb-6">
                JAAK convierte requisitos de LFPIORPI, circulares de CNBV y estándares internacionales en software operativo.
              </p>
              <div className="flex flex-wrap gap-3">
                {["LFPIORPI", "AML/CFT", "CNBV", "UIF", "NOM-151", "GDPR"].map((reg) => (
                  <span key={reg} className="px-4 py-2 bg-white/10 text-white text-sm font-semibold rounded-lg border border-white/20">
                    {reg}
                  </span>
                ))}
              </div>
            </div>
            <div className="text-center md:text-right">
              <div className="inline-block bg-[#0a0f1c] rounded-2xl p-8 border border-white/10">
                <div className="text-5xl font-black text-[#2DB6C1] mb-2">100%</div>
                <div className="text-white/60">de auditorías pasadas</div>
                <div className="text-white/40 text-sm mt-2">por nuestros clientes</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
