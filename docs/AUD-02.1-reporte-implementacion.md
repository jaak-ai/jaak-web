# AUD-02.1 — Precios: conectar el acceso API de Crecimiento con el setup requerido

**Prioridad:** P0 · **Responsable:** Marketing · **Aprobación:** Producto y Comercial · **Fecha objetivo:** 13/11/2026
**Rama:** `claude/compassionate-pascal-26uj4m` (desde `main`, tras la PR #233) · **Fecha:** 2026-11-06
**Estado:** Implementado en código · **En validación** (pendiente de aprobación, publicación y verificación). **AUD-02 (T&C) sigue en pausa** por la revisión legal en curso.

## A. Criterio editorial y decisiones recibidas
Tras revisar los T&C de Autoservicio (nov. 2026, en revisión), se aplicaron estas decisiones de Marketing:

1. **White Label:** Autoservicio incluye marca blanca **únicamente en la plataforma web**.
2. **Reembolsos:** aplica lo que dicen los T&C, solo para Autoservicio; se comunica en **letra pequeña**, sin detallar.
3. **Setup fee:** es **opcional en Autoservicio**; en Crecimiento, Enterprise y Alianzas la integración API/SDK lo requiere (se define en la propuesta).
4. **Soporte:** el canal de los T&C aplica a Autoservicio; para Crecimiento y Alianzas se define con el especialista comercial.
5. **Información mínima y clara:** las condiciones de Crecimiento, Enterprise y Alianzas son contractuales; la web no las detalla.

Sin importes, SLA, plazos ni condiciones no aprobadas. No se tocaron `/terminos`, checkout, catálogo, tarifas, Autoservicio Enterprise ni documentación.

## B. Cambios

| ID | Ubicación | Antes | Ahora | Archivo |
|---|---|---|---|---|
| .1 | `/precios` · comparativa, fila nueva | (no existía) | «Setup fee (integración API/SDK)»: Autoservicio «Opcional, si deseas integrar»; Crecimiento «Aplica a la integración API/SDK»; Enterprise y Alianzas «…según propuesta» | `PreciosClient.tsx`, `commercial-copy.ts` |
| .2 | `/precios` · fila White Label | Autoservicio «No incluido» | Autoservicio «Incluido, solo en la plataforma Web» | `PreciosClient.tsx` |
| .3 | `/precios` · tarjeta Autoservicio | «Modalidad exclusivamente Web: no incluye API, SDK ni White Label» | «Uso exclusivo en la plataforma web, con marca blanca (White Label). No incluye API ni SDK» | `PreciosClient.tsx` |
| .4 | `/precios` · nota bajo la tabla | (no existía) | 3 frases: setup opcional en Autoservicio; requerido para API/SDK en Crecimiento, Enterprise y Alianzas (según propuesta); sandbox no automático | `PreciosClient.tsx`, `commercial-copy.ts` |
| .5 | `/precios` · letra pequeña | (no existía) | Vigencia, reembolsos y condiciones de compra de Autoservicio conforme a sus T&C; soporte de Crecimiento/Enterprise/Alianzas con el especialista | ídem |
| .6 | FAQ «¿Hay cuota de configuración (setup fee)?» | «Autoservicio no la requiere… considera setup…» | Opcional en Autoservicio; requerida para API/SDK en Crecimiento, Enterprise y Alianzas, con importe y condiciones en la propuesta | `commercial-copy.ts` (visible y JSON-LD) |
| .7 | FAQ «¿Puedo utilizar API o SDK al comprar un paquete de Autoservicio?» | «No… evalúa Crecimiento, Enterprise o Alianzas» | Autoservicio se usa en web y no incluye API/SDK; el setup fee es opcional y no incluye acompañamiento técnico; para acompañamiento o condiciones particulares, orienta el equipo comercial | ídem |
| .8 | FAQ nueva «¿Incluye algún plan un ambiente de pruebas (sandbox)?» | — | No de forma automática; se evalúa con un especialista | ídem |
| .9 | FAQ «¿Los paquetes caducan o son reembolsables?» | «Vencen a 12 meses desde la compra. No son reembolsables.» | Vigencia de 12 meses desde que el saldo está habilitado; unidades no utilizadas se pierden; reembolsos según los T&C de Autoservicio | ídem |
| .10 | JSON-LD de `/precios` | `hasMerchantReturnPolicy: MerchantReturnNotPermitted` en las ofertas | Retirado (declaraba «sin reembolsos», contrario a los T&C). Con comentario para no reintroducirlo sin validación legal | `precios/page.tsx` |
| .11 | `/autoservicio` · nota | «No incluye API, SDK ni White Label…» | Web con marca blanca; sin API ni SDK; setup opcional y acompañamiento con el equipo comercial | `commercial-copy.ts` |
| .12 | `/comprar` · tarjeta Autoservicio | «No incluye API, SDK ni White Label en el paquete estándar»; «…mediante contratación asistida» | «Con marca blanca (White Label) en la plataforma web; no incluye API ni SDK»; «Para integrar por API o SDK, consulta con nuestro equipo comercial» | `comprar/page.tsx` |

Se había propuesto una FAQ adicional sobre cómo se habilita la API; se **retiró** para no mostrar de más.

## C. Pruebas
| Prueba | Resultado |
|---|---|
| `tsc --noEmit`, lint | Correcto; 0 errores, 2 advertencias previas |
| `npm test` | 18 archivos, 153/153 |
| `npm run build` | Correcto |
| Render (`/precios`, `/comprar`, `/autoservicio`) | Textos nuevos presentes; no reaparecen «No son reembolsables», «ni White Label», «MerchantReturn» ni «SLA/24/7» |
| JSON-LD | 11 bloques válidos; sin `MerchantReturnPolicy`; FAQPage con 9 preguntas, sin duplicadas, todas visibles con la misma respuesta |
| Responsive 375 / 768 / 1280 px | `scrollWidth` igual al viewport en las tres páginas |
| Visual (escritorio emulado) | Tabla, nota y letra pequeña revisadas a 375 y 1280 px |
Limitaciones: sin dispositivo físico; FAQ verificadas en HTML/JSON-LD, no con captura.

## D. Pendientes y observaciones
| # | Tema | Estado |
|---|---|---|
| 1 | Aprobación de Producto y Comercial de la comparativa, nota, letra pequeña y FAQ | Pendiente |
| 2 | **JSON-LD:** al retirar la política de devoluciones se pierde un campo recomendado de Google para listados de producto; no afecta a la página. Reversible si Legal define una política declarable | Informativo |
| 3 | **Canal de soporte de Autoservicio:** los T&C indican correo y portal como único medio de reporte de incidencias; `/soporte/autoservicio` ofrece también WhatsApp | Pendiente de decisión |
| 4 | **Atención 24/7:** los T&C la describen como servicio adicional por cotización; el sitio no la menciona | Sin cambio (opcional) |
| 5 | **Vigencia en `/autoservicio/prueba`:** «12 meses desde la compra» vs «desde que el saldo está habilitado» (T&C) | Fuera de alcance (AUD-04); alinear después |
| 6 | **Autoservicio Enterprise:** cifras, horas y plazos del T&C no se publican; página sin cambios | Sin cambio |
| 7 | Crecimiento y Alianzas no aparecen en los T&C de Autoservicio: sus condiciones dependen del contrato | Informativo |
| 8 | Publicación y verificación en móvil y escritorio tras el despliegue | Pendiente |
| 9 | AUD-02 (Términos y Condiciones): en pausa hasta nuevo aviso | En pausa |

**Estado:** implementado y probado en la rama; AUD-02.1 queda **En validación**.
