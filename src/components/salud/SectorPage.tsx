import Link from "next/link";

// Paleta local compartida por las páginas de institución de /salud,
// consistente con la que ya usa src/app/salud/LandingClient.tsx.
export const NAVY = "#02132D";
export const NAVY_SOFT = "#0C2544";
export const TEAL = "#1ECAD3";
// #0A6870 y #5C6B7A (en vez de #0E8E96 y #6B7686) para cumplir 4.5:1 AA
// en texto pequeño sobre blanco/LIGHT; verificado con cálculo de contraste real.
export const TEAL_DEEP = "#0A6870";
export const LIGHT = "#F6F8FA";
export const BORDER = "#E3E8EE";
export const TEXT_BODY = "#4B5768";
export const TEXT_MUTED = "#5C6B7A";
export const OK = "#127A38";
export const WARN = "#8A6D1F";
export const STOP = "#A81E1E";

export interface NormRow {
  instrument: string;
  flagLabel: string;
  flagTone: "obliga" | "permite" | "laguna";
  numeral: string;
  effect: string;
}

export interface ClaimPair {
  said: string;
  real: string;
  ref: string;
}

export interface SourceLink {
  code: string;
  label: string;
  url: string;
  meta: string;
}

const FLAG_COLOR: Record<NormRow["flagTone"], string> = {
  obliga: STOP,
  permite: TEAL_DEEP,
  laguna: WARN,
};

