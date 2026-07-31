import Link from "next/link";
import { globalCTAs } from "@/config/navigation";

/**
 * Cluster de CTA globales del header: "Iniciar sesión" y "Comprar".
 * "Agendar demo" vive en UrgentBanner.tsx (no aquí) y "Solicitar revisión
 * regulatoria" se mantiene fuera de este set a propósito — no debe
 * convertirse en un cuarto CTA global (ver navigation.ts). Sigue
 * renderizándose donde ya existía, directamente en Header.tsx /
 * MobileNavigation.tsx.
 */
export default function NavigationCTA({
  context,
  only,
  onNavigate,
}: {
  context: "desktop" | "mobile";
  /** En móvil, "Comprar" e "Iniciar sesión" viven en dos bloques distintos
   *  del panel (igual que en el Header.tsx original) — permite renderizar
   *  cada uno en su ubicación exacta sin duplicar el origen de datos. */
  only?: "comprar" | "iniciar-sesion";
  onNavigate?: () => void;
}) {
  const iniciarSesion = globalCTAs.find((cta) => cta.id === "iniciar-sesion");
  const comprar = globalCTAs.find((cta) => cta.id === "comprar");

  if (context === "desktop") {
    return (
      <>
        {(!only || only === "iniciar-sesion") && iniciarSesion && iniciarSesion.visibility.desktop ? (
          <Link
            href={iniciarSesion.href}
            className="hidden sm:block text-gray-700 hover:text-[#0066ff] font-medium text-[15px] transition-colors"
          >
            {iniciarSesion.label}
          </Link>
        ) : null}
        {(!only || only === "comprar") && comprar && comprar.visibility.desktop ? (
          <Link
            href={comprar.href}
            className="inline-flex items-center justify-center min-h-[40px] px-2.5 sm:px-5 py-2 sm:py-2.5 whitespace-nowrap bg-[#2DB6C1] text-white font-semibold text-xs sm:text-[15px] rounded-lg hover:bg-[#25969f] transition-all"
          >
            {comprar.label}
          </Link>
        ) : null}
      </>
    );
  }

  return (
    <>
      {(!only || only === "comprar") && comprar && comprar.visibility.mobile ? (
        <Link
          href={comprar.href}
          className="block w-full text-center px-5 py-3 bg-[#2DB6C1] text-white font-semibold rounded-lg hover:bg-[#25969f]"
          onClick={onNavigate}
        >
          {comprar.label}
        </Link>
      ) : null}
      {(!only || only === "iniciar-sesion") && iniciarSesion && iniciarSesion.visibility.mobile ? (
        <Link
          href={iniciarSesion.href}
          className="block text-gray-700 hover:text-[#0066ff] mb-4"
          onClick={onNavigate}
        >
          {iniciarSesion.label}
        </Link>
      ) : null}
    </>
  );
}
