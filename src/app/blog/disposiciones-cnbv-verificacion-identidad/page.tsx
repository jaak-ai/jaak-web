import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guía completa de las disposiciones CNBV para verificación de identidad | JAAK",
  description: "Análisis detallado de los requisitos de la Comisión Nacional Bancaria y de Valores para identificación de clientes. Conoce las obligaciones específicas y cómo cumplirlas.",
  keywords: ["CNBV", "disposiciones CNBV", "verificación de identidad", "regulación financiera", "KYC México", "identificación de clientes"],
  openGraph: {
    title: "Guía completa de las disposiciones CNBV para verificación de identidad",
    description: "Todo lo que necesitas saber sobre los requisitos de la CNBV para la identificación de clientes en instituciones financieras.",
    type: "article",
    publishedTime: "2025-01-03",
    authors: ["JAAK"],
  },
};

export default function DisposicionesCNBV() {
  const relatedPosts = [
    {
      title: "Tendencias KYC 2025: Lo que toda institución financiera debe saber",
      slug: "tendencias-kyc-2025",
      category: "KYC",
    },
    {
      title: "Mejores prácticas de compliance para empresas reguladas en México",
      slug: "mejores-practicas-compliance-mexico",
      category: "Compliance",
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
              <span className="px-3 py-1 bg-purple-500/10 text-purple-500 text-sm font-semibold rounded-full">
                Regulación
              </span>
              <span className="text-white/40 text-sm">3 de enero, 2025</span>
              <span className="text-white/40 text-sm">•</span>
              <span className="text-white/40 text-sm">15 min de lectura</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
              Guía completa de las disposiciones CNBV para verificación de identidad
            </h1>
            <p className="text-xl text-white/60">
              Un análisis detallado de los requisitos de la Comisión Nacional Bancaria y de Valores
              para el proceso de identificación de clientes. Conoce las obligaciones específicas
              y cómo cumplirlas de manera eficiente.
            </p>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">

              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                La Comisión Nacional Bancaria y de Valores (CNBV) establece el marco regulatorio
                que deben seguir las instituciones financieras en México para la identificación
                y conocimiento de sus clientes. Cumplir con estas disposiciones no es solo una
                obligación legal, sino una práctica fundamental para prevenir el lavado de dinero
                y proteger al sistema financiero.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                Marco regulatorio aplicable
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Las principales disposiciones que regulan la verificación de identidad en México incluyen:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
                <li><strong>Disposiciones de carácter general aplicables a las instituciones de crédito</strong> (CUB)</li>
                <li><strong>Ley Federal para la Prevención e Identificación de Operaciones con Recursos de Procedencia Ilícita</strong> (LFPIORPI)</li>
                <li><strong>Disposiciones de la UIF</strong> sobre prevención de lavado de dinero</li>
                <li><strong>Circular Única de Bancos</strong> y sus modificaciones</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                Requisitos de identificación para personas físicas
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Para abrir una cuenta o establecer una relación comercial con una persona física,
                las instituciones deben recabar y verificar la siguiente información:
              </p>

              <div className="bg-gray-50 rounded-xl p-6 my-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Datos de identificación obligatorios</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#0066ff] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Nombre completo (sin abreviaturas)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#0066ff] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Fecha de nacimiento</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#0066ff] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>País de nacimiento y nacionalidad</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#0066ff] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>CURP (Clave Única de Registro de Población)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#0066ff] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>RFC (Registro Federal de Contribuyentes) cuando aplique</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#0066ff] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Domicilio particular</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#0066ff] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Ocupación, profesión o actividad</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#0066ff] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Teléfono y correo electrónico</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                Documentos de identificación aceptados
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                La CNBV establece los documentos válidos para acreditar la identidad:
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-[#0066ff]/5 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3">Documentos primarios</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Credencial para votar (INE/IFE)</li>
                    <li>• Pasaporte vigente</li>
                    <li>• Cédula profesional</li>
                    <li>• Forma migratoria (extranjeros)</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3">Comprobantes de domicilio</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Recibo de servicios (luz, agua, gas)</li>
                    <li>• Estado de cuenta bancario</li>
                    <li>• Constancia de residencia</li>
                    <li>• Antigüedad máxima: 3 meses</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                Verificación de identidad no presencial
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Las disposiciones permiten la verificación remota siempre que se cumplan
                requisitos específicos de seguridad:
              </p>

              <div className="bg-[#0066ff]/5 border-l-4 border-[#0066ff] p-6 my-8">
                <p className="text-gray-700 font-medium mb-2">Requisitos para verificación remota:</p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Captura de documento de identidad con tecnología que verifique autenticidad</li>
                  <li>• Comparación biométrica facial contra el documento</li>
                  <li>• Prueba de vida (liveness detection) para confirmar presencia del titular</li>
                  <li>• Validación contra bases de datos oficiales (INE, RENAPO)</li>
                  <li>• Geolocalización del dispositivo cuando sea aplicable</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                Niveles de cuentas y requisitos escalonados
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                La regulación establece diferentes niveles de cuenta con requisitos
                proporcionales al riesgo:
              </p>

              <div className="overflow-x-auto my-8">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-[#0a0a0a] text-white">
                      <th className="px-4 py-3 text-left">Nivel</th>
                      <th className="px-4 py-3 text-left">Límites</th>
                      <th className="px-4 py-3 text-left">Requisitos</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="bg-white">
                      <td className="px-4 py-3 font-medium">Nivel 1</td>
                      <td className="px-4 py-3 text-gray-600">Hasta 750 UDIs mensuales</td>
                      <td className="px-4 py-3 text-gray-600">Datos básicos, número telefónico</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-4 py-3 font-medium">Nivel 2</td>
                      <td className="px-4 py-3 text-gray-600">Hasta 3,000 UDIs mensuales</td>
                      <td className="px-4 py-3 text-gray-600">Identificación oficial, CURP</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-4 py-3 font-medium">Nivel 3</td>
                      <td className="px-4 py-3 text-gray-600">Hasta 10,000 UDIs mensuales</td>
                      <td className="px-4 py-3 text-gray-600">Verificación biométrica, comprobante domicilio</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-4 py-3 font-medium">Nivel 4</td>
                      <td className="px-4 py-3 text-gray-600">Sin límite</td>
                      <td className="px-4 py-3 text-gray-600">KYC completo, verificación presencial o equivalente</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                Obligaciones de conservación de información
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Las instituciones deben mantener registros completos de la verificación:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
                <li><strong>Tiempo de conservación:</strong> Mínimo 10 años después de terminada la relación</li>
                <li><strong>Formato:</strong> Documentos digitalizados con calidad suficiente para su lectura</li>
                <li><strong>Accesibilidad:</strong> Disponibles para revisión de autoridades en 72 horas</li>
                <li><strong>Integridad:</strong> Mecanismos que garanticen que no han sido alterados</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                Personas Políticamente Expuestas (PEPs)
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Se requiere especial atención para identificar y gestionar relaciones con PEPs:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
                <li>Identificación proactiva mediante consulta de bases de datos especializadas</li>
                <li>Debida diligencia reforzada para PEPs y sus familiares cercanos</li>
                <li>Aprobación de alta gerencia para establecer la relación</li>
                <li>Monitoreo continuo de transacciones</li>
                <li>Documentación del origen de los recursos</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                Sanciones por incumplimiento
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                El incumplimiento de las disposiciones puede resultar en:
              </p>
              <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8">
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Multas administrativas</strong> de hasta 100,000 UMAs</li>
                  <li>• <strong>Suspensión de operaciones</strong> para actividades específicas</li>
                  <li>• <strong>Revocación de licencia</strong> en casos graves</li>
                  <li>• <strong>Responsabilidad penal</strong> para funcionarios en casos de omisión dolosa</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                Mejores prácticas para cumplimiento
              </h2>
              <ol className="list-decimal pl-6 mb-6 space-y-3 text-gray-600">
                <li>
                  <strong>Automatizar la verificación:</strong> Utilizar tecnología que valide
                  documentos y biometría en tiempo real.
                </li>
                <li>
                  <strong>Integrar bases de datos oficiales:</strong> Conectar con INE, RENAPO
                  y SAT para validación inmediata.
                </li>
                <li>
                  <strong>Implementar alertas:</strong> Sistemas que identifiquen automáticamente
                  inconsistencias o riesgos.
                </li>
                <li>
                  <strong>Capacitar al personal:</strong> Entrenamiento continuo sobre regulaciones
                  y detección de fraude.
                </li>
                <li>
                  <strong>Auditorías periódicas:</strong> Revisar regularmente los procesos y
                  actualizar según nuevas disposiciones.
                </li>
                <li>
                  <strong>Documentar todo:</strong> Mantener evidencia completa de cada
                  verificación realizada.
                </li>
              </ol>

              <div className="bg-[#0a0a0a] rounded-xl p-8 my-12">
                <h3 className="text-xl font-bold text-white mb-4">
                  Conclusión
                </h3>
                <p className="text-white/80">
                  El cumplimiento de las disposiciones CNBV no debe verse como una carga
                  regulatoria, sino como una oportunidad para fortalecer la relación con
                  los clientes y proteger a la institución. La tecnología moderna permite
                  cumplir con todos los requisitos mientras se ofrece una experiencia de
                  usuario excepcional. Las instituciones que inviertan en soluciones
                  robustas de verificación estarán mejor posicionadas para el futuro.
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
              Cumple con la CNBV sin complicaciones
            </h2>
            <p className="text-white/60 text-lg mb-8">
              JAAK te ayuda a verificar identidades cumpliendo al 100% con las disposiciones regulatorias.
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
