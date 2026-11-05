import Image from "next/image";

/**
 * Logos con la misma jerarquía: mismo alto y misma caja.
 * JAAK usa el logo oficial del sitio. PSC Codex: PENDIENTE de recibir el
 * archivo oficial; hasta entonces se muestra su nombre en tipografía neutra.
 * Para activarlo: guardar el logo en public/images/webinar/firma-digital/ y
 * completar PSC_LOGO.
 */
const PSC_LOGO: { src: string; width: number; height: number } | null = null;

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
