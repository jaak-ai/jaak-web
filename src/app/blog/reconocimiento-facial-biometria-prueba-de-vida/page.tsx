import { notFound } from "next/navigation";
import ArticleLayout from "../ArticleLayout";
import ScrollableArticleTable from "../ScrollableArticleTable";
import { isBlogDraftPreview } from "../draftPreview";
import { article, articleMetadata, articleSchema } from "./editorial";

export const dynamic = "force-dynamic";
export const metadata = articleMetadata;

export default function Page() {
  if (!isBlogDraftPreview(process.env)) notFound();
  return (
    <ArticleLayout title={article.title} slug={article.slug} category="IA" readTime="10 min"
      showAuthor={false} showBottomCta={false} jsonLd={articleSchema}
      image={article.image} imageAlt={article.imageAlt}
      relatedPosts={[{ title: "Inteligencia artificial en la verificación de identidad: aplicaciones, riesgos y límites", slug: "inteligencia-artificial-verificacion-identidad", category: "IA" }]}>
      <section className="article-band article-band--light" aria-label="Introducción">
        <p className="text-gray-600 leading-relaxed mb-4">{"El reconocimiento facial o Face Recognition compara o identifica personas mediante características del rostro. La prueba de vida facial o Face Liveness Detection evalúa señales de presencia genuina durante la captura. Ambos se relacionan con la biometría, pero cumplen funciones diferentes dentro de la verificación de identidad."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"En JAAK, la comparación facial y la prueba de vida forman parte de la "}<a href="https://www.jaak.ai/plataforma/verificacion-identidad" className="text-[#1ECAD3] underline underline-offset-4 hover:text-white">{"solución de verificación de identidad"}</a>{". Su combinación ayuda a abordar dos preguntas: si el rostro coincide con la referencia y si la captura presenta señales de una interacción genuina."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"Estas diferencias importan al diseñar un proceso digital. Una empresa puede recibir una fotografía, encontrar una coincidencia facial y todavía necesitar evidencia sobre la captura o el documento presentado. También puede obtener una prueba de vida favorable sin haber determinado a quién pertenece ese rostro."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"Para una empresa que recibe solicitudes de crédito, abre cuentas o incorpora clientes a distancia, entender esa diferencia permite definir qué evidencia necesita antes de continuar con una operación."}</p>
      </section>
      <section className="article-band article-band--blue" aria-labelledby="biometria-la-categoria-que-incluye-distintas-formas-de-reconocimiento">
        <h2 id="biometria-la-categoria-que-incluye-distintas-formas-de-reconocimiento" className="text-2xl font-bold mt-12 mb-6 scroll-mt-36">{"Biometría: la categoría que incluye distintas formas de reconocimiento"}</h2>
        <p className="text-gray-600 leading-relaxed mb-4">{"La biometría comprende el reconocimiento automatizado basado en características biológicas o de comportamiento. Puede utilizar el rostro, las huellas, el iris o determinados patrones de comportamiento. Esta definición aparece en la "}<a href="https://pages.nist.gov/800-63-4/sp800-63b.html" className="text-[#1ECAD3] underline underline-offset-4 hover:text-white">{"guía NIST SP 800-63B-4"}</a>{"."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"Por eso, biometría y reconocimiento facial no son términos intercambiables: el reconocimiento facial es una aplicación de la biometría."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"Cuando un proveedor ofrece “verificación biométrica”, la primera pregunta debería ser qué característica utiliza y para qué tarea. También conviene pedir que distinga la comparación, el enrolamiento y los controles sobre la captura."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"La etiqueta general no describe, por sí sola, todo el proceso ni su cobertura frente a intentos de suplantación."}</p>
      </section>
      <section className="article-band article-band--light" aria-labelledby="para-que-sirve-face-recognition-en-jaak">
        <h2 id="para-que-sirve-face-recognition-en-jaak" className="text-2xl font-bold mt-12 mb-6 scroll-mt-36">{"¿Para qué sirve Face Recognition en JAAK?"}</h2>
        <p className="text-gray-600 leading-relaxed mb-4">{"En un proceso de alta digital, la comparación facial permite evaluar el vínculo entre el rostro capturado y una referencia. La "}<a href="https://www.jaak.ai/docs/productos/one-to-one" className="text-[#1ECAD3] underline underline-offset-4 hover:text-white">{"documentación One-to-One de JAAK"}</a>{" describe la comparación de dos imágenes faciales. En este artículo utilizamos Face Recognition como término general y comparación facial 1:1 para la operación concreta."}</p>
        <h3 id="vincular-el-rostro-con-la-identificacion-presentada" className="text-xl font-bold mt-8 mb-4 scroll-mt-36">{"Vincular el rostro con la identificación presentada"}</h3>
        <p className="text-gray-600 leading-relaxed mb-4">{"Un ejemplo hipotético es la solicitud de un crédito: la empresa necesita evaluar si el rostro capturado corresponde a la fotografía de la identificación. La comparación aporta evidencia sobre ese vínculo."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"Para operaciones como esta, conviene interpretar el resultado junto con la revisión del documento y la captura. La semejanza facial no demuestra por sí sola que toda la información presentada sea auténtica."}</p>
        <h3 id="revisar-la-calidad-y-el-resultado-de-la-comparacion" className="text-xl font-bold mt-8 mb-4 scroll-mt-36">{"Revisar la calidad y el resultado de la comparación"}</h3>
        <p className="text-gray-600 leading-relaxed mb-4">{"La documentación de JAAK también describe información sobre similitud y calidad de las imágenes. Esto permite distinguir el resultado de comparación de problemas que afectan la captura."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"Recomendamos definir cómo se atiende cada caso: continuar, solicitar otra captura o derivar a revisión conforme a una política. Un resultado insuficiente no debe transformarse automáticamente en una acusación de fraude."}</p>
        <h3 id="diferenciar-la-comparacion-1-1-de-una-busqueda-1-n" className="text-xl font-bold mt-8 mb-4 scroll-mt-36">{"Diferenciar la comparación 1:1 de una búsqueda 1:N"}</h3>
        <p className="text-gray-600 leading-relaxed mb-4">{"La comparación 1:1 contrasta dos muestras. Una búsqueda 1:N busca candidatos entre varias referencias. En el caso de selfie contra documento, la explicación relevante es la primera; no hace falta atribuir una búsqueda en bases a ese flujo."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"Localizar un rostro en una imagen también es distinto de compararlo. Un recuadro sobre una cara, por sí solo, no acredita que se haya comprobado una identidad."}</p>
      </section>
      <section className="article-band article-band--blue" aria-labelledby="para-que-sirve-face-liveness-detection-en-jaak">
        <h2 id="para-que-sirve-face-liveness-detection-en-jaak" className="text-2xl font-bold mt-12 mb-6 scroll-mt-36">{"¿Para qué sirve Face Liveness Detection en JAAK?"}</h2>
        <p className="text-gray-600 leading-relaxed mb-4">{"La prueba de vida, también llamada liveness detection, busca señales de que una muestra procede de una persona viva presente en el punto de captura. El "}<a href="https://csrc.nist.gov/glossary/term/Presentation_Attack_Detection" className="text-[#1ECAD3] underline underline-offset-4 hover:text-white">{"glosario de NIST sobre detección de ataques de presentación"}</a>{" la sitúa como un subconjunto de esos métodos."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"La detección de ataques de presentación, o PAD, aborda intentos de engaño ante el sensor, como la presentación de fotografías, reproducciones o máscaras. Prueba de vida y PAD están relacionados, pero no deberían tratarse como equivalentes absolutos sin revisar el método y el alcance."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"La "}<a href="https://www.jaak.ai/docs/productos/liveness" className="text-[#1ECAD3] underline underline-offset-4 hover:text-white">{"documentación Liveness de JAAK"}</a>{" describe el análisis de videos faciales para evaluar presencia y señales de suplantación. También contempla la selección de un cuadro del video para análisis posterior, incluida la comparación facial."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"En una solicitud remota, esta función aporta evidencia sobre la captura. Su resultado debe relacionarse con el reconocimiento facial y con el documento, según el caso. Una persona puede estar presente y aun así presentar una identificación que no le pertenece."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"Para el negocio, nuestra recomendación es diseñar la atención de capturas inconclusas y resultados desfavorables, junto con los criterios de comparación. Así, la prueba de vida tiene una función definida dentro del proceso."}</p>
        <h3 id="que-significa-prueba-de-vida-pasiva" className="text-xl font-bold mt-8 mb-4 scroll-mt-36">{"¿Qué significa prueba de vida pasiva?"}</h3>
        <p className="text-gray-600 leading-relaxed mb-4">{"La "}<a href="https://www.jaak.ai/plataforma/verificacion-identidad" className="text-[#1ECAD3] underline underline-offset-4 hover:text-white">{"página de verificación de identidad de JAAK"}</a>{" presenta una modalidad pasiva. En términos de interacción, esto significa que el análisis no exige los retos de movimiento propios de una modalidad activa. El usuario sí necesita seguir las instrucciones de posicionamiento y captura."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"Al diseñar la experiencia, recomendamos explicar claramente qué debe hacer la persona y qué ocurrirá si no completa la captura. La modalidad pasiva no debe interpretarse como ausencia de requisitos de calidad ni como cobertura universal de ataques."}</p>
      </section>
      <section className="article-band article-band--light" aria-labelledby="diferencias-clave-en-una-tabla">
        <h2 id="diferencias-clave-en-una-tabla" className="text-2xl font-bold mt-12 mb-6 scroll-mt-36">{"Diferencias clave en una tabla"}</h2>
        <ScrollableArticleTable label="Tabla: Concepto" headers={["Concepto", "Qué representa o evalúa", "Qué no permite concluir por sí solo"]} rows={[["Biometría", "Categoría de reconocimiento mediante características físicas o de comportamiento", "Qué controles incluye una implementación específica"], ["Face Recognition / reconocimiento facial", "Comparación o identificación mediante características del rostro", "Autenticidad documental o ausencia de manipulación en toda la sesión"], ["Comparación facial 1:1", "Relación entre una muestra y una referencia determinada", "Que toda la identidad declarada quedó comprobada"], ["Identificación facial 1:N", "Búsqueda de candidatos entre varias referencias", "Que un candidato sea una identidad confirmada sin aplicar los criterios pertinentes"], ["Face Liveness Detection / prueba de vida facial", "Señales de presencia genuina durante la captura", "Quién es la persona o que todos los ataques posibles estén cubiertos"]]} />
        <p className="text-gray-600 leading-relaxed mb-4">{"Esta distinción ayuda a evitar una expectativa frecuente: que un único resultado favorable responda todas las preguntas de identidad."}</p>
      </section>
      <section className="article-band article-band--blue" aria-labelledby="como-se-complementan-reconocimiento-facial-y-prueba-de-vida-en-jaak">
        <h2 id="como-se-complementan-reconocimiento-facial-y-prueba-de-vida-en-jaak" className="text-2xl font-bold mt-12 mb-6 scroll-mt-36">{"Cómo se complementan reconocimiento facial y prueba de vida en JAAK"}</h2>
        <p className="text-gray-600 leading-relaxed mb-4">{"La "}<a href="https://www.jaak.ai/docs/verificar-identidad/api" className="text-[#1ECAD3] underline underline-offset-4 hover:text-white">{"guía de KYC vía API de JAAK"}</a>{" describe la captura de documentos y datos biométricos y la coordinación de servicios dentro de una sesión. Sobre esa base, imaginemos una solicitud de crédito remota. El siguiente ejemplo es ilustrativo; el orden y los componentes dependen de la configuración."}</p>
        <ol className="list-decimal pl-6 space-y-2 mb-6">
          <li>{"Evidencia documental. La empresa recibe una identificación y aplica las comprobaciones definidas para su caso."}</li>
          <li>{"Captura facial. Obtiene una muestra del solicitante en las condiciones previstas."}</li>
          <li>{"Presencia. Evalúa las señales de captura genuina mediante el control seleccionado."}</li>
          <li>{"Comparación. Contrasta la muestra con la referencia correspondiente."}</li>
          <li>{"Decisión. Interpreta el conjunto de resultados y atiende inconsistencias o excepciones."}</li>
        </ol>
        <p className="text-gray-600 leading-relaxed mb-4">{"Para los equipos de producto y operaciones, nuestra recomendación es documentar qué pregunta responde cada paso, qué evidencia deja y qué ocurre cuando el resultado no permite continuar. Para tecnología, es importante mantener relacionados los resultados de la misma sesión."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"Una prueba de vida favorable con una comparación desfavorable, por ejemplo, no debería interpretarse automáticamente como identidad confirmada."}</p>
      </section>
      <section className="article-band article-band--light" aria-labelledby="que-relacion-tienen-con-deepfakes-e-inyeccion">
        <h2 id="que-relacion-tienen-con-deepfakes-e-inyeccion" className="text-2xl font-bold mt-12 mb-6 scroll-mt-36">{"Qué relación tienen con deepfakes e inyección"}</h2>
        <p className="text-gray-600 leading-relaxed mb-4">{"Un deepfake es contenido generado o modificado con IA para representar una apariencia o actuación. Un ataque de inyección introduce material en el flujo digital, en lugar de limitarse a presentarlo frente a la cámara. Pueden combinarse, pero describen aspectos distintos."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"La "}<a href="https://pages.nist.gov/800-63-4/sp800-63a.html#digital-injection-prevention-and-forged-media-detection" className="text-[#1ECAD3] underline underline-offset-4 hover:text-white">{"sección 3.14 de NIST SP 800-63A-4"}</a>{" distingue estos riesgos y advierte que una comparación biométrica no previene la inyección. También indica que los mecanismos de presentación no bastan para cubrir todos sus casos."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"Por eso, no conviene interpretar “incluye prueba de vida” como una afirmación de protección universal frente a deepfakes o manipulación del flujo."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"Para evaluar esa protección, pregunta por amenazas concretas, pruebas realizadas y controles de captura. NIST se utiliza aquí como referencia técnica, sin atribuirle obligatoriedad general en México."}</p>
      </section>
      <section className="article-band article-band--blue" aria-labelledby="como-interpretar-errores-puntuaciones-y-resultados">
        <h2 id="como-interpretar-errores-puntuaciones-y-resultados" className="text-2xl font-bold mt-12 mb-6 scroll-mt-36">{"Cómo interpretar errores, puntuaciones y resultados"}</h2>
        <p className="text-gray-600 leading-relaxed mb-4">{"La comparación facial puede asociar imágenes de personas distintas o no asociar imágenes de una misma persona. NIST documenta estas diferencias, junto con la influencia de la calidad de imagen, en su "}<a href="https://pages.nist.gov/frvt/html/frvt_demographics.html" className="text-[#1ECAD3] underline underline-offset-4 hover:text-white">{"evaluación de efectos demográficos"}</a>{"."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"En una implementación, solicita que el proveedor explique qué significa cada puntuación y cómo determina la decisión. Una puntuación no debe presentarse como un porcentaje de certeza sobre toda la identidad, salvo que exista una definición y evidencia que sustenten esa interpretación específica."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"Asimismo, un fallo de captura o un resultado inconcluso no demuestra necesariamente un intento de fraude. Recomendamos distinguir problemas técnicos, evidencia insuficiente y señales de ataque para decidir la atención adecuada."}</p>
      </section>
      <section className="article-band article-band--light" aria-labelledby="que-deberia-preguntar-una-empresa-antes-de-implementar">
        <h2 id="que-deberia-preguntar-una-empresa-antes-de-implementar" className="text-2xl font-bold mt-12 mb-6 scroll-mt-36">{"Qué debería preguntar una empresa antes de implementar"}</h2>
        <ScrollableArticleTable label="Tabla: Pregunta" headers={["Pregunta", "Para qué sirve"]} rows={[["¿Qué modalidad biométrica y qué operación utiliza?", "Distinguir comparación 1:1 de búsqueda 1:N"], ["¿Qué evalúa la prueba de vida?", "Comprender su alcance y sus limitaciones"], ["¿Qué ataques y condiciones se probaron?", "Interpretar informes y evaluaciones con contexto"], ["¿Cómo se protege y verifica el flujo de captura?", "Evaluar amenazas que no se limitan al sensor"], ["¿Cómo se atienden reintentos y excepciones?", "Evitar que un fallo termine en una decisión injustificada"], ["¿Qué datos se conservan y quién accede?", "Revisar privacidad, trazabilidad y responsabilidades"]]} />
        <p className="text-gray-600 leading-relaxed mb-4">{"En privacidad, recomendamos definir finalidades, accesos, conservación y eliminación de los datos. La revisión jurídica debe atender el tratamiento concreto y el sector. Este artículo no establece requisitos legales mexicanos específicos."}</p>
      </section>
      <section className="article-band article-band--blue" aria-labelledby="verificacion-de-identidad-con-jaak-del-resultado-a-la-decision">
        <h2 id="verificacion-de-identidad-con-jaak-del-resultado-a-la-decision" className="text-2xl font-bold mt-12 mb-6 scroll-mt-36">{"Verificación de identidad con JAAK: del resultado a la decisión"}</h2>
        <p className="text-gray-600 leading-relaxed mb-4">{"El objetivo de combinar comparación facial, prueba de vida y evidencia documental es reunir información útil para decidir sobre una solicitud. La oferta de JAAK conecta estos componentes en un proceso de identidad digital; el alcance y la configuración deben definirse para cada implementación."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"Para una empresa, recomendamos evaluar tres aspectos:"}</p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>{"Qué necesita comprobar: el vínculo entre el solicitante y la referencia, la captura y la evidencia correspondiente."}</li>
          <li>{"Cómo utilizará los resultados: criterios para continuar, reintentar o revisar una solicitud."}</li>
          <li>{"Cómo atenderá a los usuarios: instrucciones claras, asistencia y tratamiento de excepciones."}</li>
        </ul>
        <p className="text-gray-600 leading-relaxed mb-4">{"Este enfoque permite conversar sobre necesidades concretas: desde incorporar clientes hasta revisar una interacción de mayor riesgo. La decisión debe responder al proceso, a la evidencia disponible y al marco aplicable."}</p>
      </section>
      <section className="article-band article-band--light" aria-labelledby="preguntas-frecuentes">
        <h2 id="preguntas-frecuentes" className="text-2xl font-bold mt-12 mb-6 scroll-mt-36">{"Preguntas frecuentes"}</h2>
        <h3 id="biometria-y-reconocimiento-facial-son-lo-mismo" className="text-xl font-bold mt-8 mb-4 scroll-mt-36">{"¿Biometría y reconocimiento facial son lo mismo?"}</h3>
        <p className="text-gray-600 leading-relaxed mb-4">{"La biometría es la categoría general. El reconocimiento facial es una de sus aplicaciones, basada en el rostro."}</p>
        <h3 id="una-selfie-es-una-prueba-de-vida" className="text-xl font-bold mt-8 mb-4 scroll-mt-36">{"¿Una selfie es una prueba de vida?"}</h3>
        <p className="text-gray-600 leading-relaxed mb-4">{"No por el hecho de capturar una fotografía. Es necesario conocer qué análisis se aplica y qué señales evalúa."}</p>
        <h3 id="una-prueba-de-vida-favorable-confirma-quien-soy" className="text-xl font-bold mt-8 mb-4 scroll-mt-36">{"¿Una prueba de vida favorable confirma quién soy?"}</h3>
        <p className="text-gray-600 leading-relaxed mb-4">{"Por sí sola no. Evalúa presencia según su método; establecer el vínculo con una identidad requiere evidencia adicional."}</p>
        <h3 id="que-diferencia-hay-entre-face-recognition-y-face-liveness-detection" className="text-xl font-bold mt-8 mb-4 scroll-mt-36">{"¿Qué diferencia hay entre Face Recognition y Face Liveness Detection?"}</h3>
        <p className="text-gray-600 leading-relaxed mb-4">{"Face Recognition compara o identifica mediante el rostro. Face Liveness Detection analiza señales de presencia en la captura. En un proceso de identidad se complementan: ninguna sustituye la función de la otra."}</p>
        <h3 id="que-utiliza-jaak-para-comparar-el-rostro-con-una-identificacion" className="text-xl font-bold mt-8 mb-4 scroll-mt-36">{"¿Qué utiliza JAAK para comparar el rostro con una identificación?"}</h3>
        <p className="text-gray-600 leading-relaxed mb-4">{"Su documentación describe One-to-One, una comparación facial entre dos imágenes. El uso dentro de una sesión depende del flujo configurado."}</p>
        <h3 id="una-evaluacion-de-pad-demuestra-proteccion-frente-a-cualquier-deepfake" className="text-xl font-bold mt-8 mb-4 scroll-mt-36">{"¿Una evaluación de PAD demuestra protección frente a cualquier deepfake?"}</h3>
        <p className="text-gray-600 leading-relaxed mb-4">{"No debe asumirse. Hay que revisar contenido, mecanismo de ataque, versión y condiciones efectivamente evaluados."}</p>
      </section>
      <section className="article-band article-band--blue" aria-labelledby="reconocimiento-facial-y-prueba-de-vida-para-tu-proceso-de-identidad">
        <h2 id="reconocimiento-facial-y-prueba-de-vida-para-tu-proceso-de-identidad" className="text-2xl font-bold mt-12 mb-6 scroll-mt-36">{"Reconocimiento facial y prueba de vida para tu proceso de identidad"}</h2>
        <p className="text-gray-600 leading-relaxed mb-4">{"Antes de implementar, distingue la tarea de comparación, la evaluación de presencia y la comprobación de evidencia. Define cómo interpretarás sus resultados y cómo atenderás las excepciones."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"¿Tu empresa necesita vincular el rostro de un solicitante con su identificación y evaluar su captura? Conoce la "}<a href="https://www.jaak.ai/plataforma/verificacion-identidad" className="text-[#1ECAD3] underline underline-offset-4 hover:text-white">{"solución de verificación de identidad"}</a>{" de JAAK y revisa qué combinación de comparación facial, prueba de vida y validación documental corresponde a tu proceso."}</p>
      </section>
    </ArticleLayout>
  );
}
