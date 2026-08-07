const items = [
  "Datos extraídos de la credencial (nombre, entidad, municipio)",
  "CURP asociada a la credencial",
  "Estatus de vigencia contra el padrón electoral",
  "Identificador de operación (eventId)",
  "Información estructurada para consumo de sistemas",
  "Capacidad de incorporarla a procesos de identidad",
];

export default function IneDataGrid() {
  return (
    <section className="py-20" style={{ background: "#F3F4F8" }} aria-labelledby="ine-data-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-sr className="text-center mb-12">
          <h2 id="ine-data-heading" className="text-3xl md:text-4xl font-black text-[#02132D]">
            ¿Qué puedes validar?
          </h2>
        </div>

        <div data-sr-grid className="grid sm:grid-cols-2 gap-4 mb-8">
          {items.map((item) => (
            <div key={item} className="flex items-start gap-3 p-5 rounded-xl bg-white border border-gray-100">
              <svg className="w-4 h-4 text-[#1ECAD3] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm text-gray-700 leading-relaxed">{item}</span>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-400 text-center max-w-2xl mx-auto">
          La validación requiere la imagen frontal de la credencial. JAAK no expone biometría gubernamental,
          fotografías provenientes del INE ni acceso irrestricto al padrón — únicamente los campos estructurados
          que devuelve el servicio de validación.
        </p>
      </div>
    </section>
  );
}
