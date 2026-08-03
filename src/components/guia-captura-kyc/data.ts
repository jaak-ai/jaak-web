export interface CaptureExample {
  src: string;
  label: string;
  desc: string;
  alt: string;
}

export const CHECKLIST_ITEMS = [
  "Ubíquese en un lugar con luz natural o luz blanca uniforme, de frente.",
  "Use un fondo simple, sin objetos detrás de usted.",
  "Limpie el lente de su cámara.",
  "Otorgue permisos de cámara al navegador o la aplicación cuando se lo solicite.",
  "Tenga a la mano su documento original (no una fotocopia ni una foto de otra foto).",
  "Retire cubrebocas, gorra o lentes oscuros antes de la captura facial.",
  "Verifique que solo usted aparezca frente a la cámara.",
  "Cuide tener una conexión a internet estable.",
];

export const DOCUMENT_CORRECT: CaptureExample[] = [
  {
    src: "/images/guia-captura-kyc/documento-correcto-plano-completo.jpg",
    label: "Documento plano y completo",
    desc: "Cuatro esquinas visibles, sin inclinación, buena iluminación.",
    alt: "Documento ficticio plano y completo, con las cuatro esquinas visibles",
  },
  {
    src: "/images/guia-captura-kyc/documento-correcto-pasaporte-pagina-datos.jpg",
    label: "Pasaporte: página de datos",
    desc: "Solo la página con fotografía y zona de lectura mecánica.",
    alt: "Página de datos de un pasaporte ficticio, correctamente encuadrada",
  },
];

export const DOCUMENT_AVOID: CaptureExample[] = [
  {
    src: "/images/guia-captura-kyc/documento-evita-reflejo.jpg",
    label: "Con reflejo",
    desc: "El flash o una luz directa oculta datos.",
    alt: "Documento ficticio con un reflejo de luz que oculta parte de los datos",
  },
  {
    src: "/images/guia-captura-kyc/documento-evita-obstruido.jpg",
    label: "Obstruido",
    desc: "Un dedo o mano cubre parte del texto.",
    alt: "Un dedo cubriendo parte del documento",
  },
  {
    src: "/images/guia-captura-kyc/documento-evita-inclinado-cortado.jpg",
    label: "Inclinado o cortado",
    desc: "Falta una esquina o borde en el encuadre.",
    alt: "Documento inclinado con una esquina fuera del encuadre",
  },
  {
    src: "/images/guia-captura-kyc/documento-evita-borroso.jpg",
    label: "Borroso",
    desc: "Imagen fuera de foco, usualmente por movimiento.",
    alt: "Documento borroso por movimiento durante la captura",
  },
  {
    src: "/images/guia-captura-kyc/documento-evita-muy-oscuro.jpg",
    label: "Muy oscuro",
    desc: "Poca luz ambiental impide leer el documento con claridad.",
    alt: "Documento capturado en un ambiente con poca luz",
  },
  {
    src: "/images/guia-captura-kyc/documento-evita-fondo-distractivo.jpg",
    label: "Fondo distractivo",
    desc: "Objetos alrededor dificultan detectar los bordes del documento.",
    alt: "Documento fotografiado sobre un fondo con muchos objetos",
  },
  {
    src: "/images/guia-captura-kyc/documento-evita-fotocopia-o-pantalla.jpg",
    label: "Fotocopia o pantalla",
    desc: "Use siempre el documento físico original, no una copia o una foto de pantalla.",
    alt: "Fotografía de una fotocopia o de una pantalla en vez del documento físico",
  },
];

export const FACE_CORRECT: CaptureExample[] = [
  {
    src: "/images/guia-captura-kyc/rostro-correcto-iluminacion.jpg",
    label: "Iluminación facial correcta",
    desc: "Luz frontal uniforme, sin sombras marcadas ni brillos.",
    alt: "Rostro con iluminación frontal uniforme",
  },
  {
    src: "/images/guia-captura-kyc/rostro-correcto-postura-frontal.jpg",
    label: "Postura frontal",
    desc: "Rostro de frente, a la altura de los ojos, encuadre centrado.",
    alt: "Rostro de frente a la cámara, a la altura de los ojos",
  },
];

