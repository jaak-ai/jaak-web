/**
 * Fuente única de copy comercial (AUD-01).
 *
 * Modalidades de consumo: Web, API, SDK. White Label es una opción de
 * personalización según alcance contratado (no es un tipo de acceso ni está
 * incluido por defecto). Autoservicio es exclusivamente Web.
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
    "Autoservicio es una modalidad exclusivamente web: no incluye API, SDK ni White Label en el paquete estándar. Para integrar JAAK a tus sistemas o aplicaciones, se requiere una integración contratada por separado, que considera una cuota de configuración (setup fee).",
} as const;

export const MODALIDADES_COPY = {
  web: "Web: uso de los servicios desde la plataforma web de JAAK, sin desarrollar una integración.",
  api: "API: integración de los servicios de JAAK con tus sistemas empresariales.",
  sdk: "SDK: integración de capacidades de JAAK en tus propias aplicaciones y experiencias digitales.",
  whiteLabel: "White Label: opción de personalización conforme al alcance comercial contratado.",
  setup: "La integración API o SDK requiere una cuota de configuración (setup fee).",
  /** Aclaración breve para home/landings. */
  integracionCorta:
    "¿Necesitas integrar JAAK a tus sistemas o aplicaciones? Evaluamos una integración por API o SDK, con personalización White Label según contratación. La integración requiere setup fee.",
  /**
   * Crecimiento, Enterprise y Alianzas: bolsa anual de consumo (no es una suscripción
   * mensual de precio fijo). Sin cuotas, tarifas, mínimos ni reglas de excedentes.
   */
  esquemasPago:
    "Bolsa anual de consumo definida en la propuesta comercial, con pagos mensuales conforme al consumo.",
} as const;

/**
 * Textos del aviso de documentación (`IntegrationAccessNotice`). Congelados:
 * la documentación técnica está fuera del alcance de esta continuación y
 * requiere una revisión específica (incluye una mención a sandbox pendiente de
 * decidir).
 */
export const INTEGRACION_COPY = {
  requisitoCredenciales:
    "Para generar y utilizar credenciales API debes contar con una integración habilitada conforme a las condiciones de contratación correspondientes. La adquisición de un paquete de Autoservicio no incluye este acceso.",
  docsTitulo: "Documentación para integraciones JAAK",
  docsDescripcion:
    "Consulta nuestros recursos técnicos de API, SDK y webhooks. El acceso operativo a API y al ambiente sandbox requiere contratación y habilitación técnica mediante una cuota de configuración adicional. Los paquetes de Autoservicio están destinados exclusivamente al uso desde la plataforma web de JAAK.",
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
    "No. Los paquetes estándar de JAAK Autoservicio se utilizan exclusivamente desde nuestra plataforma web. Si tu empresa necesita integrar los servicios mediante API o SDK, nuestro equipo comercial puede ayudarte a evaluar las modalidades de Crecimiento, Enterprise o Alianzas. La integración requiere una cuota de configuración (setup fee) conforme al alcance contratado.",
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
