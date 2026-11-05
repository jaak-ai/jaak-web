import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageViewTracker from "@/components/PageViewTracker";
import {
  LINKS,
  WEBINAR_SEO_DESCRIPTION,
  WEBINAR_SEO_TITLE,
  WEBINAR_TITLE,
  WEBINAR_URL,
  EVENT_START_ISO,
  EVENT_END_ISO,
} from "@/lib/webinar/firmaDigital";
import AdsConsentBanner from "./AdsConsentBanner";
import BrandLogos from "./BrandLogos";
import Countdown from "./Countdown";
import { SectorGlyph, NetworkBackdrop, NetworkDecor } from "./Decor";
import { ExternalLink, RegisterButton } from "./Links";
import StickyRegisterBar from "./StickyRegisterBar";
import WebinarProvider from "./WebinarProvider";
import { AGENDA, APPLICATIONS, FAQ, LAYERS, LEARNINGS, SPEAKERS } from "./content";

const OG_IMAGE = "https://jaak.ai/images/logos/jaak-logo-azul.png";

export const metadata: Metadata = {
  title: { absolute: WEBINAR_SEO_TITLE },
  description: WEBINAR_SEO_DESCRIPTION,
  alternates: { canonical: WEBINAR_URL },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: WEBINAR_URL,
    siteName: "JAAK",
    title: WEBINAR_SEO_TITLE,
    description: WEBINAR_SEO_DESCRIPTION,
    images: [{ url: OG_IMAGE, width: 800, height: 400, alt: `${WEBINAR_TITLE} · JAAK y PSC Codex` }],
  },
  twitter: {
    card: "summary_large_image",
    title: WEBINAR_SEO_TITLE,
    description: WEBINAR_SEO_DESCRIPTION,
    images: [OG_IMAGE],
    site: "@jaak_ai",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Event",
      "@id": `${WEBINAR_URL}#event`,
      name: WEBINAR_TITLE,
      description: WEBINAR_SEO_DESCRIPTION,
      url: WEBINAR_URL,
      inLanguage: "es-MX",
      startDate: EVENT_START_ISO,
      endDate: EVENT_END_ISO,
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
      location: { "@type": "VirtualLocation", url: WEBINAR_URL },
      isAccessibleForFree: true,
      image: [OG_IMAGE],
      organizer: [
        { "@type": "Organization", name: "JAAK", url: LINKS.jaak, sameAs: [LINKS.jaakLinkedin] },
        { "@type": "Organization", name: "PSC Codex", url: LINKS.psc, sameAs: [LINKS.pscLinkedin] },
      ],
      performer: [
        { "@type": "Person", name: "Arianna Quezada", jobTitle: "CEO y cofundadora de JAAK", worksFor: { "@type": "Organization", name: "JAAK", url: LINKS.jaak }, sameAs: [LINKS.ariannaLinkedin] },
        { "@type": "Person", name: "Benjamín González", jobTitle: "Director de Operaciones de PSC Codex", worksFor: { "@type": "Organization", name: "PSC Codex", url: LINKS.psc }, sameAs: [LINKS.benjaminLinkedin] },
      ],
      // Sin `offers` con precio: no se declaran precios no verificados.
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: "https://jaak.ai" },
        { "@type": "ListItem", position: 2, name: "Webinars", item: "https://jaak.ai/webinar" },
        { "@type": "ListItem", position: 3, name: WEBINAR_TITLE, item: WEBINAR_URL },
      ],
    },
  ],
};

const THEME = {
  "--wb-navy": "#202945",
  "--wb-navy-dark": "#02132D",
  "--wb-teal": "#1ECAD3",
  "--wb-gray": "#EEF2F5",
  "--wb-text": "#2B3550",
} as React.CSSProperties;

const H2_DARK = "text-2xl font-extrabold leading-tight text-white sm:text-3xl";
const H2 = "text-2xl font-extrabold leading-tight text-[var(--wb-navy)] sm:text-3xl";
const SECTION = "relative overflow-hidden px-4 py-14 sm:px-6 sm:py-20";
const INNER = "mx-auto max-w-5xl";
const EYEBROW = "mb-3 flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-[var(--wb-navy)]";
const EYEBROW_DARK = "mb-3 flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-[var(--wb-teal)]";
const BAR = <span aria-hidden="true" className="h-0.5 w-8 bg-[var(--wb-teal)]" />;
const LINK_ON_LIGHT = "font-semibold text-[var(--wb-navy)] underline underline-offset-2 hover:no-underline";

