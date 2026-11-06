# AUD-03 — Reporte de implementación

**Actividad:** Aclarar en la landing de prueba producto, unidades, total con IVA, vigencia y acceso · **Prioridad:** P0 · **Fecha objetivo del plan:** 27/11/2026
**Responsable funcional:** Marketing · **Validación:** Producto, Comercial y Finanzas
**URL principal:** `/kyc-demo-autoservicio` · **Referencia:** `/autoservicio` (sin cambios)
**Rama:** `claude/compassionate-pascal-26uj4m` (desde `main` en `3a053f8`) · **Fecha:** 06/11/2026

## 1. Resumen ejecutivo

La landing presentaba «Paquete inicial JAAK $99 MXN» con «40% de descuento por lanzamiento», CTA de compra que en realidad abrían un formulario de captura de datos, un embudo con cifras sin fuente y varias opciones de entrada que parecían costar $99. Se rediseñó el hero con una tarjeta de oferta específica de **Cobre KYC** (5 verificaciones, subtotal, IVA, total, vigencia, acceso, exclusiones y soporte), tomada del catálogo de Autoservicio; se eliminó el descuento, las cifras del embudo y los precios de los demás productos; se alinearon los CTA con lo que realmente hacen y se reescribió la FAQ (visible y JSON-LD) desde una sola fuente.

**Estado:** implementado en la rama, sin publicar. AUD-03 permanece **En validación** hasta contar con la aprobación de Producto, Comercial y Finanzas, completar la verificación en producción y confirmar la publicación. AUD-04 y AUD-06.13 no se marcan como completadas.

## 2. Hallazgos originales de AUD-03 y estado

| # | Hallazgo | Estado |
|---|---|---|
| H1 | Oferta sin producto, unidades, IVA ni total visibles junto al CTA. | Corregido (tarjeta de oferta). |
| H2 | «40% de descuento por lanzamiento» sin precio original, vigencia ni aprobación verificable. | Retirado. |
| H3 | CTA «Activar paquete por $99», «Comprar por $99», «Crear mi acceso y continuar» sobre un formulario que solo registra un lead. | Corregido. |
| H4 | Varias opciones de entrada con precios distintos bajo un mismo mensaje de $99. | Corregido (sección secundaria sin importes). |
| H5 | Embudo (100/78/52/38/22) y comparación 72 h frente a 1 min presentados sin fuente. | Retirado; sustituido por ilustración conceptual sin cifras. |
| H6 | FAQ con «activación inmediata», «en minutos» y promesas no verificadas. | Corregido. |
| H7 | Title, metadescription, Open Graph y keywords con «$99». | Corregido. |

## 3. Estado real del SKU Cobre KYC

| Verificación | Resultado | Fuente |
|---|---|---|
| Existe en el catálogo | **Sí.** Producto `kyc`, paquete `cobre`. | `src/data/autoservicio-catalogo.ts` (respaldo) y catálogo en vivo `/public/v1/catalog` vía `getAutoservicioCatalog()`, el mismo que usa `/autoservicio`. |
| Unidades | **5 verificaciones.** | Catálogo (`tiers(99, …, 5, …)`). |
| Precio | **$99 MXN antes de IVA** (el modelo `Paquete.precio` es «MXN, sin IVA»). | Catálogo. |
| IVA | 16 % (constante `IVA` del catálogo). | Catálogo. |
| Identificador de compra | Plan `cobre`, enviado como `k.pc` al registro unificado. | `buildKycRegisterUrl("cobre")`; nota SD-597 en el código indica que `cobre` es el código canónico en producción. |
| ¿Es distinto del Cobre estándar? | **No.** Es el paquete Cobre del producto KYC; no hay un SKU promocional aparte en el repositorio. | Catálogo. |
| Activo y comprable en producción | **No verificable desde el repositorio.** La compra ocurre en `platform.jaak.ai` (flujo externo); además, `src/lib/pricing.ts` indica que KYC no tiene renglón comprable en el índice de pricing, porque se compra como plan. | Pendiente AUD-06.13 / AUD-04. |
| Mismo precio y unidades durante todo el proceso | No verificable (requiere recorrido E2E autorizado). | Pendiente AUD-04. |

