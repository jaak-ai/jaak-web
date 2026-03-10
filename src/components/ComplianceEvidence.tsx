import Image from "next/image";

export default function ComplianceEvidence() {
  const certifications = [
    { name: "ISO 27001", description: "Seguridad de la información", image: "/images/certifications/iso-27001.png" },
    { name: "ISO 9001", description: "Gestión de calidad", image: "/images/certifications/iso-9001.png" },
    { name: "iBeta", description: "Prueba de vida certificada", image: "/images/certifications/ibeta.png" },
    { name: "NIST FRVT", description: "Reconocimiento facial evaluado", image: "/images/certifications/nist.png" },
    { name: "IQNet", description: "Red internacional de certificación", image: "/images/certifications/iqnet.png" },
    { name: "Hecho en México", description: "Tecnología 100% mexicana", image: "/images/certifications/hecho-en-mexico.png" },
  ];

  const principles = [
    { label: "Evidencia auditable end-to-end", icon: "🔍" },
    { label: "Trazabilidad completa de identidad y consentimiento", icon: "🔗" },
    { label: "Control de accesos y segregación de funciones", icon: "🔐" },
    { label: "Retención de información conforme a normativa", icon: "📁" },
  ];

  return (
    <section className="py-24 bg-[#060610] relative overflow-hidden">
      {/* ambient */}
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#00d4aa]/6 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="grid md:grid-cols-2 gap-12 items-start mb-14">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold text-[#0066ff] border border-[#0066ff]/20 bg-[#0066ff]/8 mb-6">
                Certificaciones y cumplimiento
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
                Diseñado para entornos regulados.
              </h2>
              <p className="text-xl text-white/55 mb-4">
                No solo cumplimos. Puedes <span className="text-white/80 font-semibold">demostrar que cumples.</span>
              </p>
              <p className="text-base text-[#0066ff] font-medium leading-relaxed">
                Cada validación genera evidencia legal defendible ante auditorías internas y externas, no solo registros técnicos.
              </p>
            </div>

            {/* Principles */}
            <ul className="space-y-3">
              {principles.map((p, i) => (
                <li
                  key={i}
                  className="flex items-center gap-4 px-5 py-4 rounded-2xl border border-white/8 transition-all duration-200 hover:border-[#0066ff]/25"
                  style={{
                    background: "linear-gradient(90deg, rgba(255,255,255,0.03), rgba(0,102,255,0.02))",
                  }}
                >
                  <span className="text-lg">{p.icon}</span>
                  <span className="text-white/70 text-sm">{p.label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="group flex flex-col items-center text-center p-5 rounded-2xl border border-white/8 transition-all duration-300 hover:border-[#00d4aa]/25 hover:-translate-y-1"
                style={{
                  background: "linear-gradient(145deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <div className="w-14 h-14 mb-3 relative">
                  <Image
                    src={cert.image}
                    alt={cert.name}
                    fill
                    className="object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300"
                  />
                </div>
                <div className="font-semibold text-white/80 text-xs">{cert.name}</div>
                <div className="text-white/35 text-xs mt-0.5">{cert.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
