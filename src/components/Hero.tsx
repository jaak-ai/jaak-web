import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-white pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-4xl">
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0a0f1c] leading-[1.1] mb-6">
            Reduce fraude digital y cumple regulación sin perder clientes.
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-[#4b5563] mb-8 leading-relaxed">
            Verificación de identidad, KYC/KYB y firma electrónica con evidencia legal auditable, lista para producción en días.
          </p>

          {/* Supporting bullets */}
          <ul className="space-y-4 mb-10">
            <li className="flex items-center gap-3 text-lg text-[#374151]">
              <span className="text-[#2DB6C1] font-bold text-xl">↓</span>
              Fraude en onboarding y operaciones digitales
            </li>
            <li className="flex items-center gap-3 text-lg text-[#374151]">
              <span className="text-[#2DB6C1] font-bold text-xl">↑</span>
              Conversión en flujos de registro y firma
            </li>
            <li className="flex items-center gap-3 text-lg text-[#374151]">
              <span className="text-[#10b981] font-bold text-xl">✓</span>
              Cumple CNBV, UIF, GDPR y auditorías sin fricción
            </li>
          </ul>

          {/* CTA */}
          <div className="mb-4">
            <Link
              href="#contacto"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#0a0f1c] text-white font-bold text-lg rounded-lg hover:bg-[#1a2744] transition-all hover:scale-105 shadow-lg"
            >
              Agenda una demo de 15 minutos
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

          {/* Micro-text */}
          <p className="text-sm text-[#9ca3af]">
            Sin compromiso · Sin PowerPoints · Caso real de tu industria
          </p>
        </div>
      </div>
    </section>
  );
}
