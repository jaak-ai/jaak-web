import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="py-24 bg-[#060610] relative overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0066ff]/12 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#00d4aa]/8 rounded-full blur-[60px] pointer-events-none" />

      {/* top divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className="max-w-3xl mx-auto rounded-3xl p-10 md:p-14 border border-white/10 text-center"
          style={{
            background: "linear-gradient(145deg, rgba(255,255,255,0.06) 0%, rgba(0,102,255,0.04) 50%, rgba(255,255,255,0.02) 100%)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
          }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#0066ff]/25 bg-[#0066ff]/10 mb-8">
            <span className="w-2 h-2 bg-[#0066ff] rounded-full animate-pulse" />
            <span className="text-[#6ba3ff] text-sm font-medium">Revisión sin costo · 15 minutos</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
            ¿Tu proceso actual resistiría una auditoría hoy?
          </h2>

          <p className="text-xl text-white/55 mb-10 max-w-xl mx-auto">
            En 15 minutos te decimos si JAAK cumple lo que tu regulación exige.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#0066ff] to-[#0052cc] text-white font-bold text-lg rounded-xl hover:from-[#0052cc] hover:to-[#003d99] transition-all duration-200 shadow-xl shadow-[#0066ff]/25 group"
            >
              Solicitar revisión regulatoria
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/precios"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/5 border border-white/15 text-white font-semibold text-lg rounded-xl hover:bg-white/10 transition-all duration-200"
            >
              Ver precios
            </Link>
          </div>

          {/* Trust signals */}
          <div className="mt-10 pt-8 border-t border-white/8 flex flex-wrap justify-center gap-6 text-white/30 text-xs">
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-[#00d4aa]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Sin compromiso de contratación
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-[#00d4aa]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              ISO 27001 · iBeta certificado
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-[#00d4aa]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Tecnología 100% mexicana
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
