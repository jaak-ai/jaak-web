export interface SaludEvidenceLayer {
  n: string;
  name: string;
  proves: string;
  doesNotProve: string;
  ref: string;
}

// Fuente: las seis capas probatorias del expediente clínico, tal como
// se definen en el autodiagnóstico de preparación probatoria.
export const saludEvidenceLayers: SaludEvidenceLayer[] = [
  {
    n: "01",
    name: "Identidad",
    proves: "La identidad se resuelve antes de crear el registro y se distingue de la habilitación profesional.",
    doesNotProve:
      "No hay forma de sostener quién firmó. Las cuentas compartidas y la validación de cédula sin verificación de identidad son las dos brechas más comunes.",
    ref: "NOM-024 6.4 y 6.6.3 · Estándar de cédula profesional 17/02/2026",
  },
  {
    n: "02",
    name: "Información",
    proves: "El contenido informativo está versionado y queda registro de la versión mostrada.",
    doesNotProve:
      "No puede probarse qué se informó ni cuándo. La carga de probar el deber de informar recae en el prestador, así que esta brecha pesa directo en litigio.",
    ref: "LGS 51 Bis 1 · Reglamento 82 · Registro SCJN 2012512",
  },
  {
    n: "03",
    name: "Voluntad y atribución",
    proves: "La modalidad de firma es proporcional al riesgo y el flujo contempla representación y testigos.",
    doesNotProve:
      "El flujo no cubre los firmantes que la norma exige. Sin multirrol ni testigos, el documento de mayor riesgo del establecimiento queda sin soporte.",
    ref: "NOM-004 5.10 y 10.1.4 · Reglamento 80 a 83 · CCom 97",
  },
  {
    n: "04",
    name: "Integridad",
    proves: "Existe huella, control de versiones y evidencia de que el contenido no cambió.",
    doesNotProve:
      "No se puede demostrar que el documento no fue alterado después de firmarse. Un PDF legible no acredita integridad por sí solo.",
    ref: "NOM-024 5.8 y 5.9 · CCom 93 Bis",
  },
  {
    n: "05",
    name: "Fecha y trazabilidad",
    proves: "Los eventos se registran, se conservan y pueden exportarse para auditoría o peritaje.",
    doesNotProve:
      "No es posible reconstruir quién, qué, cuándo y desde dónde. Sin bitácora, la explicación depende de la memoria del personal.",
    ref: "NOM-024 5.8, 5.9 y 6.6.1",
  },
  {
    n: "06",
    name: "Conservación",
    proves: "La retención se clasifica por documento y contempla suspensión cuando hay controversia abierta.",
    doesNotProve:
      "La política de retención usa un plazo único. Depurar según el más corto es la forma más común de perder evidencia que después se necesita.",
    ref: "NOM-004 5.4 · CCom 49 · CFF 30 · NOM-151 4.2 y 6.2",
  },
];
