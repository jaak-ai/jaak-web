# AUD-05 — Reporte de implementación

**Actividad:** Definir qué personalización incluye cada modalidad y reconciliar páginas (White Label en Autoservicio) · **Prioridad:** P0
**Responsable:** Producto · **Participantes:** Comercial y Marketing · **Fecha objetivo:** 13/11/2026
**Rama:** `claude/compassionate-pascal-26uj4m` (desde `main` en `a6ab3fb`) · **Fecha:** 06/11/2026

## 1. Resumen ejecutivo

Con la definición de Producto (Autoservicio incluye White Label), se reconciliaron las páginas comerciales que lo excluían o lo presentaban como reservado a contratación asistida. Se actualizaron `/autoservicio` (bloque nuevo y tarjeta de Firma Simple), `/precios` (tarjeta, tabla, FAQ y JSON-LD), `/comprar`, `/plataforma/firma-electronica`, la Home, Signa y su comparación, y la landing SEO de marca blanca. Se mantuvo la distinción entre personalización de marca e integración API/SDK (que sigue requiriendo setup fee) y no se tocaron precios, unidades, checkout ni Términos. Los textos salen de una fuente única (`WHITE_LABEL_COPY` y `FAQ_WHITE_LABEL` en `src/config/commercial-copy.ts`).

**Estado:** implementado en la rama, sin publicar. AUD-05 permanece **En validación** hasta completar QA en producción, la aprobación de Producto y Comercial y la publicación.

## 2. Definiciones de Producto

- Autoservicio incluye White Label: logotipo, colores corporativos, marca personalizada en la experiencia de firma, correos y mensajes personalizados, y experiencia de firma sin marca visible de JAAK.
- No es una integración API o SDK; no se requiere integración para usarlo. Autoservicio sigue siendo exclusivamente Web.
- Sin tarifas ni condiciones comerciales adicionales.
- No se presenta como exclusivo de Enterprise ni de contratación asistida.
- Las capacidades corresponden a la experiencia de firma; no se extienden a KYC ni OCR sin verificación de Producto.

**Cambio de criterio:** reemplaza lo aplicado en AUD-02.1 y AUD-02.2 («White Label no incluido» en Autoservicio). Esos reportes quedan como histórico.

## 3. Contradicciones encontradas

| # | Contradicción | Dónde |
|---|---|---|
| C1 | La tabla comparativa de Precios decía «No incluido» para White Label en Autoservicio. | /precios |
| C2 | La tarjeta de Autoservicio decía «No incluye API, SDK ni White Label». | /precios |
| C3 | La tarjeta de Autoservicio de /comprar decía «No incluye API, SDK ni White Label». | /comprar |
| C4 | La nota del catálogo de Autoservicio decía «No incluye API, SDK ni White Label». | /autoservicio (encabezado) |
| C5 | La tarjeta de Firma Simple no mencionaba White Label. | /autoservicio (catálogo) |
| C6 | La landing de prueba KYC decía «No incluye API, SDK, White Label estándar ni sandbox automático». | /kyc-demo-autoservicio, FAQ |
| C7 | Signa y su comparación presentaban White Label solo «conforme a la propuesta comercial». | /signa, /signa/comparacion, FAQ |
| C8 | La Home decía «conforme al alcance comercial contratado» sin indicar que Autoservicio lo incluye. | Home |
| C9 | El texto de personalización de /plataforma/firma-electronica no indicaba su inclusión en Autoservicio. | /plataforma/firma-electronica |

## 4. Páginas revisadas

Modificadas: `/autoservicio`, `/precios`, `/comprar`, `/plataforma/firma-electronica`, Home, `/signa`, `/signa/comparacion`, `/firma-digital-marca-blanca`, `/kyc-demo-autoservicio`.
Revisadas sin cambios: `/soluciones/recursos-humanos` («Tu proceso de firma. Tu marca.», sin exclusividad), `/firma-electronica` (solo enlace a la página de marca blanca), componente «¿Cómo funciona?» de Autoservicio (el paso de firma ya indica logo en documentos y notificaciones «sin costo adicional»).
Revisadas con observación para Producto (no modificadas, fuera de alcance): `/soluciones/kyc-igaming-mexico` y `/salud/software-clinico` (presentan «marca blanca» junto a API/SDK como forma de implementación) y la pestaña KYC del «¿Cómo funciona?» (afirma marca propia en KYC).

