/**
 * Fuente única de copy comercial (AUD-01).
 *
 * Modalidades de consumo: Web, API, SDK. White Label es una opción de
 * personalización según alcance contratado (no es un tipo de acceso ni está
 * incluido por defecto). Autoservicio es exclusivamente Web.
 *
 * Sandbox NO se promociona públicamente: no incluirlo en copy comercial.
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
