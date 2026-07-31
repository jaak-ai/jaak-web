import Link from "next/link";
import { gtmEvent } from "@/components/GoogleTagManager";
import { globalCTAs } from "@/config/navigation";

/**
 * Cluster de CTA globales del header: "Iniciar sesión" y "Comprar" — las
 * únicas dos acciones comerciales permanentes además de "Agendar demo"
 * (UrgentBanner.tsx, no aquí). Fase 1B retiró "Solicitar revisión" del
 * header por completo, así que ya no hace falta interlinear nada entre
 * estos dos botones.
 */
export default function NavigationCTA() {
  const iniciarSesion = globalCTAs.find((cta) => cta.id === "iniciar-sesion");
  const comprar = globalCTAs.find((cta) => cta.id === "comprar");

  return (
    <>
      {iniciarSesion && iniciarSesion.visibility.desktop ? (
        <Link
          href={iniciarSesion.href}
          onClick={() => gtmEvent("login_click", { source: "header", page_path: window.location.pathname })}
          className="hidden sm:block text-gray-700 hover:text-[#0066ff] font-medium text-[15px] transition-colors"
        >
          {iniciarSesion.label}
        </Link>
      ) : null}
      {comprar && comprar.visibility.desktop ? (
        <Link
          href={comprar.href}
          onClick={() => gtmEvent("purchase_click", { source: "header", page_path: window.location.pathname })}
          className="inline-flex items-center justify-center min-h-[40px] px-2.5 sm:px-5 py-2 sm:py-2.5 whitespace-nowrap bg-[#2DB6C1] text-white font-semibold text-xs sm:text-[15px] rounded-lg hover:bg-[#25969f] transition-all"
        >
          {comprar.label}
        </Link>
      ) : null}
    </>
  );
}
