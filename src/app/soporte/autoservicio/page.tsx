import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";

const NAVY = "#02132D";
const TEAL = "#1ECAD3";
const OFFWHITE = "#F5F5F3";
const GRAY = "#EEF2F5";

const EMAIL_URL = "mailto:soporte@jaak.ai?subject=Soporte%20JAAK%20Autoservicio";
const WHATSAPP_URL =
  "https://wa.me/525531071620?text=Hola%20equipo%20de%20CS%20de%20JAAK%2C%20soy%20cliente%20de%20JAAK%20Autoservicio%20y%20necesito%20apoyo.";
const SURVEY_URL = "https://bp1y5.share.hsforms.com/2etOZTsmuR5qgMd3NMOVXIw";

const TITLE = "Soporte JAAK Autoservicio | Centro de ayuda";
const DESCRIPTION =
  "¿Necesitas ayuda con JAAK Autoservicio? Conoce nuestros canales de soporte básico, cómo reportar un problema y dónde evaluar tu experiencia.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/soporte/autoservicio" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "/soporte/autoservicio",
    siteName: "JAAK",
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: "/images/logos/jaak-logo-azul.png", width: 800, height: 400, alt: "JAAK Autoservicio" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const reportSteps = [
  { title: "Datos de tu cuenta", text: "Nombre, empresa y correo asociado a JAAK." },
  { title: "Producto utilizado", text: "Indica el producto o servicio con el que necesitas ayuda." },
  { title: "Descripción del problema", text: "Explica qué intentabas realizar y qué ocurrió." },
  {
    title: "Pasos y mensaje de error",
    text: "Comparte las acciones realizadas y el mensaje exacto, si existe.",
  },
  {
    title: "Fecha y hora",
    text: "Indica cuándo ocurrió el incidente, incluyendo zona horaria si es relevante.",
  },
  {
    title: "Evidencia",
    text: "Adjunta capturas o información de referencia que ayude a entender el caso, cuando sea posible.",
  },
];

const scopeItems = [
  "Acceso y uso general de la plataforma.",
  "Dudas sobre el funcionamiento de productos.",
  "Reportes de errores o dificultades durante el uso.",
  "Orientación sobre compras, paquetes y consumo.",
];

const breadcrumbItems = [
  { name: "Inicio", href: "/" },
  { name: "Autoservicio", href: "/autoservicio" },
  { name: "Soporte" },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://jaak.ai" },
    { "@type": "ListItem", position: 2, name: "Autoservicio", item: "https://jaak.ai/autoservicio" },
    { "@type": "ListItem", position: 3, name: "Soporte", item: "https://jaak.ai/soporte/autoservicio" },
  ],
};

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1ECAD3]";

function Icon({ children }: { children: React.ReactNode }) {
  return (
    <svg
      aria-hidden="true"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      {children}
    </svg>
  );
}

