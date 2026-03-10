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
    <section className="py-24 relative overflow-hidden" style={{ background: "#141a3a" }}>
      <div
        className="absolute bottom-0 right-1/4 w-[350px] h-[350px] rounded-full blur-[100px] pointer-events-none"
        style={{ background: "rgba(45,182,193,0.07)" }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="grid md:grid-cols-2 gap-12 items-start mb-14">
            <div>
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6"
                style={{ color: "#2DB6C1", border: "1px solid rgba(45,182,193,0.22)", background: "rgba(45,182,193,0.08)" }}
              >
                Certificaciones y cumplimiento
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
                Diseñado para entornos regulados.
              </h2>
              <p className="text-xl mb-4" style={{ color: "rgba(255,255,255,0.52)" }}>
                No solo cumplimos. Puedes{" "}
                <span className="font-semibold" style={{ color: "rgba(255,255,255,0.82)" }}>demostrar que cumples.</span>
              </p>
              <p className="text-base leading-relaxed" style={{ color: "#2DB6C1" }}>
                Cada validación genera evidencia legal defendible ante auditorías internas y externas, no solo registros técnicos.
              </p>
            </div>

            {/* Principles */}
            <ul className="space-y-3">
              {principles.map((p, i) => (
                <li
                  key={i}
                  className="flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-200"
                  style={{
                    background: "linear-gradient(90deg, rgba(255,255,255,0.04), rgba(45,182,193,0.03))",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <span className="text-lg">{p.icon}</span>
                  <span className="text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>{p.label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="group flex flex-col items-center text-center p-5 rounded-2xl transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div className="w-14 h-14 mb-3 relative">
                  <Image
                    src={cert.image}
                    alt={cert.name}
                    fill
                    className="object-contain brightness-90 group-hover:brightness-110 transition-all duration-300"
                  />
                </div>
                <div className="font-semibold text-xs" style={{ color: "rgba(255,255,255,0.78)" }}>{cert.name}</div>
                <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.32)" }}>{cert.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
