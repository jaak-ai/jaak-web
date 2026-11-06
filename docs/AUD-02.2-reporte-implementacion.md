# AUD-02.2 — Reporte de implementación

**Actividad:** Documentación y Términos: vincular recursos API/SDK/sandbox con los derechos contratados · **Prioridad:** P0 · **Fecha compromiso:** 04/12/2026
**Responsable:** Ingeniería / Web · **Participantes:** Marketing, Legal / Compliance · **Aprobación:** Producto; Legal para lo contractual
**Rama:** `claude/compassionate-pascal-26uj4m` (rehecha desde `main` en `5322f6e`, con AUD-01, AUD-02 y AUD-02.1 ya publicados) · **Fecha:** 06/11/2026

## 1. Resumen ejecutivo

Se corrigieron en el sitio las dos inconsistencias comerciales de Precios (White Label y setup fee en Autoservicio), se alinearon los textos relacionados y se reforzó el aviso compartido de documentación para indicar que su consulta pública no otorga credenciales ni derechos. No se modificó contenido funcional de la documentación técnica, endpoints, permisos ni `/terminos`. Se preparó una propuesta de Términos para Legal (`docs/AUD-02.2-propuesta-terminos-legal.md`) y un hallazgo para Ingeniería sobre el enlace de registro a un ambiente de desarrollo. **Nada está publicado.** AUD-02.2 no se declara completada: requiere aprobación de Legal y confirmación de publicación.

**Cambio de criterio respecto de AUD-02.1.** Esta instrucción reemplaza dos decisiones comunicadas antes para Autoservicio: «White Label incluido solo en web» pasa a **no incluido**, y «setup fee opcional» pasa a **no aplica al paquete Web; API/SDK requieren contratación adicional con setup fee**. Los textos de AUD-02.1 se ajustaron en consecuencia. El reporte `AUD-02.1-reporte-implementacion` y las condiciones de Autoservicio (cl. 2.1, 5.2) reflejan el criterio anterior y deben alinearse (ver sección 8).

## 2. Hallazgos comprobados

| # | Hallazgo | Estado |
|---|---|---|
| H1 | Comparativa de Precios: fila White Label de Autoservicio decía «Incluido, solo en la plataforma Web», y la tarjeta decía que lo incluía. | Corregido |
| H2 | Fila «Setup fee (integración API/SDK)»: «Opcional, si deseas integrar» sugería que una compra estándar permitía añadir integración directamente. También en la nota, FAQ y JSON-LD. | Corregido |
| H3 | `/comprar` y la tarjeta de Firma Simple en el catálogo de Autoservicio hablaban de marca blanca. | Corregido |
| H4 | Aviso de documentación: no decía de forma explícita que la consulta pública no otorga credenciales. | Corregido |
| H5 | `/documentacion` ya era consistente (AUD-02): disponible para consulta, API/SDK por contratación, credenciales según acuerdo, pruebas evaluadas individualmente, Autoservicio solo Web. | Sin cambios |
| H6 | `/terminos` enumera «APIs y SDKs» como servicio general y exige «contrato vigente» a toda empresa. | Propuesta para Legal |
| H7 | Guía de inicio rápido enlaza a un registro en entorno de desarrollo y dice que se puede generar API Key «sandbox o producción». | Hallazgo para Ingeniería (sección 9) |
| H8 | El checkout de Autoservicio es un flujo externo; su mecanismo de aceptación no es verificable desde el repositorio. | Pendiente de confirmar |

## 3. Correcciones implementadas y textos

