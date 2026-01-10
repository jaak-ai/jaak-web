import Link from "next/link";

export default function HeroRegulated() {
  return (
    <section className="min-h-screen flex items-center bg-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-4xl">
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0a0f1c] leading-[1.1] mb-6">
            Identidad digital diseñada para cumplir regulación y resistir auditorías.
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-[#4b5563] mb-8 leading-relaxed">
            KYC, KYB y firma electrónica con evidencia legal auditable,
            <br className="hidden md:block" />
            operando bajo marcos regulatorios exigidos por empresas reguladas.
          </p>

          {/* Bullets */}
          <ul className="space-y-4 mb-10">
            <li className="flex items-center gap-3 text-lg text-[#374151]">
              <span className="w-2 h-2 bg-[#0a0f1c] rounded-full"></span>
              Evidencia verificable para auditorías regulatorias
            </li>
            <li className="flex items-center gap-3 text-lg text-[#374151]">
              <span className="w-2 h-2 bg-[#0a0f1c] rounded-full"></span>
              Reducción de riesgo operativo y fraude de identidad
            </li>
            <li className="flex items-center gap-3 text-lg text-[#374151]">
              <span className="w-2 h-2 bg-[#0a0f1c] rounded-full"></span>
              Cumplimiento continuo sin procesos manuales
            </li>
          </ul>

          {/* Primary CTA */}
          <div className="mb-4">
            <Link
              href="/contact?type=regulatory-review"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#0a0f1c] text-white font-bold text-lg rounded-lg hover:bg-[#1a2744] transition-all"
            >
              Solicitar evaluación regulatoria
            </Link>
          </div>

          {/* Microcopy */}
          <p className="text-sm text-[#6b7280]">
            En 15 minutos te decimos si JAAK cumple lo que tu regulación exige.
          </p>
        </div>
      </div>
    </section>
  );
}