**Regla aplicada:** la oferta se calcula siempre desde el catálogo recibido. Si el paquete Cobre de KYC no existe en el catálogo, la landing no muestra una compra como disponible: todos los CTA pasan a «Ver catálogo de Autoservicio». No se creó ni modificó ningún SKU ni precio.

## 4. Precio, IVA y unidades

| Concepto | Valor mostrado | Estado |
|---|---|---|
| Unidades | 5 verificaciones | Confirmado en catálogo. |
| Subtotal | $99.00 MXN | Confirmado en catálogo (sin IVA). |
| IVA (16 %) | $15.84 MXN | Calculado desde la constante del catálogo. |
| Total | $114.84 MXN | Calculado; coincide con la condición del plan. |

Nota visible en la tarjeta: «Importes según el catálogo vigente de Autoservicio; el importe final se confirma en el proceso de compra». **Pendiente de Finanzas:** que el total que cobra el checkout coincida con $114.84 MXN (requiere AUD-04 en entorno autorizado).

## 5. Hero y tarjeta de oferta

| Elemento | Antes | Ahora |
|---|---|---|
| H1 | «Verifica identidades en minutos y prueba JAAK por $99» | «Prueba la verificación de identidad KYC de JAAK.» |
| Descripción | «Conoce cómo funciona una sesión KYC en JAAK: …» | «Conoce cómo funciona una verificación de identidad con documento, biometría facial, prueba de vida y evidencia digital desde nuestra plataforma Web.» |
| Etiqueta | «Demo KYC + Autoservicio JAAK» | «Paquete de prueba · JAAK Autoservicio» |
| Oferta | «Paquete inicial JAAK $99 MXN · 40% de descuento por lanzamiento» | Tarjeta «Cobre KYC · Paquete de prueba»: 5 verificaciones; subtotal, IVA y total; vigencia de un año conforme a las condiciones del paquete; acceso por plataforma Web; no incluye API, SDK, White Label estándar ni sandbox automático; soporte L–V 9:00–18:00 h CDMX. |
| Texto de apoyo | «Compra en línea, activa en minutos y comienza a operar desde autoservicio.» | «El paquete se utiliza desde la plataforma Web de JAAK. ¿Prefieres que te contactemos? Solicita información.» |

**Presentación visual (ajuste de diseño):** la tarjeta es compacta para que el CTA quede visible sin desplazarse en escritorio: el total con IVA es el dato protagonista ($114.84 MXN, con el desglose $99.00 + IVA $15.84 en una línea), tres chips (5 verificaciones, 1 año de vigencia, Web), una línea visible con lo que no incluye y un desplegable «Ver condiciones del paquete» con vigencia, acceso, soporte y la nota de importes. Todo el contenido sigue en la página y es legible a 375, 768 y 1280 px.

Paleta: navy #202945, azul oscuro, turquesa #1ECAD3, off-white, Montserrat (ya vigentes en la landing).

## 6. CTA y formulario (flujo real)

**Cómo funciona hoy (verificado en el código):**
- El formulario envía a `/api/landing` (HubSpot Forms con el formulario de contacto, espejo a Kairos y respaldo por correo). **Solo genera un lead**: no crea cuenta, no cobra ni activa.
- Tras el envío, desbloquea el video completo (marca en `localStorage`) y, a los 4 segundos, redirige automáticamente a la página de compra de `platform.jaak.ai/#/register/products` con el plan elegido; allí se crean la cuenta y el pago (flujo externo, no verificado).

**Cambios:**

