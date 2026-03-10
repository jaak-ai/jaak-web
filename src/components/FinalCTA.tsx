import Link from "next/link";

export default function FinalCTA() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #141a3a 0%, #0E1133 60%, #141a3a 100%)" }}
    >
      {/* Ambient */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: "rgba(45,182,193,0.12)" }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px pointer-events-none"
        style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.08), transparent)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className="max-w-3xl mx-auto rounded-3xl p-10 md:p-14 text-center"
          style={{
            background: "linear-gradient(145deg, rgba(255,255,255,0.07) 0%, rgba(45,182,193,0.04) 50%, rgba(255,255,255,0.02) 100%)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            border: "1px solid rgba(45,182,193,0.15)",
            boxShadow: "0 32px 64px rgba(0,0,0,0.20)",
          }}
        >
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
            style={{
              background: "rgba(45,182,193,0.10)",
              border: "1px solid rgba(45,182,193,0.22)",
            }}
          >
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#2DB6C1" }} />
            <span className="text-sm font-medium" style={{ color: "#2DB6C1" }}>
              Revisión sin costo · 15 minutos
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
            ¿Tu proceso actual resistiría una auditoría hoy?
          </h2>

          <p className="text-xl mb-10 max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.52)" }}>
            En 15 minutos te decimos si JAAK cumple lo que tu regulación exige.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center px-8 py-4 text-white font-bold text-lg rounded-xl transition-all duration-200 group"
              style={{
                background: "linear-gradient(135deg, #2DB6C1, #25969f)",
                boxShadow: "0 8px 32px rgba(45,182,193,0.30)",
              }}
            >
              Solicitar revisión regulatoria
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/precios"
              className="inline-flex items-center justify-center px-8 py-4 font-semibold text-lg rounded-xl transition-all duration-200"
              style={{
                color: "rgba(255,255,255,0.78)",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              Ver precios
            </Link>
          </div>

          {/* Trust signals */}
          <div
            className="mt-10 pt-8 flex flex-wrap justify-center gap-6 text-xs"
            style={{ borderTop: "1px solid rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.28)" }}
          >
            {["Sin compromiso de contratación", "ISO 27001 · iBeta certificado", "Tecnología 100% mexicana"].map((t) => (
              <span key={t} className="flex items-center gap-1.5">
                <svg className="w-4 h-4" style={{ color: "#2AD796" }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
