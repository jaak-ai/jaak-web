export interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  dateISO: string;
  category: string;
  slug: string;
  readTime: string;
  image?: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: "Alerta CONDUSEF: ¿Por qué persiste la suplantación de instituciones financieras?",
    excerpt: "CONDUSEF alertó sobre el nuevo modus operandi de suplantadores. Analizamos por qué la suplantación sigue funcionando, qué vacíos estructurales la permiten y cómo la identidad digital verificable puede cambiar el panorama.",
    date: "10 de febrero, 2026",
    dateISO: "2026-02-10",
    category: "Fraude",
    slug: "alerta-condusef-suplantacion-identidad",
    readTime: "10 min",
    image: "/images/blog/alerta-condusef-suplantacion.jpg",
  },
  {
    title: "La inteligencia artificial como infraestructura de confianza: liderazgo, gobernanza y tecnología responsable",
    excerpt: "La IA en sectores estratégicos exige más que eficiencia: requiere gobernanza, trazabilidad y liderazgo responsable. Analizamos los Principios de Chapultepec y cómo JAAK integra ética y tecnología.",
    date: "7 de febrero, 2026",
    dateISO: "2026-02-07",
    category: "Compliance",
    slug: "ia-infraestructura-confianza",
    readTime: "10 min",
    image: "/images/blog/ia-infraestructura-confianza.jpg",
  },
  {
    title: "La protección de datos personales: un compromiso que va más allá del cumplimiento",
    excerpt: "La protección de datos ya no es solo un requisito legal, es un pilar de confianza, reputación y continuidad operativa. Descubre cómo fortalecer tu estrategia de protección desde la verificación de identidad.",
    date: "28 de enero, 2026",
    dateISO: "2026-01-28",
    category: "Seguridad",
    slug: "proteccion-datos-personales",
    readTime: "8 min",
    image: "/images/blog/standard-quality-control-concept-m.jpg",
  },
  {
    title: "El registro obligatorio de celulares: cuando la identidad se diseña mal, el sistema colapsa",
    excerpt: "Lo que está ocurriendo con el padrón obligatorio de telefonía en México es la consecuencia de confundir cumplimiento con seguridad. Análisis del fallo crítico que permite suplantación de identidad con deepfakes.",
    date: "13 de enero, 2026",
    dateISO: "2026-01-13",
    category: "Análisis",
    slug: "padron-celulares-fallo-verificacion-identidad",
    readTime: "8 min",
    image: "/images/blog/padron-celulares-fallo.png",
  },
  {
    title: "Tendencias KYC 2026: Lo que toda institución financiera debe saber",
    excerpt: "El panorama de Know Your Customer está evolucionando rápidamente. Descubre las principales tendencias que están transformando la verificación de identidad en México y cómo preparar tu organización para los nuevos requerimientos regulatorios.",
    date: "8 de enero, 2026",
    dateISO: "2026-01-08",
    category: "KYC",
    slug: "tendencias-kyc-2026",
    readTime: "6 min",
    image: "/images/blog/tendencias-kyc-2026.png",
  },
  {
    title: "Guía completa de las disposiciones CNBV para verificación de identidad",
    excerpt: "Un análisis detallado de los requisitos de la Comisión Nacional Bancaria y de Valores para el proceso de identificación de clientes. Conoce las obligaciones específicas y cómo cumplirlas de manera eficiente.",
    date: "3 de enero, 2026",
    dateISO: "2026-01-03",
    category: "Regulación",
    slug: "disposiciones-cnbv-verificacion-identidad",
    readTime: "10 min",
    image: "/images/blog/disposiciones-cnbv-verificacion-identidad.png",
  },
  {
    title: "Seguridad biométrica: Cómo la prueba de vida previene el fraude",
    excerpt: "La tecnología de liveness detection es fundamental para prevenir ataques de presentación. Exploramos cómo funciona la certificación iBeta y por qué es esencial para tu proceso de onboarding.",
    date: "27 de diciembre, 2025",
    dateISO: "2025-12-27",
    category: "Seguridad",
    slug: "seguridad-biometrica-prueba-de-vida",
    readTime: "7 min",
    image: "/images/blog/seguridad-biometrica-prueba-de-vida.png",
  },
  {
    title: "Prevención de fraude en el onboarding digital: Mejores prácticas",
    excerpt: "El fraude por suplantación de identidad representa pérdidas millonarias cada año. Te compartimos las estrategias más efectivas para detectar y prevenir intentos de fraude durante la verificación de clientes.",
    date: "20 de diciembre, 2025",
    dateISO: "2025-12-20",
    category: "Fraude",
    slug: "prevencion-fraude-onboarding-digital",
    readTime: "9 min",
    image: "/images/blog/prevencion-fraude-onboarding-digital.png",
  },
  {
    title: "Onboarding digital: De días a minutos sin sacrificar cumplimiento",
    excerpt: "Transformar tu proceso de alta de clientes no significa comprometer la regulación. Descubre cómo las instituciones financieras están logrando verificaciones en menos de 30 segundos manteniendo el 100% de cumplimiento.",
    date: "15 de diciembre, 2025",
    dateISO: "2025-12-15",
    category: "Onboarding",
    slug: "onboarding-digital-rapido-cumplimiento",
    readTime: "5 min",
    image: "/images/blog/onboarding-digital-rapido-cumplimiento.png",
  },
  {
    title: "Mejores prácticas de compliance para empresas reguladas en México",
    excerpt: "Desde LFPIORPI hasta las disposiciones de la UIF, navegar el ecosistema regulatorio mexicano puede ser complejo. Esta guía te ayuda a implementar un programa de cumplimiento robusto y auditable.",
    date: "10 de diciembre, 2025",
    dateISO: "2025-12-10",
    category: "Compliance",
    slug: "mejores-practicas-compliance-mexico",
    readTime: "12 min",
    image: "/images/blog/mejores-practicas-compliance-mexico.png",
  },
];

export const categoryColors: Record<string, { bg: string; text: string }> = {
  Análisis: { bg: "bg-red-500/10", text: "text-red-500" },
  KYC: { bg: "bg-[#0066ff]/10", text: "text-[#0066ff]" },
  Regulación: { bg: "bg-purple-500/10", text: "text-purple-500" },
  Seguridad: { bg: "bg-[#00d4aa]/10", text: "text-[#00d4aa]" },
  Fraude: { bg: "bg-amber-500/10", text: "text-amber-600" },
  Onboarding: { bg: "bg-orange-500/10", text: "text-orange-500" },
  Compliance: { bg: "bg-indigo-500/10", text: "text-indigo-500" },
};
