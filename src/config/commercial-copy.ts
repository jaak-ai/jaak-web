/**
 * Fuente única de copy comercial: Autoservicio (web) vs. Integración API/sandbox.
 * AUD-01. Definición aprobada: "Autoservicio es exclusivamente web. API y sandbox
 * requieren setup adicional."
 *
 * No incluir aquí importes del setup, plazos de activación ni SLAs: no están aprobados.
 */

/** Ruta comercial existente para solicitar información de integración. */
export const INTEGRATION_CONTACT_HREF = "/contacto";
export const AUTOSERVICIO_HREF = "/autoservicio";

export const AUTOSERVICIO_COPY = {
  modalidad: "Plataforma web",
  vigencia: "Paquetes con vigencia de un año",
  soporte: "Soporte básico incluido",
  apiSandbox: "No incluye credenciales API, SDK ni acceso al sandbox",
  /** Frase corta reutilizable (cards, bullets). */
  exclusionCorta: "No incluye API, SDK ni sandbox",
  /** Nota informativa del catálogo /autoservicio. */
  notaCatalogo:
    "Autoservicio no incluye credenciales API, SDK ni acceso al sandbox. Para integrar JAAK a tus sistemas o habilitar un ambiente de pruebas, se requiere contratar una cuota de configuración adicional.",
} as const;

export const INTEGRACION_COPY = {
  /** Aclaración comercial breve (home, comprar, landings). */
  aclaracion:
    "API y sandbox requieren una cuota de configuración adicional (setup fee). Nuestro equipo puede ayudarte a evaluar la integración.",
  /** Requisito previo para guías técnicas. */
  requisitoCredenciales:
    "Para generar y utilizar credenciales API debes contar con una integración habilitada conforme a las condiciones de contratación correspondientes. La adquisición de un paquete de Autoservicio no incluye este acceso.",
  docsTitulo: "Documentación para integraciones JAAK",
  docsDescripcion:
    "Consulta nuestros recursos técnicos de API, SDK y webhooks. El acceso operativo a API y al ambiente sandbox requiere contratación y habilitación técnica mediante una cuota de configuración adicional. Los paquetes de Autoservicio están destinados exclusivamente al uso desde la plataforma web de JAAK.",
  docsCta: "Solicitar información de integración",
} as const;
