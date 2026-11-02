# AUD-01 — Reporte de implementación

**Actividad:** Corrección integral de comunicación Autoservicio vs. API/sandbox · **Prioridad:** P0 · **Fecha:** 2026-11-02 · **Rama:** `claude/compassionate-pascal-26uj4m`
**Estado general: En validación** (hasta aprobación de Producto y Comercial, QA completo y confirmación de publicación).

## 1. Problema
La home y otras páginas comunicaban que comprar Autoservicio daba "Credenciales API en minutos", activación inmediata y soporte técnico. Regla comercial vigente: **Autoservicio es exclusivamente web; API y sandbox requieren setup adicional.**

## 2. Alcance
Solo copy/presentación. No se tocaron precios, pagos, checkout, formularios/CRM, endpoints, ejemplos de código, URLs, canonicals, sitemap ni robots. No se publicó a producción.

## 3. Fuente única de copy
`src/config/commercial-copy.ts` (constantes `AUTOSERVICIO_COPY`, `INTEGRACION_COPY`, rutas). Ruta comercial reutilizada para solicitar integración: `/contacto` (existente; no se crearon rutas). No se declara importe, plazo ni SLA del setup.

## 4. Matriz de cambios
| ID | URL | Sección | Cambio aplicado | Archivo | Estado | Evidencia |
|---|---|---|---|---|---|---|
| AUD-01.2 | `/` | "Dos formas de comenzar" · tarjeta Autoservicio | Título "Comienza con JAAK Autoservicio", nueva descripción, 3 beneficios (sin "Credenciales API en minutos"), aclaración API/sandbox/setup, CTA "Explorar Autoservicio" → `/autoservicio`, CTA secundario "Solicitar integración API" → `/contacto` | `src/components/HomepageFinalCTA.tsx` | Implementado | Build OK |
| AUD-01.3 | `/` | "Flexibles, modulares…" | Título "…adaptados a tu operación." + descripción y distinción Autoservicio / Integración API; leyenda inferior homologada. Tarjetas y enlaces intactos | `src/components/HomepageProducts.tsx` | Implementado | Build OK |
| AUD-01.4 | `/` | "Cómpralo tú mismo y actívalo en minutos" | "Compra en línea y opera desde la plataforma web.", descripción nueva, CTAs "Comprar en Autoservicio" → `/autoservicio` y "Conocer opciones de integración" → `/contacto` (antes `/precios`). Retirada promesa de activación inmediata | `src/components/HomepageAutoservicioCTA.tsx` | Implementado | Build OK |
| AUD-01.5 | `/precios` | Tarjetas y tabla | Autoservicio: "no incluye API, SDK ni sandbox", vigencia 1 año, soporte básico, sin "actívalo en minutos". Crecimiento: copy aprobado + setup fee + CTA "Solicitar propuesta de Crecimiento". Tabla: fila "API / SDK / Sandbox" → Autoservicio "No incluido. Modalidad exclusivamente web."; Crecimiento "Disponible con setup adicional" | `src/app/precios/PreciosClient.tsx` | Implementado (ver §7) | Build OK |
| AUD-01.6 | `/autoservicio` | Hero previo al catálogo | Título/descripción aprobados, nota informativa (visible, sin modal) con enlace a `/contacto`; metadatos (title, description, OG, Twitter) sin "al instante/en minutos"; pill "Activación inmediata" → "Uso desde la plataforma web". Catálogo, filtros y tarifas sin cambios | `src/app/autoservicio/page.tsx` | Implementado | Build OK |
| AUD-01.6b | `/autoservicio` | Resumen de compra | Leyenda: "Uso desde la plataforma web · No incluye API ni sandbox" (solo texto). Sin tocar pagos | `src/components/autoservicio/CarritoAutoservicio.tsx` | Implementado | Build OK |
| AUD-01.7 | `/comprar` | Tarjetas y metadatos | Autoservicio: web exclusiva, sin API/sandbox, integración por contratación adicional. "A la medida": evaluación API/sandbox, setup adicional, acompañamiento conforme a propuesta. Se retiró "Activación inmediata" y "empieza en minutos". CTAs/enlaces intactos | `src/app/comprar/page.tsx` | Implementado | Build OK |
| AUD-01.8 | `/kyc-demo-autoservicio` | Bloque de prueba, FAQ y JSON-LD FAQ | Copy aprobado de escalamiento; FAQs "¿Necesito API?" y "¿Escalar?" aclaran no-inclusión y setup. Precio $99, formulario y CRM sin cambios | `LandingClient.tsx`, `layout.tsx` | Implementado (parcial, ver §7) | Build OK |
| AUD-01.9 | `/docs/*` (activo) | Intros y pasos con credenciales | Nuevo `IntegrationAccessNotice`: aclaración en `/docs`, `jaak/inicio-sesion`, `consultas-oficiales`, `verificar-identidad/api`, `firmar-documentos`, `recursos/sandbox`; "Requisito previo" en `paso-1-crear-sesion`, `firmar-documentos/guia-rapida`, `firmar-documentos/api/autenticacion`. MDX, endpoints y URLs sin cambios | `src/components/docs/IntegrationAccessNotice.tsx`, `src/app/docs/[[...slug]]/page.tsx` | Implementado | Build OK |
| AUD-01.10 | `/documentacion/guias/inicio-rapido` (legacy) | Antes del paso 1 | Requisito previo; metadata sin "menos de 10 minutos" | `src/app/documentacion/guias/inicio-rapido/page.tsx` | Implementado | Build OK |

## 5. Pruebas ejecutadas
| Prueba | Resultado |
|---|---|
| `npm ci` | OK |
| `npm run lint` | 0 errores; 2 warnings preexistentes (`webinar/page.tsx` Link; `HomepageAutoservicioCTA.tsx` TEAL) |
| `npm test` | 16 archivos / 136 tests OK |
| `npm run build` | OK |
| Búsqueda global de frases prohibidas (`credenciales api en minutos`, `api en minutos`, `actívalo en minutos`, `cómpralo tú mismo`, `disponibles hoy`, `setup gratuito`, `sandbox incluido`…) | 0 coincidencias |
| Verificación visual móvil/escritorio | **No ejecutada** (ver §9) |