## 5. Archivos modificados

`src/config/commercial-copy.ts` · `src/app/autoservicio/page.tsx` · `src/data/autoservicio-catalogo.ts` · `src/app/precios/PreciosClient.tsx` · `src/app/precios/page.tsx` · `src/app/comprar/page.tsx` · `src/components/FirmaThemeShell.tsx` · `src/app/plataforma/firma-electronica/page.tsx` · `src/components/HomepageHero.tsx` · `src/components/HomepageProducts.tsx` · `src/app/signa/page.tsx` · `src/app/signa/comparacion/page.tsx` · `src/app/signa/schema.tsx` · `src/app/firma-digital-marca-blanca/page.tsx` · `src/lib/kycTrialOffer.ts` · `src/app/kyc-demo-autoservicio/LandingClient.tsx` · `docs/AUD-05-matriz-white-label.md` (nuevo) · `docs/AUD-05-reporte-implementacion.md` (nuevo).

## 6. Textos anteriores y nuevos

| Ubicación | Texto anterior | Texto nuevo |
|---|---|---|
| /precios, tabla, White Label, Autoservicio | «No incluido» | «Incluido: logotipo, colores, correos, mensajes y experiencia de firma personalizada» |
| /precios, tarjeta Autoservicio | «Uso exclusivo en la plataforma web. No incluye API, SDK ni White Label» | «White Label incluido: logotipo, colores, correos y mensajes» y «Uso exclusivo en la plataforma web. No incluye API ni SDK» |
| /precios, FAQ y JSON-LD | (no existía) | «¿Autoservicio incluye White Label?»: sí, para la experiencia de firma, sin integración API/SDK ni cargo adicional; en Crecimiento, Enterprise y Alianzas se define según el alcance contratado |
| /comprar, tarjeta Autoservicio | «No incluye API, SDK ni White Label» | «White Label incluido; no incluye API ni SDK» |
| /autoservicio, nota del encabezado | «… No incluye API, SDK ni White Label. Para integrar … setup fee …» | «… e incluye White Label (logotipo, colores, correos y mensajes personalizados). No incluye API ni SDK: para integrar … setup fee …» |
| /autoservicio, Firma Simple | (sin referencia) | «Firma electrónica Web con White Label incluido: tu logotipo, colores corporativos, correos y mensajes de marca» |
| /autoservicio, bloque nuevo | (no existía) | Etiqueta «White Label incluido en Autoservicio.»; título «Tu marca en cada experiencia de firma.»; descripción de personalización; las seis capacidades; aclaración de que no requiere API/SDK ni cargo adicional |
| /plataforma/firma-electronica | «Personalizable con tu logo y marca / Tus clientes ven tu identidad, no la nuestra.» | «Firma electrónica con la identidad de tu empresa» con la descripción sugerida y la nota de que API y SDK se contratan por separado; Autoservicio: «con White Label incluido» |
| /plataforma/firma-electronica, JSON-LD | «Personalizable con marca propia» | «White Label incluido en Autoservicio: logotipo, colores, correos y mensajes personalizados» |
| Home, callout | «Disponible en marca blanca — tu logo, tus colores y mensajes personalizados.» | «White Label incluido en Autoservicio — tu logotipo, colores, correos y mensajes personalizados.» |
| Home, banner | «… conforme al alcance comercial contratado.» | «Autoservicio incluye White Label para la firma electrónica … En Crecimiento, Enterprise y Alianzas se define conforme al alcance contratado.» |
| Signa, tarjeta, comparación y FAQ | «Posibilidad de personalización … conforme a la propuesta comercial» | Personalización White Label incluida en Autoservicio; en propuestas comerciales, conforme a su alcance |
| /firma-digital-marca-blanca, descripción y tarjeta | (sin mención de Autoservicio) | «White Label incluido en Autoservicio» y «sin integración API o SDK ni cargo adicional» |
| /kyc-demo-autoservicio, tarjeta y FAQ | «No incluye API, SDK, White Label estándar ni sandbox automático» | «No incluye API, SDK ni sandbox automático» (no se afirma ni se niega White Label para KYC) |
| Constantes comerciales | «White Label: opción de personalización conforme al alcance comercial contratado» y notas con «ni White Label» | Texto de personalización de marca incluida en Autoservicio; White Label separado de la integración API/SDK |

