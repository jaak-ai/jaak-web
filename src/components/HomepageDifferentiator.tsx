const withoutJaak = [
  "Verificación sin trazabilidad completa",
  "Papelería física que se pierde, deteriora o no aparece",
  "Evidencia dispersa o en manos del proveedor",
  "Procesos difíciles de reproducir ante autoridades",
  "Sin vinculación entre firma e identidad del firmante",
  "Sin capacidad de conservación a 5 o 10 años",
  "Respuesta a auditorías retrospectivas: semanas o imposible",
];

const withJaak = [
  "Expediente auditable completo por usuario, KYC y firma",
  "Conservación digital inmutable hasta 10 años, configurable",
  "Evidencia en tu infraestructura, bajo tu control",
  "Procesos repetibles y defendibles por diseño normativo",
  "Firma vinculada al KYC biométrico verificado del firmante",
  "Cadena de custodia con sello de tiempo NOM-151",
  "Respuesta a auditorías retrospectivas: minutos",
];

const differentiators = [
  {
    title: "Evidencia, no solo datos",
    description:
      "Cada verificación genera constancias con valor legal, no solo registros técnicos.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Biometría 100% propia",
    description:
      "Sin dependencias de AWS Rekognition ni Azure Face. Control total de datos biométricos.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: "KYC + firma + expediente",
    description:
      "Los tres flujos integrados en una sola plataforma. No tres proveedores distintos.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
  },
];

export default function HomepageDifferentiator() {
  return (
    <section className="hp-section hp-bg-2 py-24 relative overflow-hidden">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(255,255,255,0.07), transparent)",
        }}
      />
      <div
        className="absolute bottom-0 left-1/4 w-[350px] h-[350px] rounded-full blur-[110px] pointer-events-none"
        style={{ background: "rgba(30,202,211,0.06)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-14" data-sr>
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6"
            style={{
              color: "#2AD796",
              border: "1px solid rgba(42,215,150,0.22)",
              background: "rgba(42,215,150,0.08)",
            }}
          >
            La diferencia JAAK
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight max-w-3xl mx-auto">
            No solo verificas identidad.{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #1ECAD3, #2AD796)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Puedes demostrar que cumpliste.
            </span>
          </h2>
        </div>

        {/* Comparison table */}
        <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto mb-14" data-sr-grid>
          {/* Sin JAAK */}
          <div className="hp-glass rounded-3xl p-7">
            <div className="flex items-center gap-2 mb-5">
              <span
                className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                style={{
                  color: "var(--hp-neutral-pill-text)",
                  background: "var(--hp-neutral-pill-bg)",
                  border: "1px solid var(--hp-neutral-pill-border)",
                }}
              >
                Otras soluciones
              </span>
            </div>
            <ul className="space-y-3">
              {withoutJaak.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm"
                  style={{ color: "var(--hp-text-md)" }}
                >
                  <svg
                    className="w-4 h-4 flex-shrink-0 mt-0.5"
                    style={{ color: "var(--hp-red-icon)" }}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Con JAAK */}
          <div className="hp-glass-teal rounded-3xl p-7">
            <div className="flex items-center gap-2 mb-5">
              <span
                className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                style={{
                  color: "#1ECAD3",
                  background: "rgba(30,202,211,0.12)",
                  border: "1px solid rgba(30,202,211,0.20)",
                }}
              >
                Con JAAK
              </span>
            </div>
            <ul className="space-y-3">
              {withJaak.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm"
                  style={{ color: "var(--hp-text-hi)" }}
                >
                  <svg
                    className="w-4 h-4 flex-shrink-0 mt-0.5"
                    style={{ color: "#2AD796" }}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Differentiator pills */}
        <div className="grid sm:grid-cols-3 gap-4 max-w-4xl mx-auto" data-sr-grid>
          {differentiators.map((d, i) => (
            <div key={i} className="hp-glass rounded-2xl p-5">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center mb-3"
                style={{ background: "rgba(30,202,211,0.14)", color: "#1ECAD3" }}
              >
                {d.icon}
              </div>
              <div className="text-sm font-bold text-white mb-1.5">{d.title}</div>
              <p
                className="text-xs leading-relaxed"
                style={{ color: "var(--hp-text-md)" }}
              >
                {d.description}
              </p>
            </div>
          ))}
        </div>

        {/* Tagline */}
        <p
          className="text-center mt-10 text-base font-medium italic"
          style={{ color: "var(--hp-text-lo)" }}
        >
          &ldquo;Diseñado para responder a una auditoría hoy, en 5 años o en 10 — en minutos, no en semanas.&rdquo;
        </p>
      </div>
    </section>
  );
}