| Ubicación | Texto anterior | Texto nuevo | Destino real |
|---|---|---|---|
| Hero, header, final y barra móvil | «Activar paquete por $99», «Probar por $99», «Comprar por $99» | «Seleccionar paquete Cobre KYC» | Registro/compra del plan `cobre` (con UTM). Escenario C. |
| Hero (secundario) | «Ver demo de 20 segundos» | «Ver demostración» | Video (sin cambios de funcionamiento). |
| Video bloqueado | «Activar paquete por $99» / «Registrarme y continuar» | «Desbloquear demo completa» / «Seleccionar paquete Cobre KYC» | Formulario / compra. |
| Formulario, título | «Crea tu acceso de prueba» | «Solicita información de la prueba KYC» | `/api/landing` (lead). Escenario A. |
| Formulario, subtítulo | «Después de registrarte, activas tu paquete de $99 MXN.» | Explica que el equipo de JAAK contactará, que se desbloquea la demo y que se lleva a la página de compra. | — |
| Botón del formulario | «Crear mi acceso y continuar →» | «Solicitar información de la prueba KYC» | — |
| Consentimiento | «Al continuar, aceptas ser contactado por el equipo de JAAK para activar tu paquete.» | «Al enviar este formulario, autorizas que el equipo de JAAK use tus datos para contactarte sobre tu solicitud. Consulta el Aviso de privacidad. El formulario no crea una cuenta ni realiza ningún cobro.» | Enlace a `/privacidad`. |
| Confirmación | «Tu registro quedó completo … activar tu paquete inicial y comenzar a operar.» | Confirma la solicitud y el desbloqueo; explica la compra en la plataforma. «Continuar a la compra del paquete». | — |

No se modificaron la integración con HubSpot, `/api/landing`, Turnstile, el redireccionamiento automático ni el mecanismo de desbloqueo. El producto del formulario ahora arranca preseleccionado en KYC.

## 7. Otras tarjetas promocionales

La sección pasó a «Explora otros productos de JAAK Autoservicio». Se retiraron las leyendas «Desde $49/$99/$174/$14 MXN», la etiqueta «Oferta de lanzamiento» y el botón «Elegir producto y comprar por $99». Cada tarjeta (firma electrónica, Firma NOM-151 + KYC, INE/CURP, OCR, listas de riesgo) enlaza a `/autoservicio` con «Ver en el catálogo», sin importes (no hay ficha promocional aprobada). La nota de catálogo reutiliza `AUTOSERVICIO_COPY.notaCatalogo`. No se modificó ningún precio ni paquete de otros productos.

## 8. FAQ y metadatos

La FAQ (9 preguntas) se genera en `src/lib/kycTrialOffer.ts` y alimenta tanto la sección visible como el JSON-LD `FAQPage`: contenido del paquete, número de verificaciones, IVA (con subtotal, IVA y total), vigencia, uso desde Autoservicio, API/SDK y sandbox (reutiliza `FAQ_ACCESO_API_SDK`), qué sucede después de registrarse o comprar, ayuda y desbloqueo de la demo. Se retiraron las preguntas sobre escalar y sobre Enterprise, que contenían promesas no verificadas (créditos, portal, activación inmediata).

| Metadato | Anterior | Nuevo |
|---|---|---|
| Title | «Demo KYC JAAK \| Prueba verificación de identidad por $99 MXN» | «Prueba KYC Biométrico para Empresas \| JAAK Autoservicio» |
| Description | «… prueba un producto de autoservicio por $99 MXN …» | «Conoce la verificación de identidad KYC de JAAK con biometría facial, prueba de vida y evidencia digital desde una plataforma Web.» |
| Open Graph / Twitter | Con «$99 MXN» | Mismo title y description nuevos |
| Keywords | Incluían «paquete KYC $99» | Prueba KYC, KYC biométrico México, verificación de identidad para empresas, prueba de vida biométrica, plataforma KYC autoservicio, etc. |
| JSON-LD | Breadcrumb + FAQ (con «$99») | Breadcrumb + FAQ desde la misma fuente; **sin Offer/Product** |
| URL y canonical | `https://jaak.ai/kyc-demo-autoservicio` | Sin cambios |

El JSON-LD se movió de `layout.tsx` a `page.tsx` para poder construirlo con los datos del catálogo.

## 9. Estadísticas retiradas