export const FACE_AVOID: CaptureExample[] = [
  {
    src: "/images/guia-captura-kyc/rostro-evita-contraluz.jpg",
    label: "Contraluz",
    desc: "Una ventana o lámpara detrás oscurece el rostro.",
    alt: "Rostro en contraluz, con una ventana iluminada detrás",
  },
  {
    src: "/images/guia-captura-kyc/rostro-evita-luz-intensa-arriba.jpg",
    label: "Luz intensa desde arriba",
    desc: "Sombras marcadas bajo ojos y nariz.",
    alt: "Rostro con luz cenital dura y sombras marcadas",
  },
  {
    src: "/images/guia-captura-kyc/rostro-evita-camara-desde-abajo.jpg",
    label: "Cámara desde abajo",
    desc: "Distorsiona el rostro, dificulta el reconocimiento.",
    alt: "Cámara apuntando desde abajo, distorsionando el rostro",
  },
  {
    src: "/images/guia-captura-kyc/rostro-evita-camara-desde-arriba.jpg",
    label: "Cámara desde arriba",
    desc: "También distorsiona el encuadre del rostro.",
    alt: "Cámara apuntando desde arriba",
  },
  {
    src: "/images/guia-captura-kyc/rostro-evita-dos-personas.jpg",
    label: "Dos personas",
    desc: "Solo una persona debe estar en el encuadre.",
    alt: "Dos personas dentro del mismo encuadre",
  },
  {
    src: "/images/guia-captura-kyc/rostro-evita-accesorios.jpg",
    label: "Accesorios que obstruyen",
    desc: "Cubrebocas, gorra o lentes oscuros.",
    alt: "Rostro cubierto por cubrebocas y gorra",
  },
  {
    src: "/images/guia-captura-kyc/rostro-evita-lentes-con-reflejo.jpg",
    label: "Lentes con reflejo",
    desc: "El brillo sobre el cristal oculta los ojos.",
    alt: "Lentes con un reflejo marcado que oculta los ojos",
  },
  {
    src: "/images/guia-captura-kyc/rostro-evita-muy-cerca.jpg",
    label: "Demasiado cerca",
    desc: "La imagen se recorta y pierde el contorno.",
    alt: "Rostro demasiado cerca, recortado por el encuadre",
  },
  {
    src: "/images/guia-captura-kyc/rostro-evita-muy-lejos.jpg",
    label: "Demasiado lejos",
    desc: "El rostro ocupa muy poco del encuadre.",
    alt: "Rostro demasiado lejos, ocupando poco del encuadre",
  },
  {
    src: "/images/guia-captura-kyc/rostro-evita-ambiente-oscuro.jpg",
    label: "Ambiente oscuro",
    desc: "Sin luz suficiente, el sistema no distingue los rasgos.",
    alt: "Rostro capturado en un ambiente con muy poca luz",
  },
  {
    src: "/images/guia-captura-kyc/rostro-evita-no-frontal.jpg",
    label: "No frontal",
    desc: "El rostro debe estar de frente, no de perfil o girado.",
    alt: "Rostro girado, no de frente a la cámara",
  },
  {
    src: "/images/guia-captura-kyc/rostro-evita-movimiento-borroso.jpg",
    label: "Movimiento borroso",
    desc: "Manténgase quieto durante los segundos de captura.",
    alt: "Rostro borroso por movimiento durante la captura",
  },
];

export const LIVENESS_CORRECT: CaptureExample[] = [
  {
    src: "/images/guia-captura-kyc/liveness-correcto-seguir-instruccion.jpg",
    label: "Siga la instrucción tal cual se indica",
    desc: "Un movimiento breve y controlado (girar, parpadear) es suficiente.",
    alt: "Persona siguiendo la instrucción de movimiento durante la prueba de vida activa",
  },
];

export const LIVENESS_AVOID: CaptureExample[] = [
  {
    src: "/images/guia-captura-kyc/liveness-evita-movimiento-exagerado.jpg",
    label: "Evite movimientos exagerados",
    desc: "Un giro muy brusco o rápido puede sacar el rostro del encuadre.",
    alt: "Persona haciendo un movimiento exagerado durante la prueba de vida",
  },
];

export const ERROR_DIAGNOSIS = [
  {
    q: "“No se detectó el documento completo”",
    a: "Falta un borde o esquina del documento en el encuadre. Vuelva a capturar asegurándose de que las cuatro esquinas sean visibles.",
  },
  {
    q: "“La imagen no tiene suficiente calidad”",
    a: "La foto está borrosa o con poca luz. Busque un lugar con mejor iluminación y mantenga el documento o el rostro firme durante la captura.",
  },
  {
    q: "“Se detectó algo cubriendo el documento”",
    a: "Un dedo, mano u objeto tapa parte de los datos. Sostenga el documento por los bordes, fuera del área impresa.",
  },
  {
    q: "“El documento no parece original”",
    a: "El sistema no confirmó que se trata de un documento físico (podría ser una foto de una pantalla o una fotocopia). Use siempre el documento físico original.",
  },
  {
    q: "“No se detectaron los elementos de seguridad esperados”",
    a: "Verifique que el documento esté vigente y sea el original, no una copia o una versión dañada.",
  },
  {
    q: "“Los datos no son consistentes”",
    a: "La lectura automática del documento no pudo confirmar la información. Repita la captura con buena luz para que el texto sea legible.",
  },
  {
    q: "“No se confirmó que la persona está presente en tiempo real”",
    a: "La prueba de vida no pudo validarse. Repita el proceso en un lugar con buena luz, mirando directo a la cámara, sin cubrir su rostro.",
  },
];