## 6. Clasificación de coincidencias restantes
- **Corregidas:** ver matriz.
- **Válidas en contexto de integración:** menciones de API/sandbox/SDK/webhooks en `content/docs/**`, `src/app/documentacion/**`, páginas de producto, `/api/*`.
- **Fuera de alcance (AUD-04, activación):** "Activación inmediata / en minutos" en `AutoservicioFlujoTabs.tsx`, `AutoservicioPostCompra.tsx`, `ComoFuncionaBanner.tsx`, `autoservicio/prueba/page.tsx`, `autoservicio/orden-confirmada-autoservicio/page.tsx`, `autoservicio-enterprise/page.tsx` (incl. metadatos), `firma-nom151-demo-autoservicio/*`, `firma-simple-cobre`, `salud`, y FAQ "¿Cuánto tarda en activarse?" / "Compra en línea, activa en minutos" en `kyc-demo-autoservicio`.
- **Pendiente de aprobación:** ver §7.

## 7. Pendientes de aprobación / decisiones (DEC-A1, DEC-A2)
1. **Crecimiento:** la fila de tabla "Disponible con setup adicional" y el bullet de setup se aplicaron según el copy aprobado; Producto debe confirmar que Crecimiento ofrece SDK (la fila combina API/SDK/Sandbox) y whitelabel "Opcional".
2. **Enterprise y Alianzas:** no se modificaron (✔️ en API/SDK/Whitelabel). Requieren confirmar alcance; la FAQ ya menciona cuota de activación única Enterprise (existente, sin cambio).
3. **`/autoservicio-enterprise` y tarjeta Enterprise de `/comprar`:** se retiró "Activación inmediata" solo en `/comprar`; no se afirmó si ese catálogo incluye o excluye API/sandbox. Requiere decisión.
4. **Promesas de activación inmediata** (lista §6): validar el flujo y resolver en AUD-04.
5. **Checkout/Stripe y correos post-compra:** el resumen es de presentación (se editó solo la leyenda). Textos de confirmación de compra en `AutoservicioPostCompra.tsx` / `orden-confirmada-autoservicio` aún dicen "acceso activo inmediatamente" → AUD-04.
6. **Hallazgos para AUD-03/06:** `/precios` y FAQs dicen "Sin setup fee" para Autoservicio (coherente con la regla, pero revisar frente a mensajes de setup por API); coexisten `/documentacion` (legacy, con enlaces `#`) y `/docs` (activo); páginas no cubiertas por el aviso (`sdks/*`, `integraciones/*`, `productos/*`, `alnitak/*`) heredan la aclaración solo vía navegación, evaluar extender.
7. Metadatos de `/precios` no contenían promesas contradictorias de API (solo "Sin setup fee" en Autoservicio); no se modificaron.

## 8. Dependencias comerciales
Aprobación de Producto y Comercial del copy; confirmación del alcance de Crecimiento/Enterprise/Alianzas; importe y condiciones del setup (no publicados).

## 9. Validación visual pendiente (pasos)
1. `npm run dev`; revisar a 375 px y 1280 px: `/` (secciones "Flexibles…", "Cómpralo…" y "Dos formas de comenzar"), `/autoservicio` (nota bajo el título, antes del catálogo), `/precios` (tarjetas y tabla comparativa, vista móvil con texto largo en celdas), `/comprar`, `/kyc-demo-autoservicio`, `/docs`, `/docs/verificar-identidad/api/paso-1-crear-sesion`, `/documentacion/guias/inicio-rapido`.
2. Comprobar CTAs: Explorar/Comprar Autoservicio → `/autoservicio`; integración → `/contacto`.
3. Verificar foco con teclado en los nuevos enlaces y contraste del texto de aclaración.

## 10. Recomendaciones de despliegue
Publicar tras aprobación; desplegar en preview de Vercel primero; resolver AUD-04 en paralelo para no dejar promesas de activación contradictorias.

---

# Continuación 2 — Ajustes comerciales finales (2026-11-02)

Las nuevas precisiones **reemplazan** lo anterior sobre API/SDK/sandbox/marca blanca. Definición vigente: modalidades **Web / API / SDK**; **White Label** = opción de personalización según contratación (no es un acceso ni está incluido por defecto); **Autoservicio = solo Web** (sin API, SDK ni White Label estándar); la integración API/SDK requiere **setup fee**; **sandbox no se promociona públicamente** (decisión de comunicación; no se tocó infraestructura ni documentación).

## C1. Archivos modificados en esta continuación
`src/config/commercial-copy.ts`, `src/components/HomepageFinalCTA.tsx`, `HomepageAutoservicioCTA.tsx`, `HomepageProducts.tsx`, `src/components/autoservicio/CarritoAutoservicio.tsx` (solo leyenda), `src/app/autoservicio/page.tsx`, `src/app/comprar/page.tsx`, `src/app/precios/PreciosClient.tsx`, `src/app/kyc-demo-autoservicio/LandingClient.tsx` y `layout.tsx`, y este reporte.
**Documentación técnica: sin cambios** (`git diff` vacío sobre `content/`, `src/app/docs`, `src/app/documentacion`, `src/components/docs`). Los avisos de la primera ejecución permanecen tal cual.

## C2. Copy compartido (`commercial-copy.ts`)
- Nuevo `MODALIDADES_COPY` (Web, API, SDK, White Label, setup fee, aclaración corta y esquemas de pago "mensual durante un año o anual, según propuesta y contrato", sin importes ni condiciones).
- `AUTOSERVICIO_COPY.notaCatalogo` ahora: web exclusiva, sin API, SDK ni White Label estándar; integración contratada por separado con setup fee. Sin sandbox.
- Eliminados `INTEGRACION_COPY.aclaracion` y `AUTOSERVICIO_COPY.apiSandbox` (sin consumidores).
- `INTEGRACION_COPY` (claves de docs) **congelado**: lo consume `IntegrationAccessNotice` (docs, fuera de alcance). Contiene una mención a sandbox → ver pendiente P1.
- Consumidores revisados: HomepageFinalCTA, HomepageAutoservicioCTA, `/autoservicio`, `IntegrationAccessNotice`. Ninguno fuera de alcance.

