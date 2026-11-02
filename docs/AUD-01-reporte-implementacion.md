# AUD-01 — Reporte de implementación

**Actividad:** Corrección integral de comunicación Autoservicio vs. API/sandbox · **Prioridad:** P0 · **Fecha:** 2026-11-02 · **Rama:** `claude/compassionate-pascal-26uj4m`
**Estado:** implementado en código, **pendiente de aprobación (Producto y Comercial), publicación y validación visual.**

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