| Ubicación | Texto anterior | Texto nuevo |
|---|---|---|
| `/precios` comparativa, White Label, Autoservicio (escritorio y móvil) | «Incluido, solo en la plataforma Web» | «No incluido» |
| `/precios` tarjeta Autoservicio | «Uso exclusivo en la plataforma web, con marca blanca (White Label). No incluye API ni SDK» | «Uso exclusivo en la plataforma web. No incluye API, SDK ni White Label» |
| `/precios` fila Setup fee, Autoservicio | «Opcional, si deseas integrar» | «No aplica al paquete Web; API/SDK requieren contratación adicional con setup fee» |
| `/precios` nota bajo la tabla | «En Autoservicio el setup fee es opcional, si deseas integrar. …» | «El setup fee no aplica al paquete Web de Autoservicio: para integrar mediante API o SDK se requiere una contratación adicional con setup fee. …» (el resto, incluido sandbox, sin cambios) |
| FAQ «¿Hay cuota de configuración?» (visible y JSON-LD) | «En Autoservicio es opcional, si deseas integrar por API o SDK. …» | «No aplica al paquete Web de Autoservicio: para integrar mediante API o SDK se requiere una contratación adicional con setup fee. …» |
| FAQ «¿Puedo utilizar API o SDK al comprar un paquete de Autoservicio?» | «… el setup fee es opcional en Autoservicio y no incluye acompañamiento técnico; …» | «… Para integrar mediante API o SDK se requiere una contratación adicional con setup fee, conforme al alcance que acuerdes con nuestro equipo comercial.» |
| Nota de `/autoservicio` (`notaCatalogo`) | «… con marca blanca (White Label) en la plataforma. … el setup fee es opcional …» | «Autoservicio se utiliza exclusivamente desde la plataforma web. No incluye API, SDK ni White Label. Para integrar … se requiere una contratación adicional con setup fee …» |
| `/comprar`, tarjeta Autoservicio | «Con marca blanca (White Label) en la plataforma web; no incluye API ni SDK» | «No incluye API, SDK ni White Label» |
| Catálogo Autoservicio, Firma Simple | «Disponible en minutos en web con marca blanca» | «Disponible en minutos desde la plataforma web» |
| Aviso de documentación (`INTEGRACION_COPY.docsDescripcion`, primer párrafo) | «La documentación técnica de JAAK está disponible como referencia para proyectos de integración.» | «… disponible para consulta como referencia en proyectos de integración. Su consulta pública no otorga credenciales ni derechos de acceso.» |

No se tocaron tarifas, impuestos, consumos, lógica de compra ni contratos. El setup fee no es un producto seleccionable.

## 4. Archivos modificados

`src/config/commercial-copy.ts` · `src/app/precios/PreciosClient.tsx` · `src/app/comprar/page.tsx` · `src/data/autoservicio-catalogo.ts` · `docs/AUD-02.2-propuesta-terminos-legal.md` (nuevo) · `docs/AUD-02.2-reporte-implementacion.md` (nuevo).
Sin cambios: `/terminos`, contenido de `/docs`, API Reference, documentación legacy, endpoints, checkout.

## 5. Correcciones heredadas conservadas

AUD-01 (home sin promesa de credenciales API en Autoservicio), AUD-02 (avisos compartidos, sandbox evaluado por especialista, CURP/KYC, navegación) y AUD-02.1 (fila y nota de setup, FAQ de sandbox y vigencia, JSON-LD sin política de devoluciones, soporte de Autoservicio con datos de identificación). Verificado por búsqueda de texto y por render.

## 6. Revisión de documentación (`/documentacion`, `/docs`)

`/documentacion`: sin cambios. `/docs`: el aviso comercial compartido se conservó y se reforzó con una frase (una sola fuente, `commercial-copy.ts`); no se duplicó. Se comprobó que no hay textos que prometan sandbox inmediato o gratuito. No se tocaron endpoints, API Keys, autenticación, ejemplos, SDK, webhooks ni permisos.

## 7. Propuesta contractual

`docs/AUD-02.2-propuesta-terminos-legal.md`, etiquetada «BORRADOR INTERNO — NO PUBLICAR — PENDIENTE DE APROBACIÓN LEGAL». Cubre secciones 1, 2 y 3, la subsección nueva «Modalidades de acceso y habilitación», tres alternativas de jerarquía documental, pendientes legales (L1–L9) y decisiones para Producto, Comercial, Legal e Ingeniería. No se modificó `/terminos` ni su fecha («Abril 2026»).

## 8. Decisiones pendientes de Legal / Producto

1. Aprobar la redacción de secciones 1–3 y de la subsección nueva; elegir alternativa de aceptación y de jerarquía.
2. Alinear las condiciones de Autoservicio con el criterio vigente: setup fee (cl. 5.2 y 2.1), canal de soporte (cl. 6.4), vigencia.
3. Reembolsos: permanecen en su actividad independiente; la letra pequeña de `/precios` los remite a las condiciones de Autoservicio.
4. Producto: confirmar la definición de Autoservicio Enterprise y su reflejo público.
5. Actualizar `AUD-02.1-reporte-implementacion` si se desea que refleje el criterio nuevo.

## 9. Validaciones pendientes de Ingeniería: registro en ambiente de desarrollo

