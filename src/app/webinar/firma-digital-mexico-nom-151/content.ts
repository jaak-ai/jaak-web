// Contenido editable de la landing. Todo el copy vive aquí para que Marketing
// pueda ajustarlo sin tocar componentes.
//
// PENDIENTE DE VALIDACIÓN (no provino del brief): agenda por bloques, ejemplos
// por sector y preguntas frecuentes están redactados con criterio
// conservador (sin cifras, precios ni acreditaciones). Confirmar con JAAK y PSC
// Codex antes de publicar.

import { LINKS } from "@/lib/webinar/firmaDigital";

export interface Speaker {
  name: string;
  role: string;
  bio: string;
  linkedin: string;
  /** Foto aprobada. Colocar el archivo en public/images/webinar/firma-digital/ y declararlo aquí. */
  photo?: { src: string; alt: string; width: number; height: number };
}

const PHOTO_DIR = "/images/webinar/firma-digital";

export const SPEAKERS: Speaker[] = [
  {
    name: "Arianna Quezada",
    role: "CEO y cofundadora de JAAK",
    bio: "Su trayectoria profesional se ha enfocado en impulsar la adopción de tecnologías de identidad digital, verificación biométrica y firma electrónica, acercando la innovación a las necesidades de seguridad y cumplimiento de las empresas. Durante el webinar compartirá cómo la verificación de identidad y la trazabilidad de la evidencia permiten fortalecer los procesos de contratación digital, así como los aspectos que deben considerarse al elegir una solución de firma electrónica.",
    linkedin: LINKS.ariannaLinkedin,
    photo: { src: `${PHOTO_DIR}/arianna-quezada.webp`, alt: "Retrato de Arianna Quezada, CEO y cofundadora de JAAK", width: 640, height: 640 },
  },
  {
    name: "Benjamín González",
    role: "Director de Operaciones de PSC Codex",
    bio: "Su trayectoria profesional se ha orientado a la gestión de operaciones y procesos de certificación digital, con especial atención a los mecanismos que permiten respaldar la integridad, autenticidad y conservación de documentos electrónicos. Durante el webinar abordará el papel de los Prestadores de Servicios de Certificación, los sellos digitales de tiempo y la NOM-151, explicando cómo estos elementos contribuyen a fortalecer la evidencia documental en las operaciones digitales.",
    linkedin: LINKS.benjaminLinkedin,
    photo: { src: `${PHOTO_DIR}/benjamin-gonzalez.webp`, alt: "Retrato de Benjamín González, Director de Operaciones de PSC Codex", width: 640, height: 640 },
  },
];

export const LEARNINGS = [
  "Qué diferencia a firmar un documento de poder demostrar después quién firmó, qué firmó y cuándo.",
  "Cómo se complementan identidad verificada, integridad documental y certificación en un proceso de contratación digital.",
  "Qué es la NOM-151 y qué aporta —y qué no— a la conservación de la evidencia de un contrato.",
  "Qué criterios usar para elegir el nivel de seguridad adecuado según el tipo de contrato y su riesgo.",
  "Qué preguntas hacer a un proveedor antes de adoptar un proceso de firma digital.",
];

export const AGENDA = [
  { time: "00–05 min", title: "Bienvenida y contexto", text: "Presentación de las organizaciones y del objetivo del encuentro." },
  { time: "05–20 min", title: "Firmar no es lo mismo que poder demostrar", text: "Un mapa de las opciones de firma en México y de las preguntas que cada contrato debe poder responder." },
  { time: "20–35 min", title: "Identidad, integridad y certificación", text: "Qué aporta cada capa, cómo se complementan y dónde están sus límites." },
  { time: "35–50 min", title: "Cómo elegir según el contrato", text: "Criterios prácticos para decidir el nivel de seguridad, identidad y evidencia adecuado." },
  { time: "50–60 min", title: "Preguntas y respuestas", text: "Espacio para resolver dudas de los asistentes." },
];

export const APPLICATIONS = [
  { icon: "finanzas" as const, title: "Servicios financieros", text: "Contratos de crédito, apertura de cuentas y consentimientos, donde la identidad del firmante y la trazabilidad del expediente son parte de la revisión." },
  { icon: "inmobiliario" as const, title: "Inmobiliario", text: "Promesas de compraventa, arrendamientos y mandatos, con múltiples partes y documentos que deben conservar su integridad en el tiempo." },
  { icon: "rrhh" as const, title: "Recursos humanos", text: "Contratos laborales, acuerdos de confidencialidad y políticas internas firmados a distancia y a volumen." },
  { icon: "legal" as const, title: "Legal", text: "Contratos comerciales y poderes cuya eventual defensa depende de la evidencia que se haya generado al firmar." },
  { icon: "cumplimiento" as const, title: "Cumplimiento", text: "Expedientes que deben poder presentarse ante auditorías y autoridades, con evidencia ordenada de quién firmó y cuándo." },
];

export const LAYERS = [
  { title: "Identidad", text: "Quién firma. La identidad verificada reduce el riesgo de suplantación antes de que exista el documento." },
  { title: "Integridad", text: "Qué se firmó. Permite detectar si el contenido cambió después de la firma." },
  { title: "Evidencia y certificación", text: "Cuándo y con qué respaldo. Una constancia emitida por un tercero fortalece la conservación del documento en el tiempo." },
];

export const FAQ = [
  { q: "¿Cuándo y a qué hora es el webinar?", a: "El miércoles 25 de noviembre de 2026, de 11:00 a 12:00 h (hora de Ciudad de México). Dura 60 minutos." },
  { q: "¿Cómo me registro?", a: "Seleccione «Reservar mi lugar» y complete el formulario en GoToWebinar. El clic en el botón no confirma su registro: este se completa únicamente al enviar el formulario de GoToWebinar." },
  { q: "¿Tiene costo?", a: "No. El webinar es gratuito." },
  { q: "¿Es presencial o en línea?", a: "Es en línea. Recibirá las instrucciones de acceso por parte de GoToWebinar al registrarse." },
  { q: "¿La NOM-151 prueba por sí sola la identidad de quien firma?", a: "No. La NOM-151 se refiere a la conservación de mensajes de datos y a la digitalización de documentos; no verifica por sí misma quién es la persona que firma. Por eso conviene combinarla con un proceso de identidad verificada." },
  { q: "¿Contar con una constancia NOM-151 garantiza el resultado de un juicio?", a: "No. Fortalece la evidencia sobre la integridad y existencia de un documento en el tiempo, pero la valoración corresponde siempre a la autoridad. Para su caso concreto, consulte a su asesor jurídico." },
  { q: "¿JAAK es un Prestador de Servicios de Certificación (PSC)?", a: "No. JAAK aporta la capa de identidad verificada y el flujo de firma. La certificación corresponde a PSC Codex. Puede consultar el directorio oficial de PSC de la Secretaría de Economía para verificar a cualquier prestador." },
  { q: "¿A quién está dirigido?", a: "A equipos de servicios financieros, inmobiliario, recursos humanos, legal y cumplimiento que contratan o conservan documentos de forma digital." },
];
