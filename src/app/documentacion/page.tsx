import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Documentacion | JAAK",
  description: "Documentacion tecnica de JAAK: API Reference, SDKs para iOS, Android y Web, guias de integracion y webhooks para verificacion de identidad.",
};

export default function Documentacion() {
  const apiFeatures = [
    {
      title: "Autenticacion",
      description: "OAuth 2.0 y API keys para acceso seguro a todos los endpoints.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
        </svg>
      ),
    },
    {
      title: "Verificacion de identidad",
      description: "Endpoints para KYC biometrico, prueba de vida y validacion de documentos.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
    {
      title: "Firma electronica",
      description: "API para crear, enviar y gestionar documentos con firma electronica.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      ),
    },
    {
      title: "Consultas oficiales",
      description: "Acceso a bases de datos como INE, SAT, RENAPO y listas PLD.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
        </svg>
      ),
    },
  ];

  const sdks = [
    {
      platform: "iOS",
      language: "Swift",
      description: "SDK nativo para aplicaciones iOS con soporte para captura de documentos y biometria facial.",
      features: ["SwiftUI compatible", "iOS 13+", "Face ID integration"],
      href: "#",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
        </svg>
      ),
    },
    {
      platform: "Android",
      language: "Kotlin",
      description: "SDK nativo para Android con captura optimizada y deteccion de manipulacion.",
      features: ["Jetpack Compose", "Android 6+", "ML Kit integration"],
      href: "#",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.523 15.341c-.5 0-.91.41-.91.91s.41.91.91.91.91-.41.91-.91-.41-.91-.91-.91zm-11.046 0c-.5 0-.91.41-.91.91s.41.91.91.91.91-.41.91-.91-.41-.91-.91-.91zm11.046-6.682c1.5 0 2.73 1.23 2.73 2.73v6.82c0 1.5-1.23 2.73-2.73 2.73H6.477c-1.5 0-2.73-1.23-2.73-2.73v-6.82c0-1.5 1.23-2.73 2.73-2.73h.91V6.659c0-2.51 2.04-4.55 4.55-4.55s4.55 2.04 4.55 4.55v2h.99zm-6.59-4.55c-1.41 0-2.55 1.14-2.55 2.55v2h5.1v-2c0-1.41-1.14-2.55-2.55-2.55z"/>
        </svg>
      ),
    },
    {
      platform: "Web",
      language: "JavaScript/TypeScript",
      description: "SDK para integracion web con soporte para React, Vue, Angular y vanilla JS.",
      features: ["TypeScript nativo", "Framework agnostic", "Responsive design"],
      href: "#",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 3h18v18H3V3zm16.525 13.707c-.131-.821-.666-1.511-2.252-2.155-.552-.259-1.165-.438-1.349-.854-.068-.248-.078-.382-.034-.529.113-.484.687-.629 1.137-.495.293.09.563.315.732.676.775-.507.775-.507 1.316-.844-.203-.314-.304-.451-.439-.586-.473-.528-1.103-.798-2.126-.775l-.528.067c-.507.124-.991.395-1.283.754-.855.968-.611 2.655.543 3.354 1.137.598 2.804.77 3.016 1.365.197.737-.558 1.097-1.261.992-.515-.082-.803-.348-1.12-.787l-1.364.789c.157.359.337.517.607.788 1.3 1.269 4.544 1.202 5.124-1.233.019-.064.137-.632-.019-1.532zM11.086 13h-1.364c0 .896-.003 1.786-.003 2.68 0 .568.029 1.09-.062 1.25-.227.472-.825.407-1.092.319-.271-.1-.509-.305-.654-.57a1.58 1.58 0 01-.086-.194l-1.35.831c.228.469.559.87.99 1.134.66.396 1.545.522 2.471.28.593-.157 1.094-.519 1.363-1.02.327-.612.255-1.358.249-2.193.01-1.175 0-2.347 0-3.517z"/>
        </svg>
      ),
    },
  ];

  const integrationGuides = [
    {
      title: "Inicio rapido",
      description: "Configura tu primera verificacion de identidad en menos de 10 minutos.",
      time: "10 min",
      href: "#",
    },
    {
      title: "Flujo de onboarding",
      description: "Implementa un flujo completo de KYC con verificacion de documentos y biometria.",
      time: "30 min",
      href: "#",
    },
    {
      title: "Firma electronica",
      description: "Agrega firma electronica con validez legal a tus documentos.",
      time: "20 min",
      href: "#",
    },
    {
      title: "Verificacion empresarial",
      description: "Implementa KYB para verificar personas morales y sus representantes.",
      time: "25 min",
      href: "#",
    },
    {
      title: "Consultas PLD/AML",
      description: "Configura consultas automaticas a listas de personas bloqueadas.",
      time: "15 min",
      href: "#",
    },
    {
      title: "Gestion de evidencia",
      description: "Almacena y recupera expedientes digitales con trazabilidad completa.",
      time: "20 min",
      href: "#",
    },
  ];

  const webhookEvents = [
    { event: "verification.completed", description: "Verificacion de identidad completada" },
    { event: "verification.failed", description: "Verificacion de identidad fallida" },
    { event: "document.validated", description: "Documento validado exitosamente" },
    { event: "signature.completed", description: "Firma electronica completada" },
    { event: "signature.rejected", description: "Firma electronica rechazada" },
    { event: "kyb.approved", description: "Verificacion empresarial aprobada" },
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0066ff]/10 border border-[#0066ff]/20 rounded-full mb-6">
                <span className="w-2 h-2 bg-[#0066ff] rounded-full"></span>
                <span className="text-[#0066ff] text-sm font-medium">Recursos para desarrolladores</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
                Documentacion tecnica
              </h1>
              <p className="text-xl text-white/60 mb-8">
                Todo lo que necesitas para integrar JAAK en tu aplicacion: API Reference, SDKs nativos, guias de integracion y documentacion de webhooks.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="#api-reference"
                  className="px-6 py-3 bg-[#0066ff] text-white font-semibold rounded-lg hover:bg-[#0052cc] transition-all"
                >
                  API Reference
                </Link>
                <Link
                  href="#sdks"
                  className="px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all"
                >
                  Ver SDKs
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* API Reference */}
        <section id="api-reference" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                API Reference
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                API RESTful con documentacion completa, ejemplos de codigo y ambiente sandbox para pruebas.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {apiFeatures.map((feature, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-[#0066ff] rounded-xl flex items-center justify-center text-white mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
            <div className="bg-[#0a0a0a] rounded-2xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Explora la API completa</h3>
                  <p className="text-white/60">Documentacion interactiva con ejemplos en cURL, Python, Node.js y mas.</p>
                </div>
                <Link
                  href="#"
                  className="px-6 py-3 bg-[#0066ff] text-white font-semibold rounded-lg hover:bg-[#0052cc] transition-all whitespace-nowrap"
                >
                  Ver API Docs
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SDKs */}
        <section id="sdks" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                SDKs nativos
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                SDKs optimizados para cada plataforma con captura de documentos, biometria facial y prueba de vida integrada.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {sdks.map((sdk, index) => (
                <div key={index} className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center text-gray-700">
                      {sdk.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{sdk.platform}</h3>
                      <span className="text-sm text-gray-500">{sdk.language}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">{sdk.description}</p>
                  <ul className="space-y-2 mb-6">
                    {sdk.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                        <svg className="w-4 h-4 text-[#00d4aa]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={sdk.href}
                    className="inline-flex items-center gap-2 text-[#0066ff] font-semibold hover:gap-3 transition-all"
                  >
                    Ver documentacion
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integration Guides */}
        <section id="guias" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                Guias de integracion
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Tutoriales paso a paso para implementar cada funcionalidad de JAAK en tu aplicacion.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {integrationGuides.map((guide, index) => (
                <Link
                  key={index}
                  href={guide.href}
                  className="group bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 bg-[#0066ff]/10 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#0066ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <span className="text-xs font-medium text-gray-500 bg-gray-200 px-2 py-1 rounded">{guide.time}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#0066ff] transition-colors">{guide.title}</h3>
                  <p className="text-gray-600 text-sm">{guide.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Webhooks */}
        <section id="webhooks" className="py-20 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                  Webhooks
                </h2>
                <p className="text-xl text-white/60 mb-8">
                  Recibe notificaciones en tiempo real sobre eventos importantes en tu integracion.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#00d4aa]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[#00d4aa]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">Tiempo real</h3>
                      <p className="text-white/60 text-sm">Notificaciones instantaneas cuando ocurre un evento.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#00d4aa]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[#00d4aa]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">Firmas HMAC</h3>
                      <p className="text-white/60 text-sm">Verifica la autenticidad de cada webhook recibido.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#00d4aa]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[#00d4aa]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">Reintentos automaticos</h3>
                      <p className="text-white/60 text-sm">Reintentamos la entrega si tu endpoint no responde.</p>
                    </div>
                  </div>
                </div>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all"
                >
                  Ver documentacion de webhooks
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
              <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
                <div className="px-6 py-4 border-b border-white/10">
                  <h3 className="text-white font-semibold">Eventos disponibles</h3>
                </div>
                <div className="divide-y divide-white/10">
                  {webhookEvents.map((item, index) => (
                    <div key={index} className="px-6 py-4 flex items-center justify-between">
                      <code className="text-[#00d4aa] text-sm font-mono">{item.event}</code>
                      <span className="text-white/50 text-sm">{item.description}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Resources */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                Recursos adicionales
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Link href="#" className="group bg-white rounded-xl p-8 hover:shadow-lg transition-shadow border border-gray-100">
                <div className="w-12 h-12 bg-[#0066ff]/10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-[#0066ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#0066ff] transition-colors">Sandbox</h3>
                <p className="text-gray-600">Ambiente de pruebas con datos ficticios para desarrollar sin riesgo.</p>
              </Link>
              <Link href="#" className="group bg-white rounded-xl p-8 hover:shadow-lg transition-shadow border border-gray-100">
                <div className="w-12 h-12 bg-[#0066ff]/10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-[#0066ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#0066ff] transition-colors">Status page</h3>
                <p className="text-gray-600">Monitorea la disponibilidad de todos los servicios en tiempo real.</p>
              </Link>
              <Link href="#" className="group bg-white rounded-xl p-8 hover:shadow-lg transition-shadow border border-gray-100">
                <div className="w-12 h-12 bg-[#0066ff]/10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-[#0066ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#0066ff] transition-colors">Changelog</h3>
                <p className="text-gray-600">Historial de cambios, nuevas funcionalidades y mejoras de la API.</p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#0a0a0a]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
              Necesitas ayuda tecnica?
            </h2>
            <p className="text-xl text-white/60 mb-8">
              Nuestro equipo de ingenieria esta disponible para ayudarte con tu integracion.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contacto"
                className="px-8 py-4 bg-[#0066ff] text-white font-bold rounded-lg hover:bg-[#0052cc] transition-all"
              >
                Contactar soporte tecnico
              </Link>
              <Link
                href="#"
                className="px-8 py-4 bg-white/10 text-white font-bold rounded-lg hover:bg-white/20 transition-all"
              >
                Unirse a Slack
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
