export default function RegulatoryProblem() {
  return (
    <section className="py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-8 leading-tight">
            El problema no es verificar identidades.
            <br />
            <span className="text-white/60">Es demostrar que cumpliste correctamente.</span>
          </h2>

          {/* Body */}
          <div className="space-y-6 mb-10">
            <p className="text-lg text-white/60 leading-relaxed">
              Las organizaciones reguladas fallan cuando no pueden demostrar
              cómo validaron una identidad, cómo conservaron la evidencia
              o cómo garantizaron trazabilidad ante una auditoría.
            </p>
            <p className="text-lg text-white/60 leading-relaxed">
              La mayoría de los problemas regulatorios no nacen del fraude,
              sino de procesos no defendibles.
            </p>
          </div>

          {/* Consequences */}
          <div className="bg-[#ff6b6b]/10 border border-[#ff6b6b]/20 rounded-xl p-6">
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-[#ff6b6b]">
                <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                Observaciones en auditorías
              </li>
              <li className="flex items-center gap-3 text-[#ff6b6b]">
                <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                Multas y sanciones
              </li>
              <li className="flex items-center gap-3 text-[#ff6b6b]">
                <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                Riesgo legal y reputacional
              </li>
              <li className="flex items-center gap-3 text-[#ff6b6b]">
                <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                Retrabajo operativo constante
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
