import ArticleLayout from "../ArticleLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Ley Antilavado en México: por qué el sector inmobiliario no puede seguir operando como hace diez años | JAAK",
  description:
    "La reforma a la LFPIORPI de julio 2025 creó la fracción V Bis, eliminó el umbral de habitualidad y puso al desarrollo inmobiliario en el centro del radar de la UIF. Qué cambió y cómo cumplir con un expediente digital defendible.",
  keywords: [
    "Ley Antilavado inmobiliarias",
    "LFPIORPI reforma 2025",
    "fracción V Bis desarrollo inmobiliario",
    "UIF sector inmobiliario",
    "PLD inmobiliarias México",
    "reglamento LFPIORPI 2026",
    "beneficiario controlador inmobiliario",
  ],
  openGraph: {
    title:
      "Ley Antilavado en México: por qué el sector inmobiliario no puede seguir operando como hace diez años",
    description:
      "El 16 de julio de 2025 el DOF publicó la reforma a la LFPIORPI que crea la fracción V Bis para el desarrollo inmobiliario. Analizamos el impacto, las cifras de la UIF y cómo digitalizar el cumplimiento.",
    type: "article",
    publishedTime: "2026-07-17",
    authors: ["JAAK"],
    images: ["/images/blog/ley-antilavado-inmobiliarias-2026.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Ley Antilavado en México: por qué el sector inmobiliario no puede seguir operando como hace diez años",
  description:
    "La reforma a la LFPIORPI de julio 2025 creó la fracción V Bis, eliminó el umbral de habitualidad y puso al desarrollo inmobiliario en el centro del radar de la UIF.",
  image: "https://jaak.ai/images/blog/ley-antilavado-inmobiliarias-2026.png",
  datePublished: "2026-07-17",
  dateModified: "2026-07-17",
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
    "@id": "https://jaak.ai/blog/ley-antilavado-inmobiliarias-mexico",
  },
  keywords:
    "Ley Antilavado inmobiliarias, LFPIORPI reforma 2025, fracción V Bis, UIF sector inmobiliario, PLD inmobiliarias México",
  inLanguage: "es-MX",
};

