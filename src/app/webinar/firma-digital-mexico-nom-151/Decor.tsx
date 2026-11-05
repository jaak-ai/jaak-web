import Image from "next/image";

/**
 * Elementos decorativos (aria-hidden). Estáticos, sin animación: aportan
 * profundidad con los colores de marca sin competir con el contenido.
 */

const NODES: [number, number, number][] = [
  [20, 30, 5], [78, 14, 3], [140, 48, 6], [205, 20, 3], [252, 70, 5],
  [60, 96, 3], [118, 118, 5], [188, 104, 3], [236, 150, 4], [96, 170, 3],
];
const EDGES: [number, number][] = [
  [0, 1], [1, 2], [2, 3], [3, 4], [0, 5], [5, 2], [5, 6], [2, 6], [6, 7], [7, 4], [4, 8], [7, 8], [6, 9], [5, 9], [3, 7],
];

/** Constelación de nodos y líneas, eco del fondo del hero. */
export function NetworkDecor({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 280 200" className={`pointer-events-none absolute ${className}`} fill="none">
      {EDGES.map(([a, b]) => (
        <line key={`${a}-${b}`} x1={NODES[a][0]} y1={NODES[a][1]} x2={NODES[b][0]} y2={NODES[b][1]} stroke="var(--wb-teal)" strokeOpacity="0.45" strokeWidth="1" />
      ))}
      {NODES.map(([x, y, r], i) => (
        <circle key={i} cx={x} cy={y} r={r} fill={i % 3 === 0 ? "#fff" : "var(--wb-teal)"} fillOpacity={i % 3 === 0 ? 0.9 : 0.7} />
      ))}
    </svg>
  );
}

/** Fondo con la red del hero, atenuada; el contenedor debe ser `relative overflow-hidden`. */
export function NetworkBackdrop({ opacity = "opacity-60", position = "object-right" }: { opacity?: string; position?: string }) {
  return (
    <Image src="/images/webinar/firma-digital/hero-network.webp" alt="" fill sizes="100vw" className={`pointer-events-none select-none object-cover ${position} ${opacity}`} />
  );
}

export type SectorIcon = "finanzas" | "inmobiliario" | "rrhh" | "legal" | "cumplimiento";

const ICONS: Record<SectorIcon, React.ReactNode> = {
  // Banco: frontón, columnas y base
  finanzas: (
    <>
      <path d="M3 9.5 12 4l9 5.5" />
      <path d="M5 10v8M9.5 10v8M14.5 10v8M19 10v8" />
      <path d="M3 21h18M3 18h18" />
    </>
  ),
  // Casa con puerta
  inmobiliario: (
    <>
      <path d="M3 11.5 12 4l9 7.5" />
      <path d="M5.5 10v10h13V10" />
      <path d="M10 20v-5.5h4V20" />
    </>
  ),
  // Equipo: tres personas
  rrhh: (
    <>
      <circle cx="12" cy="8" r="3" />
      <path d="M6.5 20v-1.5a5.5 5.5 0 0 1 11 0V20" />
      <circle cx="5" cy="10" r="2" />
      <circle cx="19" cy="10" r="2" />
      <path d="M1.5 18.5V17a3.5 3.5 0 0 1 3.5-3.5M22.5 18.5V17a3.5 3.5 0 0 0-3.5-3.5" />
    </>
  ),
  // Balanza de la justicia
  legal: (
    <>
      <path d="M12 3v18M7 21h10M5 6h14" />
      <path d="M5 6 2.5 13a3 3 0 0 0 5 0L5 6ZM19 6l-2.5 7a3 3 0 0 0 5 0L19 6Z" />
    </>
  ),
  // Escudo con palomita
  cumplimiento: (
    <>
      <path d="M12 3 4.5 6v5.5c0 4.5 3 8 7.5 9.5 4.5-1.5 7.5-5 7.5-9.5V6L12 3Z" />
      <path d="m8.5 12 2.5 2.5 4.5-5" />
    </>
  ),
};

/** Ícono de sector (trazo turquesa sobre mosaico navy). Decorativo: el título ya nombra el sector. */
export function SectorGlyph({ kind }: { kind: SectorIcon }) {
  return (
    <span className="flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-br from-[var(--wb-navy-dark)] to-[var(--wb-navy)] shadow-sm">
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="var(--wb-teal)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        {ICONS[kind]}
      </svg>
    </span>
  );
}
