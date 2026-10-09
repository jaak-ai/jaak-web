# Revisión editorial: IA en la verificación de identidad

Estado: preparado para publicación; todavía sin merge ni despliegue a producción.

Trazabilidad Volo: **TO-1292**, tarea creada y confirmada por el usuario. PR: https://github.com/jaak-ai/jaak-web/pull/204.

El usuario pidió avanzar con la publicación. La fusión y el despliegue quedan sujetos a los controles y revisiones obligatorios del repositorio. Ruta: `/blog/inteligencia-artificial-verificacion-identidad`.

## Revisión y vista previa

La ruta reutiliza `ArticleLayout` y contiene únicamente el apartado 3 del material suministrado. La portada autorizada se obtuvo del diseño de Canva compartido por el usuario y se conserva localmente en `public/images/blog/inteligencia-artificial-verificacion-identidad.png` (PNG de 1024 × 538). La plantilla la presenta completa, sin recorte. Open Graph, Twitter y Article usan el mismo recurso local. El título se muestra una sola vez en la plantilla. Autor confirmado por el usuario: JAAK (organización). Fecha de publicación indicada: 9 de octubre de 2025 (`2025-10-09`), configurada en la cabecera, Open Graph y Article. No se asigna fecha de modificación ni revisor individual. La portada se incluye en los metadatos; las etiquetas se conservan como keywords, porque el inventario del blog no admite etiquetas.

## Preparación para publicar

Por instrucción del usuario, se retiraron el bloqueo por entorno, sus pruebas y la renderización dinámica forzada. La ruta se genera como página estática y declara `index, follow`. Se registró en `src/lib/blog.ts` con título, descripción como extracto, fecha confirmada, categoría IA, slug, lectura de 9 minutos y portada local. El registro se añadió al final para conservar el orden cronológico descendente y el artículo destacado existente.

Listado del blog, relacionados, sitemap y RSS consumen ese registro sin cambios en sus generadores. La homepage mantiene su selección habitual de artículos recientes; este artículo de octubre de 2025 no se fuerza como novedad.

Article y Open Graph conservan únicamente los datos confirmados: autor institucional JAAK, fecha 2025-10-09 y portada autorizada. No se inventan revisor, fecha de modificación, cargo ni biografía. El canonical propio y el título SEO absoluto se conservan. robots.txt permite esta ruta.

La preparación está en el PR. Se solicitó avanzar con la publicación; antes de fusionar deben pasar los controles y revisiones obligatorios. La indexabilidad se comprueba sobre el build local de producción; no implica que buscadores hayan indexado una página aún no publicada. Las vistas previas de Vercel pueden añadir su propia cabecera `X-Robots-Tag: noindex` para proteger los previews.

## Ajustes editoriales realizados

1. «Para evaluar una implementación, propone estas preguntas» → «Para evaluar una implementación, plantéate estas preguntas».
2. «Propone un seguimiento periódico» → «Establece un seguimiento periódico».

Los enlaces del cuerpo se conservaron, incluidos NIST, Microsoft, verificación de identidad y OCR. Las dos rutas internas existen en el repositorio. Las propuestas del apartado 4 no se añadieron.

## Hallazgo SEO previo

`src/app/layout.tsx` hereda canonical de la homepage y aplica la plantilla `%s | JAAK`; varios artículos existentes no definen canonical propio y ya incluyen el sufijo en su título. Este borrador fija su canonical a `https://jaak.ai/blog/inteligencia-artificial-verificacion-identidad` y usa título absoluto. No se modificó el SEO global ni los otros artículos.

## Validación histórica del borrador

Antes de retirar el bloqueo se aprobaron compilación, tipos, 77 pruebas y lint (dos advertencias previas), así como la revisión local del texto completo, dos tablas, cinco FAQ, metadatos, imagen y diseño en 1440, 390 y 320 px. La exclusión de listado/sitemap/RSS y los 404 en producción correspondían exclusivamente al estado anterior de borrador; ya no se esperan tras esta preparación.

