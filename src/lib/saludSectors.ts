export interface SaludSector {
  slug: string;
  eyebrow: string;
  title: string;
  href: string;
}

// Las seis instituciones a las que /salud distribuye tráfico.
// Los títulos y eyebrows se toman literalmente de cada página de destino.
export const saludSectors: SaludSector[] = [
  {
    slug: "hospitales",
    eyebrow: "Hospitales y grupos hospitalarios",
    title: "El consentimiento informado no empieza en el botón Firmar",
    href: "/salud/hospitales",
  },
  {
    slug: "aseguradoras",
    eyebrow: "Aseguradoras de gastos médicos",
    title: "El expediente de siniestro es una cadena",
    href: "/salud/aseguradoras",
  },
  {
    slug: "farmacias",
    eyebrow: "Farmacias y cadenas de farmacias",
    title: "No todas las recetas tienen el mismo riesgo",
    href: "/salud/farmacias",
  },
  {
    slug: "telemedicina",
    eyebrow: "Telemedicina y salud digital",
    title: "No existe una NOM de telemedicina",
    href: "/salud/telemedicina",
  },
  {
    slug: "laboratorios",
    eyebrow: "Laboratorios y centros de diagnóstico",
    title: "Un expediente duplicado es un problema clínico",
    href: "/salud/laboratorios",
  },
  {
    slug: "software-clinico",
    eyebrow: "Proveedores de expediente clínico y sistemas hospitalarios",
    title: "Declarar cumplimiento no es acreditarlo",
    href: "/salud/software-clinico",
  },
];
