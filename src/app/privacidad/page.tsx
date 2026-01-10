import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Aviso de Privacidad | JAAK",
  description:
    "Aviso de privacidad de JAAK. Conoce como recopilamos, usamos y protegemos tus datos personales conforme a la LFPDPPP.",
};

export default function PrivacidadPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-[#0a0a0a]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
              Aviso de Privacidad
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
              {/* Identidad del Responsable */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  1. Identidad y domicilio del responsable
                </h2>
                <p className="text-gray-600 mb-4">
                  JAAK IT SAPI de CV (en adelante &quot;JAAK&quot;), con domicilio en Ciudad de Mexico, Mexico, es responsable del tratamiento de sus datos personales conforme a lo establecido en la Ley Federal de Proteccion de Datos Personales en Posesion de los Particulares (LFPDPPP) y su Reglamento.
                </p>
                <p className="text-gray-600">
                  Para cualquier cuestion relacionada con el tratamiento de sus datos personales, puede contactarnos a traves de:{" "}
                  <a href="mailto:privacidad@jaak.ai" className="text-[#0066ff] hover:underline">
                    privacidad@jaak.ai
                  </a>
                </p>
              </div>

              {/* Datos que recopilamos */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  2. Datos personales que recopilamos
                </h2>
                <p className="text-gray-600 mb-4">
                  Para las finalidades senaladas en el presente aviso de privacidad, podemos recabar las siguientes categorias de datos personales:
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">
                  Datos de identificacion
                </h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                  <li>Nombre completo</li>
                  <li>Fecha de nacimiento</li>
                  <li>Nacionalidad</li>
                  <li>CURP (Clave Unica de Registro de Poblacion)</li>
                  <li>Clave de elector</li>
                  <li>Numero de identificacion oficial</li>
                  <li>Fotografia</li>
                  <li>Firma</li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">
                  Datos de contacto
                </h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                  <li>Correo electronico</li>
                  <li>Numero de telefono</li>
                  <li>Domicilio</li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">
                  Datos biometricos (datos sensibles)
                </h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                  <li>Imagen facial para verificacion biometrica</li>
                  <li>Video de prueba de vida</li>
                  <li>Plantillas biometricas faciales</li>
                </ul>

                <div className="bg-[#0066ff]/5 border border-[#0066ff]/20 rounded-xl p-6 mt-6">
                  <p className="text-gray-700">
                    <strong className="text-[#0066ff]">Nota importante:</strong> Los datos biometricos son considerados datos personales sensibles conforme a la LFPDPPP. Su tratamiento requiere de su consentimiento expreso, el cual sera solicitado al momento de la recopilacion.
                  </p>
                </div>
              </div>

              {/* Finalidades */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  3. Finalidades del tratamiento
                </h2>

                <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">
                  Finalidades primarias (necesarias)
                </h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                  <li>Verificar su identidad mediante comparacion biometrica facial</li>
                  <li>Validar la autenticidad de documentos de identificacion oficiales</li>
                  <li>Generar expedientes digitales de verificacion para nuestros clientes</li>
                  <li>Cumplir con obligaciones legales y regulatorias en materia de prevencion de lavado de dinero (LFPIORPI)</li>
                  <li>Generar evidencia probatoria para procedimientos de cumplimiento regulatorio</li>
                  <li>Proporcionar servicios de firma electronica con validez legal</li>
                  <li>Mantener registros de auditorias conforme a la normatividad aplicable</li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">
                  Finalidades secundarias (opcionales)
                </h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                  <li>Enviar comunicaciones sobre actualizaciones de nuestros servicios</li>
                  <li>Realizar estudios y analisis estadisticos de forma anonimizada</li>
                  <li>Mejorar la calidad y precision de nuestros algoritmos de verificacion</li>
                </ul>

                <p className="text-gray-600 mt-4">
                  Si no desea que sus datos personales sean tratados para las finalidades secundarias, puede manifestarlo enviando un correo a{" "}
                  <a href="mailto:privacidad@jaak.ai" className="text-[#0066ff] hover:underline">
                    privacidad@jaak.ai
                  </a>
                </p>
              </div>

              {/* Transferencias */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  4. Transferencias de datos
                </h2>
                <p className="text-gray-600 mb-4">
                  Sus datos personales pueden ser transferidos a:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                  <li>
                    <strong>Clientes de JAAK:</strong> Las empresas que contratan nuestros servicios de verificacion de identidad reciben los resultados de la verificacion y la evidencia generada.
                  </li>
                  <li>
                    <strong>Autoridades competentes:</strong> Cuando sea requerido por ley, orden judicial o requerimiento de autoridad competente (CNBV, UIF, SAT, entre otras).
                  </li>
                  <li>
                    <strong>Proveedores de servicios:</strong> Empresas que nos auxilian en el almacenamiento seguro de datos y procesamiento de informacion, quienes estan obligados contractualmente a mantener la confidencialidad.
                  </li>
                </ul>
                <p className="text-gray-600">
                  Las transferencias a autoridades competentes no requieren de su consentimiento conforme al articulo 37 de la LFPDPPP.
                </p>
              </div>

              {/* Derechos ARCO */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  5. Derechos ARCO
                </h2>
                <p className="text-gray-600 mb-4">
                  Usted tiene derecho a ejercer en cualquier momento sus derechos de Acceso, Rectificacion, Cancelacion y Oposicion (derechos ARCO) respecto a sus datos personales:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                  <li>
                    <strong>Acceso:</strong> Conocer que datos personales tenemos sobre usted y como los tratamos.
                  </li>
                  <li>
                    <strong>Rectificacion:</strong> Solicitar la correccion de sus datos si son inexactos o incompletos.
                  </li>
                  <li>
                    <strong>Cancelacion:</strong> Solicitar la eliminacion de sus datos cuando considere que no estan siendo tratados conforme a la ley.
                  </li>
                  <li>
                    <strong>Oposicion:</strong> Oponerse al tratamiento de sus datos para fines especificos.
                  </li>
                </ul>

                <div className="bg-gray-50 rounded-xl p-6 mt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Como ejercer sus derechos ARCO
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Para ejercer sus derechos ARCO, envie su solicitud a{" "}
                    <a href="mailto:privacidad@jaak.ai" className="text-[#0066ff] hover:underline">
                      privacidad@jaak.ai
                    </a>{" "}
                    incluyendo:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Nombre completo y datos de contacto</li>
                    <li>Copia de identificacion oficial vigente</li>
                    <li>Descripcion clara de los derechos que desea ejercer</li>
                    <li>Cualquier documento que facilite la localizacion de sus datos</li>
                  </ul>
                  <p className="text-gray-600 mt-4">
                    Responderemos a su solicitud en un plazo maximo de 20 dias habiles.
                  </p>
                </div>
              </div>

              {/* Revocacion del consentimiento */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  6. Revocacion del consentimiento
                </h2>
                <p className="text-gray-600 mb-4">
                  Usted puede revocar el consentimiento que nos haya otorgado para el tratamiento de sus datos personales enviando su solicitud a{" "}
                  <a href="mailto:privacidad@jaak.ai" className="text-[#0066ff] hover:underline">
                    privacidad@jaak.ai
                  </a>
                </p>
                <p className="text-gray-600">
                  Tenga en cuenta que la revocacion del consentimiento podria impedir que continuemos prestando nuestros servicios. Ademas, existen casos en los que no es posible atender su solicitud de revocacion debido a obligaciones legales de conservacion de informacion.
                </p>
              </div>

              {/* Medidas de seguridad */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  7. Medidas de seguridad
                </h2>
                <p className="text-gray-600 mb-4">
                  JAAK implementa medidas de seguridad tecnicas, administrativas y fisicas para proteger sus datos personales contra dano, perdida, alteracion, destruccion o uso no autorizado:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Cifrado de datos en transito (TLS 1.3) y en reposo (AES-256)</li>
                  <li>Control de acceso basado en roles con autenticacion multifactor</li>
                  <li>Monitoreo continuo de seguridad y deteccion de intrusiones</li>
                  <li>Certificacion ISO 27001 en seguridad de la informacion</li>
                  <li>Auditorias de seguridad periodicas por terceros independientes</li>
                  <li>Politicas de retencion y eliminacion segura de datos</li>
                </ul>
              </div>

              {/* Uso de cookies */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  8. Uso de cookies y tecnologias similares
                </h2>
                <p className="text-gray-600 mb-4">
                  Nuestro sitio web utiliza cookies y tecnologias similares para mejorar su experiencia de navegacion. Para conocer mas detalles sobre las cookies que utilizamos, consulte nuestra{" "}
                  <Link href="/cookies" className="text-[#0066ff] hover:underline">
                    Politica de Cookies
                  </Link>.
                </p>
              </div>

              {/* Cambios al aviso */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  9. Cambios al aviso de privacidad
                </h2>
                <p className="text-gray-600">
                  JAAK se reserva el derecho de modificar el presente aviso de privacidad para adaptarlo a cambios legislativos, jurisprudenciales o de nuestras practicas de privacidad. Cualquier modificacion sera publicada en nuestro sitio web y, en caso de cambios sustanciales, le notificaremos por correo electronico.
                </p>
              </div>

              {/* Contacto */}
              <div className="bg-[#0a0a0a] rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Contacto
                </h2>
                <p className="text-white/70 mb-4">
                  Si tiene alguna pregunta sobre este aviso de privacidad o sobre el tratamiento de sus datos personales, contactenos:
                </p>
                <div className="space-y-2">
                  <p className="text-white">
                    <strong className="text-[#0066ff]">Correo:</strong>{" "}
                    <a href="mailto:privacidad@jaak.ai" className="text-white hover:text-[#0066ff] transition-colors">
                      privacidad@jaak.ai
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
