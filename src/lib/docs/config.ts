export const docsConfig = {
  title: 'Documentación JAAK',
  description: 'Guías técnicas, referencia de API y recursos para integrar JAAK',

  apis: {
    signa: {
      name: 'Firma Electrónica',
      sandbox: 'https://signa.dev.jaak.ai',
      production: 'https://signa.jaak.ai',
    },
    kyc: {
      name: 'Verificación de Identidad',
      sandbox: 'https://api.dev.jaak.ai',
      production: 'https://api.jaak.ai',
    },
  },

  defaultEnvironment: 'sandbox' as const,
}

export type DocsConfig = typeof docsConfig