export function SectorBreadcrumb({ current }: { current: string }) {
  return (
    <nav aria-label="Ruta de navegación" className="border-b" style={{ borderColor: BORDER, background: LIGHT }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <ol className="flex flex-wrap items-center gap-2 text-xs font-mono" style={{ color: TEXT_MUTED }}>
          <li>
            <Link href="/salud" className="underline hover:no-underline" style={{ color: TEAL_DEEP }}>
              Sector salud
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="font-semibold" style={{ color: NAVY }}>
            {current}
          </li>
        </ol>
      </div>
    </nav>
  );
}

export function SectorHero({
  eyebrow,
  h1,
  lede,
  heroNote,
  statFigure,
  statCaption,
  primaryCtaLabel,
  primaryCtaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
  secondaryCtaExternal = false,
  onPrimaryClick,
  onSecondaryClick,
}: {
  eyebrow: string;
  h1: React.ReactNode;
  lede: React.ReactNode;
  heroNote: string;
  statFigure: string;
  statCaption: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
  secondaryCtaExternal?: boolean;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}) {
  return (
    <section
      className="pt-16 pb-16 relative overflow-hidden"
      style={{ background: `linear-gradient(160deg, ${NAVY} 0%, ${NAVY_SOFT} 100%)` }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-end">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider font-mono" style={{ color: TEAL }}>
              {eyebrow}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mt-4 mb-6 leading-tight">{h1}</h1>
            <p className="text-lg text-white/70 mb-6 max-w-2xl">{lede}</p>
            <div className="border-l-2 pl-4 py-0.5 mb-8 max-w-xl" style={{ borderColor: TEAL }}>
              <p className="text-sm text-white/60">{heroNote}</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href={primaryCtaHref}
                onClick={onPrimaryClick}
                className="px-6 py-3 font-bold rounded-lg transition-all"
                style={{ background: TEAL, color: NAVY }}
              >
                {primaryCtaLabel}
              </Link>
              <a
                href={secondaryCtaHref}
                onClick={onSecondaryClick}
                target={secondaryCtaExternal ? "_blank" : undefined}
                rel={secondaryCtaExternal ? "noopener noreferrer" : undefined}
                className="px-6 py-3 border font-semibold rounded-lg text-white transition-all"
                style={{ borderColor: "rgba(255,255,255,0.30)" }}
              >
                {secondaryCtaLabel}
              </a>
            </div>
          </div>
          <div className="border-t pt-6" style={{ borderColor: "rgba(255,255,255,0.14)" }}>
            <div className="text-3xl md:text-4xl font-black font-mono" style={{ color: TEAL }}>
              {statFigure}
            </div>
            <p className="text-sm text-white/60 mt-3 leading-relaxed">{statCaption}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function NormTable({ rows }: { rows: NormRow[] }) {
  return (
    <div className="rounded-2xl overflow-hidden" style={{ border: `1px solid ${BORDER}` }}>
      {rows.map((row, i) => (
        <div
          key={`${row.instrument}-${row.numeral}`}
          className="grid sm:grid-cols-[1fr_1fr_2fr] gap-1 sm:gap-4 p-5 sm:p-6"
          style={{
            background: i % 2 === 0 ? "#fff" : LIGHT,
            borderTop: i === 0 ? "none" : `1px solid ${BORDER}`,
          }}
        >
          <div>
            <p className="font-bold text-[14.5px]" style={{ color: NAVY }}>{row.instrument}</p>
            <span
              className="inline-block text-[11px] font-bold font-mono uppercase tracking-wide mt-1"
              style={{ color: FLAG_COLOR[row.flagTone] }}
            >
              {row.flagLabel}
            </span>
          </div>
          <p className="text-[13px] font-mono" style={{ color: TEAL_DEEP }}>{row.numeral}</p>
          <p className="text-[14px] leading-relaxed" style={{ color: TEXT_BODY }}>{row.effect}</p>
        </div>
      ))}
    </div>
  );
}

export function ClaimsBlock({ claims }: { claims: ClaimPair[] }) {
  return (
    <div className="space-y-4">
      {claims.map((claim) => (
        <div key={claim.said} className="grid sm:grid-cols-2 gap-0 rounded-2xl overflow-hidden" style={{ border: `1px solid ${BORDER}` }}>
          <div className="p-5 sm:p-6" style={{ background: LIGHT }}>
            <span className="text-[11px] font-bold font-mono uppercase tracking-wide" style={{ color: STOP }}>Se dice</span>
            <p className="font-semibold text-[15px] mt-2 leading-snug" style={{ color: NAVY }}>{claim.said}</p>
          </div>
          <div className="p-5 sm:p-6 bg-white">
            <span className="text-[11px] font-bold font-mono uppercase tracking-wide" style={{ color: OK }}>Dice la norma</span>
            <p className="text-[14px] mt-2 leading-relaxed" style={{ color: TEXT_BODY }}>{claim.real}</p>
            <p className="text-xs font-mono mt-3" style={{ color: TEAL_DEEP }}>{claim.ref}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export function SourcesBlock({ sources, note }: { sources: SourceLink[]; note: string }) {
  return (
    <div>
      <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.6)" }}>{note}</p>
      <div className="grid sm:grid-cols-2 gap-x-10 gap-y-1">
        {sources.map((src) => (
          <div key={src.code} className="grid grid-cols-[3rem_1fr] gap-3 py-3 border-b" style={{ borderColor: "rgba(255,255,255,0.12)" }}>
            <span className="text-[11px] font-mono pt-0.5" style={{ color: TEAL }}>{src.code}</span>
            <div>
              <a
                href={src.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm underline decoration-white/25 hover:decoration-white"
                style={{ color: "#E4EAEF" }}
              >
                {src.label}
              </a>
              <span className="block text-xs mt-1" style={{ color: "rgba(255,255,255,0.45)" }}>{src.meta}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function SectorCTADuo({
  primaryEyebrow,
  primaryTitle,
  primaryText,
  primaryCtaLabel,
  primaryCtaHref,
  secondaryEyebrow,
  secondaryTitle,
  secondaryText,
  secondaryButtons,
}: {
  primaryEyebrow: string;
  primaryTitle: string;
  primaryText: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryEyebrow: string;
  secondaryTitle: string;
  secondaryText: string;
  secondaryButtons: { label: string; href: string }[];
}) {
  return (
    <div className="grid md:grid-cols-2 gap-5">
      <div className="rounded-2xl p-7 sm:p-8 flex flex-col" style={{ background: NAVY }}>
        <span className="text-xs font-bold uppercase tracking-wide font-mono" style={{ color: TEAL }}>{primaryEyebrow}</span>
        <h3 className="text-xl font-bold text-white mt-3 mb-3 leading-snug">{primaryTitle}</h3>
        <p className="text-[14.5px] leading-relaxed mb-6 flex-1" style={{ color: "rgba(255,255,255,0.7)" }}>{primaryText}</p>
        <a href={primaryCtaHref} className="self-start px-6 py-3 font-bold rounded-lg" style={{ background: TEAL, color: NAVY }}>
          {primaryCtaLabel}
        </a>
      </div>
      <div className="rounded-2xl p-7 sm:p-8 flex flex-col bg-white" style={{ border: `1px solid ${BORDER}` }}>
        <span className="text-xs font-bold uppercase tracking-wide font-mono" style={{ color: TEAL_DEEP }}>{secondaryEyebrow}</span>
        <h3 className="text-xl font-bold mt-3 mb-3 leading-snug" style={{ color: NAVY }}>{secondaryTitle}</h3>
        <p className="text-[14.5px] leading-relaxed mb-6 flex-1" style={{ color: TEXT_BODY }}>{secondaryText}</p>
        <div className="flex flex-wrap gap-3">
          {secondaryButtons.map((btn) => (
            <a
              key={btn.label}
              href={btn.href}
              className="px-5 py-2.5 text-sm font-bold rounded-lg border"
              style={{ borderColor: NAVY, color: NAVY }}
            >
              {btn.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export function SectorDisclosure() {
  return (
    <div className="rounded-2xl p-6 sm:p-7" style={{ background: "#FFFBF2", border: "1px solid #F0D89A", borderLeft: "4px solid #D69E2E" }}>
      <span className="text-xs font-bold uppercase tracking-wide font-mono" style={{ color: WARN }}>Alcance de este documento</span>
      <p className="text-[14px] leading-relaxed mt-2" style={{ color: "#6B5A34" }}>
        Material informativo. No sustituye una opinión legal para un caso concreto. Ninguna tecnología garantiza por sí sola validez jurídica, evita sanciones ni excluye responsabilidad profesional. Lo que sí puede hacer un sistema bien diseñado es reducir brechas de evidencia y permitir explicar qué ocurrió.
      </p>
    </div>
  );
}

export function SectionHeading({ eyebrow, title, lede }: { eyebrow?: string; title: string; lede?: string }) {
  return (
    <div data-sr className="max-w-3xl mb-10">
      {eyebrow && (
        <span className="text-xs font-bold uppercase tracking-wider font-mono block mb-3" style={{ color: TEAL_DEEP }}>
          {eyebrow}
        </span>
      )}
      <h2 className="text-2xl md:text-3xl font-black mb-4" style={{ color: NAVY }}>{title}</h2>
      {lede && <p className="text-lg" style={{ color: TEXT_BODY }}>{lede}</p>}
    </div>
  );
}
