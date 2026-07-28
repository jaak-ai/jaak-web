// Datos de las 43 fuentes de riesgo documentadas en la guía "43 fuentes de
// riesgo, una sola consulta" (Edición 2026). Fuente única de verdad para el
// explorador interactivo de /listas-de-riesgo-pld-aml.
//
// TODO: VALIDACIÓN PRODUCTO — confirmar con el equipo de producto que las 43
// fuentes listadas siguen vigentes y disponibles en la oferta comercial antes
// de publicar. La disponibilidad de cada fuente depende de la autoridad
// emisora y puede variar.

export type RiskSourceTag =
  | "Restrictiva"
  | "Indicativa"
  | "Validación"
  | "Riesgo geográfico"
  | "Alerta regulatoria"
  | "Persona buscada"
  | "Riesgo fiscal"
  | "PEP";

export interface RiskSource {
  id: number;
  name: string;
  description: string;
  jurisdiction: string;
  tag: RiskSourceTag;
}

export interface RiskCategory {
  id: string;
  title: string;
  description: string;
  sources: RiskSource[];
}

export const riskCategories: RiskCategory[] = [
  {
    id: "sanciones-terrorismo",
    title: "Sanciones internacionales y terrorismo",
    description:
      "Fuentes relacionadas con personas, empresas, grupos, organizaciones, embarcaciones u otros sujetos incluidos en regímenes internacionales de sanciones o terrorismo.",
    sources: [
      { id: 1, name: "OFAC SDN", description: "Personas, empresas, grupos, embarcaciones y aeronaves bloqueadas o designadas por OFAC.", jurisdiction: "Estados Unidos", tag: "Restrictiva" },
      { id: 2, name: "OFAC Consolidated Non-SDN", description: "Personas y entidades incluidas en programas restrictivos de OFAC distintos de la lista SDN.", jurisdiction: "Estados Unidos", tag: "Restrictiva" },
      { id: 3, name: "Consejo de Seguridad de la ONU", description: "Personas, entidades y grupos sujetos a medidas del Consejo de Seguridad.", jurisdiction: "Internacional (ONU)", tag: "Restrictiva" },
      { id: 4, name: "UK Sanctions List", description: "Personas y entidades designadas bajo regímenes de sanciones del Reino Unido.", jurisdiction: "Reino Unido", tag: "Restrictiva" },
      { id: 5, name: "Executive Order 13382", description: "Sujetos relacionados con proliferación de armas de destrucción masiva.", jurisdiction: "Estados Unidos", tag: "Restrictiva" },
      { id: 6, name: "Lista de terrorismo de Emiratos Árabes Unidos", description: "Personas y organizaciones designadas como terroristas.", jurisdiction: "Emiratos Árabes Unidos", tag: "Restrictiva" },
      { id: 7, name: "Organizaciones terroristas de Australia", description: "Organizaciones calificadas como terroristas bajo la legislación australiana.", jurisdiction: "Australia", tag: "Restrictiva" },
      { id: 8, name: "DFAT Consolidated List", description: "Personas, entidades y embarcaciones sujetas a sanciones australianas.", jurisdiction: "Australia", tag: "Restrictiva" },
      { id: 9, name: "OSFI Canadá", description: "Sujetos relacionados con sanciones o medidas financieras canadienses.", jurisdiction: "Canadá", tag: "Restrictiva" },
      { id: 10, name: "MHA India", description: "Organizaciones, asociaciones e individuos prohibidos por el Ministerio del Interior de India.", jurisdiction: "India", tag: "Restrictiva" },
      { id: 11, name: "Entidades terroristas de Canadá", description: "Organizaciones incluidas en el listado oficial canadiense.", jurisdiction: "Canadá", tag: "Restrictiva" },
    ],
  },
  {
    id: "financieras-multilaterales",
    title: "Instituciones financieras multilaterales",
    description:
      "Fuentes para revisar inhabilitaciones, integridad de proveedores, fraude, corrupción, colusión y otras prácticas sancionables en proyectos financiados.",
    sources: [
      { id: 12, name: "AfDB Sanctions", description: "Personas y empresas sancionadas por el Banco Africano de Desarrollo.", jurisdiction: "Multilateral", tag: "Restrictiva" },
      { id: 13, name: "IDB Sanctions", description: "Personas y empresas sancionadas por el Banco Interamericano de Desarrollo.", jurisdiction: "Multilateral", tag: "Restrictiva" },
      { id: 14, name: "World Bank Debarred", description: "Personas o empresas impedidas para participar en contratos financiados por el Banco Mundial.", jurisdiction: "Multilateral", tag: "Restrictiva" },
      { id: 15, name: "World Bank Vendors", description: "Fuente de validación del estatus de proveedores vinculados al Banco Mundial.", jurisdiction: "Multilateral", tag: "Validación" },
    ],
  },
  {
    id: "comercio-buscados",
    title: "Comercio, mercados y personas buscadas",
    description:
      "Fuentes de restricciones comerciales, personas buscadas por autoridades federales y alertas de integridad de mercado.",
    sources: [
      { id: 16, name: "BIS", description: "Personas y entidades sujetas a restricciones comerciales o de exportación.", jurisdiction: "Estados Unidos", tag: "Restrictiva" },
      { id: 17, name: "FBI Wanted", description: "Personas publicadas en categorías de fugitivos, terrorismo, delitos federales o ciberdelincuencia.", jurisdiction: "Estados Unidos", tag: "Persona buscada" },
      { id: 18, name: "DEA", description: "Personas buscadas o señaladas por delitos relacionados con drogas.", jurisdiction: "Estados Unidos", tag: "Persona buscada" },
      { id: 19, name: "ICE", description: "Personas buscadas por tráfico de personas, lavado de dinero, fraude aduanero o crimen organizado.", jurisdiction: "Estados Unidos", tag: "Persona buscada" },
      { id: 20, name: "FDIC Failed Banks", description: "Instituciones bancarias estadounidenses que han quebrado.", jurisdiction: "Estados Unidos", tag: "Alerta regulatoria" },
      { id: 21, name: "SEC PAUSE", description: "Entidades que afirman falsamente estar registradas, firmas que suplantan empresas legítimas o reguladores ficticios.", jurisdiction: "Estados Unidos", tag: "Alerta regulatoria" },
    ],
  },
  {
    id: "mexico-fiscal",
    title: "México: riesgo fiscal, bloqueo y sanciones públicas",
    description:
      "Fuentes nacionales sobre riesgo fiscal, personas bloqueadas y sanciones administrativas publicadas por autoridades mexicanas.",
    sources: [
      { id: 22, name: "SAT, artículo 69 del CFF", description: "Contribuyentes incluidos en supuestos como adeudos, no localización o sentencias por delitos fiscales.", jurisdiction: "México", tag: "Riesgo fiscal" },
      { id: 23, name: "SAT, artículo 69-B del CFF", description: "Contribuyentes relacionados con presunción o determinación de operaciones inexistentes.", jurisdiction: "México", tag: "Riesgo fiscal" },
      {
        id: 24,
        name: "Lista de Personas Bloqueadas de la UIF",
        description:
          "Personas físicas o morales incorporadas en la lista correspondiente. TODO: VALIDACIÓN LEGAL — esta fuente no es un listado público general; no afirmar acceso directo a información confidencial o reservada sin validación expresa del equipo de producto y cumplimiento.",
        jurisdiction: "México",
        tag: "Restrictiva",
      },
      { id: 25, name: "Proveedores y contratistas sancionados", description: "Personas o empresas impedidas para participar en contrataciones públicas.", jurisdiction: "México", tag: "Alerta regulatoria" },
      { id: 26, name: "Servidores públicos sancionados", description: "Funcionarios o exfuncionarios con sanciones administrativas o inhabilitaciones publicadas.", jurisdiction: "México", tag: "Alerta regulatoria" },
      { id: 27, name: "Donatarias autorizadas", description: "Fuente de validación para confirmar el estatus de una organización.", jurisdiction: "México", tag: "Validación" },
    ],
  },
  {
    id: "pep",
    title: "Personas Políticamente Expuestas",
    description:
      "Una coincidencia PEP no implica delito, sanción ni corrupción. Indica que la relación puede requerir debida diligencia reforzada, mayor conocimiento del cliente y análisis del origen de los recursos.",
    sources: [
      { id: 28, name: "Cámara de Diputados", description: "Integrantes actuales o recientes de la Cámara de Diputados.", jurisdiction: "México", tag: "PEP" },
      { id: 29, name: "Titulares de poderes ejecutivos estatales", description: "Gobernadores y titulares de ejecutivos de las entidades federativas.", jurisdiction: "México", tag: "PEP" },
      { id: 30, name: "Senado de la República", description: "Integrantes actuales o recientes del Senado.", jurisdiction: "México", tag: "PEP" },
      { id: 31, name: "PEP internacionales", description: "Personas que ocupan o han ocupado funciones públicas relevantes en otras jurisdicciones.", jurisdiction: "Internacional", tag: "PEP" },
    ],
  },
  {
    id: "buscados-alertas",
    title: "Personas buscadas, alertas y registros adicionales",
    description:
      "Notificaciones internacionales, advertencias regulatorias y registros preventivos de distintas jurisdicciones.",
    sources: [
      { id: 32, name: "NCA Most Wanted", description: "Personas buscadas por autoridades británicas.", jurisdiction: "Reino Unido", tag: "Persona buscada" },
      { id: 33, name: "Consolidated List histórica del Reino Unido", description: "Histórico de objetivos de sanciones financieras británicas.", jurisdiction: "Reino Unido", tag: "Restrictiva" },
      { id: 34, name: "ASIC", description: "Advertencias sobre posibles actividades financieras no autorizadas o engañosas en Australia.", jurisdiction: "Australia", tag: "Alerta regulatoria" },
      { id: 35, name: "Banco Central do Brasil", description: "Alertas y señalamientos publicados por el regulador brasileño.", jurisdiction: "Brasil", tag: "Alerta regulatoria" },
      { id: 36, name: "CEIS Brasil", description: "Empresas o entidades impedidas o sancionadas para contratar con autoridades públicas.", jurisdiction: "Brasil", tag: "Restrictiva" },
      { id: 37, name: "TCU Brasil", description: "Antecedentes publicados por el Tribunal de Cuentas de la Unión.", jurisdiction: "Brasil", tag: "Alerta regulatoria" },
      { id: 38, name: "INTERPOL Red Notices", description: "Extractos públicos de notificaciones rojas.", jurisdiction: "Internacional", tag: "Persona buscada" },
      {
        id: 39,
        name: "GAFI, jurisdicciones de alto riesgo",
        description: "Países o jurisdicciones sujetos a llamado a la acción o monitoreo intensificado. Esta fuente identifica jurisdicciones, no personas.",
        jurisdiction: "Internacional",
        tag: "Riesgo geográfico",
      },
      { id: 40, name: "EU Air Safety List, Anexo A", description: "Aerolíneas con prohibición para operar en territorio de la Unión Europea.", jurisdiction: "Unión Europea", tag: "Restrictiva" },
      { id: 41, name: "EU Air Safety List, Anexo B", description: "Aerolíneas autorizadas para operar bajo determinadas condiciones.", jurisdiction: "Unión Europea", tag: "Alerta regulatoria" },
      { id: 42, name: "Aseguradoras sancionadas en Panamá", description: "Compañías de seguros con sanciones regulatorias publicadas.", jurisdiction: "Panamá", tag: "Restrictiva" },
      { id: 43, name: "BMA Warning List", description: "Personas o entidades señaladas como no constituidas o no autorizadas para ofrecer servicios financieros.", jurisdiction: "Bermudas", tag: "Alerta regulatoria" },
    ],
  },
];