## 6.1 Ajuste de UX posterior (ventana flotante)

Para no saturar las páginas de texto, el detalle de White Label pasó a una **ventana flotante** con el estilo del modal de «¿Cómo funciona?» (componente `WhiteLabelInfo`, fuente `WHITE_LABEL_COPY`; se cierra con la X, «Entendido», clic fuera o Escape). En la página queda solo un aviso corto:

| Ubicación | Antes (AUD-05, PR #242) | Ahora |
|---|---|---|
| /autoservicio | Sección con título, descripción, aclaración y seis recuadros | Franja compacta «White Label incluido en Autoservicio. Tu marca en cada experiencia de firma.» con botón «Ver qué incluye» |
| /precios, tabla | «Incluido: logotipo, colores, correos, mensajes y experiencia de firma personalizada» | «Incluido» y enlace «Ver qué incluye» |
| /precios, tarjeta | «White Label incluido: logotipo, colores, correos y mensajes» | «White Label incluido en la firma electrónica» |
| /plataforma/firma-electronica | Párrafo largo con la nota de API y SDK | Una línea («Tu logotipo, colores, correos y mensajes en la experiencia de firma. White Label incluido en Autoservicio.») y «Ver qué incluye» |
| /autoservicio, Firma Simple | «Firma electrónica Web con White Label incluido: tu logotipo, colores corporativos, correos y mensajes de marca» | «Firma electrónica Web con White Label incluido» |
| Home (banner), Signa, marca blanca, nota del catálogo y FAQ | Frases más largas | Frases acortadas |

El contenido completo (seis capacidades y la aclaración de que no requiere API/SDK ni cargo adicional) sigue disponible en la ventana flotante.

## 7. Matriz White Label

Ver `docs/AUD-05-matriz-white-label.md`: seis capacidades incluidas en Autoservicio, lo publicado para Crecimiento, Enterprise y Alianzas, diferencias por confirmar (D1–D5) y la separación entre producto y condiciones comerciales.

## 8. Evidencias de QA y resultados de pruebas

| Prueba | Resultado |
|---|---|
| Typecheck (`tsc --noEmit`) | Correcto |
| Lint | 0 errores; advertencias que ya existían |
| Pruebas unitarias | 159 de 159 |
| Build de producción | Correcto |
| Render local (servidor de producción) de /autoservicio, /precios, /plataforma/firma-electronica, /firma-digital-marca-blanca, Home, /signa, /signa/comparacion, /comprar y /kyc-demo-autoservicio a 375, 768 y 1280 px | HTTP 200 en todas; capturas revisadas de /autoservicio y /precios a 375 y 1280 px |
| Desbordamiento horizontal | Ninguno, salvo `/plataforma/firma-electronica` (ver nota) |
| JSON-LD de /precios | 11 bloques válidos; FAQ de 10 preguntas con la de White Label igual a la visible |
| Búsqueda final de contradicciones en el código | Sin textos que excluyan White Label de Autoservicio ni lo presenten como exclusivo de Enterprise, API o SDK |
| Tarifas, unidades, checkout y lógica de compra | Sin cambios (no aparecen en el diff) |

**Nota — desbordamiento previo:** `/plataforma/firma-electronica` tiene desbordamiento horizontal en los tres anchos, causado por la tabla comparativa de `FirmaComparisonTable` (ancho mínimo de 900 px) y la barra de pestañas. No está relacionado con AUD-05 (esos componentes no se modificaron). Se recomienda corregirlo en una actividad aparte.

**Comprobaciones de AUD-05:** (1) Autoservicio anuncia White Label incluido; (2) Precios no lo excluye; (3) Firma Electrónica no lo presenta como exclusivo de Enterprise; (4) los beneficios descritos son las seis capacidades confirmadas; (5) API y SDK siguen diferenciados (setup fee); (6) no se modificaron tarifas ni lógica de compra.

**No ejecutado:** verificación en producción, dispositivos físicos y revisión de que cada capacidad funcione realmente en la plataforma (se comunicó la definición de Producto).

## 9. Pendientes de aprobación

| Área | Pendiente |
|---|---|
| Producto | Aprobar los textos y las diferencias D1–D5 de la matriz; confirmar el alcance de «sin marca visible de JAAK»; verificar si aplica a KYC/OCR (hoy no se afirma). |
| Comercial | Confirmar lo publicado para Crecimiento, Enterprise y Alianzas y si existen personalizaciones adicionales que enumerar. |
| Marketing | Revisar el bloque nuevo de /autoservicio y la coherencia SEO («firma electrónica con marca blanca», «White Label para firma electrónica»). |
| Ingeniería | Corregir el desbordamiento de /plataforma/firma-electronica; revisar las páginas sectoriales KYC iGaming y Software clínico. |
| Legal | Las condiciones de Autoservicio (T&C) y el borrador de AUD-02.2 describen el criterio anterior de White Label; alinearlos. |

## 10. Estado de publicación

**No publicado.** Cambios en la rama `claude/compassionate-pascal-26uj4m`; sin PR ni despliegue. AUD-05 queda **En validación** hasta completar la verificación en producción, la aprobación de Producto y Comercial y la publicación.

## Tabla final

| ID | URL | Sección | Cambio realizado | Archivo | Estado | Evidencia | Validación pendiente |
|---|---|---|---|---|---|---|---|
| AUD-05-a | /precios | Tabla comparativa | White Label de Autoservicio: «Incluido: logotipo, colores, correos, mensajes y experiencia de firma personalizada» | PreciosClient.tsx, commercial-copy.ts | Implementado en rama; sin publicar | §6, captura 375/1280 | Producto, Comercial |
| AUD-05-b | /precios | Tarjeta, FAQ y JSON-LD | Tarjeta con White Label incluido; FAQ nueva visible y en JSON-LD | PreciosClient.tsx, precios/page.tsx | Implementado en rama; sin publicar | §6, §8 | Marketing |
| AUD-05-c | /autoservicio | Bloque de beneficios | «Tu marca en cada experiencia de firma.» con las seis capacidades | autoservicio/page.tsx, commercial-copy.ts | Implementado en rama; sin publicar | §6, captura 375/1280 | Producto |
| AUD-05-d | /autoservicio | Tarjeta de Firma Simple y nota | White Label incluido en la tarjeta; nota sin «ni White Label» | autoservicio-catalogo.ts, commercial-copy.ts | Implementado en rama; sin publicar | §6 | Producto |
| AUD-05-e | /comprar | Tarjeta Autoservicio | «White Label incluido; no incluye API ni SDK» | comprar/page.tsx | Implementado en rama; sin publicar | §6 | Comercial |
| AUD-05-f | /plataforma/firma-electronica | Hero y JSON-LD | Texto «Firma electrónica con la identidad de tu empresa» y nota de API/SDK | FirmaThemeShell.tsx, page.tsx | Implementado en rama; sin publicar | §6 | Producto |
| AUD-05-g | Home | Callout y banner | White Label incluido en Autoservicio; Crecimiento, Enterprise y Alianzas según alcance | HomepageHero.tsx, HomepageProducts.tsx | Implementado en rama; sin publicar | §6 | Marketing |
| AUD-05-h | /signa, /signa/comparacion | Tarjeta, tabla y FAQ | Sin sugerir exclusividad de propuesta | signa/page.tsx, comparacion/page.tsx, schema.tsx | Implementado en rama; sin publicar | §6 | Producto |
| AUD-05-i | /firma-digital-marca-blanca | Metadatos y tarjeta | Referencia a White Label incluido en Autoservicio | firma-digital-marca-blanca/page.tsx | Implementado en rama; sin publicar | §6 | Marketing |
| AUD-05-j | /kyc-demo-autoservicio | Tarjeta y FAQ | Se retira «White Label estándar» de las exclusiones | kycTrialOffer.ts, LandingClient.tsx | Implementado en rama; sin publicar | §6 | Producto |
| AUD-05-k | Sectoriales KYC iGaming y Software clínico | Menciones de «marca blanca» | Sin cambios; observación para Producto | — | Pendiente de revisión | Matriz D3 | Producto |
| AUD-05-l | /plataforma/firma-electronica | Desbordamiento horizontal previo | Sin cambios; recomendación | FirmaComparisonTable.tsx | Pendiente (fuera de alcance) | §8 | Ingeniería |
