import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Terminos y Condiciones | JAAK",
  description:
    "Terminos y condiciones de uso de los servicios de verificacion de identidad de JAAK. Conoce tus derechos y responsabilidades.",
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
              Terminos y Condiciones
            </h1>
            <p className="text-xl text-white/60">
              Ultima actualizacion: Enero 2025
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              {/* Introduccion */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  1. Aceptacion de los terminos
                </h2>
                <p className="text-gray-600 mb-4">
                  Los presentes Terminos y Condiciones (en adelante, los &quot;Terminos&quot;) regulan el uso de los servicios de verificacion de identidad, firma electronica y servicios relacionados (en adelante, los &quot;Servicios&quot;) proporcionados por JAAK IT SAPI de CV (en adelante, &quot;JAAK&quot;).
                </p>
                <p className="text-gray-600 mb-4">
                  Al acceder o utilizar nuestros Servicios, usted acepta quedar vinculado por estos Terminos. Si no esta de acuerdo con alguna parte de estos Terminos, no podra acceder a los Servicios.
                </p>
                <p className="text-gray-600">
                  Estos Terminos aplican tanto a usuarios finales que realizan procesos de verificacion como a empresas clientes que contratan nuestros servicios mediante acuerdos comerciales especificos.
                </p>
              </div>

              {/* Descripcion de servicios */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  2. Descripcion de los servicios
                </h2>
                <p className="text-gray-600 mb-4">
                  JAAK proporciona los siguientes servicios de verificacion de identidad y cumplimiento regulatorio:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                  <li>
                    <strong>Verificacion de identidad (KYC):</strong> Validacion de identidad mediante comparacion biometrica facial, prueba de vida y validacion de documentos oficiales.
                  </li>
                  <li>
                    <strong>Verificacion empresarial (KYB):</strong> Validacion de personas morales mediante consulta de registros publicos y verificacion de representantes legales.
                  </li>
                  <li>
                    <strong>Firma electronica:</strong> Servicios de firma electronica simple y avanzada con validez legal conforme a la legislacion mexicana.
                  </li>
                  <li>
                    <strong>Gestion de evidencia:</strong> Generacion, almacenamiento y consulta de expedientes digitales con valor probatorio.
                  </li>
                  <li>
                    <strong>APIs y SDKs:</strong> Interfaces de programacion para integracion con sistemas de terceros.
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
                  <li>Ser mayor de 18 anios o contar con la capacidad legal para celebrar contratos</li>
                  <li>Proporcionar informacion veraz, actual y completa durante el proceso de verificacion</li>
                  <li>Utilizar documentos de identificacion autenticos y vigentes</li>
                  <li>No intentar suplantar la identidad de otra persona</li>
                  <li>Contar con un dispositivo compatible con camara para la captura biometrica</li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">
                  Para empresas clientes
                </h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                  <li>Estar legalmente constituida conforme a las leyes mexicanas o del pais de origen</li>
                  <li>Contar con un contrato de servicios vigente con JAAK</li>
                  <li>Cumplir con la normatividad aplicable en materia de proteccion de datos personales</li>
                  <li>Obtener los consentimientos necesarios de los usuarios finales</li>
                  <li>Utilizar los Servicios unicamente para los fines acordados contractualmente</li>
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
                  <li>Utilizar los Servicios de manera legal y etica</li>
                  <li>No intentar evadir, desactivar o interferir con las medidas de seguridad</li>
                  <li>No realizar ingenieria inversa, descompilar o desensamblar los Servicios</li>
                  <li>No utilizar los Servicios para actividades fraudulentas o ilegales</li>
                  <li>No transmitir virus, malware u otro codigo malicioso</li>
                  <li>No sobrecargar o interferir con la infraestructura de los Servicios</li>
                  <li>No acceder a datos o cuentas de terceros sin autorizacion</li>
                </ul>

                <div className="bg-red-50 border border-red-200 rounded-xl p-6 mt-6">
                  <p className="text-gray-700">
                    <strong className="text-red-600">Advertencia:</strong> El uso fraudulento de los Servicios, incluyendo la suplantacion de identidad, constituye un delito conforme al Codigo Penal Federal de Mexico y puede ser sancionado con penas de prision y multas.
                  </p>
                </div>
              </div>

              {/* Propiedad intelectual */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  5. Propiedad intelectual
                </h2>
                <p className="text-gray-600 mb-4">
                  Todos los derechos de propiedad intelectual sobre los Servicios, incluyendo pero no limitado a software, algoritmos, interfaces, disenos, marcas comerciales, logotipos y contenido, son propiedad exclusiva de JAAK o sus licenciantes.
                </p>
                <p className="text-gray-600 mb-4">
                  La utilizacion de los Servicios no otorga al usuario ninguna licencia o derecho sobre la propiedad intelectual de JAAK, excepto el derecho limitado de uso conforme a estos Terminos.
                </p>
                <p className="text-gray-600">
                  Los datos biometricos y personales proporcionados por los usuarios permanecen siendo propiedad del titular de dichos datos y son tratados conforme a nuestro{" "}
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
                  JAAK se esfuerza por mantener los Servicios disponibles de manera continua. Sin embargo, no garantizamos que los Servicios estaran disponibles en todo momento sin interrupciones.
                </p>
                <p className="text-gray-600 mb-4">
                  Los Servicios pueden no estar disponibles debido a:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                  <li>Mantenimiento programado (notificado con anticipacion)</li>
                  <li>Actualizaciones de seguridad urgentes</li>
                  <li>Fallas en la infraestructura de terceros</li>
                  <li>Casos de fuerza mayor</li>
                </ul>
                <p className="text-gray-600">
                  Los clientes empresariales pueden contar con acuerdos de nivel de servicio (SLA) especificos segun su contrato comercial.
                </p>
              </div>

              {/* Limitacion de responsabilidad */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  7. Limitacion de responsabilidad
                </h2>
                <p className="text-gray-600 mb-4">
                  En la maxima medida permitida por la ley aplicable:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                  <li>
                    JAAK no sera responsable por danos indirectos, incidentales, especiales, consecuentes o punitivos.
                  </li>
                  <li>
                    La responsabilidad total de JAAK no excedera el monto pagado por el cliente en los 12 meses anteriores al evento que dio origen a la reclamacion.
                  </li>
                  <li>
                    JAAK no garantiza que los resultados de verificacion seran 100% precisos en todos los casos.
                  </li>
                  <li>
                    JAAK no es responsable de las decisiones tomadas por los clientes basadas en los resultados de verificacion.
                  </li>
                </ul>

                <div className="bg-[#0066ff]/5 border border-[#0066ff]/20 rounded-xl p-6 mt-6">
                  <p className="text-gray-700">
                    <strong className="text-[#0066ff]">Nota:</strong> Nuestros servicios de verificacion estan certificados por iBeta para prueba de vida y cumplen con estandares NIST para verificacion de identidad, lo que proporciona altos niveles de precision y confiabilidad.
                  </p>
                </div>
              </div>

              {/* Indemnizacion */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  8. Indemnizacion
                </h2>
                <p className="text-gray-600">
                  Usted acepta indemnizar, defender y mantener indemne a JAAK, sus directores, empleados y agentes, de cualquier reclamacion, dano, obligacion, perdida, responsabilidad, costo o deuda que surja de: (a) su uso de los Servicios; (b) su violacion de estos Terminos; (c) su violacion de derechos de terceros; o (d) su provision de informacion falsa o fraudulenta.
                </p>
              </div>

              {/* Confidencialidad */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  9. Confidencialidad
                </h2>
                <p className="text-gray-600 mb-4">
                  Tanto JAAK como los usuarios se comprometen a mantener la confidencialidad de la informacion intercambiada en el marco de los Servicios, salvo:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Cuando exista consentimiento expreso para su divulgacion</li>
                  <li>Cuando sea requerido por ley o autoridad competente</li>
                  <li>Cuando la informacion sea de dominio publico</li>
                  <li>Cuando sea necesario para proteger derechos de JAAK en procedimientos legales</li>
                </ul>
              </div>

              {/* Suspension y terminacion */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  10. Suspension y terminacion
                </h2>
                <p className="text-gray-600 mb-4">
                  JAAK puede suspender o terminar su acceso a los Servicios en cualquier momento si:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                  <li>Viola estos Terminos o cualquier politica aplicable</li>
                  <li>Utiliza los Servicios de manera fraudulenta o ilegal</li>
                  <li>Representa un riesgo de seguridad para los Servicios o terceros</li>
                  <li>No paga las tarifas acordadas (para clientes empresariales)</li>
                  <li>Lo requiere una orden judicial o autoridad competente</li>
                </ul>
                <p className="text-gray-600">
                  La terminacion no afectara las obligaciones de confidencialidad y proteccion de datos, las cuales permanecen vigentes.
                </p>
              </div>

              {/* Modificaciones */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  11. Modificaciones a los terminos
                </h2>
                <p className="text-gray-600 mb-4">
                  JAAK se reserva el derecho de modificar estos Terminos en cualquier momento. Las modificaciones entraran en vigor:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Inmediatamente para nuevos usuarios</li>
                  <li>30 dias despues de la notificacion para usuarios existentes</li>
                  <li>Segun lo acordado en contratos comerciales especificos para clientes empresariales</li>
                </ul>
              </div>

              {/* Ley aplicable */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  12. Legislacion aplicable y jurisdiccion
                </h2>
                <p className="text-gray-600 mb-4">
                  Estos Terminos se regiran e interpretaran de acuerdo con las leyes de los Estados Unidos Mexicanos.
                </p>
                <p className="text-gray-600">
                  Para cualquier controversia derivada de estos Terminos, las partes se someten a la jurisdiccion de los tribunales competentes de la Ciudad de Mexico, renunciando a cualquier otro fuero que pudiera corresponderles por razon de su domicilio presente o futuro.
                </p>
              </div>

              {/* Disposiciones generales */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  13. Disposiciones generales
                </h2>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>
                    <strong>Divisibilidad:</strong> Si alguna disposicion de estos Terminos es declarada nula o inaplicable, las demas disposiciones permaneceran en pleno vigor.
                  </li>
                  <li>
                    <strong>Renuncia:</strong> La falta de ejercicio de un derecho no constituye renuncia al mismo.
                  </li>
                  <li>
                    <strong>Cesion:</strong> Usted no puede ceder sus derechos u obligaciones bajo estos Terminos sin nuestro consentimiento previo por escrito.
                  </li>
                  <li>
                    <strong>Acuerdo completo:</strong> Estos Terminos, junto con el Aviso de Privacidad y cualquier acuerdo comercial aplicable, constituyen el acuerdo completo entre las partes.
                  </li>
                </ul>
              </div>

              {/* Contacto */}
              <div className="bg-[#0a0a0a] rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Contacto
                </h2>
                <p className="text-white/70 mb-4">
                  Si tiene preguntas sobre estos Terminos y Condiciones, contactenos:
                </p>
                <div className="space-y-2">
                  <p className="text-white">
                    <strong className="text-[#0066ff]">Correo:</strong>{" "}
                    <a href="mailto:legal@jaak.ai" className="text-white hover:text-[#0066ff] transition-colors">
                      legal@jaak.ai
                    </a>
                  </p>
                  <p className="text-white">
                    <strong className="text-[#0066ff]">Direccion:</strong> Ciudad de Mexico, Mexico
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
