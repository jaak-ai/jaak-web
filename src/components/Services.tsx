export default function Services() {
  const services = [
    {
      id: "kyc",
      badge: "LFPIORPI Compliant",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      title: "KYC – Verificación de Personas",
      subtitle: "Biometría avanzada con evidencia auditable",
      features: [
        "OCR de INE, pasaporte y documentos oficiales",
        "Prueba de vida con detección de ataques",
        "Anti-spoofing certificado iBeta",
        "Face match con 99.8% de precisión",
        "Evidencia forense con timestamps",
      ],
      cta: "Para cumplir LFPIORPI Art. 18",
    },
    {
      id: "kyb",
      badge: "CNBV Ready",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "KYB – Validación de Empresas",
      subtitle: "Personas morales y sus representantes",
      features: [
        "Verificación de actas constitutivas",
        "Validación de poderes y representación",
        "Identificación de socios y beneficiarios",
        "Relación persona física - persona moral",
        "Estructura de control y propiedad",
      ],
      cta: "Para onboarding B2B regulado",
    },
    {
      id: "firma",
      badge: "NOM-151 / eIDAS",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Firma Electrónica Avanzada",
      subtitle: "Con valor legal y no repudio",
      features: [
        "Vinculación biométrica del firmante",
        "Sellado de tiempo certificado",
        "Integridad del documento garantizada",
        "Cadena de custodia completa",
        "Evidencia para litigio",
      ],
      cta: "Para contratos con valor legal real",
    },
  ];

  return (
    <section id="soluciones" className="py-24 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#0a0f1c] text-white text-sm font-semibold rounded-full mb-4">
            Soluciones
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0a0f1c] mb-4">
            Una plataforma. Tres capas críticas.
          </h2>
          <p className="text-xl text-[#6b7280] max-w-2xl mx-auto">
            Cada módulo genera evidencia auditable que resiste escrutinio regulatorio
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              id={service.id}
              className="bg-white rounded-2xl p-8 shadow-sm border border-[#e5e7eb] hover:shadow-xl hover:border-[#2DB6C1]/30 transition-all duration-300 flex flex-col"
            >
              {/* Badge */}
              <span className="inline-block self-start px-3 py-1 bg-[#2DB6C1]/10 text-[#2DB6C1] text-xs font-bold rounded-full mb-6">
                {service.badge}
              </span>

              {/* Icon */}
              <div className="w-14 h-14 bg-[#0a0f1c] rounded-xl flex items-center justify-center text-white mb-6">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-[#0a0f1c] mb-2">
                {service.title}
              </h3>
              <p className="text-[#6b7280] mb-6">{service.subtitle}</p>

              <ul className="space-y-3 mb-8 flex-grow">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-[#4b5563] text-sm">
                    <svg className="w-5 h-5 text-[#2DB6C1] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="pt-6 border-t border-[#e5e7eb]">
                <p className="text-sm font-semibold text-[#0a0f1c]">
                  {service.cta}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
