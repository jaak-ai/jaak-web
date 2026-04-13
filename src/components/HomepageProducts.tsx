import Link from "next/link";

/* ── Verification products (sold individually in autoservicio) ── */
const verificationProducts = [
  {
    id: "ocr-id",
    name: "OCR Identificaciones",
    desc: "Extrae y valida datos de INE y Pasaporte de forma automática.",
    tags: ["INE", "Pasaporte"],
    href: "/autoservicio",
  },
  {
    id: "ocr-docs",
    name: "OCR Documentos",
    desc: "Lee actas notariales, RFC, comprobantes de domicilio y más.",
    tags: ["Actas", "RFC", "Comprobantes"],
    href: "/autoservicio",
  },
  {
    id: "ine-renapo",
    name: "Consulta INE / RENAPO",
    desc: "Valida la vigencia y autenticidad de una credencial ante los padrones oficiales.",
    tags: ["INE", "RENAPO"],
    href: "/autoservicio",
  },
  {
    id: "kyc",
    name: "KYC Completo",
    desc: "Los 6 componentes integrados: OCR + biometría + liveness + geolocalización + listas.",
    tags: ["Todos los módulos", "Expediente"],
    highlight: true,
    href: "/autoservicio",
  },
];

/* ── Signature products (4 levels) ── */
const signatureProducts = [
  {
    level: "N1",
    name: "Firma Simple",
    desc: "Aceptación con clic. Registra IP, dispositivo y timestamp.",
    color: "var(--hp-text-md)",
  },
  {
    level: "N2",
    name: "Firma con OTP",
    desc: "Confirmación por SMS o email vinculada al documento firmado.",
    color: "rgba(30,202,211,0.75)",
  },
  {
    level: "N3",
    name: "Firma Biométrica",
    desc: "Vinculada a la identidad biométrica verificada del firmante.",
    color: "#1ECAD3",
  },
  {
    level: "N4",
    name: "Firma NOM-151",
    desc: "Máxima validez legal en México. Constancia de conservación con sello de tiempo certificado.",
    color: "#2AD796",
    highlight: true,
  },
];

