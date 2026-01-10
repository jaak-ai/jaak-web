export default function RegulatoryProblem() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-black text-[#0a0f1c] mb-8 leading-tight">
            El problema no es verificar identidades.
            <br />
            Es demostrar que cumpliste correctamente.
          </h2>

          {/* Body */}
          <div className="space-y-6 mb-10">
            <p className="text-lg text-[#4b5563] leading-relaxed">
              Las organizaciones reguladas fallan cuando no pueden demostrar
              cómo validaron una identidad, cómo conservaron la evidencia
              o cómo garantizaron trazabilidad ante una auditoría.
            </p>
            <p className="text-lg text-[#4b5563] leading-relaxed">
              La mayoría de los problemas regulatorios no nacen del fraude,
              sino de procesos no defendibles.
            </p>
          </div>

          {/* Consequences */}
          <div className="bg-[#fef2f2] border border-[#fecaca] rounded-xl p-6">
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-[#991b1b]">
                <span>•</span>
                Observaciones en auditorías
              </li>
              <li className="flex items-center gap-3 text-[#991b1b]">
                <span>•</span>
                Multas y sanciones
              </li>
              <li className="flex items-center gap-3 text-[#991b1b]">
                <span>•</span>
                Riesgo legal y reputacional
              </li>
              <li className="flex items-center gap-3 text-[#991b1b]">
                <span>•</span>
                Retrabajo operativo constante
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
