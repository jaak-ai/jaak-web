import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#0066ff] to-[#0052cc] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Question */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6">
            ¿Tu proceso actual resistiría una auditoría hoy?
          </h2>

          {/* Subtext */}
          <p className="text-xl text-white/80 mb-10">
            En 15 minutos te decimos si JAAK cumple lo que tu regulación exige.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#0066ff] font-bold text-lg rounded-lg hover:bg-white/90 transition-all group"
            >
              Solicitar revisión regulatoria
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

          {/* Alternative CTA */}
          <div className="mt-8 pt-8 border-t border-white/20">
            <p className="text-white/70 mb-4">
              ¿No quieres esperar? Puedes usar nuestra plataforma desde hoy mismo
            </p>
            <Link
              href="https://platform.dev.jaak.ai/#/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-white/10 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/20 transition-all"
            >
              Crear cuenta gratis
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