## C3. Textos anteriores → nuevos
| Página | Anterior (1.ª ejecución) | Nuevo |
|---|---|---|
| `/` tarjeta Autoservicio | "Contrata tus paquetes de KYC, firma electrónica, validaciones y OCR directamente en línea. Opera desde la plataforma web de JAAK, sin necesidad de una integración técnica." | "Contrata tus paquetes de JAAK y utiliza nuestras soluciones directamente desde la plataforma web, sin necesidad de integración técnica." |
| `/` aclaración de integración | "¿Necesitas API o sandbox? Su habilitación requiere una cuota de configuración adicional (setup fee)…" | "¿Necesitas integrar JAAK a tus sistemas o aplicaciones? Evaluamos una integración por API o SDK, con personalización White Label según contratación. La integración requiere setup fee." (CTA → `/contacto`) |
| `/` "Compra en línea…" | "…solicita una propuesta de integración con setup adicional." | "…integración por API o SDK (requiere setup fee)." |
| `/` "Flexibles…" | "integración mediante API… cuota de configuración adicional" | "API o SDK… cuota de configuración (setup fee)" |
| `/` banner marca blanca (preexistente) | "Todos los productos disponibles en marca blanca… Hablar sobre marca blanca" | "Personalización White Label… conforme al alcance comercial contratado. Consulta la disponibilidad…" / "Consultar opciones White Label" |
| `/precios` Autoservicio | "no incluye API, SDK ni sandbox" | "Modalidad exclusivamente Web: no incluye API, SDK ni White Label" |
| `/precios` Crecimiento | "Acceso API y sandbox sujetos a… setup fee" | "Integración API sujeta a una cuota de configuración (setup fee)" |
| `/precios` Enterprise | "Integración API / SDK / Whitelabel"; "contrato anual"; "Cuota de activación única por empresa" | "Modalidades Web, API o SDK según el proyecto"; "White Label según la propuesta contratada"; "Setup fee cuando hay integración API o SDK"; "pago mensual durante un año o anual, según contrato" |
| `/precios` Alianzas | "Acceso a toda la plataforma"; "Marca compartida / white-label" | "Modalidades Web, API o SDK según el proyecto"; "White Label según la propuesta contratada"; esquema de pago mensual/anual según contrato |
| `/precios` tabla | 1 fila "API / SDK / Sandbox" + "Whitelabel" con ✔️/❌ | 4 filas: Plataforma Web, Integración API, Integración SDK, White Label (sin ✔️ en Enterprise/Alianzas; sin sandbox) |
| `/precios` cierre | "Si necesitas API o sandbox…" | "Si necesitas integración por API o SDK… (requiere setup fee)" |
| `/autoservicio` metadatos y leyenda del resumen | "No incluye API ni sandbox" | "No incluye API ni SDK" (la nota visible vía copy compartido) |
| `/comprar` | "No incluye API ni sandbox"; "Evaluación de integración API y sandbox" | Autoservicio: "No incluye API, SDK ni White Label en el paquete estándar", "Integración API o SDK… contratación asistida". A la medida: "Evaluación de integración API o SDK", "Setup fee para integración…", "Opciones de White Label según la propuesta contratada" |
| `/kyc-demo-autoservicio` | "API y sandbox… cuota de configuración adicional" | "API o SDK… setup fee" (bloque, 2 FAQ y JSON-LD) |

Tabla `/precios` (valores): Web → Autoservicio "Incluido", Crecimiento "Según modalidad contratada", Enterprise/Alianzas "Según propuesta". API → "No incluido" / "Con setup fee" / "Según propuesta (con setup fee)". SDK y White Label → "No incluido" / **"Consultar con ventas"** / "Según propuesta…". "Consultar con ventas" es una formulación neutral para SDK/White Label de Crecimiento; no afirma inclusión.

## C4. Sandbox
Retirado de todo copy comercial intervenido (home, precios, autoservicio, comprar, landing demo, copy compartido). No se agregó ningún CTA. Sin cambios técnicos. Verificación en el navegador: el texto visible de `/`, `/precios`, `/autoservicio` y `/comprar` solo contiene "Sandbox" en el enlace del **footer global** (preexistente) — ver P2.

## C5. Enterprise y Alianzas
- `/precios`: modalidades diferenciadas, White Label sujeto a propuesta, setup fee para integración, esquema mensual-1 año/anual sin importes ni condiciones nuevas.
- `/autoservicio-enterprise`: **sin cambios**. Es un catálogo de compra en línea con Stripe y toggle Anual/Mensual alimentado por el catálogo; el alcance (Web/API/SDK/White Label) de ese catálogo no está definido en las instrucciones, así que no se afirmó ni se negó (P3).

## C6. Pendientes de aprobación comercial
- **P1.** Aviso de docs (`IntegrationAccessNotice`, primera ejecución) menciona "ambiente sandbox". Se dejó intacto por estar la documentación fuera de alcance; requiere decisión en la revisión específica de docs.
- **P2.** Enlace "Sandbox Status" en el footer global (preexistente, no tocado).
- **P3.** Alcance de `/autoservicio-enterprise` (Web/API/SDK/White Label) y su FAQ/metadatos de "activación inmediata" (AUD-04).
- **P4.** Crecimiento: confirmar SDK y White Label con Producto (hoy "Consultar con ventas").
- **P5.** Reconciliar la FAQ de `/precios` ("cuota de activación única Enterprise", también en JSON-LD de `page.tsx`) con el "setup fee" de integración API/SDK; podrían ser el mismo concepto o no. FAQ de facturación Enterprise ("Mensual: 80%/20%…", descuentos) no se modificó y debe alinearse con los esquemas "mensual 1 año / anual".
- **P6.** "SLA garantizado" en la tarjeta Enterprise (preexistente) y "soporte 24×7" en Alianzas: confirmar.
- **P7.** Marca de verificación en filas "Firma / KYC / Expediente" sin cambios.
- **AUD-04 (no ejecutada):** inventario de promesas de activación inmediata sin cambios (ver §6 de la primera ejecución).

