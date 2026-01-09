import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="py-24 bg-[#212A45]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Si la identidad, la empresa o el contrato importan,
          </h2>
          <p className="text-3xl md:text-4xl font-bold text-[#2DB6C1] mb-12">
            hazlo bien desde el inicio.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="#contacto"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#2DB6C1] text-white font-semibold rounded-full hover:bg-[#25969f] transition-all hover:scale-105 hover:shadow-xl"
            >
              Solicitar demo
            </Link>
            <Link
              href="#contacto"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-semibold rounded-full border-2 border-white/30 hover:border-white hover:bg-white/10 transition-all"
            >
              Hablar con compliance
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
