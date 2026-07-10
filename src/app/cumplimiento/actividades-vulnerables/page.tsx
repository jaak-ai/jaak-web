import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import SimuladorPLD from "@/components/SimuladorPLD";
import TablaUmbrales from "@/components/TablaUmbrales";

export const metadata: Metadata = {
  title: "Simulador de Cumplimiento LFPIORPI | Actividades Vulnerables 2026 | JAAK",
  description:
    "Calcule si su operacion activa obligaciones de identificacion y aviso segun la LFPIORPI. Simulador PLD gratuito con umbrales 2026, expediente KYC y clasificador comercial. UMA 2026: $117.31 MXN.",
  keywords: [
    "simulador PLD",
    "actividades vulnerables",
    "umbrales 2026",
    "LFPIORPI",
    "PLD",
    "AML",
    "prevencion lavado de dinero",
    "UMA 2026",
    "UIF",
    "KYC Mexico",
    "antilavado",
    "cumplimiento regulatorio",
    "calculadora PLD",
    "CNBV",
    "sujetos obligados",
    "expediente KYC",
  ],
  openGraph: {
    title: "Simulador de Cumplimiento LFPIORPI | Actividades Vulnerables 2026 | JAAK",
    description:
      "Calcule si su operacion activa obligaciones de la LFPIORPI. Simulador PLD gratuito con umbrales vigentes, expediente KYC y clasificador de modalidad JAAK.",
    type: "website",
  },
};

const faqItems = [
  {
    question: "Que es la LFPIORPI y a quien aplica?",
    answer: "La Ley Federal para la Prevencion e Identificacion de Operaciones con Recursos de Procedencia Ilicita (LFPIORPI) es la ley antilavado de Mexico. Aplica a todas las personas fisicas y morales que realicen actividades vulnerables enumeradas en el Articulo 17, incluyendo sectores como inmobiliario, joyeria, vehiculos, servicios profesionales, activos virtuales y comercio exterior, entre otros.",
  },
  {
    question: "Que es la UMA y por que se usa para calcular umbrales?",
    answer: "La Unidad de Medida y Actualizacion (UMA) es la referencia economica que sustituyo al salario minimo para determinar obligaciones legales en Mexico. El INEGI publica su valor anualmente. En 2026, la UMA diaria es de $117.31 MXN. Los umbrales de la LFPIORPI se expresan en UMA para ajustarse automaticamente a la inflacion.",
  },
  {
    question: "Que sucede si no cumplo con la identificacion del cliente?",
    answer: "El incumplimiento de las obligaciones de la LFPIORPI puede derivar en multas que van desde 200 hasta 65,000 dias de UMA (de $23,462 a $7,625,150 MXN aproximadamente en 2026). En casos graves, la UIF puede iniciar procedimientos penales. Ademas, la organizacion queda expuesta a riesgos reputacionales y a la inhabilitacion para operar.",
  },
  {
    question: "Cual es la diferencia entre identificacion y aviso a la UIF?",
    answer: "La identificacion del cliente es la obligacion de integrar un expediente con datos y documentos que permitan conocer la identidad del cliente y el origen de sus recursos. El aviso a la UIF es una notificacion formal que el sujeto obligado debe presentar cuando la operacion supera un segundo umbral mas alto. Una operacion puede requerir solo identificacion, o identificacion mas aviso, dependiendo del monto.",
  },
  {
    question: "JAAK sustituye a mi oficial de cumplimiento?",
    answer: "No. JAAK es una herramienta tecnologica que automatiza la verificacion de identidad y la integracion del expediente KYC. El oficial de cumplimiento sigue siendo la figura responsable de disenar las politicas internas, evaluar el riesgo de cada cliente y presentar los avisos a la UIF. JAAK proporciona la evidencia y la infraestructura que respaldan esas decisiones.",
  },
  {
    question: "Como maneja JAAK la conservacion de expedientes por 10 anos?",
    answer: "Toda evidencia generada en JAAK se almacena con sellado de tiempo (timestamp criptografico), hash de integridad y cadena de custodia verificable. La infraestructura cumple con ISO 27001 y los datos se conservan en centros de datos con redundancia geografica. El sujeto obligado puede acceder a cualquier expediente historico durante todo el periodo de retencion.",
  },
  {
    question: "El simulador almacena mis datos?",
    answer: "No. El simulador funciona completamente en su navegador. Los montos, actividades y resultados no se transmiten ni almacenan en ningun servidor. Es una herramienta orientativa para que usted evalue preliminarmente sus obligaciones regulatorias.",
  },
  {
    question: "Que actividades vulnerables requieren identificacion en todos los casos, sin importar el monto?",
    answer: "Las fracciones III (cheques de viajero), IV (prestamos/creditos), V y V Bis (inmuebles), X (traslado y custodia de valores), XI (servicios profesionales independientes) y XVI (activos virtuales) requieren identificacion del cliente en todos los casos, independientemente del monto de la operacion. Esto se indica como \"Siempre\" en los umbrales del Art. 17.",
  },
];

