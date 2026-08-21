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
  /** Atributo `d` de un <path> SVG, viewBox 0 0 24 24, strokeWidth 1.5. */
  icon: string;
  /** true = tarjeta protagonista (más peso visual); el resto se agrupa como "otros casos de uso". */
  featured?: boolean;
}

export const useCases: UseCase[] = [
  {
    id: "contratacion",
    title: "Contratos laborales",
    text: "Formaliza contratos a distancia y conserva evidencia asociada al proceso de firma.",
    microflow: "Contrato → firma → evidencia → expediente",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
    featured: true,
  },
  {
    id: "anexos",
    title: "Anexos y modificaciones",
    text: "Gestiona cambios de puesto, salario, jornada, ubicación o condiciones laborales sin regresar al papel.",
    microflow: "Cambio → anexo → firma → expediente",
    icon: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
    featured: true,
  },
  {
    id: "teletrabajo",
    title: "Teletrabajo e híbrido",
    text: "Firma convenios, modificaciones y documentación asociada a esquemas de trabajo remoto.",
    icon: "M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5m4.75-11.396a24.301 24.301 0 014.5 0M14.25 3.104v5.714c0 .597.237 1.17.659 1.591L19.8 15.3m-14.8-.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0012 21c2.773 0 5.491-.235 8.135-.687 1.718-.293 2.3-2.379 1.067-3.611L19.8 15.3m-14.8-.8a9.065 9.065 0 016.23-.693 9.065 9.065 0 016.23.693",
  },
  {
    id: "confidencialidad",
    title: "Confidencialidad y propiedad intelectual",
    text: "Genera evidencia alrededor de documentos sensibles para la organización y sus colaboradores.",
    icon: "M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z",
  },
  {
    id: "politicas",
    title: "Políticas y acuses",
    text: "Digitaliza códigos de conducta, políticas internas, seguridad de información y documentos que requieren aceptación.",
    icon: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    id: "compensacion",
    title: "Bonos, comisiones y autorizaciones",
    text: "Digitaliza documentación complementaria de compensación y conserva trazabilidad sobre las aceptaciones.",
    microflow: "Autorización → firma → trazabilidad",
    icon: "M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    featured: true,
  },
  {
    id: "activos",
    title: "Entrega de equipo y herramientas",
    text: "Conserva evidencia de entregas, aceptaciones y responsabilidades asociadas al colaborador.",
    icon: "M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z",
  },
];

export interface SignatureLayer {
  label: string;
  note: string;
  /** true = capa que "puede incorporar" según proceso/riesgo, no incluida por defecto. */
  conditional?: boolean;
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
      { label: "Sello de tiempo cuando corresponda", note: "Refuerza temporalidad conforme al riesgo del contrato.", conditional: true },
      { label: "Verificación de identidad cuando el nivel de riesgo lo requiera", note: "Capa opcional, no obligatoria por defecto.", conditional: true },
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
      { label: "Sello de tiempo cuando corresponda", note: "Cuando el proceso busca fortalecer temporalidad.", conditional: true },
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
      { label: "Sello de tiempo cuando corresponda", note: "Para documentos con mayor sensibilidad.", conditional: true },
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
  /** Etiqueta corta para el tab (barra de navegación de buyers). */
  shortLabel: string;
  audience: string;
  title: string;
  subtitle: string;
  text: string;
  /** Caso de uso más relevante para este buyer (useCases[].id) — CTA "Ver cómo funciona". */
  relatedUseCaseId: string;
}

export const buyerPersonas: BuyerPersona[] = [
  {
    id: "chro",
    anchor: "direccion-rh",
    shortLabel: "Dirección RH",
    audience: "CHRO / Dirección de RH",
    title: "Dirección de Recursos Humanos",
    subtitle: "Estandarización y transformación digital",
    text: "Reduce procesos manuales y crea una experiencia consistente para colaboradores, independientemente de ubicación, sucursal o área.",
    relatedUseCaseId: "contratacion",
  },
  {
    id: "hr-operations",
    anchor: "operaciones",
    shortLabel: "Operaciones",
    audience: "HR Operations / People Operations",
    title: "HR Operations",
    subtitle: "Menos seguimiento manual",
    text: "Gestiona contratos, anexos y políticas dentro de un flujo trazable, sin depender de correos, hojas de cálculo y carpetas dispersas.",
    relatedUseCaseId: "anexos",
  },
  {
    id: "relaciones-laborales",
    anchor: "evidencia",
    shortLabel: "Legal",
    audience: "Relaciones Laborales / Legal Laboral",
    title: "Relaciones Laborales",
    subtitle: "Más claridad documental",
    text: "Fortalece la evidencia disponible alrededor de documentos laborales mediante trazabilidad, integridad y temporalidad.",
    relatedUseCaseId: "confidencialidad",
  },
  {
    id: "hris",
    anchor: "integraciones",
    shortLabel: "HR Tech",
    audience: "HRIS / HR Technology",
    title: "HR Technology / HRIS",
    subtitle: "Firma dentro del flujo",
    text: "Integra la firma a los procesos y sistemas que la organización ya utiliza, evitando exportaciones, cargas manuales y pasos desconectados.",
    relatedUseCaseId: "contratacion",
  },
  {
    id: "nomina",
    anchor: "compensacion",
    shortLabel: "Nómina",
    audience: "Nómina / Compensación",
    title: "Nómina y Compensación",
    subtitle: "Documentación complementaria",
    text: "Gestiona bonos, comisiones, modificaciones salariales, autorizaciones y documentación asociada sin alterar el proceso del CFDI de nómina.",
    relatedUseCaseId: "compensacion",
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
