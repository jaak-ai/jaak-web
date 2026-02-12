import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import SimuladorPLD from "@/components/SimuladorPLD";

export const metadata: Metadata = {
  title: "Actividades Vulnerables y Umbrales 2026 LFPIORPI | JAAK",
  description:
    "Tabla completa de actividades vulnerables, umbrales de identificacion y aviso 2026 conforme a la LFPIORPI. Simulador PLD gratuito. Valor UMA 2026: $117.31 MXN.",
  keywords: [
    "actividades vulnerables",
    "umbrales 2026",
    "LFPIORPI",
    "PLD",
    "AML",
    "prevencion lavado de dinero",
    "UMA 2026",
    "UIF",
    "simulador PLD",
    "KYC Mexico",
    "antilavado",
    "cumplimiento regulatorio",
    "actividades vulnerables umbrales",
    "CNBV",
    "sujetos obligados",
  ],
  openGraph: {
    title: "Actividades Vulnerables y Umbrales 2026 LFPIORPI | JAAK",
    description:
      "Consulta los umbrales vigentes de actividades vulnerables conforme a la LFPIORPI. Simulador PLD gratuito para calcular obligaciones de identificacion y aviso.",
    type: "website",
  },
};

const umbralData = [
  { fraccion: "I", actividad: "Juegos con apuesta, concursos y sorteos", idUMA: "325", idMXN: "$38,125.75", avUMA: "645", avMXN: "$75,664.95", siempre: false },
  { fraccion: "II", actividad: "Tarjetas de credito o servicios", idUMA: "805", idMXN: "$94,434.55", avUMA: "1,285", avMXN: "$150,743.35", siempre: false },
  { fraccion: "II", actividad: "Tarjetas prepagadas", idUMA: "645", idMXN: "$75,664.95", avUMA: "645", avMXN: "$75,664.95", siempre: false },
  { fraccion: "II", actividad: "Vales y monederos electronicos", idUMA: "645", idMXN: "$75,664.95", avUMA: "645", avMXN: "$75,664.95", siempre: false },
  { fraccion: "III", actividad: "Cheques de viajero", idUMA: "---", idMXN: "Siempre", avUMA: "645", avMXN: "$75,664.95", siempre: true },
  { fraccion: "IV", actividad: "Prestamos o creditos", idUMA: "---", idMXN: "Siempre", avUMA: "1,605", avMXN: "$188,282.55", siempre: true },
  { fraccion: "V", actividad: "Comercializacion de bienes inmuebles", idUMA: "---", idMXN: "Siempre", avUMA: "8,025", avMXN: "$941,412.75", siempre: true },
  { fraccion: "V Bis", actividad: "Desarrollo inmobiliario", idUMA: "---", idMXN: "Siempre", avUMA: "8,025", avMXN: "$941,412.75", siempre: true },
  { fraccion: "VI", actividad: "Piedras y metales preciosos", idUMA: "805", idMXN: "$94,434.55", avUMA: "1,605", avMXN: "$188,282.55", siempre: false },
  { fraccion: "VII", actividad: "Obras de arte", idUMA: "2,410", idMXN: "$282,717.10", avUMA: "4,815", avMXN: "$564,847.65", siempre: false },
  { fraccion: "VIII", actividad: "Vehiculos (terrestres, marinos, aereos)", idUMA: "3,210", idMXN: "$376,565.10", avUMA: "6,420", avMXN: "$753,130.20", siempre: false },
  { fraccion: "IX", actividad: "Blindaje (vehiculos y bienes inmuebles)", idUMA: "2,410", idMXN: "$282,717.10", avUMA: "4,815", avMXN: "$564,847.65", siempre: false },
  { fraccion: "X", actividad: "Traslado y custodia de valores", idUMA: "---", idMXN: "Siempre", avUMA: "3,210", avMXN: "$376,565.10", siempre: true },
  { fraccion: "XI", actividad: "Prestacion de servicios profesionales independientes", idUMA: "---", idMXN: "Siempre", avUMA: "---", avMXN: "Cuando se realice operacion financiera en nombre del cliente", siempre: true },
  { fraccion: "XII", actividad: "Fedatarios publicos - Inmuebles", idUMA: "---", idMXN: "Siempre", avUMA: "8,000", avMXN: "$938,480.00", siempre: true },
  { fraccion: "XII", actividad: "Fedatarios publicos - Fideicomisos", idUMA: "---", idMXN: "Siempre", avUMA: "4,000", avMXN: "$469,240.00", siempre: true },
  { fraccion: "XIII", actividad: "Donativos", idUMA: "1,605", idMXN: "$188,282.55", avUMA: "3,210", avMXN: "$376,565.10", siempre: false },
  { fraccion: "XV", actividad: "Arrendamiento (uso y goce de inmuebles)", idUMA: "1,605", idMXN: "$188,282.55", avUMA: "3,210", avMXN: "$376,565.10", siempre: false },
  { fraccion: "XVI", actividad: "Activos virtuales - operacion del cliente", idUMA: "---", idMXN: "Siempre", avUMA: "210", avMXN: "$24,635.10", siempre: true },
  { fraccion: "XVI", actividad: "Activos virtuales - contraprestacion por servicios", idUMA: "---", idMXN: "Siempre", avUMA: "4", avMXN: "$469.24", siempre: true },
];

