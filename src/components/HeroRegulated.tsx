import Link from "next/link";
import Image from "next/image";

export default function HeroRegulated() {
  return (
    <section className="min-h-screen bg-[#0a0a0a] pt-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#0a0a0a] to-[#1a1a2e] pointer-events-none" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[70vh]">
          {/* Left side - Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8">
              <span className="w-2 h-2 bg-[#00d4aa] rounded-full animate-pulse" />
              <span className="text-sm text-white/70">Diseñado para entornos regulados</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6">
              Identidad digital que{" "}
              <span className="bg-gradient-to-r from-[#0066ff] to-[#00d4aa] bg-clip-text text-transparent">
                resiste auditorías
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-white/60 mb-6 leading-relaxed">
              KYC, KYB y firma electrónica con evidencia legal auditable,
              operando bajo los marcos regulatorios más exigentes.
            </p>

            {/* Tension Question */}
            <p className="text-base md:text-lg text-[#ff6b6b] font-medium mb-8 flex items-start gap-2">
              <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              ¿Podrías demostrar hoy, con evidencia, cómo validaste cada identidad ante una auditoría?
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Link
                href="/contact?type=regulatory-review"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#0066ff] text-white font-bold text-lg rounded-lg hover:bg-[#0052cc] transition-all group"
              >
                Solicitar revisión regulatoria
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="#contacto"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/5 border border-white/20 text-white font-semibold text-lg rounded-lg hover:bg-white/10 transition-all"
              >
                Ver cómo funciona
              </Link>
            </div>

            {/* Filter text */}
            <p className="text-sm text-white/40">
              Diseñado para organizaciones sujetas a supervisión y auditorías regulatorias.
            </p>
          </div>

          {/* Right side - Visual */}
          <div className="relative lg:h-[500px] flex items-center justify-center">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0066ff]/20 to-[#00d4aa]/20 blur-3xl rounded-full" />

            {/* Card mockup */}
            <div className="relative z-10 w-full max-w-md">
              {/* Main card */}
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 shadow-2xl">
                {/* Verification status */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#0066ff] to-[#00d4aa] rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-white font-semibold">Verificación completa</div>
                      <div className="text-white/50 text-sm">Evidencia auditable</div>
                    </div>
                  </div>
                  <div className="w-3 h-3 bg-[#00d4aa] rounded-full animate-pulse" />
                </div>

                {/* Verification items */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#0066ff]/20 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-[#0066ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <span className="text-white/80 text-sm">Identidad biométrica</span>
                    </div>
                    <svg className="w-5 h-5 text-[#00d4aa]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#0066ff]/20 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-[#0066ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <span className="text-white/80 text-sm">Documento validado</span>
                    </div>
                    <svg className="w-5 h-5 text-[#00d4aa]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#0066ff]/20 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-[#0066ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </div>
                      <span className="text-white/80 text-sm">Prueba de vida</span>
                    </div>
                    <svg className="w-5 h-5 text-[#00d4aa]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>

                {/* Timestamp */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-white/40 text-xs">Hash: 0x7f3a...9c2d</span>
                  <span className="text-white/40 text-xs">Registrado en blockchain</span>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 px-3 py-1.5 bg-[#00d4aa] text-black text-xs font-bold rounded-full shadow-lg">
                ISO 27001
              </div>
              <div className="absolute -bottom-4 -left-4 px-3 py-1.5 bg-[#0066ff] text-white text-xs font-bold rounded-full shadow-lg">
                iBeta Level 1
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
