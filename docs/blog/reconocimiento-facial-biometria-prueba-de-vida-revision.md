# Reconocimiento facial, biometría y prueba de vida: revisión

Estado: borrador para revisión editorial y técnica. Ruta prevista: `/blog/reconocimiento-facial-biometria-prueba-de-vida`.

## Implementación

El cuerpo contiene exclusivamente el apartado 3 del texto proporcionado: título en la plantilla (un H1), 11 H2, 10 H3, dos tablas, seis FAQ, cinco pasos del ejemplo, tres recomendaciones y CTA final. No se añadieron afirmaciones comerciales, legales ni técnicas ni se cambiaron palabras del cuerpo. Los enlaces de la ficha y las fuentes se incorporaron a las frases correspondientes sin cambiar el texto visible.

Reutiliza ArticleLayout, ScrollableArticleTable, el índice lateral y lectura de aproximadamente 10 minutos. Categoría existente IA; las etiquetas solicitadas se guardan como keywords porque blogPosts no implementa etiquetas. Doce bloques alternan blanco y azul. Los estilos del artículo anterior se trasladaron sin cambios a article-bands.css y se reutilizan; se verificó la regresión del artículo publicado.

Portada: página 2 del diseño de Canva compartido, obtenida como PNG original de la miniatura pública de esa página (617 × 324). Archivo local: `public/images/blog/reconocimiento-facial-biometria-prueba-de-vida.png`. Se verificó visualmente que corresponde al diseño «Reconocimiento facial, biometría y prueba de vida — Diferencias clave»; no se recreó, editó ni utilizó la portada de la página 1. No depende de Canva al servirse. Si se desea mayor nitidez antes de publicar, sustituirla por una exportación original de mayor resolución de la misma página; no escalar artificialmente.

## Datos pendientes

- Autor y revisor: **JAAK**, confirmados por el usuario. La autoría se muestra como organización, sin atribución a una persona por categoría, cargo ni biografía inventados. Metadata, Open Graph y Article usan el autor institucional. La revisión institucional queda registrada en los datos editoriales y en esta nota, sin añadir propiedades de schema ajenas a Article.
- Fechas de publicación y actualización: no asignadas; ausentes de cabecera, Open Graph y Article. La investigación del 12 de octubre de 2026 no se utiliza como fecha editorial.
- Código Volo de este artículo: pendiente de recibir; requiere una tarea propia, sin reutilizar TO-1292 del artículo anterior.
- Producto: validación aprobada por el usuario para las descripciones vigentes del artículo. No se amplían afirmaciones sobre implementación interna o configuración.
- Técnica: validación aprobada por el usuario para terminología PAD/liveness, puntuaciones y alcance. Se conservan los límites del texto, sin atribuir capacidad 1:N a JAAK ni cobertura universal.
- Editorial/legal: validaciones aprobadas por el usuario. Se conserva la voz institucional y el párrafo de privacidad sin formular obligaciones legales mexicanas específicas.

## Vista previa y protección

La ruta es dinámica y se evalúa por petición. `isBlogDraftPreview` permite NODE_ENV=development, VERCEL_ENV=preview o servidor local con JAAK_BLOG_DRAFT_PREVIEW=true cuando no hay VERCEL_ENV. VERCEL_ENV=production bloquea el artículo incluso con el override o NODE_ENV=development. No se confía solamente en el estado Draft del PR.

No está registrado en blogPosts; queda fuera del listado público, homepage, relacionados de otros artículos, sitemap y RSS. Lleva noindex, nofollow. Solo el borrador enlaza como artículo relacionado a la guía central ya publicada; no se incorpora el enlace recíproco al artículo anterior hasta que el nuevo se apruebe y publique.

Preview local del build: `VERCEL_ENV=preview npm start -- --hostname 127.0.0.1 --port 3003`. Comprobación de bloqueo de producción: `VERCEL_ENV=production JAAK_BLOG_DRAFT_PREVIEW=true npm start -- --hostname 127.0.0.1 --port 3004` (HTTP 404).