function ContactButtons({ dark = false }: { dark?: boolean }) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <a
        href={EMAIL_URL}
        className={`inline-flex items-center justify-center rounded-lg px-6 py-3.5 text-[15px] font-semibold transition-colors hover:brightness-110 ${focusRing} ${dark ? "focus-visible:ring-offset-[#02132D]" : ""}`}
        style={{ background: TEAL, color: NAVY }}
      >
        Enviar correo
      </a>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center justify-center rounded-lg border-2 px-6 py-3 text-[15px] font-semibold transition-colors ${focusRing} ${
          dark
            ? "border-white/40 text-white hover:border-white hover:bg-white/10 focus-visible:ring-offset-[#02132D]"
            : "border-[#02132D] text-[#02132D] hover:bg-[#02132D] hover:text-white"
        }`}
      >
        Contactar por WhatsApp
        <span className="sr-only"> (se abre en una pestaña nueva)</span>
      </a>
    </div>
  );
}

export default function SoporteAutoservicioPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-[150px] pb-16 lg:pb-24" style={{ background: NAVY }}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-white/70">
              <Breadcrumbs items={breadcrumbItems} />
            </div>
            <div className="mt-10 max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: TEAL }}>
                Centro de soporte · Autoservicio
              </p>
              <h1 className="mt-5 text-4xl font-bold leading-[1.1] tracking-tight text-white lg:text-5xl">
                ¿Necesitas ayuda con JAAK Autoservicio?
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 lg:text-lg">
                Encuentra orientación para resolver dudas sobre el uso de la plataforma y reportar problemas a nuestro
                equipo de soporte.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#canales"
                  className={`inline-flex items-center justify-center rounded-lg px-6 py-3.5 text-[15px] font-semibold transition-colors hover:brightness-110 focus-visible:ring-offset-[#02132D] ${focusRing}`}
                  style={{ background: TEAL, color: NAVY }}
                >
                  Contactar soporte
                </a>
                <a
                  href="#guia"
                  className={`inline-flex items-center justify-center rounded-lg border-2 border-white/40 px-6 py-3 text-[15px] font-semibold text-white transition-colors hover:border-white hover:bg-white/10 focus-visible:ring-offset-[#02132D] ${focusRing}`}
                >
                  Cómo reportar un problema
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Canales */}
        <section id="canales" aria-labelledby="canales-title" className="scroll-mt-24 py-16 lg:py-24" style={{ background: OFFWHITE }}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h2 id="canales-title" className="text-3xl font-bold tracking-tight lg:text-4xl" style={{ color: NAVY }}>
                ¿Cómo podemos ayudarte?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#3D4A5F]">
                Nuestro equipo recibe solicitudes de soporte básico a través de correo electrónico y WhatsApp. Elige el
                canal que prefieras y comparte los detalles de tu caso.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <article className="flex flex-col rounded-2xl border border-[#02132D]/10 bg-white p-8">
                <span style={{ color: TEAL }}>
                  <Icon>
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 6 9-6" />
                  </Icon>
                </span>
                <h3 className="mt-5 text-xl font-semibold" style={{ color: NAVY }}>
                  Correo electrónico
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[#3D4A5F]">
                  Envíanos una descripción detallada del problema y los datos necesarios para identificar tu solicitud.
                </p>
                <p className="mt-4 text-[15px] font-semibold" style={{ color: NAVY }}>
                  soporte@jaak.ai
                </p>
                <a
                  href={EMAIL_URL}
                  className={`mt-8 inline-flex items-center justify-center self-start rounded-lg px-6 py-3.5 text-[15px] font-semibold transition-colors hover:brightness-110 ${focusRing}`}
                  style={{ background: TEAL, color: NAVY }}
                >
                  Enviar correo
                </a>
              </article>
              <article className="flex flex-col rounded-2xl border border-[#02132D]/10 bg-white p-8">
                <span style={{ color: TEAL }}>
                  <Icon>
                    <path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 20.5l1.7-5.4A8.4 8.4 0 1 1 21 11.5Z" />
                  </Icon>
                </span>
                <h3 className="mt-5 text-xl font-semibold" style={{ color: NAVY }}>
                  WhatsApp
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[#3D4A5F]">
                  Contacta a nuestro equipo de Customer Success para compartir tu solicitud.
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 inline-flex items-center justify-center self-start rounded-lg border-2 border-[#02132D] px-6 py-3 text-[15px] font-semibold text-[#02132D] transition-colors hover:bg-[#02132D] hover:text-white ${focusRing}`}
                >
                  Contactar por WhatsApp
                  <span className="sr-only"> (se abre en una pestaña nueva)</span>
                </a>
              </article>
            </div>
          </div>
        </section>

        {/* Guía */}
        <section id="guia" aria-labelledby="guia-title" className="scroll-mt-24 bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h2 id="guia-title" className="text-3xl font-bold tracking-tight lg:text-4xl" style={{ color: NAVY }}>
                Ayúdanos a entender tu problema
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#3D4A5F]">
                Para revisar tu solicitud, necesitamos conocer qué estabas intentando hacer, qué sucedió y en qué momento
                se presentó el problema. Compartir información clara desde el inicio facilita su revisión.
              </p>
            </div>
            <ol className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
              {reportSteps.map((step, i) => (
                <li key={step.title} className="border-t pt-5" style={{ borderColor: `${NAVY}26` }}>
                  <span className="text-sm font-semibold tracking-widest" style={{ color: "#0E8A92" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold" style={{ color: NAVY }}>
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-[#3D4A5F]">{step.text}</p>
                </li>
              ))}
            </ol>
            <aside
              role="note"
              className="mt-12 flex gap-4 rounded-2xl border-l-4 p-6"
              style={{ background: GRAY, borderColor: TEAL }}
            >
              <span className="mt-0.5 flex-shrink-0" style={{ color: NAVY }}>
                <Icon>
                  <path d="M12 3 4 6v6c0 4.5 3.2 8 8 9 4.8-1 8-4.5 8-9V6l-8-3Z" />
                  <path d="m9 12 2 2 4-4" />
                </Icon>
              </span>
              <p className="text-[15px] leading-relaxed" style={{ color: NAVY }}>
                <strong className="font-semibold">Nota de seguridad:</strong> No compartas contraseñas, códigos de
                autenticación, claves API ni datos personales innecesarios. Oculta la información sensible en las
                capturas.
              </p>
            </aside>
          </div>
        </section>

        {/* Alcance */}
        <section aria-labelledby="alcance-title" className="py-16 lg:py-24" style={{ background: GRAY }}>
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
            <div>
              <h2 id="alcance-title" className="text-3xl font-bold tracking-tight lg:text-4xl" style={{ color: NAVY }}>
                Soporte básico para JAAK Autoservicio
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#3D4A5F]">
                JAAK Autoservicio está diseñado para que puedas contratar y utilizar nuestros productos de forma
                autogestionada. El soporte básico está orientado a brindar orientación sobre el uso de la plataforma y
                recibir reportes relacionados con su funcionamiento.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold" style={{ color: NAVY }}>
                ¿En qué podemos orientarte?
              </h3>
              <ul className="mt-5 space-y-4">
                {scopeItems.map((item) => (
                  <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-[#3D4A5F]">
                    <svg
                      aria-hidden="true"
                      className="mt-1 h-4 w-4 flex-shrink-0"
                      style={{ color: "#0E8A92" }}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-t pt-6 text-sm leading-relaxed text-[#3D4A5F]" style={{ borderColor: `${NAVY}1F` }}>
                Las solicitudes que requieran configuraciones particulares, desarrollo, integración o revisión técnica
                especializada podrán ser evaluadas para determinar los siguientes pasos.
              </p>
            </div>
          </div>
        </section>

        {/* Recursos */}
        <section aria-labelledby="recursos-title" className="bg-white py-16 lg:py-24">
          <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <div className="max-w-2xl">
              <h2 id="recursos-title" className="text-3xl font-bold tracking-tight lg:text-4xl" style={{ color: NAVY }}>
                Consulta nuestros recursos
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#3D4A5F]">
                Encuentra información y guías que pueden ayudarte a utilizar los servicios de JAAK.
              </p>
              <p className="mt-4 text-sm">
                <Link
                  href="/guia-captura-kyc"
                  className={`font-semibold underline underline-offset-4 hover:no-underline ${focusRing}`}
                  style={{ color: NAVY }}
                >
                  Guía de captura KYC
                </Link>
              </p>
            </div>
            <Link
              href="/docs"
              className={`inline-flex flex-shrink-0 items-center justify-center rounded-lg px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:brightness-125 ${focusRing}`}
              style={{ background: NAVY }}
            >
              Consultar documentación
            </Link>
          </div>
        </section>

        {/* Encuesta */}
        <section aria-labelledby="encuesta-title" className="py-16 lg:py-24" style={{ background: OFFWHITE }}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#0E8A92" }}>
                Tu opinión nos ayuda a mejorar
              </p>
              <h2 id="encuesta-title" className="mt-3 text-3xl font-bold tracking-tight lg:text-4xl" style={{ color: NAVY }}>
                ¿Cómo fue tu experiencia con nuestro equipo?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#3D4A5F]">
                Si ya recibiste atención de nuestro equipo de soporte, nos gustaría conocer tu experiencia. Tus
                comentarios nos ayudan a identificar oportunidades de mejora.
              </p>
              <a
                href={SURVEY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 inline-flex items-center justify-center rounded-lg border-2 border-[#02132D] px-6 py-3 text-[15px] font-semibold text-[#02132D] transition-colors hover:bg-[#02132D] hover:text-white ${focusRing}`}
              >
                Responder encuesta de satisfacción
                <span className="sr-only"> (se abre en una pestaña nueva)</span>
              </a>
            </div>
          </div>
        </section>

        {/* Cierre */}
        <section aria-labelledby="cierre-title" className="py-16 lg:py-24" style={{ background: NAVY }}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 id="cierre-title" className="text-3xl font-bold tracking-tight text-white lg:text-4xl">
              ¿Aún necesitas ayuda?
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/75">
              Comparte tu solicitud con nuestro equipo de soporte por el canal de tu preferencia.
            </p>
            <div className="mt-8">
              <ContactButtons dark />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
