export default function Solution() {
  return (
    <section className="py-20 bg-[#f9fafb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Section header */}
          <h2 className="text-3xl md:text-4xl font-black text-[#0a0f1c] mb-8">
            Cómo JAAK lo resuelve
          </h2>

          <p className="text-xl text-[#4b5563] mb-10 leading-relaxed">
            JAAK automatiza identidad y firma digital desde el primer contacto hasta la evidencia legal final, sin fricción para el usuario y sin huecos para el fraude.
          </p>

          {/* Capabilities */}
          <ul className="space-y-4 mb-10">
            <li className="flex items-start gap-4 text-lg text-[#374151]">
              <span className="w-6 h-6 bg-[#2DB6C1] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              Verificación biométrica y documental
            </li>
            <li className="flex items-start gap-4 text-lg text-[#374151]">
              <span className="w-6 h-6 bg-[#2DB6C1] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              KYC / KYB automatizado
            </li>
            <li className="flex items-start gap-4 text-lg text-[#374151]">
              <span className="w-6 h-6 bg-[#2DB6C1] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              Firma electrónica con trazabilidad legal
            </li>
            <li className="flex items-start gap-4 text-lg text-[#374151]">
              <span className="w-6 h-6 bg-[#2DB6C1] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              Evidencia auditable lista para inspección
            </li>
          </ul>

          {/* Summary */}
          <div className="bg-[#0a0f1c] rounded-xl p-6 text-white">
            <p className="text-lg font-medium">
              Todo integrado. Todo medible. Todo defendible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