export default function HomepageProducts() {
  return (
    <section className="hp-section hp-bg-2 py-24 relative overflow-hidden">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px pointer-events-none"
        style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.07), transparent)" }}
      />
      <div
        className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: "rgba(30,202,211,0.06)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-14" data-sr>
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6"
            style={{ color: "#1ECAD3", border: "1px solid rgba(30,202,211,0.22)", background: "rgba(30,202,211,0.08)" }}
          >
            Productos
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
            Flexibles, modulares y{" "}
            <span style={{ background: "linear-gradient(90deg, #1ECAD3, #2AD796)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              disponibles hoy.
            </span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "var(--hp-text-md)" }}>
            Usa solo lo que necesitas. Escala cuando quieras. Todo disponible en autoservicio o con integración asistida.
          </p>
        </div>

        {/* ── Block 1: Verificación ── */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-6" data-sr>
            <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: "rgba(30,202,211,0.15)" }}>
              <svg className="w-4 h-4" style={{ color: "#1ECAD3" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-black text-white">Verificación de identidad</h3>
            <span
              className="text-xs px-2.5 py-1 rounded-full font-semibold"
              style={{ color: "#1ECAD3", background: "rgba(30,202,211,0.08)", border: "1px solid rgba(30,202,211,0.18)" }}
            >
              Disponible en autoservicio
            </span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4" data-sr-grid>
            {verificationProducts.map((p) => (
              <Link
                key={p.id}
                href={p.href}
                className="hp-glass group rounded-2xl p-5 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:border-[#1ECAD3]/30"
                style={p.highlight ? { border: "1px solid rgba(30,202,211,0.25)", background: "linear-gradient(145deg, rgba(30,202,211,0.10) 0%, rgba(42,215,150,0.05) 100%)" } : {}}
              >
                {p.highlight && (
                  <span
                    className="text-xs px-2 py-0.5 rounded-full font-bold mb-3 self-start"
                    style={{ background: "rgba(30,202,211,0.15)", color: "#1ECAD3" }}
                  >
                    Paquete completo
                  </span>
                )}
                <div className="text-sm font-bold text-white mb-1.5">{p.name}</div>
                <p className="text-xs leading-relaxed flex-1 mb-3" style={{ color: "var(--hp-text-md)" }}>{p.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-0.5 rounded-full"
                      style={{ background: "var(--hp-pill-bg)", color: "var(--hp-text-lo)", border: "1px solid var(--hp-pill-border)" }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* ── Block 2: Firma + Expediente ── */}
        <div className="grid lg:grid-cols-2 gap-5 mb-10">

          {/* Firma electrónica */}
          <div>
            <div className="flex items-center gap-3 mb-5" data-sr="left">
              <div
                className="w-8 h-8 rounded-xl flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #1ECAD3, #2AD796)", boxShadow: "0 2px 10px rgba(30,202,211,0.25)" }}
              >
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </div>
              <h3 className="text-lg font-black text-white">Firma Digital con Validez NOM-151</h3>
              <span className="text-xs px-2.5 py-1 rounded-full font-semibold" style={{ color: "#2AD796", background: "rgba(42,215,150,0.08)", border: "1px solid rgba(42,215,150,0.18)" }}>
                Signa
              </span>
            </div>

            <div className="space-y-2.5" data-sr="left">
              {signatureProducts.map((s) => (
                <div
                  key={s.level}
                  className="hp-glass rounded-2xl px-4 py-3.5"
                  style={s.highlight ? { background: "linear-gradient(90deg, rgba(42,215,150,0.12), rgba(30,202,211,0.08))", border: "1px solid rgba(42,215,150,0.22)" } : {}}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="text-xs font-black px-2 py-0.5 rounded-lg"
                      style={{ background: "rgba(30,202,211,0.12)", color: s.color, border: `1px solid ${s.color}22` }}
                    >
                      {s.level}
                    </span>
                    <span className="text-sm font-bold text-white">{s.name}</span>
                    {s.highlight && (
                      <span className="text-xs px-2 py-0.5 rounded-full font-bold ml-auto" style={{ background: "rgba(42,215,150,0.15)", color: "#2AD796" }}>
                        NOM-151
                      </span>
                    )}
                  </div>
                  <p className="text-xs leading-relaxed mt-1.5 ml-12" style={{ color: "var(--hp-text-lo)" }}>{s.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-4" data-sr="left">
              <Link href="/signa" className="inline-flex items-center gap-1.5 text-sm font-semibold" style={{ color: "#2AD796" }}>
                Ver producto Signa
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Expediente digital */}
          <div data-sr="right">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: "rgba(42,215,150,0.15)" }}>
                <svg className="w-4 h-4" style={{ color: "#2AD796" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
              </div>
              <h3 className="text-lg font-black text-white">Expediente Digital</h3>
              <span className="text-xs px-2.5 py-1 rounded-full font-semibold" style={{ color: "var(--hp-neutral-pill-text)", background: "var(--hp-neutral-pill-bg)", border: "1px solid var(--hp-neutral-pill-border)" }}>
                Diferenciador clave
              </span>
            </div>

            <div
              className="hp-glass rounded-3xl p-6"
              style={{ border: "1px solid rgba(42,215,150,0.20)" }}
            >
              <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--hp-text-md)" }}>
                Cada proceso — KYC, firma o ambos — genera un expediente sellado,
                inmutable y exportable. Listo para responder a cualquier auditoría
                hoy, en 5 años o en 10.
              </p>
              <ul className="space-y-2.5">
                {[
                  "Hash SHA-256 de integridad por expediente",
                  "Sello de tiempo con valor probatorio",
                  "Consentimiento informado registrado",
                  "Exportación en PDF y JSON estructurado",
                  "Retención configurable hasta 10 años",
                  "Cadena de custodia inmutable",
                  "Acceso por API para auditorías externas",
                ].map((f, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm" style={{ color: "var(--hp-text-hi)" }}>
                    <svg className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#2AD796" }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ── Marca Blanca banner ── */}
        <div
          className="rounded-3xl px-8 py-6 flex flex-col md:flex-row items-start md:items-center gap-5"
          style={{
            background: "linear-gradient(135deg, rgba(30,202,211,0.10) 0%, rgba(42,215,150,0.06) 100%)",
            border: "1px solid rgba(30,202,211,0.22)",
          }}
          data-sr
        >
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
            style={{ background: "linear-gradient(135deg, #1ECAD3, #2AD796)", boxShadow: "0 4px 20px rgba(30,202,211,0.30)" }}
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
            </svg>
          </div>
          <div className="flex-1">
            <div className="text-white font-black text-lg mb-1">
              Todos los productos disponibles en{" "}
              <span style={{ background: "linear-gradient(90deg, #1ECAD3, #2AD796)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                marca blanca
              </span>
            </div>
            <p className="text-sm" style={{ color: "var(--hp-text-md)" }}>
              Integra con tu logo, colores y dominio. Tus clientes ven tu marca,
              no la de JAAK. Disponible para KYC, firma y expediente digital.
            </p>
          </div>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-white transition-all flex-shrink-0"
            style={{ background: "linear-gradient(135deg, #1ECAD3, #17a8b0)", boxShadow: "0 4px 16px rgba(30,202,211,0.25)" }}
          >
            Hablar sobre marca blanca
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>

        {/* Pricing link */}
        <div
          className="mt-6 rounded-2xl px-7 py-4 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ background: "rgba(255,255,255,0.02)", border: "1px solid var(--hp-divider)" }}
        >
          <p className="text-sm" style={{ color: "var(--hp-text-lo)" }}>
            Todos los productos disponibles en autoservicio o con integración asistida.
          </p>
          <Link href="/precios" className="inline-flex items-center gap-2 text-sm font-semibold whitespace-nowrap" style={{ color: "#1ECAD3" }}>
            Ver precios y planes
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