## C7. Pruebas
| Prueba | Resultado |
|---|---|
| `npx tsc --noEmit` | OK |
| `npm run lint` | 0 errores; 2 warnings preexistentes |
| `npm test` | 16 archivos / 136 tests OK |
| `npm run build` | OK |
| `git diff` sobre docs (`content/`, `src/app/docs`, `src/app/documentacion`, `src/components/docs`) | Vacío |
| Render con `next start` (Playwright, 375 px y 1280 px) en `/`, `/precios`, `/autoservicio`, `/comprar` | Responden 200 (la home reportó estado nulo en la primera carga por scripts de terceros bloqueados en el sandbox de ejecución; se recargó sin error); sin desbordamiento horizontal (scrollWidth = ancho de viewport). **No se revisó el diseño a ojo** (capturas no incluidas en el repo) |
| Precios, checkout, backend y autenticación | Sin cambios (solo texto/presentación; revisión de diff) |

Revisión visual humana pendiente: tabla comparativa de `/precios` en móvil (celdas con texto más largo), tarjeta Autoservicio de la home y nota de `/autoservicio`.

## C8. Tabla final de subtareas
| ID | Página | Cambio realizado | Estado | Evidencia | Aprobación pendiente |
|---|---|---|---|---|---|
| AUD-01.2b | `/` | Descripción Autoservicio alineada; integración API/SDK + White Label + setup fee | Implementado | `HomepageFinalCTA.tsx` | Producto/Comercial |
| AUD-01.3b | `/` | Productos y banner White Label sin promesa de inclusión automática | Implementado | `HomepageProducts.tsx` | Producto/Comercial |
| AUD-01.4b | `/` | Bloque de compra con API/SDK + setup fee | Implementado | `HomepageAutoservicioCTA.tsx` | Comercial |
| AUD-01.5b | `/precios` | Tabla en 4 filas; tarjetas Crecimiento/Enterprise/Alianzas; sin sandbox | Implementado | `PreciosClient.tsx` | Producto (SDK/WL Crecimiento, P4, P5, P6) |
| AUD-01.6c | `/autoservicio` | Nota y metadatos sin sandbox; Web exclusiva | Implementado | `page.tsx`, `commercial-copy.ts` | — |
| AUD-01.7b | `/comprar` | Distinción Web vs. integración asistida; White Label sujeto a propuesta | Implementado | `comprar/page.tsx` | Comercial |
| AUD-01.8b | `/kyc-demo-autoservicio` | Escalamiento a API/SDK con setup fee; sin sandbox | Implementado | `LandingClient.tsx`, `layout.tsx` | — |
| AUD-01.11 | `/autoservicio-enterprise` | Revisada; sin cambios | Pendiente de decisión | P3 | Producto/Comercial |
| AUD-01.12 | Docs | Sin cambios (excluidas) | No aplica | diff vacío | Revisión específica (P1) |
| AUD-04 | Varias | No ejecutada | No iniciada | Inventario §6 | — |

## C9. Recomendaciones antes de publicar
1. Producto/Comercial: resolver P1–P7.
2. QA visual móvil/escritorio en preview de Vercel.
3. No publicar hasta que AUD-04 se defina, para no dejar "activación inmediata" junto al nuevo mensaje.
4. Estado AUD-01: **En validación**.

---

# Continuación 3 — Cierre de decisiones comerciales (2026-11-02)

## D1. Decisiones confirmadas por Dirección comercial
1. **Crecimiento:** Web, API, SDK y White Label posible según contratación; setup fee en integración. White Label depende del alcance acordado.
2. **Crecimiento, Enterprise y Alianzas:** pueden trabajar con **bolsa anual de consumo** definida en la propuesta, con pagos mensuales conforme al consumo. No es suscripción mensual de precio fijo. Sin cuotas, tarifas, mínimos ni excedentes publicados.
3. **Autoservicio Enterprise** (plan recurrente mensual, costo anual total, pago directo) es distinto de la contratación asistida Enterprise. `/autoservicio-enterprise` **no se modificó** (paquetes inactivos).
4. **Facturación 80/20:** eliminar de textos comerciales.
5. **Setup fee:** se conserva para integración API/SDK; "cuota de activación única" no se asume equivalente.
6. **Sandbox:** fuera de Autoservicio; se evalúa con un especialista; no se promociona. Aviso de docs y "Sandbox Status" del footer sin tocar.
7. **SLA / soporte 24×7:** sustituir por textos prudentes, **sujetos a aprobación de Producto/Comercial**.
8. **AUD-04:** sin cambios.

## D2. Archivos modificados
`src/app/precios/PreciosClient.tsx`, `src/app/precios/page.tsx` (JSON-LD FAQ), `src/config/commercial-copy.ts` (`esquemasPago`) y este reporte. Sin cambios en `/autoservicio-enterprise`, docs, checkout, precios ni backend (verificado con `git diff`).