export default function ActividadesVulnerablesPage() {
  return (
    <>
      <Header />
      <main>
        {/* SECTION 1: Compact Hero */}
        <section className="pt-32 pb-16 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <Link
                href="/cumplimiento"
                className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-6 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Cumplimiento
              </Link>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0066ff]/10 border border-[#0066ff]/20 rounded-full mb-6">
                <span className="text-[#0066ff] text-sm font-medium">UMA 2026: $117.31 MXN · Umbrales vigentes Art. 17 LFPIORPI</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black text-white mb-6 leading-tight">
                ¿Su operacion activa obligaciones de la LFPIORPI?
              </h1>
              <p className="text-xl text-white/60 mb-8 max-w-3xl">
                Calcule en 30 segundos si su actividad requiere identificacion del cliente, aviso a la UIF o ambos. Ingrese los datos de su operacion y reciba un diagnostico regulatorio inmediato con el expediente KYC que necesita.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="#simulador"
                  className="px-6 py-3 bg-[#0066ff] text-white font-semibold rounded-lg hover:bg-[#0052cc] transition-all"
                >
                  Calcular ahora
                </Link>
                <Link
                  href="#umbrales-completos"
                  className="px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all"
                >
                  Ver umbrales completos del Art. 17
                </Link>
              </div>
              <p className="text-xs text-white/30 mt-4">
                Basado en los umbrales oficiales del Articulo 17 de la LFPIORPI y el valor de la UMA 2026 publicado por el INEGI.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: Simulator */}
        <section id="simulador" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#00d4aa]/10 border border-[#00d4aa]/20 rounded-full mb-4">
                <span className="w-2 h-2 bg-[#00d4aa] rounded-full"></span>
                <span className="text-[#00d4aa] text-sm font-medium">Herramienta gratuita</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                Simulador de obligaciones PLD / AML
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Seleccione su actividad vulnerable, ingrese el monto de operacion y el volumen mensual. El simulador evaluara sus umbrales regulatorios y estimara el expediente KYC que su organizacion necesita.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8">
              <SimuladorPLD />
            </div>
          </div>
        </section>

        {/* SECTION 4: KYC Education */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0066ff]/10 rounded-full mb-4">
                <span className="text-[#0066ff] text-sm font-medium">Expediente KYC</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                ¿Que debe contener un expediente KYC segun la LFPIORPI?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                La LFPIORPI y sus Reglas de Caracter General establecen que todo sujeto obligado debe integrar un expediente de identificacion del cliente cuando su operacion alcance los umbrales del Art. 17. Este expediente es la evidencia de cumplimiento ante la UIF y debe conservarse durante 10 anos.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="w-12 h-12 bg-[#0066ff]/10 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#0066ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Identificacion oficial vigente</h3>
                <p className="text-gray-600 text-sm">
                  INE/IFE, pasaporte o cedula profesional. JAAK valida el documento contra bases oficiales del INE y verifica que no este vencido, alterado o reportado como extraviado.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="w-12 h-12 bg-[#0066ff]/10 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#0066ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Verificacion biometrica facial</h3>
                <p className="text-gray-600 text-sm">
                  Prueba de vida y comparacion facial contra la fotografia del documento oficial. Cumple con los lineamientos de la CNBV para identificacion remota no presencial.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="w-12 h-12 bg-[#0066ff]/10 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#0066ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Identificacion del beneficiario controlador</h3>
                <p className="text-gray-600 text-sm">
                  Persona fisica que directa o indirectamente obtiene beneficio, controla o influye en una persona moral. Obligatorio cuando el cliente es empresa, fideicomiso o figura juridica equivalente.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="w-12 h-12 bg-[#0066ff]/10 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#0066ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Conservacion por 10 anos</h3>
                <p className="text-gray-600 text-sm">
                  Todo expediente debe conservarse durante un plazo minimo de 10 anos contados a partir de la fecha de la ultima operacion. JAAK almacena la evidencia con sellado de tiempo y cadena de custodia.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="w-12 h-12 bg-[#0066ff]/10 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#0066ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Evidencia verificable y auditable</h3>
                <p className="text-gray-600 text-sm">
                  Cada verificacion genera evidencia con metadatos: geolocalizacion, timestamps, hash de integridad, resultado biometrico y trazabilidad completa para responder requerimientos de la UIF.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="w-12 h-12 bg-[#0066ff]/10 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#0066ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Reportes y avisos a la UIF</h3>
                <p className="text-gray-600 text-sm">
                  Cuando la operacion supera el umbral de aviso, el sujeto obligado debe presentar el aviso correspondiente a la UIF. JAAK genera la evidencia de soporte que respalda dicho aviso.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: Modalities */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                Modalidades de servicio JAAK
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                JAAK se adapta al volumen y complejidad de su operacion. La modalidad recomendada depende de la cantidad de verificaciones que su organizacion procese.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="inline-flex items-center px-3 py-1 bg-[#0066ff]/10 rounded-full mb-4">
                  <span className="text-[#0066ff] text-xs font-semibold">Hasta 999 verif/mes</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Autoservicio</h3>
                <ul className="space-y-3 mb-6">
                  {[
                    "Alta autonoma desde plataforma",
                    "Dashboard de verificaciones",
                    "Verificacion de identidad (INE + biometria)",
                    "Expediente digital por operacion",
                    "Soporte por centro de ayuda",
                    "Sin integracion tecnica requerida",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-[#0066ff] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-gray-400">Ideal para sujetos obligados con volumen moderado de operaciones que superan umbrales.</p>
              </div>

              <div className="bg-white rounded-xl p-6 border-2 border-[#2DB6C1] shadow-sm relative">
                <div className="inline-flex items-center px-3 py-1 bg-[#2DB6C1]/10 rounded-full mb-4">
                  <span className="text-[#2DB6C1] text-xs font-semibold">1,000+ verif/mes</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Enterprise</h3>
                <ul className="space-y-3 mb-6">
                  {[
                    "Integracion por API REST",
                    "SLAs de disponibilidad personalizados",
                    "Soporte tecnico dedicado",
                    "Configuracion de flujos a medida",
                    "Reporteria avanzada y exportacion",
                    "Onboarding asistido",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-[#2DB6C1] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-gray-400">Para organizaciones con volumen alto o necesidad de integracion en sistemas propios.</p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="inline-flex items-center px-3 py-1 bg-[#2AD796]/10 rounded-full mb-4">
                  <span className="text-[#2AD796] text-xs font-semibold">500,000+ verif/ano</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Alianza Estrategica</h3>
                <ul className="space-y-3 mb-6">
                  {[
                    "Infraestructura white-label",
                    "API de reventa y distribucion",
                    "Soporte de ingenieria compartido",
                    "Condiciones comerciales de partner",
                    "Co-desarrollo de flujos regulatorios",
                    "Acuerdo de nivel de servicio premium",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-[#2AD796] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-gray-400">Para plataformas que integran verificacion de identidad como parte de su producto y la ofrecen a sus clientes.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: FAQ */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                Preguntas frecuentes sobre cumplimiento PLD/AML
              </h2>
              <p className="text-xl text-gray-600">
                Resolvemos las dudas mas comunes sobre la LFPIORPI, umbrales y obligaciones de identificacion.
              </p>
            </div>

            <div className="space-y-6">
              {faqItems.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 7: Collapsible Threshold Table */}
        <section id="umbrales-completos" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <TablaUmbrales />
          </div>
        </section>

        {/* SECTION 8: Legal Disclaimer */}
        <section className="py-8 bg-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-gray-300 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-gray-900 font-semibold mb-2">Aclaracion importante</h4>
                <p className="text-gray-600 text-sm mb-2">
                  La informacion contenida en esta pagina y los resultados generados por el simulador tienen caracter exclusivamente orientativo e informativo. No constituyen asesoria legal, fiscal ni de cumplimiento regulatorio. Los umbrales presentados corresponden al Articulo 17 de la LFPIORPI vigente y al valor de la UMA 2026 publicado por el INEGI, pero las obligaciones especificas pueden variar segun las Reglas de Caracter General aplicables a cada sector y la interpretacion de la autoridad competente.
                </p>
                <p className="text-gray-600 text-sm">
                  JAAK proporciona infraestructura tecnologica para verificacion de identidad y generacion de evidencia. La responsabilidad de disenar politicas de cumplimiento, evaluar riesgos y presentar avisos a la UIF corresponde exclusivamente al sujeto obligado y su oficial de cumplimiento. Recomendamos consultar con un abogado especializado en PLD/AML para su caso particular.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 9: CTA */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Agende su sesion estrategica de cumplimiento
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              En 15 minutos evaluamos como JAAK puede automatizar el expediente KYC para su actividad vulnerable. Sin compromiso, sin costo.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contacto"
                className="px-8 py-4 bg-[#0066ff] text-white font-bold rounded-lg hover:bg-[#0052cc] transition-all"
              >
                Agendar sesion estrategica
              </Link>
              <Link
                href="/cumplimiento"
                className="px-8 py-4 bg-gray-100 text-gray-900 font-bold rounded-lg hover:bg-gray-200 transition-all"
              >
                Ver todas las regulaciones
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
