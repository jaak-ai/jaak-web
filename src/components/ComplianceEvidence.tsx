export default function ComplianceEvidence() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-black text-[#0a0f1c] mb-4">
            Diseñado para entornos regulados.
          </h2>

          {/* Subtitle */}
          <p className="text-xl text-[#4b5563] mb-4">
            No solo cumplimos. Puedes demostrar que cumples.
          </p>

          {/* Legal defense line */}
          <p className="text-lg text-[#0a0f1c] font-medium mb-10">
            Cada validación genera evidencia legal defendible, no solo registros técnicos.
          </p>

          {/* Principles List */}
          <ul className="space-y-4 mb-10">
            <li className="flex items-start gap-4 text-lg text-[#374151]">
              <span className="w-2 h-2 bg-[#0a0f1c] rounded-full mt-3"></span>
              Evidencia auditable end-to-end
            </li>
            <li className="flex items-start gap-4 text-lg text-[#374151]">
              <span className="w-2 h-2 bg-[#0a0f1c] rounded-full mt-3"></span>
              Trazabilidad completa de identidad y consentimiento
            </li>
            <li className="flex items-start gap-4 text-lg text-[#374151]">
              <span className="w-2 h-2 bg-[#0a0f1c] rounded-full mt-3"></span>
              Control de accesos y segregación de funciones
            </li>
            <li className="flex items-start gap-4 text-lg text-[#374151]">
              <span className="w-2 h-2 bg-[#0a0f1c] rounded-full mt-3"></span>
              Retención de información conforme a normativa
            </li>
          </ul>

          {/* Badges */}
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-[#f3f4f6] text-[#4b5563] text-sm font-medium rounded-lg border border-[#e5e7eb]">
              ISO 27001
            </span>
            <span className="px-4 py-2 bg-[#f3f4f6] text-[#4b5563] text-sm font-medium rounded-lg border border-[#e5e7eb]">
              ISO 9001
            </span>
            <span className="px-4 py-2 bg-[#f3f4f6] text-[#4b5563] text-sm font-medium rounded-lg border border-[#e5e7eb]">
              iBeta Level 1
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
