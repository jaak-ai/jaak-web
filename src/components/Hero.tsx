import Link from "next/link";

export default function Hero() {
  const regulations = [
    { name: "LFPIORPI", desc: "Ley Federal PLD" },
    { name: "CNBV", desc: "Circular Única" },
    { name: "AML/CFT", desc: "Anti-Lavado" },
    { name: "GDPR", desc: "Protección Datos" },
  ];

  const stats = [
    { value: "2M+", label: "Verificaciones procesadas" },
    { value: "99.8%", label: "Precisión biométrica" },
    { value: "<3s", label: "Tiempo promedio" },
    { value: "0", label: "Auditorías fallidas" },
  ];

  return (
    <>
      <section className="min-h-screen flex items-center relative overflow-hidden bg-[#0a0f1c]">
        {/* Grid background */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}></div>
        </div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1c] via-[#0a0f1c]/95 to-[#0a0f1c]"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#2DB6C1]/5 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 relative z-10 w-full">
          {/* Regulatory compliance bar */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-16 pb-8 border-b border-white/10">
            <span className="text-white/40 text-sm font-medium uppercase tracking-wider">Cumplimiento normativo:</span>
            {regulations.map((reg, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#2DB6C1] rounded-full"></div>
                <span className="text-white font-semibold text-sm">{reg.name}</span>
                <span className="text-white/40 text-xs hidden sm:inline">({reg.desc})</span>
              </div>
            ))}
          </div>

          <div className="text-center max-w-5xl mx-auto">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-[#2DB6C1]/10 border border-[#2DB6C1]/30 rounded-full mb-8">
              <svg className="w-5 h-5 text-[#2DB6C1]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-[#2DB6C1] font-semibold text-sm">Certificado ISO 27001 · ISO 9001 · iBeta Level 1</span>
            </div>

            {/* Main heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6 tracking-tight">
              La infraestructura de
              <br />
              <span className="bg-gradient-to-r from-[#2DB6C1] to-[#2AD796] bg-clip-text text-transparent">
                identidad regulada
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-white/80 mb-4 font-medium">
              KYC · KYB · Firma Electrónica con Valor Legal
            </p>
            <p className="text-lg text-white/60 mb-10 max-w-3xl mx-auto leading-relaxed">
              Verifica personas, valida empresas y firma contratos con evidencia auditable
              que resiste auditorías CNBV, UIF y conflictos legales.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
              <Link
                href="#contacto"
                className="inline-flex items-center justify-center px-10 py-5 bg-[#2DB6C1] text-white font-bold text-lg rounded-xl hover:bg-[#25969f] transition-all hover:scale-105 shadow-2xl shadow-[#2DB6C1]/30"
              >
                Solicitar demo
                <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="#contacto"
                className="inline-flex items-center justify-center px-10 py-5 bg-white/5 text-white font-semibold text-lg rounded-xl border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all backdrop-blur-sm"
              >
                Hablar con un experto en compliance
              </Link>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                  <div className="text-3xl md:text-4xl font-black text-[#2DB6C1] mb-2">{stat.value}</div>
                  <div className="text-white/60 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <div className="bg-[#0d1321] py-8 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-white/40 text-sm font-medium">Empresas que confían en nuestra infraestructura:</p>
            <div className="flex flex-wrap items-center justify-center gap-8">
              {["Fintech regulada", "Banco digital", "Aseguradora", "Inmobiliaria", "Crypto exchange"].map((client, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-white/40" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-white/60 text-sm font-medium">{client}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
