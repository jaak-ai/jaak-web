import Link from "next/link";

export default function HomepageFinalCTA() {
  return (
    <section className="hp-section hp-bg-cta py-24 relative overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[140px] pointer-events-none"
        style={{ background: "rgba(30,202,211,0.10)" }}
      />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(255,255,255,0.08), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top label */}
        <div className="text-center mb-10" data-sr>
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4"
            style={{
              color: "var(--hp-neutral-pill-text)",
              border: "1px solid var(--hp-neutral-pill-border)",
              background: "var(--hp-neutral-pill-bg)",
            }}
          >
            Dos formas de comenzar. Hoy.
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight max-w-3xl mx-auto">
            El cumplimiento regulatorio no puede esperar.{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #1ECAD3, #2AD796)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Empieza hoy.
            </span>
          </h2>
        </div>

        {/* Two CTA cards */}
        <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto mb-10" data-sr-grid>
          {/* Autoservicio */}
          <div className="hp-glass rounded-3xl p-8 flex flex-col">
            <div
              className="w-11 h-11 rounded-2xl flex items-center justify-center mb-5"
              style={{ background: "rgba(30,202,211,0.15)" }}
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
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>

            <div
              className="text-xs font-bold uppercase tracking-widest mb-2"
              style={{ color: "#1ECAD3" }}
            >
              Autoservicio
            </div>
            <h3 className="text-xl font-black text-white mb-3">
              Prueba el producto en minutos
            </h3>
            <p
              className="text-sm leading-relaxed mb-6 flex-1"
              style={{ color: "var(--hp-text-md)" }}
            >
              Sin vendedor, sin esperas, sin compromiso. Configura tu primer flujo
              de verificación y genera tu primer expediente hoy mismo.
            </p>

            <div className="space-y-2 mb-6">
              {[
                "Acceso inmediato a la plataforma",
                "Credenciales API en minutos",
                "Soporte técnico incluido",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-xs"
                  style={{ color: "var(--hp-text-md)" }}
                >
                  <svg
                    className="w-3.5 h-3.5 flex-shrink-0"
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
                  {item}
                </div>
              ))}
            </div>

            <Link
              href="/autoservicio"
              className="inline-flex items-center justify-center px-7 py-4 text-white font-bold text-base rounded-xl transition-all duration-200 group"
              style={{
                background: "linear-gradient(135deg, #1ECAD3, #17a8b0)",
                boxShadow: "0 8px 28px rgba(30,202,211,0.28)",
              }}
            >
              Comenzar ahora
              <svg
                className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
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

          {/* Demo */}
          <div className="hp-glass-teal rounded-3xl p-8 flex flex-col">
            <div
              className="w-11 h-11 rounded-2xl flex items-center justify-center mb-5"
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
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>

            <div
              className="text-xs font-bold uppercase tracking-widest mb-2"
              style={{ color: "#2AD796" }}
            >
              Demo personalizada
            </div>
            <h3 className="text-xl font-black text-white mb-3">
              Revisión de tu caso con un experto
            </h3>
            <p
              className="text-sm leading-relaxed mb-6 flex-1"
              style={{ color: "var(--hp-text-md)" }}
            >
              Un especialista regulatorio analiza tu marco de cumplimiento y
              te muestra exactamente cómo JAAK resuelve tu caso específico.
            </p>

            <div className="space-y-2 mb-6">
              {[
                "Revisión de tu marco regulatorio",
                "Demo con tu industria y casos reales",
                "Propuesta técnica sin costo",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-xs"
                  style={{ color: "var(--hp-text-md)" }}
                >
                  <svg
                    className="w-3.5 h-3.5 flex-shrink-0"
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
                  {item}
                </div>
              ))}
            </div>

            <Link
              href="/contacto"
              className="inline-flex items-center justify-center px-7 py-4 font-bold text-base rounded-xl transition-all duration-200"
              style={{
                color: "var(--hp-ghost-btn-color)",
                background: "var(--hp-ghost-btn-bg)",
                border: "1px solid var(--hp-ghost-btn-border)",
              }}
            >
              Hablar con un experto
            </Link>
          </div>
        </div>

        {/* Trust signals */}
        <div
          className="max-w-4xl mx-auto flex flex-wrap justify-center gap-6 text-xs"
          style={{ color: "var(--hp-text-faint)" }}
        >
          {[
            "Sin compromiso de contratación",
            "ISO 27001 · iBeta PAD certificado",
            "Tecnología 100% mexicana",
            "Soporte técnico en español",
          ].map((t) => (
            <span key={t} className="flex items-center gap-1.5">
              <svg
                className="w-3.5 h-3.5"
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
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