export const allRiskSources: (RiskSource & { categoryId: string; categoryTitle: string })[] =
  riskCategories.flatMap((cat) =>
    cat.sources.map((s) => ({ ...s, categoryId: cat.id, categoryTitle: cat.title }))
  );

export const TOTAL_SOURCES = allRiskSources.length;

export const tagStyles: Record<RiskSourceTag, { bg: string; text: string; border: string }> = {
  Restrictiva: { bg: "rgba(220,38,38,0.08)", text: "#B91C1C", border: "rgba(220,38,38,0.25)" },
  Indicativa: { bg: "rgba(217,119,6,0.08)", text: "#B45309", border: "rgba(217,119,6,0.25)" },
  Validación: { bg: "rgba(30,202,211,0.10)", text: "#0F8E96", border: "rgba(30,202,211,0.3)" },
  "Riesgo geográfico": { bg: "rgba(101,93,198,0.10)", text: "#4C4699", border: "rgba(101,93,198,0.3)" },
  "Alerta regulatoria": { bg: "rgba(217,119,6,0.08)", text: "#B45309", border: "rgba(217,119,6,0.25)" },
  "Persona buscada": { bg: "rgba(220,38,38,0.08)", text: "#B91C1C", border: "rgba(220,38,38,0.25)" },
  "Riesgo fiscal": { bg: "rgba(217,119,6,0.08)", text: "#B45309", border: "rgba(217,119,6,0.25)" },
  PEP: { bg: "rgba(33,42,69,0.08)", text: "#212A45", border: "rgba(33,42,69,0.25)" },
};
