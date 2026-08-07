const formatChecks = ["¿Tiene 18 caracteres?", "¿Cumple estructura?", "¿Tiene una composición posible?"];
const renapoChecks = ["¿Existe el registro?", "¿Cuál es su estatus?", "¿Qué información está asociada?", "¿Existe correspondencia con la fuente?"];

export default function CurpFormatVsRenapo() {
  return (
    <section className="py-20 bg-white" aria-labelledby="format-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-sr className="text-center mb-12">
          <h2 id="format-heading" className="text-3xl md:text-4xl font-black text-[#02132D]">
            Validar el formato es solo el primer paso
          </h2>
        </div>

        <div data-sr-grid className="grid sm:grid-cols-2 gap-6 mb-10">
          <div className="p-8 rounded-2xl border border-gray-100 bg-gray-50">
            <h3 className="text-sm font-bold uppercase tracking-wide text-gray-400 mb-5">Validación de formato</h3>
            <ul className="space-y-3">
              {formatChecks.map((c) => (
                <li key={c} className="flex items-center gap-3 text-gray-600 text-sm">
                  <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 rounded-2xl text-white relative overflow-hidden" style={{ background: "#02132D" }}>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#1ECAD3]/15 rounded-full blur-3xl" aria-hidden="true" />
            <h3 className="text-sm font-bold uppercase tracking-wide text-[#1ECAD3] mb-5 relative">Validación contra RENAPO</h3>
            <ul className="space-y-3 relative">
              {renapoChecks.map((c) => (
                <li key={c} className="flex items-center gap-3 text-white/90 text-sm">
                  <svg className="w-4 h-4 text-[#1ECAD3] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p data-sr className="text-center text-lg font-semibold text-[#02132D]">
          JAAK te permite incorporar esta segunda capa directamente dentro de tu proceso.
        </p>
      </div>
    </section>
  );
}
