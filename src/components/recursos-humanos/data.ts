/**
 * Datos estructurados de la landing "Firma Digital para Recursos Humanos"
 * (/soluciones/recursos-humanos), compartidos entre LandingClient y los
 * componentes interactivos (UseCaseSelector, BuyerPersonaSection).
 */

export interface UseCase {
  id: string;
  title: string;
  text: string;
  microflow?: string;
}

export const useCases: UseCase[] = [
  {
    id: "contratacion",
    title: "Contratos laborales",
    text: "Formaliza contratos a distancia y conserva evidencia asociada al proceso de firma.",
    microflow: "Contrato → firma → evidencia → expediente",
  },
  {
    id: "anexos",
    title: "Anexos y modificaciones",
    text: "Gestiona cambios de puesto, salario, jornada, ubicación o condiciones laborales sin regresar al papel.",
  },
  {
    id: "teletrabajo",
    title: "Teletrabajo e híbrido",
    text: "Firma convenios, modificaciones y documentación asociada a esquemas de trabajo remoto.",
  },
  {
    id: "confidencialidad",
    title: "Confidencialidad y propiedad intelectual",
    text: "Genera evidencia alrededor de documentos sensibles para la organización y sus colaboradores.",
  },
  {
    id: "politicas",
    title: "Políticas y acuses",
    text: "Digitaliza códigos de conducta, políticas internas, seguridad de información y documentos que requieren aceptación.",
  },
  {
    id: "compensacion",
    title: "Bonos, comisiones y autorizaciones",
    text: "Digitaliza documentación complementaria de compensación y conserva trazabilidad sobre las aceptaciones.",
  },
  {
    id: "activos",
    title: "Entrega de equipo y herramientas",
    text: "Conserva evidencia de entregas, aceptaciones y responsabilidades asociadas al colaborador.",
  },
];

export interface SignatureLayer {
  label: string;
  note: string;
}

export interface SignatureOption {
  id: string;
  label: string;
  panelTitle: string;
  layers: SignatureLayer[];
  useCaseId: string;
}

export const signatureOptions: SignatureOption[] = [
  {
    id: "contrato",
    label: "Contrato",
    panelTitle: "Contrato laboral",
    layers: [
      { label: "Firma digital", note: "Base del proceso de aceptación documental." },
      { label: "Evidencia del evento", note: "Puede incorporar registro de fecha, hora y participantes." },
      { label: "Integridad documental", note: "Huella del documento firmado, según el nivel elegido." },
      { label: "Sello de tiempo cuando corresponda", note: "Refuerza temporalidad conforme al riesgo del contrato." },
      { label: "Verificación de identidad cuando el nivel de riesgo lo requiera", note: "Capa opcional, no obligatoria por defecto." },
    ],
    useCaseId: "contratacion",
  },
  {
    id: "anexo",
    label: "Anexo",
    panelTitle: "Anexo o modificación laboral",
    layers: [
      { label: "Firma digital", note: "Agiliza aceptación de cambios de puesto, salario o jornada." },
      { label: "Evidencia del evento", note: "Puede incorporar trazabilidad sobre quién y cuándo aceptó." },
      { label: "Integridad documental", note: "Según el nivel de evidencia requerido por el anexo." },
    ],
    useCaseId: "anexos",
  },
  {
    id: "teletrabajo",
    label: "Teletrabajo",
    panelTitle: "Convenio de teletrabajo",
    layers: [
      { label: "Firma digital", note: "Para convenios y modificaciones del esquema remoto." },
      { label: "Evidencia del evento", note: "Puede incorporar registro de fecha y participantes." },
      { label: "Sello de tiempo cuando corresponda", note: "Cuando el proceso busca fortalecer temporalidad." },
    ],
    useCaseId: "teletrabajo",
  },
  {
    id: "politica",
    label: "Política",
    panelTitle: "Política interna o acuse",
    layers: [
      { label: "Firma digital", note: "Para aceptación de códigos de conducta y políticas internas." },
      { label: "Evidencia del evento", note: "Registro de quién aceptó y cuándo, según se configure." },
      { label: "Integridad documental", note: "Útil cuando se actualizan versiones de la política." },
    ],
    useCaseId: "politicas",
  },
  {
    id: "confidencialidad",
    label: "Confidencialidad",
    panelTitle: "Confidencialidad y propiedad intelectual",
    layers: [
      { label: "Firma digital", note: "Para acuerdos de confidencialidad y propiedad intelectual." },
      { label: "Evidencia del evento", note: "Puede incorporar trazabilidad reforzada por el valor del documento." },
      { label: "Integridad documental", note: "Huella del documento según el nivel de evidencia requerido." },
      { label: "Sello de tiempo cuando corresponda", note: "Para documentos con mayor sensibilidad." },
    ],
    useCaseId: "confidencialidad",
  },
  {
    id: "compensacion",
    label: "Bono / comisión",
    panelTitle: "Bono, comisión o autorización",
    layers: [
      { label: "Firma digital", note: "Para documentación complementaria de compensación." },
      { label: "Evidencia del evento", note: "Trazabilidad sobre la aceptación, cuando se requiera." },
    ],
    useCaseId: "compensacion",
  },
  {
    id: "activos",
    label: "Entrega de equipo",
    panelTitle: "Entrega de equipo y herramientas",
    layers: [
      { label: "Firma digital", note: "Para el acuse de entrega y responsabilidad del colaborador." },
      { label: "Evidencia del evento", note: "Puede incorporar fecha, hora y responsable de la entrega." },
    ],
    useCaseId: "activos",
  },
];

