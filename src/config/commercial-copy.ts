/**
 * Fuente única de copy comercial (AUD-01).
 *
 * Modalidades de consumo: Web, API, SDK. White Label es una capacidad de personalización de marca
 * (no es un tipo de acceso ni una integración API/SDK). Autoservicio es exclusivamente Web, INCLUYE
 * White Label (logotipo, colores, correos, mensajes y experiencia de firma sin marca visible de
 * JAAK; AUD-05) y no incluye API, SDK ni sandbox automático. En Crecimiento, Enterprise y
 * Alianzas, la personalización y las integraciones se definen según alcance contratado o propuesta.
 *
 * Sandbox NO es un beneficio automático ni se promociona como oferta: su disponibilidad se
 * evalúa con un especialista comercial de JAAK (ver `SANDBOX_COPY`). No hay acceso gratuito,
 * inmediato ni incluido.
 * No incluir aquí importes del setup, plazos de activación, SLAs, descuentos,
 * permanencias ni condiciones de cancelación: no están aprobados.
 */

/** Ruta comercial existente para solicitar información de integración. */
export const INTEGRATION_CONTACT_HREF = "/contacto";
export const AUTOSERVICIO_HREF = "/autoservicio";

export const AUTOSERVICIO_COPY = {
  modalidad: "Plataforma web",
  vigencia: "Paquetes con vigencia de un año",
  soporte: "Soporte básico incluido",
  /** Frase corta reutilizable (leyendas, bullets). */
  exclusionCorta: "No incluye API ni SDK",
  /** Nota informativa del catálogo /autoservicio. */
  notaCatalogo:
    "Autoservicio se utiliza exclusivamente desde la plataforma web e incluye White Label. No incluye API ni SDK: integrarlos requiere una contratación adicional con setup fee, que se evalúa con nuestro equipo comercial.",
} as const;

export const MODALIDADES_COPY = {
  web: "Web: uso de los servicios desde la plataforma web de JAAK, sin desarrollar una integración.",
  api: "API: integración de los servicios de JAAK con tus sistemas empresariales.",
  sdk: "SDK: integración de capacidades de JAAK en tus propias aplicaciones y experiencias digitales.",
  whiteLabel:
    "White Label: personalización de marca (logotipo, colores, correos y mensajes). Incluido en Autoservicio; en Crecimiento, Enterprise y Alianzas se define conforme al alcance contratado.",
  setup: "La integración API o SDK requiere una cuota de configuración (setup fee).",
  /** Aclaración breve para home/landings. */
  integracionCorta:
    "¿Necesitas integrar JAAK a tus sistemas o aplicaciones? Evaluamos una integración por API o SDK conforme al alcance del proyecto. La integración requiere setup fee; el White Label es una personalización de marca que no depende de ella.",
  /**
   * Crecimiento, Enterprise y Alianzas: bolsa anual de consumo (no es una suscripción
   * mensual de precio fijo). Sin cuotas, tarifas, mínimos ni reglas de excedentes.
   */
  esquemasPago:
    "Bolsa anual de consumo definida en la propuesta comercial, con pagos mensuales conforme al consumo.",
} as const;

/**
 * Textos del aviso de documentación (`IntegrationAccessNotice`), compartido por las páginas de
 * documentación. AUD-02: el aviso ya no asocia el sandbox a la cuota de configuración; los
 * ambientes de prueba se evalúan con un especialista comercial.
 */
export const INTEGRACION_COPY = {
  requisitoCredenciales:
    "Para generar y utilizar credenciales API debes contar con una integración habilitada conforme a las condiciones de contratación correspondientes. La adquisición de un paquete de Autoservicio no incluye este acceso.",
  docsTitulo: "Acceso a integraciones y ambientes de prueba",
  /** Párrafos del aviso (cada elemento se muestra en su propio párrafo). */
  docsDescripcion: [
    "La documentación técnica de JAAK está disponible para consulta como referencia en proyectos de integración. Su consulta pública no otorga credenciales ni derechos de acceso.",
    "El acceso a API y SDK requiere habilitación conforme a las condiciones contratadas, incluyendo la cuota de configuración aplicable.",
    "La disponibilidad de ambientes de prueba se evalúa con un especialista comercial de JAAK, de acuerdo con el tipo de cliente, paquete y necesidades del proyecto.",
    "Los paquetes estándar de Autoservicio son exclusivamente Web y no incluyen acceso automático a API, SDK o sandbox.",
  ],
  docsCta: "Solicitar información de integración",
} as const;

// ───────────────────────── AUD-02 · accesos Web / API / SDK / sandbox ─────────────────────────

