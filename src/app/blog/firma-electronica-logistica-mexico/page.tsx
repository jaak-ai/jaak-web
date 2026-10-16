import ArticleLayout from "../ArticleLayout";
import ScrollableArticleTable from "../ScrollableArticleTable";
import { article, articleSchema } from "./editorial";

export { articleMetadata as metadata } from "./editorial";

export default function Page() {
  return (
    <ArticleLayout {...article} organizationAuthor={article.authorName}
      showBottomCta={false} alignHeaderWithContent jsonLd={articleSchema}
      relatedPosts={[
        { title: "¿Qué es la NOM-151 y por qué importa en tus contratos digitales?", slug: "que-es-nom-151-contratos-digitales", category: "Firma Electrónica" },
        { title: "Reconocimiento facial, biometría y prueba de vida: diferencias clave", slug: "reconocimiento-facial-biometria-prueba-de-vida", category: "IA" },
      ]}>
      <section className="article-band article-band--light" aria-label="Introducción">
        <p className="text-gray-600 leading-relaxed mb-4">{"Una entrega puede completarse y dejar un problema abierto: el acuse es ilegible, falta una firma o nadie puede explicar quién recibió. En un almacén ocurre algo parecido cuando una persona presenta una INE, pero la autorización para retirar mercancía corresponde a otro operador."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"La firma electrónica en logística ayuda a documentar acuerdos y aceptaciones. Su utilidad aumenta cuando el proceso relaciona el documento con la persona, la operación y la evidencia necesaria para atender una reclamación."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"Para transportistas, operadores logísticos y centros de distribución, digitalizar implica decidir qué se firma, quién puede hacerlo y cómo se recuperará el expediente. Firma, identidad y autorización requieren controles propios."}</p>
      </section>
      <section className="article-band article-band--blue" aria-labelledby="donde-se-rompe-el-expediente-logistico">
        <h2 id="donde-se-rompe-el-expediente-logistico" className="text-2xl font-bold mt-12 mb-6 scroll-mt-36">{"Dónde se rompe el expediente logístico"}</h2>
        <h3 id="alta-de-transportistas-y-contratacion-de-servicios" className="text-xl font-bold mt-8 mb-6 scroll-mt-36">{"Alta de transportistas y contratación de servicios"}</h3>
        <p className="text-gray-600 leading-relaxed mb-4">{"Imagina un operador logístico que incorpora transportistas externos. Compras recibe el contrato por correo; operaciones guarda identificaciones en otra carpeta y seguridad administra las autorizaciones de acceso. Cuando cambia el operador asignado, los registros dejan de coincidir."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"Un expediente relacionado por proveedor, servicio y versión contractual facilita revisar pendientes. La firma electrónica puede apoyar la formalización; corroborar la identidad del firmante y sus facultades exige comprobaciones adicionales."}</p>
        <h3 id="retiro-de-mercancia-y-prueba-de-entrega" className="text-xl font-bold mt-8 mb-6 scroll-mt-36">{"Retiro de mercancía y prueba de entrega"}</h3>
        <p className="text-gray-600 leading-relaxed mb-4">{"En otro ejemplo hipotético, un conductor llega con una identificación y una captura de pantalla de una orden. Aunque la credencial corresponda a esa persona, falta confirmar que el cliente autorizó el retiro de esa carga."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"En destino, una firma en pantalla también puede resultar insuficiente si no está vinculada con la remisión, las cantidades recibidas y las observaciones. Ante una entrega parcial, importa demostrar qué aceptó el receptor y qué quedó pendiente."}</p>
      </section>
      <section className="article-band article-band--light" aria-labelledby="que-documentos-pueden-firmarse-electronicamente">
        <h2 id="que-documentos-pueden-firmarse-electronicamente" className="text-2xl font-bold mt-12 mb-6 scroll-mt-36">{"Qué documentos pueden firmarse electrónicamente"}</h2>
        <p className="text-gray-600 leading-relaxed mb-4">{"Muchos acuerdos y aceptaciones pueden instrumentarse mediante mensajes de datos y firmas electrónicas. La selección depende del documento, las formalidades aplicables y lo pactado entre las partes; conviene revisar cada flujo con jurídico."}</p>
        <ScrollableArticleTable label="Documentos logísticos y evidencia para revisar" headers={["Documento o proceso", "Uso posible de la firma electrónica", "Evidencia o revisión relevante"]} rows={[["Contrato de prestación de servicios de transporte", "Documentar aceptación de condiciones y anexos", "Versión acordada, identidad y facultades del firmante"], ["Órdenes de servicio y autorizaciones", "Registrar instrucciones y aceptación", "Emisor autorizado, alcance y vínculo con la operación"], ["Remisiones y acuses de entrega", "Documentar recepción y observaciones", "Mercancía, cantidades, receptor y excepciones"], ["Responsivas y actas de incidencias", "Registrar compromisos o hechos declarados", "Contenido preciso, participantes y anexos"], ["Contratos y documentos laborales", "Instrumentar acuerdos cuando proceda", "Formalidades y conservación laboral específicas"]]} />
        <p className="text-gray-600 leading-relaxed mb-4">{"La tabla orienta la evaluación; no convierte cualquier documento en sustituible por un archivo firmado. Hay que identificar requisitos especiales, documentos cuya presentación corresponda a una autoridad y procedimientos que exijan otra forma de instrumentación."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"En materia laboral, los "}<a href="https://www.diputados.gob.mx/LeyesBiblio/pdf/LFT.pdf" className="text-[#1ECAD3] underline underline-offset-4 hover:text-white">{"artículos 25 y 804 de la Ley Federal del Trabajo"}</a>{" son referencias para revisar las condiciones de trabajo documentadas y la conservación de documentos. No debe trasladarse automáticamente una configuración comercial al expediente de personal."}</p>
      </section>
      <section className="article-band article-band--blue" aria-labelledby="firma-simple-firma-avanzada-y-nom-151-que-aporta-cada-una">
        <h2 id="firma-simple-firma-avanzada-y-nom-151-que-aporta-cada-una" className="text-2xl font-bold mt-12 mb-6 scroll-mt-36">{"Firma simple, firma avanzada y NOM-151: qué aporta cada una"}</h2>
        <p className="text-gray-600 leading-relaxed mb-4">{"El "}<a href="https://www.diputados.gob.mx/LeyesBiblio/pdf/CCom.pdf" className="text-[#1ECAD3] underline underline-offset-4 hover:text-white">{"Código de Comercio"}</a>{", en sus disposiciones sobre mensajes de datos y firmas electrónicas, reconoce el uso de medios electrónicos en actos comerciales. El soporte electrónico no elimina la necesidad de acreditar atribución, integridad y cumplimiento de las formalidades correspondientes."}</p>
        <h3 id="firma-electronica-simple-documentar-la-aceptacion" className="text-xl font-bold mt-8 mb-6 scroll-mt-36">{"Firma electrónica simple: documentar la aceptación"}</h3>
        <p className="text-gray-600 leading-relaxed mb-4">{"Un clic de aceptación, un código o un trazo pueden integrar un mecanismo de firma electrónica, según cómo se vinculen con el firmante y con la información aceptada. Una imagen de firma aislada ofrece poca explicación sobre el proceso que la produjo."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"Para evaluar una firma simple, pregunta cómo se presentó el documento, qué acción manifestó la aceptación y qué registros permiten relacionarla con una persona. Su utilidad probatoria depende del conjunto de evidencias y del caso."}</p>
        <h3 id="firma-avanzada-requisitos-del-mecanismo" className="text-xl font-bold mt-8 mb-6 scroll-mt-36">{"Firma avanzada: requisitos del mecanismo"}</h3>
        <p className="text-gray-600 leading-relaxed mb-4">{"La firma electrónica avanzada o fiable se analiza conforme a requisitos como la vinculación de los datos de creación con el firmante, su control y la posibilidad de detectar alteraciones, según el marco aplicable. El artículo 97 del Código de Comercio es una referencia para esta evaluación mercantil."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"Agregar una selfie o un sello de tiempo no acredita automáticamente todos esos requisitos. Tampoco debe suponerse que cualquier firma de contratos privados exige la e.firma del SAT: corresponde revisar el acto y el mecanismo concretos."}</p>
        <h3 id="nom-151-conservacion-e-integridad" className="text-xl font-bold mt-8 mb-6 scroll-mt-36">{"NOM-151: conservación e integridad"}</h3>
        <p className="text-gray-600 leading-relaxed mb-4">{"La "}<a href="https://dof.gob.mx/normasOficiales.php?codp=6499&view=si" className="text-[#1ECAD3] underline underline-offset-4 hover:text-white">{"NOM-151-SCFI-2016"}</a>{" regula requisitos para conservar mensajes de datos y digitalizar documentos. Debe distinguirse del acto mediante el cual una persona expresa su aceptación."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"Una constancia de conservación puede aportar evidencia de integridad y referencia temporal respecto del contenido protegido. No demuestra por sí sola quién firmó, sus facultades o que la mercancía efectivamente se entregó."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"El artículo 49 del Código de Comercio establece obligaciones de conservación mercantil. Cuando resulten aplicables requisitos de conservación, deben atenderse conforme a la normativa correspondiente. Esto no significa que cada acuse logístico requiera una constancia individual ni que toda conservación sea una elección comercial."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"Jurídico y operaciones deben definir qué documentos están sujetos a obligaciones específicas y cómo conservarlos. Si se evalúa un servicio NOM-151, conviene revisar qué evidencia entrega, su alcance y cómo podrá verificarse posteriormente."}</p>
        <p className="text-gray-600 leading-relaxed mb-4"><strong>{"¿Necesitas ordenar contratos y acuses?"}</strong>{" Revisa la "}<a href="https://www.jaak.ai/plataforma/firma-electronica" className="text-[#1ECAD3] underline underline-offset-4 hover:text-white">{"solución de firma electrónica de JAAK"}</a>{" y plantea qué documentos, firmantes y evidencias requiere tu operación."}</p>
      </section>
      <section className="article-band article-band--light" aria-labelledby="carta-porte-fiscal-y-firma-de-documentos-de-transporte">
        <h2 id="carta-porte-fiscal-y-firma-de-documentos-de-transporte" className="text-2xl font-bold mt-12 mb-6 scroll-mt-36">{"Carta Porte fiscal y firma de documentos de transporte"}</h2>
        <p className="text-gray-600 leading-relaxed mb-4">{"El CFDI y su complemento Carta Porte tienen una función fiscal y reglas propias. Los "}<a href="https://www.diputados.gob.mx/LeyesBiblio/pdf/CFF.pdf" className="text-[#1ECAD3] underline underline-offset-4 hover:text-white">{"artículos 29 y 29-A del Código Fiscal de la Federación"}</a>{" y la "}<a href="https://wwwmatnp.sat.gob.mx/consultas/68823/complemento-carta-porte-" className="text-[#1ECAD3] underline underline-offset-4 hover:text-white">{"información del SAT sobre Carta Porte"}</a>{" son referencias para determinar las obligaciones de cada operación."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"Firmar electrónicamente una remisión, un contrato o un acuse no emite ni timbra el CFDI. Tampoco sustituye la revisión de cuándo procede el complemento, quién debe emitirlo y qué información corresponde incorporar."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"El sellado y timbrado fiscal cumplen una función diferente de la aceptación documental de un servicio o una entrega. Los expedientes pueden relacionar ambos elementos mediante identificadores y referencias de operación, conservando sus funciones y archivos correspondientes."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"Por ejemplo, una entrega con observaciones puede necesitar un acuse detallado aunque exista documentación fiscal. Esta última no describe necesariamente todo lo que las partes necesitan demostrar sobre cantidades, condiciones o reservas de recepción."}</p>
      </section>
      <section className="article-band article-band--blue" aria-labelledby="validacion-de-operadores-ine-qr-identidad-y-autorizacion">
        <h2 id="validacion-de-operadores-ine-qr-identidad-y-autorizacion" className="text-2xl font-bold mt-12 mb-6 scroll-mt-36">{"Validación de operadores: INE, QR, identidad y autorización"}</h2>
        <h3 id="leer-una-credencial-no-equivale-a-comprobar-a-su-portador" className="text-xl font-bold mt-8 mb-6 scroll-mt-36">{"Leer una credencial no equivale a comprobar a su portador"}</h3>
        <p className="text-gray-600 leading-relaxed mb-4">{"El OCR extrae texto de una imagen. La lectura del QR del INE accede a información o permite comprobaciones que dependen del modelo de credencial y del mecanismo utilizado. Son operaciones que deben describirse con precisión."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"Ninguna lectura aislada demuestra simultáneamente vigencia, autenticidad absoluta del documento e identidad del portador. Para conocer características y avisos de la credencial, la referencia institucional es el "}<a href="https://www.ine.mx/avisos-credencial-para-votar/" className="text-[#1ECAD3] underline underline-offset-4 hover:text-white">{"INE"}</a>{"."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"Al evaluar una solución, separa estas capas:"}</p>
        <ol className="list-decimal pl-6 space-y-3 mb-6">
          <li className="text-gray-600 leading-relaxed"><strong>{"Captura:"}</strong>{" qué información se obtiene mediante OCR o QR."}</li>
          <li className="text-gray-600 leading-relaxed"><strong>{"Revisión documental:"}</strong>{" qué consistencias o elementos se examinan."}</li>
          <li className="text-gray-600 leading-relaxed"><strong>{"Consulta oficial:"}</strong>{" qué servicio autorizado se utiliza y qué resultado entrega."}</li>
          <li className="text-gray-600 leading-relaxed"><strong>{"Vínculo con la persona:"}</strong>{" qué comparación facial y prueba de vida se aplican, cuando proceda."}</li>
        </ol>
        <p className="text-gray-600 leading-relaxed mb-4">{"La comparación facial contrasta muestras del rostro. La prueba de vida evalúa señales de presencia genuina durante la captura. Se complementan, pero sus resultados deben interpretarse dentro del proceso y sus limitaciones."}</p>
        <h3 id="identidad-licencia-y-autorizacion-son-comprobaciones-diferentes" className="text-xl font-bold mt-8 mb-6 scroll-mt-36">{"Identidad, licencia y autorización son comprobaciones diferentes"}</h3>
        <p className="text-gray-600 leading-relaxed mb-4">{"Una persona puede acreditar su identidad y carecer de autorización para retirar cierta carga. También puede presentar una INE sin acreditar la licencia requerida para conducir la unidad asignada."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"Las obligaciones de permisos y conducción deben revisarse conforme al servicio y al marco de autotransporte aplicable, incluida la "}<a href="https://www.diputados.gob.mx/LeyesBiblio/pdf/LCPAF.pdf" className="text-[#1ECAD3] underline underline-offset-4 hover:text-white">{"Ley de Caminos, Puentes y Autotransporte Federal"}</a>{" y su regulación correspondiente."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"En el retiro, define quién autoriza, cómo se comunica un cambio de operador y quién resuelve una discrepancia. Seguridad necesita una instrucción trazable vinculada con carga y persona; una coincidencia biométrica no sustituye esa autorización."}</p>
        <h3 id="cuando-conviene-reforzar-la-identidad" className="text-xl font-bold mt-8 mb-6 scroll-mt-36">{"Cuándo conviene reforzar la identidad"}</h3>
        <p className="text-gray-600 leading-relaxed mb-4">{"Puede ser útil evaluar controles adicionales en altas remotas, cambios inesperados de operador, retiros de mercancía sensible o excepciones que no permiten corroborar al receptor por el procedimiento habitual. El nivel de control debe responder al riesgo y al contexto."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"Una captura fallida tampoco demuestra fraude. Diseña reintentos, revisión y atención a excepciones para evitar que un problema técnico se convierta automáticamente en una acusación o una interrupción sin alternativa."}</p>
      </section>
      <section className="article-band article-band--light" aria-labelledby="que-evidencia-conviene-conservar">
        <h2 id="que-evidencia-conviene-conservar" className="text-2xl font-bold mt-12 mb-6 scroll-mt-36">{"Qué evidencia conviene conservar"}</h2>
        <p className="text-gray-600 leading-relaxed mb-4">{"Un expediente útil permite reconstruir la operación sin depender de conversaciones dispersas. Como guía de diseño, considera:"}</p>
        <ul className="list-disc pl-6 space-y-3 mb-6">
          <li className="text-gray-600 leading-relaxed">{"Documento final aceptado, su versión y anexos relacionados."}</li>
          <li className="text-gray-600 leading-relaxed">{"Identificador del servicio, carga, remisión o entrega."}</li>
          <li className="text-gray-600 leading-relaxed">{"Persona participante y facultades o autorización comprobadas."}</li>
          <li className="text-gray-600 leading-relaxed">{"Acción de aceptación y registros de fecha y hora, indicando su origen."}</li>
          <li className="text-gray-600 leading-relaxed">{"Resultados de verificaciones realizadas y referencias de su alcance."}</li>
          <li className="text-gray-600 leading-relaxed">{"Cantidades, incidencias, reservas y evidencia de una entrega parcial."}</li>
          <li className="text-gray-600 leading-relaxed">{"Registros de integridad y conservación que correspondan al caso."}</li>
          <li className="text-gray-600 leading-relaxed">{"Accesos y movimientos relevantes para la trazabilidad del expediente."}</li>
        </ul>
        <p className="text-gray-600 leading-relaxed mb-4">{"Los registros técnicos ordinarios de una aplicación no deben describirse como sellos de tiempo certificados. Tampoco corresponde atribuir valor concluyente a una ubicación, fotografía o dirección IP aislada."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"Define cómo se exportará el expediente, quién podrá consultarlo y cómo se recuperará ante una disputa. Si utilizas TMS, WMS o ERP, establece el identificador compartido y el intercambio de evidencias que necesita cada sistema; confirma las integraciones disponibles para tu implementación."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"La gestión de INE, fotografías y datos biométricos debe considerar la "}<a href="https://www.diputados.gob.mx/LeyesBiblio/pdf/LFPDPPP.pdf" className="text-[#1ECAD3] underline underline-offset-4 hover:text-white">{"Ley Federal de Protección de Datos Personales en Posesión de los Particulares"}</a>{". Define finalidades, información a las personas, consentimiento cuando corresponda, accesos, medidas de seguridad y periodos de conservación aplicables. Recabar más datos requiere una justificación; la biometría no es un requisito universal de la logística."}</p>
      </section>
      <section className="article-band article-band--blue" aria-labelledby="como-llevar-estas-decisiones-a-un-proyecto-con-jaak">
        <h2 id="como-llevar-estas-decisiones-a-un-proyecto-con-jaak" className="text-2xl font-bold mt-12 mb-6 scroll-mt-36">{"Cómo llevar estas decisiones a un proyecto con JAAK"}</h2>
        <p className="text-gray-600 leading-relaxed mb-4">{"La documentación pública de JAAK presenta firma electrónica, componentes de "}<a href="https://www.jaak.ai/plataforma/verificacion-identidad" className="text-[#1ECAD3] underline underline-offset-4 hover:text-white">{"verificación de identidad"}</a>{", "}<a href="https://www.jaak.ai/docs/productos/one-to-one" className="text-[#1ECAD3] underline underline-offset-4 hover:text-white">{"comparación facial entre dos imágenes"}</a>{" y "}<a href="https://www.jaak.ai/docs/productos/liveness" className="text-[#1ECAD3] underline underline-offset-4 hover:text-white">{"prueba de vida"}</a>{". Conviene evaluar estas capacidades a partir de una necesidad operativa delimitada."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"Para el alta de un transportista, el proyecto puede centrarse en relacionar aceptación contractual y evidencia del firmante. Para un centro de distribución, la conversación puede enfocarse en comprobar identidad y enlazar el resultado con la autorización de retiro que administra la empresa."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"En reclamaciones, importa acordar cómo conservar y recuperar documentos, anexos y resultados. La configuración contratada, los servicios de consulta y las integraciones deben confirmarse para cada caso; no hay que asumir que un componente resuelve todo el expediente."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"Un piloto puede organizarse así:"}</p>
        <ol className="list-decimal pl-6 space-y-3 mb-6">
          <li className="text-gray-600 leading-relaxed"><strong>{"Elegir un flujo:"}</strong>{" alta, retiro, entrega o incidencia."}</li>
          <li className="text-gray-600 leading-relaxed"><strong>{"Precisar la pregunta:"}</strong>{" aceptación, identidad, autorización o integridad."}</li>
          <li className="text-gray-600 leading-relaxed"><strong>{"Asignar responsables:"}</strong>{" operación, jurídico, seguridad y tecnología."}</li>
          <li className="text-gray-600 leading-relaxed"><strong>{"Definir evidencias y excepciones:"}</strong>{" qué se conserva y cómo se atienden discrepancias."}</li>
          <li className="text-gray-600 leading-relaxed"><strong>{"Medir el proceso:"}</strong>{" pendientes, reintentos, tiempo de recuperación y expedientes completos."}</li>
        </ol>
        <p className="text-gray-600 leading-relaxed mb-4">{"Estas métricas sirven para evaluar el piloto frente a su situación inicial. No son resultados garantizados ni cifras de clientes."}</p>
      </section>
      <section className="article-band article-band--light" aria-labelledby="preguntas-frecuentes">
        <h2 id="preguntas-frecuentes" className="text-2xl font-bold mt-12 mb-6 scroll-mt-36">{"Preguntas frecuentes"}</h2>
        <h3 id="la-firma-electronica-tiene-validez-en-documentos-logisticos" className="text-xl font-bold mt-8 mb-6 scroll-mt-36">{"¿La firma electrónica tiene validez en documentos logísticos?"}</h3>
        <p className="text-gray-600 leading-relaxed mb-4">{"Puede utilizarse en numerosos acuerdos y aceptaciones. Deben revisarse el acto, las formalidades aplicables y la evidencia de atribución e integridad; el formato electrónico por sí solo no resuelve esos aspectos."}</p>
        <h3 id="puedo-firmar-electronicamente-un-acuse-de-entrega" className="text-xl font-bold mt-8 mb-6 scroll-mt-36">{"¿Puedo firmar electrónicamente un acuse de entrega?"}</h3>
        <p className="text-gray-600 leading-relaxed mb-4">{"Puede documentarse electrónicamente cuando el marco aplicable y las condiciones del proceso lo permitan. Relaciona la aceptación con la operación, el receptor, las cantidades y las observaciones correspondientes."}</p>
        <h3 id="la-nom-151-es-obligatoria-para-cada-acuse-o-remision" className="text-xl font-bold mt-8 mb-6 scroll-mt-36">{"¿La NOM-151 es obligatoria para cada acuse o remisión?"}</h3>
        <p className="text-gray-600 leading-relaxed mb-4">{"No debe afirmarse de manera general. Hay que determinar las obligaciones de conservación aplicables y el alcance de la evidencia requerida para cada documento y proceso."}</p>
        <h3 id="una-firma-con-nom-151-ya-es-firma-avanzada" className="text-xl font-bold mt-8 mb-6 scroll-mt-36">{"¿Una firma con NOM-151 ya es firma avanzada?"}</h3>
        <p className="text-gray-600 leading-relaxed mb-4">{"La conservación NOM-151 y los requisitos de una firma avanzada son cuestiones distintas. Una constancia no acredita automáticamente control del mecanismo, identidad o aceptación del firmante."}</p>
        <h3 id="el-qr-del-ine-confirma-que-alguien-puede-retirar-mercancia" className="text-xl font-bold mt-8 mb-6 scroll-mt-36">{"¿El QR del INE confirma que alguien puede retirar mercancía?"}</h3>
        <p className="text-gray-600 leading-relaxed mb-4">{"No. Su lectura o comprobación tiene un alcance específico sobre la credencial y sus datos. La identidad del portador y la autorización de retiro necesitan sus propias verificaciones."}</p>
        <h3 id="la-firma-electronica-sustituye-el-complemento-carta-porte" className="text-xl font-bold mt-8 mb-6 scroll-mt-36">{"¿La firma electrónica sustituye el complemento Carta Porte?"}</h3>
        <p className="text-gray-600 leading-relaxed mb-4">{"No sustituye la emisión, el timbrado ni las obligaciones fiscales del CFDI y del complemento que corresponda. La firma de un acuse o contrato documenta una función diferente."}</p>
      </section>
      <section className="article-band article-band--blue" aria-labelledby="del-documento-firmado-a-un-expediente-que-puedas-explicar">
        <h2 id="del-documento-firmado-a-un-expediente-que-puedas-explicar" className="text-2xl font-bold mt-12 mb-6 scroll-mt-36">{"Del documento firmado a un expediente que puedas explicar"}</h2>
        <p className="text-gray-600 leading-relaxed mb-4">{"Un proceso logístico bien documentado permite responder quién intervino, qué aceptó, con qué autorización y qué evidencia se conservó. La elección tecnológica debe partir de esas preguntas y de los requisitos de cada operación."}</p>
        <p className="text-gray-600 leading-relaxed mb-4"><strong>{"¿Tu empresa necesita mejorar la firma de contratos, la validación de operadores o la evidencia de entrega? "}<a href="https://www.jaak.ai/contacto" className="text-[#1ECAD3] underline underline-offset-4 hover:text-white">{"Solicita una asesoría o demostración con JAAK"}</a></strong>{" para revisar el flujo y definir qué combinación de firma, identidad y conservación corresponde a tu caso."}</p>
      </section>
    </ArticleLayout>
  );
}
