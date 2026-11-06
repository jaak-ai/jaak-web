import type { ReactNode } from "react";
import ArticleLayout from "../ArticleLayout";
import ScrollableArticleTable from "../ScrollableArticleTable";
import { article, articleSchema } from "./editorial";

export { articleMetadata as metadata } from "./editorial";

const A = ({ href, children }: { href: string; children: ReactNode }) => (
  <a href={href} className="text-[#1ECAD3] underline underline-offset-4 hover:text-white">{children}</a>
);
const P = ({ children }: { children: ReactNode }) => <p className="text-gray-600 leading-relaxed mb-4">{children}</p>;

export default function Page() {
  return (
    <ArticleLayout title={article.title} slug={article.slug} category={article.category} readTime={article.readTime}
      organizationAuthor={article.authorName} date={article.date} showBottomCta={false} jsonLd={articleSchema}
      image={article.image} imageAlt={article.imageAlt} imageDimensions={article.imageDimensions} alignHeaderWithContent
      relatedPosts={[
        { title: "¿Qué es KYC y cuándo es obligatorio en México?", slug: "que-es-kyc-cuando-es-obligatorio-mexico", category: "KYC" },
        { title: "Reconocimiento facial, biometría y prueba de vida: diferencias clave", slug: "reconocimiento-facial-biometria-prueba-de-vida", category: "IA" },
      ]}>
      <section className="article-band article-band--light" aria-label="Introducción">
        <P>{"Identificar a una persona no es lo mismo que verificar su identidad. Una empresa puede recibir una INE, una fotografía o una CURP y aun así necesitar comprobar que la información corresponde a quien está realizando la operación."}</P>
        <P>{"La verificación de identidad digital permite reunir y contrastar distintas evidencias para evaluar la identidad de una persona a distancia. En México, este proceso es especialmente relevante para empresas que incorporan clientes, formalizan contratos, otorgan créditos o deben integrar expedientes de identificación."}</P>
        <P>{"Pero ¿qué significa realmente verificar una identidad? ¿Qué tecnologías intervienen? ¿Y cómo saber si una solución ofrece los controles necesarios?"}</P>
      </section>
      <section className="article-band article-band--blue" aria-labelledby="que-es-la-verificacion-de-identidad-digital">
        <h2 id="que-es-la-verificacion-de-identidad-digital" className="text-2xl font-bold mt-12 mb-6 scroll-mt-36">{"¿Qué es la verificación de identidad digital?"}</h2>
        <P>{"La verificación de identidad digital es un proceso mediante el cual una organización comprueba información y evidencias de identidad utilizando herramientas tecnológicas, sin requerir necesariamente la presencia física de la persona."}</P>
        <P>{"Puede incluir la revisión de documentos oficiales, extracción de datos, consultas a fuentes autorizadas, comparación biométrica y controles para evaluar la autenticidad de la captura."}</P>
        <P>{"Su finalidad es ayudar a responder tres preguntas:"}</P>
        <ul className="list-disc pl-6 space-y-2 mb-6"><li><strong>{"¿Qué identidad declara la persona?"}</strong>{" Los datos y documentos que presenta."}</li><li><strong>{"¿Qué evidencia respalda esa identidad?"}</strong>{" La información documental y las verificaciones disponibles."}</li><li><strong>{"¿La persona que realiza el proceso corresponde con la identidad presentada?"}</strong>{" El vínculo entre el solicitante y la referencia de identidad."}</li></ul>
        <P>{"Estas comprobaciones son complementarias. Ninguna tecnología aislada resuelve necesariamente las tres preguntas."}</P>
        <P>{"Para una empresa, la verificación de identidad digital no debería considerarse solamente un requisito de registro, sino una parte del proceso de incorporación de clientes y gestión de riesgos."}</P>
      </section>
      <section className="article-band article-band--light" aria-labelledby="como-funciona-la-verificacion-de-identidad-digital">
        <h2 id="como-funciona-la-verificacion-de-identidad-digital" className="text-2xl font-bold mt-12 mb-6 scroll-mt-36">{"¿Cómo funciona la verificación de identidad digital?"}</h2>
        <P>{"Un proceso de verificación puede integrar diferentes etapas, dependiendo del sector, la finalidad y el nivel de riesgo de la operación."}</P>
        <h3 id="captura-y-lectura-de-documentos-de-identidad" className="text-xl font-bold mt-8 mb-4 scroll-mt-36">{"1. Captura y lectura de documentos de identidad"}</h3>
        <P>{"El proceso puede comenzar con la captura de una identificación, como la credencial para votar emitida por el INE o un pasaporte admitido en el flujo."}</P>
        <P>{"Mediante tecnología OCR (Optical Character Recognition), es posible extraer información del documento para facilitar su revisión y reducir la captura manual."}</P>
        <P>{"Sin embargo, existe una diferencia fundamental: extraer los datos de una identificación no significa haber confirmado su autenticidad ni su vigencia."}</P>
        <P>{"Una solución completa debe distinguir entre la lectura documental, la revisión de características del documento y las verificaciones adicionales que efectivamente se realizan."}</P>
        <h3 id="validacion-de-informacion-y-consultas-oficiales" className="text-xl font-bold mt-8 mb-4 scroll-mt-36">{"2. Validación de información y consultas oficiales"}</h3>
        <P>{"Una vez obtenidos los datos, algunas soluciones permiten contrastarlos con fuentes oficiales o autorizadas, según el servicio contratado y las condiciones de acceso."}</P>
        <P>{"En México, pueden resultar relevantes las consultas relacionadas con:"}</P>
        <ul className="list-disc pl-6 space-y-2 mb-6"><li>{"CURP y RENAPO."}</li><li>{"Información y mecanismos de verificación disponibles para credenciales del INE."}</li><li>{"RFC y consultas aplicables del SAT."}</li></ul>
        <P>{"Cada consulta tiene un alcance distinto. Confirmar la existencia o consistencia de un dato no demuestra automáticamente que el documento presentado sea auténtico ni que su portador sea su titular."}</P>
        <P>{"Por ello, es importante conocer qué fuente se consulta, qué información devuelve y cómo debe interpretarse el resultado."}</P>
      </section>
      <section className="article-band article-band--blue" aria-label="Contenido">
        <h3 id="verificacion-biometrica-facial" className="text-xl font-bold mt-8 mb-4 scroll-mt-36">{"3. Verificación biométrica facial"}</h3>
        <P>{"La biometría facial permite comparar características del rostro de una persona con una imagen de referencia."}</P>
        <P>{"En un proceso de incorporación digital, una comparación facial 1:1 puede evaluar la correspondencia entre la fotografía de una identificación y el rostro capturado durante la sesión."}</P>
        <P>{"Esta comparación ayuda a establecer el vínculo entre el solicitante y el documento presentado."}</P>
        <P>{"No obstante, un resultado favorable de similitud facial no sustituye la validación del documento ni garantiza por sí solo que toda la identidad declarada haya sido comprobada."}</P>
        <P>{"Si quieres profundizar en estas diferencias, consulta nuestro artículo sobre "}<A href="https://www.jaak.ai/blog/reconocimiento-facial-biometria-prueba-de-vida">{"reconocimiento facial y prueba de vida"}</A>{"."}</P>
        <h3 id="prueba-de-vida-o-liveness-detection" className="text-xl font-bold mt-8 mb-4 scroll-mt-36">{"4. Prueba de vida o liveness detection"}</h3>
        <P>{"La prueba de vida facial analiza señales de presencia genuina durante la captura, con el objetivo de ayudar a detectar determinados intentos de suplantación."}</P>
        <P>{"Existen distintas modalidades, incluidas las pruebas de vida activas y pasivas."}</P>
        <P>{"En la modalidad pasiva, la persona no necesita completar los retos de movimiento característicos de ciertos métodos activos, aunque debe seguir las instrucciones necesarias para una captura adecuada."}</P>
        <P>{"La prueba de vida y la comparación facial cumplen funciones diferentes: la primera evalúa determinadas características de la captura; la segunda compara el rostro con una referencia."}</P>
        <P>{"Ambas pueden complementar la verificación documental."}</P>
        <P>{"También es importante considerar que ningún resultado aislado debe interpretarse como protección absoluta contra fotografías, videos, máscaras, deepfakes o ataques de inyección. La cobertura depende de los controles y de las amenazas evaluadas."}</P>
        <h3 id="resultados-y-expediente-de-verificacion" className="text-xl font-bold mt-8 mb-4 scroll-mt-36">{"5. Resultados y expediente de verificación"}</h3>
        <P>{"La última etapa consiste en organizar los resultados y evidencias disponibles para que la empresa pueda utilizarlos de acuerdo con sus políticas internas."}</P>
        <P>{"Un expediente puede incorporar, según la configuración y los servicios contratados:"}</P>
        <ul className="list-disc pl-6 space-y-2 mb-6"><li>{"Datos identificativos obtenidos durante el proceso."}</li><li>{"Información y resultados de verificaciones documentales."}</li><li>{"Resultados de comparación facial y prueba de vida."}</li><li>{"Constancias de consultas realizadas."}</li><li>{"Registros de fecha, hora y trazabilidad de las verificaciones."}</li><li>{"Evidencias adicionales exigidas por el proceso de negocio."}</li></ul>
        <P>{"El expediente debe diseñarse considerando los requisitos aplicables de protección de datos personales, seguridad, acceso y conservación."}</P>
        <P>{"La tecnología aporta evidencia; la empresa es responsable de utilizarla para tomar las decisiones que correspondan a su actividad."}</P>
      </section>
      <section className="article-band article-band--light" aria-labelledby="identificacion-verificacion-y-autenticacion">
        <h2 id="identificacion-verificacion-y-autenticacion" className="text-2xl font-bold mt-12 mb-6 scroll-mt-36">{"Identificación, verificación y autenticación: ¿son lo mismo?"}</h2>
        <P>{"Aunque suelen utilizarse como sinónimos, estos conceptos cumplen funciones diferentes."}</P>
        <ScrollableArticleTable label="Tabla: Concepto" headers={["Concepto", "¿Qué significa?", "Ejemplo"]} rows={[["Identificación", "Declarar o proporcionar una identidad", "Capturar nombre, CURP y datos de una INE"], ["Verificación", "Comprobar evidencias que respaldan una identidad", "Revisar el documento y comparar el rostro con su fotografía"], ["Autenticación", "Comprobar que alguien que intenta acceder o actuar corresponde a una identidad previamente vinculada", "Validar un factor de autenticación para acceder a una cuenta"]]} />
        <P>{"Esta distinción es importante porque una empresa puede verificar la identidad de una persona al incorporarla como cliente y posteriormente utilizar mecanismos de autenticación para controlar el acceso a sus servicios."}</P>
        <P>{"Los niveles de seguridad y los controles necesarios dependerán del proceso y del riesgo involucrado."}</P>
      </section>
      <section className="article-band article-band--blue" aria-labelledby="por-que-es-importante-verificar-la-identidad-digital-en-mexico">
        <h2 id="por-que-es-importante-verificar-la-identidad-digital-en-mexico" className="text-2xl font-bold mt-12 mb-6 scroll-mt-36">{"¿Por qué es importante verificar la identidad digital en México?"}</h2>
        <P>{"Cada vez más organizaciones necesitan identificar a sus clientes sin depender exclusivamente de documentos físicos o visitas presenciales."}</P>
        <P>{"La verificación digital puede apoyar distintos objetivos."}</P>
        <ul className="list-disc pl-6 space-y-2 mb-6"><li><strong>{"Reducir riesgos de suplantación."}</strong>{" Permite incorporar controles para evaluar si una persona está utilizando documentos o información que no le corresponden."}</li><li><strong>{"Mejorar la incorporación de clientes."}</strong>{" La captura y validación automatizada de información puede reducir tareas manuales y facilitar procesos remotos."}</li><li><strong>{"Fortalecer la trazabilidad."}</strong>{" Los resultados documentados permiten reconstruir qué verificaciones se realizaron y qué información estuvo disponible al momento de una decisión."}</li><li><strong>{"Apoyar obligaciones de identificación."}</strong>{" En determinados sectores, las disposiciones aplicables requieren identificar clientes, reunir información y mantener expedientes. La tecnología puede ayudar a ejecutar y documentar parte de estos procedimientos."}</li></ul>
        <P>{"Sin embargo, utilizar una solución tecnológica no equivale automáticamente a cumplir todas las obligaciones regulatorias. Cada organización debe revisar el marco que le corresponda."}</P>
        <P>{"Para entender el alcance regulatorio del proceso de conocimiento del cliente, revisa "}<A href="https://www.jaak.ai/blog/que-es-kyc-cuando-es-obligatorio-mexico">{"¿Qué es KYC y cuándo es obligatorio?"}</A>{"."}</P>
      </section>
      <section className="article-band article-band--light" aria-labelledby="que-empresas-necesitan-implementar-verificacion-de-identidad-digital">
        <h2 id="que-empresas-necesitan-implementar-verificacion-de-identidad-digital" className="text-2xl font-bold mt-12 mb-6 scroll-mt-36">{"¿Qué empresas necesitan implementar verificación de identidad digital?"}</h2>
        <P>{"La necesidad de verificar identidades no es exclusiva de bancos o instituciones financieras."}</P>
        <h3 id="instituciones-financieras-y-sofomes" className="text-xl font-bold mt-8 mb-4 scroll-mt-36">{"Instituciones financieras y SOFOMES"}</h3>
        <P>{"Las empresas que ofrecen servicios financieros o financiamiento pueden necesitar identificar a sus clientes, integrar expedientes y aplicar controles basados en el riesgo."}</P>
        <P>{"La verificación digital puede facilitar la recopilación y comprobación de información durante la solicitud y contratación de productos financieros."}</P>
        <P>{"En una SOFOM, por ejemplo, la tecnología puede ayudar a verificar la identidad del solicitante y reunir evidencia documental."}</P>
        <P>{"La evaluación de solvencia, el análisis crediticio y la autorización del financiamiento siguen siendo responsabilidades de la entidad correspondiente."}</P>
        <h3 id="inmobiliarias-y-actividades-vulnerables" className="text-xl font-bold mt-8 mb-4 scroll-mt-36">{"Inmobiliarias y actividades vulnerables"}</h3>
        <P>{"Determinadas operaciones inmobiliarias pueden encontrarse sujetas a obligaciones de identificación y prevención de lavado de dinero, dependiendo de la actividad y de los supuestos legales aplicables."}</P>
        <P>{"Una solución de identidad digital puede apoyar la integración de información de clientes y la organización de evidencias para sus expedientes."}</P>
        <P>{"Los requisitos concretos deben determinarse conforme a la LFPIORPI y a las disposiciones vigentes aplicables a cada actividad."}</P>
        <h3 id="notarias-y-servicios-profesionales" className="text-xl font-bold mt-8 mb-4 scroll-mt-36">{"Notarías y servicios profesionales"}</h3>
        <P>{"En procesos notariales y de contratación, comprobar la identidad de los participantes puede ser relevante para reforzar los controles documentales y la trazabilidad."}</P>
        <P>{"La verificación digital puede utilizarse como apoyo, sin sustituir las formalidades ni las responsabilidades que la ley atribuya al fedatario o a los profesionales involucrados."}</P>
        <h3 id="empresas-que-contratan-servicios-a-distancia" className="text-xl font-bold mt-8 mb-4 scroll-mt-36">{"Empresas que contratan servicios a distancia"}</h3>
        <P>{"Las organizaciones que incorporan clientes, proveedores o usuarios por canales digitales también pueden beneficiarse de controles de identidad."}</P>
        <P>{"La tecnología permite configurar verificaciones según las necesidades del negocio, sin que todos los sectores deban utilizar necesariamente el mismo procedimiento."}</P>
      </section>
      <section className="article-band article-band--blue" aria-labelledby="verificacion-de-identidad-digital-y-proteccion-de-datos-personales">
        <h2 id="verificacion-de-identidad-digital-y-proteccion-de-datos-personales" className="text-2xl font-bold mt-12 mb-6 scroll-mt-36">{"Verificación de identidad digital y protección de datos personales"}</h2>
        <P>{"Implementar biometría facial o recopilar documentos de identidad implica responsabilidades en materia de privacidad."}</P>
        <P>{"En México, la Ley Federal de Protección de Datos Personales en Posesión de los Particulares regula el tratamiento de datos personales por parte de particulares en los supuestos previstos por la ley."}</P>
        <P>{"Entre los aspectos que una empresa debe evaluar se encuentran:"}</P>
        <ul className="list-disc pl-6 space-y-2 mb-6"><li>{"La finalidad y legitimidad del tratamiento."}</li><li>{"El aviso de privacidad aplicable."}</li><li>{"La obtención del consentimiento cuando corresponda y bajo la modalidad legalmente requerida."}</li><li>{"Las medidas de seguridad para proteger la información."}</li><li>{"El acceso, conservación y eliminación de los datos."}</li><li>{"Los derechos de las personas titulares."}</li></ul>
        <P>{"En particular, el tratamiento de datos biométricos requiere analizar su naturaleza, finalidad y contexto para determinar las obligaciones aplicables."}</P>
        <P>{"La elección de una plataforma debe considerar tanto las capacidades tecnológicas como la gobernanza de la información."}</P>
      </section>
      <section className="article-band article-band--light" aria-labelledby="como-elegir-una-solucion-de-verificacion-de-identidad-digital">
        <h2 id="como-elegir-una-solucion-de-verificacion-de-identidad-digital" className="text-2xl font-bold mt-12 mb-6 scroll-mt-36">{"¿Cómo elegir una solución de verificación de identidad digital?"}</h2>
        <P>{"Antes de contratar un proveedor, una empresa debería evaluar más que la capacidad de capturar documentos o reconocer rostros."}</P>
        <P>{"Estas son algunas preguntas recomendadas:"}</P>
        <ul className="list-disc pl-6 space-y-2 mb-6"><li><strong>{"¿Qué verifica realmente?"}</strong>{" Conviene distinguir extracción OCR, análisis documental, comparación facial, prueba de vida y consultas oficiales."}</li><li><strong>{"¿Qué fuentes utiliza?"}</strong>{" Es importante conocer el alcance y las condiciones de cada consulta, además de sus posibles resultados e incidencias."}</li><li><strong>{"¿Qué evidencia entrega?"}</strong>{" La empresa debe saber qué información podrá consultar, conservar o exportar según sus obligaciones y necesidades."}</li><li><strong>{"¿Cómo se manejan los resultados inconclusos?"}</strong>{" Los reintentos, errores de captura y revisiones manuales deben formar parte del diseño operativo."}</li><li><strong>{"¿Qué modalidades de implementación ofrece?"}</strong>{" No todas las empresas necesitan integrar una API. Algunas requieren una plataforma web; otras necesitan incorporar verificaciones directamente en sus sistemas."}</li><li><strong>{"¿Cómo protege los datos personales?"}</strong>{" Deben revisarse responsabilidades, medidas de seguridad y condiciones de tratamiento."}</li></ul>
        <P>{"El mejor proceso no es necesariamente el que utiliza más tecnologías, sino el que aplica los controles adecuados a la finalidad y al riesgo."}</P>
      </section>
      <section className="article-band article-band--blue" aria-labelledby="verificacion-de-identidad-digital-con-jaak">
        <h2 id="verificacion-de-identidad-digital-con-jaak" className="text-2xl font-bold mt-12 mb-6 scroll-mt-36">{"Verificación de identidad digital con JAAK"}</h2>
        <P>{"En JAAK desarrollamos soluciones de identidad digital que permiten a las empresas reunir y evaluar evidencias para sus procesos de incorporación de clientes."}</P>
        <P>{"Nuestra oferta contempla capacidades como:"}</P>
        <ul className="list-disc pl-6 space-y-2 mb-6"><li>{"Captura y lectura documental mediante OCR."}</li><li>{"Comparación biométrica facial 1:1."}</li><li>{"Prueba de vida facial pasiva."}</li><li>{"Validaciones de información y consultas oficiales disponibles según el servicio."}</li><li>{"Organización de resultados y evidencias del proceso."}</li></ul>
        <P>{"Las funcionalidades concretas dependen del producto, la configuración y la modalidad contratada. Conoce más en "}<A href="https://www.jaak.ai/plataforma/verificacion-identidad">{"Verificación de identidad con JAAK"}</A>{"."}</P>
        <h3 id="plataforma-web-e-integracion-tecnologica" className="text-xl font-bold mt-8 mb-4 scroll-mt-36">{"Plataforma web e integración tecnológica"}</h3>
        <P>{"JAAK ofrece distintas formas de utilizar sus soluciones."}</P>
        <ul className="list-disc pl-6 space-y-2 mb-6"><li><strong>{"Plataforma Web (Autoservicio):"}</strong>{" permite operar desde la plataforma y utilizar los canales disponibles para enviar solicitudes de verificación, sin necesidad de desarrollar una integración API o SDK."}</li><li><strong>{"Integración API o SDK:"}</strong>{" está orientada a organizaciones que necesitan incorporar las capacidades de verificación de identidad en sus propias aplicaciones o procesos. Su disponibilidad y condiciones se determinan conforme al alcance contratado."}</li></ul>
        <P>{"Ambas modalidades buscan atender necesidades distintas: desde empresas que necesitan comenzar a verificar identidades mediante una herramienta web hasta organizaciones con operaciones de mayor complejidad tecnológica."}</P>
      </section>
      <section className="article-band article-band--light" aria-labelledby="preguntas-frecuentes">
        <h2 id="preguntas-frecuentes" className="text-2xl font-bold mt-12 mb-6 scroll-mt-36">{"Preguntas frecuentes sobre verificación de identidad digital"}</h2>
        <h3 id="se-puede-verificar-una-identidad-en-linea-en-mexico" className="text-xl font-bold mt-8 mb-4 scroll-mt-36">{"¿Se puede verificar una identidad en línea en México?"}</h3><P>{"Sí. Existen soluciones que permiten capturar documentos, comprobar información y realizar comparaciones biométricas a distancia. El alcance de la verificación depende de los mecanismos utilizados y de los requisitos de cada operación."}</P>
        <h3 id="validar-una-ine-es-lo-mismo-que-verificar-la-identidad" className="text-xl font-bold mt-8 mb-4 scroll-mt-36">{"¿Validar una INE es lo mismo que verificar la identidad?"}</h3><P>{"No. La validación de la identificación es una parte posible del proceso. Verificar la identidad puede requerir comprobar adicionalmente el vínculo entre el documento y la persona que lo presenta."}</P>
        <h3 id="es-obligatorio-utilizar-biometria-facial" className="text-xl font-bold mt-8 mb-4 scroll-mt-36">{"¿Es obligatorio utilizar biometría facial?"}</h3><P>{"No existe una obligación universal de utilizar biometría facial para todas las empresas y operaciones. Los requisitos dependen del sector, las disposiciones aplicables y el procedimiento de identificación correspondiente."}</P>
        <h3 id="la-verificacion-de-curp-confirma-por-completo-la-identidad" className="text-xl font-bold mt-8 mb-4 scroll-mt-36">{"¿La verificación de CURP confirma por completo la identidad?"}</h3><P>{"No. Una consulta de CURP puede ayudar a comprobar información registral, pero no demuestra por sí sola que quien proporciona el dato sea su titular."}</P>
        <h3 id="una-verificacion-digital-sustituye-las-obligaciones-de-kyc" className="text-xl font-bold mt-8 mb-4 scroll-mt-36">{"¿Una verificación digital sustituye las obligaciones de KYC?"}</h3><P>{"No. La verificación digital puede formar parte de un proceso KYC, pero este puede incluir otras actividades, como conocimiento del cliente, clasificación de riesgo, revisión de información y seguimiento conforme a las obligaciones aplicables."}</P>
        <h3 id="es-posible-integrar-la-verificacion-de-identidad-en-un-sistema-empresarial" className="text-xl font-bold mt-8 mb-4 scroll-mt-36">{"¿Es posible integrar la verificación de identidad en un sistema empresarial?"}</h3><P>{"Sí. Las soluciones con API o SDK pueden permitir incorporar funcionalidades de verificación en aplicaciones existentes, conforme a sus condiciones técnicas y comerciales."}</P>
      </section>
      <section className="article-band article-band--blue" aria-labelledby="la-confianza-digital-comienza-con-una-identidad-que-puede-verificarse">
        <h2 id="la-confianza-digital-comienza-con-una-identidad-que-puede-verificarse" className="text-2xl font-bold mt-12 mb-6 scroll-mt-36">{"La confianza digital comienza con una identidad que puede verificarse"}</h2>
        <P>{"Recibir una identificación no es suficiente cuando una operación requiere comprobar quién está del otro lado."}</P>
        <P>{"Para empresas que incorporan clientes a distancia, la verificación de identidad digital permite relacionar documentos, datos y evidencias biométricas dentro de un proceso estructurado."}</P>
        <P>{"La diferencia está entre recibir información y contar con evidencia para evaluarla."}</P>
        <P>{"En JAAK ayudamos a las organizaciones a incorporar tecnología de verificación de identidad a sus operaciones."}</P>
        <P>{"Conoce nuestras soluciones de verificación de identidad digital y descubre qué modalidad se adapta a las necesidades de tu empresa. "}<A href="https://www.jaak.ai/contacto">{"Solicitar una demostración"}</A>{"."}</P>
      </section>
      <section className="article-band article-band--light" aria-labelledby="referencias-tecnicas-y-regulatorias">
        <h2 id="referencias-tecnicas-y-regulatorias" className="text-2xl font-bold mt-12 mb-6 scroll-mt-36">{"Referencias técnicas y regulatorias"}</h2>
        <ul className="list-disc pl-6 space-y-2 mb-6"><li><A href="https://pages.nist.gov/800-63-4/sp800-63a.html">{"NIST SP 800-63A-4"}</A>{" — Identidad digital, comprobación de identidad y enrolamiento. La guía sirve como referencia técnica, no como obligación general mexicana."}</li><li><A href="https://www.diputados.gob.mx/LeyesBiblio/pdf/LFPDPPP.pdf">{"Ley Federal de Protección de Datos Personales en Posesión de los Particulares"}</A>{" — Texto con reforma del 14 de noviembre de 2025."}</li><li><A href="https://www.fatf-gafi.org/en/publications/Fatfrecommendations/Guidance-on-Digital-ID.html">{"GAFI: Guidance on Digital Identity"}</A>{" — Orientaciones sobre identidad digital en procesos de debida diligencia."}</li></ul>
      </section>
    </ArticleLayout>
  );
}
