import Link from "next/link";

const pillars = [
  { icon: "👤", title: "KYC & KYB", desc: "Verificación de identidad personal y empresarial con evidencia legal desde el primer contacto.", href: "/plataforma/kyc-kyb", color: "#2DB6C1" },
  { icon: "✍️", title: "Firma Electrónica", desc: "Firma con validez legal, trazabilidad completa y respaldo NOM-151 para México.", href: "/signa", color: "#2AD796" },
  { icon: "🔍", title: "Evidencia Auditable", desc: "Cada proceso genera registros trazables, defendibles ante autoridades internas y externas.", href: "/cumplimiento/pld-aml", color: "#2DB6C1" },
  { icon: "🔗", title: "Integración API", desc: "SDK y API REST para integrar JAAK en tu operación sin reemplazar tus sistemas actuales.", href: "/documentacion", color: "#2AD796" },
];

const points = [
  "Evidencia registrada y trazable",
  "Integridad de datos garantizada",
  "Procesos repetibles y defendibles",
  "Eliminación de validaciones manuales",
];

export default function JaakSolution() {
  return (
    <section id="soluciones" className="py-24 relative overflow-hidden" style={{ background: "#0E1133" }}>
      <div
        className="absolute top-0 left-1/4 w-[450px] h-[450px] rounded-full blur-[100px] pointer-events-none"
        style={{ background: "rgba(45,182,193,0.08)" }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6"
            style={{ color: "#2DB6C1", border: "1px solid rgba(45,182,193,0.22)", background: "rgba(45,182,193,0.08)" }}
          >
            La solución JAAK
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
            JAAK centraliza identidad, cumplimiento y{" "}
            <span style={{
              background: "linear-gradient(90deg, #2DB6C1, #2AD796)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              evidencia legal.
            </span>
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.52)" }}>
            JAAK automatiza verificación de identidad, KYC/KYB y firma electrónica
            generando evidencia legal auditable desde el primer contacto hasta el cierre del proceso.
          </p>
        </div>

        {/* Pillar cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {pillars.map((p) => (
            <Link
              key={p.title}
              href={p.href}
              className="group relative rounded-2xl p-6 block transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(255,255,255,0.09)",
              }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-5"
                style={{ background: `rgba(45,182,193,0.14)` }}
              >
                {p.icon}
              </div>
              <div className="text-white font-bold mb-2">{p.title}</div>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.42)" }}>{p.desc}</p>
              <div className="flex items-center gap-1 text-xs font-medium" style={{ color: "#2DB6C1" }}>
                Ver más
                <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* Key points bar */}
        <div
          className="rounded-2xl p-7"
          style={{
            background: "linear-gradient(90deg, rgba(45,182,193,0.06), rgba(42,215,150,0.04))",
            border: "1px solid rgba(45,182,193,0.12)",
          }}
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {points.map((point, i) => (
              <div key={i} className="flex items-start gap-3">
                <span
                  className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: "linear-gradient(135deg, #2DB6C1, #2AD796)", boxShadow: "0 2px 10px rgba(45,182,193,0.30)" }}
                >
                  <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
