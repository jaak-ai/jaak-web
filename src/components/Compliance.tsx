export default function Compliance() {
  const items = [
    "Evidencia auditable end-to-end",
    "Controles de seguridad y privacidad por diseño",
    "Alineación con estándares regulatorios y legales",
  ];

  const certifications = ["ISO 27001", "ISO 9001", "iBeta", "NIST"];

  return (
    <section className="py-20 bg-[#f9fafb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Section header */}
          <h2 className="text-3xl md:text-4xl font-black text-[#0a0f1c] mb-10">
            Diseñado para entornos regulados
          </h2>

          {/* Items */}
          <ul className="space-y-4 mb-10">
            {items.map((item, index) => (
              <li key={index} className="flex items-start gap-4 text-lg text-[#374151]">
                <span className="w-6 h-6 bg-[#2DB6C1] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>

          {/* Certifications */}
          <div className="flex flex-wrap gap-3">
            {certifications.map((cert) => (
              <span
                key={cert}
                className="px-4 py-2 bg-white text-[#4b5563] text-sm font-medium rounded-lg border border-[#e5e7eb]"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
