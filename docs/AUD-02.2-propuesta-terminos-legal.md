# AUD-02.2 — Propuesta de modificación de Términos y Condiciones

> **BORRADOR INTERNO — NO PUBLICAR — PENDIENTE DE APROBACIÓN LEGAL**

- **Actividad:** AUD-02.2 — Documentación y Términos: vincular recursos API/SDK/sandbox con los derechos contratados.
- **Fecha de preparación:** 06/11/2026. **Fecha compromiso:** 04/12/2026.
- **Preparó:** Ingeniería / Web. **Aprobación requerida:** Producto y Legal / Compliance.
- **Fuente analizada:** `src/app/terminos/page.tsx` (versión pública, «Última actualización: Abril 2026»). **No se modificó** la página, su fecha de vigencia, el checkout ni la aceptación contractual.
- **Alcance:** este documento es solo una propuesta de redacción para revisión jurídica. Ninguna redacción de aquí está publicada ni debe interpretarse como aprobada. No incluye tiempos de habilitación, SLA, tarifas ni plazos.

## 0. Hechos verificados y no verificados

| Hecho | Estado |
|---|---|
| `/terminos` es un único texto general (14 secciones) que aplica a «usuarios finales» y a «empresas clientes que contratan mediante acuerdos comerciales específicos». | Verificado en el repositorio. |
| La sección 2 enumera «APIs y SDKs» como servicio general, sin vincularlo a modalidades contratadas. | Verificado. |
| La sección 3 pide a las empresas «contar con un contrato de servicios vigente con JAAK». No distingue Autoservicio de integración. | Verificado. |
| Existe un documento separado «Términos y Condiciones de Autoservicio» (nov. 2026), en revisión legal; no está publicado en el sitio. | Informado por Marketing; el texto no está en el repositorio. |
| Mecanismo de aceptación electrónica del checkout de Autoservicio (casilla, enlace a términos, versión aceptada). | **No verificable desde el repositorio:** el pago se realiza en un flujo externo. Solo se encontró un enlace «Términos» en el pie de la página de orden confirmada. Debe confirmarlo Ingeniería/Producto antes de redactar la sección 1. |
| Mecanismo de aceptación de propuestas comerciales y contratos empresariales. | No verificable; es proceso comercial/legal fuera del repositorio. |

## 1. Tabla de propuestas