/** Soporte (tabla de Precios). Sin SLA, horarios extendidos ni tiempos de respuesta. */
export const SOPORTE_COPY = {
  autoservicioTabla: "Soporte básico · L–V, 9:00–18:00 h CDMX",
  especializadoTabla: "Soporte en español desde México, según contratación",
} as const;

/** FAQ comercial sobre los permisos de Autoservicio (visible y JSON-LD de /precios). */
export const FAQ_ACCESO_API_SDK = {
  question: "¿Puedo utilizar API o SDK al comprar un paquete de Autoservicio?",
  answer:
    "Los paquetes de Autoservicio se utilizan desde nuestra plataforma web y no incluyen API ni SDK. Para integrar mediante API o SDK se requiere una contratación adicional con setup fee, conforme al alcance que acuerdes con nuestro equipo comercial.",
} as const;

/** Introducción comercial del índice de documentación (/documentacion). */
export const DOCS_INDEX_COPY = {
  titulo: "Documentación para integraciones JAAK",
  descripcion:
    "Explora los recursos técnicos disponibles para integrar las soluciones de JAAK mediante API o SDK.",
  acceso:
    "El acceso a credenciales y ambientes de prueba está sujeto a la contratación, habilitación y condiciones acordadas con nuestro equipo comercial y técnico. Los paquetes estándar de Autoservicio están diseñados para utilizarse desde la plataforma web de JAAK y no incluyen integración API o SDK.",
  cta: "Consultar opciones de integración",
} as const;

/** Sandbox: evaluación con especialista; nunca beneficio automático ni CTA propio. */
export const SANDBOX_COPY = {
  /** Tarjeta de recursos en /documentacion. */
  tarjeta:
    "Los ambientes de pruebas se habilitan según el tipo de integración y las condiciones acordadas con el equipo comercial y técnico de JAAK.",
  /** FAQ de las páginas de consultas oficiales (CURP, INE y Consultas Oficiales). */
  curpQuestion: "¿Puedo solicitar un ambiente de pruebas para integrar la validación CURP?",
  ineQuestion: "¿Puedo solicitar un ambiente de pruebas para integrar la validación de INE?",
  consultasQuestion: "¿Puedo solicitar un ambiente de pruebas para integrar las Consultas Oficiales?",
  answer:
    "Sí. La disponibilidad de un ambiente de pruebas se evalúa con un especialista comercial de JAAK, de acuerdo con el tipo de integración, las necesidades del proyecto y las condiciones contratadas. El acceso no se habilita automáticamente por comprar paquetes de Autoservicio.",
} as const;

/** Sección de integración de /validar-curp-renapo. */
export const CURP_INTEGRACION_COPY = {
  titulo: "Integra la validación CURP a tu operación.",
  descripcion:
    "Conecta los servicios de validación CURP de JAAK mediante API, conforme a las necesidades y requisitos técnicos de tu empresa. La integración requiere una cuota de configuración (setup fee) y habilitación conforme a las condiciones contratadas.",
} as const;

/** Proceso de integración de /plataforma/verificacion-identidad (sin plazos ni días exactos). */
export const KYC_INTEGRACION_COPY = {
  etiqueta: "Integración técnica",
  titulo: "Integra JAAK de acuerdo con las necesidades de tu operación.",
  descripcion:
    "Conecta nuestras soluciones de verificación de identidad mediante API o SDK, con documentación técnica y acompañamiento especializado conforme al proyecto contratado.",
  etapas: [
    { etapa: "Etapa 1", titulo: "Evaluación de necesidades", cuerpo: "Revisamos el caso de uso, la volumetría y los requisitos técnicos y de seguridad." },
    { etapa: "Etapa 2", titulo: "Configuración y habilitación", cuerpo: "Definimos el alcance de integración, la cuota de configuración (setup fee) y los accesos correspondientes." },
    { etapa: "Etapa 3", titulo: "Implementación y pruebas", cuerpo: "Tu equipo podrá integrar y validar las funcionalidades contratadas con el acompañamiento técnico acordado." },
    { etapa: "Etapa 4", titulo: "Puesta en operación", cuerpo: "La habilitación de producción se realiza conforme a los requisitos y condiciones del proyecto." },
  ],
  cta: "Solicitar evaluación de integración",
} as const;

// ───────────────────────── AUD-02.1 · Precios: setup fee de API/SDK ─────────────────────────
// Sin importes, plazos ni SLA. Criterio editorial: información breve y clara; el detalle contractual
// de Autoservicio vive en sus Términos y Condiciones y se menciona en letra pequeña.

