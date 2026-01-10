import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="py-20 bg-[#0a0f1c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Question */}
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            ¿Tu proceso actual resistiría una auditoría hoy?
          </h2>

          {/* Subtext */}
          <p className="text-xl text-[#9ca3af] mb-10">
            En 15 minutos te decimos si JAAK cumple lo que tu regulación exige.
          </p>

          {/* CTA Button */}
          <Link
            href="/contact?type=regulatory-review"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#0a0f1c] font-bold text-lg rounded-lg hover:bg-[#f3f4f6] transition-all"
          >
            Solicitar revisión regulatoria
          </Link>
        </div>
      </div>
    </section>
  );
}