| Sección | Texto vigente | Problema identificado | Redacción propuesta | Justificación | Impacto contractual | Aprobación requerida | Estado |
|---|---|---|---|---|---|---|---|
| **1. Aceptación de los términos** | «Al acceder o utilizar nuestros Servicios, usted acepta quedar vinculado por estos Términos.» «Estos Términos aplican tanto a usuarios finales … como a empresas clientes que contratan nuestros servicios mediante acuerdos comerciales específicos.» | No dice cómo se relacionan estos Términos con la compra directa de Autoservicio, la contratación asistida, las propuestas empresariales ni las condiciones particulares aceptadas por el cliente. «Acceder» a la web podría leerse como aceptación de condiciones comerciales que el visitante no ha contratado. | «1.1 Estos Términos son las condiciones generales de uso de los Servicios. 1.2 La contratación de un Servicio puede estar sujeta, además, a condiciones particulares que el cliente acepte de forma expresa, según la modalidad contratada (compra en línea de Autoservicio, contratación asistida, propuesta comercial o contrato empresarial). 1.3 [**Alternativa A**] Estos Términos se aceptan al utilizar los Servicios; las condiciones particulares se aceptan en el medio indicado en cada modalidad. [**Alternativa B**] Estos Términos se aceptan al contratar el Servicio, de forma electrónica o por escrito, según la modalidad. 1.4 La mera consulta del sitio web o de la documentación pública no constituye contratación de ningún Servicio.» | Separa uso del sitio, aceptación general y condiciones particulares. No afirma un mecanismo de aceptación que no esté verificado: los medios se completan según lo que confirmen Producto e Ingeniería. | Alto: fija el momento y el medio de aceptación. Relevante para prueba de consentimiento. | Legal (texto); Producto/Ingeniería (confirmar mecanismo real de aceptación en checkout). | Borrador. Bloqueado por dato no verificado. |
| **2. Descripción de los servicios** | «APIs y SDKs: Interfaces de programación para integración con sistemas de terceros.» (enumerado junto a KYC, KYB, firma y evidencia). | El catálogo general presenta API y SDK como servicios disponibles para cualquier cliente. Puede interpretarse como acceso automático, también para Autoservicio. | Sustituir la viñeta por: «**Integraciones por API y SDK:** capacidades de integración disponibles únicamente conforme a las modalidades y al alcance expresamente contratados, y sujetas a la habilitación y validaciones técnicas aplicables.» Añadir al final de la sección: «La descripción de los Servicios en estos Términos o en el sitio web no implica que todos estén incluidos en cada contratación ni otorga acceso automático a credenciales, entornos o funcionalidades.» | Mantiene el término API/SDK (relevante para SEO y claridad) pero ancla el derecho al contrato. | Medio: reduce riesgo de reclamar acceso no contratado. | Legal; Producto. | Borrador. |
| **3. Requisitos para el uso del servicio** | Dos perfiles: «usuarios finales» y «empresas clientes» (estas deben «contar con un contrato de servicios vigente con JAAK»). | No distingue a cliente de Autoservicio (compra en línea, sin contrato negociado), cliente de integración ni Enterprise/Alianzas. Exigir «contrato vigente» a un comprador de Autoservicio es inexacto. No indica qué instrumento acredita el derecho de acceso. | Reemplazar el perfil «empresas clientes» por cuatro perfiles: **Cliente de Autoservicio** (compra en línea; el instrumento es el resumen de compra y las condiciones particulares aceptadas). **Cliente de integración** (instrumento: propuesta o acuerdo que incluya el alcance API/SDK y el setup fee). **Clientes Enterprise y Alianzas** (instrumento: contrato empresarial o propuesta aceptada y sus anexos). **Usuario final** (sin cambios). Mantener los requisitos comunes (constitución legal, protección de datos, consentimientos). Añadir: «El derecho de acceso a una modalidad se acredita únicamente con el instrumento indicado para ella; JAAK puede solicitar requisitos adicionales de validación.» | Hace explícito qué documento acredita cada acceso sin definir plazos ni SLA. | Alto: define quién puede usar qué y con qué respaldo. | Legal; Comercial (confirmar instrumentos por modalidad). | Borrador. |
| **3.bis (nueva). Modalidades de acceso y habilitación** | No existe. | Ninguna sección explica el alcance de Autoservicio Web, integraciones, White Label, ambientes de prueba ni documentación pública. | Ver subsección 2 de este documento (texto completo propuesto). | Es el núcleo de AUD-02.2: vincula recursos API/SDK/sandbox con derechos contratados. | Alto. | Producto y Legal. | Borrador. |
| **Jerarquía documental** (nueva, posible sección 13.bis) | La sección 13 «Disposiciones generales» no define orden de prelación. | Con varios documentos (Términos, condiciones de Autoservicio, ficha de paquete, resumen de compra, propuesta, contrato, anexos) no está definido cuál prevalece en caso de conflicto. | Ver subsección 3: tres alternativas para decisión jurídica. | No se determina unilateralmente qué prevalece. | Alto: afecta la interpretación de todos los acuerdos. | Legal (decisión); Producto/Comercial (opinión). | Pendiente de decisión. |

## 2. Texto propuesto: «Modalidades de acceso y habilitación» (nueva subsección dentro de la sección 3)

> Borrador para Legal. Sin tiempos de habilitación, SLA ni tarifas.

**Modalidades de acceso y habilitación**

1. **Autoservicio Web.** El cliente de Autoservicio utiliza los productos contratados desde la plataforma web de JAAK. La compra estándar de Autoservicio no incluye acceso por API, SDK, White Label ni ambientes de prueba (sandbox).
2. **Integraciones por API o SDK.** Están disponibles únicamente conforme al alcance expresamente contratado y están sujetas al pago de una cuota de configuración (setup fee) cuyo importe y condiciones se establecen en la propuesta o el acuerdo correspondiente. La cuota corresponde a la configuración y habilitación de la integración conforme al alcance contratado y puede comprender documentación, guía técnica, preparación de infraestructura y acompañamiento especializado según lo acordado.
3. **White Label.** Es una opción de personalización cuya disponibilidad y alcance dependen de la propuesta comercial o del acuerdo celebrado.
4. **Ambientes de prueba.** Su disponibilidad y requisitos se evalúan de forma individual, según el tipo de cliente, el paquete, el caso de uso y los requisitos técnicos. No se otorgan de forma automática ni gratuita. *[Legal: confirmar si se desea mencionar «sin costo» o dejarlo fuera del texto contractual.]*
5. **Documentación pública.** La consulta de documentación o recursos técnicos publicados por JAAK no otorga credenciales, claves de acceso, entornos ni derechos adicionales a los contratados.
6. **Habilitación.** Los accesos se conceden conforme a las condiciones comerciales acordadas y a las validaciones técnicas y de cumplimiento aplicables. JAAK puede negar, suspender o revocar accesos que no correspondan al alcance contratado.

## 3. Jerarquía documental: alternativas para decisión jurídica

Documentos en juego: (a) Términos generales (`/terminos`); (b) Condiciones particulares de Autoservicio; (c) Ficha de producto y paquete; (d) Resumen de compra; (e) Propuesta comercial; (f) Contrato empresarial; (g) Anexos técnicos.