export interface EvidenceLevel {
  id: string;
  level: number;
  name: string;
  text: string;
}

export const evidenceLevels: EvidenceLevel[] = [
  {
    id: "nivel-1",
    level: 1,
    name: "Firma digital",
    text: "Para procesos de aceptación documental donde se busca agilizar la firma y mantener trazabilidad.",
  },
  {
    id: "nivel-2",
    level: 2,
    name: "Firma + evidencia reforzada",
    text: "Agrega información sobre el evento de firma, integridad y trazabilidad del documento.",
  },
  {
    id: "nivel-3",
    level: 3,
    name: "Firma + sello digital de tiempo",
    text: "Para procesos donde la organización busca fortalecer evidencia de integridad y temporalidad mediante mecanismos como NOM-151 cuando corresponda.",
  },
];

export const identityLayer = {
  name: "+ Identidad",
  text: "Cuando el nivel de riesgo requiere mayor certeza sobre quién está firmando, JAAK puede incorporar verificación de identidad.",
};

export interface BuyerPersona {
  id: string;
  anchor: string;
  audience: string;
  title: string;
  subtitle: string;
  text: string;
}

export const buyerPersonas: BuyerPersona[] = [
  {
    id: "chro",
    anchor: "direccion-rh",
    audience: "CHRO / Dirección de RH",
    title: "Dirección de Recursos Humanos",
    subtitle: "Estandarización y transformación digital",
    text: "Reduce procesos manuales y crea una experiencia consistente para colaboradores, independientemente de ubicación, sucursal o área.",
  },
  {
    id: "hr-operations",
    anchor: "operaciones",
    audience: "HR Operations / People Operations",
    title: "HR Operations",
    subtitle: "Menos seguimiento manual",
    text: "Gestiona contratos, anexos y políticas dentro de un flujo trazable, sin depender de correos, hojas de cálculo y carpetas dispersas.",
  },
  {
    id: "relaciones-laborales",
    anchor: "evidencia",
    audience: "Relaciones Laborales / Legal Laboral",
    title: "Relaciones Laborales",
    subtitle: "Más claridad documental",
    text: "Fortalece la evidencia disponible alrededor de documentos laborales mediante trazabilidad, integridad y temporalidad.",
  },
  {
    id: "hris",
    anchor: "integraciones",
    audience: "HRIS / HR Technology",
    title: "HR Technology / HRIS",
    subtitle: "Firma dentro del flujo",
    text: "Integra la firma a los procesos y sistemas que la organización ya utiliza, evitando exportaciones, cargas manuales y pasos desconectados.",
  },
  {
    id: "nomina",
    anchor: "compensacion",
    audience: "Nómina / Compensación",
    title: "Nómina y Compensación",
    subtitle: "Documentación complementaria",
    text: "Gestiona bonos, comisiones, modificaciones salariales, autorizaciones y documentación asociada sin alterar el proceso del CFDI de nómina.",
  },
];

export const DOCUMENTO_OPTIONS = [
  "Contratos laborales",
  "Anexos/modificaciones",
  "Teletrabajo",
  "Políticas/acuses",
  "Confidencialidad",
  "Compensación",
  "Entrega de equipo",
  "Otro",
] as const;
