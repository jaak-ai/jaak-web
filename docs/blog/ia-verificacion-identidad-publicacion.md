# Revisión editorial: IA en la verificación de identidad

Estado: borrador. Ruta: `/blog/inteligencia-artificial-verificacion-identidad`.

## Revisión y vista previa

La ruta reutiliza `ArticleLayout` y contiene únicamente el apartado 3 del material suministrado. No hay imagen de portada: la plantilla la admite como opcional. El título se muestra una sola vez en la plantilla. Los metadatos omiten autor, fechas e imágenes no confirmadas; las etiquetas se conservan como keywords, porque el inventario del blog no admite etiquetas.

El borrador responde 404 en el servidor de producción normal y en `VERCEL_ENV=production`. Es visible en desarrollo (`npm run dev`) y en Vercel Preview. La ruta es dinámica y evalúa la visibilidad por petición para evitar conservar el borrador en una página prerenderizada. Para revisión local con build de producción: `npm run build` y después `JAAK_BLOG_DRAFT_PREVIEW=true npm start`. La variable se aplica al arrancar el servidor; no habilita borradores en Vercel Production, ni sustituye la aprobación editorial.

El artículo no está en `blogPosts`, por lo que no se incluye en listado, relacionados, homepage, sitemap ni RSS. Lleva `noindex, nofollow` en preview.

## Antes de publicar

- Asignar y aprobar autor y revisor. La plantilla actual deduce autores por categoría; no debe atribuirse este artículo automáticamente. Confirmar una representación explícita del autor aprobado antes de habilitar su tarjeta.
- Confirmar fecha de publicación; fecha de modificación solo cuando corresponda a una revisión real.
- Aprobar voz institucional y descripción vigente de comparación facial, prueba de vida, verificación documental y OCR de JAAK.
- Validar terminología PAD/prueba de vida, presentación/inyección y errores de componentes frente a decisiones del flujo.
- Revisar jurídicamente el párrafo sobre privacidad y datos biométricos, sin convertir las referencias NIST en obligaciones mexicanas.
- No añadir métricas, certificaciones, promesas comerciales ni enlaces editoriales propuestos sin validación.

La publicación requiere retirar el bloqueo de la ruta y el `noindex`, completar los datos editoriales confirmados y añadir un registro en `src/lib/blog.ts` con categoría `IA`, slug, título, extracto, fecha legible, `dateISO` y tiempo de lectura. La imagen sigue siendo opcional. Sitemap y RSS consumen ese mismo registro y se incorporarán automáticamente; no editar sus generadores ni inventar fechas. Revisar entonces los metadatos Article/Open Graph con los campos confirmados.

## Ajustes editoriales realizados

1. «Para evaluar una implementación, propone estas preguntas» → «Para evaluar una implementación, plantéate estas preguntas».
2. «Propone un seguimiento periódico» → «Establece un seguimiento periódico».

Los enlaces del cuerpo se conservaron, incluidos NIST, Microsoft, verificación de identidad y OCR. Las dos rutas internas existen en el repositorio. Las propuestas del apartado 4 no se añadieron.

## Hallazgo SEO previo

`src/app/layout.tsx` hereda canonical de la homepage y aplica la plantilla `%s | JAAK`; varios artículos existentes no definen canonical propio y ya incluyen el sufijo en su título. Este borrador fija su canonical a `https://jaak.ai/blog/inteligencia-artificial-verificacion-identidad` y usa título absoluto. No se modificó el SEO global ni los otros artículos.

## Validación técnica del borrador

- `npm test`: 77 pruebas aprobadas en 10 archivos, incluidas nueve combinaciones del control de visibilidad.
- `npm run lint`: sin errores; permanecen dos advertencias previas en `src/app/webinar/page.tsx` y `src/components/HomepageAutoservicioCTA.tsx`.
- `npm run build` y `tsc --noEmit`: correctos. Contentlayer mantiene su advertencia previa sobre `baseUrl`, sin impedir generación ni compilación.
- El mismo build responde 200 con `VERCEL_ENV=preview` o el override local, y 404 sin preview. `VERCEL_ENV=production` devuelve 404 incluso con el override y no incluye el cuerpo del artículo.
- Chrome con Playwright: comprobado el texto completo contra el apartado 3, las dos tablas, cinco FAQ, fuentes, CTA, un único H1, metadatos, canonical y JSON-LD sin autor/fechas/imagen. El texto también aparece sin JavaScript.
- Escritorio de 1440 px y móviles de 390 y 320 px: el ancho de página coincide con el viewport; las tablas conservan su ancho de 640 px dentro de regiones con scroll horizontal y foco de teclado.
- Las dos rutas internas del cuerpo responden 200 en la revisión local. Listado del blog, homepage, sitemap y RSS excluyen el slug.
- Un artículo IA existente conserva su autor, fecha y CTA de plantilla. No se detectaron errores JavaScript del código local; las solicitudes de terceros se bloquearon durante la revisión para aislar el artículo.

Estas comprobaciones corresponden al código de la rama del PR y al servidor local del build, no a una publicación en producción. La aprobación editorial y los datos de publicación siguen pendientes.
