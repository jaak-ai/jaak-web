const cases = [
  { title: "ONBOARDING LIGERO", desc: "Agrega una validación de credencial sin construir un flujo KYC completo." },
  { title: "ACTUALIZACIÓN DE EXPEDIENTES", desc: "Incorpora una nueva validación cuando necesites actualizar información de clientes." },
  { title: "SERVICIOS FINANCIEROS", desc: "Utiliza la consulta como una capa dentro de procesos de identidad y cumplimiento." },
  { title: "INMOBILIARIO", desc: "Valida información dentro de procesos de identificación de participantes." },
  { title: "SEGUROS", desc: "Agrega una capa de validación en procesos donde necesites confirmar información de identidad." },
  { title: "RH / PROVEEDORES", desc: "Incorpora consultas autorizadas dentro de procesos de alta." },
];

export default function IneUseCases() {
  return (
    <section className="py-20 bg-white" aria-labelledby="ine-use-cases-heading">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-sr className="text-center mb-12">
          <h2 id="ine-use-cases-heading" className="text-3xl md:text-4xl font-black text-[#02132D]">
            Casos de uso
          </h2>
        </div>

        <div data-sr-grid className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cases.map((c) => (
            <div key={c.title} className="p-6 rounded-2xl border border-gray-100 bg-gray-50">
              <h3 className="text-sm font-black tracking-wide text-[#02132D] mb-2">{c.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-400 text-center mt-8">
          La validación INE no es obligatoria en todos estos sectores; su aplicabilidad depende del proceso y
          marco regulatorio de cada organización.
        </p>
      </div>
    </section>
  );
}
