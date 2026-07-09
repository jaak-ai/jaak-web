import ArticleLayout from "../ArticleLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Por qué la CNBV aplicó +696 sanciones en 2025: el problema no es el fraude, son los expedientes | JAAK",
  description:
    "En 2025, la CNBV alcanzó un récord histórico de sanciones PLD: 696 multas y $411.8 millones de pesos. Analizamos las 9 causas reales, el caso FinCEN y qué cambió con la reforma LFPIORPI.",
  keywords: [
    "CNBV sanciones 2025",
    "LFPIORPI reforma 2025",
    "lavado de dinero México",
    "PLD cumplimiento",
    "FinCEN CIBanco Intercam Vector",
    "expedientes KYC",
    "multas CNBV",
  ],
  openGraph: {
    title:
      "Por qué la CNBV aplicó +696 sanciones en 2025: el problema no es el fraude, son los expedientes",
    description:
      "696 sanciones. $411.8 millones de pesos. +192% vs 2024. Analizamos las causas reales detrás del récord histórico de la CNBV y lo que cambió con la reforma LFPIORPI julio 2025.",
    type: "article",
    publishedTime: "2026-06-12",
    authors: ["JAAK"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Por qué la CNBV aplicó +696 sanciones en 2025: el problema no es el fraude, son los expedientes",
  description:
    "Análisis completo del récord histórico de sanciones CNBV en 2025: causas reales, caso FinCEN y reforma LFPIORPI.",
  image: "https://jaak.ai/images/blog/cnbv-sanciones-2025-expedientes.jpg",
  datePublished: "2026-06-12",
  dateModified: "2026-06-12",
  author: {
    "@type": "Organization",
    name: "JAAK",
    url: "https://jaak.ai",
  },
  publisher: {
    "@type": "Organization",
    name: "JAAK",
    url: "https://jaak.ai",
    logo: {
      "@type": "ImageObject",
      url: "https://jaak.ai/images/logos/jaak-logo-azul.png",
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://jaak.ai/blog/cnbv-sanciones-2025-expedientes",
  },
  keywords:
    "CNBV sanciones 2025, LFPIORPI reforma, lavado de dinero México, PLD cumplimiento, FinCEN CIBanco",
  inLanguage: "es-MX",
};

export default function CNBVSanciones2025() {
  return (
    <ArticleLayout
      title="Por qué la CNBV aplicó +696 sanciones en 2025: el problema no es el fraude, son los expedientes"
      subtitle="En 2025, la Comisión Nacional Bancaria y de Valores alcanzó el récord histórico de sanciones PLD: 696 multas y $411.8 millones de pesos, un incremento del 192% respecto a 2024. Analizamos las causas reales, el caso FinCEN y lo que cambió para siempre con la reforma LFPIORPI de julio 2025."
      category="Regulación"
      date="12 de junio, 2026"
      readTime="14 min"
      slug="cnbv-sanciones-2025-expedientes"
      image="/images/blog/cnbv-sanciones-2025-expedientes.jpg"
      imageAlt="Ejecutivo firmando documentos de cumplimiento regulatorio CNBV en México"
      jsonLd={jsonLd}
      relatedPosts={[
        { title: "Guía completa de las disposiciones CNBV para verificación de identidad", slug: "disposiciones-cnbv-verificacion-identidad", category: "Regulación" },
        { title: "Mejores prácticas de compliance para empresas reguladas en México", slug: "mejores-practicas-compliance-mexico", category: "Compliance" },
        { title: "¿Qué es KYC y cuándo es obligatorio en México?", slug: "que-es-kyc-cuando-es-obligatorio-mexico", category: "KYC" },
      ]}
    >
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                El año 2025 marcó un punto de inflexión en la supervisión
                financiera mexicana. La CNBV no solo rompió todos los récords de
                sanciones PLD desde que existen registros (2019), sino que lo
                hizo de manera acelerada y sistemática. La pregunta que toda
                institución regulada debe responder es: ¿por qué nos están
                sancionando si no estamos cometiendo fraude?
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                La respuesta incómoda es que el problema no está en las
                operaciones, sino en cómo se documentan. Los expedientes
                incompletos, los procesos manuales sin trazabilidad y la ausencia
                de sistemas automatizados son hoy la primera causa de sanción en
                México.
              </p>

              {/* Sección 1 */}
              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                1. El año récord: serie histórica 2019–2025
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                El crecimiento de las sanciones no es un evento aislado. Es una
                tendencia que lleva años consolidándose con una aceleración
                dramática en 2024 y 2025.
              </p>

              <div className="overflow-x-auto my-8">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-[#0E1133] text-white">
                      <th className="px-4 py-3 text-left">Año</th>
                      <th className="px-4 py-3 text-left">Sanciones</th>
                      <th className="px-4 py-3 text-left">Monto total (MXN)</th>
                      <th className="px-4 py-3 text-left">Variación</th>
                      <th className="px-4 py-3 text-left">Contexto</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {[
                      ["2019", "297", "$50.7 M", "—", "Línea base"],
                      ["2020", "241", "$112.2 M", "+121%", "Pandemia, supervisión remota"],
                      ["2021", "422", "$125.0 M", "+11%", "Recuperación post-Covid"],
                      ["2022", "383", "$102.1 M", "−18%", "Relativa estabilidad"],
                      ["2023", "290", "$80.1 M", "−21%", "Menor actividad sancionatoria"],
                      ["2024", "~800*", "$216.2 M", "+162%", "Inicio escrutinio intensificado"],
                      ["2025**", "696", "$411.8 M", "+192%", "Caso FinCEN + récord histórico"],
                    ].map(([year, sanctions, amount, change, context], i) => (
                      <tr key={year} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="px-4 py-3 font-bold text-[#0066ff]">{year}</td>
                        <td className="px-4 py-3 font-medium">{sanctions}</td>
                        <td className="px-4 py-3 text-gray-600">{amount}</td>
                        <td className="px-4 py-3 text-gray-600">{change}</td>
                        <td className="px-4 py-3 text-gray-600">{context}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="text-xs text-gray-400 mt-2">
                  * Enero–diciembre 2024 según Expansión (marzo 2025). ** Enero–noviembre 2025 según El CEO (noviembre 2025).
                  Fuente: sanciones.cnbv.gob.mx
                </p>
              </div>

              {/* Sección 2 */}
              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                2. El detonante: caso FinCEN — CIBanco, Intercam y Vector
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                El 25 de junio de 2025, el Departamento del Tesoro de Estados
                Unidos, a través de la Red de Control de Delitos Financieros
                (FinCEN), designó a tres instituciones financieras mexicanas como
                <strong> "entidades de preocupación primaria en lavado de dinero"</strong>{" "}
                bajo la FEND Off Fentanyl Act. Fue la primera vez que se aplicó
                esta ley y el impacto fue inmediato en todo el sector financiero
                mexicano.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
                {[
                  { value: "$22 MDD", label: "Activos combinados de las 3 instituciones" },
                  { value: "$185 mdp", label: "Sanciones CNBV publicadas el 15/jul/2025" },
                  { value: "52%", label: "De las 696 sanciones vinieron después del caso" },
                  { value: "4", label: "Carteles vinculados en la designación" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-red-50 border border-red-100 rounded-xl p-4 text-center"
                  >
                    <p className="text-xl font-black text-red-600">{stat.value}</p>
                    <p className="text-gray-500 text-xs mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="overflow-x-auto my-8">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-[#0E1133] text-white">
                      <th className="px-4 py-3 text-left">Fecha</th>
                      <th className="px-4 py-3 text-left">Evento</th>
                      <th className="px-4 py-3 text-left">Impacto</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {[
                      [
                        "25 jun 2025",
                        "FinCEN designa a CIBanco, Intercam y Vector como entidades de \"preocupación primaria en lavado de dinero\". Primera vez que se usa la FEND Off Fentanyl Act.",
                        "Prohibición a bancos estadounidenses de operar con estas entidades a partir del 21 julio 2025.",
                      ],
                      [
                        "Jul 2025",
                        "CNBV asume control temporal de CIBanco e Intercam. Hacienda transfiere negocios fiduciarios a banca de desarrollo.",
                        "Fitch Ratings degrada calificaciones a \"grado especulativo\". Contrapartes cortaron relaciones.",
                      ],
                      [
                        "15 jul 2025",
                        "CNBV publica sanciones formales a CIBanco, Intercam y Vector por PLD.",
                        "Monto total de sanciones a las 3 instituciones: $185 millones de pesos.",
                      ],
                      [
                        "Nov 2025",
                        "Presidente Sheinbaum declara que no se encontró evidencia suficiente de vínculos con crimen organizado en investigación mexicana.",
                        "CIBanco impugna sanciones por vía judicial. Caso aún sin resolución.",
                      ],
                    ].map(([date, event, impact], i) => (
                      <tr key={date} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="px-4 py-3 font-bold text-gray-700 whitespace-nowrap align-top">{date}</td>
                        <td className="px-4 py-3 text-gray-600 align-top">{event}</td>
                        <td className="px-4 py-3 text-gray-600 align-top">{impact}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Sección 3 */}
              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                3. Quién fue sancionado: desglose por tipo de entidad
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Ninguna figura del sistema financiero mexicano quedó exenta.
                Bancos, Sofomes, casas de cambio, casas de bolsa y Sofipos
                aparecen en el listado de sanciones de 2025.
              </p>

              <div className="overflow-x-auto my-8">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-[#0E1133] text-white">
                      <th className="px-4 py-3 text-left">Tipo de entidad</th>
                      <th className="px-4 py-3 text-center"># Sanciones</th>
                      <th className="px-4 py-3 text-center">Monto total</th>
                      <th className="px-4 py-3 text-left">Casos destacados</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {[
                      [
                        "Bancos (banca múltiple)",
                        "132",
                        "$199 mdp",
                        "CIBanco ($52.2M), Intercam ($41M), Mifel ($41M), Ve por Más ($30.9M), Scotiabank ($8.2M)",
                      ],
                      [
                        "Sofomes",
                        "319",
                        "$77 mdp",
                        "Mayor número de sanciones. Progreso Cote, Otorgaplus y Capital Haus entre sancionadas.",
                      ],
                      [
                        "Casas y centros cambiarios",
                        "138",
                        "$36 mdp",
                        "Sector con alta vulnerabilidad PLD. 13 centros cambiarios y 5 transmisores de dinero sancionados.",
                      ],
                      [
                        "Casas de bolsa",
                        "12",
                        "$53 mdp",
                        "Menor número pero mayor monto promedio. Intercam casa de bolsa: $47.9M de los $53M totales.",
                      ],
                      [
                        "Sofipos",
                        "43",
                        "$19 mdp",
                        "Kubo Financiero ($8.3M), Te Creemos + CAME ($11.6M). Acumulado 2021-2025: $37.6 mdp.",
                      ],
                    ].map(([type, sanctions, amount, notes], i) => (
                      <tr key={type} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="px-4 py-3 font-medium align-top">{type}</td>
                        <td className="px-4 py-3 text-center font-bold text-[#2DB6C1] align-top">{sanctions}</td>
                        <td className="px-4 py-3 text-center font-bold text-[#0066ff] align-top whitespace-nowrap">{amount}</td>
                        <td className="px-4 py-3 text-gray-600 align-top">{notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Sección 4 */}
              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                4. Las 9 causas reales de las sanciones
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Estas causas han sido documentadas con fuentes periodísticas,
                regulatorias y de análisis especializados. En cada caso se indica
                el incumplimiento específico y la entidad sancionada.
              </p>

              <div className="space-y-6">
                {[
                  {
                    num: "01",
                    title: "Mal manejo de expedientes de clientes",
                    body: "La causa principal según Expansión (marzo 2025). Expedientes incompletos, sin trazabilidad y sin evidencia formal que permita responder requerimientos del regulador. Los expedientes \"se reconstruyen cada fin de mes\" generando inconsistencias que la CNBV detecta con facilidad.",
                    case: "Banco Autofin ($7.6 mdp) — \"falta de sistemas automatizados para conservar registros, expedientes incompletos y omisión de reportes relevantes.\"",
                  },
                  {
                    num: "02",
                    title: "No contar con sistemas automatizados para detectar operaciones inusuales",
                    body: "La CNBV sancionó específicamente a instituciones que no tenían herramientas automatizadas para identificar patrones de riesgo. La reforma LFPIORPI 2025 hizo estos sistemas obligatorios desde enero 2026.",
                    case: "Invex fue sancionada \"por no contar con un sistema automatizado que detecte operaciones o movimientos inusuales de los clientes.\" Multa: +$400,000 MXN.",
                  },
                  {
                    num: "03",
                    title: "No presentar informes de operaciones relevantes en los plazos establecidos",
                    body: "El Art. 18 LFPIORPI establece plazos específicos para reportar a la UIF. La reforma 2025 redujo el plazo de reporte de operaciones sospechosas a 24 horas. Las Sofomes son el sector más afectado por este tipo de incumplimiento.",
                    case: "Progreso Cote, Otorgaplus y Capital Haus sancionadas \"por no presentar informes de las operaciones relevantes que hicieron sus clientes.\"",
                  },
                  {
                    num: "04",
                    title: "Errores en reportes de transferencias internacionales y uso de efectivo",
                    body: "Fallos en la documentación y reporte de transferencias al extranjero, y aceptación de efectivo en divisas por encima del límite legal para operaciones de alto riesgo.",
                    case: "Scotiabank ($8.2 mdp) por \"errores en reportes de transferencias internacionales, aceptación de dólares en efectivo por encima del límite permitido y omisiones en la verificación de clientes.\"",
                  },
                  {
                    num: "05",
                    title: "Alertas de monitoreo mal calibradas",
                    body: "Los sistemas internos de detección de operaciones inusuales son deficientes o no están bien configurados para el perfil de riesgo de los clientes. Generan alertas que no se analizan correctamente.",
                    case: "Actinver ($5.4 mdp) por \"fallas en la detección de operaciones inusuales y omisión de análisis de alertas generadas por su propio sistema interno.\"",
                  },
                  {
                    num: "06",
                    title: "Dispersión documental y procesos manuales sin trazabilidad",
                    body: "Los procesos de compliance dependen de personas específicas, no de sistemas. Los expedientes se reconstruyen retroactivamente en lugar de generarse en tiempo real. Los reguladores detectan estas inconsistencias fácilmente.",
                    case: "\"La dispersión documental, las aprobaciones sin registro claro y los expedientes que se reconstruyen cada fin de mes generan inconsistencias que los reguladores detectan con facilidad.\" — Lemontech, dic. 2025.",
                  },
                  {
                    num: "07",
                    title: "Deficiencia en la identificación del beneficiario controlador",
                    body: "La laxitud en procesos KYC permite que los verdaderos dueños del capital queden ocultos detrás de prestanombres o estructuras societarias complejas. La reforma 2025 bajó el umbral de control de 50% a 25% de participación.",
                    case: "\"La laxitud en la aplicación de los procesos KYC permitió que los verdaderos dueños del capital ilícito quedaran ocultos detrás de prestanombres o estructuras societarias complejas.\" — Pirani Risk, 2025.",
                  },
                  {
                    num: "08",
                    title: "Listas de vigilancia desactualizadas",
                    body: "La falta de actualización en los registros de clientes y la no consulta sistemática de listas negras (SAT 69-B, OFAC, INTERPOL, UIF) debilita la capacidad de reacción y genera incumplimientos en KYC.",
                    case: "\"La falta de actualización en los registros de clientes y transacciones sospechosas ha debilitado la capacidad de reacción de las instituciones sancionadas.\" — Regcheq, ene. 2026.",
                  },
                  {
                    num: "09",
                    title: "Deficiencias en controles internos generales",
                    body: "Ausencia de un marco sólido para el monitoreo y prevención de operaciones sospechosas. Incluye tanto bancos nacionales como filiales de instituciones extranjeras operando en México.",
                    case: "Banco del Bienestar ($767,580 por deficiencias de control interno) y Morgan Stanley México ($896,200 por no contar con controles internos que garanticen el cumplimiento de su normatividad interna).",
                  },
                ].map((item) => (
                  <div
                    key={item.num}
                    className="border border-gray-200 rounded-xl overflow-hidden"
                  >
                    <div className="flex items-start gap-4 p-6">
                      <span className="flex-shrink-0 w-10 h-10 bg-[#0E1133] text-[#2DB6C1] font-black text-sm rounded-lg flex items-center justify-center">
                        {item.num}
                      </span>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-3">
                          {item.body}
                        </p>
                        <div className="bg-[#F3F4F8] border border-[#212A45]/10 p-3 rounded-lg">
                          <p className="text-[11px] text-[#2DB6C1] font-semibold uppercase tracking-wide mb-1">
                            Caso documentado
                          </p>
                          <p className="text-sm text-gray-700 italic">
                            {item.case}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Sección 5 */}
              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                5. Lo que cambió en 2025: reforma LFPIORPI
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                El 16 de julio de 2025 se publicó en el Diario Oficial de la
                Federación (DOF) el decreto que reforma y adiciona diversas
                disposiciones de la Ley Federal para la Prevención e
                Identificación de Operaciones con Recursos de Procedencia Ilícita
                (LFPIORPI). Es la primera reforma desde 2013 y sus efectos son
                inmediatos.
              </p>

              <div className="space-y-4 my-8">
                {[
                  {
                    tag: "10 años (antes 5)",
                    tagColor: "bg-[#0E1133] text-[#2DB6C1]",
                    title: "Plazo de conservación de expedientes",
                    body: "Aplica a toda documentación KYC y registros de operaciones. Vigente desde el 17 de julio de 2025. Cualquier expediente incompleto dentro de ese período es susceptible de multa en visita de verificación.",
                  },
                  {
                    tag: "Vigentes ene. 2026",
                    tagColor: "bg-amber-500 text-white",
                    title: "5 nuevas obligaciones Art. 18 (Fr. VII–XI)",
                    body: "(VII) Evaluación EBR. (VIII) Manual de políticas internas documentado. (IX) Capacitación anual obligatoria al personal. (X) Auditorías internas o externas cuando se identifiquen riesgos altos. (XI) Mecanismos automatizados de monitoreo — el cumplimiento manual ya no es suficiente ni legal.",
                  },
                  {
                    tag: "Umbral: 25% (antes 50%)",
                    tagColor: "bg-[#0066ff] text-white",
                    title: "Beneficiario Controlador",
                    body: "Cualquier persona física con más del 25% de participación o control efectivo debe ser identificada y registrada. El registro debe mantenerse actualizado. Incluye titularidad indirecta y control efectivo.",
                  },
                  {
                    tag: "Operaciones inusuales",
                    tagColor: "bg-red-500 text-white",
                    title: "Plazo de reporte reducido a 24 horas",
                    body: "Las operaciones inusuales o sospechosas deben notificarse a la UIF en máximo 24 horas. Antes el plazo era mayor. Exige herramientas de detección automática — imposible cumplir manualmente.",
                  },
                  {
                    tag: "$23,462 a $7,625,150 MXN",
                    tagColor: "bg-purple-600 text-white",
                    title: "Multas actualizadas en UMA",
                    body: "Rango: 200 a 65,000 UMAs. Con valor UMA 2026 de $117.31. Se permite reducción de hasta 50% si el cumplimiento se realiza espontáneamente antes de una revisión regulatoria.",
                  },
                  {
                    tag: "Ampliación de alcance",
                    tagColor: "bg-[#2DB6C1] text-[#0E1133]",
                    title: "Nuevos sectores incorporados",
                    body: "Activos virtuales (criptomonedas), desarrollo inmobiliario con ciertos montos, fideicomisos, operaciones desde el extranjero con impacto en México y mayor supervisión a PEPs.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl border border-gray-100"
                  >
                    <span
                      className={`flex-shrink-0 px-2 py-1 text-xs font-bold rounded-lg text-center leading-tight ${item.tagColor}`}
                    >
                      {item.tag}
                    </span>
                    <div>
                      <p className="font-bold text-gray-900 mb-1">{item.title}</p>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {item.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Sección 6 */}
              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                6. El tamaño real del problema: contexto macroeconómico
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
                {[
                  { value: "$145 mil M", label: "Valor estimado del lavado en México al año (INEGI)" },
                  { value: "+10 M", label: "Reportes de operaciones sospechosas en 2019 (UIF)" },
                  { value: "1.63%", label: "Del PIB mexicano (estimación INEGI)" },
                  { value: "2–5%", label: "Del PIB global se blanquea cada año (GAFI)" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-[#0E1133] rounded-xl p-4 text-center"
                  >
                    <p className="text-xl font-black text-[#2DB6C1]">{stat.value}</p>
                    <p className="text-white/50 text-xs mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>

              <p className="text-gray-600 leading-relaxed mb-4">
                El lavado de dinero en México representa entre el 1.63% y el
                3.6% del PIB según distintas estimaciones del INEGI, GAFI e
                IFAC. Según la Evaluación Nacional de Riesgos 2023 de la UIF,
                entre 2019 y 2021 el flujo de recursos ilícitos reportados
                alcanzó $43,943 millones de pesos, cifra que continuó creciendo
                hasta los $145 mil millones anuales estimados por el INEGI.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                En este contexto, las 696 sanciones de 2025 no son un
                accidente regulatorio. Son el resultado de una supervisión que
                por fin tiene los instrumentos, la voluntad política y el
                precedente internacional (caso FinCEN) para ejercerse con toda
                su fuerza.
              </p>

              {/* Sección 7 */}
              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                7. Por qué JAAK resuelve cada punto
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Cada una de las 9 causas de sanción documentadas tiene una
                solución directa en la plataforma JAAK. No se trata de
                cumplimiento teórico, sino de herramientas operativas que
                generan trazabilidad desde el primer contacto con el cliente.
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-8">
                {[
                  {
                    problem: "Expedientes incompletos",
                    solution: "Expediente digital generado automáticamente en cada onboarding con evidencia biométrica, documental y de identidad.",
                  },
                  {
                    problem: "Sin sistemas automatizados de monitoreo",
                    solution: "Flujos de verificación automatizados con alertas configurables por perfil de riesgo desde el primer día.",
                  },
                  {
                    problem: "Reportes fuera de plazo",
                    solution: "Integración nativa con APIs regulatorias para notificación en tiempo real, compatible con el nuevo plazo de 24 horas.",
                  },
                  {
                    problem: "Beneficiario controlador no identificado",
                    solution: "Verificación de identidad con CURP, INE y biometría facial que registra automáticamente al beneficiario real.",
                  },
                  {
                    problem: "Listas de vigilancia desactualizadas",
                    solution: "Consulta automatizada en tiempo real contra SAT 69-B, OFAC, INTERPOL y UIF en cada transacción relevante.",
                  },
                  {
                    problem: "Dispersión documental y procesos manuales",
                    solution: "Trazabilidad end-to-end. Cada acción del proceso queda registrada con sello de tiempo, sin reconstrucción retroactiva.",
                  },
                ].map((item) => (
                  <div
                    key={item.problem}
                    className="bg-gray-50 rounded-xl p-5 border border-gray-100"
                  >
                    <div className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                      <p className="text-sm font-semibold text-gray-700">
                        {item.problem}
                      </p>
                    </div>
                    <div className="flex items-start gap-3 mt-3 ml-0">
                      <svg
                        className="w-5 h-5 text-[#2DB6C1] mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <p className="text-sm text-gray-600">{item.solution}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Conclusión */}
              <div className="bg-[#0E1133] rounded-xl p-8 my-12">
                <h3 className="text-xl font-bold text-white mb-4">Conclusión</h3>
                <p className="text-white/80 leading-relaxed mb-4">
                  El mensaje de 2025 es claro: la CNBV no sanciona solamente a
                  quienes lavan dinero. Sanciona a quienes no pueden demostrar
                  que no lo hacen. La diferencia entre ambas categorías está en
                  los expedientes, en los sistemas y en la trazabilidad.
                </p>
                <p className="text-white/80 leading-relaxed">
                  La reforma LFPIORPI de julio 2025 no deja margen de
                  interpretación: el cumplimiento manual ya no es suficiente ni
                  legal. Las instituciones que hoy invierten en automatización de
                  KYC y PLD no solo evitan multas; construyen la única defensa
                  válida ante una supervisión que llegó para quedarse en este
                  nivel de exigencia.
                </p>
              </div>
    </ArticleLayout>
  );
}