/** Fila y nota de la comparativa de modalidades de /precios. */
export const PRECIOS_SETUP_COPY = {
  fila: {
    feature: "Setup fee (integración API/SDK)",
    auto: "No aplica al paquete Web; API/SDK requieren contratación adicional con setup fee",
    growth: "Aplica a la integración API/SDK",
    enterprise: "Aplica a la integración API/SDK, según propuesta",
    alliance: "Aplica a la integración API/SDK, según propuesta",
  },
  nota:
    "El setup fee no aplica al paquete Web de Autoservicio: para integrar mediante API o SDK se requiere una contratación adicional con setup fee. En Crecimiento, Enterprise y Alianzas, la integración por API o SDK lo requiere y se define según el alcance contratado o la propuesta comercial. El sandbox no se habilita automáticamente: su disponibilidad se evalúa con un especialista comercial de JAAK.",
  /** Letra pequeña: condiciones de compra de Autoservicio. */
  letraPequena:
    "Autoservicio: vigencia, reembolsos y demás condiciones de compra conforme a los Términos y Condiciones de Autoservicio, que se aceptan al comprar. El soporte de Crecimiento, Enterprise y Alianzas se define con el especialista comercial.",
} as const;

/** FAQ de /precios (visible y JSON-LD). */
export const FAQ_SETUP_FEE = {
  question: "¿Hay cuota de configuración (setup fee)?",
  answer:
    "No aplica al paquete Web de Autoservicio: para integrar mediante API o SDK se requiere una contratación adicional con setup fee. En Crecimiento, Enterprise y Alianzas, la integración por API o SDK requiere una cuota de configuración (setup fee), cuyo importe y condiciones se definen según el alcance contratado o la propuesta comercial.",
} as const;

export const FAQ_SANDBOX_PRECIOS = {
  question: "¿Incluye algún plan un ambiente de pruebas (sandbox)?",
  answer:
    "No de forma automática. Su disponibilidad se evalúa con un especialista comercial de JAAK, según el tipo de cliente, el paquete y las necesidades del proyecto.",
} as const;

export const FAQ_VIGENCIA_REEMBOLSO = {
  question: "¿Los paquetes caducan o son reembolsables?",
  answer:
    "Los paquetes de Autoservicio tienen una vigencia de 12 meses a partir de que el saldo está habilitado; las unidades no utilizadas al vencer se pierden. Los reembolsos se rigen por los Términos y Condiciones de Autoservicio que se aceptan al comprar.",
} as const;

// ───────────────────────── AUD-05 · White Label en Autoservicio ─────────────────────────
// Definición de Producto: Autoservicio INCLUYE White Label. Es una capacidad de personalización de
// marca, no una integración API/SDK, y no lleva tarifa ni condición comercial adicional. Las capacidades
// confirmadas corresponden a la experiencia de firma electrónica; no se extienden a KYC u OCR sin
// verificación de Producto. Crecimiento, Enterprise y Alianzas conservan sus condiciones vigentes.

export const WHITE_LABEL_COPY = {
  /** Capacidades confirmadas, en el orden de la definición de Producto. */
  capacidades: [
    "Logotipo de tu empresa",
    "Colores corporativos",
    "Marca personalizada durante la experiencia de firma",
    "Correos electrónicos personalizados",
    "Mensajes personalizados",
    "Experiencia de firma sin marca visible de JAAK",
  ],
  /** Versión corta (tarjetas, tablas). */
  corto: "White Label incluido",
  /** Tarjeta de Firma Simple (versión corta). */
  firmaSimpleCorto: "Firma electrónica Web con White Label incluido.",
  /** Tarjeta de Firma Simple (versión completa). */
  firmaSimple:
    "Firma documentos desde JAAK Autoservicio con una experiencia personalizada con tu logotipo, colores corporativos, correos y mensajes de marca.",
  /** Celda de la tabla comparativa de /precios (columna Autoservicio). */
  tablaAutoservicio: "Incluido",
  /** Bloque de /autoservicio. */
  bloqueTitulo: "Tu marca en cada experiencia de firma.",
  bloqueDescripcion:
    "Personaliza el logotipo, los colores, los correos y los mensajes que acompañan tus procesos de firma electrónica. Ofrece a tus firmantes una experiencia alineada con la identidad de tu empresa.",
  bloqueBeneficio: "White Label incluido en Autoservicio.",
  /** Aclaración que separa personalización de integración. */
  noEsIntegracion:
    "White Label es una personalización de marca: no requiere integración API o SDK y no tiene un cargo adicional. Las integraciones API y SDK se contratan por separado, con setup fee.",
} as const;

/** FAQ de /precios (visible y JSON-LD). */
export const FAQ_WHITE_LABEL = {
  question: "¿Autoservicio incluye White Label?",
  answer:
    "Sí. Autoservicio incluye White Label en la experiencia de firma: logotipo, colores, correos y mensajes personalizados, sin integración API o SDK y sin cargo adicional. En Crecimiento, Enterprise y Alianzas se define conforme al alcance contratado.",
} as const;
