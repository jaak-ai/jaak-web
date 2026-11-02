import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import SignaTrackedLink from "@/components/signa/SignaTrackedLink";
import { signatureLevels } from "@/lib/firma/levels";

// Decisión editorial permanente (AUD-01): esta página compara capacidades funcionales. No publica
// precios, tarifas, ahorros ni afirmaciones sobre prestaciones de terceros no verificadas.

const TITLE = "Comparación de firma electrónica para empresas | JAAK";
const DESCRIPTION =
  "Compara modalidades, evidencia, verificación de identidad e integración para elegir una solución de firma electrónica empresarial en México.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    "comparación de firma electrónica",
    "firma electrónica para empresas",
    "firma electrónica méxico",
    "firma electrónica NOM-151",
    "firma electrónica con biometría",
    "firma electrónica con KYC",
    "alternativas a Mifiel",
    "alternativas a DocuSign",
    "plataforma de firma electrónica méxico",
  ],
  alternates: { canonical: "https://jaak.ai/signa/comparacion" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    url: "https://jaak.ai/signa/comparacion",
    siteName: "JAAK",
    locale: "es_MX",
    images: [{ url: "/images/logos/jaak-logo-azul.png", width: 800, height: 400, alt: "Comparación de firma electrónica para empresas · JAAK" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/images/logos/jaak-logo-azul.png"],
  },
  other: {
    "geo.region": "MX",
    "geo.country": "México",
    language: "Spanish",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Jaak.ai", item: "https://jaak.ai" },
    { "@type": "ListItem", position: 2, name: "Signa", item: "https://jaak.ai/signa" },
    { "@type": "ListItem", position: 3, name: "Comparación", item: "https://jaak.ai/signa/comparacion" },
  ],
};

const CRITERIA = [
  {
    name: "Modalidades de firma",
    check: "¿Ofrece distintos niveles de firma según el riesgo del documento?",
    jaak: "De la firma simple a la firma digital con NOM-151, con opciones de biometría y KYC.",
  },
  {
    name: "Validación de identidad",
    check: "¿Puede verificar quién firma y con qué método?",
    jaak: "Modalidades con biometría facial y prueba de vida, o verificación KYC completa.",
  },
  {
    name: "Evidencia digital",
    check: "¿Qué evidencia se genera y puede descargarse?",
    jaak: "Bitácora de eventos y expediente digital; el nivel varía según la modalidad.",
  },
  {
    name: "NOM-151",
    check: "Cuando tu caso lo requiera: ¿incorpora constancia de conservación y sello de tiempo?",
    jaak: "Modalidades con NOM-151. La pertinencia para cada documento debe validarse con tu área legal.",
  },
  {
    name: "Modalidades Web, API y SDK",
    check: "¿Puede usarse desde una plataforma web y también integrarse a tus sistemas o aplicaciones?",
    jaak: "Uso desde la plataforma web o integración por API o SDK, según contratación.",
  },
  {
    name: "White Label",
    check: "¿Permite personalizar la experiencia con tu marca?",
    jaak: "Posibilidad de White Label conforme al alcance de la propuesta comercial.",
  },
  {
    name: "Requisitos de implementación",
    check: "¿Qué se necesita para empezar y quién participa?",
    jaak: "Se define con el equipo comercial según alcance; la integración por API o SDK considera una cuota de configuración (setup fee).",
  },
  {
    name: "Alcance del soporte",
    check: "¿Qué soporte incluye, en qué idioma y bajo qué condiciones?",
    jaak: "Soporte y acompañamiento especializado en español, desde México, según el plan y las condiciones acordadas.",
  },
  {
    name: "Documentación e integración",
    check: "¿Existe documentación técnica para integrar?",
    jaak: "Documentación técnica de API, SDK y webhooks disponible para integraciones.",
  },
];

const QUESTIONS = [
  "¿Qué tipos de firma y qué niveles de evidencia ofrece cada modalidad?",
  "¿Cómo se verifica la identidad de los firmantes?",
  "¿Qué constancias y expedientes se generan, y cómo se conservan?",
  "¿Qué modalidades de uso existen: plataforma web, API o SDK?",
  "¿Qué incluye el soporte, en qué idioma y en qué horarios?",
  "¿Qué condiciones de implementación y contratación aplican a mi caso?",
];

function yesNo(v: boolean) {
  return v ? "Sí" : "No";
}

export default function SignaComparacion() {
  const rows = signatureLevels.map((l) => ({
    name: l.name,
    href: l.href,
    identity: l.matrix.identity ?? "No incluida",
    timestamp: yesNo(l.matrix.timestamp),
    nom151: yesNo(l.matrix.nom151),
    biometria: yesNo(l.matrix.biometria),
    kyc: yesNo(l.matrix.kyc),
    evidence: l.matrix.evidenceLevel,
    useCase: l.matrix.useCase,
  }));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 bg-[#202945]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <nav aria-label="Migas de pan" className="text-sm text-white/60 mb-6">
              <Link href="/signa" className="hover:text-white">Signa</Link> / <span className="text-white/90">Comparación</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-5">
              Comparación de firma electrónica para empresas en México
            </h1>
            <p className="text-xl text-white/70 mb-8">
              Compara modalidades, evidencia, verificación de identidad e integración para elegir una solución de
              firma electrónica empresarial. Esta página compara capacidades funcionales, no precios.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <SignaTrackedLink
                href="/contacto"
                source="signa_comparacion_hero_demo"
                className="px-7 py-3.5 bg-[#1ECAD3] text-[#0E2233] font-bold rounded-lg hover:bg-[#19b3bb] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Solicitar una demo
              </SignaTrackedLink>
              <SignaTrackedLink
                href="/signa#orientacion"
                source="signa_comparacion_hero_selector"
                className="px-7 py-3.5 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 border border-white/20 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Encontrar mi modalidad
              </SignaTrackedLink>
            </div>
          </div>
        </section>

        {/* Tabla de modalidades JAAK */}
        <section className="py-16 bg-white" aria-labelledby="tabla-title">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="tabla-title" className="text-3xl font-black text-gray-900 mb-3">
              Modalidades de firma electrónica de JAAK
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl">
              Cada modalidad incorpora capacidades distintas de identidad, sello de tiempo y evidencia. Elige según el
              tipo de documento y los requisitos de tu proceso.
            </p>

            {/* Escritorio */}
            <div className="hidden md:block overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full text-sm text-left" aria-label="Comparación de modalidades de firma electrónica de JAAK">
                <thead className="bg-gray-50 text-gray-700">
                  <tr>
                    {["Modalidad", "Verificación de identidad", "Sello de tiempo", "NOM-151", "Biometría", "KYC", "Nivel de evidencia", "Uso típico"].map((h) => (
                      <th key={h} scope="col" className="px-4 py-3 font-semibold">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {rows.map((r) => (
                    <tr key={r.name}>
                      <th scope="row" className="px-4 py-3 font-semibold text-gray-900">
                        <Link href={r.href} className="text-[#0066ff] hover:underline">{r.name}</Link>
                      </th>
                      <td className="px-4 py-3 text-gray-700">{r.identity}</td>
                      <td className="px-4 py-3 text-gray-700">{r.timestamp}</td>
                      <td className="px-4 py-3 text-gray-700">{r.nom151}</td>
                      <td className="px-4 py-3 text-gray-700">{r.biometria}</td>
                      <td className="px-4 py-3 text-gray-700">{r.kyc}</td>
                      <td className="px-4 py-3 text-gray-700">{r.evidence}</td>
                      <td className="px-4 py-3 text-gray-700">{r.useCase}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Móvil: tarjetas (sin desbordamiento horizontal) */}
            <div className="md:hidden space-y-4">
              {rows.map((r) => (
                <div key={r.name} className="rounded-xl border border-gray-200 p-4">
                  <h3 className="font-bold text-gray-900 mb-3">
                    <Link href={r.href} className="text-[#0066ff] hover:underline">{r.name}</Link>
                  </h3>
                  <dl className="grid grid-cols-2 gap-x-3 gap-y-2 text-sm">
                    {[
                      ["Verificación de identidad", r.identity],
                      ["Sello de tiempo", r.timestamp],
                      ["NOM-151", r.nom151],
                      ["Biometría", r.biometria],
                      ["KYC", r.kyc],
                      ["Nivel de evidencia", r.evidence],
                    ].map(([k, v]) => (
                      <div key={k}>
                        <dt className="text-xs text-gray-500">{k}</dt>
                        <dd className="text-gray-800">{v}</dd>
                      </div>
                    ))}
                  </dl>
                  <p className="mt-3 text-xs text-gray-500">Uso típico: {r.useCase}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-gray-500">
              La pertinencia de cada modalidad para un documento o proceso específico debe validarse con tu área legal o de cumplimiento.
            </p>
          </div>
        </section>

        {/* Criterios */}
        <section className="py-16 bg-gray-50" aria-labelledby="criterios-title">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="criterios-title" className="text-3xl font-black text-gray-900 mb-3">
              Criterios para evaluar una plataforma de firma electrónica
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl">
              Estos criterios sirven para comparar a cualquier proveedor. A la izquierda, qué revisar; a la derecha,
              cómo lo aborda JAAK.
            </p>
            <div className="grid md:grid-cols-2 gap-5">
              {CRITERIA.map((c) => (
                <div key={c.name} className="rounded-xl bg-white border border-gray-200 p-5">
                  <h3 className="font-bold text-gray-900 mb-2">{c.name}</h3>
                  <p className="text-sm text-gray-600"><span className="font-semibold text-gray-800">Qué revisar:</span> {c.check}</p>
                  <p className="mt-2 text-sm text-gray-600"><span className="font-semibold text-gray-800">En JAAK:</span> {c.jaak}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-gray-600">
              Documentación técnica para integraciones:{" "}
              <Link href="/docs" className="font-semibold text-[#0066ff] hover:underline">consulta la documentación de JAAK</Link>.
            </p>
          </div>
        </section>

        {/* Alternativas */}
        <section className="py-16 bg-white" aria-labelledby="alternativas-title">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="alternativas-title" className="text-3xl font-black text-gray-900 mb-4">
              Alternativas a Mifiel y DocuSign: cómo comparar proveedores
            </h2>
            <p className="text-gray-600 mb-4">
              Mifiel y DocuSign son otras opciones del mercado de firma electrónica. Cada proveedor define sus propias
              prestaciones, modalidades y condiciones, por lo que recomendamos consultar sus fuentes oficiales y aplicar
              a todos los mismos criterios.
            </p>
            <p className="text-gray-700 font-semibold mb-3">Preguntas útiles para cualquier proveedor:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              {QUESTIONS.map((q) => (<li key={q}>{q}</li>))}
            </ul>
            <p className="mt-6 text-gray-600">
              Si quieres revisar cómo se aplican estos criterios a tu operación, conoce las{" "}
              <Link href="/firma-electronica" className="font-semibold text-[#0066ff] hover:underline">soluciones de firma electrónica de JAAK</Link>{" "}
              o explora las modalidades con{" "}
              <Link href="/firma-electronica-nom-151" className="font-semibold text-[#0066ff] hover:underline">NOM-151</Link>,{" "}
              <Link href="/firma-electronica-biometrica" className="font-semibold text-[#0066ff] hover:underline">biometría</Link> y{" "}
              <Link href="/firma-electronica-kyc" className="font-semibold text-[#0066ff] hover:underline">KYC</Link>.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-[#1ECAD3] to-[#0066ff]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Evaluemos la firma electrónica de tu operación
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Nuestro equipo comercial se pondrá en contacto contigo para conocer las necesidades de tu empresa.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <SignaTrackedLink
                href="/contacto"
                source="signa_comparacion_cierre_propuesta"
                className="px-8 py-4 bg-white text-[#0066ff] font-bold rounded-lg hover:bg-gray-50 transition-all shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Solicitar una propuesta para mi operación
              </SignaTrackedLink>
              <SignaTrackedLink
                href="/signa"
                source="signa_comparacion_cierre_signa"
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-[#0066ff] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Conocer Signa
              </SignaTrackedLink>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
