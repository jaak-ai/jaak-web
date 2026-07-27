export interface SaludNormativeChange {
  date: string;
  type: string;
  title: string;
  description: string;
  sourceLabel: string;
  sourceUrl: string;
}

// Corte normativo: solo se listan cambios verificados con fecha y fuente oficial.
// No agregar entradas sin fuente citable.
export const saludNormativeChangesUpdatedOn = "27 de julio de 2026";

export const saludNormativeChanges: SaludNormativeChange[] = [
  {
    date: "20 mar 2025",
    type: "Nueva ley",
    title: "Ley Federal de Protección de Datos Personales 2025",
    description:
      "Nueva ley de datos personales. Exige consentimiento expreso y por escrito para datos sensibles, medidas de seguridad proporcionales al riesgo, notificación de vulneraciones y deber de confidencialidad permanente.",
    sourceLabel: "Cámara de Diputados",
    sourceUrl: "https://www.diputados.gob.mx/LeyesBiblio/pdf/LFPDPPP.pdf",
  },
  {
    date: "17 feb 2026",
    type: "Modificación",
    title: "Modificación al estándar de cédula profesional electrónica",
    description:
      "Aclara que la cédula profesional, física o electrónica, no constituye identificación oficial: acredita autorización para ejercer la profesión, no la identidad de quien firma.",
    sourceLabel: "DOF",
    sourceUrl: "https://www.dof.gob.mx/nota_detalle.php?codigo=5776766&fecha=17/02/2026",
  },
  {
    date: "30 mar 2026",
    type: "Modificación",
    title: "Modificación de reglas del modelo de certificación del Consejo de Salubridad General",
    description:
      "Modificación de las reglas del modelo de certificación de establecimientos de atención médica del Consejo de Salubridad General.",
    sourceLabel: "DOF",
    sourceUrl: "https://www.dof.gob.mx/nota_detalle.php?codigo=5783050&fecha=30/03/2026",
  },
  {
    date: "Jul 2026",
    type: "Acción de aplicación",
    title: "Sanción de $42.85M por tratamiento biométrico",
    description:
      "Sanción impuesta por deficiencias en aviso de privacidad y consentimiento en tratamiento biométrico. No es un caso del sector salud, pero marca cómo la autoridad actual evalúa la biometría.",
    sourceLabel: "gob.mx",
    sourceUrl:
      "https://www.gob.mx/buengobierno/prensa/buen-gobierno-sanciona-a-la-federacion-mexicana-de-futbol-con-42-8-millones-de-pesos-por-violaciones-a-la-proteccion-de-datos-personales",
  },
];
