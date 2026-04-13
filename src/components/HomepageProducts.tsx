import Link from "next/link";

const kycFeatures = [
  "Prueba de vida pasiva (iBeta PAD)",
  "Biometría facial 1:1 (NIST FRVT 99%)",
  "OCR de IFE/INE, pasaporte y actas",
  "Geolocalización del proceso",
  "Consulta de listas nominales INE/RENAPO",
  "Consulta OFAC, INTERPOL y SAT 69-B",
  "Expediente auditable por usuario",
  "API REST + SDK móvil",
];

const firmaLevels = [
  {
    level: "Nivel 1",
    name: "Firma simple",
    desc: "Clic de aceptación con trazabilidad de IP, dispositivo y tiempo.",
    color: "rgba(255,255,255,0.45)",
  },
  {
    level: "Nivel 2",
    name: "Firma con OTP",
    desc: "Confirmación por SMS o email vinculada al documento.",
    color: "rgba(30,202,211,0.70)",
  },
  {
    level: "Nivel 3",
    name: "Firma biométrica",
    desc: "Firma vinculada a la identidad biométrica verificada del firmante.",
    color: "#1ECAD3",
  },
  {
    level: "Nivel 4",
    name: "Firma NOM-151",
    desc: "Máxima validez legal en México. Constancia de conservación con sello de tiempo.",
    color: "#2AD796",
    highlight: true,
  },
];

const expedienteFeatures = [
  "Hash SHA-256 de integridad por expediente",
  "Sello de tiempo con valor probatorio",
  "Evidencia biométrica encriptada",
  "Consentimiento informado registrado",
  "Exportación en PDF y JSON estructurado",
  "Retención configurable según normativa",
  "Acceso por API para auditorías externas",
  "Historial inmutable de cada evento",
];

