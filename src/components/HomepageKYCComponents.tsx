import Link from "next/link";

const components = [
  {
    title: "Prueba de vida pasiva",
    benefit: "Detecta intentos de fraude (fotos, máscaras, pantallas) sin pedirle gestos al usuario real.",
    useCase: "Prevención de suplantación de identidad en onboarding digital a escala.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    tag: "Anti-spoofing iBeta Nivel 2",
  },
  {
    title: "Validación biométrica 1:1",
    benefit: "Confirma que la persona frente a la cámara coincide con el titular del documento oficial.",
    useCase: "Vinculación de identidad en contratos, créditos y apertura de cuentas.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
    tag: "99% precisión · NIST FRVT",
  },
  {
    title: "OCR documental",
    benefit: "Extrae y valida automáticamente los datos del documento oficial presentado.",
    useCase: "Eliminación de captura manual y errores en procesos de alta de clientes.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    tag: "INE · Pasaporte · y más",
  },
  {
    title: "Geolocalización",
    benefit: "Registra dónde ocurrió la verificación como evidencia contextual del proceso.",
    useCase: "Auditorías regulatorias que requieren ubicación del proceso de identificación.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    tag: "Trazabilidad contextual",
  },
  {
    title: "Listas nominales",
    benefit: "Valida la vigencia y autenticidad de la credencial directamente ante INE y RENAPO.",
    useCase: "Cumplimiento con Ley Fintech y disposiciones CNBV para identificación de clientes.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    tag: "INE · RENAPO",
  },
  {
    title: "Listas negras",
    benefit: "Detecta personas en listas de sanciones nacionales e internacionales en tiempo real.",
    useCase: "Gestión de riesgo AML/PLD en entidades supervisadas por CNBV y UIF.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
      </svg>
    ),
    tag: "OFAC · INTERPOL · SAT 69-B",
  },
];

export default function HomepageKYCComponents() {
  return (
    <section className="hp-section hp-bg-1 py-24 relative overflow-hidden">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px pointer-events-none"
        style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.07), transparent)" }}
      />
      <div
        className="absolute bottom-1/4 right-0 w-[400px] h-[400px] rounded-full blur-[110px] pointer-events-none"
        style={{ background: "rgba(42,215,150,0.05)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-14" data-sr>
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6"
            style={{ color: "#1ECAD3", border: "1px solid rgba(30,202,211,0.22)", background: "rgba(30,202,211,0.08)" }}
          >
            Verificación de identidad
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
            Seis capas de verificación.{" "}
            <span style={{ background: "linear-gradient(90deg, #1ECAD3, #2AD796)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Un solo expediente.
            </span>
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: "var(--hp-text-md)" }}>
            Cada componente genera su propia evidencia y se integra al expediente
            auditable. No solo verificas: generas un registro defendible durante
            5 o 10 años.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10" data-sr-grid>
          {components.map((c, i) => (
            <div
              key={i}
              className="hp-glass group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon + tag */}
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(30,202,211,0.14)", color: "#1ECAD3" }}
                >
                  {c.icon}
                </div>
                <span
                  className="text-xs px-2.5 py-1 rounded-full font-medium"
                  style={{ background: "rgba(42,215,150,0.10)", border: "1px solid rgba(42,215,150,0.18)", color: "#2AD796" }}
                >
                  {c.tag}
                </span>
              </div>

              <h3 className="text-base font-bold text-white mb-2">{c.title}</h3>

              <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--hp-text-md)" }}>
                {c.benefit}
              </p>

              <div className="flex items-start gap-2 pt-3" style={{ borderTop: "1px solid var(--hp-divider)" }}>
                <svg className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: "#1ECAD3" }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <p className="text-xs leading-relaxed" style={{ color: "var(--hp-text-lo)" }}>{c.useCase}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center" data-sr>
          <Link
            href="/plataforma/kyc-kyb"
            className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200 hover:gap-3"
            style={{ color: "#1ECAD3" }}
          >
            Ver documentación técnica de cada componente
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