## D3. Textos anteriores → nuevos (`/precios`)
| Elemento | Anterior | Nuevo |
|---|---|---|
| Tabla: Plataforma Web (Crecimiento) | "Según modalidad contratada" | "Disponible" |
| Tabla: API (Crecimiento) | "Con setup fee" | "Disponible, con setup fee" |
| Tabla: SDK (Crecimiento) | "Consultar con ventas" | "Disponible, con setup fee" |
| Tabla: White Label (Crecimiento / Enterprise / Alianzas) | "Consultar con ventas" / "Según propuesta contratada" | "Opcional, según alcance acordado" / "Opcional, según propuesta" |
| Tabla: nueva fila | — | "Esquema de contratación": Autoservicio "Compra en línea; paquetes con vigencia de un año"; resto "Bolsa anual de consumo, pagos mensuales según consumo" |
| Tarjeta Crecimiento | "Acceso… panel web o integración API"; "Integración API sujeta a… setup fee" | "Uso mediante plataforma Web, integración API o integración SDK, según contratación"; "White Label opcional, según el alcance acordado"; "Integración API o SDK sujeta a una cuota de configuración (setup fee)"; "Bolsa anual de consumo con pagos mensuales según consumo, conforme a la propuesta" |
| Tarjeta Enterprise (precio) | "pago mensual durante un año o anual, según contrato · volumen desde 5k/mes" | "bolsa anual de consumo · pagos mensuales según consumo · volumen desde 5k/mes" |
| Tarjeta Enterprise (White Label / setup) | "White Label según la propuesta contratada"; "Setup fee cuando hay integración API o SDK" | "White Label opcional, según la propuesta contratada"; "Integración API o SDK sujeta a una cuota de configuración (setup fee)" |
| Tarjeta Alianzas | esquema "mensual durante un año o anual"; sin setup | bolsa anual con pagos mensuales según consumo, según el acuerdo; White Label opcional; integración API/SDK sujeta a setup fee |
| **Soporte Enterprise (SUJETO A APROBACIÓN)** | "Equipo dedicado + SLA garantizado" | "Acompañamiento especializado y niveles de servicio conforme a la propuesta contratada" |
| **Soporte Alianzas (SUJETO A APROBACIÓN)** | "Equipo comercial + soporte 24×7" | "Soporte comercial y técnico según las condiciones del acuerdo" |
| FAQ y JSON-LD "facturación Enterprise" | "Mensual: 80% del estimado del mes actual + 20% real del mes anterior. Neto 30 días. Descuento 15%… Cobro mínimo…" | Pregunta "¿Cómo funciona la contratación de Crecimiento, Enterprise y Alianzas?": bolsa anual de consumo definida en la propuesta, pagos mensuales conforme al consumo, no es suscripción mensual de precio fijo, condiciones en propuesta y contrato |
| FAQ y JSON-LD setup | "¿Hay cuota de activación (setup fee)? … Los planes Enterprise incluyen una cuota de activación única…" | "¿Hay cuota de configuración (setup fee)?" Autoservicio no la requiere (solo web); la integración API o SDK en Crecimiento, Enterprise y Alianzas considera una cuota de configuración conforme a la propuesta |
| FAQ y JSON-LD reembolsos | "…La cuota de activación única (setup fee) de Enterprise tampoco es reembolsable." | "Vencen a 12 meses desde la compra. No son reembolsables." (se retiró la afirmación sobre reembolso del setup: no hay condición confirmada) |

## D4. Referencias a 80/20 eliminadas
`src/app/precios/PreciosClient.tsx` (FAQ) y `src/app/precios/page.tsx` (JSON-LD FAQPage). Búsqueda final en `src/` y `content/`: 0 coincidencias de "80%", "80/20", "20% real" en textos comerciales. Con ello también se retiraron "Descuento 15% si se paga días 1–10" y "Cobro mínimo = tier inicial" que formaban parte de esa respuesta; **confirmar si esas condiciones siguen vigentes**. No se tocó lógica de facturación ni registros.

## D5. Setup fee vs. "cuota de activación única"
- `/precios`: unificado a "cuota de configuración (setup fee)" solo en contexto de integración API/SDK.
- **Sin cambios** (no equivalencia validada): `src/data/autoservicio-catalogo.ts` y `CatalogoAutoservicio.tsx` ("+ $X de activación única", solo SKUs enterprise), `autoservicio-enterprise/schema.tsx` ("tarifa de activación única por empresa"). Pendiente: Comercial debe indicar si es el mismo concepto.

## D6. Validaciones de Crecimiento y White Label
Crecimiento muestra Web/API/SDK y White Label como "Opcional, según alcance acordado" (nunca incluido por defecto). Autoservicio: White Label "No incluido". Enterprise/Alianzas: "Opcional, según propuesta"; sin checks.

## D7. Pendientes (nuevos y vigentes)
- **Aprobación de Producto/Comercial** de los textos prudentes de SLA/soporte (Enterprise, Alianzas).
- Otros textos de SLA/soporte absolutos **fuera de `/precios`** (no modificados por alcance): `firma-electronica/page.tsx` y `FirmaThemeShell.tsx` ("SLA garantizado"), `signa/*` ("soporte 24/7"), `bancos/page.tsx` ("Disponibilidad SLA 99.99%"), `SimuladorPLD.tsx` ("SLAs personalizados"), `RegulatoryProof.tsx` ("24/7").
- En `/precios`: "Soporte comercial dedicado" (feature de Alianzas), fila "Soporte: Dedicado" (Enterprise) y "migración a Enterprise es obligatoria" (FAQ de volumen) son preexistentes y no se tocaron; validar.
- Vigencia de descuento 15% y cobro mínimo (D4).
- Equivalencia de "activación única" (D5).
- `/comprar`: la tarjeta "Enterprise" (self-service) solo se renderiza si el catálogo expone SKUs enterprise; hoy es inactiva y no se modificó. Al activarse, revisar su copy ("Pago anual") contra el esquema Autoservicio Enterprise.
- AUD-04 (activación inmediata) sin cambios: inventario previo vigente.
- Sandbox: aviso de docs y "Sandbox Status" del footer, sin tocar por instrucción.

## D8. QA
| Prueba | Resultado |
|---|---|
| `tsc --noEmit` | OK |
| `npm run lint` | 0 errores; 2 warnings preexistentes |
| `npm test` | 136/136 OK |
| `npm run build` | OK |
| `git diff` de `/autoservicio-enterprise`, docs, checkout | Vacío |
| `/precios` scrollWidth a 375 px y 1280 px | 375 / 1280 (sin desbordamiento) |
| Tabla de Precios móvil (captura revisada) | Legible: tarjetas por fila en 2 columnas, textos largos ("Bolsa anual de consumo, pagos mensuales según consumo") saltan de línea sin cortarse |
| Tabla de Precios escritorio (captura revisada) | Legible; celdas con 2–4 líneas, sin desbordes |
| Tarjetas Crecimiento / Enterprise / Alianzas móvil | Sin desbordes; las listas son más largas (Crecimiento 7 puntos) |
| Home, tarjeta Autoservicio móvil | Correcta; aclaración legible; CTA principal visible |
| `/autoservicio`, nota móvil | Visible antes del catálogo, legible |
| Revisión de la FAQ de Precios | Verificada por contenido (código y JSON-LD); no se capturó visualmente el acordeón |
Las capturas están en el scratchpad de la sesión (no en el repositorio). Los cortes que se ven en ellas (barra de demo, header fijo) son elementos fijos del sitio sobre capturas de sección, no problemas del contenido. Pendiente de revisión humana en dispositivo real.

