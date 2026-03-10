import Link from "next/link";

const useCases = [
  {
    title: "Instituciones financieras",
    icon: "🏦",
    points: [
      "Onboarding conforme a regulación",
      "Evidencia defendible ante autoridades",
      "Reducción de observaciones regulatorias",
    ],
    href: "/soluciones/instituciones-financieras",
    color: "#0066ff",
  },
  {
    title: "Empresas reguladas",
    icon: "🏢",
    points: [
      "Control de identidad en procesos críticos",
      "Firma electrónica con respaldo legal",
      "Evidencia lista para inspección",
    ],
    href: "/soluciones/onboarding-digital",
    color: "#00d4aa",
  },
  {
    title: "Operaciones de alto riesgo",
    icon: "⚡",
    points: [
      "Eliminación de procesos manuales no auditables",
      "Centralización de identidad y consentimiento",
      "Continuidad operativa sin sobresaltos regulatorios",
    ],
    href: "/soluciones/firma-contratos",
    color: "#7c3aed",
  },
];

export default function RegulatedUseCases() {
  return (
    <section className="py-24 bg-[#060610] relative overflow-hidden">
      {/* top divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold text-white/50 border border-white/10 bg-white/5 mb-6">
            Casos de uso
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Soluciones para{" "}
            <span className="bg-gradient-to-r from-[#0066ff] to-[#00d4aa] bg-clip-text text-transparent">
              entornos regulados
            </span>
          </h2>
          <p className="text-white/45 max-w-xl mx-auto">
            Diseñados para cada tipo de organización con requerimientos regulatorios específicos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="group relative rounded-3xl p-7 border border-white/8 transition-all duration-300 hover:-translate-y-1 flex flex-col"
              style={{
                background: "linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)",
                backdropFilter: "blur(16px)",
              }}
            >
              {/* colored glow */}
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: `radial-gradient(ellipse at top left, ${useCase.color}12, transparent 60%)` }}
              />
              <div
                className="absolute bottom-0 right-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: `radial-gradient(ellipse at bottom right, ${useCase.color}08, transparent 60%)` }}
              />

              {/* icon */}
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-5 relative z-10"
                style={{ background: `${useCase.color}18` }}
              >
                {useCase.icon}
              </div>

              <h3 className="text-lg font-bold text-white mb-5 relative z-10">
                {useCase.title}
              </h3>

              <ul className="space-y-3 flex-1 relative z-10">
                {useCase.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-white/55 text-sm">
                    <svg
                      className="w-4 h-4 flex-shrink-0 mt-0.5"
                      style={{ color: useCase.color }}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {point}
                  </li>
                ))}
              </ul>

              <Link
                href={useCase.href}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold transition-all duration-200 relative z-10"
                style={{ color: useCase.color }}
              >
                Conocer solución
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
