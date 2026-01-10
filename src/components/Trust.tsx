export default function Trust() {
  const certifications = [
    {
      name: "ISO 27001",
      desc: "Seguridad de la información",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      name: "ISO 9001",
      desc: "Gestión de calidad",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
    {
      name: "iBeta",
      desc: "Anti-spoofing certificado",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
    },
    {
      name: "NIST 800-63",
      desc: "Identidad digital",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
        </svg>
      ),
    },
  ];

  const metrics = [
    { value: "2M+", label: "Verificaciones" },
    { value: "99.8%", label: "Precisión" },
    { value: "<3s", label: "Tiempo" },
    { value: "24/7", label: "Disponibilidad" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Metrics bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-black text-[#0a0f1c] mb-2">{metric.value}</div>
              <div className="text-[#6b7280] font-medium">{metric.label}</div>
            </div>
          ))}
        </div>

        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-[#0a0f1c] text-white text-sm font-semibold rounded-full mb-4">
            Certificaciones
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0a0f1c] mb-4">
            Infraestructura certificada
          </h2>
          <p className="text-xl text-[#6b7280] max-w-2xl mx-auto">
            Cumplimos con los estándares más exigentes de la industria
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="bg-[#f8fafc] p-6 rounded-2xl border border-[#e5e7eb] hover:border-[#2DB6C1]/30 transition-colors text-center"
            >
              <div className="w-16 h-16 bg-[#0a0f1c] rounded-xl flex items-center justify-center mx-auto mb-4 text-[#2DB6C1]">
                {cert.icon}
              </div>
              <h3 className="text-lg font-bold text-[#0a0f1c] mb-1">{cert.name}</h3>
              <p className="text-sm text-[#6b7280]">{cert.desc}</p>
            </div>
          ))}
        </div>

        {/* Trust statement */}
        <div className="bg-[#0a0f1c] rounded-3xl p-8 md:p-12 text-center">
          <p className="text-xl md:text-2xl text-white/80 mb-2">
            Cuando el estándar sube,
          </p>
          <p className="text-2xl md:text-3xl font-bold text-[#2DB6C1]">
            JAAK ya estaba ahí.
          </p>
        </div>
      </div>
    </section>
  );
}