## D9. Subtareas AUD-01.1 a AUD-01.17
La numeración 1–17 no estaba definida en las instrucciones; se asignó la siguiente según el trabajo realizado. Ajustar si el plan oficial difiere.
| ID | Página / alcance | Cambio realizado | Estado | Evidencia |
|---|---|---|---|---|
| AUD-01.1 | Repo | Inventario de expresiones y páginas afectadas | Completado | Reporte §6 y D7 |
| AUD-01.2 | `/` tarjeta Autoservicio | Sin "Credenciales API en minutos"; Web; integración API/SDK + White Label + setup | Implementado | `HomepageFinalCTA.tsx` |
| AUD-01.3 | `/` productos | Web vs. API/SDK; White Label como opción | Implementado | `HomepageProducts.tsx` |
| AUD-01.4 | `/` bloque de compra | Sin activación inmediata; integración API/SDK con setup | Implementado | `HomepageAutoservicioCTA.tsx` |
| AUD-01.5 | `/precios` tarjetas y tabla | Crecimiento Web/API/SDK/WL; filas separadas; esquema de contratación | Implementado, pendiente aprobación | `PreciosClient.tsx` |
| AUD-01.6 | `/autoservicio` | Nota Web exclusiva; metadatos; leyenda del resumen | Implementado | `autoservicio/page.tsx` |
| AUD-01.7 | `/comprar` | Contratación directa vs. asistida | Implementado | `comprar/page.tsx` |
| AUD-01.8 | `/kyc-demo-autoservicio` | Escalamiento a API/SDK con setup fee | Implementado | `LandingClient.tsx`, `layout.tsx` |
| AUD-01.9 | Docs | Avisos de la 1.ª ejecución; sin cambios posteriores | Implementado (congelado); mención a sandbox pendiente | `IntegrationAccessNotice.tsx` |
| AUD-01.10 | Copy compartido | `commercial-copy.ts` con modalidades y bolsa anual | Implementado | `commercial-copy.ts` |
| AUD-01.11 | SEO / metadatos | Metadatos y JSON-LD de las páginas intervenidas sin promesas contradictorias | Implementado en páginas intervenidas; resto fuera de alcance | build OK |
| AUD-01.12 | Enterprise y Alianzas | Modalidades, White Label opcional, bolsa anual, setup | Implementado, pendiente aprobación | `PreciosClient.tsx` |
| AUD-01.13 | Facturación 80/20 | Eliminada de FAQ y JSON-LD | Implementado; confirmar descuento 15% / cobro mínimo | `PreciosClient.tsx`, `page.tsx` |
| AUD-01.14 | Setup fee | Terminología unificada en `/precios`; equivalencias no validadas sin tocar | Parcial (pendiente decisión Comercial) | D5 |
| AUD-01.15 | SLA / soporte | Textos prudentes en Enterprise y Alianzas | Implementado, **sujeto a aprobación**; otras páginas pendientes | D3, D7 |
| AUD-01.16 | `/autoservicio-enterprise` | Sin modificaciones (paquetes inactivos) | Sin cambios por decisión | diff vacío |
| AUD-01.17 | QA y reporte | Técnico y visual (capturas) ejecutados; dispositivo real y publicación pendientes | En validación | D8 |

**Estado general de AUD-01: En validación.** No está completada: faltan aprobación comercial (SLA/soporte, setup, descuentos), revisión de QA en dispositivos reales y confirmación de publicación. AUD-04 no ejecutada.

---

# Continuación 4 — Soporte, SLA, descuentos retirados y setup fee Autoservicio Enterprise (2026-11-02)

## E1. Definiciones comerciales finales
- **Soporte Autoservicio (básico):** lunes a viernes, 9:00 a 18:00 h (Ciudad de México); `soporte@jaak.ai` y WhatsApp oficial (enlace existente, sin cambios). Alcance: acceso y uso general, dudas de productos, reportes de errores, compras/paquetes/consumo. No incluye desarrollo de integraciones, soporte técnico especializado ilimitado ni SLA personalizado. Sin tiempos de respuesta prometidos.
- **Soporte Crecimiento / Enterprise / Alianzas:** según evaluación comercial y contrato. Texto estándar: "Soporte y acompañamiento especializado en español, desde México, conforme al plan y las condiciones acordadas con nuestro equipo comercial." Versión breve: "Soporte especializado según contratación." Sin 24/7, SLA universal, horarios extendidos, tiempos ni uptime.
- **Retirados:** descuento 15% por pago temprano, facturación 80/20 y cobro mínimo anterior.
- **Autoservicio Enterprise:** plan recurrente mensual, costo anual total definido, pago directo, **con setup fee** (periodicidad del setup no confirmada).
- Modalidades (Autoservicio, Crecimiento, Enterprise/Alianzas) y sandbox: sin cambios respecto a la ronda anterior.

## E2. Landing de soporte `/soporte/autoservicio`
La ruta **no existía en esta rama**: está en `claude/exciting-bardeen-9qwwaw` (commit `d8eee1f`, 1 commit, 4 archivos). Se integró con `git merge` (limpio) en la rama de trabajo para poder editarla; **la rama original no se modificó**. El merge trae además cambios de esa rama en `src/app/autoservicio/page.tsx` (enlace a soporte), `src/app/sitemap.ts` (alta de la ruta) y `Footer.tsx` (enlace). Al integrarse esta rama, `/soporte/autoservicio` se publica junto con ellos.
Cambios en `src/app/soporte/autoservicio/page.tsx` (guía KYC, canales, indicaciones de reporte, encuesta, formularios y enlaces sin cambios):
| Elemento | Anterior | Nuevo |
|---|---|---|
| Bloque nuevo `#horario` (sobre las tarjetas de correo/WhatsApp) | — | "Horario de soporte JAAK Autoservicio · Lunes a viernes · 9:00 a 18:00 h · Zona horaria: Ciudad de México" + descripción de Customer Success aprobada; sin promesas de respuesta |
| Sección "Soporte básico" | "…recibir reportes relacionados con su funcionamiento." | + "de lunes a viernes de 9:00 a 18:00 h (horario de Ciudad de México)" |
| Nota de alcance | "…podrán ser evaluadas…" | + "El soporte básico no incluye desarrollo de integraciones, soporte técnico especializado ilimitado ni un SLA personalizado." |
| Meta/OG/Twitter description | sin horario | incluye horario (L–V, 9:00 a 18:00 h, CDMX) |

