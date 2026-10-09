import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticleLayout from "../ArticleLayout";
import { isDraftPreview } from "./preview";

// Evaluate visibility per request: a preview build must not cache a public draft.
export const dynamic = "force-dynamic";

const title = "Inteligencia artificial en la verificación de identidad: aplicaciones, riesgos y límites";
const seoTitle = "IA en la verificación de identidad: riesgos y límites | JAAK";
const description = "Conoce cómo se aplica la IA a la verificación de identidad, sus límites ante la suplantación y qué evaluar al elegir una solución para tu empresa.";
const slug = "inteligencia-artificial-verificacion-identidad";
const url = `https://jaak.ai/blog/${slug}`;
const image = `/images/blog/${slug}.png`;
const imageAlt = "IA en la verificación de identidad: aplicaciones, riesgos y límites — JAAK";

export const metadata: Metadata = {
  title: { absolute: seoTitle },
  description,
  keywords: ["biometría facial", "prueba de vida", "KYC", "deepfakes", "suplantación de identidad"],
  alternates: { canonical: url },
  robots: { index: false, follow: false },
  openGraph: { title: seoTitle, description, type: "article", url, locale: "es_MX", siteName: "JAAK", publishedTime: "2025-10-09", authors: ["JAAK"], images: [{ url: image, width: 1024, height: 538, alt: imageAlt }] },
  twitter: { card: "summary_large_image", title: seoTitle, description, images: [{ url: image, alt: imageAlt }] },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article", headline: title, description, inLanguage: "es-MX",
      datePublished: "2025-10-09",
      image: `https://jaak.ai${image}`,
      author: { "@type": "Organization", "@id": "https://jaak.ai/#organization", name: "JAAK", url: "https://jaak.ai" },
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      publisher: { "@id": "https://jaak.ai/#organization" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: "https://jaak.ai" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://jaak.ai/blog" },
        { "@type": "ListItem", position: 3, name: title, item: url },
      ],
    },
  ],
};

