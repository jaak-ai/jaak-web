export default function Problem() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Section header */}
          <h2 className="text-3xl md:text-4xl font-black text-[#0a0f1c] mb-8">
            El problema real
          </h2>

          <p className="text-xl text-[#4b5563] mb-8 leading-relaxed">
            Las empresas reguladas enfrentan un dilema imposible:
          </p>

          {/* Dilema */}
          <ul className="space-y-4 mb-12">
            <li className="flex items-start gap-3 text-lg text-[#374151]">
              <span className="text-[#ef4444] mt-1">•</span>
              Si endurecen KYC → pierden conversión
            </li>
            <li className="flex items-start gap-3 text-lg text-[#374151]">
              <span className="text-[#ef4444] mt-1">•</span>
              Si simplifican onboarding → aumenta el fraude
            </li>
            <li className="flex items-start gap-3 text-lg text-[#374151]">
              <span className="text-[#ef4444] mt-1">•</span>
              Si no documentan bien → fallan auditorías y pagan multas
            </li>
          </ul>

          {/* Costs */}
          <div className="bg-[#fef2f2] border border-[#fecaca] rounded-xl p-6 mb-8">
            <h3 className="text-lg font-bold text-[#991b1b] mb-4">El costo de hacerlo mal</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="flex items-center gap-2 text-[#7f1d1d]">
                <span>×</span> Multas regulatorias
              </div>
              <div className="flex items-center gap-2 text-[#7f1d1d]">
                <span>×</span> Riesgo reputacional
              </div>
              <div className="flex items-center gap-2 text-[#7f1d1d]">
                <span>×</span> Clientes legítimos que abandonan
              </div>
              <div className="flex items-center gap-2 text-[#7f1d1d]">
                <span>×</span> Operaciones manuales que no escalan
              </div>
            </div>
          </div>

          {/* Insight */}
          <p className="text-xl font-semibold text-[#0a0f1c] border-l-4 border-[#2DB6C1] pl-4">
            Esto no es un problema técnico. Es un problema de negocio.
          </p>
        </div>
      </div>
    </section>
  );
}
