const items = [
  "CURP consultada",
  "Resultado de validación",
  "Identificador de operación (eventId)",
  "Mensaje de respuesta",
  "Datos demográficos asociados (cuando la CURP existe en RENAPO)",
  "Información del acta que sustenta el registro, cuando RENAPO la expone",
];

export default function CurpDataGrid() {
  return (
    <section className="py-20" style={{ background: "#F3F4F8" }} aria-labelledby="data-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-sr className="text-center mb-12">
          <h2 id="data-heading" className="text-3xl md:text-4xl font-black text-[#02132D]">
            ¿Qué puedes obtener de una validación CURP?
          </h2>
        </div>

        <div data-sr-grid className="grid sm:grid-cols-2 gap-4">
          {items.map((item) => (
            <div key={item} className="flex items-start gap-3 p-5 rounded-xl bg-white border border-gray-100">
              <svg className="w-4 h-4 text-[#1ECAD3] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm text-gray-700 leading-relaxed">{item}</span>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-400 text-center mt-8">
          No se muestran datos personales completos en los ejemplos de esta página. La disponibilidad de cada
          campo depende de la información que RENAPO exponga para el registro consultado.
        </p>
      </div>
    </section>
  );
}