- **Ubicación:** `src/app/documentacion/guias/inicio-rapido/page.tsx`, paso 1: «Regístrate en `https://platform.dev.jaak.ai/#/signup`» (texto del enlace: «platform.jaak.ai»). El paso 3 indica «Genera un nuevo API Key para tu ambiente (sandbox o producción)». La URL también está en `src/lib/docs/config.ts` y en algunas páginas de soluciones/financieras.
- **Contexto:** la página muestra antes el aviso de requisito previo (credenciales requieren integración habilitada). El texto de la guía, sin embargo, sugiere autoservicio de credenciales.
- **No se verificó nada** mediante registros, cuentas ni llamadas API. Preguntas para Ingeniería:
  1. ¿El registro público en `platform.dev` es intencional?
  2. ¿Una cuenta nueva puede generar API Keys? ¿Para qué ambiente?
  3. ¿Se habilitan servicios (KYC, firma, etc.) automáticamente o con aprobación?
  4. ¿Qué validaciones aplican (correo, empresa, aprobación comercial)?
  5. ¿Qué controles de autorización limitan datos y consumo? ¿Se usan identidades reales en ese entorno?
  6. Si el registro no debe ser público: ¿se retira el enlace o se aclara su alcance? (Cambio no realizado.)
- Observación de texto: el texto visible del enlace («platform.jaak.ai») no coincide con la URL real (dev).

## 10. Resultados de pruebas

| Prueba | Resultado |
|---|---|
| Typecheck (`tsc --noEmit`) | Correcto |
| Lint | 0 errores, 2 advertencias preexistentes |
| Tests (Vitest) | 153 de 153 |
| Build de producción | Correcto |
| Render (servidor de producción local) de `/precios`, `/documentacion`, `/documentacion/guias/inicio-rapido`, `/docs`, `/comprar`, `/autoservicio` | HTTP 200 |
| Textos retirados («Incluido, solo en la plataforma», «Opcional, si deseas») | No aparecen en ninguna de las rutas |
| Comparativa de Precios, White Label «No incluido» y setup diferenciado | Verificado en escritorio (1280) y móvil (375) con captura |
| Desbordamiento horizontal a 375, 768 y 1280 px en las 6 rutas | Ninguno |
| JSON-LD de `/precios` | 11 bloques válidos, sin política de devoluciones, FAQ con la redacción nueva |
| Aviso de documentación | Presente en `/docs` con la frase nueva; en inicio rápido se muestra el aviso de «Requisito previo» |

**No ejecutado / limitaciones:** verificación en producción (el entorno no accede a jaak.ai), dispositivos físicos, checkout externo, registro en `platform.dev`. Las capturas se tomaron con una versión local y el efecto de aparición forzado a visible.

## 11. Evidencias

Capturas locales de la comparativa a 375 y 1280 px; salida de pruebas; búsqueda de texto en el repositorio; el commit de esta rama.

## 12. Estado de publicación

**No publicado.** Cambios en la rama `claude/compassionate-pascal-26uj4m`, sin PR ni despliegue. `/terminos` no se actualizó. AUD-02.2 **no está completada**: falta aprobación de Legal, de Producto y confirmación de publicación.

## Matriz para el Plan Global

| ID | URL | Hallazgo | Acción | Responsable | Estado | Evidencia | Aprobación pendiente |
|---|---|---|---|---|---|---|---|
| AUD-02.2-a | /precios | White Label «Incluido, solo en Web» en Autoservicio | Cambiar a «No incluido» (tabla, tarjeta, /comprar, catálogo) | Ingeniería / Web | Implementado en rama; sin publicar | Este reporte, §3 | Producto |
| AUD-02.2-b | /precios | Setup fee «Opcional» en Autoservicio | «No aplica al paquete Web; API/SDK requieren contratación adicional con setup fee» (fila, nota, FAQ, JSON-LD) | Ingeniería / Web | Implementado en rama; sin publicar | Este reporte, §3 | Producto, Comercial |
| AUD-02.2-c | /docs, /documentacion | Aviso sin frase de que consulta pública no otorga derechos | Frase añadida al aviso compartido | Ingeniería / Web | Implementado en rama; sin publicar | Este reporte, §6 | Producto |
| AUD-02.2-d | /terminos | «APIs y SDKs» como servicio general; sin modalidades ni jerarquía | Propuesta de redacción | Legal / Ingeniería | Borrador preparado; no publicado | docs/AUD-02.2-propuesta-terminos-legal.md | Producto y Legal |
| AUD-02.2-e | /documentacion/guias/inicio-rapido | Registro en platform.dev y API Key «sandbox o producción» | Hallazgo para Ingeniería | Ingeniería | Pendiente de validación | Este reporte, §9 | Ingeniería, Producto |
| AUD-02.2-f | Checkout de Autoservicio | Mecanismo de aceptación no verificado | Confirmar y documentar | Producto / Ingeniería | Pendiente | Propuesta, §0 | Legal |
