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

/** Glifos geométricos para las tarjetas de sectores. */
export function Glyph({ index }: { index: number }) {
  const shapes = [
    <polygon key="t" points="16,4 29,27 3,27" />,
    <polygon key="h" points="16,3 28,10 28,22 16,29 4,22 4,10" />,
    <rect key="r" x="7" y="7" width="18" height="18" transform="rotate(45 16 16)" />,
    <circle key="c" cx="16" cy="16" r="12" />,
    <polygon key="p" points="16,3 29,13 24,28 8,28 3,13" />,
  ];
  return (
    <span className="flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-br from-[var(--wb-navy-dark)] to-[var(--wb-navy)] shadow-sm">
      <svg aria-hidden="true" viewBox="0 0 32 32" className="h-7 w-7" fill="rgba(30,202,211,0.18)" stroke="var(--wb-teal)" strokeWidth="2" strokeLinejoin="round">
        {shapes[index % shapes.length]}
      </svg>
    </span>
  );
}
