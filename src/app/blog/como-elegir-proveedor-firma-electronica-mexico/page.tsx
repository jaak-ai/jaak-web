import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import ArticleLayout from "../ArticleLayout";
import ScrollableArticleTable from "../ScrollableArticleTable";
import { isBlogDraftPreview } from "../draftPreview";
import { article, articleSchema } from "./editorial";

export { articleMetadata as metadata } from "./editorial";
export const dynamic = "force-dynamic";

function Paragraph({ children }: Readonly<{ children: ReactNode }>) {
  return <p className="text-gray-600 leading-relaxed mb-4">{children}</p>;
}

export default function Page() {
  if (!isBlogDraftPreview(process.env)) notFound();
  return (
    <ArticleLayout {...article} organizationAuthor={article.authorName} showBottomCta={false}
      alignHeaderWithContent jsonLd={articleSchema} relatedPosts={[]}>
      <section className="article-band article-band--light" aria-label="Introducción">
        <Paragraph>{"Para elegir un proveedor de firma electrónica en México, compara siete aspectos: los documentos que necesitas firmar, la identificación del firmante, la evidencia y conservación, la experiencia de uso, la implementación, el soporte y el costo total."}</Paragraph>
        <Paragraph>{"La decisión empieza con tu operación. Una empresa que envía algunos acuerdos de servicios al mes puede necesitar un flujo distinto al de una organización que incorpora clientes desde su propia plataforma."}</Paragraph>
        <Paragraph>{"Antes de contratar, pide a cada proveedor demostrar el mismo caso de uso y entregar un expediente de ejemplo. Así podrás comparar alcances concretos y detectar qué incluye cada propuesta."}</Paragraph>
      </section>
      <section className="article-band article-band--blue" aria-labelledby="antes-de-comparar-firma-electronica-e-firma-y-nom-151-cumplen-funciones-distintas">
        <h2 id="antes-de-comparar-firma-electronica-e-firma-y-nom-151-cumplen-funciones-distintas" className="text-2xl font-bold mt-12 mb-6 scroll-mt-36">{"Antes de comparar: firma electrónica, e.firma y NOM-151 cumplen funciones distintas"}</h2>
<Paragraph>{"Estos términos suelen aparecer juntos en las propuestas comerciales, pero conviene distinguirlos."}</Paragraph>
        <ScrollableArticleTable label="Conceptos de firma electrónica y conservación" headers={["Concepto", "Qué debes entender al evaluar una solución"]} rows={[["Firma electrónica", "Datos electrónicos que permiten identificar al firmante en relación con un mensaje y expresar su aprobación. Su evaluación depende del método y del contexto aplicable."], ["Firma electrónica avanzada o fiable", "El Código de Comercio establece requisitos específicos, entre ellos el control exclusivo de los datos de creación y la posibilidad de detectar alteraciones."], ["e.firma del SAT", "Un mecanismo de firma electrónica avanzada asociado a certificados. El SAT reconoce usos en trámites públicos y en la iniciativa privada."], ["Conservación conforme a NOM-151", "Atiende la conservación de mensajes de datos y la digitalización de documentos. No sustituye por sí misma la identificación ni el consentimiento del firmante."]]} />
        <Paragraph>{"Las definiciones y requisitos de firma electrónica se encuentran en los artículos 89 y 97 del Código de Comercio. El uso de un código por SMS o una imagen de firma, por sí solo, no acredita el cumplimiento de todos los requisitos de una firma avanzada."}</Paragraph>
        <Paragraph>{"La e.firma tampoco se limita exclusivamente a declaraciones fiscales: el SAT contempla su utilización en la iniciativa privada. Su aplicación debe revisarse para el proceso específico."}</Paragraph>
        <Paragraph>{"Por su parte, NOM-151 regula conservación y digitalización; la Secretaría de Economía la identifica como vigente."}</Paragraph>
      </section>
      <section className="article-band article-band--light" aria-labelledby="1-define-que-documentos-necesitas-firmar">
        <h2 id="1-define-que-documentos-necesitas-firmar" className="text-2xl font-bold mt-12 mb-6 scroll-mt-36">{"1. Define qué documentos necesitas firmar"}</h2>
<Paragraph>{"Prepara un inventario antes de solicitar cotizaciones. Incluye:"}</Paragraph>
        <ul className="list-disc pl-6 space-y-3 mb-6"><li className="text-gray-600 leading-relaxed">{"Tipo de documento y finalidad."}</li><li className="text-gray-600 leading-relaxed">{"Número y perfil de los firmantes."}</li><li className="text-gray-600 leading-relaxed">{"Volumen mensual y temporadas de mayor demanda."}</li><li className="text-gray-600 leading-relaxed">{"Orden de participación y aprobaciones internas."}</li><li className="text-gray-600 leading-relaxed">{"Necesidad de anexos, versiones o representantes."}</li><li className="text-gray-600 leading-relaxed">{"Requisitos de conservación y consulta."}</li></ul>
        <Paragraph>{"Por ejemplo, un acuerdo de confidencialidad entre empresas conocidas puede requerir una evaluación distinta a la contratación remota de un cliente con quien nunca has tenido contacto."}</Paragraph>
        <h3 id="revisa-las-formalidades-del-documento" className="text-xl font-bold mt-8 mb-6 scroll-mt-36">{"Revisa las formalidades del documento"}</h3>
        <Paragraph>{"La contratación electrónica debe analizarse según el acto. El artículo 93 del Código de Comercio contempla condiciones de integridad, consulta y atribución, además de los supuestos que requieren intervención de fedatario. No conviene asumir que una plataforma cubre cualquier documento."}</Paragraph>
        <Paragraph><strong>{"Pregunta para el proveedor:"}</strong>{" “¿Puedes demostrar el flujo con un documento de muestra equivalente al que utiliza mi empresa y señalar sus límites?”"}</Paragraph>
      </section>
      <section className="article-band article-band--blue" aria-labelledby="2-comprueba-como-se-identifica-al-firmante">
        <h2 id="2-comprueba-como-se-identifica-al-firmante" className="text-2xl font-bold mt-12 mb-6 scroll-mt-36">{"2. Comprueba cómo se identifica al firmante"}</h2>
<Paragraph>{"Recibir un enlace en un correo, ingresar un código y verificar una identificación son acciones distintas. Pide que el proveedor explique qué comprueba cada paso y qué registro genera."}</Paragraph>
        <h3 id="distingue-acceso-identidad-y-representacion" className="text-xl font-bold mt-8 mb-6 scroll-mt-36">{"Distingue acceso, identidad y representación"}</h3>
        <Paragraph>{"Durante la evaluación, pregunta:"}</Paragraph>
        <ul className="list-disc pl-6 space-y-3 mb-6"><li className="text-gray-600 leading-relaxed">{"¿Cómo se autentica a quien entra al proceso?"}</li><li className="text-gray-600 leading-relaxed">{"¿Qué comprobaciones de identidad están disponibles?"}</li><li className="text-gray-600 leading-relaxed">{"¿Cómo se relaciona la aceptación con la versión del documento?"}</li><li className="text-gray-600 leading-relaxed">{"¿Qué sucede si la verificación falla?"}</li><li className="text-gray-600 leading-relaxed">{"¿Cómo se revisan las facultades de quien firma por una empresa?"}</li></ul>
        <Paragraph>{"Para tu evaluación interna, registra por separado la identidad de la persona y la documentación que respalda su representación."}</Paragraph>
        <Paragraph><strong>{"Pregunta para el proveedor:"}</strong>{" “¿Qué evidencia recibiré sobre quién participó y cómo aceptó el documento?”"}</Paragraph>
      </section>
      <section className="article-band article-band--light" aria-labelledby="3-solicita-un-expediente-de-evidencia-y-revisa-la-conservacion">
        <h2 id="3-solicita-un-expediente-de-evidencia-y-revisa-la-conservacion" className="text-2xl font-bold mt-12 mb-6 scroll-mt-36">{"3. Solicita un expediente de evidencia y revisa la conservación"}</h2>
<Paragraph>{"Una demostración debe permitirte revisar lo que queda después de la firma. Solicita un expediente de ejemplo con datos de prueba."}</Paragraph>
        <Paragraph>{"Como criterio de compra, revisa si permite recuperar:"}</Paragraph>
        <ul className="list-disc pl-6 space-y-3 mb-6"><li className="text-gray-600 leading-relaxed">{"El documento final y sus anexos."}</li><li className="text-gray-600 leading-relaxed">{"El historial de eventos del proceso."}</li><li className="text-gray-600 leading-relaxed">{"Los registros de autenticación o identificación contratados."}</li><li className="text-gray-600 leading-relaxed">{"La relación entre participantes, acciones y documento."}</li><li className="text-gray-600 leading-relaxed">{"Las constancias y otros elementos incluidos en el servicio."}</li></ul>
        <Paragraph>{"No todos los procesos necesitan los mismos datos. Define qué resulta necesario para tu operación y evita recopilar información sin una finalidad clara."}</Paragraph>
        <h3 id="verifica-que-incluye-la-conservacion-conforme-a-nom-151" className="text-xl font-bold mt-8 mb-6 scroll-mt-36">{"Verifica qué incluye la conservación conforme a NOM-151"}</h3>
        <Paragraph>{"Si el proveedor ofrece este servicio, solicita el nombre del Prestador de Servicios de Certificación —PSC— involucrado, la constancia que recibirás y el procedimiento para verificarla."}</Paragraph>
        <Paragraph>{"NOM-151 contempla una constancia de conservación emitida por un PSC. Pide que distingan esa constancia del sello de tiempo y del almacenamiento contratado."}</Paragraph>
        <Paragraph>{"Consulta también el "}<a href="https://psc.economia.gob.mx/directorio.html" className="text-[#1ECAD3] underline underline-offset-4 hover:text-white">{"directorio oficial de PSC de la Secretaría de Economía"}</a>{". Revisa el servicio acreditado correspondiente: emisión de certificados, conservación y sellado de tiempo aparecen como servicios diferenciados."}</Paragraph>
        <h3 id="comprueba-como-recuperaras-la-informacion" className="text-xl font-bold mt-8 mb-6 scroll-mt-36">{"Comprueba cómo recuperarás la información"}</h3>
        <Paragraph>{"Pregunta cuánto tiempo podrás consultar el expediente, qué puedes descargar, en qué formatos y qué sucede cuando termina el contrato."}</Paragraph>
        <Paragraph><strong>{"Pregunta para el proveedor:"}</strong>{" “¿Puedo exportar el documento y su evidencia, y cómo los consultaré después de dejar de utilizar la plataforma?”"}</Paragraph>
      </section>
      <section className="article-band article-band--blue" aria-labelledby="4-prueba-la-experiencia-de-quienes-envian-y-firman">
        <h2 id="4-prueba-la-experiencia-de-quienes-envian-y-firman" className="text-2xl font-bold mt-12 mb-6 scroll-mt-36">{"4. Prueba la experiencia de quienes envían y firman"}</h2>
<Paragraph>{"Evalúa el recorrido completo con usuarios representativos de tu operación."}</Paragraph>
        <h3 id="para-el-firmante" className="text-xl font-bold mt-8 mb-6 scroll-mt-36">{"Para el firmante"}</h3>
        <Paragraph>{"Comprueba si puede:"}</Paragraph>
        <ul className="list-disc pl-6 space-y-3 mb-6"><li className="text-gray-600 leading-relaxed">{"Abrir y leer el documento desde su celular."}</li><li className="text-gray-600 leading-relaxed">{"Entender qué está aceptando."}</li><li className="text-gray-600 leading-relaxed">{"Completar los pasos sin asistencia constante."}</li><li className="text-gray-600 leading-relaxed">{"Recuperarse de un error o continuar un proceso pendiente."}</li><li className="text-gray-600 leading-relaxed">{"Obtener su copia al finalizar."}</li></ul>
        <h3 id="para-el-equipo-que-administra" className="text-xl font-bold mt-8 mb-6 scroll-mt-36">{"Para el equipo que administra"}</h3>
        <Paragraph>{"Revisa cómo se preparan documentos, asignan participantes, consultan estados y atienden pendientes."}</Paragraph>
        <Paragraph><strong>{"Prueba recomendada:"}</strong>{" envía un documento de muestra a dos personas que no hayan usado la herramienta. Registra dudas, errores y pasos que requieran ayuda."}</Paragraph>
        <Paragraph><strong>{"Pregunta para el proveedor:"}</strong>{" “¿Podemos probar el proceso completo desde el dispositivo que utilizarán nuestros clientes?”"}</Paragraph>
      </section>
      <section className="article-band article-band--light" aria-labelledby="5-decide-entre-autoservicio-e-integracion-por-api">
        <h2 id="5-decide-entre-autoservicio-e-integracion-por-api" className="text-2xl font-bold mt-12 mb-6 scroll-mt-36">{"5. Decide entre autoservicio e integración por API"}</h2>
<Paragraph>{"La modalidad debe responder a cómo trabaja tu empresa y a sus recursos de implementación."}</Paragraph>
        <h3 id="cuando-evaluar-autoservicio" className="text-xl font-bold mt-8 mb-6 scroll-mt-36">{"Cuándo evaluar autoservicio"}</h3>
        <Paragraph>{"Considera una plataforma de uso directo cuando un equipo pueda preparar documentos, enviarlos y dar seguimiento desde una interfaz."}</Paragraph>
        <Paragraph>{"Revisa permisos, plantillas, límites y opciones de descarga."}</Paragraph>
        <h3 id="cuando-evaluar-una-api" className="text-xl font-bold mt-8 mb-6 scroll-mt-36">{"Cuándo evaluar una API"}</h3>
        <Paragraph>{"Considera una integración cuando la firma deba activarse desde tu sistema, formar parte de un flujo existente o devolver estados y documentos a otra aplicación."}</Paragraph>
        <Paragraph>{"Solicita:"}</Paragraph>
        <ul className="list-disc pl-6 space-y-3 mb-6"><li className="text-gray-600 leading-relaxed">{"Documentación técnica y ambiente de pruebas."}</li><li className="text-gray-600 leading-relaxed">{"Métodos de autenticación."}</li><li className="text-gray-600 leading-relaxed">{"Notificaciones de eventos."}</li><li className="text-gray-600 leading-relaxed">{"Manejo de errores y reintentos."}</li><li className="text-gray-600 leading-relaxed">{"Límites de uso y política de versiones."}</li><li className="text-gray-600 leading-relaxed">{"Responsabilidades de implementación y mantenimiento."}</li></ul>
        <Paragraph><strong>{"Pregunta para el proveedor:"}</strong>{" “¿Qué debe desarrollar mi equipo y qué entregará el tuyo para poner este flujo en operación?”"}</Paragraph>
      </section>
      <section className="article-band article-band--blue" aria-labelledby="6-revisa-soporte-seguridad-y-continuidad">
        <h2 id="6-revisa-soporte-seguridad-y-continuidad" className="text-2xl font-bold mt-12 mb-6 scroll-mt-36">{"6. Revisa soporte, seguridad y continuidad"}</h2>
<Paragraph>{"Incluye a TI, Seguridad y al equipo operativo en esta parte de la evaluación."}</Paragraph>
        <Paragraph>{"Solicita información sobre controles de acceso, permisos, tratamiento de datos, recuperación del servicio y atención de incidentes."}</Paragraph>
        <Paragraph>{"Si se presenta una certificación, comprueba la entidad certificada, el alcance y la vigencia del documento."}</Paragraph>
        <h3 id="pide-compromisos-de-soporte-por-escrito" className="text-xl font-bold mt-8 mb-6 scroll-mt-36">{"Pide compromisos de soporte por escrito"}</h3>
        <Paragraph>{"Aclara horarios, idioma, canales y mecanismos de escalamiento. Distingue el tiempo de primera respuesta del tiempo comprometido para resolver una incidencia."}</Paragraph>
        <Paragraph><strong>{"Pregunta para el proveedor:"}</strong>{" “Si un proceso se interrumpe en un momento crítico, ¿cómo se reporta, quién lo atiende y qué compromiso aplica?”"}</Paragraph>
      </section>
      <section className="article-band article-band--light" aria-labelledby="7-compara-el-costo-total-del-mismo-escenario">
        <h2 id="7-compara-el-costo-total-del-mismo-escenario" className="text-2xl font-bold mt-12 mb-6 scroll-mt-36">{"7. Compara el costo total del mismo escenario"}</h2>
<Paragraph>{"Antes de comparar tarifas, identifica la unidad de cobro: documento, firmante, envío, transacción o paquete."}</Paragraph>
        <Paragraph>{"Después solicita que cada propuesta desglose:"}</Paragraph>
        <ScrollableArticleTable label="Componentes del costo total" headers={["Componente", "Qué revisar"]} rows={[["Uso de la plataforma", "Usuarios, permisos y funciones incluidas."], ["Firma", "Unidad facturable y tratamiento de procesos incompletos."], ["Identificación", "Métodos incluidos y cargos adicionales."], ["Conservación", "Constancias, almacenamiento y plazo de acceso."], ["Implementación", "Configuración, integración y capacitación."], ["Soporte", "Alcance y posibles niveles de servicio."], ["Salida", "Exportación, recuperación de información y costos asociados."]]} />
        <Paragraph>{"Confirma moneda, IVA, mínimos de consumo y vigencia de los paquetes."}</Paragraph>
        <h3 id="utiliza-un-escenario-comparable" className="text-xl font-bold mt-8 mb-6 scroll-mt-36">{"Utiliza un escenario comparable"}</h3>
        <Paragraph>{"Por ejemplo: 300 acuerdos mensuales, dos firmantes por documento y requisitos definidos de identificación y conservación."}</Paragraph>
        <Paragraph>{"Es un escenario hipotético para pedir cotizaciones equivalentes. No representa una tarifa ni una recomendación universal."}</Paragraph>
        <Paragraph><strong>{"Pregunta para el proveedor:"}</strong>{" “¿Cuál sería el costo completo de este escenario y qué situaciones generarían cargos adicionales?”"}</Paragraph>
      </section>
      <section className="article-band article-band--blue" aria-labelledby="usa-esta-matriz-durante-la-demo">
        <h2 id="usa-esta-matriz-durante-la-demo" className="text-2xl font-bold mt-12 mb-6 scroll-mt-36">{"Usa esta matriz durante la demo"}</h2>
<ScrollableArticleTable label="Matriz para comparar proveedores en la demo" headers={["Criterio", "Evidencia que debes solicitar"]} rows={[["Documentos", "Flujo con un documento de muestra y límites identificados."], ["Identificación", "Explicación de las comprobaciones y registros generados."], ["Evidencia y conservación", "Expediente exportable y procedimiento de verificación."], ["Experiencia", "Prueba desde el dispositivo habitual del firmante."], ["Implementación", "Alcance, responsables y requisitos técnicos."], ["Soporte", "Condiciones de atención y escalamiento."], ["Costo", "Cotización desglosada para el mismo escenario."]]} />
        <Paragraph>{"Clasifica cada respuesta como "}<strong>{"comprobada"}</strong>{", "}<strong>{"pendiente"}</strong>{" o "}<strong>{"no disponible"}</strong>{". Define antes cuáles son requisitos indispensables para tu empresa."}</Paragraph>
      </section>
      <section className="article-band article-band--light" aria-labelledby="preguntas-frecuentes">
        <h2 id="preguntas-frecuentes" className="text-2xl font-bold mt-12 mb-6 scroll-mt-36">{"Preguntas frecuentes"}</h2>
<h3 id="todos-los-firmantes-necesitan-e-firma-del-sat" className="text-xl font-bold mt-8 mb-6 scroll-mt-36">{"¿Todos los firmantes necesitan e.firma del SAT?"}</h3>
        <Paragraph>{"No es un requisito universal para cualquier proceso de firma. La necesidad debe determinarse según el documento, el acto y las disposiciones aplicables. El artículo 17-D del Código Fiscal regula supuestos fiscales específicos; no debe extrapolarse a todos los contratos privados."}</Paragraph>
        <h3 id="una-firma-dibujada-en-pantalla-demuestra-quien-firmo" className="text-xl font-bold mt-8 mb-6 scroll-mt-36">{"¿Una firma dibujada en pantalla demuestra quién firmó?"}</h3>
        <Paragraph>{"Para comparar proveedores, pide conocer qué otros elementos relacionan esa acción con la persona y el documento. No evalúes el proceso únicamente por la apariencia de la firma."}</Paragraph>
        <h3 id="nom-151-sustituye-la-identificacion-del-firmante" className="text-xl font-bold mt-8 mb-6 scroll-mt-36">{"¿NOM-151 sustituye la identificación del firmante?"}</h3>
        <Paragraph>{"No. La conservación y la identificación cumplen funciones distintas. Solicita que el proveedor explique cómo se conectan dentro del expediente."}</Paragraph>
        <h3 id="conviene-mas-autoservicio-o-api" className="text-xl font-bold mt-8 mb-6 scroll-mt-36">{"¿Conviene más autoservicio o API?"}</h3>
        <Paragraph>{"Depende de si tu equipo operará desde una plataforma o necesita incorporar la firma a un sistema propio. Compara recursos de implementación, seguimiento y mantenimiento."}</Paragraph>
        <h3 id="como-comparar-precios-entre-proveedores" className="text-xl font-bold mt-8 mb-6 scroll-mt-36">{"¿Cómo comparar precios entre proveedores?"}</h3>
        <Paragraph>{"Utiliza el mismo número de documentos y firmantes, con requisitos equivalentes de identificación, evidencia, conservación y soporte. Solicita todos los cargos y condiciones."}</Paragraph>
      </section>
      <section className="article-band article-band--blue" aria-labelledby="evalua-tu-caso-de-firma-electronica-con-jaak">
        <h2 id="evalua-tu-caso-de-firma-electronica-con-jaak" className="text-2xl font-bold mt-12 mb-6 scroll-mt-36">{"Evalúa tu caso de firma electrónica con JAAK"}</h2>
<Paragraph>{"Comparte qué documentos necesitas firmar, cuántas personas participan, tu volumen estimado y si buscas autoservicio o integración."}</Paragraph>
        <Paragraph>{"Con esa información, podrás conversar con el equipo sobre el alcance que necesitas y las preguntas que debe resolver una demo."}</Paragraph>
        <Paragraph><strong><a href="https://www.jaak.ai/contacto" className="text-[#1ECAD3] underline underline-offset-4 hover:text-white">{"Agenda una demo con JAAK"}</a></strong></Paragraph>
        <Paragraph>{"También puedes conocer "}<a href="https://www.jaak.ai/signa" className="text-[#1ECAD3] underline underline-offset-4 hover:text-white">{"Signa, la solución de firma electrónica de JAAK"}</a>{", y consultar las "}<a href="https://www.jaak.ai/autoservicio" className="text-[#1ECAD3] underline underline-offset-4 hover:text-white">{"opciones de autoservicio"}</a>{"."}</Paragraph>
        <h3 id="fuentes-oficiales" className="text-xl font-bold mt-8 mb-6 scroll-mt-36">{"Fuentes oficiales"}</h3>
        <ul className="list-disc pl-6 space-y-3 mb-6"><li className="text-gray-600 leading-relaxed"><a href="https://www.diputados.gob.mx/LeyesBiblio/pdf/CCom.pdf" className="text-[#1ECAD3] underline underline-offset-4 hover:text-white">{"Código de Comercio — Cámara de Diputados"}</a>{". Artículos 89, 93 y 97."}</li><li className="text-gray-600 leading-relaxed"><a href="https://www.diputados.gob.mx/LeyesBiblio/pdf/CFF.pdf" className="text-[#1ECAD3] underline underline-offset-4 hover:text-white">{"Código Fiscal de la Federación — Cámara de Diputados"}</a>{". Artículo 17-D."}</li><li className="text-gray-600 leading-relaxed"><a href="https://wwwmat.sat.gob.mx/tramites/16703/obten-tu-certificado-de-e.firma" className="text-[#1ECAD3] underline underline-offset-4 hover:text-white">{"Certificado de e.firma — SAT"}</a>{"."}</li><li className="text-gray-600 leading-relaxed"><a href="https://dof.gob.mx/normasOficiales/6499/seeco11_C/seeco11_C.html" className="text-[#1ECAD3] underline underline-offset-4 hover:text-white">{"NOM-151-SCFI-2016 — Diario Oficial de la Federación"}</a>{"."}</li><li className="text-gray-600 leading-relaxed"><a href="https://platiica.economia.gob.mx/normalizacion/nom-151-scfi-2016/" className="text-[#1ECAD3] underline underline-offset-4 hover:text-white">{"Ficha de vigencia de NOM-151 — Secretaría de Economía"}</a>{"."}</li><li className="text-gray-600 leading-relaxed"><a href="https://psc.economia.gob.mx/directorio.html" className="text-[#1ECAD3] underline underline-offset-4 hover:text-white">{"Directorio de Prestadores de Servicios de Certificación — Secretaría de Economía"}</a>{"."}</li></ul>
        <Paragraph>{"Fuentes consultadas el 22 de octubre de 2026. La aplicación jurídica debe revisarse según el documento y el proceso concreto."}</Paragraph>
      </section>
    </ArticleLayout>
  );
}
