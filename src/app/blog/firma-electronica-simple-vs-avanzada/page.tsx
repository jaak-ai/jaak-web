import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Firma Simple vs Firma Digital con Validez NOM-151: ¿Cuál necesita tu empresa? | JAAK",
  description:
    "Descubre la diferencia entre firma electrónica simple y firma digital con validez NOM-151 en México. No son lo mismo, y elegir mal puede costarle muy caro a tu empresa.",
  keywords: [
    "firma electrónica simple",
    "firma digital NOM-151",
    "firma electrónica México",
    "NOM-151",
    "diferencias firma digital",
    "firma electrónica contratos",
    "firma con validez legal México",
  ],
  openGraph: {
    title: "Firma Simple vs Firma Digital con Validez NOM-151: ¿Cuál necesita tu empresa?",
    description:
      "No todas las firmas electrónicas tienen el mismo peso legal. Conoce la diferencia y elige la que protege de verdad a tu empresa.",
    type: "article",
    publishedTime: "2026-04-11",
    authors: ["JAAK"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Firma Simple vs Firma Digital con Validez NOM-151: ¿Cuál necesita tu empresa?",
  description:
    "Descubre la diferencia entre firma electrónica simple y firma digital con validez NOM-151 en México. No son lo mismo, y elegir mal puede costarle muy caro a tu empresa.",
  image: "https://jaak.ai/images/blog/firma-simple-vs-avanzada.jpg",
  datePublished: "2026-04-11",
  dateModified: "2026-04-11",
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
    "@id": "https://jaak.ai/blog/firma-electronica-simple-vs-avanzada",
  },
  keywords:
    "firma electrónica simple, firma digital NOM-151, firma electrónica México, NOM-151, diferencias firma digital",
  inLanguage: "es-MX",
};

