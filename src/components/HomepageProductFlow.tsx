const flowSteps = [
  {
    number: "01",
    title: "El usuario inicia",
    description: "Se captura el consentimiento informado, datos básicos y se abre el expediente con sello de tiempo.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    color: "#1ECAD3",
  },
  {
    number: "02",
    title: "Verificación KYC",
    description: "Los 6 componentes biométricos se ejecutan en secuencia y se registra evidencia individual de cada uno.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    color: "#2AD796",
    isKYC: true,
  },
  {
    number: "03",
    title: "Firma electrónica",
    description: "El usuario firma el documento con validez NOM-151. La firma queda vinculada al expediente KYC.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
    color: "#1ECAD3",
  },
  {
    number: "04",
    title: "Expediente auditable",
    description: "Se genera un expediente digital sellado con hash único, listo para responder a cualquier auditoría.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    color: "#2AD796",
  },
];

const kycBadges = [
  "Prueba de vida",
  "Biometría 1:1",
  "OCR documental",
  "Geolocalización",
  "Listas nominales",
  "Listas negras",
];

export default function HomepageProductFlow() {
  return (
    <section className="hp-section hp-bg-2 py-24 relative overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: "rgba(30,202,211,0.06)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16" data-sr>
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6"
            style={{
              color: "#1ECAD3",
              border: "1px solid rgba(30,202,211,0.22)",
              background: "rgba(30,202,211,0.08)",
            }}
          >
            Cómo funciona
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
            De la solicitud al expediente{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #1ECAD3, #2AD796)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              auditable
            </span>{" "}
            en un solo proceso.
          </h2>
          <p
            className="text-lg max-w-xl mx-auto"
            style={{ color: "var(--hp-text-lo)" }}
          >
            Cada paso queda registrado, sellado y vinculado al expediente del usuario.
          </p>
        </div>

        {/* Flow steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div
            className="hidden lg:block absolute top-[52px] left-[12.5%] right-[12.5%] h-px"
            style={{
              background:
                "linear-gradient(to right, transparent, rgba(30,202,211,0.25), rgba(42,215,150,0.25), transparent)",
            }}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5" data-sr-grid>
            {flowSteps.map((s) => (
              <div key={s.number} className="flex flex-col items-center text-center group">
                {/* Icon circle */}
                <div
                  className="relative w-24 h-24 rounded-3xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:-translate-y-1"
                  style={{
                    background: `linear-gradient(145deg, rgba(30,202,211,0.18), rgba(30,202,211,0.06))`,
                    border: `1px solid rgba(30,202,211,0.22)`,
                    backdropFilter: "blur(12px)",
                    boxShadow: "0 8px 32px rgba(30,202,211,0.10)",
                    color: s.color,
                  }}
                >
                  {s.icon}
                  <div
                    className="absolute -top-2.5 -right-2.5 w-7 h-7 rounded-full flex items-center justify-center text-xs font-black text-white"
                    style={{
                      background: "linear-gradient(135deg, #1ECAD3, #2AD796)",
                    }}
                  >
                    {s.number.replace("0", "")}
                  </div>
                </div>

                {/* Card */}
                <div className="hp-glass w-full rounded-3xl p-5 flex flex-col items-center">
                  <h3 className="text-base font-bold text-white mb-2">{s.title}</h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--hp-text-md)" }}
                  >
                    {s.description}
                  </p>

                  {/* KYC badges inline */}
                  {s.isKYC && (
                    <div className="mt-4 flex flex-wrap justify-center gap-1.5">
                      {kycBadges.map((b) => (
                        <span
                          key={b}
                          className="text-xs px-2.5 py-1 rounded-full font-medium"
                          style={{
                            background: "rgba(30,202,211,0.12)",
                            border: "1px solid rgba(30,202,211,0.20)",
                            color: "#1ECAD3",
                          }}
                        >
                          {b}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom callout */}
        <div className="hp-glass-teal mt-12 rounded-2xl px-8 py-5 text-center">
          <p className="text-sm font-medium" style={{ color: "var(--hp-text-md)" }}>
            Cada expediente incluye:{" "}
            <span style={{ color: "#1ECAD3" }}>
              sello de tiempo · hash de integridad · registros biométricos · consentimiento informado · firma electrónica
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
