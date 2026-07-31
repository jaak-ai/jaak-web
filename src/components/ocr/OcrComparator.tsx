type Cell = "si" | "no" | "consultar";

interface Row {
  name: string;
  extrae: Cell;
  procesaId: Cell;
  procesaDoc: Cell;
  fuenteOficial: Cell;
  biometria: Cell;
  pruebaVida: Cell;
  autoservicio: Cell;
  api: Cell;
}

const ROWS: Row[] = [
  {
    name: "OCR Identificación Oficial",
    extrae: "si",
    procesaId: "si",
    procesaDoc: "no",
    fuenteOficial: "no",
    biometria: "no",
    pruebaVida: "no",
    autoservicio: "si",
    api: "si",
  },
  {
    name: "PDF OCR Inteligente",
    extrae: "si",
    procesaId: "no",
    procesaDoc: "si",
    fuenteOficial: "no",
    biometria: "no",
    pruebaVida: "no",
    autoservicio: "si",
    api: "si",
  },
  {
    name: "Consulta INE",
    extrae: "no",
    procesaId: "no",
    procesaDoc: "no",
    fuenteOficial: "si",
    biometria: "no",
    pruebaVida: "no",
    autoservicio: "si",
    api: "consultar",
  },
  {
    name: "Consulta RENAPO/CURP",
    extrae: "no",
    procesaId: "no",
    procesaDoc: "no",
    fuenteOficial: "si",
    biometria: "no",
    pruebaVida: "no",
    autoservicio: "si",
    api: "consultar",
  },
  {
    name: "KYC biométrico",
    extrae: "si",
    procesaId: "si",
    procesaDoc: "no",
    fuenteOficial: "si",
    biometria: "si",
    pruebaVida: "si",
    autoservicio: "si",
    api: "si",
  },
];

const COLUMNS: { key: keyof Row; label: string }[] = [
  { key: "extrae", label: "Extrae información" },
  { key: "procesaId", label: "Procesa identificaciones" },
  { key: "procesaDoc", label: "Procesa doc. empresarial" },
  { key: "fuenteOficial", label: "Consulta fuente oficial" },
  { key: "biometria", label: "Compara biometría" },
  { key: "pruebaVida", label: "Prueba de vida" },
  { key: "autoservicio", label: "Autoservicio" },
  { key: "api", label: "API" },
];

function CellMark({ value }: { value: Cell }) {
  if (value === "si") return <span className="font-extrabold" style={{ color: "#1F8A5A" }}>Sí</span>;
  if (value === "no") return <span className="font-extrabold" style={{ color: "#B4432F" }}>No</span>;
  return <span className="text-gray-400 italic">Consultar</span>;
}

export default function OcrComparator() {
  return (
    <section className="py-16 md:py-20 bg-[#FAFAFA]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-9">
          <h2 className="text-2xl md:text-3xl font-extrabold" style={{ color: "#212A45" }}>
            ¿Qué producto necesito?
          </h2>
          <p className="text-gray-500 mt-3 text-[15px]">
            Enfocado en procesamiento y validación de identidad.
          </p>
        </div>
        <div className="overflow-x-auto border border-gray-100 rounded-2xl bg-white">
          <table className="w-full text-[12.5px] border-collapse" style={{ minWidth: 880 }}>
            <thead>
              <tr>
                <th className="text-left px-4 py-3 text-[10.5px] uppercase tracking-wide font-extrabold text-[#212A45] bg-[#F3F4F8] border-b border-gray-100">
                  Producto
                </th>
                {COLUMNS.map((col) => (
                  <th
                    key={col.key}
                    className="text-left px-4 py-3 text-[10.5px] uppercase tracking-wide font-extrabold text-[#212A45] bg-[#F3F4F8] border-b border-gray-100"
                  >
                    {col.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row) => (
                <tr key={row.name} className="border-b border-gray-100 last:border-0">
                  <td className="px-4 py-3 font-bold text-[#212A45] whitespace-nowrap">{row.name}</td>
                  {COLUMNS.map((col) => (
                    <td key={col.key} className="px-4 py-3">
                      <CellMark value={row[col.key] as Cell} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-[12px] text-gray-400 mt-3">
          No se incluye Biometría 1:1 como fila aparte: hoy solo existe integrada dentro de KYC biométrico.
        </p>
      </div>
    </section>
  );
}