export const TECHNICAL_ISSUES = [
  {
    q: "La cámara no responde o el navegador no pide permiso",
    a: "Revise que no haya bloqueado el permiso de cámara previamente: en Chrome y Safari, el ícono de candado o de cámara en la barra de dirección permite reactivarlo. En Android o iOS, revise Ajustes → Aplicaciones/Safari → Permisos → Cámara.",
  },
  {
    q: "La cámara está siendo usada por otra aplicación",
    a: "Cierre otras aplicaciones o pestañas que puedan estar usando la cámara (videollamadas, otras apps de escaneo) e intente de nuevo.",
  },
  {
    q: "La página se queda cargando o la sesión expira",
    a: "Verifique su conexión a internet. Si el proceso se inició hace varios minutos, el enlace o código puede haber expirado; solicite uno nuevo.",
  },
  {
    q: "El navegador no es compatible",
    a: "Use una versión reciente de Chrome, Safari o Edge. Navegadores muy desactualizados pueden no soportar el acceso a cámara requerido.",
  },
  {
    q: "En móvil, la cámara abre volteada o en el lente equivocado",
    a: "Busque el ícono de cambio de cámara dentro del recuadro de captura para alternar entre cámara frontal y trasera.",
  },
];

export const STANDARDS_REFERENCE = [
  {
    code: "ISO/IEC 29794-5:2025",
    desc: "Marco de referencia para evaluar la calidad de imágenes faciales usadas en biometría (nitidez, iluminación, encuadre, expresión, ausencia de obstrucciones).",
  },
  {
    code: "ISO/IEC 39794-5:2019",
    desc: "Formato de intercambio de datos biométricos para imágenes faciales.",
  },
  {
    code: "ISO/IEC 24779-5:2020",
    desc: "Requisitos para retratos faciales de referencia usados en identificación, como encuadre y postura de cabeza.",
  },
  {
    code: "ISO/IEC 30107-3:2023",
    desc: "Marco para evaluar mecanismos de detección de ataques de presentación — prueba de vida frente a intentos de suplantación con fotos, videos o máscaras.",
  },
  {
    code: "ISO/IEC 19795-1:2021",
    desc: "Principios generales para evaluar el desempeño de sistemas biométricos.",
  },
  {
    code: "NIST FATE — Quality",
    desc: "Programa del NIST (Face Analysis Technology Evaluation) que compara el desempeño de algoritmos de calidad de imagen facial entre proveedores.",
  },
  {
    code: "ICAO Doc 9303",
    desc: "Referencia complementaria, solo para fotografías tipo pasaporte en documentos de viaje de lectura mecánica.",
  },
];

export const GUIA_FAQ = [
  {
    q: "¿Cuánto tiempo toma completar la verificación?",
    a: "Normalmente entre 3 y 5 minutos si el documento y el rostro se capturan correctamente al primer intento.",
  },
  {
    q: "¿Puedo usar lentes durante la captura facial?",
    a: "Sí, lentes ópticos graduados de armazón transparente o delgado generalmente no son un problema. Evite lentes oscuros, con reflejo marcado o de armazón grueso.",
  },
  {
    q: "¿Qué documentos puedo usar?",
    a: "Identificaciones oficiales vigentes como INE o pasaporte (página de datos). El tipo de documento aceptado puede variar según el proceso específico de cada empresa.",
  },
  {
    q: "¿Mis datos están seguros durante la captura?",
    a: "La información se transmite de forma cifrada y se usa exclusivamente para el proceso de verificación de identidad, conforme al aviso de privacidad de la empresa que solicita la verificación.",
  },
  {
    q: "¿Qué pasa si mi verificación es rechazada varias veces?",
    a: "Revise la sección de Diagnóstico de errores de esta guía. Si el problema persiste, contacte al soporte de la empresa que le solicitó la verificación.",
  },
  {
    q: "¿La prueba de vida graba un video que se guarda?",
    a: "El video o las capturas se procesan como parte de la verificación de identidad; su conservación y uso están sujetos al aviso de privacidad del proceso específico.",
  },
  {
    q: "¿Necesito una aplicación para completar la verificación?",
    a: "Depende del flujo: algunos procesos se completan directamente desde el navegador (web), otros mediante una aplicación móvil.",
  },
  {
    q: "¿Esta guía aplica a cualquier verificación KYC, no solo a las de JAAK?",
    a: "Los principios de iluminación, encuadre y calidad de imagen son de aplicación general en biometría facial. Los mensajes específicos de rechazo de la sección de Diagnóstico corresponden al proceso de JAAK.",
  },
];

export const STAGE_TABS = [
  { href: "#documento", label: "Documento" },
  { href: "#rostro", label: "Rostro" },
  { href: "#prueba-de-vida", label: "Prueba de vida" },
  { href: "#diagnostico", label: "Diagnóstico de errores" },
  { href: "#problemas-tecnicos", label: "Problemas técnicos" },
];
