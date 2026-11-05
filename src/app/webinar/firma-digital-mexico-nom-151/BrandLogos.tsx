import Image from "next/image";

/**
 * Logos con la misma jerarquía: mismo alto y misma caja.
 * JAAK usa el logo oficial del sitio; PSC Codex, el logo oficial entregado
 * (versión azul sobre fondo claro). Existe también psc-codex-logo-blanco.webp
 * para fondos oscuros.
 */
const PSC_LOGO: { src: string; width: number; height: number } | null = {
  src: "/images/webinar/firma-digital/psc-codex-logo.webp",
  width: 1739,
  height: 1014,
};

const BOX = "flex h-12 w-32 items-center justify-center sm:w-40";

export default function BrandLogos({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 sm:gap-5 ${className}`}>
      <div className={BOX}>
        <Image
          src="/images/logos/jaak-logo-azul.png"
          alt="JAAK"
          width={492}
          height={254}
          priority
          className="h-full w-auto object-contain"
        />
      </div>
      <span aria-hidden="true" className="text-xl font-light text-[var(--wb-navy)]">
        ×
      </span>
      <div className={BOX}>
        {PSC_LOGO ? (
          <Image src={PSC_LOGO.src} alt="PSC Codex" width={PSC_LOGO.width} height={PSC_LOGO.height} priority className="h-full w-auto object-contain" />
        ) : (
          <span className="text-xl font-extrabold tracking-tight text-[var(--wb-navy)] sm:text-2xl">PSC Codex</span>
        )}
      </div>
    </div>
  );
}
