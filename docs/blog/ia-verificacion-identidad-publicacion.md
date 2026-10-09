# Revisión editorial: IA en la verificación de identidad

Estado: borrador. Ruta: `/blog/inteligencia-artificial-verificacion-identidad`.

## Revisión y vista previa

La ruta reutiliza `ArticleLayout` y contiene únicamente el apartado 3 del material suministrado. La portada proporcionada está autorizada, pero su archivo original aún no está disponible en el entorno. No se añade una imagen sustitutiva ni una URL de imagen inexistente. El título se muestra una sola vez en la plantilla. Autor confirmado por el usuario: JAAK (organización). Fecha de publicación indicada: 9 de octubre de 2025 (`2025-10-09`), configurada en la cabecera, Open Graph y Article. No se asigna fecha de modificación ni revisor individual. Las imágenes no disponibles todavía se omiten; las etiquetas se conservan como keywords, porque el inventario del blog no admite etiquetas.

El borrador responde 404 en el servidor de producción normal y en `VERCEL_ENV=production`. Es visible en desarrollo (`npm run dev`) y en Vercel Preview. La ruta es dinámica y evalúa la visibilidad por petición para evitar conservar el borrador en una página prerenderizada. Para revisión local con build de producción: `npm run build` y después `JAAK_BLOG_DRAFT_PREVIEW=true npm start`. La variable se aplica al arrancar el servidor; no habilita borradores en Vercel Production, ni sustituye la aprobación editorial.

El artículo no está en `blogPosts`, por lo que no se incluye en listado, relacionados, homepage, sitemap ni RSS. Lleva `noindex, nofollow` en preview.

## Antes de publicar

- El usuario confirmó el autor JAAK, la fecha 9 de octubre de 2025 y aprobó las validaciones editoriales indicadas. Se muestra la autoría institucional explícita, sin deducir una persona por categoría. No se inventa un nombre de revisor.
- Incorporar la portada JPG autorizada cuando el archivo original esté disponible en el entorno. El adjunto se ve en el chat, pero la ruta `/Users/marisolcruz/Downloads/Aplicaciones, riesgos y límites..jpg` pertenece al equipo del usuario y no existe en esta máquina; Canva sigue bloqueado por el proxy.
- Mantener el borrador hasta recibir instrucciones explícitas de publicación. Fecha de modificación solo cuando se confirme.
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
- Chrome con Playwright: comprobado el texto completo contra el apartado 3, las dos tablas, cinco FAQ, fuentes, CTA, un único H1, metadatos, canonical y JSON-LD. La revisión inicial no incluía autor, fechas ni imagen; ahora autor y fecha son datos confirmados, y la imagen permanece pendiente del archivo original. El texto también aparece sin JavaScript.
- Escritorio de 1440 px y móviles de 390 y 320 px: el ancho de página coincide con el viewport; las tablas conservan su ancho de 640 px dentro de regiones con scroll horizontal y foco de teclado.
- Las dos rutas internas del cuerpo responden 200 en la revisión local. Listado del blog, homepage, sitemap y RSS excluyen el slug.
- Un artículo IA existente conserva su autor, fecha y CTA de plantilla. No se detectaron errores JavaScript del código local; las solicitudes de terceros se bloquearon durante la revisión para aislar el artículo.

Estas comprobaciones corresponden al código de la rama del PR y al servidor local del build, no a una publicación en producción. El usuario aprobó las validaciones, el autor institucional y la fecha. Permanecen pendientes el archivo original de portada y una instrucción explícita para publicar.

## Datos editoriales confirmados

La revisión posterior de la cabecera y los metadatos confirma autor JAAK, fecha visible «9 de octubre, 2025», Open Graph `publishedTime: 2025-10-09` y Article con autor Organization y `datePublished: 2025-10-09`. No se asignan fecha de modificación, revisor, cargo ni biografía no proporcionados. Los artículos existentes mantienen su atribución.