export default function LeyAntilavadoInmobiliarias() {
  return (
    <ArticleLayout
      title="Ley Antilavado en México: por qué el sector inmobiliario no puede seguir operando como hace diez años"
      subtitle="El 16 de julio de 2025, el Diario Oficial de la Federación publicó la reforma a la LFPIORPI que crea la fracción V Bis para el Desarrollo Inmobiliario y elimina el umbral de habitualidad. Analizamos qué cambió, por qué el sector concentra más de 286 mil avisos ante la UIF y cómo convertir esa obligación en un expediente digital defendible."
      category="Regulación"
      date="17 de julio, 2026"
      readTime="11 min"
      slug="ley-antilavado-inmobiliarias-mexico"
      image="/images/blog/ley-antilavado-inmobiliarias-2026.png"
      imageAlt="Ley Antilavado en México y su impacto en el sector inmobiliario, identidad digital y cumplimiento JAAK"
      jsonLd={jsonLd}
      relatedPosts={[
        {
          title:
            "Por qué la CNBV aplicó +696 sanciones en 2025: el problema no es el fraude, son los expedientes",
          slug: "cnbv-sanciones-2025-expedientes",
          category: "Regulación",
        },
        {
          title:
            "Mejores prácticas de compliance para empresas reguladas en México",
          slug: "mejores-practicas-compliance-mexico",
          category: "Compliance",
        },
        {
          title: "¿Qué es KYC y cuándo es obligatorio en México?",
          slug: "que-es-kyc-cuando-es-obligatorio-mexico",
          category: "KYC",
        },
      ]}
    >
      <p className="text-xl text-gray-600 leading-relaxed mb-8">
        Durante años, la industria inmobiliaria mexicana operó bajo una
        premisa simple: si vendes, avisas; si no vendes, no pasa nada. Esa
        premisa ya no existe. El 16 de julio de 2025, el Diario Oficial de la
        Federación publicó el decreto que reforma la Ley Federal para la
        Prevención e Identificación de Operaciones con Recursos de
        Procedencia Ilícita (LFPIORPI) —la llamada Ley Antilavado—, y desde
        entonces el sector inmobiliario dejó de tener margen para operar con
        procesos artesanales frente a una autoridad que hoy exige
        trazabilidad casi en tiempo real.
      </p>
      <p className="text-gray-600 leading-relaxed mb-8">
        Desde JAAK acompañamos a decenas de organizaciones —desarrolladoras,
        inmobiliarias, intermediarios y despachos— en la transición hacia el
        cumplimiento digital. Lo que hemos observado en los últimos meses no
        es solo un cambio normativo: es un cambio de expectativa. La
        autoridad ya no pregunta si identificaste a tu cliente; asume que ya
        deberías haberlo hecho, y te pide demostrarlo.
      </p>

      <section aria-labelledby="reforma">
        <h2
          id="reforma"
          className="text-2xl font-bold text-gray-900 mt-12 mb-6"
        >
          La reforma que cerró un vacío de una década
        </h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          Antes de julio de 2025, la fracción V del artículo 17 de la
          LFPIORPI agrupaba en un mismo supuesto tres actividades muy
          distintas: construir, intermediar y vender. Eso generaba una zona
          gris enorme para los desarrollos en preventa: si un proyecto
          todavía no tenía comprador final, ¿ya era actividad vulnerable o
          no?
        </p>
        <p className="text-gray-600 leading-relaxed mb-6">
          La reforma resolvió esa ambigüedad creando una fracción
          independiente —la <strong>V Bis</strong>— que define el Desarrollo
          Inmobiliario como el proyecto de construcción o fraccionamiento de
          lotes destinado a venta o renta, y que hace vulnerable la
          recepción de recursos para ese fin, sin esperar a que exista una
          venta formal.
        </p>

        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg my-8">
          <p className="text-xs text-amber-800 font-semibold uppercase tracking-wide mb-1">
            Punto vital
          </p>
          <p className="text-sm text-amber-700 leading-relaxed">
            El cambio más relevante, y el que menos se ha discutido en el
            sector, es que la nueva fracción ya no exige que la actividad
            sea habitual o profesional: basta una sola operación para
            generar obligaciones, incluso si no es el giro principal de
            quien la recibe. Esto amplía el universo de sujetos obligados
            mucho más allá de las grandes desarrolladoras, hacia
            fideicomisos, socios de proyectos y hasta particulares que
            aportan capital a un desarrollo puntual.
          </p>
        </div>

        <p className="text-gray-600 leading-relaxed mb-4">
          A esto se suma que, en marzo de 2026, se publicó un nuevo
          Reglamento de la LFPIORPI que añadió obligaciones operativas muy
          concretas para quienes ya estaban dentro del padrón:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-8">
          <li>
            Auditoría anual con dictamen de un tercero independiente cuando
            el riesgo es alto.
          </li>
          <li>
            Identificación formal de Personas Políticamente Expuestas (PEP).
          </li>
          <li>
            Reglas claras de acumulación de operaciones en periodos de seis
            meses.
          </li>
          <li>
            Aviso de <strong>24 horas</strong> cuando exista un intento de
            operación sospechosa, aunque esta nunca se concrete.
          </li>
        </ul>
      </section>

      <section aria-labelledby="radar">
        <h2
          id="radar"
          className="text-2xl font-bold text-gray-900 mt-12 mb-6"
        >
          Por qué el sector inmobiliario está en el centro del radar
        </h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          No es casualidad que esta reforma haya empezado justamente aquí.
          El Grupo de Acción Financiera Internacional (GAFI) —el organismo
          que evalúa a México en materia de prevención de lavado de
          dinero— ha señalado de forma reiterada al sector inmobiliario como
          uno de los canales con mayores deficiencias de supervisión del
          país, y la propia reforma de 2025 se explica, en parte, como una
          respuesta para cerrar brechas antes de la quinta evaluación mutua
          del GAFI a México.
        </p>
        <p className="text-gray-600 leading-relaxed mb-6">
          Los números lo confirman. De acuerdo con cifras difundidas sobre
          los reportes que recibe la Unidad de Inteligencia Financiera
          (UIF), el sector inmobiliario generó más de 286 mil avisos en un
          periodo de apenas cinco meses. Es, junto con el sector financiero,
          uno de los generadores de información más grandes para la
          inteligencia financiera del país.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
          <div className="bg-[#0a0a0a] rounded-xl p-5 text-center">
            <p className="text-2xl font-black text-[#00d4aa]">+286,000</p>
            <p className="text-white/50 text-xs mt-1">
              Avisos del sector inmobiliario ante la UIF en 5 meses
            </p>
          </div>
          <div className="bg-[#0a0a0a] rounded-xl p-5 text-center">
            <p className="text-2xl font-black text-[#00d4aa]">+70,000</p>
            <p className="text-white/50 text-xs mt-1">
              Avisos por desarrollo inmobiliario y transmisión de derechos
            </p>
          </div>
          <div className="bg-[#0a0a0a] rounded-xl p-5 text-center">
            <p className="text-2xl font-black text-[#00d4aa]">+141,000</p>
            <p className="text-white/50 text-xs mt-1">
              Avisos por derechos personales de uso o goce (rentas y
              arrendamientos)
            </p>
          </div>
        </div>

        <p className="text-gray-600 leading-relaxed mb-8">
          Para el agente, la desarrolladora o el despacho que opera todos
          los días, esto se traduce en una pregunta muy concreta: ¿mi
          proceso actual de identificación de clientes resistiría una
          auditoría de la UIF o del SAT hoy mismo, sin previo aviso?
        </p>
      </section>

      <section aria-labelledby="observamos">
        <h2
          id="observamos"
          className="text-2xl font-bold text-gray-900 mt-12 mb-6"
        >
          Lo que observamos desde JAAK: la necesidad real del sector
        </h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          En nuestras conversaciones diarias con el sector, encontramos un
          patrón que se repite casi sin excepción, independientemente del
          tamaño de la organización:
        </p>

        <div className="space-y-4 my-8">
          <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl border border-gray-100">
            <span className="flex-shrink-0 w-10 h-10 bg-[#0a0a0a] text-[#00d4aa] font-black text-sm rounded-lg flex items-center justify-center">
              01
            </span>
            <div>
              <p className="font-bold text-gray-900 mb-1">
                El cumplimiento existe, pero vive disperso
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Copias de INE escaneadas en carpetas de Drive, contratos
                firmados en papel y digitalizados después, avisos armados a
                mano un día antes del plazo. No es falta de voluntad: es que
                el marco anterior no exigía —ni ofrecía herramientas para—
                una gestión centralizada del expediente.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl border border-gray-100">
            <span className="flex-shrink-0 w-10 h-10 bg-[#0a0a0a] text-[#00d4aa] font-black text-sm rounded-lg flex items-center justify-center">
              02
            </span>
            <div>
              <p className="font-bold text-gray-900 mb-1">
                El desconocimiento normativo es real, no es pereza
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                La mayoría de los agentes y desarrolladoras con quienes
                hablamos no sabían, antes de que se los explicáramos, que ya
                no existe un monto mínimo para iniciar la identificación del
                cliente, o que la fracción V Bis ahora puede aplicarles
                aunque su actividad principal no sea el desarrollo
                inmobiliario. La ley cambió más rápido de lo que la
                información llegó al sector.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl border border-gray-100">
            <span className="flex-shrink-0 w-10 h-10 bg-[#0a0a0a] text-[#00d4aa] font-black text-sm rounded-lg flex items-center justify-center">
              03
            </span>
            <div>
              <p className="font-bold text-gray-900 mb-1">
                El riesgo ya no es solo la multa
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Con sanciones de hasta 65,000 UMA o el 100% del valor del
                acto, y con la obligación de conservar el expediente diez
                años sujeto a auditoría, el verdadero riesgo es
                reputacional: quedar señalado en una investigación de la UIF
                por un proceso de onboarding que nunca debió ser tan
                permisivo.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="bien">
        <h2
          id="bien"
          className="text-2xl font-bold text-gray-900 mt-12 mb-6"
        >
          Lo que nos parece que el sector está haciendo bien
        </h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          Con todo esto, también vemos —y lo decimos con la misma honestidad
          con la que señalamos los retos— un movimiento genuino de
          organizaciones que están tomando la delantera. Desarrolladoras que
          ya integraron un oficial de cumplimiento de tiempo completo antes
          de que la ley se los exigiera formalmente. Inmobiliarias que
          empezaron a digitalizar su expediente de identificación no como un
          trámite, sino como un activo de confianza frente a inversionistas
          y compradores. Despachos legales que están traduciendo la reforma
          en manuales de políticas internas entendibles para equipos
          comerciales, no solo para abogados.
        </p>
        <p className="text-gray-600 leading-relaxed mb-8">
          Ese es exactamente el tipo de transformación que el sector
          necesita: no ver el cumplimiento como una carga administrativa
          aislada, sino como parte de la misma infraestructura de confianza
          con la que ya se vende un inmueble, se firma un contrato o se
          capta una inversión. Las organizaciones que están entendiendo esto
          primero son, hoy, las que menos fricción tendrán cuando las reglas
          de carácter general pendientes del nuevo Reglamento terminen de
          publicarse.
        </p>
      </section>

      <section aria-labelledby="jaak">
        <h2
          id="jaak"
          className="text-2xl font-bold text-gray-900 mt-12 mb-6"
        >
          Cómo participa JAAK en esta transformación
        </h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          Nuestro papel no es sustituir al oficial de cumplimiento ni al
          asesor legal de una desarrolladora —esa responsabilidad, y el
          criterio que exige, siguen siendo humanos. Nuestro papel es
          quitarle al cumplimiento la parte que hoy se hace a mano y que más
          expone a errores: la identificación del cliente, la verificación
          de su identidad, el cruce contra listas de riesgo y personas
          políticamente expuestas, y la conservación del expediente con
          validez jurídica a lo largo del tiempo.
        </p>

        <div className="grid md:grid-cols-2 gap-4 my-8">
          {[
            {
              problem: "Expedientes dispersos en carpetas y papel",
              solution:
                "Expediente digital centralizado, generado en cada onboarding, con documentos, biometría e historial de cambios.",
            },
            {
              problem: "Identificación manual, a simple vista",
              solution:
                "Verificación biométrica de identidad y OCR sobre INE o pasaporte, sin intervención humana en la validación.",
            },
            {
              problem: "Cruce manual contra listas públicas",
              solution:
                "Cotejo automático contra listas de riesgo y Personas Políticamente Expuestas en cada operación.",
            },
            {
              problem: "Archivo sin garantía de integridad",
              solution:
                "Conservación del expediente con sello de tiempo y validez jurídica bajo la NOM-151, listo para auditoría.",
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
              <div className="flex items-start gap-3 mt-3">
                <svg
                  className="w-5 h-5 text-[#00d4aa] mt-0.5 flex-shrink-0"
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

        <p className="text-gray-600 leading-relaxed mb-8">
          En la práctica, eso significa que un proceso que hoy toma
          semanas —solicitar copia de identificación, verificarla a simple
          vista, cruzar manualmente contra listas públicas, archivar en una
          carpeta física o digital sin garantía de integridad— se convierte
          en un flujo de minutos con verificación biométrica, cotejo
          automático contra listas de riesgo y un expediente con sello de
          tiempo y validez jurídica bajo la NOM-151. No para que la
          organización dependa de una plataforma, sino para que tenga
          evidencia sólida el día que la autoridad la pida.
        </p>
      </section>

      <div className="bg-[#0a0a0a] rounded-xl p-8 my-12">
        <h3 className="text-xl font-bold text-white mb-4">
          La conversación apenas empieza
        </h3>
        <p className="text-white/80 leading-relaxed mb-6">
          Creemos que la conversación sobre la Ley Antilavado en el sector
          inmobiliario apenas empieza, y que en los próximos meses
          —conforme se publiquen las reglas de carácter general pendientes—
          vamos a ver una segunda ola de ajustes. Nuestra intención es
          acompañar esa conversación con información verificable, no con
          alarmismo, y con herramientas que resuelvan el problema real:
          convertir una obligación legal en un expediente digital, auditable
          y defendible.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="/contacto"
            className="inline-block px-6 py-3 rounded-xl font-black text-sm transition-all hover:-translate-y-0.5"
            style={{ background: "#1ECAD3", color: "#0a0a0a" }}
          >
            Solicita una demo del API de JAAK
          </a>
          <a
            href="/inmobiliarias"
            className="inline-block px-6 py-3 rounded-xl font-black text-sm transition-all hover:-translate-y-0.5 border border-white/20 text-white/80"
          >
            Ver solución para inmobiliarias
          </a>
        </div>
      </div>

      <div className="bg-gray-50 rounded-xl p-8 my-12">
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          Fuentes oficiales y especializadas consultadas
        </h3>
        <ul className="space-y-4">
          <li>
            <a
              href="https://www.dof.gob.mx/nota_detalle.php?codigo=5763161&fecha=16%2F07%2F2025"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0066ff] font-semibold hover:underline flex items-start gap-2"
            >
              <svg
                className="w-4 h-4 mt-1 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              Diario Oficial de la Federación — Decreto de reforma a la
              LFPIORPI, 16 de julio de 2025
            </a>
          </li>
          <li>
            <a
              href="https://sppld.sat.gob.mx/pld/interiores/noticias.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0066ff] font-semibold hover:underline flex items-start gap-2"
            >
              <svg
                className="w-4 h-4 mt-1 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              SAT — Portal de Prevención de Lavado de Dinero (SPPLD)
            </a>
          </li>
          <li>
            <a
              href="https://www.pld.hacienda.gob.mx/work/models/PLD/documentos/enr2023.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0066ff] font-semibold hover:underline flex items-start gap-2"
            >
              <svg
                className="w-4 h-4 mt-1 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              SHCP — Evaluación Nacional de Riesgos de Lavado de Dinero y
              Financiamiento al Terrorismo
            </a>
          </li>
          <li>
            <a
              href="https://idconline.mx/corporativo/2025/07/17/lfpiorpi-nuevas-obligaciones-tras-reforma-publicada"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0066ff] font-semibold hover:underline flex items-start gap-2"
            >
              <svg
                className="w-4 h-4 mt-1 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              IDC Corporativo — LFPIORPI: nuevas obligaciones tras reforma
              publicada
            </a>
          </li>
          <li>
            <a
              href="https://www.ey.com/es_mx/technical/tax/boletines-fiscales/reforma-ley-antilavado-2025-nuevas-obligaciones"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0066ff] font-semibold hover:underline flex items-start gap-2"
            >
              <svg
                className="w-4 h-4 mt-1 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              EY México — Reforma a la Ley Antilavado 2025: impacto y nuevas
              obligaciones
            </a>
          </li>
          <li>
            <a
              href="https://inmobiliare.com/avisos-antilavado-sector-inmobiliario-uif-mexico/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0066ff] font-semibold hover:underline flex items-start gap-2"
            >
              <svg
                className="w-4 h-4 mt-1 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              Inmobiliare — Avisos antilavado del sector inmobiliario: la UIF
              recibe más de 286 mil reportes en cinco meses
            </a>
          </li>
        </ul>
        <p className="text-gray-500 text-xs mt-6">
          Nota: algunas cifras (como el valor de la UMA y el monto
          equivalente al umbral de aviso de 8,025 UMA) se actualizan
          anualmente. Este artículo usa el valor vigente en 2026; verifica
          el valor diario de la UMA publicado por el INEGI antes de citarlo
          en materiales con fecha posterior.
        </p>
      </div>
    </ArticleLayout>
  );
}
