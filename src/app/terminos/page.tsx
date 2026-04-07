import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Términos y Condiciones | JAAK",
  description:
    "Términos y condiciones de uso de los servicios de verificación de identidad de JAAK. Conoce tus derechos y responsabilidades.",
};

export default function TerminosPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-[#0a0a0a]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
              Términos y Condiciones
            </h1>
            <p className="text-xl text-white/60">
              Última actualización: Abril 2026
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              {/* Introducción */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  1. Aceptación de los términos
                </h2>
                <p className="text-gray-600 mb-4">
                  Los presentes Términos y Condiciones (en adelante, los &quot;Términos&quot;) regulan el uso de los servicios de verificación de identidad, firma electrónica y servicios relacionados (en adelante, los &quot;Servicios&quot;) proporcionados por JAAK IT SAPI de CV (en adelante, &quot;JAAK&quot;).
                </p>
                <p className="text-gray-600 mb-4">
                  Al acceder o utilizar nuestros Servicios, usted acepta quedar vinculado por estos Términos. Si no está de acuerdo con alguna parte de estos Términos, no podrá acceder a los Servicios.
                </p>
                <p className="text-gray-600">
                  Estos Términos aplican tanto a usuarios finales que realizan procesos de verificación como a empresas clientes que contratan nuestros servicios mediante acuerdos comerciales específicos.
                </p>
              </div>

              {/* Descripción de servicios */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  2. Descripción de los servicios
                </h2>
                <p className="text-gray-600 mb-4">
                  JAAK proporciona los siguientes servicios de verificación de identidad y cumplimiento regulatorio:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                  <li>
                    <strong>Verificación de identidad (KYC):</strong> Validación de identidad mediante comparación biométrica facial, prueba de vida y validación de documentos oficiales.
                  </li>
                  <li>
                    <strong>Verificación empresarial (KYB):</strong> Validación de personas morales mediante consulta de registros públicos y verificación de representantes legales.
                  </li>
                  <li>
                    <strong>Firma electrónica:</strong> Servicios de firma electrónica simple y avanzada con validez legal conforme a la legislación mexicana.
                  </li>
                  <li>
                    <strong>Gestión de evidencia:</strong> Generación, almacenamiento y consulta de expedientes digitales con valor probatorio.
                  </li>
                  <li>
                    <strong>APIs y SDKs:</strong> Interfaces de programación para integración con sistemas de terceros.
                  </li>
                </ul>
              </div>

              {/* Requisitos de uso */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  3. Requisitos para el uso del servicio
                </h2>

                <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">
                  Para usuarios finales
                </h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                  <li>Ser mayor de 18 años o contar con la capacidad legal para celebrar contratos</li>
                  <li>Proporcionar información veraz, actual y completa durante el proceso de verificación</li>
                  <li>Utilizar documentos de identificación auténticos y vigentes</li>
                  <li>No intentar suplantar la identidad de otra persona</li>
                  <li>Contar con un dispositivo compatible con cámara para la captura biométrica</li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">
                  Para empresas clientes
                </h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                  <li>Estar legalmente constituida conforme a las leyes mexicanas o del país de origen</li>
                  <li>Contar con un contrato de servicios vigente con JAAK</li>
                  <li>Cumplir con la normatividad aplicable en materia de protección de datos personales</li>
                  <li>Obtener los consentimientos necesarios de los usuarios finales</li>
                  <li>Utilizar los Servicios únicamente para los fines acordados contractualmente</li>
                </ul>
              </div>

              {/* Uso aceptable */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  4. Uso aceptable
                </h2>
                <p className="text-gray-600 mb-4">
                  Al utilizar nuestros Servicios, usted se compromete a:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                  <li>Utilizar los Servicios de manera legal y ética</li>
                  <li>No intentar evadir, desactivar o interferir con las medidas de seguridad</li>
                  <li>No realizar ingeniería inversa, descompilar o desensamblar los Servicios</li>
                  <li>No utilizar los Servicios para actividades fraudulentas o ilegales</li>
                  <li>No transmitir virus, malware u otro código malicioso</li>
                  <li>No sobrecargar o interferir con la infraestructura de los Servicios</li>
                  <li>No acceder a datos o cuentas de terceros sin autorización</li>
                </ul>

                <div className="bg-red-50 border border-red-200 rounded-xl p-6 mt-6">
                  <p className="text-gray-700">
                    <strong className="text-red-600">Advertencia:</strong> El uso fraudulento de los Servicios, incluyendo la suplantación de identidad, constituye un delito conforme al Código Penal Federal de México y puede ser sancionado con penas de prisión y multas.
                  </p>
                </div>
              </div>

              {/* Propiedad intelectual */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  5. Propiedad intelectual
                </h2>
                <p className="text-gray-600 mb-4">
                  Todos los derechos de propiedad intelectual sobre los Servicios, incluyendo pero no limitado a software, algoritmos, interfaces, diseños, marcas comerciales, logotipos y contenido, son propiedad exclusiva de JAAK o sus licenciantes.
                </p>
                <p className="text-gray-600 mb-4">
                  La utilización de los Servicios no otorga al usuario ninguna licencia o derecho sobre la propiedad intelectual de JAAK, excepto el derecho limitado de uso conforme a estos Términos.
                </p>
                <p className="text-gray-600">
                  Los datos biométricos y personales proporcionados por los usuarios permanecen siendo propiedad del titular de dichos datos y son tratados conforme a nuestro{" "}
                  <Link href="/privacidad" className="text-[#0066ff] hover:underline">
                    Aviso de Privacidad
                  </Link>.
                </p>
              </div>

              {/* Niveles de servicio */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  6. Disponibilidad y niveles de servicio
                </h2>
                <p className="text-gray-600 mb-4">
                  JAAK se esfuerza por mantener los Servicios disponibles de manera continua. Sin embargo, no garantizamos que los Servicios estarán disponibles en todo momento sin interrupciones.
                </p>
                <p className="text-gray-600 mb-4">
                  Los Servicios pueden no estar disponibles debido a:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                  <li>Mantenimiento programado (notificado con anticipación)</li>
                  <li>Actualizaciones de seguridad urgentes</li>
                  <li>Fallas en la infraestructura de terceros</li>
                  <li>Casos de fuerza mayor</li>
                </ul>
                <p className="text-gray-600">
                  Los clientes empresariales pueden contar con acuerdos de nivel de servicio (SLA) específicos según su contrato comercial.
                </p>
              </div>

              {/* Limitación de responsabilidad */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  7. Limitación de responsabilidad
                </h2>
                <p className="text-gray-600 mb-4">
                  En la máxima medida permitida por la ley aplicable:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                  <li>
                    JAAK no será responsable por daños indirectos, incidentales, especiales, consecuentes o punitivos.
                  </li>
                  <li>
                    La responsabilidad total de JAAK no excederá el monto pagado por el cliente en los 12 meses anteriores al evento que dio origen a la reclamación.
                  </li>
                  <li>
                    JAAK no garantiza que los resultados de verificación serán 100% precisos en todos los casos.
                  </li>
                  <li>
                    JAAK no es responsable de las decisiones tomadas por los clientes basadas en los resultados de verificación.
                  </li>
                </ul>

                <div className="bg-[#0066ff]/5 border border-[#0066ff]/20 rounded-xl p-6 mt-6">
                  <p className="text-gray-700">
                    <strong className="text-[#0066ff]">Nota:</strong> Nuestros servicios de verificación están certificados por iBeta para prueba de vida y cumplen con estándares NIST para verificación de identidad, lo que proporciona altos niveles de precisión y confiabilidad.
                  </p>
                </div>
              </div>

              {/* Indemnización */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  8. Indemnización
                </h2>
                <p className="text-gray-600">
                  Usted acepta indemnizar, defender y mantener indemne a JAAK, sus directores, empleados y agentes, de cualquier reclamación, daño, obligación, pérdida, responsabilidad, costo o deuda que surja de: (a) su uso de los Servicios; (b) su violación de estos Términos; (c) su violación de derechos de terceros; o (d) su provisión de información falsa o fraudulenta.
                </p>
              </div>

              {/* Confidencialidad */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  9. Confidencialidad
                </h2>
                <p className="text-gray-600 mb-4">
                  Tanto JAAK como los usuarios se comprometen a mantener la confidencialidad de la información intercambiada en el marco de los Servicios, salvo:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Cuando exista consentimiento expreso para su divulgación</li>
                  <li>Cuando sea requerido por ley o autoridad competente</li>
                  <li>Cuando la información sea de dominio público</li>
                  <li>Cuando sea necesario para proteger derechos de JAAK en procedimientos legales</li>
                </ul>
              </div>

              {/* Suspensión y terminación */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  10. Suspensión y terminación
                </h2>
                <p className="text-gray-600 mb-4">
                  JAAK puede suspender o terminar su acceso a los Servicios en cualquier momento si:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                  <li>Viola estos Términos o cualquier política aplicable</li>
                  <li>Utiliza los Servicios de manera fraudulenta o ilegal</li>
                  <li>Representa un riesgo de seguridad para los Servicios o terceros</li>
                  <li>No paga las tarifas acordadas (para clientes empresariales)</li>
                  <li>Lo requiere una orden judicial o autoridad competente</li>
                </ul>
                <p className="text-gray-600">
                  La terminación no afectará las obligaciones de confidencialidad y protección de datos, las cuales permanecen vigentes.
                </p>
              </div>

              {/* Modificaciones */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  11. Modificaciones a los términos
                </h2>
                <p className="text-gray-600 mb-4">
                  JAAK se reserva el derecho de modificar estos Términos en cualquier momento. Las modificaciones entrarán en vigor:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Inmediatamente para nuevos usuarios</li>
                  <li>30 días después de la notificación para usuarios existentes</li>
                  <li>Según lo acordado en contratos comerciales específicos para clientes empresariales</li>
                </ul>
              </div>

              {/* Ley aplicable */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  12. Legislación aplicable y jurisdicción
                </h2>
                <p className="text-gray-600 mb-4">
                  Estos Términos se regirán e interpretarán de acuerdo con las leyes de los Estados Unidos Mexicanos.
                </p>
                <p className="text-gray-600">
                  Para cualquier controversia derivada de estos Términos, las partes se someten a la jurisdicción de los tribunales competentes de la Ciudad de México, renunciando a cualquier otro fuero que pudiera corresponderles por razón de su domicilio presente o futuro.
                </p>
              </div>

              {/* Disposiciones generales */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  13. Disposiciones generales
                </h2>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>
                    <strong>Divisibilidad:</strong> Si alguna disposición de estos Términos es declarada nula o inaplicable, las demás disposiciones permanecerán en pleno vigor.
                  </li>
                  <li>
                    <strong>Renuncia:</strong> La falta de ejercicio de un derecho no constituye renuncia al mismo.
                  </li>
                  <li>
                    <strong>Cesión:</strong> Usted no puede ceder sus derechos u obligaciones bajo estos Términos sin nuestro consentimiento previo por escrito.
                  </li>
                  <li>
                    <strong>Acuerdo completo:</strong> Estos Términos, junto con el Aviso de Privacidad y cualquier acuerdo comercial aplicable, constituyen el acuerdo completo entre las partes.
                  </li>
                </ul>
              </div>

              {/* Retención y eliminación */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  14. Retención, Eliminación y Protección de la Información
                </h2>
                <p className="text-gray-600 mb-4">
                  Toda la información, datos personales, documentación y demás activos de información proporcionados por el cliente o generados con motivo de la prestación del servicio serán tratados conforme a principios de confidencialidad, integridad y disponibilidad, y serán conservados únicamente durante un periodo máximo de tres (3) meses posteriores a la conclusión del servicio.
                </p>
                <p className="text-gray-600 mb-4">
                  Durante dicho periodo, la información será resguardada bajo controles de seguridad administrativos y técnicos adecuados, en apego a las mejores prácticas en materia de seguridad de la información y protección de datos personales, incluyendo controles de acceso, cifrado cuando aplique, y monitoreo de accesos.
                </p>
                <p className="text-gray-600 mb-4">
                  Concluido el plazo de retención, el responsable procederá a la eliminación segura, anonimización irreversible o destrucción de la información, utilizando métodos que impidan su recuperación posterior, de conformidad con políticas internas de gestión de la información y estándares aplicables.
                </p>
                <p className="text-gray-600 mb-4">
                  En caso de que exista una obligación legal, regulatoria o contractual que requiera la conservación de cierta información por un periodo mayor, ésta será debidamente resguardada bajo medidas de seguridad reforzadas y limitada exclusivamente para dichos fines.
                </p>
                <p className="text-gray-600">
                  El cliente podrá, dentro del periodo de retención establecido, solicitar la devolución o eliminación anticipada de su información, sujeto a validación de identidad y siempre que no contravenga disposiciones legales aplicables.
                </p>
              </div>

              {/* Contacto */}
              <div className="bg-[#0a0a0a] rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Contacto
                </h2>
                <p className="text-white/70 mb-4">
                  Si tiene preguntas sobre estos Términos y Condiciones, contáctenos:
                </p>
                <div className="space-y-2">
                  <p className="text-white">
                    <strong className="text-[#0066ff]">Correo:</strong>{" "}
                    <a href="mailto:legal@jaak.ai" className="text-white hover:text-[#0066ff] transition-colors">
                      legal@jaak.ai
                    </a>
                  </p>
                  <p className="text-white">
                    <strong className="text-[#0066ff]">Dirección:</strong> Ciudad de México, México
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