Se buscaron en el código las cifras 100/78/52/38/22 (embudo), «72 hrs» y «1 min». No existe fuente, metodología ni evidencia en el repositorio, por lo que **no se presentan como métricas de JAAK**. Se sustituyeron por las etapas conceptuales del proceso manual (sin números), con la nota «Ilustración conceptual del proceso. No representa resultados medidos de JAAK», y por dos tarjetas descriptivas sin tiempos. También se suavizaron en la comparación «Revisión en horas o días / Flujo automatizado en minutos» y «Paquetes activables».

## 10. Vigencia y reglas de consumo

Se comunica solo lo confirmado: vigencia de un año, «conforme a las condiciones del paquete». **No se afirma** desde qué evento corre la vigencia, ni qué ocurre con unidades no usadas, errores, reintentos o abandono, ni dónde se consulta el saldo, ni qué evento consume una verificación. Son decisiones pendientes (AUD-06.13). No se modificó la lógica de consumo.

## 11. Medición y GTM

- Se **conservan los nombres de eventos existentes**: `view_kyc_autoservicio_landing`, `click_buy_99`, `click_buy_99_from_video`, `click_unlock_demo`, `unlock_form_started`, `click_play_video`, `video_started`, `video_reached_20s`, `video_locked`, `view_full_demo`, `select_trial_product`, `start_registration`, `submit_registration`, `checkout_started`, `click_contact_sales`.
- **Cambio de significado:** `click_buy_99` ahora se dispara en los enlaces «Seleccionar paquete Cobre KYC» (clic directo a la compra desde hero, header, CTA final y barra móvil, con `location`). Antes se disparaba al ir al formulario. Impacto: las etiquetas o reportes que lo usen como «clic de compra» ahora miden intención de compra real; los envíos de formulario siguen en `submit_registration` (un lead **no** se cuenta como compra). Se recomienda renombrar el evento en una iteración con GTM Preview (el nombre conserva «99»).
- **Nuevo:** `click_catalog` (con `location`) en los enlaces al catálogo.
- `select_trial_product` ahora se dispara al hacer clic en una tarjeta de «otros productos».
- No se envían datos personales, biométricos ni documentos a GTM (los parámetros son `product`, `location`, `selected_product`, `estimated_volume`).
- **No se declara validada la medición**: no hubo acceso a GTM Preview.

## 12. Pruebas

| Prueba | Resultado |
|---|---|
| Typecheck (`tsc --noEmit`) | Correcto |
| Lint | 0 errores; advertencias que ya existían en otros archivos |
| Pruebas unitarias | 159 de 159 (6 nuevas en `src/lib/kycTrialOffer.test.ts`) |
| Build de producción | Correcto |
| Oferta tomada del catálogo (5 verificaciones, $99, IVA $15.84, total $114.84) | Verificado por prueba unitaria y en el render |
| Sin oferta si el catálogo no trae KYC Cobre | Verificado por prueba unitaria (la landing cae a «Ver catálogo») |
| Render local (servidor de producción) a 375, 768 y 1280 px | HTTP 200; sin desbordamiento horizontal; capturas revisadas a 375 y 1280 px |
| Textos retirados («$99» como precio promocional, «40%», «Activar paquete», «Crear mi acceso», «Comprar por», «en minutos», «72 hrs»/«1 min») | No aparecen en la página |
| JSON-LD | 2 bloques válidos; FAQ de 9 preguntas igual a la visible; sin Offer |
| Enlaces | CTA de compra apuntan a `platform.jaak.ai/#/register/products` (plan `cobre`); tarjetas y CTA secundarios a `/autoservicio` |

**No ejecutado / limitaciones:** envío real del formulario (no se enviaron datos a HubSpot ni a Kairos), recorrido de registro, pago y activación, verificación en producción (el entorno no accede a jaak.ai), dispositivos físicos y GTM Preview.

## 13. Evidencias

Capturas locales a 375 y 1280 px del hero; salida de pruebas; búsqueda de texto en el repositorio; el commit de la rama.

## 14. Decisiones pendientes

