import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black text-[#0a0f1c] mb-8">
            ¿Quieres ver si JAAK aplica a tu caso?
          </h2>

          <div className="mb-6">
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

          <p className="text-sm text-[#9ca3af]">
            Te diremos sí o no. Si no encaja, no te hacemos perder tiempo.
          </p>
        </div>
      </div>
    </section>
  );
}
