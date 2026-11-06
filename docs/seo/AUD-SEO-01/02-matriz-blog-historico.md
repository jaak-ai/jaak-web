# AUD-SEO-01.3 · Matriz del blog histórico (`blog.jaak.ai` ↔ `jaak.ai/blog`)

**Estado: PROPUESTA. No se ejecutó ninguna eliminación ni redirección.** Requiere aprobación (Marketing/SEO + Producto) antes de cualquier acción.

## Fuente y límites de los datos
- `blog.jaak.ai` es el blog **«Blog JAAK» de HubSpot** (ID 73150102958). Se listaron sus entradas por la API de HubSpot (solo lectura). El listado devolvió **25 entradas** (24 publicadas + 1 borrador vacío); el límite de la herramienta es 25, por lo que **pueden existir entradas antiguas no listadas** (el análisis de tráfico muestra al menos 8 más, p. ej. «7 herramientas que son tecnología inclusiva»).
- **Rendimiento = vistas de página de HubSpot, últimos 3 meses (6 ago–6 nov 2026).** No son clics ni impresiones de Search Console (sin acceso desde esta sesión). Columna GSC: *pendiente*.
- Similitud temática: criterio editorial por título/descripción (no se pudo rastrear `blog.jaak.ai` desde esta sesión; el proxy devuelve 403). **Validar leyendo cada par antes de decidir.**
- Los artículos de `jaak.ai/blog` (22) son de 2026; los de HubSpot son de 2024–2026. Ninguna pareja es un duplicado exacto: no hay base para redirección masiva.

## Criterios de tratamiento
- **Conservar**: tema sin equivalente en `www`, o con tráfico propio.
- **Actualizar**: tema vigente pero con datos de 2024/2025 (regulatorios incluidos; validar con Legal).
- **Fusionar**: tema solapado con un artículo de `www`; se consolida contenido útil y se redirige 301 **solo a ese artículo equivalente** (nunca a la home).
- **Redirigir / Retirar**: solo tras evaluación individual y aprobación.

## Matriz

