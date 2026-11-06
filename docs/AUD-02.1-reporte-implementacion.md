# AUD-02.1 — Precios: conectar el acceso API de Crecimiento con el setup requerido

**Prioridad:** P0 · **Responsable:** Marketing · **Aprobación:** Producto y Comercial · **Fecha objetivo:** 13/11/2026
**Rama:** `claude/compassionate-pascal-26uj4m` (reiniciada desde `main` tras el merge de la PR #233) · **Fecha:** 2026-11-06
**Estado:** Implementado en código · **En validación** (sin PR, sin desplegar). **AUD-02 (T&C) sigue en pausa** por revisión legal.

## A. Alcance
Solo `/precios`: comparativa de modalidades y FAQ (visible y JSON-LD). Sin importes, SLA, plazos ni condiciones no aprobadas. No se tocaron `/terminos`, checkout, catálogo, tarifas, Autoservicio Enterprise ni documentación.

## B. Cambios

| ID | Sección | Antes | Ahora | Archivo |
|---|---|---|---|---|
| AUD-02.1.a | Comparativa · fila nueva | (no existía) | «Setup fee (integración API/SDK)»: Autoservicio «No aplica (uso Web)»; Crecimiento «Aplica a la integración API/SDK»; Enterprise y Alianzas «Aplica a la integración API/SDK, según propuesta» | `PreciosClient.tsx`, `commercial-copy.ts` |
| AUD-02.1.b | Nota bajo la comparativa | (no existía) | Nota: la integración API/SDK requiere setup fee definido en la propuesta comercial según el alcance, junto con el esquema de consumo de Crecimiento, Enterprise y Alianzas; Autoservicio es solo Web y no requiere setup fee; el sandbox no se habilita automáticamente en ningún plan (se evalúa con un especialista) | `PreciosClient.tsx`, `commercial-copy.ts` |
| AUD-02.1.c | FAQ «¿Hay cuota de configuración (setup fee)?» | «…considera una cuota de configuración (setup fee), conforme a la propuesta comercial.» | Aclara qué planes la requieren (Crecimiento, Enterprise y Alianzas, por integración API/SDK) y que importe y condiciones se definen en la propuesta junto con el esquema de consumo | `PreciosClient.tsx`, `precios/page.tsx`, `commercial-copy.ts` |
| AUD-02.1.d | FAQ nueva | — | «¿Cómo se habilita la API o el SDK en Crecimiento, Enterprise o Alianzas?»: evaluación con el equipo comercial → alcance, setup fee y esquema de consumo → accesos conforme a lo contratado (sin plazos) | ídem |
| AUD-02.1.e | FAQ nueva | — | «¿Incluye algún plan un ambiente de pruebas (sandbox)?»: no de forma automática; se evalúa con un especialista según tipo de cliente, paquete y necesidades; Autoservicio no incluye acceso automático | ídem |

Las FAQ ahora salen de constantes compartidas (`FAQ_SETUP_FEE`, `FAQ_HABILITACION_API`, `FAQ_SANDBOX_PRECIOS`) para que el contenido visible y el JSON-LD no puedan divergir.

**Decisión de redacción a confirmar:** la fila del plan dice «API/SDK/sandbox requieren setup fee». Se aplicó la definición posterior aprobada: **API y SDK requieren setup fee; el sandbox se evalúa con un especialista y no se asocia al setup fee** (así se corrigió el aviso de documentación en AUD-02).

## C. Pruebas
| Prueba | Resultado |
|---|---|
| `tsc --noEmit` | Correcto |
| `npm run lint` | 0 errores; 2 advertencias previas |
| `npm test` | 18 archivos, 153/153 |
| `npm run build` | Correcto |
| Render de `/precios` | Presentes fila, nota y las 4 FAQ de acceso; sin «SLA», «24/7», «en minutos», «en días» ni importes de setup (la única coincidencia de `$` junto a «setup fee» es el precio ya existente de Autoservicio «sin setup fee») |
| JSON-LD | 11 bloques válidos; FAQPage con 10 preguntas, sin duplicadas; todas visibles en el HTML con la misma respuesta |
| Responsive 375 / 768 / 1280 px | `scrollWidth` igual al viewport |
| Visual (escritorio emulado) | Tabla y nota revisadas a 375 y 1280 px |
Limitaciones: sin dispositivo físico; las FAQ se comprobaron en HTML/JSON-LD, no con captura.

## D. Hallazgos de los T&C de Autoservicio compartidos (para retomar AUD-02)
Fuente: `JAAK_Terminos_y_Condiciones_Autoservicio_2.docx` (nov. 2026, en revisión legal). No se modificó nada por estos hallazgos; requieren decisión.

| # | Tema | T&C dice | Sitio dice hoy | Acción sugerida |
|---|---|---|---|---|
| H1 | **White Label en Autoservicio** | Cl. 1.3, 2.1 y Anexo 1: Autoservicio es «uso exclusivamente web **con marca blanca**» | `/precios`, `/comprar`, `/autoservicio` y copy compartido: «No incluye White Label» | Decidir cuál prevalece y alinear |
| H2 | **Setup fee opcional en Autoservicio** | Cl. 5.2 y Anexo 1: «no aplica; opcional si quiere integrar y solo da documentación» (sin acompañamiento). Choca con Cl. 2.1 («no genera Setup fee») | «Autoservicio no puede integrar; evalúe Crecimiento/Enterprise/Alianzas» | Aclarar con Legal/Producto si Autoservicio puede pagar un setup solo por documentación |
| H3 | **Reembolsos** | Cl. 3.6: se puede solicitar reembolso (procede según el caso) | FAQ de `/precios` (visible y JSON-LD): «No son reembolsables» | Alinear la FAQ tras aprobar los T&C |
| H4 | **Vigencia** | Anexo 1: 12 meses «desde que el saldo está habilitado» | FAQ: «12 meses desde la compra» | Alinear redacción |
| H5 | **Canal de soporte** | Cl. 6.1/6.4: correo y portal; «el correo o el portal son el único medio válido para reportar incidencias» | `/soporte/autoservicio` ofrece WhatsApp como canal de solicitud | Decidir si WhatsApp es canal válido de reporte |
| H6 | **Atención 24/7** | Cl. 6.3: servicio adicional, por cotización | El sitio evita mencionarla | Posible copy: «disponible como servicio adicional por cotización» (requiere aprobación) |
| H7 | **Autoservicio Enterprise** | Mensual recurrente, plazo mínimo 12 meses, 100–1,000 unidades/mes, Web+API+SDK, setup fee obligatorio de pago único con acompañamiento y garantía de 15 días (cifras, horas y plazos) | `/autoservicio-enterprise` sin cambios (paquetes inactivos); no se menciona en `/precios` | No publicar cifras ni plazos sin aprobación; homologar al activarse |
| H8 | **Sandbox y datos** | Cl. 5.2–5.3: un enlace a documentación o sandbox no concede acceso ni gratuidad; el sandbox se usa con datos sintéticos o de prueba autorizados, sin datos reales sin habilitación | Se retiró la afirmación de «identidades reales» del mensaje comercial | Confirmar con Ingeniería/Privacidad antes de publicar la restricción |
| H9 | **Crecimiento y Alianzas** | No aparecen en los T&C (0 menciones); «Enterprise» solo como cotización (Cl. 2.6) | `/precios` los describe con setup fee y bolsa anual | Sus condiciones no están respaldadas por este documento: definir fuente contractual |

## E. Pendientes
- **Aprobación de Producto y Comercial** de la comparativa, la nota y las FAQ.
- **Decisiones H1–H9** (en particular H1 y H3, que contradicen contenido ya publicado).
- Publicación y verificación en móvil y escritorio tras el despliegue (criterio de cierre del plan).
- AUD-02 (Términos y Condiciones): en pausa hasta que se retome.

**Estado:** implementado y probado en la rama; no desplegado. AUD-02.1 queda **En validación**.