## E3. Revisión de 24/7, SLA y "dedicado"
Corregidas (promesa comercial de soporte/servicio → texto según contratación). *Anterior → nuevo*:
| Archivo | Anterior | Nuevo |
|---|---|---|
| `components/FirmaThemeShell.tsx`, `app/firma-electronica/page.tsx` | "Soporte técnico dedicado", "SLA garantizado", "soporte dedicado" | "Soporte especializado según contratación", "Niveles de servicio según la propuesta" |
| `app/bancos/page.tsx` | tile "99.99% Disponibilidad SLA" | "A medida · Niveles de servicio según contratación" (sin cifra nueva) |
| `app/financieras/page.tsx` | "99.9% Uptime garantizado"; "Respuesta garantizada en menos de 24 horas." | "A medida · Niveles de servicio según contratación"; "Un especialista de JAAK te contactará para revisar tu caso." |
| `app/nosotros/page.tsx` | "99.9% Uptime garantizado" | "A medida · Niveles de servicio según contratación" |
| `app/soluciones/instituciones-financieras/page.tsx` | "99.9% disponibilidad" | "A medida · niveles de servicio según contratación" |
| `app/soluciones/onboarding-digital/page.tsx` | "99.9% Disponibilidad del servicio" | "Web · API · SDK · Modalidades según contratación" |
| `components/Trust.tsx` | "24/7 Disponibilidad" | "Español · Soporte según contratación" |
| `components/RegulatoryProof.tsx` | "24/7 operación continua" | "México · soporte especializado en español · según el plan y las condiciones acordadas" |
| `components/SimuladorPLD.tsx` | "soporte tecnico dedicado, SLAs personalizados"; "soporte dedicado" | "soporte especializado y niveles de servicio conforme a la propuesta contratada"; "soporte especializado según contratación" |
| `cumplimiento/actividades-vulnerables/page.tsx` | "SLAs de disponibilidad personalizados"; "Soporte tecnico dedicado" | "Niveles de servicio conforme a la propuesta contratada"; "Soporte especializado según contratación" |
| `app/inmobiliarias/page.tsx` | "Soporte técnico dedicado desde el día uno" | "Soporte especializado según contratación" |
| `app/contacto/page.tsx` | "Con soporte técnico dedicado." | "Con soporte especializado según contratación." |
| Signa: `signa/page.tsx` (meta, lista, hero, CTA), `seo-content.tsx` (FAQ, servicios), `schema.tsx` (description y FAQ JSON-LD), `comparacion/page.tsx` (tabla y tarjeta) | "soporte 24/7", "24/7/365", "Respuesta promedio: 2 minutos", "migración gratis" en meta | "soporte especializado en español según contratación"; tarjeta "Soporte especializado… conforme al plan y las condiciones acordadas" |

**Conservadas (indicador técnico o contractual, no promesa de soporte):** `terminos/page.tsx` (SLA específicos "según su contrato"); `firma-electronica-nom-151/page.tsx` y `firma-nom151-demo-autoservicio` ("SLAs" como tipo de documento firmado); `seguridad/page.tsx` ("Monitoreo de seguridad 24/7/365"); `guardian/page.tsx` ("24/7 operación"); `prevencion-fraude` ("Monitoreo continuo 24/7"); `chronos/*` ("atención al cliente 24/7 con IA", caso de uso del producto); "99.9% precisión" (métrica biométrica).

## E4. Descuentos y cobros retirados
Búsqueda global (`pago temprano`, `15% descuento`, `80/20`, `80% … mes`, `cobro mínimo`, `tier inicial`, `días 1–10`, `neto 30`) en `src/` y `content/`: **0 coincidencias**. Ya habían salido de la FAQ y JSON-LD de `/precios` en la ronda anterior. "Descuentos progresivos por volumen" (Crecimiento) y el descuento anual del catálogo de Autoservicio Enterprise se conservaron: no son los retirados. Sin cambios en facturación ni registros.

## E5. Autoservicio Enterprise: setup fee (solo documentado)
`src/app/autoservicio-enterprise/` **sin cambios** (0 archivos modificados). Hallazgos de la inspección, a homologar cuando se apruebe su publicación:
- `schema.tsx:24` (FAQ JSON-LD): "…pago anual y una **tarifa de activación única por empresa**…".
- `page.tsx:18-22, 96, 99` y `schema.tsx:32`: "**activación inmediata**" (AUD-04) y "Pago anual"; el hero tiene toggle Anual/Mensual alimentado por catálogo.
- Catálogo (`autoservicio-catalogo.ts`, `catalog.ts`, `CatalogoAutoservicio.tsx`): `setupFee` mostrado como "+ $X de activación única" (solo SKUs enterprise, hoy sin SKUs activos).
- Relación: la "cuota/tarifa de activación única" corresponde presumiblemente al setup fee ahora confirmado, pero **no se unificó** hasta decisión de activación; la periodicidad del setup no está confirmada (no afirmar "única vez").
- Copy propuesto para el momento de publicación: "Autoservicio Enterprise contempla un esquema de contratación recurrente mensual, con un costo anual total definido. Su habilitación está sujeta a una cuota de configuración (setup fee), conforme a las condiciones del plan contratado." Sustituiría "pago anual" y "tarifa de activación única".
Pendiente homologar con "cuota de configuración (setup fee)" en el momento de activación: términos "activación única" (catálogo y FAQ), "pago anual" y "activación inmediata".

## E6. Coherencia de modalidades
Sin cambios en `/precios`, home, `/autoservicio`, `/comprar` ni en `commercial-copy.ts` en esta ronda; se verificó que `/precios` no contiene 80/20, SLA ni 24×7. Documentación técnica sin cambios (diff vacío sobre `content/`, `src/app/docs`, `src/app/documentacion`, `src/components/docs`). Sandbox: único texto visible es el enlace "Sandbox Status" del footer (decisión previa: no tocar).

