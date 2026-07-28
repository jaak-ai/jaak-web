const actions = ["Revisar detalle", "Comparar datos", "Clasificar resultado", "Documentar decisión", "Agregar al expediente"];

const nextActions = [
  { title: "Verifica la identidad", description: "Confirma que la persona consultada es quien dice ser antes de decidir." },
  { title: "Clasifica la naturaleza de la fuente", description: "Distingue si la coincidencia proviene de una fuente restrictiva, indicativa o de validación." },
  { title: "Documenta y conserva el análisis", description: "Registra qué se revisó, con qué criterio y qué decisión se tomó." },
];

export default function ScreeningResultMockup() {
  return (
    <section className="py-20 bg-gray-50" aria-labelledby="mockup-heading">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-sr className="text-center mb-12">
          <h2 id="mockup-heading" className="text-3xl md:text-4xl font-black text-[#202945] mb-4">
            Así se ve un resultado de consulta
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ejemplo ilustrativo de la interfaz JAAK. No se muestran datos personales reales.
          </p>
        </div>

        <div data-sr className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-10">
          <div className="px-6 py-4 bg-[#202945] flex items-center justify-between">
            <span className="text-white font-semibold text-sm">Resultado de consulta · Ejemplo</span>
            <span className="px-2.5 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold border border-amber-400/30">
              Posible coincidencia
            </span>
          </div>

          <div className="p-6 grid sm:grid-cols-2 gap-x-8 gap-y-4">
            {[
              ["Nombre consultado", "María Ejemplo Hernández"],
              ["Tipo", "Persona física"],
              ["Score", "0.91"],
              ["Fuente", "Ejemplo de fuente internacional"],
              ["Campo coincidente", "Nombre y alias"],
              ["Fecha", "28/07/2026 · 14:35"],
            ].map(([label, value]) => (
              <div key={label}>
                <div className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-1">{label}</div>
                <div className="text-[#202945] font-semibold">{value}</div>
              </div>
            ))}
          </div>

          <div className="px-6 pb-6 flex flex-wrap gap-2">
            {actions.map((action) => (
              <span key={action} className="text-xs font-semibold px-3 py-1.5 rounded-full bg-gray-100 text-gray-600">
                {action}
              </span>
            ))}
          </div>

          <div className="px-6 pb-6">
            <p className="text-xs text-gray-400 leading-relaxed">
              Una coincidencia de nombre no es una identificación definitiva. El score y el campo coincidente
              ayudan a priorizar el análisis, no a sustituirlo.
            </p>
          </div>
        </div>

        <div data-sr-grid className="grid md:grid-cols-3 gap-6">
          {nextActions.map((item, i) => (
            <div key={item.title} className="p-6 rounded-xl bg-white border border-gray-100">
              <div className="w-8 h-8 rounded-full bg-[#1ECAD3]/10 text-[#0F8E96] font-bold flex items-center justify-center text-sm mb-4">
                {i + 1}
              </div>
              <h3 className="font-bold text-[#202945] mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
