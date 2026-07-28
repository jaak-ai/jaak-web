const useCases = [
  { title: "Onboarding de clientes", description: "Consulta antes de iniciar una relación comercial y documenta el resultado como parte del alta." },
  { title: "Alta de proveedores", description: "Revisa alertas, sanciones, inhabilitaciones y riesgos relevantes antes de contratar." },
  { title: "Beneficiarios controladores", description: "Complementa la identificación de las personas que controlan o se benefician de una operación." },
  { title: "Personas Políticamente Expuestas", description: "Detecta señales que pueden requerir debida diligencia reforzada." },
  { title: "Prevención de fraude y suplantación", description: "Combina la consulta con verificación de identidad para reducir homonimias y decisiones basadas únicamente en un nombre." },
  { title: "Monitoreo de relaciones existentes", description: "Revisa nuevamente a clientes o proveedores cuando cambie su perfil o se actualicen las fuentes." },
  { title: "Auditorías y revisiones internas", description: "Conserva información que permita reconstruir qué se consultó y cuándo." },
  { title: "Expansión internacional", description: "Consulta fuentes y alertas de diferentes jurisdicciones durante procesos de alta transfronterizos." },
];

const sectors = [
  "Fintech", "SOFOM", "SOFIPO", "SOCAP", "Bancos", "Aseguradoras", "Actividades vulnerables",
  "Inmobiliario", "Juegos con apuesta", "Marketplaces", "Recursos Humanos", "Salud", "Legal",
  "Compras y proveedores", "Empresas con operaciones internacionales",
];

export default function RiskUseCasesGrid() {
  return (
    <section className="py-20 bg-white" aria-labelledby="use-cases-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-sr className="text-center mb-14">
          <h2 id="use-cases-heading" className="text-3xl md:text-4xl font-black text-[#202945] mb-4">
            ¿En qué procesos puedes utilizar la consulta?
          </h2>
        </div>

        <div data-sr-grid className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {useCases.map((uc) => (
            <div key={uc.title} className="p-6 rounded-xl border border-gray-100 bg-gray-50 hover:border-[#1ECAD3]/40 hover:shadow-sm transition-all">
              <h3 className="font-bold text-[#202945] mb-2 text-sm">{uc.title}</h3>
              <p className="text-xs text-gray-600 leading-relaxed">{uc.description}</p>
            </div>
          ))}
        </div>

        <div data-sr className="text-center">
          <p className="text-sm font-bold uppercase tracking-wide text-gray-400 mb-4">Sectores sugeridos</p>
          <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
            {sectors.map((sector) => (
              <span key={sector} className="text-xs font-semibold px-3 py-1.5 rounded-full bg-gray-100 text-gray-600">
                {sector}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
