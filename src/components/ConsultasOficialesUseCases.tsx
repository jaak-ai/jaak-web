const cases = [
  { title: "ONBOARDING LIGERO", desc: "Confirma datos antes de crear una cuenta o expediente." },
  { title: "ACTUALIZACIÓN DE EXPEDIENTES", desc: "Revalida información sin repetir un KYC completo." },
  { title: "PROVEEDORES", desc: "Verifica datos antes de incorporar un nuevo proveedor." },
  { title: "EMPLEADOS", desc: "Agrega validaciones a determinados procesos de alta." },
  { title: "FIRMA DE CONTRATOS", desc: "Valida información antes de iniciar un flujo de firma." },
  { title: "CUMPLIMIENTO", desc: "Agrega consultas puntuales dentro de procesos PLD/KYC." },
];

export default function ConsultasOficialesUseCases() {
  return (
    <section className="py-20 bg-white" aria-labelledby="use-cases-heading">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-sr className="text-center mb-12">
          <h2 id="use-cases-heading" className="text-3xl md:text-4xl font-black text-[#02132D]">
            Una consulta. Distintos momentos del proceso.
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
          Las validaciones aplicables dependen del proceso, sector y marco regulatorio de cada organización.
        </p>
      </div>
    </section>
  );
}
