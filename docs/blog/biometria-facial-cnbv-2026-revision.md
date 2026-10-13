# Biometría facial y CNBV 2026: borrador para revisión

Ruta: `/blog/biometria-facial-cnbv-2026-plazos-requisitos-bancos-mexico`. Categoría existente: **Regulación**. Tarea Volo: pendiente de creación; no se inventa un código.

## Datos confirmados

Autor y revisor: **JAAK**. Fecha editorial: **13 de octubre de 2026**, `2026-10-13`, confirmada expresamente por la usuaria. La usuaria confirmó la aprobación jurídica del contenido. No se añade una fecha de actualización ni una fecha exacta de vencimiento no confirmada.

Título: **Biometría facial y CNBV 2026: plazos, requisitos y acciones que deben tomar los bancos en México**.

Título SEO: **Biometría facial y CNBV 2026: plazos y requisitos | JAAK**.

Descripción: **Revisa los cambios de CNBV en biometría facial para bancos en México: plazos, Anexo 71, seguridad y acciones para adecuar la verificación de identidad.**

## Contenido y diseño

Se integra el texto proporcionado completo, con listas, ocho preguntas frecuentes, enlaces CTA originales a https://jaak.ai y fuentes oficiales. Único ajuste editorial: del párrafo final «Nota de actualización» se retiran la etiqueta y la instrucción de incorporar posteriormente una fecha exacta; se conserva literalmente la advertencia sobre alcance general y evaluación jurídica. El cuerpo mantiene la explicación de los 90 días hábiles y la necesidad de consultar el calendario oficial, sin inventar un vencimiento.

Reutiliza ArticleLayout, cabecera alineada con columna de lectura, autor institucional, índice, progreso y diez bandas alternadas blanco/azul. Un H1, nueve H2 y 33 H3. La fuente no contiene tablas. Relacionados: la guía CNBV existente y el artículo de reconocimiento facial y prueba de vida. Sin modificar esas páginas ni su taxonomía. Lectura estimada: 19 minutos.

Portada solicitada: página 3 del diseño Canva DAHXiZEo-dI. El visor público permite leer el diseño, pero font-public.canva.com está bloqueado por la política de red del entorno. La captura con tipografía de sustitución se descartó y no se incluye en la página. Se guardaron font-public.canva.com y media-public.canva.com como adiciones al borrador de configuración del entorno; guardar el borrador no aplica ni publica la configuración. Incorporar la portada original cuando los recursos autorizados sean accesibles. Sin imágenes generadas, logotipos reconstruidos ni una imagen inventada en Article/OG.

## Protección del borrador y SEO

La ruta únicamente se muestra en Vercel Preview o desarrollo local. En Vercel Production responde 404 incluso con JAAK_BLOG_DRAFT_PREVIEW=true. El helper reutiliza la protección histórica del proyecto; sus nueve casos se restauran para verificar que el contenido no se filtre a producción. El artículo queda fuera de blogPosts, listado, sitemap y RSS; no se modifica ningún generador global.

Canonical propio: https://jaak.ai/blog/biometria-facial-cnbv-2026-plazos-requisitos-bancos-mexico. Título absoluto evita sufijo duplicado. Robots noindex/nofollow. Article, Open Graph y BreadcrumbList utilizan únicamente autor institucional y fecha confirmados. El revisor se guarda como dato editorial, sin propiedades schema improcedentes. No se heredan imágenes sociales de otra página.

## Publicación posterior

Después de asignar el código Volo y aprobar la publicación: incorporar portada original; registrar los datos confirmados en blogPosts; retirar el bloqueo de la ruta y noindex; prerenderizar e incluir la entrada mediante los generadores existentes; comprobar HTML/indexabilidad/canonical/OG/Article, listado, sitemap y RSS; obtener los controles y revisiones obligatorios y verificar el despliegue de producción. Este borrador no autoriza ni ejecuta merge/despliegue de producción.

La fuente oficial enlazada no pudo comprobarse por HTTP desde este entorno: el proxy rechazó el acceso a sidof.segob.gob.mx con 403. Se conserva el enlace suministrado y la aprobación jurídica de la usuaria; no se presenta esta limitación de red como una comprobación jurídica independiente aprobada.

## Comprobaciones ejecutadas

- npm run build: correcto, incluidos tipos. Advertencia previa de Contentlayer/baseUrl.
- npm run lint: cero errores y las dos advertencias previas de webinar/page.tsx y HomepageAutoservicioCTA.tsx.
- npm test: 77 pruebas en diez archivos aprobadas, incluidas las nueve del control de borrador.
- Chromium/Playwright sobre el build final: cotejo completo de todos los párrafos, listas y encabezados contra el texto suministrado, conservando los siete encabezados numerados y ocho FAQ; un H1, nueve H2 y 33 H3; diez bandas alternadas.
- Anchos 1440, 1024, 768, 390 y 320: sin desbordamiento horizontal. Canonical, título, robots noindex/nofollow, autor Organization JAAK y fecha 2026-10-13 correctos; sin imagen ni dateModified inventadas. Texto completo presente también sin JavaScript. Sin errores JavaScript locales.
- Los dos CTA originales se conservan como enlaces accesibles; ambas páginas relacionadas responden 200.
- En build local con VERCEL_ENV=production y override=true: la ruta responde 404 y no filtra el contenido. /blog, /sitemap.xml y /rss.xml no incluyen el slug.
- git diff --check correcto. La portada original sigue pendiente del acceso a los recursos de Canva; no se afirma haber validado su resultado visual.
