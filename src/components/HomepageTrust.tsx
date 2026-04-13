import Image from "next/image";

const regulations = [
  {
    name: "CNBV",
    full: "Comisión Nacional Bancaria y de Valores",
    scope: "Instituciones financieras y fintechs",
  },
  {
    name: "UIF",
    full: "Unidad de Inteligencia Financiera",
    scope: "Prevención de lavado de dinero (PLD)",
  },
  {
    name: "NOM-151",
    full: "NOM-151-SCFI-2016",
    scope: "Firma electrónica con valor legal",
  },
  {
    name: "LFPIORPI",
    full: "Ley Federal de Prevención e Identificación de Operaciones",
    scope: "Actividades vulnerables y AML",
  },
  {
    name: "Ley Fintech",
    full: "Ley para Regular las Instituciones de Tecnología Financiera",
    scope: "SOFIPO, SOFOM, IFC, IFPE",
  },
  {
    name: "AML/CFT",
    full: "Anti Money Laundering / Counter Terrorism Financing",
    scope: "Estándares GAFI / FATF internacionales",
  },
];

const certifications = [
  {
    name: "ISO 27001",
    description: "Seguridad de la información",
    image: "/images/certifications/iso-27001.png",
  },
  {
    name: "ISO 9001",
    description: "Gestión de calidad",
    image: "/images/certifications/iso-9001.png",
  },
  {
    name: "iBeta PAD",
    description: "Prueba de vida anti-spoofing",
    image: "/images/certifications/ibeta.png",
  },
  {
    name: "NIST FRVT",
    description: "Reconocimiento facial evaluado",
    image: "/images/certifications/nist.png",
  },
  {
    name: "IQNet",
    description: "Red internacional de calidad",
    image: "/images/certifications/iqnet.png",
  },
  {
    name: "Hecho en México",
    description: "Tecnología 100% mexicana",
    image: "/images/certifications/hecho-en-mexico.png",
  },
];

const trustPoints = [
  "Biometría propia sin dependencias de AWS Rekognition o Azure Face",
  "Datos biométricos nunca salen de la infraestructura del cliente",
  "LFPDPPP — cumplimiento con protección de datos personales",
  "Servidores en México para soberanía de datos regulados",
];

export default function HomepageTrust() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: "#0E1133" }}
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(255,255,255,0.07), transparent)",
        }}
      />
      <div
        className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: "rgba(30,202,211,0.05)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6"
            style={{
              color: "#1ECAD3",
              border: "1px solid rgba(30,202,211,0.22)",
              background: "rgba(30,202,211,0.08)",
            }}
          >
            Cumplimiento regulatorio
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
            Diseñado bajo los marcos{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #1ECAD3, #2AD796)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              regulatorios más exigentes.
            </span>
          </h2>
          <p
            className="text-lg leading-relaxed"
            style={{ color: "rgba(255,255,255,0.48)" }}
          >
            No solo cumplimos con la regulación. Generamos la evidencia que te permite
            demostrar que tú también cumples.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 mb-12">
          {/* Regulations */}
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-5"
              style={{ color: "rgba(255,255,255,0.30)" }}
            >
              Marcos regulatorios cubiertos
            </p>
            <div className="grid grid-cols-2 gap-3">
              {regulations.map((r, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-4 transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    background:
                      "linear-gradient(145deg, rgba(30,202,211,0.07) 0%, rgba(255,255,255,0.02) 100%)",
                    border: "1px solid rgba(30,202,211,0.12)",
                  }}
                >
                  <div
                    className="text-sm font-black mb-1"
                    style={{ color: "#1ECAD3" }}
                  >
                    {r.name}
                  </div>
                  <div
                    className="text-xs leading-snug"
                    style={{ color: "rgba(255,255,255,0.38)" }}
                  >
                    {r.scope}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Trust points + certifications */}
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-5"
              style={{ color: "rgba(255,255,255,0.30)" }}
            >
              Privacidad y soberanía de datos
            </p>
            <ul className="space-y-3 mb-8">
              {trustPoints.map((point, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm"
                  style={{ color: "rgba(255,255,255,0.60)" }}
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
                  {point}
                </li>
              ))}
            </ul>

            {/* Highlight box */}
            <div
              className="rounded-2xl p-5"
              style={{
                background:
                  "linear-gradient(145deg, rgba(42,215,150,0.08) 0%, rgba(30,202,211,0.05) 100%)",
                border: "1px solid rgba(42,215,150,0.18)",
              }}
            >
              <div
                className="text-sm font-bold mb-1"
                style={{ color: "#2AD796" }}
              >
                Tecnología 100% mexicana
              </div>
              <p
                className="text-xs leading-relaxed"
                style={{ color: "rgba(255,255,255,0.48)" }}
              >
                El único proveedor de KYC + firma con motor biométrico propio,
                desarrollado y operado en México. Sin intermediarios extranjeros
                en el flujo de datos biométricos sensibles.
              </p>
            </div>
          </div>
        </div>

        {/* Certifications strip */}
        <div>
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-5 text-center"
            style={{ color: "rgba(255,255,255,0.28)" }}
          >
            Certificaciones activas
          </p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {certifications.map((cert, i) => (
              <div
                key={i}
                className="group flex flex-col items-center text-center p-4 rounded-2xl transition-all duration-300 hover:-translate-y-1"
                style={{
                  background:
                    "linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <div className="w-12 h-12 mb-2.5 relative">
                  <Image
                    src={cert.image}
                    alt={cert.name}
                    fill
                    className="object-contain brightness-90 group-hover:brightness-110 transition-all duration-300"
                  />
                </div>
                <div
                  className="font-bold text-xs mb-0.5"
                  style={{ color: "rgba(255,255,255,0.75)" }}
                >
                  {cert.name}
                </div>
                <div
                  className="text-xs leading-tight"
                  style={{ color: "rgba(255,255,255,0.30)" }}
                >
                  {cert.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
