export default function SubHero() {
  const problems = [
    {
      icon: "⚠️",
      title: "Verificación sin evidencia",
      desc: "El regulador pide pruebas, no capturas de pantalla",
    },
    {
      icon: "📄",
      title: "Firmas sin trazabilidad",
      desc: "Un PDF firmado no demuestra quién firmó ni cuándo",
    },
    {
      icon: "🔍",
      title: "Auditorías fallidas",
      desc: "Sin cadena de custodia, la evidencia no tiene valor",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Warning banner */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-16">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-bold text-amber-900 mb-1">
                La verdad incómoda sobre verificación de identidad
              </h3>
              <p className="text-amber-800">
                El 73% de las empresas que reportan &quot;cumplir&quot; con KYC no tienen evidencia auditable que resista una revisión de la CNBV o UIF.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0a0f1c] mb-4">
            El problema no es verificar
          </h2>
          <p className="text-2xl md:text-3xl font-bold text-[#2DB6C1]">
            Es probar que cumpliste
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-[#f8fafc] rounded-2xl p-8 border border-[#e5e7eb] hover:border-red-200 transition-colors"
            >
              <span className="text-4xl mb-4 block">{problem.icon}</span>
              <h3 className="text-xl font-bold text-[#0a0f1c] mb-2">{problem.title}</h3>
              <p className="text-[#6b7280]">{problem.desc}</p>
            </div>
          ))}
        </div>

        {/* Solution callout */}
        <div className="bg-[#0a0f1c] rounded-3xl p-10 md:p-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#2DB6C1]/20 rounded-full mb-6">
            <svg className="w-5 h-5 text-[#2DB6C1]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-[#2DB6C1] font-semibold text-sm">La solución</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            JAAK genera evidencia con valor legal desde el primer paso
          </h3>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
            Cada verificación, cada firma, cada validación genera un registro inmutable con cadena de custodia, timestamps certificados y trazabilidad completa.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-white/60 text-sm">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#2DB6C1]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              No repudio
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#2DB6C1]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Cadena de custodia
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#2DB6C1]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Timestamps certificados
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#2DB6C1]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Auditoría completa
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
