// Structured Data for Signa SEO
export const signaOrganizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Signa by JAAK",
  "alternateName": ["Signa", "Signa Firma Electrónica"],
  "description": "Firma electrónica con validez legal NOM-151 para México. Expediente probatorio completo y precios transparentes.",
  "url": "https://jaak.ai/signa",
  "logo": "https://jaak.ai/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "sales@jaak.ai",
    "contactType": "customer service",
    "availableLanguage": ["Spanish", "English"],
    "areaServed": "MX"
  },
  "areaServed": {
    "@type": "Country",
    "name": "México"
  },
  "hasOfferingCatalog": {
    "@type": "OfferingCatalog",
    "name": "Servicios de Firma Electrónica",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Firma Electrónica Profesional",
          "description": "Firma electrónica válida en México con NOM-151",
          "provider": "Signa",
          "areaServed": "MX"
        }
      }
    ]
  },
  "makesOffer": {
    "@type": "Offer",
    "itemOffered": {
      "@type": "Service",
      "name": "Firma Electrónica",
      "description": "Servicio de firma electrónica con validez legal NOM-151 para México"
    },
    "priceCurrency": "MXN",
    "availability": "https://schema.org/InStock",
    "url": "https://jaak.ai/precios"
  }
};

export const signaServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Firma Electrónica Signa by JAAK",
  "description": "Servicio de firma electrónica con validez legal NOM-151 en México. Expediente probatorio completo y soporte 24/7.",
  "provider": {
    "@type": "Organization",
    "name": "Signa by JAAK",
    "url": "https://jaak.ai/signa"
  },
  "areaServed": {
    "@type": "Country",
    "name": "México"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "MXN",
    "availability": "https://schema.org/InStock",
    "url": "https://jaak.ai/precios",
    "description": "Precios transparentes por firma"
  },
  "hasOfferingCatalog": {
    "@type": "OfferingCatalog",
    "name": "Servicios de Firma Digital",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Firma de Contratos",
          "description": "Firma electrónica para contratos empresariales"
        }
      },
      {
        "@type": "Offer", 
        "itemOffered": {
          "@type": "Service",
          "name": "Documentos Legales",
          "description": "Firma de documentos con validez legal NOM-151"
        }
      }
    ]
  },
  "audience": {
    "@type": "BusinessAudience",
    "audienceType": "Pequeñas y medianas empresas",
    "geographicArea": {
      "@type": "Country",
      "name": "México"
    }
  }
};

export const signaFAQSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cuánto cuesta Signa?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Signa maneja precios transparentes por firma, sin costos de setup ni mínimos mensuales. Consulte las tarifas vigentes en https://jaak.ai/precios."
      }
    },
    {
      "@type": "Question", 
      "name": "¿Signa tiene validez legal en México?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, Signa cumple con NOM-151-SCFI-2016 y tiene plena validez legal en México para todo tipo de documentos empresariales y contratos."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo es la migración a Signa?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La migración es acompañada: le ayudamos a exportar sus documentos y a configurar su cuenta desde su plataforma actual."
      }
    },
    {
      "@type": "Question",
      "name": "¿Signa incluye expediente probatorio?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Cada documento firmado con Signa incluye constancia de conservación NOM-151, sellos de tiempo y evidencia de integridad que respaldan su validez ante terceros."
      }
    }
  ]
};

export const signaBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Jaak.ai",
      "item": "https://jaak.ai"
    },
    {
      "@type": "ListItem", 
      "position": 2,
      "name": "Signa",
      "item": "https://jaak.ai/signa"
    }
  ]
};