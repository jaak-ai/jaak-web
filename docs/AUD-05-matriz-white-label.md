# AUD-05 — Matriz White Label

**Actividad:** Definir qué personalización incluye cada modalidad y reconciliar páginas · **Prioridad:** P0 · **Responsable:** Producto · **Participantes:** Comercial y Marketing
**Fecha de la matriz:** 06/11/2026 · **Fuente de la definición:** instrucción de Producto de AUD-05 (06/11/2026).
**Estado:** vigente en la rama de trabajo; sin publicar. Pendiente de aprobación de Producto y Comercial.

> **Cambio de criterio.** Esta definición reemplaza el criterio aplicado en AUD-02.1 y AUD-02.2 («White Label no incluido en Autoservicio»). Los documentos de esas actividades describen el criterio anterior y quedan como histórico.

## 1. Definición de Producto

- JAAK Autoservicio **incluye White Label**.
- White Label es una **capacidad de personalización de marca**; no equivale a contratar una integración API o SDK.
- Autoservicio sigue siendo **exclusivamente Web**. No se requiere API ni SDK para usar las funciones White Label confirmadas.
- No hay tarifas ni condiciones comerciales adicionales para estas capacidades.
- Las capacidades confirmadas corresponden a la **experiencia de firma electrónica**. No se extienden a KYC, OCR ni otros productos sin verificación de Producto.

## 2. Autoservicio: capacidades confirmadas

| # | Capacidad | Estado | Producto al que aplica | Dónde se comunica |
|---|---|---|---|---|
| 1 | Personalización del logotipo de la empresa | Incluido | Firma electrónica | /autoservicio (bloque y tarjeta de Firma Simple), /precios (tarjeta y tabla), /plataforma/firma-electronica, Home |
| 2 | Personalización de colores corporativos | Incluido | Firma electrónica | ídem |
| 3 | Marca personalizada durante la experiencia de firma | Incluido | Firma electrónica | /autoservicio, /plataforma/firma-electronica, /firma-digital-marca-blanca |
| 4 | Personalización de correos electrónicos | Incluido | Firma electrónica | /autoservicio, /precios, /plataforma/firma-electronica |
| 5 | Personalización de mensajes | Incluido | Firma electrónica | ídem |
| 6 | Experiencia de firma sin marca visible de JAAK | Incluido | Firma electrónica | /autoservicio, /precios (FAQ) |

Textos de referencia: constante `WHITE_LABEL_COPY` y `FAQ_WHITE_LABEL` en `src/config/commercial-copy.ts` (fuente única).

## 3. Crecimiento, Enterprise y Alianzas

| Modalidad | Lo que se publica hoy | Dónde | Estado |
|---|---|---|---|
| Crecimiento | «White Label opcional, según el alcance acordado» | /precios (tarjeta y tabla) | Conservado sin cambios |
| Enterprise | «Opcional, según propuesta» / «Opciones de White Label según la propuesta contratada» | /precios (tabla), /comprar | Conservado sin cambios |
| Alianzas | «White Label opcional, según la propuesta contratada» | /precios (tarjeta y tabla) | Conservado sin cambios |
| Proyectos con propuesta (Signa y comparación) | «Personalización White Label …, incluida en Autoservicio; en propuestas comerciales, conforme a su alcance» | /signa, /signa/comparacion, FAQ de Signa | Actualizado para no sugerir exclusividad |
| Home | «Autoservicio incluye White Label para la firma electrónica … En Crecimiento, Enterprise y Alianzas se define conforme al alcance contratado» | Home (callout y banner) | Actualizado |

No se afirma que estas modalidades tengan capacidades superiores no verificadas.

## 4. Diferencias que necesitan confirmación

| # | Tema | Pregunta para Producto / Comercial |
|---|---|---|
| D1 | Personalizaciones adicionales en Crecimiento, Enterprise y Alianzas | ¿Qué capacidades más allá de las seis confirmadas existen (por ejemplo dominio propio, portal propio, remitente de correo propio)? Hoy solo se publica «según alcance/propuesta»; no se enumeran. |
| D2 | Productos distintos de firma (KYC, OCR, validaciones) | ¿Aplican a ellos las seis capacidades? La pestaña KYC de «¿Cómo funciona?» (`AutoservicioFlujoTabs`) ya dice que el flujo de verificación lleva el logo del cliente; no se modificó y requiere verificación de Producto. |
| D3 | Modalidad «marca blanca» presentada como forma de implementación | Las páginas sectoriales KYC iGaming y Software clínico mencionan «API, SDK o una experiencia de marca blanca» y «se consume por API en modelo de marca blanca». No se modificaron (fuera de alcance); conviene revisar que no confundan White Label con integración. |
| D4 | «Sin marca visible de JAAK» | Confirmar si incluye todos los canales (correos, portal de firma, constancias descargables) o solo la experiencia de firma. El texto publicado dice «experiencia de firma sin marca visible de JAAK». |
| D5 | Límites de uso | Confirmar si hay límites (por número de plantillas, usuarios o marcas por cuenta). No se publica ninguno. |

## 5. Producto frente a condiciones comerciales

| Concepto | Característica de producto | Condición comercial |
|---|---|---|
| White Label (logotipo, colores, correos, mensajes, experiencia de firma) | Sí, en Autoservicio (firma electrónica) | Sin cargo adicional ni condiciones nuevas |
| Integración API o SDK | No incluida en Autoservicio | Contratación adicional con setup fee, conforme al alcance acordado |
| Personalización en Crecimiento, Enterprise y Alianzas | Se define en la propuesta | Según el acuerdo comercial |
| Sandbox | No automático | Se evalúa con un especialista comercial |
| Precios, unidades y checkout | Sin cambios | Sin cambios |
