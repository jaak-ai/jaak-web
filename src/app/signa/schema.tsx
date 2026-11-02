// Structured Data de Signa (SEO). Decisión editorial permanente (AUD-01): sin precios, ofertas,
// tarifas, comparaciones económicas ni cifras de clientes. No agregar tipos `Offer`/`price`.

export const signaFaqItems = [
  {
    q: "¿Qué tipos de firma electrónica ofrece JAAK para empresas?",
    a: "JAAK ofrece modalidades que van de la firma simple a la firma digital con sello de tiempo conforme a NOM-151, con opciones que incorporan verificación biométrica o KYC. La modalidad adecuada depende del tipo de documento y de los requisitos de tu operación.",
  },
  {
    q: "¿Qué es la NOM-151 y cuándo conviene usarla?",
    a: "La NOM-151-SCFI-2016 establece requisitos para la conservación de mensajes de datos y documentos digitalizados. Algunas modalidades de JAAK incorporan constancia de conservación y sello de tiempo conforme a esta norma. La pertinencia para cada documento debe validarse con tu área legal o de cumplimiento.",
  },
  {
    q: "¿Puedo verificar la identidad de los firmantes?",
    a: "Sí. Existen modalidades que incorporan biometría facial con prueba de vida o verificación KYC completa (identificación oficial, CURP, biometría y consulta de listas), según la contratación.",
  },
  {
    q: "¿Puedo usar la firma electrónica de JAAK por Web, API o SDK?",
    a: "Puedes utilizarla desde la plataforma web de JAAK o evaluar una integración por API o SDK con tus sistemas y aplicaciones. Las integraciones se definen con el equipo comercial y consideran una cuota de configuración (setup fee).",
  },
  {
    q: "¿Existe una opción White Label?",
    a: "Existe la posibilidad de personalización White Label conforme al alcance de la propuesta comercial contratada.",
  },
  {
    q: "¿Qué soporte ofrece JAAK?",
    a: "Soporte y acompañamiento especializado en español, desde México, conforme al plan y las condiciones acordadas con nuestro equipo comercial.",
  },
  {
    q: "¿Cómo comparo JAAK con otros proveedores como Mifiel o DocuSign?",
    a: "Te recomendamos comparar capacidades funcionales: modalidades de firma, verificación de identidad, evidencia digital, NOM-151, modalidades de integración y alcance del soporte, consultando las fuentes oficiales de cada proveedor. Nuestra página de comparación incluye una lista de criterios para evaluar proveedores.",
  },
];

export const signaOrganizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "JAAK",
  "alternateName": ["Signa", "Signa Firma Electrónica"],
  "description": "JAAK ofrece soluciones de firma electrónica para empresas en México, con modalidades de firma, verificación de identidad, evidencia digital y opciones de integración.",
  "url": "https://jaak.ai/signa",
  "logo": "https://jaak.ai/images/logos/jaak-logo-azul.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+525535091788",
    "contactType": "customer service",
    "availableLanguage": ["Spanish", "English"],
    "areaServed": "MX"
  },
  "areaServed": {
    "@type": "Country",
    "name": "México"
  }
};

export const signaServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Firma electrónica para empresas · Signa JAAK",
  "serviceType": "Firma electrónica",
  "description": "Soluciones de firma electrónica para empresas en México: NOM-151, biometría, KYC, evidencia digital y opciones de integración por Web, API o SDK.",
  "provider": {
    "@type": "Organization",
    "name": "JAAK",
    "url": "https://jaak.ai"
  },
  "areaServed": {
    "@type": "Country",
    "name": "México"
  },
  "audience": {
    "@type": "BusinessAudience",
    "audienceType": "Empresas",
    "geographicArea": {
      "@type": "Country",
      "name": "México"
    }
  }
};

export const signaFAQSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": signaFaqItems.map((f) => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": { "@type": "Answer", "text": f.a },
  })),
};

export const signaBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Jaak.ai", "item": "https://jaak.ai" },
    { "@type": "ListItem", "position": 2, "name": "Signa", "item": "https://jaak.ai/signa" },
  ],
};
