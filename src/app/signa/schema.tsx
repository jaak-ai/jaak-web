// Structured Data for Signa SEO
export const signaOrganizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Signa",
  "alternateName": ["Signa México", "Signa Firma Electrónica"],
  "description": "Firma electrónica profesional para México con tecnología 2026. 50% más económica que la competencia.",
  "url": "https://jaak.ai/signa",
  "logo": "https://jaak.ai/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+52-555-SIGNA",
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
      "description": "Servicio de firma electrónica profesional para México"
    },
    "price": "15.00",
    "priceCurrency": "MXN",
    "availability": "https://schema.org/InStock",
    "validFrom": "2026-02-19"
  }
};

export const signaServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Firma Electrónica Profesional Signa",
  "description": "Servicio de firma electrónica con validez legal en México. NOM-151 certificado, tecnología 2026, soporte 24/7.",
  "provider": {
    "@type": "Organization",
    "name": "Signa",
    "url": "https://jaak.ai/signa"
  },
  "areaServed": {
    "@type": "Country",
    "name": "México"
  },
  "offers": {
    "@type": "Offer",
    "price": "15.00",
    "priceCurrency": "MXN",
    "priceValidUntil": "2026-12-31",
    "availability": "https://schema.org/InStock",
    "url": "https://jaak.ai/signa",
    "description": "50% más económico que la competencia"
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
      "name": "¿Cuánto cuesta Signa vs Mifiel?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Signa cuesta $15 MXN por firma vs $29.90 MXN de Mifiel. Esto representa un ahorro del 50% con la misma validez legal NOM-151."
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
      "name": "¿Cuánto tiempo toma migrar de Mifiel a Signa?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La migración de Mifiel a Signa toma entre 24-48 horas y es completamente gratuita. Te ayudamos con todo el proceso."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué ventajas tiene Signa sobre DocuSign?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Signa es 50% más económico que DocuSign, está optimizado para México con NOM-151, soporte en español 24/7, y no requiere contratos anuales."
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