function initials(name: string) {
  return name.split(" ").map((p) => p[0]).slice(0, 2).join("");
}

export default function FirmaDigitalWebinarPage() {
  return (
    <WebinarProvider>
      <div style={THEME} className="bg-white text-[var(--wb-text)]" lang="es-MX">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <PageViewTracker page="webinar-firma-digital-mexico-nom-151" />

        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:font-bold focus:text-[var(--wb-navy)] focus:outline-2 focus:outline-[var(--wb-navy)]"
        >
          Saltar al contenido
        </a>

        <header className="bg-white px-4 py-3 sm:px-6">
          <div className={`${INNER} flex items-center justify-between`}>
            <BrandLogos />
          </div>
        </header>
        <div aria-hidden="true" className="h-1 bg-gradient-to-r from-[var(--wb-navy)] via-[var(--wb-teal)] to-[var(--wb-navy-dark)]" />

        <main id="contenido" className="pb-24 md:pb-0">
          {/* 1. Hero */}
          <section aria-labelledby="titulo" className="wb-dark relative isolate overflow-hidden bg-[var(--wb-navy-dark)] px-4 py-14 text-white sm:px-6 sm:py-24">
            <NetworkBackdrop opacity="opacity-100" position="object-[75%_center]" />
            {/* Velo: oscuro a la izquierda (texto) y más total en móvil para el contraste */}
            <div aria-hidden="true" className="absolute inset-0 bg-[var(--wb-navy-dark)]/75 lg:bg-gradient-to-r lg:from-[var(--wb-navy-dark)] lg:via-[var(--wb-navy-dark)]/70 lg:to-transparent" />
            <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[var(--wb-navy-dark)]/80 to-transparent" />
            <div className={`${INNER} relative grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center`}>
              <div>
                <p className="mb-4 inline-flex items-center gap-3 rounded-full bg-[var(--wb-teal)]/15 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[var(--wb-teal)] ring-1 ring-[var(--wb-teal)]/40">
                  <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[var(--wb-teal)]" />
                  Webinar gratuito · JAAK × PSC Codex
                </p>
                <h1 id="titulo" className="text-4xl font-extrabold leading-[1.1] sm:text-5xl lg:text-6xl">
                  El mapa de la{" "}
                  <span className="text-[var(--wb-teal)]">firma digital</span>{" "}
                  en México.
                </h1>
                <p className="mt-5 text-lg font-semibold leading-snug text-white sm:text-xl">
                  Cómo elegir el nivel de seguridad, identidad y evidencia adecuado para cada contrato.
                </p>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-white/90">
                  Un encuentro entre JAAK y PSC Codex para explorar cómo la identidad verificada, la integridad
                  documental y la certificación fortalecen los procesos de contratación digital.
                </p>
                <div className="mt-8">
                  <RegisterButton id="registro-hero" location="hero" className="w-full shadow-lg shadow-[var(--wb-teal)]/25 sm:w-auto" />
                </div>
              </div>

              <div className="space-y-6">
                <dl className="grid grid-cols-2 gap-3 text-sm">
                  {[
                    ["Fecha", "Miércoles 25 de noviembre de 2026"],
                    ["Horario", "11:00–12:00 h (Ciudad de México)"],
                    ["Modalidad", "En línea"],
                    ["Duración", "60 minutos"],
                  ].map(([k, v]) => (
                    <div key={k} className="rounded-md border-t-2 border-t-[var(--wb-teal)] bg-[var(--wb-navy-dark)]/70 p-3 ring-1 ring-white/15 backdrop-blur-sm">
                      <dt className="text-xs font-semibold uppercase tracking-wider text-[var(--wb-teal)]">{k}</dt>
                      <dd className="mt-1 font-semibold leading-snug text-white">{v}</dd>
                    </div>
                  ))}
                </dl>
                <Countdown />
              </div>
            </div>
          </section>

          {/* 2. Firmar vs. demostrar */}
          <section aria-labelledby="demostrar" className={`${SECTION} bg-gradient-to-b from-white to-[var(--wb-gray)]`}>
            <div aria-hidden="true" className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-[var(--wb-teal)]/15 blur-3xl" />
            <div className={`${INNER} relative`}>
              <p className={EYEBROW}>{BAR}El problema</p>
              <h2 id="demostrar" className={`${H2} max-w-3xl`}>
                Por qué firmar no siempre equivale a poder demostrar
              </h2>
              <p className="mt-5 max-w-3xl text-base leading-relaxed">
                Un contrato firmado solo es útil el día en que alguien lo cuestiona si puede responder tres preguntas:
                quién lo firmó, si el documento sigue siendo el mismo y cuándo ocurrió. Cada una depende de una capa
                distinta, y ninguna sustituye a las otras.
              </p>
              <ul className="mt-10 grid gap-5 md:grid-cols-3">
                {LAYERS.map((l, i) => (
                  <li key={l.title} className="relative rounded-md border-t-4 border-t-[var(--wb-teal)] bg-white p-6 shadow-[0_8px_24px_rgba(2,19,45,0.08)]">
                    <span aria-hidden="true" className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[var(--wb-navy-dark)] to-[var(--wb-navy)] text-sm font-extrabold text-[var(--wb-teal)] ring-2 ring-[var(--wb-teal)]/40">
                      0{i + 1}
                    </span>
                    <h3 className="mt-4 text-lg font-bold text-[var(--wb-navy)]">{l.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed">{l.text}</p>
                  </li>
                ))}
              </ul>
              <p className="wb-dark mt-8 max-w-3xl rounded-md border-l-4 border-[var(--wb-teal)] bg-gradient-to-r from-[var(--wb-navy-dark)] to-[var(--wb-navy)] p-5 text-sm leading-relaxed text-white">
                <strong>Importante:</strong> la NOM-151, por sí sola, no prueba la identidad de quien firma ni garantiza
                automáticamente el resultado de un juicio. Fortalece la evidencia sobre la integridad y la existencia del
                documento; su valoración corresponde a la autoridad. Consulte las fuentes oficiales:{" "}
                <ExternalLink href={LINKS.nom151Dof} location="problema_fuentes" className="font-semibold text-[var(--wb-teal)] underline underline-offset-2 hover:no-underline">
                  NOM-151-SCFI-2016 en el DOF
                </ExternalLink>{" "}
                y el{" "}
                <ExternalLink href={LINKS.codigoComercio} location="problema_fuentes" className="font-semibold text-[var(--wb-teal)] underline underline-offset-2 hover:no-underline">
                  Código de Comercio
                </ExternalLink>
                .
              </p>
            </div>
          </section>

          {/* 3. Qué descubrirán */}
          <section aria-labelledby="descubriran" className={`${SECTION} wb-dark bg-gradient-to-br from-[var(--wb-navy-dark)] via-[var(--wb-navy)] to-[var(--wb-navy-dark)] text-white`}>
            <NetworkDecor className="-right-10 -top-6 w-[26rem] opacity-60" />
            <div className={`${INNER} relative`}>
              <p className={EYEBROW_DARK}><span aria-hidden="true" className="h-0.5 w-8 bg-[var(--wb-teal)]" />Contenido</p>
              <h2 id="descubriran" className={H2_DARK}>Qué descubrirán los asistentes</h2>
              <ul className="mt-8 grid gap-4 md:grid-cols-2">
                {LEARNINGS.map((t) => (
                  <li key={t} className="flex gap-4 rounded-md bg-white/[0.07] p-5 text-base leading-relaxed ring-1 ring-white/15 backdrop-blur-sm">
                    <span aria-hidden="true" className="mt-0.5 flex h-7 w-7 flex-none items-center justify-center rounded-full bg-[var(--wb-teal)] text-[var(--wb-navy-dark)]">
                      <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="3">
                        <path d="M4 10.5l4 4 8-9" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="text-white/95">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 4. Agenda */}
          <section aria-labelledby="agenda" className={`${SECTION} bg-white`}>
            <div className={INNER}>
              <p className={EYEBROW}>{BAR}60 minutos</p>
              <h2 id="agenda" className={H2}>Agenda</h2>
              <ol className="relative mt-10 space-y-6 before:absolute before:bottom-2 before:left-[0.6875rem] before:top-2 before:w-0.5 before:bg-gradient-to-b before:from-[var(--wb-teal)] before:to-[var(--wb-navy)] sm:before:left-[0.6875rem]">
                {AGENDA.map((a) => (
                  <li key={a.time} className="relative pl-10">
                    <span aria-hidden="true" className="absolute left-0 top-1.5 h-6 w-6 rounded-full border-4 border-white bg-[var(--wb-navy)] ring-2 ring-[var(--wb-teal)]" />
                    <span className="inline-block rounded-full bg-[var(--wb-navy)] px-3 py-1 text-xs font-extrabold tabular-nums text-white">{a.time}</span>
                    <h3 className="mt-2 text-lg font-bold text-[var(--wb-navy)]">{a.title}</h3>
                    <p className="mt-1 max-w-2xl text-sm leading-relaxed">{a.text}</p>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          {/* 5. Aplicaciones */}
          <section aria-labelledby="aplicaciones" className={`${SECTION} bg-gradient-to-b from-[var(--wb-gray)] to-white`}>
            <div aria-hidden="true" className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-[var(--wb-navy)]/10 blur-3xl" />
            <div className={`${INNER} relative`}>
              <p className={EYEBROW}>{BAR}Casos de uso</p>
              <h2 id="aplicaciones" className={H2}>Aplicaciones por sector</h2>
              <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {APPLICATIONS.map((a) => (
                  <li key={a.title} className="rounded-md bg-white p-6 shadow-[0_8px_24px_rgba(2,19,45,0.08)] ring-1 ring-[var(--wb-navy)]/5">
                    <SectorGlyph kind={a.icon} />
                    <h3 className="mt-4 text-lg font-bold text-[var(--wb-navy)]">{a.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed">{a.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 6. Ponentes */}
          <section aria-labelledby="ponentes" className={`${SECTION} bg-white`}>
            <div className={INNER}>
              <p className={EYEBROW}>{BAR}Quiénes participan</p>
              <h2 id="ponentes" className={H2}>Ponentes</h2>
              <ul className="mt-10 grid gap-8 md:grid-cols-2">
                {SPEAKERS.map((s) => (
                  <li key={s.name} className="overflow-hidden rounded-md bg-white shadow-[0_8px_24px_rgba(2,19,45,0.1)] ring-1 ring-[var(--wb-navy)]/10">
                    <div className="relative h-24 overflow-hidden bg-gradient-to-r from-[var(--wb-navy-dark)] via-[var(--wb-navy)] to-[var(--wb-teal)]">
                      <NetworkDecor className="-right-4 -top-8 w-72 opacity-70" />
                    </div>
                    <div className="relative z-10 px-6 pb-6">
                      {s.photo ? (
                        <Image src={s.photo.src} alt={s.photo.alt} width={s.photo.width} height={s.photo.height} className="-mt-14 h-28 w-28 rounded-full object-cover ring-4 ring-white" />
                      ) : (
                        <div aria-hidden="true" className="-mt-14 flex h-28 w-28 items-center justify-center rounded-full bg-[var(--wb-navy)] text-3xl font-extrabold text-white ring-4 ring-white">
                          {initials(s.name)}
                        </div>
                      )}
                      <h3 className="mt-4 text-xl font-bold text-[var(--wb-navy)]">{s.name}</h3>
                      <p className="mt-1 text-sm font-semibold">{s.role}</p>
                      <p className="mt-3 text-sm leading-relaxed">{s.bio}</p>
                      <ExternalLink href={s.linkedin} location={`ponente_${initials(s.name).toLowerCase()}`} label={`LinkedIn de ${s.name}`} className={`${LINK_ON_LIGHT} mt-4 inline-block text-sm`}>
                        Ver perfil en LinkedIn
                      </ExternalLink>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 7. Alianza */}
          <section aria-labelledby="alianza" className={`${SECTION} wb-dark isolate bg-[var(--wb-navy-dark)] text-white`}>
            <NetworkBackdrop opacity="opacity-40" position="object-center" />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-[var(--wb-navy-dark)]/80 via-[var(--wb-navy)]/70 to-[var(--wb-navy-dark)]/90" />
            <div className={`${INNER} relative`}>
              <p className={EYEBROW_DARK}><span aria-hidden="true" className="h-0.5 w-8 bg-[var(--wb-teal)]" />La alianza</p>
              <h2 id="alianza" className={`${H2_DARK} max-w-3xl`}>JAAK × PSC Codex: dos capas que se complementan</h2>
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/90">
                Una contratación digital sólida requiere saber quién firma y poder respaldar el documento en el tiempo.
                Cada organización aporta una parte distinta de esa respuesta.
              </p>
              <div className="relative mt-10 grid gap-5 md:grid-cols-2">
                <span aria-hidden="true" className="absolute left-1/2 top-1/2 z-10 hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--wb-teal)] text-xl font-extrabold text-[var(--wb-navy-dark)] ring-4 ring-[var(--wb-navy-dark)] md:flex">×</span>
                <article className="rounded-md border-t-4 border-t-[var(--wb-teal)] bg-white p-6 text-[var(--wb-text)] shadow-xl">
                  <h3 className="text-lg font-bold text-[var(--wb-navy)]">JAAK · identidad y flujo de firma</h3>
                  <p className="mt-2 text-sm leading-relaxed">
                    Verificación de la identidad de la persona que firma y flujo de firma electrónica con evidencia
                    de cada paso. JAAK no es un Prestador de Servicios de Certificación.
                  </p>
                  <p className="mt-4 text-sm">
                    <ExternalLink href={LINKS.jaak} location="alianza" className={LINK_ON_LIGHT}>jaak.ai</ExternalLink>
                    {" · "}
                    <ExternalLink href={LINKS.jaakLinkedin} location="alianza" label="LinkedIn de JAAK" className={LINK_ON_LIGHT}>LinkedIn</ExternalLink>
                  </p>
                </article>
                <article className="rounded-md border-t-4 border-t-[var(--wb-teal)] bg-white p-6 text-[var(--wb-text)] shadow-xl">
                  <h3 className="text-lg font-bold text-[var(--wb-navy)]">PSC Codex · certificación</h3>
                  <p className="mt-2 text-sm leading-relaxed">
                    Certificación y constancias que fortalecen la integridad y la conservación del documento en el
                    tiempo, como Prestador de Servicios de Certificación.
                  </p>
                  <p className="mt-4 text-sm">
                    <ExternalLink href={LINKS.psc} location="alianza" className={LINK_ON_LIGHT}>psccodex.com</ExternalLink>
                    {" · "}
                    <ExternalLink href={LINKS.pscLinkedin} location="alianza" label="LinkedIn de PSC Codex" className={LINK_ON_LIGHT}>LinkedIn</ExternalLink>
                  </p>
                </article>
              </div>
              <p className="mt-6 text-sm leading-relaxed text-white/90">
                Puede verificar a cualquier prestador en el{" "}
                <ExternalLink href={LINKS.pscDirectorio} location="alianza_directorio" className="font-semibold text-[var(--wb-teal)] underline underline-offset-2 hover:no-underline">
                  directorio oficial de PSC de la Secretaría de Economía
                </ExternalLink>
                .
              </p>
            </div>
          </section>

          {/* 8. FAQ */}
          <section aria-labelledby="faq" className={`${SECTION} bg-gradient-to-b from-white to-[var(--wb-gray)]`}>
            <div className="relative mx-auto max-w-3xl">
              <p className={EYEBROW}>{BAR}Dudas frecuentes</p>
              <h2 id="faq" className={H2}>Preguntas frecuentes</h2>
              <div className="mt-8 space-y-3">
                {FAQ.map((f) => (
                  <details key={f.q} className="group rounded-md border-l-4 border-l-[var(--wb-teal)] bg-white px-5 py-4 shadow-[0_4px_16px_rgba(2,19,45,0.07)]">
                    <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 text-base font-bold text-[var(--wb-navy)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--wb-navy)] [&::-webkit-details-marker]:hidden">
                      {f.q}
                      <span aria-hidden="true" className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-[var(--wb-navy)] text-lg leading-none text-white transition-transform group-open:rotate-45">+</span>
                    </summary>
                    <p className="mt-2 text-sm leading-relaxed">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          {/* 9. CTA final */}
          <section aria-labelledby="cta-final" className="wb-dark relative isolate overflow-hidden bg-[var(--wb-navy-dark)] px-4 py-16 text-center text-white sm:px-6 sm:py-24">
            <NetworkBackdrop opacity="opacity-80" position="object-center" />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-[var(--wb-navy-dark)]/85 via-[var(--wb-navy)]/75 to-[var(--wb-navy-dark)]/90" />
            <div className="relative mx-auto max-w-2xl">
              <h2 id="cta-final" className="text-3xl font-extrabold leading-tight sm:text-4xl">
                Reserve su lugar en el webinar
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/90">
                25 de noviembre de 2026 · 11:00–12:00 h (Ciudad de México) · En línea. El registro se completa en
                GoToWebinar.
              </p>
              <div className="mt-8">
                <RegisterButton id="registro-final" location="cta_final" className="w-full shadow-lg shadow-[var(--wb-teal)]/25 sm:w-auto" />
              </div>
              <p className="mt-6 text-xs leading-relaxed text-white/85">
                Al registrarse, sus datos serán tratados conforme a los avisos de privacidad de{" "}
                <Link href="/privacidad" className="underline hover:no-underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">JAAK</Link>
                ,{" "}
                <ExternalLink href={LINKS.pscPrivacy} location="cta_final_privacidad" label="Aviso de privacidad de PSC Codex" className="underline hover:no-underline">PSC Codex</ExternalLink>
                {" "}y{" "}
                <ExternalLink href={LINKS.gotoPrivacy} location="cta_final_privacidad" label="Aviso de privacidad de GoTo" className="underline hover:no-underline">GoToWebinar</ExternalLink>.
              </p>
            </div>
          </section>
        </main>

        {/* 10. Footer */}
        <footer className="wb-dark bg-[var(--wb-navy-dark)] px-4 py-10 text-sm text-white/85 sm:px-6">
          <div className={`${INNER} grid gap-8 md:grid-cols-3`}>
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wider text-white">JAAK</h2>
              <ul className="mt-3 space-y-2">
                <li><ExternalLink href={LINKS.jaak} location="footer" className="underline hover:no-underline">Sitio oficial</ExternalLink></li>
                <li><ExternalLink href={LINKS.jaakLinkedin} location="footer" label="LinkedIn de JAAK" className="underline hover:no-underline">LinkedIn</ExternalLink></li>
                <li><Link href="/privacidad" className="underline hover:no-underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Aviso de privacidad de JAAK</Link></li>
                <li><Link href="/cookies" className="underline hover:no-underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Política de cookies</Link></li>
              </ul>
            </div>
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wider text-white">PSC Codex</h2>
              <ul className="mt-3 space-y-2">
                <li><ExternalLink href={LINKS.psc} location="footer" className="underline hover:no-underline">Sitio oficial</ExternalLink></li>
                <li><ExternalLink href={LINKS.pscLinkedin} location="footer" label="LinkedIn de PSC Codex" className="underline hover:no-underline">LinkedIn</ExternalLink></li>
                <li><ExternalLink href={LINKS.pscPrivacy} location="footer" label="Aviso de privacidad de PSC Codex" className="underline hover:no-underline">Aviso de privacidad de PSC Codex</ExternalLink></li>
              </ul>
            </div>
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wider text-white">Registro</h2>
              <p className="mt-3 leading-relaxed">
                El registro se realiza en GoToWebinar, plataforma de un tercero con sus propios términos.{" "}
                <ExternalLink href={LINKS.gotoPrivacy} location="footer" label="Aviso de privacidad de GoTo" className="underline hover:no-underline">
                  Aviso de privacidad de GoTo
                </ExternalLink>
                .
              </p>
            </div>
          </div>
          <p className={`${INNER} mt-8 border-t border-white/20 pt-6 text-xs text-white/70`}>
            © 2026 JAAK y PSC Codex. Contenido informativo; no constituye asesoría legal.
          </p>
        </footer>

        <StickyRegisterBar />
        <AdsConsentBanner />
      </div>
    </WebinarProvider>
  );
}