const faqItems = [
  {
    question: "Que son las actividades vulnerables segun la LFPIORPI?",
    answer: "Son operaciones comerciales que, por su naturaleza, pueden ser utilizadas para el lavado de dinero o financiamiento al terrorismo. Estan definidas en el Articulo 17 de la LFPIORPI e incluyen actividades como compraventa de inmuebles, vehiculos, metales preciosos, activos virtuales, entre otras. Quienes las realizan tienen obligaciones de identificacion de clientes y presentacion de avisos ante la UIF.",
  },
  {
    question: "Cual es el valor de la UMA en 2026?",
    answer: "El valor de la Unidad de Medida y Actualizacion (UMA) vigente en 2026 es de $117.31 MXN diarios. Este valor es fundamental para calcular los umbrales de identificacion y aviso de las actividades vulnerables conforme a la LFPIORPI.",
  },
  {
    question: "Que diferencia hay entre umbral de identificacion y umbral de aviso?",
    answer: "El umbral de identificacion obliga a recabar y verificar los datos del cliente cuando la operacion iguala o supera ese monto. El umbral de aviso obliga, ademas, a presentar un aviso formal ante la Unidad de Inteligencia Financiera (UIF) dentro de los plazos que marca la ley. Algunas actividades requieren identificacion siempre, independientemente del monto.",
  },
  {
    question: "Que pasa si no presento avisos a la UIF?",
    answer: "El incumplimiento de las obligaciones de la LFPIORPI puede resultar en multas que van desde 200 hasta 65,000 dias de salario minimo, e incluso responsabilidad penal. La UIF y la SAT realizan auditorias periodicas para verificar el cumplimiento de sujetos obligados.",
  },
  {
    question: "Que es el expediente KYC para actividades vulnerables?",
    answer: "Es el conjunto de documentos e informacion que debes conservar por cada cliente identificado: identificacion oficial vigente, datos del beneficiario controlador, comprobante de domicilio, y toda la evidencia de verificacion. La ley exige conservar estos expedientes durante 10 anos contados a partir de la fecha de realizacion de la actividad vulnerable.",
  },
  {
    question: "Como funciona la acumulacion de operaciones en 6 meses?",
    answer: "La LFPIORPI establece que las operaciones realizadas por un mismo cliente en un periodo de 6 meses se acumulan para efectos de determinar si se alcanzan los umbrales. Esto significa que aunque cada operacion individual no alcance el umbral, la suma de todas en ese periodo puede activar la obligacion de identificacion o aviso.",
  },
  {
    question: "Los activos virtuales estan regulados por la LFPIORPI?",
    answer: "Si. Desde la reforma al Articulo 17, fraccion XVI, quienes ofrecen servicios relacionados con activos virtuales deben identificar siempre a sus clientes. El umbral de aviso es de 210 UMA ($24,635.10 MXN) por operacion del cliente, y de 4 UMA ($469.24 MXN) cuando se trata de contraprestacion por servicios.",
  },
  {
    question: "Como ayuda JAAK a cumplir con la LFPIORPI?",
    answer: "JAAK automatiza la verificacion de identidad (KYC) con biometria facial, prueba de vida certificada por iBeta, validacion de INE en tiempo real, y generacion de expedientes digitales con sellado de tiempo. Todo queda almacenado de forma segura y listo para presentar ante la UIF en caso de requerimiento o auditoria.",
  },
];