| Alternativa | Descripción | Ventaja | Riesgo |
|---|---|---|---|
| **A. Prelación específica sobre general** | Prevalece el documento más específico y posterior firmado o aceptado por el cliente (contrato/propuesta > anexos > condiciones de Autoservicio > resumen de compra > ficha > Términos generales). | Es el patrón habitual; respeta lo negociado. | Puede dejar sin efecto protecciones de los Términos generales si un anexo las omite. |
| **B. Prelación por modalidad** | Dos cadenas separadas: Autoservicio (Términos generales → condiciones de Autoservicio → resumen de compra, con la ficha como descriptiva) y Empresarial (contrato → anexos → propuesta → Términos generales como supletorios). | Refleja que Autoservicio y Enterprise se contratan distinto. | Requiere definir con claridad qué modalidad aplica a cada cliente. |
| **C. Prelación única con salvaguardas** | Orden único, pero ciertas cláusulas (protección de datos, limitación de responsabilidad, uso aceptable) prevalecen siempre. | Evita vacíos en materias críticas. | Mayor complejidad de redacción; riesgo de conflictos entre «siempre prevalece» y lo pactado. |

Esta propuesta **no elige** una alternativa. Se solicita decisión de Legal.

## 4. Pendientes legales relacionados (no modificados en esta tarea)

| # | Tema | Observación | Actividad donde debe resolverse |
|---|---|---|---|
| L1 | Reembolsos | `/terminos` no regula reembolsos. Las condiciones de Autoservicio (cl. 3.6) sí los mencionan; el sitio remite a ellas en letra pequeña. | Actividad independiente de política de reembolsos. |
| L2 | Vigencia de paquetes | Condiciones de Autoservicio: 12 meses desde que el saldo está habilitado; el sitio publicó «un año» y en `/autoservicio/prueba` «12 meses desde la compra». | Política de reembolsos / AUD-02. |
| L3 | Canal de soporte | Cl. 6.4 de Autoservicio (correo o portal) vs. WhatsApp que se mantiene en `/soporte/autoservicio`. | AUD-02. |
| L4 | Setup fee | Cl. 5.2 de Autoservicio (setup opcional) vs. definición comercial vigente (no aplica al paquete Web; integración con contratación adicional). Las condiciones de Autoservicio deben alinearse. | AUD-02 / Legal. |
| L5 | Niveles de servicio | `/terminos` sección 6 «Disponibilidad y niveles de servicio»: verificar que no establezca compromisos no aprobados. | Legal / Producto. |
| L6 | Conservación y validez jurídica | Sección 14 (retención) y las referencias a valor probatorio de la firma y la evidencia (secciones 2 y 14). | Legal. |
| L7 | Limitación de responsabilidad | Tope de «12 meses anteriores»; aplicabilidad a Autoservicio y a Enterprise. | Legal. |
| L8 | Fecha de vigencia | «Última actualización: Abril 2026». Debe actualizarse solo cuando Legal apruebe y se publique una nueva versión. | Al aprobar este documento. |
| L9 | Versionado de aceptación | No se verificó si el checkout registra la versión de los términos aceptada. | Producto / Ingeniería. |

## 5. Decisiones requeridas

**Legal**
1. Aprobar o ajustar la redacción de las secciones 1, 2 y 3 y de la nueva subsección «Modalidades de acceso y habilitación».
2. Elegir alternativa de aceptación (A o B) en la sección 1.3, una vez confirmado el mecanismo real.
3. Elegir alternativa de jerarquía documental (A, B o C) o proponer otra.
4. Decidir si la mención «ni gratuita» de ambientes de prueba debe aparecer en texto contractual.
5. Definir el calendario y el orden de publicación (Términos generales vs. condiciones de Autoservicio) y la nueva fecha de vigencia.
6. Priorizar los pendientes L1–L9.

**Producto**
1. Confirmar que la definición vigente es contractual: Autoservicio estándar sin API, SDK, White Label ni sandbox.
2. Confirmar si Autoservicio Enterprise (documentado en las condiciones de Autoservicio) incluye Web, API y SDK y debe reflejarse en Términos.
3. Confirmar el contenido del setup fee a nivel descriptivo (documentación, guía técnica, preparación de infraestructura, acompañamiento).

**Comercial**
1. Confirmar el instrumento que acredita cada modalidad (propuesta, acuerdo, anexo técnico).
2. Confirmar el criterio de evaluación de sandbox (tipo de cliente, paquete, caso de uso, requisitos técnicos).
3. Confirmar que Crecimiento y Alianzas se rigen por propuesta/contrato y no por las condiciones de Autoservicio.

**Ingeniería (insumos para Legal)**
1. Describir el flujo de aceptación del checkout (qué se acepta, dónde, qué se registra).
2. Ver los hallazgos del reporte sobre el registro en ambiente dev (`docs/AUD-02.2-reporte-implementacion.md`, sección 9).