| # | URL origen (`blog.jaak.ai/…`) | URL destino recomendada (`jaak.ai/blog/…`) | Similitud | Vistas 3m (HubSpot) | Tratamiento propuesto |
|---|---|---|---|---|---|
| 1 | `qué-es-kyc-y-por-qué-es-crucial-para-las-empresas-en-2025` | `que-es-kyc-cuando-es-obligatorio-mexico` | Alta | 1 | **Fusionar** y 301 al destino tras confirmar que el destino cubre lo útil |
| 2 | `regulaciones-kyc-en-2025-está-tu-banco-listo-para-lo-que-viene` | `disposiciones-cnbv-verificacion-identidad` | Media-alta | n/d | **Actualizar o fusionar** (contenido regulatorio 2025; validar con Legal) |
| 3 | `la-regulación-de-la-cnbv-y-el-reconocimiento-facial-en-méxico-un-análisis-detallado` | `biometria-facial-cnbv-2026-plazos-requisitos-bancos-mexico` | Alta | 2 | **Fusionar** y 301 |
| 4 | `pasos-clave-para-migrar-a-un-sistema-kyc-automatizado-en-tu-empresa` | `onboarding-digital-rapido-cumplimiento` | Media | n/d | **Conservar/actualizar** (enfoque distinto: migración) |
| 5 | `como-reducir-el-abandono-en-fintech-y-bancos` | `onboarding-digital-rapido-cumplimiento` | Alta | 1 | **Fusionar** y 301 |
| 6 | `cómo-la-validación-biométrica-está-revolucionando-la-seguridad-en-kyc` | `seguridad-biometrica-prueba-de-vida` | Media-alta | n/d | **Fusionar** (evaluar) |
| 7 | `principios-y-mejores-prácticas-para-proteger-la-identidad-de-tus-clientes` | `seguridad-biometrica-prueba-de-vida` | Media | n/d | **Conservar/actualizar** |
| 8 | `biometría-vs.-autenticación-tradicional-cuál-es-la-mejor-opción` | — (sin equivalente) | Baja | n/d | **Conservar/actualizar** |
| 9 | `el-impacto-de-la-ia-y-el-reconocimiento-facial-en-la-seguridad-empresarial` | `inteligencia-artificial-verificacion-identidad` | Media | 2 | **Fusionar** (evaluar) |
| 10 | `5-casos-de-uso-del-reconocimiento-facial` | `reconocimiento-facial-biometria-prueba-de-vida` | Media | 10 | **Actualizar** (tiene tráfico) |
| 11 | `que-es-verificacion-biometrica` | `reconocimiento-facial-biometria-prueba-de-vida` | Media | 2 | **Evaluar fusión** |
| 12 | `20-señales-de-alerta-que-indican-un-posible-fraude-digital` | `prevencion-fraude-onboarding-digital` | Media | 10 | **Conservar/actualizar** (formato lista, tráfico propio) |
| 13 | `deepfakes-y-finanzas-cuán-vulnerables-son-los-bancos-y-fintechs` | `alerta-condusef-suplantacion-identidad` | Baja-media | n/d | **Conservar/actualizar** |
| 14 | `prevención-de-fraude-digital-en-méxico-ia-y-autenticación-biométrica` | `prevencion-fraude-onboarding-digital` | Alta | 1 | **Fusionar** y 301 |
| 15 | `resiliencia-digital-preparando-tu-empresa-contra-fraudes-futuristas` | `prevencion-fraude-onboarding-digital` | Media | n/d | **Evaluar fusión** |
| 16 | `protege-tu-tienda-online-prevención-de-fraude-en-el-comercio-electrónico` | — | Baja | n/d | **Conservar** |
| 17 | `identidad-verificada-en-segundos-…-industrias-de-alto-riesgo` | `ley-antilavado-inmobiliarias-mexico` (parcial) | Baja-media | n/d | **Conservar/actualizar** |
| 18 | `kyc-en-segundos-biometría-antifraude-para-inmobiliarias-notarías-y-crédito` | `ley-antilavado-inmobiliarias-mexico` | Media | n/d | **Evaluar fusión** |
| 19 | `cumplimiento-regulatorio-en-latam-como-jaak-garantiza-seguridad-y-conformidado` | `mejores-practicas-compliance-mexico` | Media | n/d | **Actualizar**; slug con error tipográfico («conformidado»): no cambiar sin 301 |
| 20 | `cómo-transformar-trámites-presenciales-…-pensionados-del-imss` | — | Baja | n/d | **Conservar/actualizar** (revisar afirmaciones sobre la institución) |
| 21 | `por-que-la-geolocalización-y-la-autenticación-multifactor-son-críticas-hoy-en-día` | — | Baja | n/d | **Conservar/actualizar** |
| 22 | `por-que-la-geolocalización-…-día-0` (título: «AML y Cripto…») | — | Baja | n/d | **Corregir**: slug no corresponde al título y su meta description es idéntica a la de «Autenticación sin contraseña» |
| 23 | `autenticación-sin-contraseña-está-tu-empresa-preparada` | — | Baja | n/d | **Corregir meta description** (duplicada con #22) |
| 24 | `verificación-digital-adaptativa-ia-…` / `revolución-en-seguridad-digital-la-verificación-facial-adaptativa` / `verificación-digital-la-nueva-frontera-…-latam` | — | Entre sí: alta | 1 / n/d / 1 | **Fusionar las 3 entre sí** (canibalización interna) y decidir destino |
| 25 | `recapitulación-del-evento-hecho-en-mexico-y-su-importancia`, `el-premio-e100-…` | — (noticias corporativas) | n/a | n/d | **Conservar** o llevar a `/nosotros`; no son contenido SEO transaccional |
| 26 | `7-herramientas-que-son-tecnología-inclusiva` | — | Baja | **33** (la más vista) | **Conservar y actualizar** antes de cualquier decisión |
| 27 | `así-funciona-un-saas`, `qué-es-la-huella-digital-informática`, `cámaras-de-seguridad-con-reconocimiento-de-rostros`, `verificación-digital-de-docuementos` | — | Baja | 1–7 | **Evaluar** individualmente con Search Console (contenido antiguo/delgado) |
| 28 | Borrador «Título de tu publicación…» (`-temporary-slug-…`) | — | n/a | 0 | **Retirar** (borrador vacío; no es público) |

## Hallazgos técnicos del blog en HubSpot (requieren responsable en HubSpot)
1. Los slugs contienen caracteres **no ASCII sin codificar** (tildes, ñ): riesgo de URLs duplicadas por codificación. Revisar canonical emitido por HubSpot.
2. **Meta descriptions duplicadas** (#22 y #23) y metas con saltos de línea finales en varias entradas.
3. Verificar que cada entrada de `blog.jaak.ai` declare canonical **a sí misma** (no a la home de `www`) y que el listado `blog.jaak.ai/` no sea un duplicado de `jaak.ai/blog`.
4. Mismo autor genérico («JAAK Spark») en todas: sin impacto técnico, relevante para E-E-A-T en la fase editorial.

## Decisión solicitada
Aprobar o ajustar las filas marcadas **Fusionar** / **Retirar** (1, 3, 5, 14, 22–24, 28 son las de menor riesgo). Hasta entonces, el estado actual se mantiene.
