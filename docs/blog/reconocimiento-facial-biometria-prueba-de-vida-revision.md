# Reconocimiento facial, biometría y prueba de vida: publicación

Estado: publicación autorizada por el usuario; código preparado en el PR #207, pendiente de controles, fusión y despliegue. Tarea Volo: **TO-1341**. Ruta: `/blog/reconocimiento-facial-biometria-prueba-de-vida`.

## Contenido y datos aprobados

Solo el apartado 3 aparece como cuerpo: un H1 en la plantilla, 11 H2, 10 H3, dos tablas, seis FAQ, cinco pasos del ejemplo, tres recomendaciones y CTA final. No se cambian las palabras ni se añaden afirmaciones. Las URL de la ficha/fuentes se incorporan a frases correspondientes, sin modificar el texto visible.

Autor y revisor: **JAAK**, confirmados por el usuario. Autoría institucional explícita en plantilla, metadata, OG y Article; sin persona, cargo o biografía inventados. El revisor se guarda como dato editorial; no se incorpora reviewedBy, cuyo dominio schema no es Article.

Publicación: **12 de octubre de 2026** (`2026-10-12`), confirmada expresamente por el usuario, no inferida de la investigación. Cabecera, Open Graph y Article usan esa fecha. Sin fecha de actualización/dateModified inventada.

El usuario aprobó las validaciones de producto, técnica, voz institucional y privacidad. Se conserva el alcance prudente: sin atribuir capacidad 1:N a JAAK, sin protección universal contra deepfakes/inyección, sin métricas, certificaciones ni obligaciones legales mexicanas añadidas.

## Arquitectura, diseño y portada

Reutiliza ArticleLayout, ScrollableArticleTable e índice lateral. Categoría existente IA; etiquetas en keywords, porque el inventario no tiene campo de etiquetas. Lectura estimada de 10 minutos. Doce bandas alternan blanco y azul. Los estilos del artículo anterior se trasladaron sin cambios a article-bands.css y se reutilizan; la regresión visual del artículo existente fue comprobada.

Portada: página 2 del Canva proporcionado, PNG original de la miniatura pública de esa página (617 × 324), en `public/images/blog/reconocimiento-facial-biometria-prueba-de-vida.png`. Se verificó que corresponde al diseño de reconocimiento facial, no al de IA de la página 1. No se recreó ni editó, no se escala el archivo artificialmente y no depende de Canva al servirse. Una exportación original de mayor resolución puede mejorar nitidez posteriormente sin cambiar el diseño.

Los datos aprobados están centralizados en `src/lib/blog/facialRecognitionArticle.ts`; página/metadata y blogPosts los reutilizan. El artículo es el primero del inventario por fecha y usa el destacado normal de /blog. La homepage conserva sus tres artículos priorizados en RecentBlogPosts; no se cambia esa selección global.

## Preparación autorizada para producción

Se retiraron el control de entorno, la renderización dinámica forzada, noindex y las nueve pruebas del bloqueo eliminado. La ruta se prerenderiza estáticamente, declara index/follow y responde 200 en el build local con VERCEL_ENV=production. Está registrada en blogPosts; listado, relacionados, sitemap y RSS consumen ese registro sin cambios en sus generadores.

Se añadió el enlace recíproco sugerido desde «comparación facial uno a uno» de la guía central al nuevo artículo, sin cambiar el texto visible. El nuevo artículo presenta la guía central como relacionado. Ambos cambios se publican juntos mediante el mismo PR.

## SEO y enlaces

Título absoluto: «Reconocimiento facial y prueba de vida: diferencias | JAAK». Metadescripción exacta del apartado 2. Canonical: `https://jaak.ai/blog/reconocimiento-facial-biometria-prueba-de-vida`. Open Graph/Twitter usan portada local y dimensiones reales. Article/BreadcrumbList usan los datos confirmados.

Enlaces JAAK presentes y comprobados en el proyecto/build local: `/plataforma/verificacion-identidad`, `/docs/productos/one-to-one`, `/docs/productos/liveness`, `/docs/verificar-identidad/api` y guía central `/blog/inteligencia-artificial-verificacion-identidad`. Fuentes NIST: SP 800-63B-4, glosario PAD, sección 3.14 de SP 800-63A-4 y efectos demográficos FRVT/FRTE. Sin referencias a Microsoft ni URL inventadas para futuros artículos.

## Validación final de publicación

- npm run build: correcto, incluidos tipos; ruta estática. Advertencia previa de Contentlayer/baseUrl.
- npm test: **68 pruebas / 9 archivos**, todas pasan. Las nueve retiradas cubrían el guard eliminado.
- npm run lint: cero errores, mismas dos advertencias previas en webinar/page.tsx y HomepageAutoservicioCTA.tsx. git diff --check correcto.
- jscpd local: ninguna duplicación detectada en los archivos del nuevo artículo/datos. SonarQube evalúa su propio gate en GitHub.
- Chromium/Playwright sobre build local de producción: cotejo completo de párrafos, encabezados, listas y celdas con apartado 3; un H1, dos tablas y seis FAQ; imagen, título, descripción, canonical, index/follow, autor Organization JAAK y fecha 2026-10-12 correctos. Sin dateModified ni notas editoriales. Texto presente sin JavaScript.
- Todos los enlaces internos y relacionado responden 200. La guía central conserva autor, fecha y diez bandas, y contiene el nuevo enlace recíproco válido.
- Escritorio 1440 y móvil 390/320: sin desbordamiento de página; tablas con scroll y botones activados con Enter; doce fondos alternados con contraste mínimo 4.5:1 para texto/enlaces/botones. Sin errores JS locales; terceros bloqueados para aislar la revisión.
- HTTP 200 sin cabecera noindex en producción local y robots.txt sin bloqueo de /blog. Listado incluye slug; sitemap y RSS contienen una sola entrada con canonical, fecha y categoría aprobadas. Homepage mantiene sus destacados previos.

La protección de borrador y sus 404 correspondían a la etapa inicial, anterior a la autorización de publicar. La fusión final queda sujeta a las revisiones y controles obligatorios; no se omiten protecciones. Verificar despliegue y página pública antes de informar publicación completada.

## Vista previa de revisión

Despliegue Preview confirmado por GitHub/Vercel para la preparación de producción: https://jaak-1zza7jc5i-jaak-ai.vercel.app/blog/reconocimiento-facial-biometria-prueba-de-vida. El PR está listo para revisión y la fusión automática se mantiene sujeta a Itera, SonarQube Code Analysis y JAAK Structural Quality. La vista previa no acredita publicación en el dominio de producción.
