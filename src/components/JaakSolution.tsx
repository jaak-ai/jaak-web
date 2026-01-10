export default function JaakSolution() {
  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-8">
            JAAK centraliza identidad, cumplimiento y{" "}
            <span className="bg-gradient-to-r from-[#0066ff] to-[#00d4aa] bg-clip-text text-transparent">
              evidencia legal.
            </span>
          </h2>

          {/* Body */}
          <p className="text-lg text-white/60 leading-relaxed mb-10">
            JAAK automatiza verificación de identidad, KYC/KYB y firma electrónica
            generando evidencia legal auditable desde el primer contacto
            hasta el cierre del proceso.
          </p>

          {/* Key Points */}
          <ul className="space-y-4">
            <li className="flex items-start gap-4 text-lg text-white/80">
              <span className="w-6 h-6 bg-gradient-to-br from-[#0066ff] to-[#00d4aa] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              Evidencia registrada y trazable
            </li>
            <li className="flex items-start gap-4 text-lg text-white/80">
              <span className="w-6 h-6 bg-gradient-to-br from-[#0066ff] to-[#00d4aa] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              Integridad de datos garantizada
            </li>
            <li className="flex items-start gap-4 text-lg text-white/80">
              <span className="w-6 h-6 bg-gradient-to-br from-[#0066ff] to-[#00d4aa] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              Procesos repetibles y defendibles
            </li>
            <li className="flex items-start gap-4 text-lg text-white/80">
              <span className="w-6 h-6 bg-gradient-to-br from-[#0066ff] to-[#00d4aa] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              Eliminación de validaciones manuales
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
