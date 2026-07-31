const GROUPS: { heading: string; cases: { num: string; title: string; desc: string }[] }[] = [
  {
    heading: "OCR para Identificación Oficial",
    cases: [
      {
        num: "01",
        title: "Onboarding y precarga de formularios",
        desc: "Extrae información del documento para evitar que el usuario capture manualmente todos sus datos.",
      },
      {
        num: "02",
        title: "Alta de clientes y expedientes",
        desc: "Convierte información de identificaciones en campos estructurados que puedan incorporarse a un expediente o sistema interno.",
      },
      {
        num: "03",
        title: "Registro y check-in",
        desc: "Agiliza procesos de recepción, registro, acceso, hospedaje o alta operativa mediante lectura documental.",
      },
    ],
  },
  {
    heading: "PDF OCR Inteligente",
    cases: [
      {
        num: "04",
        title: "Alta de proveedores",
        desc: "Extrae datos de constancias fiscales, actas y comprobantes para reducir captura manual en compras y operaciones.",
      },
      {
        num: "05",
        title: "Procesamiento jurídico y administrativo",
        desc: "Convierte información de contratos, actas y documentos empresariales en datos utilizables por otras aplicaciones.",
      },
      {
        num: "06",
        title: "Documentos fiscales y financieros",
        desc: "Procesa constancias, estados de cuenta y documentos administrativos para facilitar revisión y captura.",
      },
    ],
  },
];

export default function OcrUseCases() {
  return (
    <section className="py-16 md:py-20 bg-[#FAFAFA]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold" style={{ color: "#212A45" }}>
            Casos de uso
          </h2>
          <p className="text-gray-500 mt-3 text-[15px]">
            Seis casos prioritarios — todos son extracción de información.
          </p>
        </div>

        {GROUPS.map((group) => (
          <div key={group.heading} className="mb-8 last:mb-0">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-gray-400 mb-3">{group.heading}</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {group.cases.map((c) => (
                <div key={c.num} className="bg-white border border-gray-100 rounded-xl p-5">
                  <span className="text-[11px] font-extrabold tabular-nums" style={{ color: "#25969f" }}>
                    {c.num}
                  </span>
                  <h4 className="text-[14px] font-bold mt-1.5 mb-1.5" style={{ color: "#212A45" }}>
                    {c.title}
                  </h4>
                  <p className="text-[12.5px] text-gray-500 leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