export default function Page() {
  if (!isDraftPreview(process.env)) notFound();
  return (
    <ArticleLayout title={title} category="IA" readTime="9 min" slug={slug}
      date="9 de octubre, 2025" organizationAuthor="JAAK"
      image={image} imageAlt={imageAlt}
      showBottomCta={false} relatedPosts={[]} jsonLd={jsonLd}>
      <style>{`
        .jaak-article-body .article-band {
          padding: clamp(20px, 3vw, 32px);
          margin-bottom: 24px;
          border-radius: 20px;
          border: 1px solid rgba(255,255,255,0.12);
        }
        .jaak-article-body .article-band > :first-child { margin-top: 0; }
        .jaak-article-body .article-band > :last-child { margin-bottom: 0; }
        .jaak-article-body .article-band--blue { background: #212A45; }
        .jaak-article-body .article-band--blue :is(p, li, td) { color: #C5CEDC !important; }
        .jaak-article-body .article-band--light { background: #FFFFFF; border-color: #D9E2EC; }
        .jaak-article-body .article-band--light :is(h2, h3, strong, b) { color: #212A45 !important; }
        .jaak-article-body .article-band--light :is(p, li, td, em) { color: #4A5568 !important; }
        .jaak-article-body .article-band--light a { color: #007880 !important; }
        .jaak-article-body .article-band--light a:hover { color: #212A45 !important; }
        .jaak-article-body .article-band--light :focus-visible { outline-color: #007880; }
        .jaak-article-body .article-band--light [role="region"] { border-color: #D9E2EC !important; }
        .jaak-article-body .article-band--light table th { background: #EDF5F8 !important; color: #212A45 !important; border-color: #D9E2EC !important; }
        .jaak-article-body .article-band--light table td { color: #4A5568 !important; border-color: #D9E2EC !important; }
        .jaak-article-body .article-band--light table tr:nth-child(even) { background: #F7F9FC !important; }
      `}</style>
      <section className="article-band article-band--light" aria-label="Introducción">
        <p className="text-gray-600 leading-relaxed mb-4">{"La inteligencia artificial puede apoyar la verificación de identidad mediante la extracción de datos documentales, la comparación facial y el análisis de señales de suplantación. Cada tarea aporta evidencia distinta: leer una identificación, encontrar semejanza entre rostros y evaluar la captura responden preguntas diferentes."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"Pensemos en un ejemplo hipotético: una persona solicita un crédito desde su celular. Envía una identificación y captura su rostro. Antes de continuar, la empresa necesita evaluar el documento, relacionarlo con la persona solicitante y determinar si la interacción presenta señales de manipulación."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"La pregunta empresarial es qué evidencia permite reunir la tecnología y cómo utilizarla para tomar una decisión proporcional al riesgo."}</p>
      </section>
      <section className="article-band article-band--blue" aria-labelledby="como-se-utiliza-la-inteligencia-artificial-para-verificar-una-identidad">
        <h2 id="como-se-utiliza-la-inteligencia-artificial-para-verificar-una-identidad" className="text-2xl font-bold mt-12 mb-6 scroll-mt-36">{"¿Cómo se utiliza la inteligencia artificial para verificar una identidad?"}</h2>
        <p className="text-gray-600 leading-relaxed mb-4">{"Un proceso puede combinar modelos de aprendizaje automático, reglas, consultas a fuentes y revisión humana. No todas las soluciones utilizan IA en los mismos componentes ni ofrecen el mismo alcance."}</p>
        <h3 id="lectura-y-extraccion-documental" className="text-xl font-bold mt-8 mb-4 scroll-mt-36">{"Lectura y extracción documental"}</h3>
        <p className="text-gray-600 leading-relaxed mb-4">{"El reconocimiento óptico de caracteres, conocido como "}<strong>{"OCR"}</strong>{", convierte texto de imágenes o documentos en información procesable. Su implementación puede utilizar modelos de aprendizaje automático, como explica la "}<a href="https://learn.microsoft.com/en-us/azure/ai-services/computer-vision/overview-ocr" className="text-[#1ECAD3] underline underline-offset-4 hover:text-white">{"documentación de Microsoft sobre OCR"}</a>{"."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"En una identificación, puede apoyar la extracción de campos para reducir la transcripción manual. Pero leer correctamente un nombre no acredita que el documento sea auténtico. La extracción y la validación deben evaluarse por separado."}</p>
        <h3 id="analisis-de-documentos" className="text-xl font-bold mt-8 mb-4 scroll-mt-36">{"Análisis de documentos"}</h3>
        <p className="text-gray-600 leading-relaxed mb-4">{"Según su diseño, una solución puede analizar inconsistencias visuales, campos y señales de alteración. Conviene preguntar qué documentos admite, qué elementos revisa y qué limitaciones tiene cuando recibe fotografías de baja calidad."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"Un resultado favorable debe interpretarse dentro del alcance del análisis realizado. No debería presentarse como una garantía general de autenticidad."}</p>
        <h3 id="comparacion-facial" className="text-xl font-bold mt-8 mb-4 scroll-mt-36">{"Comparación facial"}</h3>
        <p className="text-gray-600 leading-relaxed mb-4">{"La biometría utiliza características físicas o de comportamiento para apoyar el reconocimiento de personas. En una "}<strong>{"comparación facial uno a uno"}</strong>{", se contrasta una muestra con una referencia; por ejemplo, una captura del solicitante con la fotografía de su documento. Microsoft diferencia esta operación de la identificación entre múltiples candidatos en su "}<a href="https://learn.microsoft.com/en-us/azure/ai-services/face/concept-face-recognition" className="text-[#1ECAD3] underline underline-offset-4 hover:text-white">{"guía de reconocimiento facial"}</a>{"."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"La semejanza encontrada no responde todas las preguntas del proceso: todavía importa de dónde provienen las imágenes y qué evidencia respalda la identidad declarada."}</p>
        <h3 id="prueba-de-vida-y-deteccion-de-ataques-de-presentacion" className="text-xl font-bold mt-8 mb-4 scroll-mt-36">{"Prueba de vida y detección de ataques de presentación"}</h3>
        <p className="text-gray-600 leading-relaxed mb-4">{"La expresión "}<strong>{"prueba de vida"}</strong>{" suele utilizarse para controles que evalúan señales de presencia genuina durante una captura. La "}<strong>{"detección de ataques de presentación"}</strong>{", o PAD, analiza intentos de engañar al sensor mediante elementos como imágenes o reproducciones."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"Una referencia específica es la "}<a href="https://www.nist.gov/publications/face-analysis-technology-evaluation-fate-part-10-performance-passive-software-based" className="text-[#1ECAD3] underline underline-offset-4 hover:text-white">{"evaluación FATE PAD de NIST"}</a>{", centrada en algoritmos pasivos de software y material visual bidimensional. Su alcance ilustra por qué conviene revisar qué se evaluó, en lugar de asumir protección frente a cualquier ataque."}</p>
        <h3 id="senales-complementarias" className="text-xl font-bold mt-8 mb-4 scroll-mt-36">{"Señales complementarias"}</h3>
        <p className="text-gray-600 leading-relaxed mb-4">{"Cuando el proceso las contempla, puede incorporar comprobaciones sobre la captura, consistencia de datos o comportamiento de las solicitudes. Pregunta cuáles utiliza realmente el proveedor, qué resultado entrega cada una y cómo afectan la decisión."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"También conviene distinguir estos controles del conjunto de actividades de "}<strong>{"KYC —Know Your Customer, o conoce a tu cliente—"}</strong>{", cuyo alcance depende del proceso y del marco aplicable."}</p>
      </section>
      <section className="article-band article-band--light" aria-labelledby="que-puede-aportar-la-ia-y-de-que-depende-su-desempeno">
        <h2 id="que-puede-aportar-la-ia-y-de-que-depende-su-desempeno" className="text-2xl font-bold mt-12 mb-6 scroll-mt-36">{"¿Qué puede aportar la IA y de qué depende su desempeño?"}</h2>
        <p className="text-gray-600 leading-relaxed mb-4">{"La automatización puede ayudar a procesar capturas, aplicar criterios repetibles y separar casos que requieren atención. Su valor debe medirse en el flujo completo, incluyendo errores, reintentos y atención de excepciones."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"Para evaluar una implementación, plantéate estas preguntas:"}</p>
        <ul className="list-disc pl-6 mb-6 space-y-3"><li>{"¿Las personas consiguen capturar imágenes utilizables con sus dispositivos habituales?"}</li><li>{"¿Qué sucede ante iluminación insuficiente o documentos deteriorados?"}</li><li>{"¿Cómo se seleccionan los umbrales que determinan una coincidencia?"}</li><li>{"¿Qué poblaciones y condiciones estuvieron representadas en las pruebas?"}</li><li>{"¿Cómo se atienden los resultados inconclusos?"}</li></ul>
        <p className="text-gray-600 leading-relaxed mb-4">{"Un umbral es el criterio de corte utilizado para interpretar un resultado. Para tomar decisiones, pide que el proveedor explique sus efectos sobre los errores y justifique la configuración propuesta para tu operación."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"En un piloto, recomendamos medir finalización, reintentos, derivaciones a revisión y tiempos de resolución. Una evaluación útil debe considerar tanto la seguridad como la capacidad de completar el proceso."}</p>
      </section>
      <section className="article-band article-band--blue" aria-labelledby="la-ia-tambien-puede-facilitar-la-suplantacion">
        <h2 id="la-ia-tambien-puede-facilitar-la-suplantacion" className="text-2xl font-bold mt-12 mb-6 scroll-mt-36">{"La IA también puede facilitar la suplantación"}</h2>
        <p className="text-gray-600 leading-relaxed mb-4">{"Conviene separar tres conceptos:"}</p>
        <div role="region" aria-label="Tabla: Concepto" tabIndex={0} className="my-8 max-w-full overflow-x-auto rounded-lg border border-white/10 focus-visible:outline-2 focus-visible:outline-[#1ECAD3]"><table className="w-full min-w-[640px] text-sm text-left"><thead><tr><th scope="col" className="p-4 border-b">{"Concepto"}</th><th scope="col" className="p-4 border-b">{"Qué describe"}</th><th scope="col" className="p-4 border-b">{"Ejemplo hipotético"}</th></tr></thead><tbody><tr><td className="p-4 border-b align-top">{"Deepfake"}</td><td className="p-4 border-b align-top">{"Contenido generado o modificado con IA para simular una apariencia o actuación"}</td><td className="p-4 border-b align-top">{"Un video que representa el rostro de otra persona"}</td></tr><tr><td className="p-4 border-b align-top">{"Ataque de presentación"}</td><td className="p-4 border-b align-top">{"Un intento de engaño frente al sensor de captura"}</td><td className="p-4 border-b align-top">{"Una fotografía mostrada ante la cámara"}</td></tr><tr><td className="p-4 border-b align-top">{"Ataque de inyección"}</td><td className="p-4 border-b align-top">{"La introducción de contenido en el flujo digital de captura o procesamiento"}</td><td className="p-4 border-b align-top">{"Imágenes sustituidas antes de llegar al componente que las analiza"}</td></tr></tbody></table></div>
        <p className="text-gray-600 leading-relaxed mb-4"><strong>{"Deepfake describe el contenido; inyección describe un mecanismo."}</strong>{" Pueden combinarse, pero no son equivalentes. Tampoco todo intento de suplantación requiere IA."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"La "}<a href="https://pages.nist.gov/800-63-4/sp800-63a.html#digital-injection-prevention-and-forged-media-detection" className="text-[#1ECAD3] underline underline-offset-4 hover:text-white">{"sección 3.14 de NIST SP 800-63A-4"}</a>{" aborda la inyección y el contenido manipulado. Advierte que la comparación biométrica por sí sola no previene esos ataques y que los controles de captura y presentación tampoco cubren todos los casos."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"Para una empresa, esto implica preguntar tanto qué analiza la solución como qué confianza ofrece sobre el origen del material recibido."}</p>
      </section>
      <section className="article-band article-band--light" aria-labelledby="los-limites-de-verificar-una-identidad-con-ia">
        <h2 id="los-limites-de-verificar-una-identidad-con-ia" className="text-2xl font-bold mt-12 mb-6 scroll-mt-36">{"Los límites de verificar una identidad con IA"}</h2>
        <h3 id="errores-de-comparacion-y-decisiones-del-proceso" className="text-xl font-bold mt-8 mb-4 scroll-mt-36">{"Errores de comparación y decisiones del proceso"}</h3>
        <p className="text-gray-600 leading-relaxed mb-4">{"Una comparación facial puede asociar incorrectamente imágenes de personas distintas o no asociar imágenes de una misma persona. NIST documenta estos errores y su variación entre grupos en su "}<a href="https://pages.nist.gov/frvt/html/frvt_demographics.html" className="text-[#1ECAD3] underline underline-offset-4 hover:text-white">{"evaluación de efectos demográficos"}</a>{"."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"En el flujo completo, hablamos de falsas aceptaciones o falsos rechazos según la decisión tomada. No deben confundirse automáticamente con los errores de un componente: una coincidencia facial es solo una entrada del proceso."}</p>
        <h3 id="diferencias-entre-condiciones-y-poblaciones" className="text-xl font-bold mt-8 mb-4 scroll-mt-36">{"Diferencias entre condiciones y poblaciones"}</h3>
        <p className="text-gray-600 leading-relaxed mb-4">{"NIST también señala que la calidad de imagen influye en los errores de no coincidencia y que ciertos efectos demográficos pueden relacionarse con la fotografía. No todos los algoritmos presentan el mismo desempeño."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"Recomendamos evaluar la solución con condiciones representativas de los usuarios atendidos, en lugar de trasladar directamente un resultado agregado a toda la operación."}</p>
        <h3 id="alcance-de-las-pruebas" className="text-xl font-bold mt-8 mb-4 scroll-mt-36">{"Alcance de las pruebas"}</h3>
        <p className="text-gray-600 leading-relaxed mb-4">{"Una evaluación independiente aporta evidencia sobre lo probado. Para interpretarla, solicita la versión del componente, las condiciones, los tipos de ataque y los criterios de aprobación."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"Una prueba de comparación facial no demuestra por sí sola resistencia a inyección. Una evaluación PAD tampoco acredita automáticamente la seguridad de toda la plataforma."}</p>
        <h3 id="actualizacion-y-privacidad" className="text-xl font-bold mt-8 mb-4 scroll-mt-36">{"Actualización y privacidad"}</h3>
        <p className="text-gray-600 leading-relaxed mb-4">{"Establece un seguimiento periódico de errores, incidentes y cambios de versión. La revisión debería permitir detectar cuándo un control necesita ajustarse o volver a probarse."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"En privacidad, nuestra recomendación es documentar qué datos se recaban, para qué se utilizan, quién puede acceder, cuánto tiempo se conservan y cómo se eliminan. Incluye fotografías, videos y representaciones biométricas cuando correspondan. Estas decisiones requieren revisión jurídica conforme al tratamiento y al sector; incorporar IA no resuelve por sí mismo esa revisión."}</p>
      </section>
      <section className="article-band article-band--blue" aria-labelledby="reconocer-un-rostro-es-suficiente">
        <h2 id="reconocer-un-rostro-es-suficiente" className="text-2xl font-bold mt-12 mb-6 scroll-mt-36">{"¿Reconocer un rostro es suficiente?"}</h2>
        <p className="text-gray-600 leading-relaxed mb-4">{"La comparación facial resulta útil para relacionar muestras. Para decidir sobre una identidad, recomendamos interpretar ese resultado junto con la evidencia documental, la captura y las demás comprobaciones pertinentes."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"NIST distingue la validación de evidencia de la verificación de su vínculo con el solicitante en su "}<a href="https://pages.nist.gov/800-63-4/sp800-63a.html" className="text-[#1ECAD3] underline underline-offset-4 hover:text-white">{"guía de comprobación de identidad"}</a>{". Aquí se utiliza como referencia técnica, sin atribuirle obligatoriedad general en México."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"La postura editorial de JAAK es que "}<strong>{"verificar una identidad requiere evaluar distintas señales"}</strong>{". La cantidad y profundidad de los controles deben responder al caso de uso."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"Agregar pasos indiscriminadamente puede dificultar el acceso. Recomendamos justificar cada requisito, explicar los reintentos y ofrecer una ruta para casos legítimos que no consiguen completar el flujo habitual."}</p>
      </section>
      <section className="article-band article-band--light" aria-labelledby="que-revisar-al-elegir-una-solucion-de-verificacion-de-identidad">
        <h2 id="que-revisar-al-elegir-una-solucion-de-verificacion-de-identidad" className="text-2xl font-bold mt-12 mb-6 scroll-mt-36">{"Qué revisar al elegir una solución de verificación de identidad"}</h2>
        <p className="text-gray-600 leading-relaxed mb-4">{"Utiliza estas preguntas para convertir una demostración comercial en una evaluación documentada:"}</p>
        <div role="region" aria-label="Tabla: Criterio" tabIndex={0} className="my-8 max-w-full overflow-x-auto rounded-lg border border-white/10 focus-visible:outline-2 focus-visible:outline-[#1ECAD3]"><table className="w-full min-w-[640px] text-sm text-left"><thead><tr><th scope="col" className="p-4 border-b">{"Criterio"}</th><th scope="col" className="p-4 border-b">{"Pregunta al proveedor"}</th><th scope="col" className="p-4 border-b">{"Evidencia que conviene solicitar"}</th></tr></thead><tbody><tr><td className="p-4 border-b align-top">{"Alcance"}</td><td className="p-4 border-b align-top">{"¿Qué comprueba cada módulo y qué queda fuera?"}</td><td className="p-4 border-b align-top">{"Descripción funcional y límites documentados"}</td></tr><tr><td className="p-4 border-b align-top">{"Amenazas"}</td><td className="p-4 border-b align-top">{"¿Qué ataques de presentación e inyección se evaluaron?"}</td><td className="p-4 border-b align-top">{"Matriz de amenazas y resultados por escenario"}</td></tr><tr><td className="p-4 border-b align-top">{"Pruebas independientes"}</td><td className="p-4 border-b align-top">{"¿Qué versión y condiciones cubre el informe?"}</td><td className="p-4 border-b align-top">{"Informe con fechas, metodología y alcance"}</td></tr><tr><td className="p-4 border-b align-top">{"Errores"}</td><td className="p-4 border-b align-top">{"¿Cómo se manejan fallos, reintentos y excepciones?"}</td><td className="p-4 border-b align-top">{"Política de decisión y flujo de revisión"}</td></tr><tr><td className="p-4 border-b align-top">{"Privacidad"}</td><td className="p-4 border-b align-top">{"¿Cómo se conservan, utilizan y eliminan los datos?"}</td><td className="p-4 border-b align-top">{"Documentación de tratamiento, accesos y conservación"}</td></tr><tr><td className="p-4 border-b align-top">{"Integración y trazabilidad"}</td><td className="p-4 border-b align-top">{"¿Qué resultados quedan disponibles para investigar un caso?"}</td><td className="p-4 border-b align-top">{"Documentación técnica y ejemplos de registros"}</td></tr><tr><td className="p-4 border-b align-top">{"Experiencia"}</td><td className="p-4 border-b align-top">{"¿Qué ocurre con usuarios que no completan la captura?"}</td><td className="p-4 border-b align-top">{"Resultados de piloto y mecanismos de asistencia"}</td></tr></tbody></table></div>
        <p className="text-gray-600 leading-relaxed mb-4">{"Antes del piloto, acuerda qué resultados permitirán continuar, cuáles exigirán ajustes y quién resolverá los casos inconclusos. Así, la evaluación responde a necesidades operativas concretas."}</p>
      </section>
      <section className="article-band article-band--blue" aria-labelledby="la-perspectiva-de-jaak">
        <h2 id="la-perspectiva-de-jaak" className="text-2xl font-bold mt-12 mb-6 scroll-mt-36">{"La perspectiva de JAAK"}</h2>
        <p className="text-gray-600 leading-relaxed mb-4">{"JAAK trabaja en identidad digital para empresas. Su "}<a href="https://www.jaak.ai/plataforma/verificacion-identidad" className="text-[#1ECAD3] underline underline-offset-4 hover:text-white">{"página de verificación de identidad"}</a>{" presenta componentes de comparación facial, prueba de vida y verificación documental; también cuenta con una "}<a href="https://www.jaak.ai/ocr-documental" className="text-[#1ECAD3] underline underline-offset-4 hover:text-white">{"oferta de OCR documental"}</a>{"."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"El enfoque que proponemos es discutir qué evidencia necesita cada proceso, cómo interpretar sus resultados y qué excepciones deben atenderse. El alcance contratado, la configuración y la integración requieren confirmación específica; este artículo no atribuye a JAAK todos los controles descritos."}</p>
      </section>
      <section className="article-band article-band--light" aria-labelledby="preguntas-frecuentes">
        <h2 id="preguntas-frecuentes" className="text-2xl font-bold mt-12 mb-6 scroll-mt-36">{"Preguntas frecuentes"}</h2>
        <h3 id="la-comparacion-facial-verifica-una-identidad" className="text-xl font-bold mt-8 mb-4 scroll-mt-36">{"¿La comparación facial verifica una identidad?"}</h3>
        <p className="text-gray-600 leading-relaxed mb-4">{"Apoya la relación entre una muestra y una referencia. Para decidir sobre una identidad, hay que evaluar también la confiabilidad de esa referencia y los demás controles pertinentes."}</p>
        <h3 id="que-diferencia-hay-entre-reconocimiento-facial-y-prueba-de-vida" className="text-xl font-bold mt-8 mb-4 scroll-mt-36">{"¿Qué diferencia hay entre reconocimiento facial y prueba de vida?"}</h3>
        <p className="text-gray-600 leading-relaxed mb-4">{"El primero apoya la comparación o identificación mediante el rostro. La segunda evalúa señales de presencia genuina durante la captura, dentro del alcance implementado."}</p>
        <h3 id="todos-los-sistemas-de-prueba-de-vida-detectan-deepfakes" className="text-xl font-bold mt-8 mb-4 scroll-mt-36">{"¿Todos los sistemas de prueba de vida detectan deepfakes?"}</h3>
        <p className="text-gray-600 leading-relaxed mb-4">{"No debe asumirse. Solicita evidencia sobre los contenidos, mecanismos de ataque y condiciones probadas en la versión que se utilizará."}</p>
        <h3 id="que-diferencia-hay-entre-presentacion-e-inyeccion" className="text-xl font-bold mt-8 mb-4 scroll-mt-36">{"¿Qué diferencia hay entre presentación e inyección?"}</h3>
        <p className="text-gray-600 leading-relaxed mb-4">{"La presentación actúa frente al sensor. La inyección introduce material en el flujo digital. Sus controles deben evaluarse por separado."}</p>
        <h3 id="la-ia-puede-sustituir-por-completo-la-revision-humana" className="text-xl font-bold mt-8 mb-4 scroll-mt-36">{"¿La IA puede sustituir por completo la revisión humana?"}</h3>
        <p className="text-gray-600 leading-relaxed mb-4">{"Puede automatizar tareas o flujos determinados. Recomendamos definir quién atenderá excepciones, inconformidades y señales contradictorias, sin asumir que cada caso necesita revisión manual."}</p>
      </section>
      <section className="article-band article-band--blue" aria-labelledby="una-decision-basada-en-evidencia">
        <h2 id="una-decision-basada-en-evidencia" className="text-2xl font-bold mt-12 mb-6 scroll-mt-36">{"Una decisión basada en evidencia"}</h2>
        <p className="text-gray-600 leading-relaxed mb-4">{"Antes de adoptar una solución, define qué necesita comprobar tu empresa, qué riesgos debe cubrir y cómo atenderá los errores. Evalúa cada componente y después prueba el flujo completo con condiciones representativas."}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{"Para explorar estos criterios en tu operación, conoce el "}<a href="https://www.jaak.ai/plataforma/verificacion-identidad" className="text-[#1ECAD3] underline underline-offset-4 hover:text-white">{"enfoque de verificación de identidad de JAAK"}</a>{"."}</p>
      </section>
    </ArticleLayout>
  );
}
