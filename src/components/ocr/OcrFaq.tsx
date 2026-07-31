export const OCR_FAQ = [
  {
    q: "¿OCR es lo mismo que KYC?",
    a: "No. OCR extrae y estructura la información de un documento. KYC biométrico combina OCR con prueba de vida, biometría facial y consulta de listas en un solo flujo. Puedes usar OCR solo, o combinarlo con KYC cuando tu proceso requiera verificar identidad.",
  },
  {
    q: "¿El OCR valida la información contra una fuente oficial?",
    a: "No por sí solo. Para confirmar una credencial contra el padrón del INE o una CURP contra RENAPO, se usan los productos de Consulta INE y Consulta RENAPO/CURP, disponibles por separado.",
  },
  {
    q: "¿Qué documentos puedo procesar?",
    a: "OCR para Identificación Oficial procesa INE, pasaporte y otras identificaciones oficiales. PDF OCR Inteligente procesa actas constitutivas, constancias de situación fiscal, comprobantes de domicilio, estados de cuenta y otros documentos empresariales.",
  },
  {
    q: "¿Cómo se consume: web, autoservicio o API?",
    a: "Ambos productos están disponibles vía plataforma web (autoservicio) y por integración API.",
  },
  {
    q: "¿El paquete se compra por documento o por tokens?",
    a: "Por tokens. El consumo varía según el tipo y la extensión del documento — el detalle exacto está en el catálogo de autoservicio.",
  },
  {
    q: "¿Qué pasa si necesito más volumen del que ofrece un paquete?",
    a: "Puedes solicitar integración por volumen a través del formulario de esta página; un especialista revisa tu caso.",
  },
];

export default function OcrFaq() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-9">
          <h2 className="text-2xl md:text-3xl font-extrabold" style={{ color: "#212A45" }}>
            Preguntas frecuentes
          </h2>
        </div>
        <div className="space-y-2.5">
          {OCR_FAQ.map((item, i) => (
            <details
              key={item.q}
              open={i === 0}
              className="bg-white border border-gray-100 rounded-xl px-5 group"
            >
              <summary className="py-4 font-bold text-[14px] cursor-pointer list-none flex items-center justify-between" style={{ color: "#212A45" }}>
                {item.q}
                <span className="text-lg font-normal group-open:hidden" style={{ color: "#25969f" }}>
                  +
                </span>
                <span className="text-lg font-normal hidden group-open:inline" style={{ color: "#25969f" }}>
                  –
                </span>
              </summary>
              <p className="text-[13px] text-gray-500 leading-relaxed pb-4">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
