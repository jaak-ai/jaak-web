# Firma electrónica en logística: borrador para revisión

Ruta: `/blog/firma-electronica-logistica-mexico`. Categoría existente: **Firma Electrónica**. Autor y revisor: **JAAK**, confirmados por la usuaria. Fecha editorial: **16 de octubre de 2026**, confirmada como «hoy». Código Volo y portada pendientes; no se inventan.

## Contenido público y SEO

Se integra el artículo aprobado tras la investigación «JAAK_Transporte_Logistica_Investigacion_hasta_ICP.docx». Solo aparece el cuerpo editorial del artículo: introducción, nueve H2, catorce H3 (seis FAQ), una tabla de documentos/evidencia, listas y los dos CTA. Un H1 generado por ArticleLayout. No se publica la ficha de estrategia, ICP, objetivos de agenda, notas de validación ni recomendaciones internas.

H1: Firma electrónica en logística: documentos, identidad y NOM-151 en México.

Título SEO absoluto: Firma electrónica en logística en México | JAAK.

Descripción: Conoce qué documentos logísticos pueden firmarse electrónicamente, cómo validar operadores y qué evidencia conservar sin confundir Carta Porte con NOM-151.

Keyword principal: firma electrónica en logística. Investigación cualitativa; sin volúmenes, dificultad SEO ni resultados comerciales inventados. El artículo mantiene ejemplos hipotéticos, separación entre firma/identidad/autorización, firma avanzada y conservación NOM-151, lectura QR/consulta oficial y Carta Porte fiscal.

## Arquitectura y protección

Reutiliza ArticleLayout, ScrollableArticleTable y article-bands.css. Diez bandas blanco/azul; cabecera alineada con la columna de lectura; sin imagen inventada ni recurso social heredado. Autor institucional explícito, fecha aprobada y Article/BreadcrumbList; sin dateModified. El revisor se conserva como dato editorial.

La protección histórica de borrador permite desarrollo y Vercel Preview, y devuelve 404 en Vercel Production incluso con override=true. Nueve casos del helper restaurados para comprobar esa condición. Ruta dinámica, noindex/nofollow; no se registra en blogPosts y queda fuera de listado, sitemap y RSS. La publicación posterior requiere retirar esa protección y registrar los datos aprobados cuando se autorice publicar.

## Referencias contrastadas

Se descargaron por HTTPS con HTTP 200 y se leyeron las disposiciones pertinentes de:

- Código de Comercio, texto de Cámara de Diputados con última reforma indicada 14-11-2025: artículos 49, 89/89 bis, 93 y 97. Conservación, atribución y requisitos de firma avanzada/fiable.
- Ley Federal del Trabajo, última reforma indicada 14-05-2026: artículos 25 y 804. Formalidades y conservación laboral.
- Código Fiscal de la Federación, última reforma indicada 09-04-2026: referencia a artículos 29/29-A y régimen propio de CFDI.
- Ley de Caminos, Puentes y Autotransporte Federal y LFPDPPP, textos con última reforma indicada 14-11-2025. Alcance de autotransporte y protección de datos; sin afirmar que INE sustituya licencia o autorización.
- NOM-151-SCFI-2016: ficha DOF y texto completo enlazado por ella, `https://dof.gob.mx/normasOficiales/6499/seeco11_C/seeco11_C.html`. Conservación/digitalización y apéndice de constancia.
- SAT, página de complemento Carta Porte suministrada: confirma función de CFDI/complemento y referencias CFF. La página remite a RMF 2024; el artículo no la usa para afirmar versiones, exenciones, vencimientos o reglas fiscales específicas de 2026.
- INE, avisos de credencial: incluye aclaración sobre Valida INE QR. No se atribuyen a la lectura de QR una consulta de vigencia, identidad del portador ni autorización de retiro.

Este contraste documental no es un dictamen jurídico ni una auditoría exhaustiva de toda la normativa de cada operación. El artículo conserva el análisis condicionado al acto y sus formalidades, sin promesas de validez automática, NOM-151 universal o biometría obligatoria para toda la logística.

Enlaces internos públicos comprobados HTTP 200 y contenido pertinente: firma electrónica, verificación de identidad, documentación One-to-One, Liveness y contacto. Relacionados NOM-151 y reconocimiento facial/prueba de vida responden 200. Se describen únicamente capacidades comprobadas; no se trasladan métricas ni garantías absolutas de las landings comerciales al artículo.

## Pendientes de entrega

Crear el ticket Volo y asociar su código al PR. La usuaria pidió un título antes de preparar la portada: se propone «Firma electrónica en logística» para la portada y «Documentos, identidad y NOM-151 en México» como subtítulo. Incorporar el recurso que proporcione, sin inventar imagen ni reconstruir logotipo. Mantener el PR en borrador para revisión; no hay autorización de merge/producción de este artículo.

## Validación ejecutada

- npm ci con lockfile existente para incorporar las dependencias de Sentry añadidas a main; sin cambios de dependencias/lockfile.
- npm run build: correcto, incluidos tipos. Advertencia previa de Contentlayer/baseUrl.
- npm run lint: cero errores; dos advertencias previas de webinar/page.tsx y HomepageAutoservicioCTA.tsx.
- npm test: **134 pruebas / 16 archivos**, todas pasan; incluye nueve casos de protección del borrador.
- Chromium sobre build local: cotejo completo del artículo Markdown, incluidos todos los encabezados, párrafos, listas y celdas; un H1, nueve H2, catorce H3, una tabla y seis FAQ. Texto completo también sin JavaScript.
- Cinco anchos (1440/1024/768/390/320): sin desbordamiento de página; tabla desplazable en móvil mediante botones activados con teclado.
- Título SEO absoluto, canonical propio, robots noindex/nofollow, fecha 2026-10-16 y autor Organization JAAK comprobados; sin imagen ni dateModified inventadas.
- Todos los enlaces internos del cuerpo y ambos relacionados responden 200. Sin errores JavaScript locales.
- El slug no aparece en /blog, /sitemap.xml ni /rss.xml; producción devuelve 404 incluso con JAAK_BLOG_DRAFT_PREVIEW=true y no contiene el cuerpo del artículo.