| Área | Decisión |
|---|---|
| Finanzas | Confirmar que el cobro final coincide con $114.84 MXN (subtotal $99.00 + IVA $15.84) y la leyenda de importes. |
| Producto | Confirmar que Cobre KYC es el paquete de prueba vigente y qué incluye; aprobar la ficha (AUD-06.13). |
| Comercial | Confirmar si existió o existe alguna promoción vigente (con precio original, vigencia y aprobación); mientras tanto no se publica. Aprobar la lista de otros productos sin importes. |
| Marketing | Decidir si el redireccionamiento automático a la compra tras enviar el formulario se mantiene o se vuelve opcional (no se cambió por la restricción de formularios). Decidir renombrar `click_buy_99`. |
| Ingeniería | Confirmar el estado del plan `cobre` en el registro de producción y ejecutar AUD-04. |
| Legal / Privacidad | Revisar el texto de consentimiento del formulario y si debe existir una casilla separada de marketing. |

## 15. Estado de publicación

**No publicado.** Cambios en la rama `claude/compassionate-pascal-26uj4m`; sin PR ni despliegue. AUD-03 queda **En validación**.

## Matriz para el Plan Global

| ID | URL | Hallazgo | Texto anterior | Cambio realizado | Responsable | Estado | Evidencia | Dependencia |
|---|---|---|---|---|---|---|---|---|
| AUD-03-a | /kyc-demo-autoservicio | Oferta sin producto, unidades, IVA y total | «Paquete inicial JAAK $99 MXN» | Tarjeta Cobre KYC: 5 verificaciones, $99.00 + IVA $15.84 = $114.84 MXN, vigencia, acceso, exclusiones, soporte | Marketing / Ingeniería | Implementado en rama; sin publicar | Este reporte, §4–5 | AUD-06.13 |
| AUD-03-b | /kyc-demo-autoservicio | Descuento sin sustento | «40% de descuento por lanzamiento» | Retirado | Marketing | Implementado en rama; sin publicar | §2 | Aprobación Comercial |
| AUD-03-c | /kyc-demo-autoservicio | CTA y formulario con promesa distinta a la acción | «Activar paquete por $99» / «Crear mi acceso y continuar» | «Seleccionar paquete Cobre KYC» (compra) y «Solicitar información de la prueba KYC» (lead) | Marketing / Ingeniería | Implementado en rama; sin publicar | §6 | AUD-04 |
| AUD-03-d | /kyc-demo-autoservicio | Otros productos con precios de entrada | «Desde $49/$99/$174/$14 MXN» | Sección «Explora otros productos» sin importes, enlaces al catálogo | Marketing | Implementado en rama; sin publicar | §7 | Fichas por SKU |
| AUD-03-e | /kyc-demo-autoservicio | Estadísticas sin fuente | Embudo 100/78/52/38/22; 72 h / 1 min | Ilustración conceptual sin cifras | Marketing | Implementado en rama; sin publicar | §9 | — |
| AUD-03-f | /kyc-demo-autoservicio | FAQ con promesas no verificadas | «Activación automática… en minutos» | 9 preguntas desde una fuente; JSON-LD consistente | Marketing / Ingeniería | Implementado en rama; sin publicar | §8 | AUD-04 |
| AUD-03-g | /kyc-demo-autoservicio | Metadatos con «$99» | Title y description con precio | Title y description sin precio; sin Offer | Marketing | Implementado en rama; sin publicar | §8 | AUD-06.13 |
| AUD-03-h | /kyc-demo-autoservicio | Medición | Eventos `click_buy_99` y otros | Eventos conservados; `click_buy_99` mide clic a compra; nuevo `click_catalog` | Ingeniería | Pendiente de GTM Preview | §11 | Acceso a GTM |

## Relación con el Plan Global

- **AUD-03:** claridad de oferta en la landing. Implementada en rama, en validación.
- **AUD-06.13:** ficha aprobada del SKU Cobre KYC y sus condiciones comerciales. **Sigue abierta**: la landing usa datos del catálogo, no una ficha aprobada.
- **AUD-04:** activación real después del pago. **Sigue abierta**: no se ejecutó ni se simuló.

Corregir los textos de la landing no cierra ninguna de las dos actividades independientes.
