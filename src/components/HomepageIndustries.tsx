import Link from "next/link";

const industries = [
  {
    title: "Fintech y banca",
    icon: "🏦",
    problem:
      "El onboarding digital debe dejar evidencia defendible ante CNBV y UIF. Una auditoría puede llegar en cualquier momento.",
    solution:
      "KYC biométrico completo + consulta de listas + firma NOM-151 + expediente auditable desde la primera solicitud.",
    regulation: "CNBV · UIF · Ley Fintech · LFPIORPI",
    href: "/bancos",
    accent: "#1ECAD3",
  },
  {
    title: "Sector inmobiliario",
    icon: "🏗️",
    problem:
      "Compradores y arrendatarios deben identificarse con evidencia formal. Los contratos deben ser vinculantes y trazables.",
    solution:
      "Validación biométrica de promitentes + firma electrónica con nivel avanzado + expediente por operación.",
    regulation: "LFPIORPI · SAT 69-B",
    href: "/inmobiliarias",
    accent: "#2AD796",
  },
  {
    title: "Sector automotriz",
    icon: "🚗",
    problem:
      "La venta y financiamiento de vehículos implica verificar identidad y firmar contratos en agencias y puntos de venta.",
    solution:
      "KYC en punto de venta + firma digital en tablet + expediente vinculado a la operación comercial.",
    regulation: "CONDUSEF · SAT · contratos mercantiles",
    href: "/contacto",
    accent: "#1ECAD3",
  },
  {
    title: "RH y servicios legales",
    icon: "📋",
    problem:
      "Los contratos laborales y acuerdos legales firmados digitalmente deben tener validez ante tribunales y organismos regulatorios.",
    solution:
      "Firma electrónica en 4 niveles + vinculación biométrica del firmante + trazabilidad de cada etapa del proceso.",
    regulation: "LFT · Código de Comercio · NOM-151",
    href: "/signa",
    accent: "#2AD796",
  },
];

export default function HomepageIndustries() {
  return (
    <section
      id="industrias"
      className="hp-section hp-bg-1 py-24 relative overflow-hidden"
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(255,255,255,0.07), transparent)",
        }}
      />
      <div
        className="absolute top-1/3 left-0 w-[350px] h-[350px] rounded-full blur-[110px] pointer-events-none"
        style={{ background: "rgba(30,202,211,0.05)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-14" data-sr>
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6"
            style={{
              color: "var(--hp-neutral-pill-text)",
              border: "1px solid var(--hp-neutral-pill-border)",
              background: "var(--hp-neutral-pill-bg)",
            }}
          >
            Industrias
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
            Soluciones para cada{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #1ECAD3, #2AD796)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              sector regulado.
            </span>
          </h2>
          <p
            className="text-lg max-w-xl mx-auto"
            style={{ color: "var(--hp-text-lo)" }}
          >
            Mismo motor de cumplimiento, adaptado al marco regulatorio de cada industria.
          </p>
        </div>

        {/* Industry cards */}
        <div className="grid md:grid-cols-2 gap-5" data-sr-grid>
          {industries.map((ind, i) => (
            <div
              key={i}
              className="hp-glass group rounded-3xl p-7 flex flex-col transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon + regulation row */}
              <div className="flex items-start justify-between mb-5">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl"
                  style={{ background: "rgba(30,202,211,0.12)" }}
                >
                  {ind.icon}
                </div>
                <span
                  className="text-xs font-mono px-2.5 py-1 rounded-full"
                  style={{
                    color: "var(--hp-text-lo)",
                    background: "var(--hp-pill-bg)",
                    border: "1px solid var(--hp-pill-border)",
                  }}
                >
                  {ind.regulation}
                </span>
              </div>

              <h3 className="text-lg font-black text-white mb-4">{ind.title}</h3>

              {/* Problem */}
              <div className="mb-4">
                <div
                  className="text-xs font-semibold uppercase tracking-wider mb-2"
                  style={{ color: "var(--hp-red-text)" }}
                >
                  El problema
                </div>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--hp-text-md)" }}
                >
                  {ind.problem}
                </p>
              </div>

              {/* Solution */}
              <div className="flex-1">
                <div
                  className="text-xs font-semibold uppercase tracking-wider mb-2"
                  style={{ color: ind.accent }}
                >
                  La solución JAAK
                </div>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--hp-text-hi)" }}
                >
                  {ind.solution}
                </p>
              </div>

              <Link
                href={ind.href}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold transition-all duration-200 group-hover:gap-2.5"
                style={{ color: ind.accent }}
              >
                Conocer solución
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
