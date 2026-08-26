const cases = [
  { title: "REGISTRO DE USUARIOS", desc: "Confirma el dato antes de incorporarlo a tus sistemas." },
  { title: "ACTUALIZACIÓN DE EXPEDIENTES", desc: "Revalida información cuando el proceso lo requiera." },
  { title: "PROVEEDORES", desc: "Agrega una capa de verificación en procesos de alta." },
  { title: "EMPLEADOS", desc: "Incorpora validaciones puntuales dentro de procesos autorizados." },
  { title: "SERVICIOS FINANCIEROS", desc: "Utiliza la consulta como una capa adicional dentro de procesos de identidad y cumplimiento." },
  { title: "INMOBILIARIO", desc: "Valida información dentro de procesos de identificación y expediente." },
];

export default function CurpUseCases() {
  return (
    <section className="py-20 bg-white" aria-labelledby="curp-use-cases-heading">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-sr className="text-center mb-12">
          <h2 id="curp-use-cases-heading" className="text-3xl md:text-4xl font-black text-[#02132D]">
            ¿Cuándo usar una validación CURP?
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
      </div>
    </section>
  );
}
