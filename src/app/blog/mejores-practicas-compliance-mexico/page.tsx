import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mejores prácticas de compliance para empresas reguladas en México | JAAK",
  description: "Desde LFPIORPI hasta las disposiciones de la UIF, esta guía te ayuda a implementar un programa de cumplimiento robusto y auditable para empresas reguladas en México.",
  keywords: ["compliance México", "LFPIORPI", "UIF", "cumplimiento regulatorio", "PLD", "prevención lavado de dinero", "empresas reguladas"],
  openGraph: {
    title: "Mejores prácticas de compliance para empresas reguladas en México",
    description: "Guía completa para implementar un programa de cumplimiento robusto en el contexto regulatorio mexicano.",
    type: "article",
    publishedTime: "2025-12-10",
    authors: ["JAAK"],
  },
};

export default function MejoresPracticasCompliance() {
  const relatedPosts = [
    {
      title: "Guía completa de las disposiciones CNBV para verificación de identidad",
      slug: "disposiciones-cnbv-verificacion-identidad",
      category: "Regulación",
    },
    {
      title: "Tendencias KYC 2026: Lo que toda institución financiera debe saber",
      slug: "tendencias-kyc-2026",
      category: "KYC",
    },
    {
      title: "Prevención de fraude en el onboarding digital: Mejores prácticas",
      slug: "prevencion-fraude-onboarding-digital",
      category: "Fraude",
    },
  ];

  return (
    <>
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
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Volver al blog
              </Link>
            </div>
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-indigo-500/10 text-indigo-500 text-sm font-semibold rounded-full">
                Compliance
              </span>
              <span className="text-white/40 text-sm">10 de diciembre, 2025</span>
              <span className="text-white/40 text-sm">•</span>
              <span className="text-white/40 text-sm">14 min de lectura</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
              Mejores prácticas de compliance para empresas reguladas en México
            </h1>
            <p className="text-xl text-white/60">
              Desde LFPIORPI hasta las disposiciones de la UIF, navegar el ecosistema regulatorio
              mexicano puede ser complejo. Esta guía te ayuda a implementar un programa de
              cumplimiento robusto y auditable.
            </p>
          </div>
        </section>

        {/* Featured Image */}
        <section className="bg-white pt-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/blog/mejores-practicas-compliance-mexico.png"
                alt="Mejores prácticas de compliance para empresas reguladas en México"
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
                El cumplimiento regulatorio en México no es solo una obligación legal, sino una
                ventaja competitiva. Las empresas con programas de compliance sólidos generan
                mayor confianza en clientes, inversionistas y autoridades. Esta guía ofrece
                un marco práctico para construir y mantener un programa de cumplimiento efectivo.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                El ecosistema regulatorio mexicano
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Las empresas reguladas en México deben cumplir con múltiples normativas que
                se interrelacionan. Entender este ecosistema es el primer paso para un
                compliance efectivo.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-indigo-50 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3">LFPIORPI</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    Ley Federal para la Prevención e Identificación de Operaciones con
                    Recursos de Procedencia Ilícita
                  </p>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Define actividades vulnerables</li>
                    <li>• Establece umbrales de reporte</li>
                    <li>• Obligaciones de identificación de clientes</li>
                  </ul>
                </div>

                <div className="bg-indigo-50 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3">Disposiciones UIF</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    Unidad de Inteligencia Financiera - SHCP
                  </p>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Reportes de operaciones inusuales</li>
                    <li>• Reportes de operaciones relevantes</li>
                    <li>• Conservación de documentación</li>
                  </ul>
                </div>

                <div className="bg-indigo-50 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3">Disposiciones CNBV</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    Comisión Nacional Bancaria y de Valores
                  </p>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Requisitos de identificación de clientes</li>
                    <li>• Políticas de conocimiento del cliente (KYC)</li>
                    <li>• Monitoreo de operaciones</li>
                  </ul>
                </div>

                <div className="bg-indigo-50 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3">LFPDPPP</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    Ley Federal de Protección de Datos Personales
                  </p>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Tratamiento de datos personales</li>
                    <li>• Derechos ARCO</li>
                    <li>• Avisos de privacidad</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                Los pilares de un programa de compliance
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Un programa de cumplimiento efectivo se construye sobre cinco pilares fundamentales:
              </p>

              <div className="space-y-6 my-8">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white text-sm font-bold">1</span>
                    Gobernanza y cultura de cumplimiento
                  </h3>
                  <p className="text-gray-600 mb-4">
                    El cumplimiento debe ser una prioridad desde la alta dirección hasta cada empleado.
                  </p>
                  <ul className="space-y-2 text-gray-600 ml-10">
                    <li>• Oficial de cumplimiento designado con autoridad y recursos</li>
                    <li>• Comité de cumplimiento con participación de alta dirección</li>
                    <li>• Políticas escritas y accesibles para todo el personal</li>
                    <li>• Tono desde arriba: liderazgo que modela comportamiento ético</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white text-sm font-bold">2</span>
                    Evaluación y gestión de riesgos
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Identificar, medir y mitigar los riesgos específicos de tu organización.
                  </p>
                  <ul className="space-y-2 text-gray-600 ml-10">
                    <li>• Matriz de riesgos actualizada periódicamente</li>
                    <li>• Clasificación de clientes por nivel de riesgo</li>
                    <li>• Debida diligencia reforzada para clientes de alto riesgo</li>
                    <li>• Monitoreo de cambios en el perfil de riesgo</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white text-sm font-bold">3</span>
                    Políticas y procedimientos
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Documentar claramente los procesos para asegurar consistencia y auditabilidad.
                  </p>
                  <ul className="space-y-2 text-gray-600 ml-10">
                    <li>• Manual de PLD/FT actualizado</li>
                    <li>• Procedimientos de identificación de clientes (KYC)</li>
                    <li>• Protocolos de escalamiento para casos sospechosos</li>
                    <li>• Políticas de conservación de documentos</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white text-sm font-bold">4</span>
                    Capacitación continua
                  </h3>
                  <p className="text-gray-600 mb-4">
                    El personal capacitado es la primera línea de defensa.
                  </p>
                  <ul className="space-y-2 text-gray-600 ml-10">
                    <li>• Programa de capacitación inicial para nuevos empleados</li>
                    <li>• Actualizaciones regulares sobre cambios regulatorios</li>
                    <li>• Capacitación específica por rol y nivel de exposición</li>
                    <li>• Evaluaciones para verificar comprensión</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white text-sm font-bold">5</span>
                    Monitoreo y auditoría
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Verificar continuamente que los controles funcionan como se espera.
                  </p>
                  <ul className="space-y-2 text-gray-600 ml-10">
                    <li>• Monitoreo de transacciones en tiempo real</li>
                    <li>• Auditorías internas periódicas</li>
                    <li>• Pruebas de efectividad de controles</li>
                    <li>• Revisiones independientes por terceros</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                Conocimiento del cliente (KYC)
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                El KYC es la base de cualquier programa de cumplimiento. Debe incluir:
              </p>

              <div className="bg-[#0066ff]/5 border-l-4 border-[#0066ff] p-6 my-8">
                <h3 className="font-bold text-gray-900 mb-3">Proceso de KYC robusto:</h3>
                <ol className="list-decimal pl-4 space-y-2 text-gray-600">
                  <li><strong>Identificación:</strong> Obtener datos y documentos que acrediten la identidad</li>
                  <li><strong>Verificación:</strong> Confirmar que la información es auténtica y válida</li>
                  <li><strong>Conocimiento:</strong> Entender el propósito de la relación y actividad esperada</li>
                  <li><strong>Monitoreo:</strong> Supervisar la actividad para detectar inconsistencias</li>
                  <li><strong>Actualización:</strong> Mantener la información vigente a lo largo de la relación</li>
                </ol>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                Debida diligencia según nivel de riesgo
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                No todos los clientes requieren el mismo nivel de escrutinio. Implementa un
                enfoque basado en riesgo:
              </p>

              <div className="overflow-x-auto my-8">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-[#0a0a0a] text-white">
                      <th className="px-4 py-3 text-left">Nivel de riesgo</th>
                      <th className="px-4 py-3 text-left">Características</th>
                      <th className="px-4 py-3 text-left">Debida diligencia</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="bg-green-50">
                      <td className="px-4 py-3 font-medium">Bajo</td>
                      <td className="px-4 py-3 text-gray-600">Clientes estándar, operaciones típicas</td>
                      <td className="px-4 py-3 text-gray-600">Simplificada: datos básicos, verificación estándar</td>
                    </tr>
                    <tr className="bg-yellow-50">
                      <td className="px-4 py-3 font-medium">Medio</td>
                      <td className="px-4 py-3 text-gray-600">Actividad comercial, montos moderados</td>
                      <td className="px-4 py-3 text-gray-600">Estándar: verificación completa, monitoreo regular</td>
                    </tr>
                    <tr className="bg-red-50">
                      <td className="px-4 py-3 font-medium">Alto</td>
                      <td className="px-4 py-3 text-gray-600">PEPs, jurisdicciones de riesgo, actividades sensibles</td>
                      <td className="px-4 py-3 text-gray-600">Reforzada: aprobación de alta gerencia, monitoreo intensivo</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                Personas Políticamente Expuestas (PEPs)
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Los PEPs requieren atención especial debido a su mayor exposición al riesgo de corrupción:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
                <li><strong>Identificación proactiva:</strong> Consultar bases de datos especializadas al inicio y periódicamente</li>
                <li><strong>Familiares y asociados:</strong> Extender el escrutinio a personas cercanas al PEP</li>
                <li><strong>Aprobación especial:</strong> Requiere autorización de alta gerencia para establecer relación</li>
                <li><strong>Origen de fondos:</strong> Documentar de dónde provienen los recursos</li>
                <li><strong>Monitoreo reforzado:</strong> Revisión más frecuente de actividad transaccional</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                Reportes a la UIF
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Cumplir con las obligaciones de reporte es fundamental:
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3">Reportes de Operaciones Relevantes</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Operaciones que superan los umbrales establecidos en la LFPIORPI.
                  </p>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Plazo: 17 días hábiles del mes siguiente</li>
                    <li>• Formato: A través del portal de la UIF</li>
                    <li>• Contenido: Datos del cliente y de la operación</li>
                  </ul>
                </div>

                <div className="border border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3">Reportes de Operaciones Inusuales</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Operaciones que presentan características atípicas o sospechosas.
                  </p>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Plazo: 24 horas de detectada</li>
                    <li>• Análisis: Documentar las razones de sospecha</li>
                    <li>• Confidencialidad: No alertar al cliente</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                Conservación de documentos
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                La documentación es tu defensa ante autoridades y auditorías:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
                <li><strong>Tiempo mínimo:</strong> 10 años después de terminada la relación comercial</li>
                <li><strong>Formato:</strong> Original o copia digitalizada con calidad legible</li>
                <li><strong>Accesibilidad:</strong> Disponible para autoridades en máximo 72 horas</li>
                <li><strong>Integridad:</strong> Mecanismos que garanticen que no ha sido alterada</li>
                <li><strong>Organización:</strong> Sistema que permita búsqueda y recuperación eficiente</li>
              </ul>

              <div className="bg-gray-50 rounded-xl p-8 my-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Documentos a conservar
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span className="text-gray-600">Expediente de identificación del cliente</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span className="text-gray-600">Copias de documentos de identidad</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span className="text-gray-600">Resultados de verificaciones biométricas</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span className="text-gray-600">Historial de operaciones</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span className="text-gray-600">Reportes enviados a autoridades</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span className="text-gray-600">Evidencia de capacitaciones</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span className="text-gray-600">Actas de comité de cumplimiento</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span className="text-gray-600">Resultados de auditorías</span>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                Sanciones por incumplimiento
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Las consecuencias de no cumplir pueden ser severas:
              </p>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8">
                <h3 className="font-bold text-gray-900 mb-3">Posibles sanciones:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Multas:</strong> Hasta 65,000 UMAs por infracción (~$7.6 millones MXN)</li>
                  <li>• <strong>Suspensión:</strong> De actividades o de ciertas operaciones</li>
                  <li>• <strong>Revocación:</strong> De licencia para operar</li>
                  <li>• <strong>Responsabilidad penal:</strong> Para funcionarios en casos de omisión dolosa</li>
                  <li>• <strong>Daño reputacional:</strong> Pérdida de confianza de clientes e inversionistas</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                Tecnología como aliado del compliance
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                La tecnología moderna hace posible cumplir de manera más eficiente:
              </p>

              <div className="grid gap-4 my-8">
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Verificación de identidad automatizada</h4>
                    <p className="text-gray-600">Valida documentos, biometría y datos en segundos con consistencia perfecta.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Monitoreo de transacciones</h4>
                    <p className="text-gray-600">Detecta patrones inusuales automáticamente y genera alertas en tiempo real.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Screening de listas</h4>
                    <p className="text-gray-600">Consulta automática de PEPs, sanciones y listas negras nacionales e internacionales.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Generación de reportes</h4>
                    <p className="text-gray-600">Automatiza la creación de reportes regulatorios en los formatos requeridos.</p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                Checklist de cumplimiento
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Usa esta lista para evaluar el estado de tu programa:
              </p>

              <div className="bg-gray-50 rounded-xl p-6 my-8">
                <div className="space-y-3">
                  {[
                    "Oficial de cumplimiento designado y capacitado",
                    "Manual de PLD/FT documentado y actualizado",
                    "Matriz de riesgos vigente",
                    "Procedimientos de KYC implementados",
                    "Sistema de monitoreo de operaciones activo",
                    "Capacitación anual a todo el personal",
                    "Consulta periódica de listas de sanciones y PEPs",
                    "Proceso de reporte a UIF funcionando",
                    "Documentación conservada según normativa",
                    "Auditorías internas realizadas",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-5 h-5 border-2 border-gray-300 rounded flex-shrink-0"></div>
                      <span className="text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#0a0a0a] rounded-xl p-8 my-12">
                <h3 className="text-xl font-bold text-white mb-4">
                  Conclusión
                </h3>
                <p className="text-white/80">
                  Un programa de compliance efectivo no es un gasto, es una inversión que
                  protege tu negocio, fortalece la confianza de tus clientes y te posiciona
                  favorablemente ante reguladores. En un entorno cada vez más vigilado, las
                  empresas con cultura de cumplimiento sólida serán las que prosperen.
                </p>
              </div>

            </div>
          </div>
        </article>

        {/* Author Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-[#0066ff] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">J</span>
              </div>
              <div>
                <p className="font-bold text-gray-900">Equipo JAAK</p>
                <p className="text-gray-600">
                  Especialistas en verificación de identidad y cumplimiento regulatorio para el sector financiero mexicano.
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
                  <span className="inline-block px-3 py-1 bg-[#0066ff]/10 text-[#0066ff] text-xs font-semibold rounded-full mb-3">
                    {post.category}
                  </span>
                  <h3 className="font-bold text-gray-900 hover:text-[#0066ff] transition-colors">
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
              Fortalece tu programa de cumplimiento
            </h2>
            <p className="text-white/60 text-lg mb-8">
              JAAK te ayuda a cumplir con LFPIORPI, CNBV y UIF de manera eficiente y auditable.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contacto"
                className="px-8 py-4 bg-[#0066ff] text-white font-bold rounded-lg hover:bg-[#0052cc] transition-all"
              >
                Solicitar demo
              </Link>
              <Link
                href="/cumplimiento"
                className="px-8 py-4 bg-white/10 text-white font-bold rounded-lg hover:bg-white/20 transition-all"
              >
                Ver soluciones de cumplimiento
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
