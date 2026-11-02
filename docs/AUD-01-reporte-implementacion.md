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