export default function ActividadesVulnerablesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-[#0a0a0a]">
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
              <div className="flex flex-wrap gap-3 mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/10 border border-red-500/20 rounded-full">
                  <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                  <span className="text-red-400 text-sm font-medium">Reforma DOF 16/07/2025</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0066ff]/10 border border-[#0066ff]/20 rounded-full">
                  <span className="text-[#0066ff] text-sm font-medium">UMA 2026: $117.31 MXN</span>
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black text-white mb-6 leading-tight">
                Actividades Vulnerables y Umbrales 2026 en la LFPIORPI
              </h1>
              <p className="text-xl text-white/60 mb-8 max-w-3xl">
                Tabla completa de umbrales de identificacion y aviso, simulador de obligaciones PLD y clasificador comercial. Actualizado conforme a la reforma DOF 16/07/2025 y valor UMA 2026.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="#simulador"
                  className="px-6 py-3 bg-[#0066ff] text-white font-semibold rounded-lg hover:bg-[#0052cc] transition-all"
                >
                  Usar simulador PLD
                </Link>
                <Link
                  href="#umbrales"
                  className="px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all"
                >
                  Ver tabla de umbrales
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="py-10 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-black text-gray-900 mb-1">$117.31</div>
                <div className="text-sm text-gray-600">Valor UMA diario 2026</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-gray-900 mb-1">16+</div>
                <div className="text-sm text-gray-600">Actividades vulnerables</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-gray-900 mb-1">10 anos</div>
                <div className="text-sm text-gray-600">Conservacion de expedientes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-gray-900 mb-1">UIF</div>
                <div className="text-sm text-gray-600">Autoridad receptora de avisos</div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Que son las actividades vulnerables en Mexico
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                La <strong>Ley Federal para la Prevencion e Identificacion de Operaciones con Recursos de Procedencia Ilicita (LFPIORPI)</strong> define como actividades vulnerables aquellas operaciones comerciales que, por su naturaleza o monto, son susceptibles de ser utilizadas para el lavado de dinero o financiamiento al terrorismo.
              </p>
              <p className="text-gray-600 mb-4">
                Quienes realizan estas actividades estan obligados a identificar a sus clientes, conservar documentacion y, cuando se superan los umbrales establecidos, presentar avisos ante la <strong>Unidad de Inteligencia Financiera (UIF)</strong>.
              </p>
              <p className="text-gray-600">
                Los umbrales se expresan en <strong>Unidades de Medida y Actualizacion (UMA)</strong>. Para 2026, el valor diario de la UMA es de <strong>$117.31 MXN</strong>, conforme a lo publicado en el Diario Oficial de la Federacion.
              </p>
            </div>
          </div>
        </section>

        {/* Threshold Table */}
        <section id="umbrales" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0066ff]/10 rounded-full mb-4">
                <span className="text-[#0066ff] text-sm font-medium">Articulo 17 LFPIORPI</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                Tabla completa de umbrales 2026
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Umbrales de identificacion y aviso para cada actividad vulnerable. Valores en UMA y equivalente en moneda nacional (MXN).
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[#0066ff] text-white">
                      <th className="px-3 py-3 text-left text-xs font-semibold uppercase tracking-wider">Fracc.</th>
                      <th className="px-3 py-3 text-left text-xs font-semibold uppercase tracking-wider">Actividad vulnerable</th>
                      <th className="px-3 py-3 text-right text-xs font-semibold uppercase tracking-wider">Identificacion (UMA)</th>
                      <th className="px-3 py-3 text-right text-xs font-semibold uppercase tracking-wider">Identificacion (MXN)</th>
                      <th className="px-3 py-3 text-right text-xs font-semibold uppercase tracking-wider">Aviso (UMA)</th>
                      <th className="px-3 py-3 text-right text-xs font-semibold uppercase tracking-wider">Aviso (MXN)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {umbralData.map((item, index) => (
                      <tr key={index} className={`${index % 2 === 0 ? "bg-white" : "bg-gray-50"} ${item.siempre ? "font-medium" : ""}`}>
                        <td className="px-3 py-3 text-sm font-bold text-gray-900 whitespace-nowrap">{item.fraccion}</td>
                        <td className="px-3 py-3 text-sm text-gray-700">{item.actividad}</td>
                        <td className="px-3 py-3 text-sm text-right whitespace-nowrap">
                          {item.idUMA === "---" ? (
                            <span className="text-[#0066ff] font-semibold">---</span>
                          ) : (
                            <span className="text-gray-900">{item.idUMA}</span>
                          )}
                        </td>
                        <td className="px-3 py-3 text-sm text-right whitespace-nowrap">
                          {item.idMXN === "Siempre" ? (
                            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-[#0066ff]/10 text-[#0066ff]">Siempre</span>
                          ) : (
                            <span className="text-gray-900 font-medium">{item.idMXN}</span>
                          )}
                        </td>
                        <td className="px-3 py-3 text-sm text-right whitespace-nowrap">
                          {item.avUMA === "---" ? (
                            <span className="text-gray-400">---</span>
                          ) : (
                            <span className="text-gray-900">{item.avUMA}</span>
                          )}
                        </td>
                        <td className="px-3 py-3 text-sm text-right">
                          <span className={`${item.avMXN.length > 20 ? "text-xs" : "text-sm"} text-gray-900 font-medium`}>{item.avMXN}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="px-4 py-3 bg-gray-50 border-t border-gray-200">
                <p className="text-sm text-gray-600 text-center">
                  <strong>Valor UMA 2026:</strong> $117.31 MXN diarios | Fuente: Portal de Prevencion de Lavado de Dinero, reforma DOF 16/07/2025
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Simulator */}
        <section id="simulador" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#00d4aa]/10 border border-[#00d4aa]/20 rounded-full mb-4">
                <span className="w-2 h-2 bg-[#00d4aa] rounded-full"></span>
                <span className="text-[#00d4aa] text-sm font-medium">Herramienta gratuita</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                Simulador de obligaciones PLD
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Calcula si tu operacion activa umbrales de identificacion o aviso. Ingresa los datos de tu actividad y obtendras el resultado legal, el umbral exacto aplicado y la modalidad JAAK recomendada.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8">
              <SimuladorPLD />
            </div>

            <div className="mt-6 p-4 bg-gray-50 rounded-xl border border-gray-200">
              <p className="text-sm text-gray-600 text-center">
                <strong>Formula:</strong> monto_en_UMA = monto_MXN / 117.31 | Se compara contra umbral de identificacion y de aviso | Se evalua acumulacion en 6 meses si aplica.
              </p>
            </div>
          </div>
        </section>

        {/* KYC Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0066ff]/10 rounded-full mb-4">
                <span className="text-[#0066ff] text-sm font-medium">Expediente KYC</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                Requisitos del expediente de identificacion
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                La LFPIORPI establece los elementos minimos que debe contener el expediente de cada cliente identificado.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="w-12 h-12 bg-[#0066ff]/10 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#0066ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Identificacion oficial</h3>
                <p className="text-gray-600 text-sm">
                  INE/IFE vigente, pasaporte o documento migratorio. Debe validarse autenticidad, vigencia y coincidencia biometrica del portador.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="w-12 h-12 bg-[#0066ff]/10 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#0066ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Beneficiario controlador</h3>
                <p className="text-gray-600 text-sm">
                  Para personas morales, se debe identificar a la persona fisica que ejerce el control efectivo. Incluye estructura accionaria y representantes legales.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="w-12 h-12 bg-[#0066ff]/10 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#0066ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Conservacion 10 anos</h3>
                <p className="text-gray-600 text-sm">
                  Los expedientes deben conservarse por un minimo de 10 anos contados a partir de la fecha de la ultima operacion. Debe garantizarse integridad y disponibilidad.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="w-12 h-12 bg-[#0066ff]/10 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#0066ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Evidencia verificable</h3>
                <p className="text-gray-600 text-sm">
                  Cada verificacion debe generar evidencia auditable: imagenes del documento, resultado biometrico, metadatos (IP, GPS, timestamp) y hash de integridad.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="w-12 h-12 bg-[#0066ff]/10 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#0066ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Enfoque basado en riesgo</h3>
                <p className="text-gray-600 text-sm">
                  La intensidad de la debida diligencia debe ser proporcional al riesgo del cliente y la operacion. Clientes de alto riesgo requieren medidas reforzadas de verificacion.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="w-12 h-12 bg-[#0066ff]/10 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#0066ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Reportes a la UIF</h3>
                <p className="text-gray-600 text-sm">
                  Los avisos deben presentarse dentro de los 30 dias naturales siguientes a la operacion. JAAK genera reportes estructurados listos para carga en el portal de la UIF.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* JAAK Solution */}
        <section className="py-20 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#00d4aa]/10 border border-[#00d4aa]/20 rounded-full mb-6">
                  <span className="w-2 h-2 bg-[#00d4aa] rounded-full"></span>
                  <span className="text-[#00d4aa] text-sm font-medium">Solucion JAAK</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
                  Automatiza tu cumplimiento PLD con JAAK
                </h2>
                <p className="text-xl text-white/60 mb-8">
                  JAAK permite a los sujetos obligados cumplir con la identificacion de clientes, conservacion de evidencia y preparacion de avisos, sin depender de procesos manuales.
                </p>
                <ul className="space-y-4">
                  {[
                    "Verificacion biometrica con prueba de vida certificada (iBeta)",
                    "Validacion de INE/IFE en tiempo real contra bases del INE",
                    "Expedientes digitales con sellado de tiempo y hash de integridad",
                    "Almacenamiento seguro cifrado por 10+ anos",
                    "Reportes estructurados listos para carga en portal UIF",
                    "API REST para integracion con tu sistema actual",
                    "Dashboard de monitoreo de operaciones y umbrales",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-[#00d4aa] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-white/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-6">Clasificador comercial JAAK</h3>
                <div className="space-y-6">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-bold">Autoservicio</span>
                      <span className="text-xs text-white/50 bg-white/10 px-2 py-1 rounded-full">&lt; 1,000 verif/mes</span>
                    </div>
                    <p className="text-white/50 text-sm">Ideal para empresas que inician con actividades vulnerables. Acceso a plataforma, API y soporte estandar.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#00d4aa]/10 border border-[#00d4aa]/20">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[#00d4aa] font-bold">Enterprise</span>
                      <span className="text-xs text-[#00d4aa]/70 bg-[#00d4aa]/10 px-2 py-1 rounded-full">&ge; 1,000 verif/mes</span>
                    </div>
                    <p className="text-white/50 text-sm">Para operaciones de alto volumen. Incluye SLA dedicado, integracion personalizada y account manager.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#0066ff]/10 border border-[#0066ff]/20">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[#0066ff] font-bold">Alianza Estrategica</span>
                      <span className="text-xs text-[#0066ff]/70 bg-[#0066ff]/10 px-2 py-1 rounded-full">&ge; 500,000 verif/ano</span>
                    </div>
                    <p className="text-white/50 text-sm">Modelo de alianza para grandes corporativos. Infraestructura dedicada, pricing por volumen y soporte 24/7.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                Preguntas frecuentes sobre PLD y actividades vulnerables
              </h2>
              <p className="text-xl text-gray-600">
                Resolvemos las dudas mas comunes sobre la LFPIORPI, umbrales y obligaciones de identificacion.
              </p>
            </div>

            <div className="space-y-6">
              {faqItems.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Disclaimer */}
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
                <p className="text-gray-600 text-sm">
                  JAAK es una plataforma tecnologica de apoyo al cumplimiento. Esta pagina tiene fines informativos y no constituye asesoria legal. Los umbrales se actualizan conforme al valor de la UMA vigente. Consulta con tu area legal o de cumplimiento para determinar tus obligaciones especificas bajo la LFPIORPI.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA - Contact Form */}
        <section id="contacto" className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Agenda una sesion estrategica de cumplimiento
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Nuestro equipo de especialistas en PLD te ayuda a disenar tu estrategia de identificacion y cumplimiento conforme a la LFPIORPI.
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
