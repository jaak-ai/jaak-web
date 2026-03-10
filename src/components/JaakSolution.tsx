import Link from "next/link";

const pillars = [
  {
    icon: "👤",
    title: "KYC & KYB",
    desc: "Verificación de identidad personal y empresarial con evidencia legal desde el primer contacto.",
    href: "/plataforma/kyc-kyb",
    color: "#0066ff",
  },
  {
    icon: "✍️",
    title: "Firma Electrónica",
    desc: "Firma con validez legal, trazabilidad completa y respaldo NOM-151 para México.",
    href: "/signa",
    color: "#00d4aa",
  },
  {
    icon: "🔍",
    title: "Evidencia Auditable",
    desc: "Cada proceso genera registros trazables, defendibles ante autoridades internas y externas.",
    href: "/cumplimiento/pld-aml",
    color: "#7c3aed",
  },
  {
    icon: "🔗",
    title: "Integración API",
    desc: "SDK y API REST para integrar JAAK en tu operación sin reemplazar tus sistemas actuales.",
    href: "/documentacion",
    color: "#f59e0b",
  },
];

const points = [
  "Evidencia registrada y trazable",
  "Integridad de datos garantizada",
  "Procesos repetibles y defendibles",
  "Eliminación de validaciones manuales",
];

export default function JaakSolution() {
  return (
    <section id="soluciones" className="py-24 bg-[#060610] relative overflow-hidden">
      {/* ambient */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#0066ff]/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold text-[#00d4aa] border border-[#00d4aa]/20 bg-[#00d4aa]/8 mb-6">
            La solución JAAK
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
            JAAK centraliza identidad, cumplimiento y{" "}
            <span className="bg-gradient-to-r from-[#0066ff] to-[#00d4aa] bg-clip-text text-transparent">
              evidencia legal.
            </span>
          </h2>
          <p className="text-lg text-white/55 leading-relaxed">
            JAAK automatiza verificación de identidad, KYC/KYB y firma electrónica
            generando evidencia legal auditable desde el primer contacto hasta el cierre del proceso.
          </p>
        </div>

        {/* Pillar cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {pillars.map((p) => (
            <Link
              key={p.title}
              href={p.href}
              className="group relative rounded-2xl p-6 border border-white/8 transition-all duration-300 hover:border-white/18 hover:-translate-y-1 block"
              style={{
                background: "linear-gradient(145deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
                backdropFilter: "blur(16px)",
              }}
            >
              {/* colored glow on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: `radial-gradient(ellipse at top left, ${p.color}15, transparent 65%)` }}
              />

              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-5 relative z-10"
                style={{ background: `${p.color}18` }}
              >
                {p.icon}
              </div>
              <div className="text-white font-bold mb-2 relative z-10">{p.title}</div>
              <p className="text-white/45 text-sm leading-relaxed relative z-10">{p.desc}</p>
              <div className="mt-4 flex items-center gap-1 text-xs font-medium relative z-10" style={{ color: p.color }}>
                Ver más
                <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* Key points */}
        <div
          className="rounded-3xl p-8 border border-white/8"
          style={{
            background: "linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(0,102,255,0.04) 100%)",
            backdropFilter: "blur(16px)",
          }}
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {points.map((point, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="w-6 h-6 bg-gradient-to-br from-[#0066ff] to-[#00d4aa] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-lg shadow-[#0066ff]/20">
                  <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-white/70 text-sm leading-relaxed">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
