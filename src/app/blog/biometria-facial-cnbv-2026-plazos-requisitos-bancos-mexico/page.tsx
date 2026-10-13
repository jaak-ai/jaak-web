import { notFound } from "next/navigation";
import ArticleLayout from "../ArticleLayout";
import { isBlogDraftPreview } from "../draftPreview";
import { article, articleSchema } from "./editorial";

export { articleMetadata as metadata } from "./editorial";
export const dynamic = "force-dynamic";

export default function Page() {
  if (!isBlogDraftPreview(process.env)) notFound();
  return (
    <ArticleLayout title={article.title} slug={article.slug} category={article.category} readTime={article.readTime}
      image={article.image} imageAlt={article.imageAlt} imageDimensions={article.imageDimensions}
      date={article.date} organizationAuthor={article.authorName} showBottomCta={false} alignHeaderWithContent jsonLd={articleSchema}
      relatedPosts={[
        { title: "Biometría y CNBV en 2026: el reto ya no es reconocer un rostro", slug: "biometria-cnbv-2026-identidad-autenticacion", category: "Seguridad" },
        { title: "Reconocimiento facial, biometría y prueba de vida: diferencias clave", slug: "reconocimiento-facial-biometria-prueba-de-vida", category: "IA" },
      ]}>
      <section className="article-band article-band--light" aria-label="Introducción">
        <p className="text-gray-600 leading-relaxed mb-4"><strong>{"La Comisión Nacional Bancaria y de Valores (CNBV) actualizó las disposiciones aplicables a la verificación de identidad en determinadas operaciones bancarias. La reforma incorpora nuevas posibilidades para utilizar biometría facial y establece requisitos técnicos, operativos y de seguridad que las instituciones deben considerar en sus procesos de identificación."}</strong></p>
        <p className="text-gray-600 leading-relaxed mb-4">{"Publicada en el Diario Oficial de la Federación (DOF) el 1 de julio de 2026, la resolución modifica diversos artículos de las Disposiciones de carácter general aplicables a las instituciones de crédito, conocidas como Circular Única de Bancos (CUB), e incorpora una nueva versión del Anexo 71."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"Uno de los aspectos más relevantes es el plazo transitorio de "}<strong>{"90 días hábiles para realizar las adecuaciones correspondientes"}</strong>{", contado a partir de la entrada en vigor de la resolución."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"Para las instituciones bancarias, el cambio representa una oportunidad para revisar sus mecanismos de identificación, evaluar la seguridad de sus procesos biométricos y fortalecer la forma en que verifican la identidad de sus clientes."}</p>
      </section>
      <section className="article-band article-band--blue" aria-labelledby="que-cambio-con-la-regulacion-de-biometria-facial-de-la-cnbv-en-2026">
        <h2 id="que-cambio-con-la-regulacion-de-biometria-facial-de-la-cnbv-en-2026" className="text-2xl font-bold mt-12 mb-6 scroll-mt-36">{"¿Qué cambió con la regulación de biometría facial de la CNBV en 2026?"}</h2>
        <p className="text-gray-600 leading-relaxed mb-4">{"La verificación de identidad es un componente fundamental de las operaciones bancarias. Permite establecer controles para identificar a las personas que realizan determinadas transacciones, reducir riesgos de suplantación y fortalecer la seguridad de los servicios financieros."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"Con la reforma publicada el 1 de julio de 2026, la CNBV actualizó las disposiciones relacionadas con el uso de información biométrica, incorporando expresamente nuevas opciones de verificación facial en los supuestos previstos por la regulación."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"Anteriormente, diversas disposiciones se encontraban orientadas principalmente al uso de huellas dactilares. La actualización amplía las alternativas tecnológicas y establece condiciones para el uso de información facial."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"Sin embargo, "}<strong>{"la reforma no significa que todos los bancos estén obligados a sustituir la huella dactilar por reconocimiento facial"}</strong>{". Las instituciones deben identificar qué disposiciones les resultan aplicables y qué mecanismos pueden utilizar conforme a sus operaciones y procedimientos autorizados."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"Los principales cambios se concentran en tres aspectos:"}</p>
        <ol className="list-decimal pl-6 space-y-3 mb-6">
          <li className="text-gray-600 leading-relaxed"><strong>{"Verificación biométrica:"}</strong>{" incorporación de nuevas posibilidades para utilizar información facial en los procedimientos regulados de identificación."}</li>
          <li className="text-gray-600 leading-relaxed"><strong>{"Bases biométricas propias:"}</strong>{" establecimiento de condiciones para conformar, utilizar y proteger registros biométricos de clientes."}</li>
          <li className="text-gray-600 leading-relaxed"><strong>{"Requisitos técnicos y de seguridad:"}</strong>{" actualización del Anexo 71, que contempla controles relacionados con captura, comparación biométrica, prevención de suplantación, infraestructura y protección de la información."}</li>
        </ol>
        <p className="text-gray-600 leading-relaxed mb-4">{"La reforma modifica los artículos 51 Bis, 51 Bis 2, 51 Bis 3, 51 Bis 4 y 51 Bis 5, además del Anexo 71."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"Su alcance debe interpretarse dentro de las disposiciones aplicables a instituciones de crédito y no como una obligación general e indistinta para todas las empresas financieras o tecnológicas del país."}</p>
      </section>
      <section className="article-band article-band--light" aria-labelledby="linea-del-tiempo-cnbv-2026-fechas-y-plazos-de-implementacion">
        <h2 id="linea-del-tiempo-cnbv-2026-fechas-y-plazos-de-implementacion" className="text-2xl font-bold mt-12 mb-6 scroll-mt-36">{"Línea del tiempo CNBV 2026: fechas y plazos de implementación"}</h2>
        <p className="text-gray-600 leading-relaxed mb-4">{"La publicación de la reforma establece distintos momentos que las instituciones deben distinguir para planear sus adecuaciones."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"No todos los plazos corresponden a la misma obligación. Algunos se relacionan con la entrada en vigor de la regulación, mientras que otros dependen de la existencia de bases biométricas o de determinados procedimientos."}</p>
        <h3 id="1-de-julio-de-2026-publicacion-en-el-diario-oficial-de-la-federacion" className="text-xl font-bold mt-8 mb-6 scroll-mt-36">{"1 de julio de 2026: publicación en el Diario Oficial de la Federación"}</h3>
        <p className="text-gray-600 leading-relaxed mb-4">{"La resolución se publica oficialmente y da a conocer las modificaciones a la Circular Única de Bancos."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"A partir de esta publicación, las instituciones pueden identificar las disposiciones modificadas, revisar sus procesos actuales y determinar qué ajustes técnicos, documentales y operativos necesitan realizar."}</p>
        <h3 id="2-de-julio-de-2026-entrada-en-vigor" className="text-xl font-bold mt-8 mb-6 scroll-mt-36">{"2 de julio de 2026: entrada en vigor"}</h3>
        <p className="text-gray-600 leading-relaxed mb-4">{"La resolución entra en vigor al día siguiente de su publicación."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"Esta fecha constituye el punto de referencia para el cómputo de los plazos transitorios establecidos en el documento."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"Desde ese momento, las instituciones deben considerar las nuevas disposiciones y las condiciones de adecuación correspondientes."}</p>
        <h3 id="agosto-de-2026-plazo-de-aviso-para-bases-biometricas-preexistentes" className="text-xl font-bold mt-8 mb-6 scroll-mt-36">{"Agosto de 2026: plazo de aviso para bases biométricas preexistentes"}</h3>
        <p className="text-gray-600 leading-relaxed mb-4">{"La resolución contempla un plazo transitorio de "}<strong>{"30 días naturales"}</strong>{" para las instituciones que ya contaban con bases biométricas en los supuestos regulados."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"Este plazo corresponde a la presentación del aviso aplicable ante la CNBV y debe distinguirse del periodo general de adecuación."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"Las instituciones que se encontraban en esta situación deben verificar que el aviso correspondiente haya sido presentado y conservar la documentación que permita acreditarlo."}</p>
        <h3 id="octubre-de-2026-etapa-final-de-revision-y-adecuacion" className="text-xl font-bold mt-8 mb-6 scroll-mt-36">{"Octubre de 2026: etapa final de revisión y adecuación"}</h3>
        <p className="text-gray-600 leading-relaxed mb-4">{"Durante octubre, las instituciones sujetas a la reforma deben prestar especial atención al estado de sus adecuaciones, considerando la proximidad del vencimiento del plazo general."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"En esta etapa resulta relevante comprobar que los mecanismos de captura, comparación biométrica, seguridad y documentación cumplen los requisitos aplicables."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"También es importante identificar posibles desviaciones, asignar responsables y documentar las medidas implementadas."}</p>
        <h3 id="vencimiento-del-plazo-general-90-dias-habiles" className="text-xl font-bold mt-8 mb-6 scroll-mt-36">{"Vencimiento del plazo general: 90 días hábiles"}</h3>
        <p className="text-gray-600 leading-relaxed mb-4">{"El régimen transitorio establece un plazo máximo de 90 días hábiles, contado a partir de la entrada en vigor, para realizar las adecuaciones previstas."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"El cómputo debe considerar los días inhábiles aplicables a la CNBV. Por ello, la fecha exacta de vencimiento debe verificarse con el calendario oficial correspondiente y no calcularse únicamente a partir de días de lunes a viernes."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"Este plazo no debe confundirse con los avisos específicos previstos para las bases biométricas."}</p>
        <p className="text-gray-600 leading-relaxed mb-4"><strong>{"La principal recomendación para las instituciones es no esperar al vencimiento para comprobar su nivel de preparación."}</strong>{" La implementación de controles biométricos puede involucrar ajustes de infraestructura, procedimientos operativos, pruebas de seguridad y documentación regulatoria."}</p>
      </section>
      <section className="article-band article-band--blue" aria-labelledby="que-establece-el-anexo-71-de-la-cnbv-sobre-biometria-facial">
        <h2 id="que-establece-el-anexo-71-de-la-cnbv-sobre-biometria-facial" className="text-2xl font-bold mt-12 mb-6 scroll-mt-36">{"¿Qué establece el Anexo 71 de la CNBV sobre biometría facial?"}</h2>
        <p className="text-gray-600 leading-relaxed mb-4">{"Uno de los componentes más relevantes de la reforma es la actualización del Anexo 71, que establece especificaciones técnicas relacionadas con los mecanismos de verificación biométrica."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"Su importancia radica en que el uso de reconocimiento facial no depende únicamente de contar con un algoritmo capaz de comparar imágenes."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"También requiere condiciones de captura, controles para prevenir la suplantación, mecanismos de calidad y medidas de protección de la información."}</p>
        <h3 id="captura-y-calidad-de-la-imagen-facial" className="text-xl font-bold mt-8 mb-6 scroll-mt-36">{"Captura y calidad de la imagen facial"}</h3>
        <p className="text-gray-600 leading-relaxed mb-4">{"La calidad de la información biométrica influye directamente en la confiabilidad de los procesos de comparación."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"Por ello, el Anexo 71 contempla especificaciones para la primera captura facial, incluyendo características de la imagen, condiciones de iluminación, posición del rostro y controles de calidad."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"Entre los parámetros previstos se encuentran la captura frontal de imágenes bidimensionales a color y requisitos de resolución, como una distancia mínima de 90 píxeles entre los ojos en los supuestos establecidos."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"También se contemplan mecanismos automáticos para evaluar la calidad de la captura."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"Estos controles permiten reducir problemas asociados con imágenes incompletas, condiciones inadecuadas de iluminación o capturas que no reúnen las características necesarias para el procesamiento biométrico."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"Es importante distinguir los requisitos de primera captura de aquellos aplicables a la autenticación posterior, ya que no necesariamente son idénticos."}</p>
        <h3 id="prueba-de-vida-y-prevencion-de-suplantacion" className="text-xl font-bold mt-8 mb-6 scroll-mt-36">{"Prueba de vida y prevención de suplantación"}</h3>
        <p className="text-gray-600 leading-relaxed mb-4">{"Una fotografía facial puede proporcionar información útil para realizar una comparación biométrica, pero los sistemas de verificación también deben considerar los intentos de suplantación."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"Entre los escenarios que pueden afectar estos procesos se encuentran la presentación de fotografías, videos, máscaras y otros medios utilizados para intentar engañar a un sistema biométrico."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"La prueba de vida, también conocida como "}<em>{"liveness detection"}</em>{", permite evaluar señales relacionadas con la presencia genuina de una persona durante la captura."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"El Anexo 71 incorpora requisitos para mecanismos de detección de ataques de presentación y referencias a evaluaciones técnicas, entre ellas ISO/IEC 30107-3, en los supuestos correspondientes."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"Estos mecanismos forman parte de una estrategia de seguridad biométrica y deben evaluarse conforme a las condiciones técnicas exigibles."}</p>
        <h3 id="comparacion-biometrica-1-1-y-deduplicacion-1-n" className="text-xl font-bold mt-8 mb-6 scroll-mt-36">{"Comparación biométrica 1:1 y deduplicación 1:N"}</h3>
        <p className="text-gray-600 leading-relaxed mb-4">{"La regulación también hace relevante distinguir dos operaciones biométricas que cumplen funciones diferentes."}</p>
        <p className="text-gray-600 leading-relaxed mb-4"><strong>{"Comparación 1:1:"}</strong>{" permite evaluar si el rostro capturado corresponde a una referencia biométrica determinada, como la fotografía asociada a una identidad previamente registrada."}</p>
        <p className="text-gray-600 leading-relaxed mb-4"><strong>{"Identificación o deduplicación 1:N:"}</strong>{" permite comparar una captura contra múltiples registros dentro de una base biométrica para identificar posibles coincidencias."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"La comparación 1:1 resulta útil en procesos de verificación o autenticación, mientras que la deduplicación 1:N permite detectar posibles registros duplicados o asociaciones indebidas dentro de una base."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"El Anexo 71 contempla requisitos específicos relacionados con estas capacidades, por lo que las instituciones deben determinar cuáles resultan aplicables a sus procesos."}</p>
        <h3 id="seguridad-y-proteccion-de-la-informacion-biometrica" className="text-xl font-bold mt-8 mb-6 scroll-mt-36">{"Seguridad y protección de la información biométrica"}</h3>
        <p className="text-gray-600 leading-relaxed mb-4">{"La implementación de tecnología biométrica también requiere proteger la información que se captura, procesa y almacena."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"El Anexo 71 contempla controles de seguridad relacionados con:"}</p>
        <ul className="list-disc pl-6 space-y-3 mb-6">
          <li className="text-gray-600 leading-relaxed">{"Cifrado de información almacenada y transmitida."}</li>
          <li className="text-gray-600 leading-relaxed">{"Restricción de accesos a personal autorizado."}</li>
          <li className="text-gray-600 leading-relaxed">{"Segregación lógica de información y controles sobre infraestructura."}</li>
          <li className="text-gray-600 leading-relaxed">{"Configuración segura de sistemas y equipos."}</li>
          <li className="text-gray-600 leading-relaxed">{"Evaluación de vulnerabilidades y pruebas de seguridad."}</li>
          <li className="text-gray-600 leading-relaxed">{"Protección contra extracción o copia no autorizada."}</li>
          <li className="text-gray-600 leading-relaxed">{"Integridad, conservación y eliminación segura de información."}</li>
        </ul>
        <p className="text-gray-600 leading-relaxed mb-4">{"Estos requisitos muestran que "}<strong>{"la seguridad biométrica no depende exclusivamente de la precisión del reconocimiento facial"}</strong>{", sino también de la infraestructura, los procedimientos y los controles que respaldan su funcionamiento."}</p>
      </section>
      <section className="article-band article-band--light" aria-labelledby="verificacion-de-identidad-bancaria-como-se-complementan-biometria-facial-ocr-y-consultas-oficiales">
        <h2 id="verificacion-de-identidad-bancaria-como-se-complementan-biometria-facial-ocr-y-consultas-oficiales" className="text-2xl font-bold mt-12 mb-6 scroll-mt-36">{"Verificación de identidad bancaria: cómo se complementan biometría facial, OCR y consultas oficiales"}</h2>
        <p className="text-gray-600 leading-relaxed mb-4">{"La verificación de identidad puede fortalecerse mediante la combinación de diferentes mecanismos tecnológicos que permiten contrastar la información de una persona desde distintas fuentes."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"En este contexto, la biometría facial, la prueba de vida, el reconocimiento óptico de caracteres (OCR), la validación documental y las consultas oficiales cumplen funciones complementarias."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"Su integración permite construir procesos en los que no se depende únicamente de una imagen o de un dato declarado por el usuario."}</p>
        <h3 id="biometria-facial-y-prueba-de-vida-verificar-a-la-persona" className="text-xl font-bold mt-8 mb-6 scroll-mt-36">{"Biometría facial y prueba de vida: verificar a la persona"}</h3>
        <p className="text-gray-600 leading-relaxed mb-4">{"La biometría facial permite analizar características del rostro para realizar una comparación con una referencia, como la fotografía contenida en una identificación oficial."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"Cuando se incorpora prueba de vida, el proceso también puede evaluar señales de presencia genuina durante la captura."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"En JAAK, estas capacidades se integran para comparar el rostro de la persona con la imagen de su identificación, mientras se evalúan señales relacionadas con la autenticidad de la captura."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"Esto permite fortalecer la verificación de que la persona que participa en el proceso corresponde a la identidad documental presentada."}</p>
        <h3 id="tecnologia-ocr-extraer-y-procesar-la-informacion-documental" className="text-xl font-bold mt-8 mb-6 scroll-mt-36">{"Tecnología OCR: extraer y procesar la información documental"}</h3>
        <p className="text-gray-600 leading-relaxed mb-4">{"El reconocimiento óptico de caracteres, conocido como OCR, permite extraer automáticamente información visible de una identificación."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"En lugar de depender exclusivamente de la captura manual, esta tecnología facilita el procesamiento de los campos contenidos en el documento."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"JAAK utiliza OCR para extraer información de la identificación y permitir su posterior contraste con otros elementos de verificación."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"La extracción automatizada también ayuda a identificar inconsistencias entre los datos visibles y la información obtenida de otras fuentes."}</p>
        <h3 id="validacion-del-codigo-qr-del-ine-contrastar-la-informacion-del-documento" className="text-xl font-bold mt-8 mb-6 scroll-mt-36">{"Validación del código QR del INE: contrastar la información del documento"}</h3>
        <p className="text-gray-600 leading-relaxed mb-4">{"Las credenciales para votar pueden incorporar elementos de información que permiten realizar verificaciones adicionales."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"JAAK cuenta con capacidades para consultar información asociada al código QR del INE y contrastarla con los datos visibles en la identificación y los extraídos mediante OCR."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"Este mecanismo permite comprobar la consistencia entre distintas representaciones de la información documental, según el modelo de credencial y las capacidades del servicio disponible."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"De esta manera, la validación del QR complementa la lectura de la identificación y contribuye a detectar posibles inconsistencias en sus datos."}</p>
        <h3 id="consultas-a-fuentes-oficiales-ine-y-renapo" className="text-xl font-bold mt-8 mb-6 scroll-mt-36">{"Consultas a fuentes oficiales: INE y RENAPO"}</h3>
        <p className="text-gray-600 leading-relaxed mb-4">{"Otro componente de la verificación de identidad consiste en contrastar información con fuentes oficiales."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"JAAK integra servicios de consulta como INE y RENAPO, que permiten realizar verificaciones adicionales de datos de identidad, según las integraciones habilitadas y el alcance de cada consulta."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"Estas verificaciones complementan los resultados de la biometría facial y del procesamiento documental."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"Es importante distinguir las consultas de información documental o registral de una comparación biométrica realizada directamente contra una base oficial. Cada mecanismo debe evaluarse conforme al tipo de información consultada y al requisito regulatorio que se busca atender."}</p>
        <h3 id="un-proceso-integral-de-verificacion-de-identidad" className="text-xl font-bold mt-8 mb-6 scroll-mt-36">{"Un proceso integral de verificación de identidad"}</h3>
        <p className="text-gray-600 leading-relaxed mb-4">{"Cuando estas tecnologías se utilizan de manera complementaria, es posible contrastar diferentes señales dentro de un mismo proceso:"}</p>
        <ul className="list-disc pl-6 space-y-3 mb-6">
          <li className="text-gray-600 leading-relaxed"><strong>{"La persona:"}</strong>{" mediante biometría facial y prueba de vida."}</li>
          <li className="text-gray-600 leading-relaxed"><strong>{"El documento:"}</strong>{" mediante captura, lectura OCR y análisis de su información."}</li>
          <li className="text-gray-600 leading-relaxed"><strong>{"La consistencia documental:"}</strong>{" mediante validación de elementos como el código QR del INE."}</li>
          <li className="text-gray-600 leading-relaxed"><strong>{"La información oficial:"}</strong>{" mediante consultas a servicios como INE y RENAPO."}</li>
        </ul>
        <p className="text-gray-600 leading-relaxed mb-4">{"Este enfoque permite fortalecer la confianza en la identidad verificada, detectar inconsistencias y apoyar decisiones de identificación dentro de procesos digitales."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"La combinación de controles no elimina todos los riesgos ni sustituye las obligaciones particulares de cada institución, pero permite establecer una arquitectura de verificación más completa que el uso aislado de un único mecanismo."}</p>
      </section>
      <section className="article-band article-band--blue" aria-labelledby="bases-biometricas-propias-que-pueden-hacer-los-bancos-y-que-restricciones-deben-considerar">
        <h2 id="bases-biometricas-propias-que-pueden-hacer-los-bancos-y-que-restricciones-deben-considerar" className="text-2xl font-bold mt-12 mb-6 scroll-mt-36">{"Bases biométricas propias: qué pueden hacer los bancos y qué restricciones deben considerar"}</h2>
        <p className="text-gray-600 leading-relaxed mb-4">{"La reforma también establece condiciones para que las instituciones de crédito conformen y utilicen bases biométricas propias de sus clientes, dentro de los supuestos permitidos por la regulación."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"Estas bases permiten conservar referencias biométricas para realizar procesos posteriores de verificación o autenticación, siempre que se cumplan los requisitos técnicos, operativos y de seguridad correspondientes."}</p>
        <h3 id="enrolamiento-biometrico-y-autenticacion-posterior" className="text-xl font-bold mt-8 mb-6 scroll-mt-36">{"Enrolamiento biométrico y autenticación posterior"}</h3>
        <p className="text-gray-600 leading-relaxed mb-4">{"El enrolamiento biométrico consiste en capturar y registrar información biométrica de una persona para asociarla con una identidad determinada."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"Durante este procedimiento, la institución debe implementar los controles de captura, verificación y seguridad que resulten aplicables."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"Posteriormente, la información registrada puede utilizarse como referencia para realizar procesos de autenticación, de acuerdo con los mecanismos autorizados y las disposiciones correspondientes."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"La calidad del enrolamiento inicial es especialmente importante, ya que una referencia biométrica incorrecta o asociada indebidamente puede comprometer verificaciones posteriores."}</p>
        <h3 id="se-pueden-compartir-bases-biometricas-entre-instituciones" className="text-xl font-bold mt-8 mb-6 scroll-mt-36">{"¿Se pueden compartir bases biométricas entre instituciones?"}</h3>
        <p className="text-gray-600 leading-relaxed mb-4">{"La posibilidad de conformar bases biométricas propias no implica que las instituciones puedan compartir o comercializar libremente la información de sus clientes."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"La regulación establece restricciones sobre el intercambio, transferencia y reutilización de bases biométricas para los procedimientos de verificación regulados."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"Por ello, cada institución debe evaluar cuidadosamente cómo administra la información, qué terceros participan en su tratamiento y cuáles son las condiciones permitidas para su utilización."}</p>
        <h3 id="que-sucede-cuando-se-contrata-a-un-proveedor-tecnologico" className="text-xl font-bold mt-8 mb-6 scroll-mt-36">{"¿Qué sucede cuando se contrata a un proveedor tecnológico?"}</h3>
        <p className="text-gray-600 leading-relaxed mb-4">{"Las instituciones pueden apoyarse en proveedores especializados para implementar componentes tecnológicos de sus procesos de verificación de identidad, considerando las disposiciones aplicables a la contratación de terceros."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"Sin embargo, incorporar tecnología externa no elimina las responsabilidades regulatorias que correspondan a la institución."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"Es necesario evaluar las capacidades del proveedor, los mecanismos de protección de información, las condiciones contractuales y las evidencias técnicas que permitan demostrar el funcionamiento de los controles implementados."}</p>
      </section>
      <section className="article-band article-band--light" aria-labelledby="checklist-cnbv-2026-que-deben-hacer-las-instituciones-bancarias-para-prepararse">
        <h2 id="checklist-cnbv-2026-que-deben-hacer-las-instituciones-bancarias-para-prepararse" className="text-2xl font-bold mt-12 mb-6 scroll-mt-36">{"Checklist CNBV 2026: ¿qué deben hacer las instituciones bancarias para prepararse?"}</h2>
        <p className="text-gray-600 leading-relaxed mb-4">{"La adecuación a los nuevos requisitos biométricos requiere coordinación entre las áreas de Cumplimiento, Tecnología, Seguridad de la Información, Operaciones, Jurídico y Riesgos."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"Aunque las acciones específicas dependerán de los procesos de cada institución, existen siete actividades prioritarias que permiten organizar una revisión integral."}</p>
        <h3 id="1-identificar-las-operaciones-sujetas-a-los-nuevos-requisitos" className="text-xl font-bold mt-8 mb-6 scroll-mt-36">{"1. Identificar las operaciones sujetas a los nuevos requisitos"}</h3>
        <p className="text-gray-600 leading-relaxed mb-4">{"El primer paso consiste en determinar cuáles operaciones, canales y procedimientos de identificación se encuentran dentro del alcance de las disposiciones modificadas."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"Esta revisión permite establecer qué obligaciones son aplicables y evitar cambios tecnológicos que no respondan a una necesidad regulatoria concreta."}</p>
        <h3 id="2-evaluar-los-mecanismos-biometricos-existentes" className="text-xl font-bold mt-8 mb-6 scroll-mt-36">{"2. Evaluar los mecanismos biométricos existentes"}</h3>
        <p className="text-gray-600 leading-relaxed mb-4">{"Las instituciones deben revisar sus mecanismos actuales de captura y comparación biométrica."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"Es importante identificar qué tecnologías utilizan, cuáles son sus condiciones de operación y si cuentan con las capacidades necesarias para atender los requisitos correspondientes del Anexo 71."}</p>
        <h3 id="3-revisar-la-calidad-de-captura-y-los-controles-contra-suplantacion" className="text-xl font-bold mt-8 mb-6 scroll-mt-36">{"3. Revisar la calidad de captura y los controles contra suplantación"}</h3>
        <p className="text-gray-600 leading-relaxed mb-4">{"Los procesos de enrolamiento y autenticación deben evaluarse considerando los parámetros técnicos aplicables."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"Esto incluye revisar la calidad de las imágenes, los controles de captura, los mecanismos contra ataques de presentación y las evaluaciones técnicas requeridas."}</p>
        <h3 id="4-validar-los-procesos-de-verificacion-documental-y-consultas-oficiales" className="text-xl font-bold mt-8 mb-6 scroll-mt-36">{"4. Validar los procesos de verificación documental y consultas oficiales"}</h3>
        <p className="text-gray-600 leading-relaxed mb-4">{"Las instituciones deben identificar cómo verifican la información de las identificaciones y qué mecanismos utilizan para contrastarla con fuentes oficiales."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"Esta revisión puede incluir lectura documental, OCR, verificación de elementos de seguridad y consultas a autoridades, según los procedimientos implementados."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"También debe comprobarse que el tipo de consulta realizada corresponda al requisito regulatorio específico que se pretende atender."}</p>
        <h3 id="5-fortalecer-la-seguridad-de-la-informacion-biometrica" className="text-xl font-bold mt-8 mb-6 scroll-mt-36">{"5. Fortalecer la seguridad de la información biométrica"}</h3>
        <p className="text-gray-600 leading-relaxed mb-4">{"Es necesario revisar la arquitectura tecnológica, el cifrado, la administración de accesos, la segregación de información y los mecanismos de protección de las bases biométricas."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"Asimismo, deben evaluarse los controles de seguridad y las pruebas técnicas previstas por las disposiciones aplicables."}</p>
        <h3 id="6-revisar-avisos-autorizaciones-y-documentacion" className="text-xl font-bold mt-8 mb-6 scroll-mt-36">{"6. Revisar avisos, autorizaciones y documentación"}</h3>
        <p className="text-gray-600 leading-relaxed mb-4">{"Las instituciones deben verificar si sus procesos requieren avisos ante la CNBV, autorizaciones específicas o documentación adicional."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"También deben comprobar el cumplimiento de los plazos correspondientes, especialmente cuando utilizan bases biométricas propias o procedimientos alternativos."}</p>
        <h3 id="7-ejecutar-pruebas-y-conservar-evidencias" className="text-xl font-bold mt-8 mb-6 scroll-mt-36">{"7. Ejecutar pruebas y conservar evidencias"}</h3>
        <p className="text-gray-600 leading-relaxed mb-4">{"La implementación debe acompañarse de documentación que permita acreditar los controles utilizados y los resultados de las evaluaciones realizadas."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"Entre las evidencias relevantes pueden encontrarse procedimientos operativos, resultados de pruebas, documentación de infraestructura, registros de seguridad y constancias de los trámites regulatorios aplicables."}</p>
        <p className="text-gray-600 leading-relaxed mb-4"><strong>{"La preparación no termina con la incorporación de una tecnología biométrica. También requiere demostrar que los procesos funcionan bajo las condiciones técnicas, operativas y de seguridad correspondientes."}</strong></p>
      </section>
      <section className="article-band article-band--blue" aria-labelledby="como-ayuda-jaak-a-fortalecer-los-procesos-de-verificacion-de-identidad">
        <h2 id="como-ayuda-jaak-a-fortalecer-los-procesos-de-verificacion-de-identidad" className="text-2xl font-bold mt-12 mb-6 scroll-mt-36">{"¿Cómo ayuda JAAK a fortalecer los procesos de verificación de identidad?"}</h2>
        <p className="text-gray-600 leading-relaxed mb-4">{"La evolución de los requisitos de identidad digital en el sector financiero hace cada vez más importante contar con mecanismos que permitan verificar a las personas, analizar sus documentos y contrastar información con fuentes confiables."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"En JAAK desarrollamos tecnología de verificación de identidad que integra diferentes controles dentro de un mismo proceso."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"Nuestras capacidades incluyen:"}</p>
        <ul className="list-disc pl-6 space-y-3 mb-6">
          <li className="text-gray-600 leading-relaxed"><strong>{"Biometría facial:"}</strong>{" comparación del rostro capturado con la fotografía de la identificación presentada."}</li>
          <li className="text-gray-600 leading-relaxed"><strong>{"Prueba de vida:"}</strong>{" evaluación de señales de presencia genuina para fortalecer los controles frente a intentos de suplantación."}</li>
          <li className="text-gray-600 leading-relaxed"><strong>{"Tecnología OCR:"}</strong>{" extracción automatizada de información contenida en identificaciones oficiales."}</li>
          <li className="text-gray-600 leading-relaxed"><strong>{"Validación del código QR del INE:"}</strong>{" consulta y contraste de información documental con los datos visibles y extraídos mediante OCR."}</li>
          <li className="text-gray-600 leading-relaxed"><strong>{"Consultas a fuentes oficiales:"}</strong>{" verificación de información mediante servicios como INE y RENAPO, de acuerdo con las integraciones disponibles."}</li>
        </ul>
        <p className="text-gray-600 leading-relaxed mb-4">{"La combinación de estas capacidades permite a las organizaciones construir procesos de verificación que relacionan a la persona, su identificación y la información consultada en fuentes oficiales."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"Para las instituciones financieras que están evaluando sus mecanismos de identificación frente a los cambios regulatorios de la CNBV, este enfoque permite analizar distintas capas de verificación dentro de una arquitectura tecnológica integrada."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"La adecuación al Anexo 71 debe evaluarse conforme a los requisitos particulares de cada institución y a las capacidades técnicas efectivamente implementadas."}</p>
        <p className="text-gray-600 leading-relaxed mb-4"><strong>{"En JAAK ayudamos a las organizaciones a fortalecer sus procesos de identidad digital mediante tecnología que combina verificación biométrica, documental y consultas oficiales."}</strong></p>
        <p className="text-gray-600 leading-relaxed mb-4"><a href="https://jaak.ai" className="text-[#1ECAD3] underline underline-offset-4 hover:text-white">{"Conoce las soluciones de verificación de identidad de JAAK"}</a></p>
      </section>
      <section className="article-band article-band--light" aria-labelledby="preguntas-frecuentes-sobre-biometria-facial-y-cnbv-2026">
        <h2 id="preguntas-frecuentes-sobre-biometria-facial-y-cnbv-2026" className="text-2xl font-bold mt-12 mb-6 scroll-mt-36">{"Preguntas frecuentes sobre biometría facial y CNBV 2026"}</h2>
        <h3 id="la-cnbv-obliga-a-todos-los-bancos-a-utilizar-reconocimiento-facial" className="text-xl font-bold mt-8 mb-6 scroll-mt-36">{"¿La CNBV obliga a todos los bancos a utilizar reconocimiento facial?"}</h3>
        <p className="text-gray-600 leading-relaxed mb-4">{"No. La reforma incorpora nuevas posibilidades para utilizar información biométrica facial en determinados procedimientos de verificación de identidad."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"Las instituciones deben evaluar las disposiciones que les resultan aplicables y los mecanismos permitidos para cada operación."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"La actualización no debe interpretarse como una obligación general de sustituir todas las verificaciones mediante huella dactilar por reconocimiento facial."}</p>
        <h3 id="cuando-vence-el-plazo-de-90-dias-habiles-de-la-cnbv" className="text-xl font-bold mt-8 mb-6 scroll-mt-36">{"¿Cuándo vence el plazo de 90 días hábiles de la CNBV?"}</h3>
        <p className="text-gray-600 leading-relaxed mb-4">{"La resolución establece un plazo máximo de 90 días hábiles, contado a partir de su entrada en vigor el 2 de julio de 2026, para realizar las adecuaciones previstas."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"La fecha exacta debe determinarse considerando el calendario de días inhábiles aplicable a la CNBV."}</p>
        <h3 id="que-establece-el-anexo-71-sobre-biometria-facial" className="text-xl font-bold mt-8 mb-6 scroll-mt-36">{"¿Qué establece el Anexo 71 sobre biometría facial?"}</h3>
        <p className="text-gray-600 leading-relaxed mb-4">{"El Anexo 71 establece requisitos técnicos relacionados con la captura, calidad, comparación y protección de información biométrica."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"También contempla mecanismos de prevención de suplantación, controles de seguridad y especificaciones para determinados procesos de enrolamiento y autenticación."}</p>
        <h3 id="cual-es-la-diferencia-entre-reconocimiento-facial-y-prueba-de-vida" className="text-xl font-bold mt-8 mb-6 scroll-mt-36">{"¿Cuál es la diferencia entre reconocimiento facial y prueba de vida?"}</h3>
        <p className="text-gray-600 leading-relaxed mb-4">{"El reconocimiento facial permite comparar las características de un rostro con una referencia biométrica."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"La prueba de vida evalúa señales relacionadas con la presencia genuina de una persona durante la captura."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"Ambos mecanismos pueden utilizarse de manera complementaria para fortalecer los procesos de verificación de identidad."}</p>
        <h3 id="es-obligatorio-consultar-al-ine-para-verificar-la-identidad" className="text-xl font-bold mt-8 mb-6 scroll-mt-36">{"¿Es obligatorio consultar al INE para verificar la identidad?"}</h3>
        <p className="text-gray-600 leading-relaxed mb-4">{"La obligación depende de la operación y del procedimiento regulatorio aplicable."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"En determinados supuestos, las disposiciones contemplan mecanismos de verificación con registros de autoridades competentes."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"Por ello, las instituciones deben identificar qué consultas y procedimientos corresponden a sus operaciones, así como los requisitos técnicos y de autorización asociados."}</p>
        <h3 id="que-requisitos-deben-cumplir-las-bases-biometricas-propias" className="text-xl font-bold mt-8 mb-6 scroll-mt-36">{"¿Qué requisitos deben cumplir las bases biométricas propias?"}</h3>
        <p className="text-gray-600 leading-relaxed mb-4">{"Las instituciones que conformen bases biométricas propias deben atender las disposiciones aplicables en materia de enrolamiento, verificación, seguridad, administración de información y avisos regulatorios."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"También deben considerar las restricciones sobre utilización y transferencia de información biométrica."}</p>
        <h3 id="los-bancos-pueden-contratar-proveedores-externos-para-verificar-identidades" className="text-xl font-bold mt-8 mb-6 scroll-mt-36">{"¿Los bancos pueden contratar proveedores externos para verificar identidades?"}</h3>
        <p className="text-gray-600 leading-relaxed mb-4">{"Sí, pueden apoyarse en proveedores tecnológicos especializados, siempre que la contratación y los servicios cumplan las disposiciones aplicables."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"La institución debe evaluar los controles, capacidades y responsabilidades asociados al servicio contratado."}</p>
        <h3 id="como-se-complementan-ocr-biometria-facial-y-consultas-oficiales" className="text-xl font-bold mt-8 mb-6 scroll-mt-36">{"¿Cómo se complementan OCR, biometría facial y consultas oficiales?"}</h3>
        <p className="text-gray-600 leading-relaxed mb-4">{"Cada tecnología permite analizar un componente distinto de la identidad."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"La biometría facial compara características del rostro; la prueba de vida evalúa señales de presencia genuina; el OCR extrae información documental; y las consultas oficiales permiten contrastar determinados datos con registros de autoridades."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"Cuando estos mecanismos se integran, las organizaciones pueden identificar inconsistencias y fortalecer la confiabilidad de sus procesos de verificación."}</p>
      </section>
      <section className="article-band article-band--blue" aria-labelledby="conclusion-de-la-adecuacion-regulatoria-a-procesos-de-identidad-mas-confiables">
        <h2 id="conclusion-de-la-adecuacion-regulatoria-a-procesos-de-identidad-mas-confiables" className="text-2xl font-bold mt-12 mb-6 scroll-mt-36">{"Conclusión: de la adecuación regulatoria a procesos de identidad más confiables"}</h2>
        <p className="text-gray-600 leading-relaxed mb-4">{"La reforma publicada por la CNBV el 1 de julio de 2026 representa una actualización importante para los mecanismos de verificación de identidad utilizados en determinadas operaciones bancarias."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"La incorporación de nuevas posibilidades de biometría facial y la actualización del Anexo 71 ponen de manifiesto la importancia de evaluar no solamente la tecnología utilizada, sino también las condiciones de captura, los controles contra suplantación, la seguridad de la información y la documentación de los procedimientos."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"Con un plazo transitorio de 90 días hábiles, las instituciones deben revisar oportunamente sus obligaciones aplicables, identificar posibles brechas y asegurar que sus procesos cuenten con los controles correspondientes."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"En este contexto, la combinación de biometría facial, prueba de vida, validación documental y consultas a fuentes oficiales permite fortalecer la verificación de identidad mediante distintas señales complementarias."}</p>
        <p className="text-gray-600 leading-relaxed mb-4"><strong>{"Porque verificar una identidad no consiste únicamente en reconocer un rostro, sino en establecer confianza sobre la persona, su documento y la información que respalda su identidad."}</strong></p>
        <p className="text-gray-600 leading-relaxed mb-4">{"En JAAK desarrollamos soluciones tecnológicas para ayudar a las organizaciones a construir procesos de identidad digital más seguros, confiables y adaptables a sus necesidades operativas."}</p>
        <p className="text-gray-600 leading-relaxed mb-4"><strong><a href="https://jaak.ai" className="text-[#1ECAD3] underline underline-offset-4 hover:text-white">{"Conoce cómo JAAK puede fortalecer tus procesos de verificación de identidad"}</a></strong></p>
        <hr className="my-8 border-gray-200" />
        <h3 id="fuentes-oficiales" className="text-xl font-bold mt-8 mb-6 scroll-mt-36">{"Fuentes oficiales"}</h3>
        <p className="text-gray-600 leading-relaxed mb-4"><strong>{"Diario Oficial de la Federación."}</strong>{" Resolución que modifica las Disposiciones de carácter general aplicables a las instituciones de crédito. Publicada el 1 de julio de 2026."}</p>
        <p className="text-gray-600 leading-relaxed mb-4"><a href="https://sidof.segob.gob.mx/notas/5792307" className="text-[#1ECAD3] underline underline-offset-4 break-words hover:text-white">{"https://sidof.segob.gob.mx/notas/5792307"}</a></p>
        <p className="text-gray-600 leading-relaxed mb-4"><strong>{"Comisión Nacional Bancaria y de Valores."}</strong>{" Disposiciones de carácter general aplicables a las instituciones de crédito, artículos 51 Bis a 51 Bis 5 y Anexo 71, conforme a la reforma publicada."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"El contenido describe el alcance general de la reforma y no sustituye la evaluación jurídica de cada institución."}</p>
      </section>
    </ArticleLayout>
  );
}