## Datos editoriales confirmados

La revisión posterior de la cabecera y los metadatos confirma autor JAAK, fecha visible «9 de octubre, 2025», Open Graph `publishedTime: 2025-10-09` y Article con autor Organization y `datePublished: 2025-10-09`. No se asignan fecha de modificación, revisor, cargo ni biografía no proporcionados. Los artículos existentes mantienen su atribución.

## Diseño solicitado

Los diez bloques de lectura alternan fondo blanco y azul JAAK, agrupados por introducción y encabezados H2. Cada fondo utiliza colores adecuados para párrafos, encabezados, enlaces y tablas. El cambio se limita a este artículo y conserva el texto, el índice, la jerarquía de encabezados y la navegación.

La revisión posterior con portada y fondos alternados pasó compilación (incluidos tipos), lint (solo las dos advertencias previas), 77 pruebas y cotejo completo del contenido en Chrome. Verificados los diez fondos alternos, contraste mínimo de 4.5:1 para párrafos y enlaces de cada bloque, portada cargada sin recorte, metadatos sociales y esquemas con imagen local, y ausencia de desbordamiento en 1440, 390 y 320 px. Los artículos existentes conservan su diseño y atribución.

## Validación de la preparación para publicación

- `npm run build`: correcto, incluidos tipos; la ruta queda prerenderizada estáticamente. Permanece la advertencia previa de Contentlayer/baseUrl.
- `npm test`: 68 pruebas en 9 archivos, todas pasan. Se retiraron las nueve pruebas del bloqueo eliminado.
- `npm run lint`: sin errores, con las mismas dos advertencias previas. `git diff --check`: correcto.
- Servidor local del build con `VERCEL_ENV=production`, sin override de borrador: artículo 200, robots `index, follow`, sin cabecera HTTP noindex y robots.txt sin bloqueo de `/blog`.
- Sitemap y RSS: una sola entrada para el canonical, fecha 2025-10-09 y categoría IA en RSS. Listado incluye el artículo; la homepage conserva su selección reciente.
- Chrome/Playwright: texto completo y enlaces cotejados con el apartado 3, un H1, dos tablas, cinco FAQ, canonical, título SEO, descripción, Article/OG/Twitter y portada correctos. Texto presente sin JavaScript; sin notas editoriales ni regresión del artículo IA existente.
- Escritorio 1440 px y móviles 390/320 px: sin desbordamiento de página, tablas con scroll contenido; sin errores JavaScript del código local.

Los resultados corresponden al build local de producción. No se realizó merge ni despliegue a producción y no se afirma indexación efectiva por buscadores.

## Correcciones de calidad para TO-1292

Las seis anotaciones de SonarQube se atendieron: props de ArticleLayout de solo lectura, autor por categoría calculado sin ternario anidado y tablas con secciones nativas etiquetadas. Un componente común renderiza ambas tablas a partir de sus encabezados y filas originales; botones nativos permiten desplazar horizontalmente con teclado sin asignar tabIndex a elementos estáticos.

Los datos editoriales aprobados se centralizan en `src/lib/blog/identityAiArticle.ts` y se reutilizan en la página y en blogPosts. Los breadcrumbs se construyen con una lista de enlaces y sus posiciones, conservando el JSON-LD original. El detector local jscpd no encontró duplicaciones en los archivos nuevos del artículo; el veredicto del gate corresponde a SonarQube y se verifica después del push.

Tras las correcciones: build final correcto (incluidos tipos); 68 pruebas y lint sin errores (dos advertencias previas). Chrome/Playwright valida el texto completo, metadatos, sitemap/RSS, ausencia de regresiones y viewport 1440/390/320. Los botones de la primera tabla se activaron con Enter en móvil: desplazamiento a la derecha mayor que cero y regreso a cero a la izquierda.