export default function HomepageProducts() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: "#141a3a" }}
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(255,255,255,0.07), transparent)",
        }}
      />
      <div
        className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: "rgba(30,202,211,0.06)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6"
            style={{
              color: "#1ECAD3",
              border: "1px solid rgba(30,202,211,0.22)",
              background: "rgba(30,202,211,0.08)",
            }}
          >
            Productos
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
            Todo lo que necesitas para{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #1ECAD3, #2AD796)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              operar en regla.
            </span>
          </h2>
          <p
            className="text-lg max-w-xl mx-auto"
            style={{ color: "rgba(255,255,255,0.40)" }}
          >
            Tres productos integrados. Un solo proveedor. Sin dependencias externas.
          </p>
        </div>

        {/* Products grid */}
        <div className="grid lg:grid-cols-3 gap-5">
          {/* KYC */}
          <div
            className="rounded-3xl p-7 flex flex-col"
            style={{
              background:
                "linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)",
              backdropFilter: "blur(16px)",
              border: "1px solid rgba(255,255,255,0.09)",
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-10 h-10 rounded-2xl flex items-center justify-center"
                style={{ background: "rgba(30,202,211,0.18)" }}
              >
                <svg
                  className="w-5 h-5"
                  style={{ color: "#1ECAD3" }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider" style={{ color: "#1ECAD3" }}>
                  Producto 1
                </div>
                <div className="text-white font-black text-lg">KYC Biométrico</div>
              </div>
            </div>

            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "rgba(255,255,255,0.48)" }}
            >
              Verificación de identidad con los 6 componentes biométricos y legales
              que exige la regulación mexicana.
            </p>

            <ul className="space-y-2.5 flex-1 mb-6">
              {kycFeatures.map((f, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 text-sm"
                  style={{ color: "rgba(255,255,255,0.62)" }}
                >
                  <svg
                    className="w-4 h-4 flex-shrink-0 mt-0.5"
                    style={{ color: "#2AD796" }}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>

            <Link
              href="/plataforma/kyc-kyb"
              className="inline-flex items-center gap-1.5 text-sm font-semibold transition-all"
              style={{ color: "#1ECAD3" }}
            >
              Ver documentación
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

          {/* Firma electrónica */}
          <div
            className="rounded-3xl p-7 flex flex-col"
            style={{
              background:
                "linear-gradient(145deg, rgba(30,202,211,0.10) 0%, rgba(42,215,150,0.05) 100%)",
              backdropFilter: "blur(16px)",
              border: "1px solid rgba(30,202,211,0.20)",
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-10 h-10 rounded-2xl flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, #1ECAD3, #2AD796)",
                  boxShadow: "0 4px 16px rgba(30,202,211,0.30)",
                }}
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider" style={{ color: "#2AD796" }}>
                  Producto 2
                </div>
                <div className="text-white font-black text-lg">Signa — Firma Electrónica</div>
              </div>
            </div>

            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              Cuatro niveles de firma electrónica con validez legal en México,
              vinculados a la identidad biométrica del firmante.
            </p>

            <div className="space-y-3 flex-1 mb-6">
              {firmaLevels.map((fl, i) => (
                <div
                  key={i}
                  className="rounded-2xl px-4 py-3"
                  style={{
                    background: fl.highlight
                      ? "linear-gradient(90deg, rgba(42,215,150,0.15), rgba(30,202,211,0.10))"
                      : "rgba(255,255,255,0.04)",
                    border: fl.highlight
                      ? "1px solid rgba(42,215,150,0.25)"
                      : "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className="text-xs font-bold uppercase tracking-wider"
                      style={{ color: fl.color }}
                    >
                      {fl.level}
                    </span>
                    <span className="text-sm font-bold text-white">{fl.name}</span>
                    {fl.highlight && (
                      <span
                        className="text-xs px-2 py-0.5 rounded-full font-bold ml-auto"
                        style={{
                          background: "rgba(42,215,150,0.20)",
                          color: "#2AD796",
                        }}
                      >
                        NOM-151
                      </span>
                    )}
                  </div>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.45)" }}
                  >
                    {fl.desc}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="/signa"
              className="inline-flex items-center gap-1.5 text-sm font-semibold transition-all"
              style={{ color: "#2AD796" }}
            >
              Ver producto Signa
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

          {/* Expediente digital */}
          <div
            className="rounded-3xl p-7 flex flex-col"
            style={{
              background:
                "linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)",
              backdropFilter: "blur(16px)",
              border: "1px solid rgba(255,255,255,0.09)",
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-10 h-10 rounded-2xl flex items-center justify-center"
                style={{ background: "rgba(42,215,150,0.18)" }}
              >
                <svg
                  className="w-5 h-5"
                  style={{ color: "#2AD796" }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                  />
                </svg>
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider" style={{ color: "#2AD796" }}>
                  Producto 3
                </div>
                <div className="text-white font-black text-lg">Expediente Digital</div>
              </div>
            </div>

            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "rgba(255,255,255,0.48)" }}
            >
              El diferenciador clave de JAAK. Cada proceso genera un expediente
              sellado, inmutable y exportable para auditorías.
            </p>

            <ul className="space-y-2.5 flex-1 mb-6">
              {expedienteFeatures.map((f, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 text-sm"
                  style={{ color: "rgba(255,255,255,0.62)" }}
                >
                  <svg
                    className="w-4 h-4 flex-shrink-0 mt-0.5"
                    style={{ color: "#2AD796" }}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>

            <Link
              href="/plataforma/kyc-kyb"
              className="inline-flex items-center gap-1.5 text-sm font-semibold transition-all"
              style={{ color: "#2AD796" }}
            >
              Ver casos de uso
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Pricing CTA */}
        <div
          className="mt-10 rounded-2xl px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
            Todos los productos disponibles en autoservicio o con integración asistida.
          </p>
          <Link
            href="/precios"
            className="inline-flex items-center gap-2 text-sm font-semibold whitespace-nowrap transition-all"
            style={{ color: "#1ECAD3" }}
          >
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