export default function FirmaElectronicaSimpleVsAvanzada() {
  const relatedPosts = [
    {
      title: "¿Qué es la NOM-151 y por qué importa en contratos digitales?",
      slug: "que-es-nom-151-contratos-digitales",
      category: "Firma Electrónica",
    },
    {
      title: "¿Qué es KYC y cuándo es obligatorio en México?",
      slug: "que-es-kyc-cuando-es-obligatorio-mexico",
      category: "KYC",
    },
    {
      title:
        "Guía completa de las disposiciones CNBV para verificación de identidad",
      slug: "disposiciones-cnbv-verificacion-identidad",
      category: "Regulación",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-12 bg-[#0a0a0a]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-6">
              <Link
                href="/blog"
                className="inline-flex items-center text-white/60 hover:text-white transition-colors"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Volver al blog
              </Link>
            </div>
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-[#1ECAD3]/10 text-[#1ECAD3] text-sm font-semibold rounded-full">
                Firma Electrónica
              </span>
              <span className="text-white/40 text-sm">11 de abril, 2026</span>
              <span className="text-white/40 text-sm">•</span>
              <span className="text-white/40 text-sm">9 min de lectura</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
              Firma Simple vs Firma Digital con Validez NOM-151: ¿Cuál necesita tu empresa?
            </h1>
            <p className="text-xl text-white/60">
              No todas las firmas electrónicas tienen el mismo peso legal en México.
              Usar la que no corresponde puede dejarte sin respaldo si un contrato se disputa.
              Aquí te explicamos la diferencia de forma clara.
            </p>
          </div>
        </section>

        {/* Featured Image */}
        <section className="bg-white pt-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/blog/firma-simple-vs-avanzada.jpg"
                alt="Firma electrónica simple vs firma digital con validez NOM-151 en México"
                width={1200}
                height={675}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">

              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Muchas empresas en México usan firma electrónica pensando que están protegidas.
                Y técnicamente tienen razón: firmaron digitalmente. El problema es que no todas las
                firmas electrónicas tienen el mismo valor cuando hay una disputa. La diferencia entre
                una firma simple y una firma con validez NOM-151 puede decidir si un contrato se
                sostiene o se cae frente a un juez.
              </p>

              <div className="bg-amber-50 border-l-4 border-amber-400 p-6 my-8">
                <p className="text-gray-800 font-semibold mb-1">Aclaración importante:</p>
                <p className="text-gray-700">
                  La <strong>Firma Digital con Validez NOM-151</strong> que describimos en este
                  artículo <strong>no es la e.firma del SAT</strong>. La e.firma (antes llamada FIEL)
                  es un certificado que emite el SAT exclusivamente para trámites fiscales y
                  declaraciones ante el gobierno. La firma NOM-151 es para contratos privados entre
                  empresas y personas: arrendamientos, créditos, seguros, onboarding digital, entre otros.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                ¿Qué es una firma electrónica simple?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                La firma simple es cualquier acción electrónica que una persona realiza para expresar
                que está de acuerdo con algo. Puede ser:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
                <li>Un clic en un botón "Acepto"</li>
                <li>Una imagen de la firma dibujada en pantalla o escaneada</li>
                <li>Un código enviado por SMS (OTP) que el usuario ingresa</li>
                <li>Escribir el nombre al final de un correo electrónico</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                Es fácil de implementar y no requiere tecnología especializada. Pero tiene un problema
                grave: si alguien disputa el contrato, la empresa no puede demostrar fácilmente quién
                firmó, cuándo lo hizo ni que el documento no fue modificado después.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                ¿Qué es una Firma Digital con Validez NOM-151?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                La <strong>Firma Digital con Validez NOM-151</strong> va mucho más allá de un clic o
                una imagen. Cuando alguien firma un documento con este nivel, ocurren varias cosas al
                mismo tiempo:
              </p>
              <ol className="list-decimal pl-6 mb-6 space-y-3 text-gray-600">
                <li>
                  <strong>Se genera una huella digital del documento</strong> — cualquier cambio
                  posterior al archivo, por mínimo que sea, es automáticamente detectable.
                </li>
                <li>
                  <strong>Un organismo certificado registra la fecha y hora exacta de la firma</strong> —
                  esto se llama sello de tiempo NOM-151 y tiene plena validez legal en México.
                </li>
                <li>
                  <strong>Se vincula la identidad del firmante al documento</strong> — no solo se
                  acepta; se verifica quién es la persona que firma.
                </li>
                <li>
                  <strong>Se genera un expediente completo y auditable</strong> — con toda la
                  evidencia del proceso, disponible si algún día se necesita presentar en un juicio.
                </li>
              </ol>
              <div className="bg-[#0066ff]/5 border-l-4 border-[#0066ff] p-6 my-8">
                <p className="text-gray-700 font-semibold mb-2">En términos simples:</p>
                <p className="text-gray-600">
                  Con la firma NOM-151, si alguien intenta decir "yo nunca firmé eso" o
                  "ese documento fue alterado", la empresa tiene evidencia sólida para demostrarlo
                  en sentido contrario. Con una firma simple, esa evidencia simplemente no existe.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                El nivel máximo: Firma Biométrica con NOM-151
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Existe un tercer nivel que agrega verificación de identidad mediante reconocimiento
                facial. Antes de firmar, el sistema confirma que la persona es quien dice ser:
                analiza el rostro en tiempo real y detecta que es una persona real, no una foto
                o imagen pregrabada.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Esto es especialmente útil cuando el firmante es alguien que la empresa no conoce
                previamente — por ejemplo, en la apertura digital de una cuenta, la contratación de
                un crédito o el onboarding de nuevos clientes.
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
                <li>Verificación del INE o pasaporte del firmante</li>
                <li>Reconocimiento facial con detección de vida (confirma que es una persona real)</li>
                <li>Sello de tiempo NOM-151 certificado</li>
                <li>Expediente digital con video, foto y registro completo del proceso</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                Comparativa: ¿qué ofrece cada tipo?
              </h2>

              {/* Comparison Grid */}
              <div className="grid md:grid-cols-3 gap-0 my-8 rounded-xl overflow-hidden border border-gray-200">
                {/* Column headers */}
                <div className="bg-[#64748B] p-5">
                  <p className="font-bold text-white text-lg">Firma Simple</p>
                  <p className="text-white/80 text-sm mt-1">Clic / imagen / OTP</p>
                </div>
                <div className="bg-[#1ECAD3] p-5">
                  <p className="font-bold text-white text-lg">Firma NOM-151</p>
                  <p className="text-white/80 text-sm mt-1">Certificada con sello de tiempo</p>
                </div>
                <div className="bg-[#059669] p-5">
                  <p className="font-bold text-white text-lg">Biométrica + NOM-151</p>
                  <p className="text-white/80 text-sm mt-1">Identidad verificada + certificada</p>
                </div>

                {/* Row: ¿prueba quién firmó? */}
                <div className="bg-gray-50 p-4 border-t border-gray-200">
                  <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide mb-1">¿Prueba quién firmó?</p>
                  <p className="text-red-600 font-medium">No</p>
                </div>
                <div className="bg-white p-4 border-t border-gray-200">
                  <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide mb-1">¿Prueba quién firmó?</p>
                  <p className="text-yellow-600 font-medium">Parcial</p>
                </div>
                <div className="bg-gray-50 p-4 border-t border-gray-200">
                  <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide mb-1">¿Prueba quién firmó?</p>
                  <p className="text-green-600 font-medium">Sí — con biometría e INE</p>
                </div>

                {/* Row: ¿protege si el documento es modificado? */}
                <div className="bg-gray-50 p-4 border-t border-gray-200">
                  <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide mb-1">¿Detecta cambios posteriores?</p>
                  <p className="text-red-600 font-medium">No</p>
                </div>
                <div className="bg-white p-4 border-t border-gray-200">
                  <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide mb-1">¿Detecta cambios posteriores?</p>
                  <p className="text-green-600 font-medium">Sí</p>
                </div>
                <div className="bg-gray-50 p-4 border-t border-gray-200">
                  <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide mb-1">¿Detecta cambios posteriores?</p>
                  <p className="text-green-600 font-medium">Sí</p>
                </div>

                {/* Row: sello de tiempo */}
                <div className="bg-gray-50 p-4 border-t border-gray-200">
                  <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide mb-1">Sello de tiempo NOM-151</p>
                  <p className="text-red-600 font-medium">No</p>
                </div>
                <div className="bg-white p-4 border-t border-gray-200">
                  <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide mb-1">Sello de tiempo NOM-151</p>
                  <p className="text-green-600 font-medium">Sí — certificado</p>
                </div>
                <div className="bg-gray-50 p-4 border-t border-gray-200">
                  <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide mb-1">Sello de tiempo NOM-151</p>
                  <p className="text-green-600 font-medium">Sí — certificado</p>
                </div>

                {/* Row: valor legal */}
                <div className="bg-gray-50 p-4 border-t border-gray-200">
                  <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide mb-1">Valor ante un juez</p>
                  <p className="text-gray-700">Bajo — fácilmente refutable</p>
                </div>
                <div className="bg-white p-4 border-t border-gray-200">
                  <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide mb-1">Valor ante un juez</p>
                  <p className="text-gray-700">Alto — evidencia certificada</p>
                </div>
                <div className="bg-gray-50 p-4 border-t border-gray-200">
                  <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide mb-1">Valor ante un juez</p>
                  <p className="text-gray-700">Máximo — expediente completo</p>
                </div>

                {/* Row: para qué sectores */}
                <div className="bg-gray-50 p-4 border-t border-gray-200">
                  <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide mb-1">Ideal para</p>
                  <p className="text-gray-700">Uso interno, bajo riesgo</p>
                </div>
                <div className="bg-white p-4 border-t border-gray-200">
                  <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide mb-1">Ideal para</p>
                  <p className="text-gray-700">Contratos comerciales, arrendamientos</p>
                </div>
                <div className="bg-gray-50 p-4 border-t border-gray-200">
                  <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide mb-1">Ideal para</p>
                  <p className="text-gray-700">Finanzas, crédito, onboarding digital</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                ¿Cuándo usar cada tipo?
              </h2>
              <div className="space-y-4 my-6">
                <div className="bg-gray-50 rounded-xl p-6">
                  <p className="font-bold text-gray-900 mb-2">Firma simple — cuándo sí aplica</p>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>Aprobaciones internas entre empleados de la misma empresa</li>
                    <li>Documentos de bajo riesgo entre partes con relación establecida</li>
                    <li>Procesos donde una disputa es muy poco probable o de consecuencias mínimas</li>
                  </ul>
                </div>
                <div className="bg-[#1ECAD3]/5 rounded-xl p-6">
                  <p className="font-bold text-gray-900 mb-2">Firma Digital con Validez NOM-151 — para contratos que deben sostenerse</p>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>Contratos de arrendamiento residencial o comercial</li>
                    <li>Acuerdos comerciales con terceros</li>
                    <li>Contratos de servicios con cláusulas de penalización</li>
                    <li>Cualquier documento donde la fecha exacta de firma importa</li>
                  </ul>
                </div>
                <div className="bg-[#059669]/5 rounded-xl p-6">
                  <p className="font-bold text-gray-900 mb-2">Firma Biométrica con NOM-151 — indispensable en sectores regulados</p>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>Apertura de cuentas y onboarding digital de clientes</li>
                    <li>Contratos de crédito al consumo o empresarial</li>
                    <li>Instituciones reguladas por la CNBV (bancos, Sofomes, financieras)</li>
                    <li>Cualquier proceso donde sea obligatorio verificar la identidad del firmante</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                Lo que puede pasar si eliges mal
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Una empresa del sector financiero usa firma simple para contratos de crédito.
                Un cliente deja de pagar. Cuando la empresa intenta cobrar, el deudor dice
                que nunca firmó ese contrato.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                La empresa no puede demostrar quién firmó. No puede probar que el documento
                no fue modificado. No tiene registro certificado de cuándo ocurrió la firma.
                El juez, ante la falta de pruebas, falla a favor del deudor.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Con una Firma Digital con Validez NOM-151, ese mismo escenario cambia completamente.
                La empresa tiene el sello de tiempo certificado, la evidencia del proceso de firma
                y un expediente que puede presentar directamente ante el juez. Impugnar
                exitosamente ese contrato se vuelve prácticamente imposible.
              </p>
              <div className="bg-[#0066ff]/5 border-l-4 border-[#0066ff] p-6 my-8">
                <p className="text-gray-700 font-semibold mb-2">El costo real de postergar este cambio:</p>
                <p className="text-gray-600">
                  Implementar firma NOM-151 cuesta una fracción de lo que puede costar un solo
                  litigio perdido. La mayoría de las empresas que cambian lo hacen después de
                  perder su primer caso — cuando ya fue demasiado tarde.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                ¿Cómo empezar sin complicaciones?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Con JAAK no necesitas hacer una integración técnica ni contratar un equipo de
                desarrollo para empezar. Tienes dos caminos:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-600">
                <li>
                  <strong>Autoservicio:</strong> Entra a la plataforma web hoy mismo, sube tu
                  documento, indica quién debe firmarlo y listo. En minutos tienes la firma
                  certificada con NOM-151 y el expediente generado. Sin código, sin contratos,
                  sin complicaciones.
                </li>
                <li>
                  <strong>Integración con tu plataforma:</strong> Si ya tienes un sistema o
                  aplicación propia, un equipo técnico especializado de JAAK te ayuda a conectar
                  la firma directamente a tu flujo existente. Tus clientes firman dentro de tu
                  propia experiencia, con toda la validez legal respaldada.
                </li>
              </ul>

              <div className="bg-gray-50 rounded-xl p-8 my-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  La regla simple para elegir
                </h3>
                <p className="text-gray-600">
                  Si el contrato puede generar una disputa — por dinero, por servicios, por
                  incumplimiento — necesitas Firma Digital con Validez NOM-151. Si encima no
                  conoces al firmante y necesitas saber quién es antes de que firme, necesitas
                  la versión biométrica. La firma simple solo es adecuada cuando las consecuencias
                  de una disputa son mínimas.
                </p>
              </div>

            </div>
          </div>
        </article>

        {/* Author Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-[#1ECAD3] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">J</span>
              </div>
              <div>
                <p className="font-bold text-gray-900">Equipo JAAK</p>
                <p className="text-gray-600">
                  Especialistas en firma digital con validez legal y cumplimiento regulatorio
                  para el sector financiero y empresarial mexicano.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Artículos relacionados</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((post, index) => (
                <Link
                  key={index}
                  href={`/blog/${post.slug}`}
                  className="block bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <span className="inline-block px-3 py-1 bg-[#1ECAD3]/10 text-[#1ECAD3] text-xs font-semibold rounded-full mb-3">
                    {post.category}
                  </span>
                  <h3 className="font-bold text-gray-900 hover:text-[#1ECAD3] transition-colors">
                    {post.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#0a0a0a]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-black text-white mb-4">
              Empieza a firmar con validez NOM-151 hoy
            </h2>
            <p className="text-white/60 text-lg mb-8">
              Sin integración técnica ni contratos de permanencia. Sube tu primer documento
              y obtén una firma certificada en minutos.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/autoservicio"
                className="px-8 py-4 bg-[#1ECAD3] text-white font-bold rounded-lg hover:bg-[#19b5bd] transition-all"
              >
                Probar gratis
              </Link>
              <Link
                href="/plataforma/firma-electronica"
                className="px-8 py-4 bg-white/10 text-white font-bold rounded-lg hover:bg-white/20 transition-all"
              >
                Ver cómo funciona
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
