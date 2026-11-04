# AUD-02 — Homologación comercial de accesos Web, API, SDK y Sandbox

**Prioridad:** P0 · **Responsable:** Marketing · **Áreas:** Producto, Ingeniería y Web · **Aprobación:** Producto y Comercial · **Fecha objetivo:** 04/12/2026
**Rama:** `claude/compassionate-pascal-26uj4m` (reiniciada desde `main` tras el squash de AUD-01, PR #230) · **Fecha:** 2026-11-03
**Estado:** Implementado en el alcance web/comercial · **En validación** (no cerrado). La homologación contractual integral depende de la revisión legal de Términos y Condiciones, que **no se intervino**.

## A. Resumen ejecutivo

Contradicciones encontradas y resolución:

| # | Contradicción | Resolución |
|---|---|---|
| 1 | `/precios`: soporte descrito con términos genéricos ("Guiado", "Dedicado", "Comercial"); Crecimiento con "Web: Disponible" sin condicionar; sin una FAQ que aclare que Autoservicio no incluye API/SDK; metadatos con "Sin setup fee" sin acotar | Fila de soporte con copy aprobado, Web "según contratación", nueva FAQ (visible y JSON-LD), "Autoservicio sin setup fee" en meta/OG |
| 2 | `/documentacion`: sin aclaración comercial; "ambiente sandbox para pruebas", tarjeta "Sandbox" con "datos ficticios para desarrollar sin riesgo" y "10 minutos" | Bloque comercial nuevo + CTA a `/contacto`; tarjeta reescrita (sin beneficio automático, sin enlace) |
| 3 | `/validar-curp-renapo`: badge "SANDBOX", FAQ "¿Existe sandbox? Sí…", CTA "Solicitar acceso" → `/autoservicio` | Badge retirado, FAQ de evaluación con especialista, CTA "Solicitar integración" → `/contacto`, sección con setup fee |
| 4 | `/plataforma/verificacion-identidad`: "Integración lista en menos de una semana", sandbox "desde el primer día" y "pruebas con identidades reales" | Proceso de 4 etapas sin plazos, CTA "Solicitar evaluación de integración" → `/contacto` |
| 5 | Footer: enlace "Sandbox" (`platform.dev.jaak.ai/#/signup`) como opción de prueba abierta en Recursos | Retirado de la navegación comercial (URL y entorno intactos) |
| 6 | Mismo patrón en `/validar-ine` y `/consultas-oficiales` (badge/FAQ de sandbox) | Corregidos con la misma definición confirmada |

Sin cambios en precios, impuestos, descuentos, unidades, checkout, suscripciones, reembolsos, Términos, Autoservicio Enterprise, documentación profunda, endpoints, autenticación ni AUD-04.

## B. Matriz de cambios

| ID | URL | Sección | Texto anterior | Texto actualizado | Archivo | Motivo | Estado | Evidencia |
|---|---|---|---|---|---|---|---|---|
| AUD-02.1.1 | `/precios` | Tabla · Soporte | "Base" / "Guiado" / "Dedicado" / "Comercial" | Autoservicio: "Soporte básico · L–V, 9:00–18:00 h CDMX"; resto: "Soporte en español desde México, según contratación" | `PreciosClient.tsx`, `commercial-copy.ts` | Evitar soporte ilimitado/SLA implícito | Implementado | Render 375/1280; captura `m_prec3.png` |
| AUD-02.1.2 | `/precios` | Tabla · Web (Crecimiento) | "Disponible" | "Disponible según contratación" | `PreciosClient.tsx` | Alinear con la definición | Implementado | Render |
| AUD-02.1.3 | `/precios` | FAQ + JSON-LD FAQPage | (no existía) | "¿Puedo utilizar API o SDK al comprar un paquete de Autoservicio?" + respuesta aprobada | `PreciosClient.tsx`, `precios/page.tsx`, `commercial-copy.ts` | Aclarar permisos de Autoservicio | Implementado | JSON-LD válido, 8 preguntas, sin duplicados, respuesta visible = JSON-LD |
| AUD-02.1.4 | `/precios` | Meta description y OG | "…Sin setup fee." | "…Autoservicio sin setup fee." | `precios/page.tsx` | Evitar leer "sin setup fee" como válido para integraciones | Implementado | Render |
| AUD-02.2.1 | `/documentacion` | Hero | "Documentacion tecnica" + "Todo lo que necesitas para integrar…" | "Documentación para integraciones JAAK" + descripción + aviso de acceso sujeto a contratación + CTA "Consultar opciones de integración" → `/contacto` | `documentacion/page.tsx`, `commercial-copy.ts` | Disponibilidad pública ≠ permisos | Implementado | Captura `d_docs_hero.png`, CTA verificado |
| AUD-02.2.2 | `/documentacion` | API Reference | "…y ambiente sandbox para pruebas." | "…ejemplos de código para integrar los servicios contratados." | `documentacion/page.tsx` | Sin sandbox como beneficio | Implementado | Render |
| AUD-02.2.3 | `/documentacion` | Recursos · Sandbox | Tarjeta enlazada "Sandbox: Ambiente de pruebas con datos ficticios para desarrollar sin riesgo." | Tarjeta no enlazada "Ambientes de prueba": se habilitan según el tipo de integración y las condiciones acordadas | `documentacion/page.tsx`, `commercial-copy.ts` | Sin CTA ni beneficio automático | Implementado | Render |
| AUD-02.2.4 | `/documentacion` | Guía "Inicio rápido" (tarjeta) y CTA final | "…en menos de 10 minutos"; "Nuestro equipo de ingenieria esta disponible…" | "…con una integración habilitada"; "Nuestro equipo comercial y técnico puede ayudarte a evaluar tu integración." | `documentacion/page.tsx` | Sin tiempos ni disponibilidad no aprobados | Implementado | Render |
| AUD-02.2.5 | `/validar-curp-renapo` | Hero | Badges "API REST", "SANDBOX", … | "API REST", "RESULTADO ESTRUCTURADO", "INTEGRABLE A KYC" (el eyebrow ya dice "VALIDACIÓN CURP · RENAPO") | `CurpHero.tsx` | Sin sandbox automático | Implementado | Captura `d_curp_hero.png` |
| AUD-02.2.6 | `/validar-curp-renapo` | CTA hero y final | "Probar validación CURP" → `/autoservicio` | "Validar CURP en Autoservicio" → `/autoservicio` | `CurpHero.tsx`, `validar-curp-renapo/page.tsx` | "Probar" sugería prueba/API abierta; Autoservicio es Web | Implementado | CTA verificado |
| AUD-02.2.7 | `/validar-curp-renapo` | Sección de integración | "Diseñada para integrarse a tu operación" + chip "Sandbox" + "SOLICITAR ACCESO" → `/autoservicio` | "Integra la validación CURP a tu operación." + descripción con setup fee; chip "Habilitación conforme a la contratación"; "SOLICITAR INTEGRACIÓN" → `/contacto` | `CurpDevelopers.tsx`, `commercial-copy.ts` | Sin acceso automático | Implementado | Captura `d_curp3.png`, CTA verificado |
| AUD-02.2.8 | `/validar-curp-renapo` | FAQ + JSON-LD | "¿Existe sandbox? Sí, con cuotas independientes…"; "integrar-api" sin setup | "¿Puedo solicitar un ambiente de pruebas para integrar la validación CURP?" (respuesta aprobada); "integrar-api" + setup fee y habilitación | `curpFaq.ts` | Sin disponibilidad general | Implementado | JSON-LD válido |
| AUD-02.2.9 | `/plataforma/verificacion-identidad` | Bloque de integración | "Integración lista en menos de una semana." + Día 1–2 sandbox / Día 3–4 / Día 5 identidades reales / Semana 2 producción | "Integra JAAK de acuerdo con las necesidades de tu operación." + 4 etapas (Evaluación, Configuración y habilitación con setup fee, Implementación y pruebas, Puesta en operación) | `verificacion-identidad/page.tsx`, `commercial-copy.ts` | Sin plazos universales ni sandbox | Implementado | Capturas `m_kyc4.png`; texto verificado |
| AUD-02.2.10 | `/plataforma/verificacion-identidad` | CTA | "Ver documentación completa" | CTA principal "Solicitar evaluación de integración" → `/contacto`; se conserva el enlace a `/docs` | `verificacion-identidad/page.tsx` | CTA comercial correcto | Implementado | CTA verificado |
| AUD-02.2.11 | `/plataforma/verificacion-identidad` | Layout móvil | Columna ensanchada a 511 px por el mockup de código: texto cortado | `min-w-0` en las dos columnas (columna = 343 px) | `verificacion-identidad/page.tsx` | El texto nuevo se cortaba en móvil (defecto previo) | Implementado | Medición 511→343 px; captura `m_kyc4.png` |
| AUD-02.2.12 | Footer (global) | Recursos | Enlace "Sandbox" → `https://platform.dev.jaak.ai/#/signup` | Retirado de la navegación comercial | `Footer.tsx` | Aparecía como prueba abierta | Implementado | Render del footer |
| AUD-02.2.13 | `/validar-ine` | Hero y FAQ | Badge "SANDBOX"; "¿Existe sandbox? Sí…" | Badge retirado; FAQ de evaluación; "integrar-api" con setup fee | `IneHero.tsx`, `ineFaq.ts` | Misma contradicción, definición confirmada | Implementado | JSON-LD válido |
| AUD-02.2.14 | `/consultas-oficiales` | FAQ | "¿Existe un ambiente sandbox? Sí…"; API sin setup fee | FAQ de evaluación; API con setup fee (el uso web no requiere integración) | `consultasOficialesFaq.ts` | Misma contradicción | Implementado | JSON-LD válido |

Copy centralizado: `src/config/commercial-copy.ts` (`SOPORTE_COPY`, `FAQ_ACCESO_API_SDK`, `DOCS_INDEX_COPY`, `SANDBOX_COPY`, `CURP_INTEGRACION_COPY`, `KYC_INTEGRACION_COPY`).

**Decisiones de implementación a revisar:** (1) el chip "VALIDACIÓN CURP · API REST" no se duplicó porque el eyebrow del hero ya contiene "VALIDACIÓN CURP"; (2) el CTA "Probar validación CURP" se relabeló a "Validar CURP en Autoservicio" (la ruta no cambia); (3) la tarjeta de sandbox de `/documentacion` pasó de enlace muerto (`#`) a bloque informativo.

## C. Trazabilidad con AUD-01

| Tipo | Detalle |
|---|---|
| Reutilizado sin tocar | Filas Web/API/SDK/White Label y "Esquema de contratación" de `/precios`; FAQ del setup fee y de contratación; textos de Crecimiento/Enterprise/Alianzas; `commercial-copy.ts` (base de AUD-01); nota de `/autoservicio` y leyenda del resumen de compra; soporte básico de `/soporte/autoservicio`; JSON-LD global sin ofertas |
| Nuevo en AUD-02 | Todo lo de la matriz B (soporte en tabla, FAQ API/SDK, `/documentacion`, CURP, KYC, INE, Consultas Oficiales, footer) |
| Hallazgos que permanecen pendientes | Ver secciones D, E y H |
| No requería modificación | `/autoservicio-enterprise`, `/terminos`, checkout, catálogo y tarifas, documentación profunda |

## D. Pendientes de revisión legal — Términos y Condiciones

`/terminos` **no se modificó** (ni su componente, fechas, aceptaciones, reembolsos o checkout). Observaciones para una actividad independiente:

| # | URL | Sección | Texto identificado | Contradicción / hallazgo | Recomendación | Aprobación |
|---|---|---|---|---|---|---|
| T1 | `/terminos` | 2. Descripción de los servicios | "APIs y SDKs: Interfaces de programación para integración con sistemas de terceros." (listado como servicio que JAAK proporciona) | Se presenta como parte general de los servicios; contrasta con la definición vigente (Autoservicio exclusivamente Web; API/SDK por integración contratada con setup fee) | Distinguir modalidades Web/API/SDK y su contratación; mencionar que API/SDK no forman parte de Autoservicio estándar | Legal + Producto/Comercial |
| T2 | `/terminos` | Documento completo (sin sección específica) | Sin mención a ambientes de prueba/sandbox ni a credenciales | No define el carácter de los ambientes de prueba (evaluación con especialista, no automático) | Incluir cláusula de ambientes de prueba sujetos a acuerdo | Legal + Producto |
| T3 | `/terminos` | Sin sección específica | Sin condiciones del setup fee ni de la bolsa anual/pagos mensuales | Las condiciones económicas de integración no se reflejan | Remitir a la propuesta comercial o definir el concepto | Legal + Comercial |
| T4 | `/terminos` | Sin sección específica (solo "devolución" de información en retención de datos) | — | `/precios` indica vigencia de 12 meses y "No son reembolsables" para paquetes; los Términos no lo establecen | Alinear reembolsos y vigencia entre Términos, Precios y checkout | Legal + Comercial |
| T5 | `/terminos` | 6. Disponibilidad/niveles de servicio | "Los clientes empresariales pueden contar con acuerdos de nivel de servicio (SLA) específicos según su contrato comercial." | **Consistente** con "sin SLA universal" | Sin acción | — |
| T6 | `/terminos` | 2. Descripción de los servicios | "Firma electrónica: …simple y avanzada con validez legal conforme a la legislación mexicana." | Afirmación jurídica absoluta; en AUD-01 se evitó declarar efectos legales sin validación | Revisión jurídica del alcance de la afirmación | Legal |
| T7 | `/terminos` | Encabezado | "Última actualización: Abril 2026" | Anterior a los ajustes comerciales de AUD-01/AUD-02 | Definir versionado y fecha tras la revisión | Legal |

## E. Pendientes técnicos (Ingeniería / Privacidad)

1. Confirmar con Ingeniería la política real de credenciales y ambientes de prueba (permisos por tipo de cliente y paquete). No se alteró ningún entorno ni permiso.
2. Footer: el enlace retirado apuntaba a `https://platform.dev.jaak.ai/#/signup` (registro abierto en un entorno de desarrollo). Confirmar si ese registro público es intencional.
3. Confirmar con Ingeniería y Privacidad si los ambientes de prueba aceptan identidades reales; la afirmación se retiró del mensaje comercial y queda como **pendiente de revisión técnica** (no se afirma ni se niega).
4. Analítica: en `CurpDevelopers` el evento GTM `curp_autoservicio` (source `developers`) pasó a `curp_contacto`, con `destination: /contacto` y `data-cta="solicitar-integracion"`. Revisar disparadores de GTM atados al nombre anterior.
5. ~~`IntegrationAccessNotice` asociaba el sandbox a la cuota de configuración~~ → **Resuelto en la corrección final (sección J).**

## F. Pruebas (resultados reales)

| Prueba | Resultado |
|---|---|
| `tsc --noEmit` | Correcto |
| `npm run lint` | 0 errores; 2 advertencias que ya existían |
| `npm test` | 16 archivos, 136/136 |
| `npm run build` | Correcto |
| `git diff` en áreas prohibidas (`/terminos`, `/autoservicio-enterprise`, docs profundas, catálogo, `src/data`, `src/lib/catalog.ts`, `src/app/api`) | Vacío |
| Contenido esperado / retirado (render, 7 páginas) | Todo presente; ninguna cadena retirada reaparece ("SANDBOX", "¿Existe sandbox?", "SOLICITAR ACCESO", "menos de una semana", "Día 1–2", "identidades reales", "Guiado", "Dedicado"…) |
| JSON-LD | Válido en las 7 páginas; sin `Offer` salvo `/precios` (catálogo visible, sin cambios); FAQPage de `/precios` coherente con la respuesta visible, sin preguntas duplicadas |
| CTA | `/documentacion` → `/contacto`; CURP "Solicitar integración" → `/contacto`; CURP hero → `/autoservicio`; KYC → `/contacto` |
| Footer | Sin "Sandbox"; se conservan "API & SDKs", "Documentación", "API Reference", "Status" |
| Responsive 375 / 768 / 1280 px | `scrollWidth` igual al ancho del viewport en `/precios`, `/documentacion`, `/validar-curp-renapo` y `/plataforma/verificacion-identidad` |
| QA visual (navegador de escritorio emulado) | Revisadas: hero de `/documentacion` (1280), hero y sección de integración de CURP (1280), bloque KYC (375), tabla de Precios (375). No se revisó cada sección de cada página |
| Limitaciones | Sin dispositivo físico; no se verificó contra GTM ni producción; la FAQ de `/precios` se comprobó en HTML/JSON-LD, no con captura |

## G. Evidencias

Capturas generadas en la sesión (no versionadas en el repositorio), en `/tmp/claude-0/-home-user-jaak-web/2a998c70-c810-5be4-af10-3dbd491f0779/scratchpad/aud02/`: `d_docs_hero.png`, `d_curp_hero.png`, `d_curp3.png`, `m_curp2.png`, `m_kyc4.png`, `m_prec3.png`, `d_docs_recursos`/`d_docs3`. Los registros de validación están en la sección F. Reproducción: `npm run build`, `npx next start` y abrir las rutas listadas.

## H. Revisión transversal (Fase 7) — clasificación de coincidencias

A = correcta · B = corregida en AUD-02 · C = pendiente comercial · D = pendiente legal · E = fuera de alcance

| Cl. | Ubicación | Coincidencia | Nota |
|---|---|---|---|
| B | `Footer.tsx` | Enlace "Sandbox" | Retirado |
| B | `/validar-curp-renapo`, `/validar-ine`, `/consultas-oficiales` | Badge/FAQ de sandbox | Corregidos |
| B | `/plataforma/verificacion-identidad` | "menos de una semana", sandbox, identidades reales | Reemplazado |
| B | `/documentacion` | "ambiente sandbox para pruebas", tarjeta Sandbox | Corregido |
| C | `/inmobiliarias` | "integrar KYC y firma electrónica … en menos de una semana" | Plazo no aprobado; proponer "según el alcance de tu proyecto" |
| C | `/financieras` | "KYC que se integra en horas"; tile "Horas — Tiempo de integración" | Plazo no aprobado |
| C | `Hero.tsx`, `Integration.tsx`, `Implementation.tsx` | "lista para producción en días", "Integración en días, no meses", "Producción en días, no meses" | Plazos universales en la home |
| C | `/contacto`, `FirmaThemeShell.tsx`, `/efisys-lab-connect`, `/webinar` | "Integración en días", "implementar en días", "integran vía API en días" | Plazos no aprobados |
| C | `/firma-electronica-simple` | "implementación en minutos" | Plazo no aprobado |
| B | `commercial-copy.ts` (`INTEGRACION_COPY`) y aviso de docs | Sandbox "requiere … cuota de configuración adicional" | Corregido en la corrección final (sección J) |
| D | `/terminos` | Ver sección D | Sin intervención |
| E | `/documentacion/guias/inicio-rapido`, `/documentacion/guias/flujo-onboarding`, `/docs/**` | Referencias a sandbox y credenciales | Documentación profunda/guías legacy |
| E | `/autoservicio/prueba` | "activación automática", "acceso inmediato en producción" | AUD-04 |
| E | `/autoservicio-enterprise` | Sin cambios | Paquetes inactivos |
| A | `/chronos/**` | "sandbox" (comparación de productos de terceros) | Otro contexto |
| A | `/webinar` | "Acceso inmediato" | Grabación del webinar, no integración |

Los plazos marcados C no son afirmaciones de permisos de acceso y no existe un texto sustituto aprobado, por lo que no se modificaron.

## I. Resumen para el Excel de seguimiento

| ID | Actividad | URL | Responsable | Prioridad | Estado | Descripción del cambio | Evidencia | Pendientes | Aprobación requerida |
|---|---|---|---|---|---|---|---|---|---|
| AUD-02.1 | Precios: soporte, FAQ API/SDK y meta | `/precios` | Marketing | P0 | Implementado (en validación) | Fila de soporte con copy aprobado; Web "según contratación"; FAQ visible y JSON-LD; meta "Autoservicio sin setup fee" | Matriz B (.1.1–.1.4); JSON-LD válido; captura móvil | Textos de soporte (C) | Producto y Comercial |
| AUD-02.2 | Documentación comercial: índice | `/documentacion` | Marketing | P0 | Implementado (en validación) | Bloque comercial, CTA a `/contacto`, sandbox sin beneficio automático | Matriz B (.2.1–.2.4); captura hero | Guías legacy fuera de alcance | Producto y Comercial |
| AUD-02.2 | CURP (y páginas hermanas INE y Consultas Oficiales) | `/validar-curp-renapo`, `/validar-ine`, `/consultas-oficiales` | Marketing | P0 | Implementado (en validación) | Sin sandbox automático; setup fee y habilitación; CTA a `/contacto` | Matriz B (.2.5–.2.8, .2.13–.2.14) | GTM: evento renombrado; Ingeniería (credenciales/sandbox) | Producto, Comercial e Ingeniería |
| AUD-02.2 | KYC: proceso de integración | `/plataforma/verificacion-identidad` | Marketing | P0 | Implementado (en validación) | 4 etapas sin plazos; CTA "Solicitar evaluación de integración"; corrección de recorte móvil | Matriz B (.2.9–.2.11); captura móvil | "Identidades reales en pruebas": Ingeniería y Privacidad | Producto, Comercial e Ingeniería |
| AUD-02.2 | Navegación comercial | Footer global | Marketing | P0 | Implementado (en validación) | Retirado el enlace "Sandbox" | Matriz B (.2.12) | Confirmar signup de dev público | Producto e Ingeniería |
| AUD-02.L | Términos y Condiciones | `/terminos` | Legal | P0 | Pendiente legal, **sin intervención** | 7 observaciones registradas (sección D) | Sección D | Revisión contractual independiente | Legal, Producto y Comercial |
| AUD-02 | Agrupador | — | Marketing | P0 | **En validación** (no cerrado) | Alcance web/comercial implementado y probado | Este reporte | AUD-02.L, plazos C, GTM, QA en dispositivos reales, publicación | Producto, Comercial y Legal |

**Estado de AUD-02:** implementado en su alcance web/comercial y validado técnicamente; preparado para revisión y publicación. No se declara cerrado mientras la revisión de Términos y las aprobaciones sigan abiertas. No se realizó despliegue.


---

## J. Corrección final de avisos comerciales y validación de seguimiento (2026-11-03)

### J.1 Aviso comercial de documentación (único cambio de contenido)
Componente compartido: `src/components/docs/IntegrationAccessNotice.tsx`, con textos en `INTEGRACION_COPY` (`src/config/commercial-copy.ts`). Se muestra en las páginas introductorias de `/docs` (variante *intro*) y, con la variante *requisito*, en pasos que piden credenciales.

| Elemento | Anterior | Nuevo |
|---|---|---|
| Título (*intro*) | "Documentación para integraciones JAAK" | "Acceso a integraciones y ambientes de prueba" |
| Descripción (*intro*) | "Consulta nuestros recursos técnicos de API, SDK y webhooks. El acceso operativo a API y al ambiente sandbox requiere contratación y habilitación técnica mediante una cuota de configuración adicional. Los paquetes de Autoservicio están destinados exclusivamente al uso desde la plataforma web de JAAK." | Cuatro párrafos: (1) "La documentación técnica de JAAK está disponible como referencia para proyectos de integración." (2) "El acceso a API y SDK requiere habilitación conforme a las condiciones contratadas, incluyendo la cuota de configuración aplicable." (3) "La disponibilidad de ambientes de prueba se evalúa con un especialista comercial de JAAK, de acuerdo con el tipo de cliente, paquete y necesidades del proyecto." (4) "Los paquetes estándar de Autoservicio son exclusivamente Web y no incluyen acceso automático a API, SDK o sandbox." |
| Variante *requisito* ("Requisito previo… credenciales API") y CTA "Solicitar información de integración" | — | Sin cambios (ya coherentes) |

El componente pasó de un párrafo a renderizar los cuatro párrafos (`docsDescripcion` es ahora una lista). No se modificaron endpoints, documentación funcional, SDK, ejemplos de código, autenticación, infraestructura ni los MDX/páginas de docs. Verificado en render: `/docs`, `/docs/verificar-identidad/api` y `/docs/recursos/sandbox` (*intro*); `/docs/firmar-documentos/guia-rapida` y `/documentacion/guias/inicio-rapido` (*requisito*, sin cambios).

### J.2 Consistencia entre páginas intervenidas (sin cambios innecesarios)
Se revisaron `/precios`, `/documentacion`, `/validar-curp-renapo`, `/validar-ine`, `/consultas-oficiales`, `/plataforma/verificacion-identidad` y las páginas de docs con aviso. Resultado (render): ninguna cadena prohibida ("SANDBOX", "¿Existe sandbox?", "menos de una semana", "Sandbox disponible", "credenciales de prueba", "identidades reales", "acceso inmediato a sandbox"); presentes las frases esperadas. Autoservicio sigue siendo exclusivamente Web; API y SDK se comunican sujetos a contratación y setup fee; White Label como personalización según acuerdo; sandbox solo por evaluación con especialista. **No se modificó ninguna otra página.**

### J.3 GTM — eventos de CURP (validación en código y en navegador)
Eventos observados al hacer clic (navegador, `dataLayer` simulado):

| CTA | Destino | Evento | Parámetros | `data-cta` / `data-source` |
|---|---|---|---|---|
| Hero · "Validar CURP en Autoservicio" (compra Web) | `/autoservicio` | `curp_hero_probar` | source `hero`, destination `autoservicio` | `probar-curp` / `hero` |
| Integración · "SOLICITAR INTEGRACIÓN" (comercial) | `/contacto` | **`curp_contacto`** | source `developers`, destination `/contacto`, page_path | `solicitar-integracion` / `curp_developers` |
| Integración · "Validar CURP en Autoservicio" (compra Web, enlace nuevo) | `/autoservicio` | **`curp_autoservicio`** | source `developers`, destination `/autoservicio`, page_path | `comprar-web-autoservicio` / `curp_developers` |
| CTA final · "Validar CURP en Autoservicio" | `/autoservicio` | (sin `gtmEvent`) | — | `probar-curp` / `cta_final` |
| CTA final · "Hablar con un especialista" | `/contacto` | (sin `gtmEvent`) | — | `curp_contacto` / `cta_final` |

Hallazgo y ajuste: tras AUD-02, `curp_autoservicio` ya no lo emitía ningún CTA (solo lo emitía el botón "Solicitar acceso" que pasó a ser comercial), por lo que el evento histórico habría dejado de generarse. Se añadió un enlace discreto de compra Web ("¿Prefieres usar la validación desde la plataforma web? Validar CURP en Autoservicio") que lo conserva con su identificación independiente de `curp_contacto`. No se eliminó ningún evento ni se tocó el contenedor GTM.
Notas: los CTA del bloque final solo llevan atributos `data-*` (no emiten `gtmEvent`); si GTM los captura por clic con esos atributos, depende del contenedor. El `data-cta` del botón comercial cambió de `solicitar-acceso` a `solicitar-integracion` (AUD-02).
**Pendiente (externo):** verificar en GTM Preview / Tag Assistant la recepción de `curp_contacto`, `curp_autoservicio` y `curp_hero_probar`, y que no existan disparadores atados a `data-cta="solicitar-acceso"`. No se ejecutó (sin acceso al contenedor; además, `gtmEvent` solo escribe si `NEXT_PUBLIC_GTM_ID` está definido en el entorno).

### J.4 Sandbox y entorno `platform.dev.jaak.ai`
No se modificó el entorno ni ningún acceso. El enlace retirado del footer era solo un cambio de navegación comercial y **no equivale a restringir el acceso**: el registro seguía existiendo en `https://platform.dev.jaak.ai/#/signup`.
**Pendiente de Ingeniería:** validar si el registro público de ese entorno es intencional y cuáles son los permisos reales de las cuentas creadas.
**Pendiente de Ingeniería y Privacidad:** confirmar si los ambientes de prueba aceptan identidades reales (afirmación retirada del mensaje comercial).

### J.5 Términos y Condiciones
Sin cambios en `/terminos` ni en textos contractuales. Se conservan las siete observaciones de la sección D (T1–T7) para la actividad independiente.

### J.6 Archivos
Modificados en esta ronda: `src/components/docs/IntegrationAccessNotice.tsx`, `src/config/commercial-copy.ts` (`INTEGRACION_COPY`), `src/components/CurpDevelopers.tsx` y este reporte. Revisados sin cambios: páginas listadas en J.2, `CurpHero.tsx`, `validar-curp-renapo/page.tsx`, `GoogleTagManager.tsx`, `/terminos`.

### J.7 QA
| Prueba | Resultado |
|---|---|
| `tsc --noEmit` | Correcto |
| `npm run lint` | 0 errores; 2 advertencias que ya existían |
| `npm test` | 16 archivos, 136/136 |
| `npm run build` | Correcto |
| `git diff` en áreas prohibidas (Términos, Autoservicio Enterprise, MDX/páginas de docs, catálogo, API) | Vacío |
| Aviso en 5 páginas de documentación | Texto nuevo en las de variante *intro*; variante *requisito* sin cambios |
| Eventos CURP | Ver J.3 |
| Responsive 375 / 768 / 1280 px (`/docs`, `/documentacion`, `/validar-curp-renapo`, `/plataforma/verificacion-identidad`, `/precios`) | `scrollWidth` igual al ancho del viewport en todos |
| QA visual (navegador de escritorio emulado) | Aviso en móvil (375 px) y sección de integración de CURP en escritorio (1280 px). No se revisó cada página completa |
| Limitaciones | Sin dispositivo físico; GTM no verificado contra el contenedor |
Evidencias (sesión, no versionadas): `/tmp/claude-0/-home-user-jaak-web/2a998c70-c810-5be4-af10-3dbd491f0779/scratchpad/aud02b/` (`m_aviso.png`, `d_aviso.png`, `m_curp_dev.png`, `d_curp_dev.png`); registros de eventos y consistencia en J.2 y J.3.

### J.8 Estado de publicación
Implementado en el alcance editorial y comercial; **sin desplegar**. AUD-02 permanece **En validación**: pendientes de aprobación de Producto y Comercial, revisión legal de Términos (AUD-02.L), verificación en GTM Preview, validaciones de Ingeniería y Privacidad (sandbox, registro público y permisos), plazos de integración sin copy aprobado (sección H, clase C) y QA en dispositivos reales.