## SEO y enlaces

Título absoluto: «Reconocimiento facial y prueba de vida: diferencias | JAAK». Descripción exacta del apartado 2. Canonical propio: `https://jaak.ai/blog/reconocimiento-facial-biometria-prueba-de-vida`. Open Graph/Twitter usan la portada local y sus dimensiones reales. Article y BreadcrumbList usan campos confirmados, incluido autor institucional JAAK; sin fechas ni imagen inventadas.

Enlaces JAAK presentes y verificados contra el proyecto y el servidor local: `/plataforma/verificacion-identidad`, `/docs/productos/one-to-one`, `/docs/productos/liveness`, `/docs/verificar-identidad/api`. Se mantiene el CTA final. La guía central `/blog/inteligencia-artificial-verificacion-identidad` existe y ya está pública; la nota de la ficha sobre su URL estaba desactualizada. Fuentes NIST: SP 800-63B-4, glosario PAD, sección 3.14 de SP 800-63A-4 y efectos demográficos FRVT/FRTE. Sin Microsoft ni rutas inventadas para los siguientes artículos propuestos.

## Validación ejecutada

- Build final, incluidos tipos: correcto. Advertencia previa de Contentlayer/baseUrl.
- npm test: 77 pruebas / 10 archivos, todas pasan; nueve casos verifican la protección del borrador.
- npm run lint: sin errores; dos advertencias previas (webinar/page.tsx y HomepageAutoservicioCTA.tsx).
- git diff --check: correcto.
- jscpd local: no detectó duplicaciones en los archivos nuevos del artículo, CSS compartido ni guard. El gate de SonarQube se evalúa independientemente en GitHub.
- Chromium/Playwright: cotejo completo de párrafos, encabezados, listas y celdas con el apartado 3; dos tablas, seis FAQ y un H1; título/descripcion/canonical/noindex, imagen cargada y ausencia de notas editoriales. En la revisión inicial el autor no estaba asignado; la comprobación posterior confirma JAAK como Organization, sin fechas inventadas.
- Mismo contenido HTML con JavaScript desactivado. Links internos y artículo relacionado responden 200.
- Escritorio 1440 y móvil 390/320 px: sin desbordamiento de página; tablas con scroll propio y botones activados mediante Enter. Doce fondos alternados, contraste mínimo de 4.5:1 para párrafos, enlaces y botones.
- Producción con override responde 404 y no contiene el cuerpo del borrador. Listado, homepage, sitemap y RSS excluyen el slug.
- Artículo publicado anterior conserva autor, fecha y diez bloques con los mismos colores. Sin errores JavaScript del código local. Las peticiones de terceros se bloquearon para aislar la revisión; no se validan formularios, pagos ni analítica.

## Publicación posterior

No hacer merge ni desplegar este borrador a producción. Tras aprobar datos y contenido, retirar el guard/noindex y registrar el artículo en blogPosts con su fecha real y portada; sitemap/RSS usarán el registro existente. Ajustar Article/OG con autor y fechas confirmados. Incorporar entonces el enlace recíproco sugerido y comprobar indexabilidad antes de publicar.

## Confirmación editorial posterior

El usuario confirmó autor y revisor JAAK y aprobó las validaciones. Se configuró la autoría institucional en la plantilla, metadata, Open Graph y Article. No se crea una persona ni cargo para representar a la organización. El revisor se conserva como dato editorial aprobado; no se utiliza reviewedBy en Article, cuyo dominio schema no corresponde a esa propiedad. Fechas y código Volo siguen pendientes y el estado de borrador no cambia.

Validación de la asignación: build (tipos incluidos), 77 pruebas y lint sin errores con dos advertencias previas. Chromium/Playwright confirma autor visible JAAK, schema Organization, metadata author y Open Graph JAAK, sin fecha de publicación/actualización ni persona atribuida automáticamente; el noindex y las tablas/FAQ se mantienen.
