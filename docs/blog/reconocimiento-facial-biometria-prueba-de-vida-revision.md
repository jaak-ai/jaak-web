# Reconocimiento facial, biometría y prueba de vida: revisión

Estado: borrador para revisión editorial y técnica. Ruta prevista: `/blog/reconocimiento-facial-biometria-prueba-de-vida`.

## Implementación

El cuerpo contiene exclusivamente el apartado 3 del texto proporcionado: título en la plantilla (un H1), 11 H2, 10 H3, dos tablas, seis FAQ, cinco pasos del ejemplo, tres recomendaciones y CTA final. No se añadieron afirmaciones comerciales, legales ni técnicas ni se cambiaron palabras del cuerpo. Los enlaces de la ficha y las fuentes se incorporaron a las frases correspondientes sin cambiar el texto visible.

Reutiliza ArticleLayout, ScrollableArticleTable, el índice lateral y lectura de aproximadamente 10 minutos. Categoría existente IA; las etiquetas solicitadas se guardan como keywords porque blogPosts no implementa etiquetas. Doce bloques alternan blanco y azul. Los estilos del artículo anterior se trasladaron sin cambios a article-bands.css y se reutilizan; se verificó la regresión del artículo publicado.

Portada: página 2 del diseño de Canva compartido, obtenida como PNG original de la miniatura pública de esa página (617 × 324). Archivo local: `public/images/blog/reconocimiento-facial-biometria-prueba-de-vida.png`. Se verificó visualmente que corresponde al diseño «Reconocimiento facial, biometría y prueba de vida — Diferencias clave»; no se recreó, editó ni utilizó la portada de la página 1. No depende de Canva al servirse. Si se desea mayor nitidez antes de publicar, sustituirla por una exportación original de mayor resolución de la misma página; no escalar artificialmente.

## Datos pendientes

- Autor y revisor: no asignados. Se oculta el autor predeterminado por categoría y se elimina el metadata author heredado. Article no incluye autor.
- Fechas de publicación y actualización: no asignadas; ausentes de cabecera, Open Graph y Article. La investigación del 12 de octubre de 2026 no se utiliza como fecha editorial.
- Código Volo de este artículo: pendiente de recibir; requiere una tarea propia, sin reutilizar TO-1292 del artículo anterior.
- Producto: validar descripciones vigentes de comparación facial, liveness y verificación documental. La documentación pública no acredita la implementación interna ni toda su configuración.
- Técnica: confirmar terminología PAD/liveness, interpretación de puntuaciones y alcance de evaluaciones. No atribuir capacidad 1:N a JAAK ni cobertura universal frente a deepfakes/inyección.
- Editorial/legal: aprobar voz institucional y privacidad para el tratamiento y sector correspondientes. No se formularon obligaciones legales mexicanas específicas.

## Vista previa y protección

La ruta es dinámica y se evalúa por petición. `isBlogDraftPreview` permite NODE_ENV=development, VERCEL_ENV=preview o servidor local con JAAK_BLOG_DRAFT_PREVIEW=true cuando no hay VERCEL_ENV. VERCEL_ENV=production bloquea el artículo incluso con el override o NODE_ENV=development. No se confía solamente en el estado Draft del PR.

No está registrado en blogPosts; queda fuera del listado público, homepage, relacionados de otros artículos, sitemap y RSS. Lleva noindex, nofollow. Solo el borrador enlaza como artículo relacionado a la guía central ya publicada; no se incorpora el enlace recíproco al artículo anterior hasta que el nuevo se apruebe y publique.

Preview local del build: `VERCEL_ENV=preview npm start -- --hostname 127.0.0.1 --port 3003`. Comprobación de bloqueo de producción: `VERCEL_ENV=production JAAK_BLOG_DRAFT_PREVIEW=true npm start -- --hostname 127.0.0.1 --port 3004` (HTTP 404).

## SEO y enlaces

Título absoluto: «Reconocimiento facial y prueba de vida: diferencias | JAAK». Descripción exacta del apartado 2. Canonical propio: `https://jaak.ai/blog/reconocimiento-facial-biometria-prueba-de-vida`. Open Graph/Twitter usan la portada local y sus dimensiones reales. Article y BreadcrumbList usan campos confirmados; sin autor, revisor, fechas o imagen inventados.

Enlaces JAAK presentes y verificados contra el proyecto y el servidor local: `/plataforma/verificacion-identidad`, `/docs/productos/one-to-one`, `/docs/productos/liveness`, `/docs/verificar-identidad/api`. Se mantiene el CTA final. La guía central `/blog/inteligencia-artificial-verificacion-identidad` existe y ya está pública; la nota de la ficha sobre su URL estaba desactualizada. Fuentes NIST: SP 800-63B-4, glosario PAD, sección 3.14 de SP 800-63A-4 y efectos demográficos FRVT/FRTE. Sin Microsoft ni rutas inventadas para los siguientes artículos propuestos.

## Validación ejecutada

- Build final, incluidos tipos: correcto. Advertencia previa de Contentlayer/baseUrl.
- npm test: 77 pruebas / 10 archivos, todas pasan; nueve casos verifican la protección del borrador.
- npm run lint: sin errores; dos advertencias previas (webinar/page.tsx y HomepageAutoservicioCTA.tsx).
- git diff --check: correcto.
- jscpd local: no detectó duplicaciones en los archivos nuevos del artículo, CSS compartido ni guard. El gate de SonarQube se evalúa independientemente en GitHub.
- Chromium/Playwright: cotejo completo de párrafos, encabezados, listas y celdas con el apartado 3; dos tablas, seis FAQ y un H1; título/descripcion/canonical/noindex, imagen cargada, schemas sin autor/fechas y ausencia de notas editoriales.
- Mismo contenido HTML con JavaScript desactivado. Links internos y artículo relacionado responden 200.
- Escritorio 1440 y móvil 390/320 px: sin desbordamiento de página; tablas con scroll propio y botones activados mediante Enter. Doce fondos alternados, contraste mínimo de 4.5:1 para párrafos, enlaces y botones.
- Producción con override responde 404 y no contiene el cuerpo del borrador. Listado, homepage, sitemap y RSS excluyen el slug.
- Artículo publicado anterior conserva autor, fecha y diez bloques con los mismos colores. Sin errores JavaScript del código local. Las peticiones de terceros se bloquearon para aislar la revisión; no se validan formularios, pagos ni analítica.

## Publicación posterior

No hacer merge ni desplegar este borrador a producción. Tras aprobar datos y contenido, retirar el guard/noindex y registrar el artículo en blogPosts con su fecha real y portada; sitemap/RSS usarán el registro existente. Ajustar Article/OG con autor y fechas confirmados. Incorporar entonces el enlace recíproco sugerido y comprobar indexabilidad antes de publicar.