## E7. Pendientes / hallazgos (sin cambios por alcance)
1. **Testimonio de Signa** (`signa/page.tsx:153`): "El soporte 24/7 es increíble…" sigue visible. Es una cita atribuida; no se editó. Requiere validar la fuente o retirarla. **Mientras permanezca, Signa conserva una mención 24/7 visible.**
2. **Signa — otras promesas comerciales** no relacionadas con soporte pero contradictorias con las reglas AUD-01: "Setup gratis", "setup/deploy en 24 horas", "migración gratis/en 24 horas", "Garantía de 30 días… devolvemos tu dinero". Requieren decisión de Producto/Comercial.
3. Si Signa tiene un servicio o contrato de soporte propio, validarlo antes de publicar una afirmación específica.
4. Promesas de tiempo de contacto comercial ("en menos de 24 horas": bancos, contacto, inmobiliarias, webinar, salud, RR.HH.) y "24 horas hábiles" en post-compra/orden confirmada: no son soporte/SLA; revisar (post-compra → AUD-04).
5. Aprobación de Producto/Comercial de todos los textos de soporte y de los tiles "A medida · Niveles de servicio según contratación" (si se prefiere eliminar el tile en lugar de sustituirlo).
6. `/firma-electronica` en móvil: desbordamiento horizontal preexistente (tabla `min-w-[900px]` de "Tipo de firma"; scrollWidth 1378 a 375 px). No relacionado con AUD-01; recomendable corregir en otra actividad.
7. Soporte básico Autoservicio fuera del landing: `orden-confirmada-autoservicio` muestra `soporte@jaak.ai` sin horario; evaluar añadirlo (no se modificó por ser flujo post-compra).
8. Pendientes previos vigentes: AUD-04; aviso de docs con mención a sandbox; "Sandbox Status" del footer; FAQ de `/precios` "migración a Enterprise obligatoria"; "Soporte comercial dedicado" (Alianzas) y "Soporte: Dedicado" (tabla, Enterprise) en `/precios`.

## E8. QA
| Prueba | Resultado |
|---|---|
| `tsc --noEmit` | OK |
| `npm run lint` | 0 errores; 2 warnings preexistentes |
| `npm test` | 136/136 OK |
| `npm run build` | OK; `/soporte/autoservicio` generada |
| Render (`next start`, Playwright) en 375 y 1280 px: `/soporte/autoservicio`, `/precios`, `/bancos`, `/signa`, `/`, `/autoservicio`, `/firma-electronica` | Todas 200. Sin desbordamiento horizontal salvo `/firma-electronica` (preexistente, E7.6). Texto "24/7" visible solo en `/signa` (testimonio, E7.1). "SLA" visible solo en soporte (frase negativa "ni un SLA personalizado") |
| Captura móvil de `#canales` de soporte | Horario legible, jerarquía clara, botones de correo/WhatsApp intactos |
| Tabla de Precios móvil, tarjeta Autoservicio de la home y nota de `/autoservicio` | Revisadas en la ronda anterior; sin cambios posteriores |
| Metadatos/JSON-LD revisados | Signa (meta, OG vía description, schema FAQ y descripción), soporte (meta/OG/Twitter), precios (sin cambios): sin 24/7 ni SLA genéricos |
| CTA | Soporte: correo y WhatsApp conservan enlaces originales; resto sin cambios |
| Dispositivo real / verificación de publicación | **Pendiente** |
Las capturas están en el scratchpad de la sesión, no en el repositorio. No se revisó visualmente cada página tocada (p. ej. tiles de bancos/financieras/nosotros): verificación por render, scrollWidth y texto.

## E9. Tabla final
| ID | URL | Sección | Cambio | Archivo | Estado | Evidencia | Aprobación pendiente |
|---|---|---|---|---|---|---|---|
| AUD-01.18 | `/soporte/autoservicio` | Canales + alcance + metadatos | Bloque de horario L–V 9:00–18:00 CDMX; exclusión de integración/SLA | `soporte/autoservicio/page.tsx` | Implementado | Captura móvil, build | Producto/Comercial (texto) |
| AUD-01.19 | `/firma-electronica`, componente Firma | Enterprise | "Soporte especializado según contratación"; sin SLA garantizado | `firma-electronica/page.tsx`, `FirmaThemeShell.tsx` | Implementado | grep + render | Producto/Comercial |
| AUD-01.20 | `/bancos` | Stats | Tile 99.99% → "A medida / niveles de servicio según contratación" | `bancos/page.tsx` | Implementado | grep + render | Producto (¿eliminar tile o cifra con respaldo?) |
| AUD-01.21 | `/financieras`, `/nosotros`, `/soluciones/instituciones-financieras`, `/soluciones/onboarding-digital` | Stats/CTA | Uptime/disponibilidad 99.9% y "respuesta garantizada" retirados | archivos respectivos | Implementado | grep | Producto/Comercial |
| AUD-01.22 | Home y varias (Trust, RegulatoryProof) | Métricas | "24/7" → soporte según contratación | `Trust.tsx`, `RegulatoryProof.tsx` | Implementado | grep | Producto/Comercial |
| AUD-01.23 | `/inmobiliarias`, `/contacto`, `/cumplimiento/actividades-vulnerables`, simulador PLD | Listas Enterprise | "Soporte dedicado"/"SLAs personalizados" → según contratación | archivos respectivos | Implementado | grep | Producto/Comercial |
| AUD-01.24 | `/signa`, `/signa/comparacion` | Visible, SEO, JSON-LD | Soporte 24/7 → según contratación | `signa/*` | Parcial: testimonio y otras promesas pendientes | grep, render | Producto/Comercial (E7.1–E7.3) |
| AUD-01.25 | Sitio | Descuentos/cobros retirados | Verificado: 0 apariciones | — | Completado | grep | — |
| AUD-01.26 | `/autoservicio-enterprise` | Setup fee | Documentado; sin cambios públicos | — | Documentado (sin cambios por decisión) | E5 | Comercial (activación y copy) |
| AUD-01.27 | Sitio | QA técnico y visual | tsc, lint, test, build, render | — | Parcial (dispositivo real pendiente) | E8 | — |

**Estado de publicación:** no publicado. Para integrar esta rama también se publicaría el landing de soporte con sus cambios en sitemap, footer y `/autoservicio` (E2).
**Estado general de AUD-01: En validación.** No cumple aún los criterios de cierre: faltan aprobación de Producto/Comercial, resolución del testimonio y promesas de Signa, QA en dispositivos reales y confirmación de publicación. AUD-04 fuera de alcance.
