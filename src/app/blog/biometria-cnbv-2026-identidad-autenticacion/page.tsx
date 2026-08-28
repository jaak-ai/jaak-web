import ArticleLayout from "../ArticleLayout";
import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";

const FONT = "var(--font-montserrat), Montserrat, sans-serif";

export const metadata: Metadata = {
  title: "Biometría CNBV 2026: identidad, 1:1, 1:N y seguridad | JAAK",
  description:
    "Analizamos qué cambia con la regulación biométrica de CNBV en 2026: rostro, 1:1, 1:N, liveness, bases propias, seguridad, evidencia y tecnología.",
  keywords: [
    "biometría CNBV 2026",
    "CNBV biometría facial",
    "CNBV Anexo 71",
    "autenticación biométrica",
    "base biométrica CNBV",
    "KYC CNBV",
    "liveness CNBV",
    "reconocimiento facial bancos",
    "biometría 1:1",
    "biometría 1:N",
    "NIST FRVT 1:N",
    "ISO 30107-3",
    "INE biometría",
    "RENAPO KYC",
    "proveedor biometría México",
    "cambiar proveedor KYC",
    "infraestructura de identidad",
  ],
  openGraph: {
    title: "Biometría y CNBV en 2026: el reto ya no es reconocer un rostro",
    description:
      "La actualización regulatoria obliga a mirar más allá del reconocimiento facial: identidad oficial, liveness, enrolamiento, autenticación, bases biométricas propias, seguridad, evidencia y gobierno del dato.",
    type: "article",
    publishedTime: "2026-08-28",
    authors: ["JAAK"],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Biometría y CNBV en 2026: el reto ya no es reconocer un rostro",
  description:
    "Análisis técnico y regulatorio de la resolución que modifica las Disposiciones de carácter general aplicables a las instituciones de crédito en materia de biométricos, publicada en el DOF el 1 de julio de 2026.",
  image: "https://jaak.ai/images/logos/jaak-logo-azul.png",
  datePublished: "2026-08-28",
  dateModified: "2026-08-28",
  author: {
    "@type": "Organization",
    name: "JAAK",
    url: "https://jaak.ai",
  },
  publisher: {
    "@type": "Organization",
    name: "JAAK",
    url: "https://jaak.ai",
    logo: {
      "@type": "ImageObject",
      url: "https://jaak.ai/images/logos/jaak-logo-azul.png",
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://jaak.ai/blog/biometria-cnbv-2026-identidad-autenticacion",
  },
  keywords:
    "biometría CNBV 2026, CNBV Anexo 71, autenticación biométrica, base biométrica CNBV, liveness, biometría 1:1, biometría 1:N",
  inLanguage: "es-MX",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://jaak.ai" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://jaak.ai/blog" },
    {
      "@type": "ListItem",
      position: 3,
      name: "Biometría y CNBV en 2026",
      item: "https://jaak.ai/blog/biometria-cnbv-2026-identidad-autenticacion",
    },
  ],
};

/* ────────────────────────────────────────────────────────────
   Componentes locales — sistema visual del artículo
   ──────────────────────────────────────────────────────────── */

function H2({ id, children }: { id: string; children: ReactNode }) {
  return (
    <h2
      id={id}
      className="text-2xl font-bold mt-16 mb-6 scroll-mt-24"
      style={{ color: "rgba(255,255,255,0.95)", fontFamily: FONT, letterSpacing: "-0.5px" }}
    >
      {children}
    </h2>
  );
}

function P({ children, small }: { children: ReactNode; small?: boolean }) {
  return (
    <p
      className={small ? "text-xs italic mb-5" : "text-[15px] leading-[1.85] mb-5"}
      style={{ color: small ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.68)", fontFamily: FONT }}
    >
      {children}
    </p>
  );
}

function Lead({ children }: { children: ReactNode }) {
  return (
    <p className="text-xl leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.82)", fontFamily: FONT }}>
      {children}
    </p>
  );
}

type CalloutKind = "regulacion" | "jaak" | "capacidad" | "nota";

function Callout({ kind, label, children }: { kind: CalloutKind; label?: string; children: ReactNode }) {
  const cfg: Record<CalloutKind, { color: string; border: string; bg: string; defaultLabel: string }> = {
    regulacion: {
      color: "rgba(255,255,255,0.6)",
      border: "rgba(255,255,255,0.28)",
      bg: "rgba(255,255,255,0.03)",
      defaultLabel: "Lo que establece la resolución",
    },
    jaak: {
      color: "#1ECAD3",
      border: "#1ECAD3",
      bg: "rgba(30,202,211,0.07)",
      defaultLabel: "Interpretación tecnológica de JAAK",
    },
    capacidad: {
      color: "#2AD796",
      border: "#2AD796",
      bg: "rgba(42,215,150,0.07)",
      defaultLabel: "Capacidad de JAAK",
    },
    nota: {
      color: "rgba(251,191,36,0.9)",
      border: "rgba(251,191,36,0.55)",
      bg: "rgba(251,191,36,0.06)",
      defaultLabel: "Nota",
    },
  };
  const c = cfg[kind];
  return (
    <div className="my-8 rounded-r-xl p-5" style={{ background: c.bg, borderLeft: `3px solid ${c.border}` }}>
      <p
        className="text-[10px] font-bold uppercase tracking-widest mb-2"
        style={{ color: c.color, fontFamily: FONT }}
      >
        {label ?? c.defaultLabel}
      </p>
      <div className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.75)", fontFamily: FONT }}>
        {children}
      </div>
    </div>
  );
}

function Quote({ children }: { children: ReactNode }) {
  return (
    <blockquote className="my-9 pl-5" style={{ borderLeft: "2px solid #1ECAD3" }}>
      <p
        className="text-lg sm:text-xl italic leading-relaxed"
        style={{ color: "rgba(255,255,255,0.88)", fontFamily: FONT, letterSpacing: "-0.2px" }}
      >
        {children}
      </p>
    </blockquote>
  );
}

function FlowChain({ steps }: { steps: string[] }) {
  return (
    <div className="my-8 flex flex-col items-stretch gap-0 max-w-lg mx-auto">
      {steps.map((step, i) => (
        <div key={step} className="flex flex-col items-center">
          <div
            className="w-full text-center rounded-lg px-4 py-3 text-xs sm:text-sm font-bold"
            style={{
              background: "rgba(255,255,255,0.045)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "rgba(255,255,255,0.88)",
              fontFamily: FONT,
            }}
          >
            {step}
          </div>
          {i < steps.length - 1 && (
            <svg
              className="w-4 h-4 my-1 shrink-0"
              style={{ color: "#1ECAD3" }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 5v14m0 0l-6-6m6 6l6-6" />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
}

function ChipChain({ steps }: { steps: string[] }) {
  return (
    <div className="my-8 flex flex-wrap items-center gap-2 justify-center">
      {steps.map((step, i) => (
        <span key={step} className="flex items-center gap-2">
          <span
            className="px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-bold"
            style={{
              background: "rgba(30,202,211,0.08)",
              border: "1px solid rgba(30,202,211,0.25)",
              color: "#1ECAD3",
              fontFamily: FONT,
            }}
          >
            {step}
          </span>
          {i < steps.length - 1 && <span style={{ color: "rgba(255,255,255,0.28)" }}>→</span>}
        </span>
      ))}
    </div>
  );
}

function TagRow({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-2 justify-center my-6">
      {tags.map((t) => (
        <span
          key={t}
          className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wide"
          style={{ background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.55)", fontFamily: FONT }}
        >
          {t}
        </span>
      ))}
    </div>
  );
}

function TimelineGrid({ items }: { items: { date: string; label: string }[] }) {
  return (
    <div className="my-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
      {items.map((it) => (
        <div
          key={it.date}
          className="rounded-xl p-4 text-center"
          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
        >
          <p className="text-sm font-black mb-1.5" style={{ color: "#1ECAD3", fontFamily: FONT }}>
            {it.date}
          </p>
          <p className="text-xs leading-snug" style={{ color: "rgba(255,255,255,0.62)", fontFamily: FONT }}>
            {it.label}
          </p>
        </div>
      ))}
    </div>
  );
}

function DataTable({ head, rows }: { head: string[]; rows: ReactNode[][] }) {
  return (
    <div className="my-8 overflow-x-auto rounded-xl" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
      <table className="w-full border-collapse text-sm min-w-[560px]">
        <thead>
          <tr style={{ background: "rgba(30,202,211,0.08)" }}>
            {head.map((h) => (
              <th
                key={h}
                className="px-4 py-3 text-left font-bold whitespace-nowrap"
                style={{ color: "rgba(255,255,255,0.92)", fontFamily: FONT }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              style={{
                background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.02)",
                borderTop: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {row.map((cell, j) => (
                <td
                  key={j}
                  className="px-4 py-3 align-top"
                  style={{ color: "rgba(255,255,255,0.68)", fontFamily: FONT }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function DeepDive({ title, children }: { title: string; children: ReactNode }) {
  return (
    <details
      className="my-6 rounded-xl group"
      style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
    >
      <summary
        className="cursor-pointer flex items-center justify-between gap-3 px-5 py-4 font-bold text-sm marker:content-none [&::-webkit-details-marker]:hidden"
        style={{ color: "rgba(255,255,255,0.9)", fontFamily: FONT }}
      >
        {title}
        <svg
          className="w-4 h-4 shrink-0 transition-transform duration-200 group-open:rotate-180"
          style={{ color: "#1ECAD3" }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </summary>
      <div className="px-5 pb-5 pt-1 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)", fontFamily: FONT }}>
        {children}
      </div>
    </details>
  );
}

function CardGrid({
  cols = 2,
  items,
}: {
  cols?: 2 | 3 | 4;
  items: { title: string; body: ReactNode; accent?: string }[];
}) {
  const colClass = cols === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : cols === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2";
  return (
    <div className={`my-8 grid grid-cols-1 ${colClass} gap-4`}>
      {items.map((it) => (
        <div
          key={it.title}
          className="rounded-xl p-5"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: `1px solid ${it.accent ?? "rgba(255,255,255,0.08)"}`,
          }}
        >
          <p className="text-sm font-bold mb-2" style={{ color: "rgba(255,255,255,0.92)", fontFamily: FONT }}>
            {it.title}
          </p>
          <div className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.6)", fontFamily: FONT }}>
            {it.body}
          </div>
        </div>
      ))}
    </div>
  );
}

function NumberedQuestions({ items }: { items: string[] }) {
  return (
    <ol className="my-8 space-y-3">
      {items.map((q, i) => (
        <li
          key={i}
          className="flex gap-3 rounded-lg p-4"
          style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
        >
          <span
            className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-black"
            style={{ background: "rgba(30,202,211,0.12)", color: "#1ECAD3", fontFamily: FONT }}
          >
            {i + 1}
          </span>
          <p className="text-sm leading-relaxed pt-0.5" style={{ color: "rgba(255,255,255,0.8)", fontFamily: FONT }}>
            {q}
          </p>
        </li>
      ))}
    </ol>
  );
}

function InlineCta({ heading, cta, href }: { heading: string; cta: string; href: string }) {
  return (
    <div
      className="my-10 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
      style={{
        background: "linear-gradient(135deg, rgba(30,202,211,0.09) 0%, rgba(42,215,150,0.05) 100%)",
        border: "1px solid rgba(30,202,211,0.2)",
      }}
    >
      <p className="font-bold text-sm sm:text-base pr-2" style={{ color: "rgba(255,255,255,0.92)", fontFamily: FONT }}>
        {heading}
      </p>
      <Link
        href={href}
        className="shrink-0 px-5 py-2.5 rounded-lg font-black text-xs sm:text-sm text-center whitespace-nowrap transition-all hover:-translate-y-0.5"
        style={{ background: "#1ECAD3", color: "#202945", fontFamily: FONT }}
      >
        {cta}
      </Link>
    </div>
  );
}

function Disclaimer() {
  return (
    <p
      className="text-xs italic mb-10 pb-8"
      style={{ color: "rgba(255,255,255,0.4)", fontFamily: FONT, borderBottom: "1px solid rgba(255,255,255,0.07)" }}
    >
      Este artículo tiene fines informativos y tecnológicos y no constituye asesoría jurídica o regulatoria. Para la
      interpretación aplicable a un caso concreto, consulte a su área jurídica o de cumplimiento y revise el texto
      oficial de la resolución publicada en el DOF.
    </p>
  );
}

/* ────────────────────────────────────────────────────────────
   Tabla de contenidos móvil
   ──────────────────────────────────────────────────────────── */

const TOC_ITEMS: { id: string; label: string }[] = [
  { id: "apertura", label: "El reconocimiento facial es apenas una parte del problema" },
  { id: "que-cambio-cnbv", label: "1. ¿Qué modificó realmente la CNBV?" },
  { id: "alcance", label: "2. ¿Dónde aplica? No es una obligación uniforme" },
  { id: "base-biometrica", label: "3. Una base biométrica propia cambia el modelo" },
  { id: "documentos-identificacion", label: "4. ¿Qué identificaciones contempla el proceso?" },
  { id: "renapo-vs-ine", label: "5. RENAPO no cumple la misma función que INE o SRE" },
  { id: "enrolamiento", label: "6. El orden de enrolamiento también importa" },
  { id: "biometria-facial", label: "7. Biometría facial: una selfie no es una identidad" },
  { id: "liveness", label: "8. Detección facial, liveness y comparación" },
  { id: "1-a-1-vs-1-a-n", label: "9. 1:1 y 1:N no resuelven el mismo problema" },
  { id: "90-por-ciento", label: "10. El 90%: qué significa y qué no significa" },
  { id: "huella", label: "11. La huella no desaparece" },
  { id: "excepciones", label: "12. Excepciones: cuando el happy path no funciona" },
  { id: "seguridad", label: "13. Seguridad: la regulación llega hasta la infraestructura" },
  { id: "base-compartida", label: "14. Base propia no significa base compartida" },
  { id: "fin-de-vida", label: "15. ¿Qué ocurre cuando una base deja de utilizarse?" },
  { id: "validacion-anual", label: "16. Cumplimiento continuo: implementar no es terminar" },
  { id: "evidencia", label: "17. Evidencia: un match no es suficiente" },
  { id: "anexo-75", label: "18. El Anexo 75 conecta tecnología con gobierno regulatorio" },
  { id: "innovacion", label: "19. La regulación no cierra la puerta a la innovación" },
  { id: "documentos-alternativos", label: "20. Documentos y verificaciones alternativas" },
  { id: "conversacion-institucional", label: "21. Una conversación que involucra a toda la institución" },
  { id: "evaluar-proveedor", label: "22. 13 preguntas para evaluar a un proveedor biométrico" },
  { id: "matriz-capacidades", label: "23. Del cumplimiento a la arquitectura tecnológica" },
  { id: "jaak", label: "24. ¿Dónde entra JAAK?" },
  { id: "capacidades-complementarias", label: "25. Capacidades complementarias" },
  { id: "tecnologia-adaptable", label: "26. Tecnología adaptable" },
  { id: "tecnologia-con-evidencia", label: "27. Tecnología con evidencia" },
  { id: "arquitectura-confianza", label: "28. Una arquitectura de confianza no termina en KYC" },
  { id: "conclusiones", label: "Conclusiones: el reto ya no es reconocer un rostro" },
  { id: "fuentes", label: "Fuentes y referencias" },
];

function MobileToc() {
  return (
    <details
      className="lg:hidden my-8 rounded-xl"
      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}
    >
      <summary
        className="cursor-pointer flex items-center justify-between gap-3 px-5 py-4 font-bold text-sm marker:content-none [&::-webkit-details-marker]:hidden"
        style={{ color: "#1ECAD3", fontFamily: FONT }}
      >
        Contenido del artículo
        <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </summary>
      <nav className="px-5 pb-5 flex flex-col gap-2.5 max-h-80 overflow-y-auto">
        {TOC_ITEMS.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="text-xs leading-snug"
            style={{ color: "rgba(255,255,255,0.6)", fontFamily: FONT }}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </details>
  );
}

/* ────────────────────────────────────────────────────────────
   Artículo
   ──────────────────────────────────────────────────────────── */

export default function BiometriaCnbv2026() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([articleSchema, breadcrumbSchema]) }}
      />
      <ArticleLayout
        title="Biometría y CNBV en 2026: el reto ya no es reconocer un rostro"
        subtitle="La actualización regulatoria obliga a mirar más allá del reconocimiento facial: identidad oficial, liveness, enrolamiento, autenticación, bases biométricas propias, seguridad, evidencia y gobierno del dato forman parte de una misma conversación tecnológica."
        category="Seguridad"
        date="28 de agosto, 2026"
        readTime="27 min"
        slug="biometria-cnbv-2026-identidad-autenticacion"
        relatedPosts={[
          {
            title: "Guía completa de las disposiciones CNBV para verificación de identidad",
            slug: "disposiciones-cnbv-verificacion-identidad",
            category: "Regulación",
          },
          {
            title: "Seguridad biométrica: Cómo la prueba de vida previene el fraude",
            slug: "seguridad-biometrica-prueba-de-vida",
            category: "Seguridad",
          },
          {
            title: "Por qué la CNBV aplicó +696 sanciones en 2025: el problema no es el fraude, son los expedientes",
            slug: "cnbv-sanciones-2025-expedientes",
            category: "Regulación",
          },
        ]}
      >
        <p
          className="text-[10px] font-bold tracking-widest uppercase mb-4"
          style={{ color: "rgba(255,255,255,0.4)", fontFamily: FONT }}
        >
          CNBV · IDENTIDAD DIGITAL · BIOMETRÍA
        </p>

        {/* ── APERTURA ─────────────────────────────────────── */}
        <H2 id="apertura">El reconocimiento facial es apenas una parte del problema</H2>

        <Lead>
          Durante años, gran parte de la conversación alrededor de biometría en servicios financieros pudo resumirse
          en una pregunta: ¿el rostro coincide? La modificación publicada por la Comisión Nacional Bancaria y de
          Valores (CNBV) el 1 de julio de 2026 obliga a hacer preguntas bastante más difíciles.
        </Lead>

        <P>
          ¿De dónde se obtuvo la identidad contra la que se está comparando? ¿La biometría fue capturada
          directamente de la persona? ¿Existen mecanismos para detectar una fotografía, una pantalla u otro intento
          de simulación? ¿Esa persona ya fue enrolada previamente bajo otra identidad? ¿Quién realizó la captura?
          ¿Dónde se almacena la biometría? ¿Quién puede consultarla? ¿Es posible identificar una modificación sobre
          los datos originales? ¿Qué ocurre cuando la institución deja de utilizar la base? ¿Existe suficiente
          evidencia para reconstruir todo el proceso frente a una revisión?
        </P>

        <P>
          Estas preguntas explican por qué interpretar la modificación únicamente como &ldquo;CNBV ya contempla
          biometría facial&rdquo; se queda corto. El cambio importante es otro: la biometría empieza a entenderse
          dentro de una arquitectura donde identificación, captura, validación, enrolamiento, autenticación,
          seguridad, evidencia y gobierno deben funcionar en conjunto.
        </P>

        <Quote>
          Una coincidencia biométrica puede responder si dos muestras parecen pertenecer a la misma persona.
          Construir confianza requiere demostrar mucho más.
        </Quote>

        <Disclaimer />

        <MobileToc />

        <TimelineGrid
          items={[
            { date: "1 jul 2026", label: "Publicación de la resolución en el Diario Oficial de la Federación." },
            { date: "2 jul 2026", label: "Entrada en vigor de la resolución modificatoria." },
            {
              date: "30 días naturales",
              label: "Aviso para instituciones que ya contaban con una base biométrica al entrar en vigor la resolución.",
            },
            {
              date: "90 días hábiles",
              label: "Plazo máximo previsto para apegarse a la resolución modificatoria.",
            },
            {
              date: "20 días hábiles",
              label: "Distintos supuestos de avisos y reportes usan este periodo — no son una única obligación; debe revisarse cada artículo aplicable.",
            },
          ]}
        />

        {/* ── SECCIÓN 1 ─────────────────────────────────────── */}
        <H2 id="que-cambio-cnbv">1. ¿Qué modificó realmente la CNBV?</H2>

        <P>
          La resolución fue publicada en el DOF el 1 de julio de 2026 y modifica las Disposiciones de carácter
          general aplicables a las instituciones de crédito. CNBV señala como objetivo establecer lineamientos
          claros, simplificados y homologados para que las instituciones puedan integrar expedientes y realizar
          procesos de identificación y autenticación de clientes de manera eficiente, obteniendo la información y
          documentación necesaria para las operaciones y servicios financieros.
        </P>

        <P>
          Antes de esta modificación, determinadas operaciones presenciales ya exigían verificaciones de huella
          frente a fuentes como el Instituto Nacional Electoral (INE) y la Secretaría de Relaciones Exteriores
          (SRE). La propia exposición de motivos reconoce que el marco ya contemplaba datos biométricos como
          mecanismos de autenticación, pero no contemplaba expresamente biometría facial dentro de estos procesos.
        </P>

        <P>Por eso es incorrecto simplificar el cambio como &ldquo;antes no se podía usar rostro; ahora sí&rdquo;. La lectura correcta es más precisa: CNBV incorpora expresamente biometría facial dentro de un conjunto de procesos y fija condiciones técnicas y operativas para utilizarla.</P>

        <DataTable
          head={["Antes de la modificación", "A partir de la modificación"]}
          rows={[
            [
              "Huella como biométrico predominante en determinados procesos.",
              "Huella y biometría facial reconocidas expresamente.",
            ],
            [
              "Validaciones frente a autoridades en supuestos específicos.",
              "Posibilidad de conformar bases biométricas propias con deduplicación.",
            ],
            [
              "Biometría ya contemplada como mecanismo de autenticación.",
              "Requisitos explícitos de liveness y prevención de suplantación.",
            ],
            [
              "Sin especificaciones técnicas homologadas de captura.",
              "Requerimientos de captura, calidad e infraestructura (Anexo 71).",
            ],
            [
              "—",
              "Obligaciones de evidencia, avisos (Anexo 75) y procesos alternativos sujetos a autorización.",
            ],
          ]}
        />

        {/* ── SECCIÓN 2 ─────────────────────────────────────── */}
        <H2 id="alcance">2. La primera pregunta no es &ldquo;¿tenemos biometría?&rdquo; sino &ldquo;¿dónde aplica?&rdquo;</H2>

        <P>
          La resolución no debe interpretarse como una obligación uniforme para cualquier interacción financiera.
          El artículo 51 Bis se refiere, entre otros supuestos, a personas físicas que presencialmente solicitan
          operaciones pasivas relacionadas con Cuentas Bancarias Nivel 4, operaciones activas, servicios, y medios
          de pago relacionados con Cuentas Bancarias Nivel 3 y 4, cuando las cuentas se encuentren abiertas en la
          propia institución o en otra.
        </P>

        <P>
          En el esquema de base biométrica propia del artículo 51 Bis 2 también aparecen determinados retiros de
          efectivo y transferencias con cargo a Cuentas Bancarias Nivel 4.
        </P>

        <Callout kind="jaak">
          Por eso la conversación interna debería comenzar con un ejercicio de mapeo antes que con la elección de
          un motor biométrico.
        </Callout>

        <FlowChain steps={["OPERACIÓN", "CANAL", "TIPO DE CUENTA", "DOCUMENTO", "MECANISMO DE VERIFICACIÓN", "BIOMÉTRICO", "EVIDENCIA"]} />

        <P>No todas las operaciones siguen necesariamente el mismo proceso, y el resultado de este mapeo determina qué mecanismo de verificación corresponde en cada caso.</P>

        <Callout kind="regulacion">
          Cuando una operación es realizada por un representante, el artículo 51 Bis establece supuestos en los que
          las acciones de verificación se realizan respecto de la persona que se presenta y no se verifican en
          línea los datos biométricos del representado. Este artículo no desarrolla asesoría jurídica sobre
          representación: solo evidencia que el diseño del flujo depende del caso regulatorio específico.
        </Callout>

        <Quote>La arquitectura no debería comenzar eligiendo un motor biométrico. Debería comenzar entendiendo el journey regulatorio que debe resolver.</Quote>

        {/* ── SECCIÓN 3 ─────────────────────────────────────── */}
        <H2 id="base-biometrica">3. Una base biométrica propia cambia el modelo</H2>

        <P>
          El artículo 51 Bis 2 permite a la institución, en sustitución de determinados mecanismos previstos por
          51 Bis y 51 Bis 1, conformar su propia base biométrica bajo los requerimientos técnicos del Anexo 71, y
          utilizarla posteriormente para determinados procesos de verificación de identidad.
        </P>

        <P>Pero hay una condición crítica: la identidad no se incorpora a esa base sin una comprobación previa. Para integrar la base, la institución debe verificar la coincidencia de la biometría del cliente frente a registros de:</P>

        <ul className="list-disc pl-6 space-y-2 mb-6" style={{ color: "rgba(255,255,255,0.68)", fontFamily: FONT }}>
          <li>Instituto Nacional Electoral (INE);</li>
          <li>Secretaría de Relaciones Exteriores (SRE);</li>
          <li>autoridad fiscal mexicana;</li>
          <li>otra dependencia federal que proporcione servicios de verificación biométrica.</li>
        </ul>

        <P>Además, debe conservar evidencia documental del resultado de ese cotejo.</P>

        <FlowChain
          steps={[
            "IDENTIDAD DECLARADA",
            "DOCUMENTO",
            "CAPTURA BIOMÉTRICA",
            "VERIFICACIÓN ANTE AUTORIDAD",
            "EVIDENCIA",
            "ENROLAMIENTO EN BASE PROPIA",
            "AUTENTICACIONES POSTERIORES",
          ]}
        />

        <P>
          La base propia no debería convertirse en una colección de fotografías cuya identidad no fue correctamente
          establecida. La confiabilidad de la autenticación futura depende directamente de la confiabilidad del
          enrolamiento inicial.
        </P>

        <Callout kind="jaak" label="Interpretación tecnológica de JAAK — no es texto de CNBV">
          Si una identidad incorrecta entra correctamente a una base biométrica, el motor podrá autenticar
          correctamente a la persona equivocada.
        </Callout>

        {/* ── SECCIÓN 4 ─────────────────────────────────────── */}
        <H2 id="documentos-identificacion">4. ¿Qué identificaciones contempla el proceso?</H2>

        <P>El artículo 51 Bis 2 contempla, entre otros:</P>
        <ul className="list-disc pl-6 space-y-2 mb-6" style={{ color: "rgba(255,255,255,0.68)", fontFamily: FONT }}>
          <li>credencial para votar vigente emitida por el INE;</li>
          <li>pasaporte mexicano vigente;</li>
          <li>matrícula consular vigente;</li>
          <li>
            identificación expedida por otra autoridad fiscal mexicana o dependencia federal, cuando sus biométricos
            puedan verificarse bajo el mecanismo correspondiente.
          </li>
        </ul>

        <Callout kind="regulacion">
          Si la persona no cuenta con ninguno de estos documentos, el artículo contempla requerir dos de las demás
          identificaciones previstas en la normativa aplicable y realizar las acciones de verificación
          correspondientes. El detalle de esas identificaciones debe revisarse en la normativa a la que remite la
          propia disposición: este artículo no reproduce un listado que la resolución modificatoria no detalla
          expresamente.
        </Callout>

        {/* ── SECCIÓN 5 ─────────────────────────────────────── */}
        <H2 id="renapo-vs-ine">5. RENAPO no cumple exactamente la misma función que INE o SRE</H2>

        <P>Esta distinción debe quedar muy clara.</P>

        <CardGrid
          cols={2}
          items={[
            {
              title: "VERIFICACIÓN BIOMÉTRICA",
              accent: "rgba(30,202,211,0.3)",
              body: "INE / SRE / autoridad fiscal / dependencia habilitada. Responde si la biometría capturada coincide con el registro de la autoridad.",
            },
            {
              title: "COMPROBACIÓN DE IDENTIDAD Y DATOS",
              accent: "rgba(42,215,150,0.3)",
              body: "RENAPO / CURP. La resolución exige que, al conformar la base biométrica, también se corrobore la existencia de la CURP y que los datos proporcionados por el cliente coincidan con RENAPO.",
            },
          ]}
        />

        <P>Biometría responde una parte de la pregunta. Datos oficiales responden otra.</P>

        <div
          className="my-8 rounded-xl p-6 text-center"
          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
        >
          <p
            className="text-sm sm:text-base font-bold leading-relaxed"
            style={{ color: "rgba(255,255,255,0.85)", fontFamily: FONT }}
          >
            DOCUMENTO + DATOS + BIOMETRÍA + PRESENCIA + FUENTE OFICIAL
            <br />
            <span style={{ color: "#1ECAD3" }}>= IDENTIDAD CON MÚLTIPLES CAPAS DE COMPROBACIÓN</span>
          </p>
        </div>

        <Callout kind="jaak">Biometría no reemplaza al KYC. Es una de sus capas.</Callout>

        {/* ── SECCIÓN 6 ─────────────────────────────────────── */}
        <H2 id="enrolamiento">6. El orden de enrolamiento también importa</H2>

        <P>Este es un punto importante y poco comentado. El Anexo 71 y el artículo 51 Bis 2 establecen que, en la primera captura, deben registrarse primero los biométricos de empleados, directivos y funcionarios que estarán a cargo de capturar los biométricos de clientes. Solo después se capturan los datos biométricos de los clientes.</P>

        <P>
          Además, el proceso debe impedir que un operador registre sus propios biométricos en sustitución de los del
          cliente. Y el proceso de primera captura debe verificarse anualmente por los responsables de Contraloría
          Interna.
        </P>

        <FlowChain steps={["OPERADOR ENROLADO", "CAPTURA ASISTIDA", "CLIENTE", "BIOMÉTRICO", "IDENTIDAD DEL OPERADOR + EVENTO + RESULTADO", "EVIDENCIA"]} />

        <P>No solo existe &ldquo;identidad del cliente&rdquo;. Existe también identidad del operador y trazabilidad del actor que participa en el enrolamiento.</P>

        <Callout kind="jaak">Una arquitectura auditable debe poder responder no únicamente quién fue identificado, sino quién participó en su enrolamiento.</Callout>

        {/* ── SECCIÓN 7 ─────────────────────────────────────── */}
        <H2 id="biometria-facial">7. Biometría facial: una selfie no es una identidad</H2>

        <P>
          El Anexo 71 establece una serie de requerimientos para la primera captura facial que puede leerse en
          capas. Cada capa resuelve un problema distinto — desde la unicidad de la persona hasta la calidad técnica
          de la imagen que se procesará.
        </P>

        <DeepDive title="Technical deep dive: las 13 capas de captura facial del Anexo 71">
          <div className="space-y-4">
            {[
              { n: "1", t: "Deduplicación", d: "Debe validarse que las capturas de clientes o empleados no se encuentren previamente registradas con información correspondiente a otra persona. Referencia: NIST FRVT 1:N." },
              { n: "2", t: "Prevención de suplantación", d: "Se contempla ISO/IEC 30107-3 o Face Verification Certification." },
              { n: "3", t: "Requerimientos fotográficos", d: "ISO 19794-5." },
              { n: "4", t: "Imagen", d: "2D, frontal completa, 24 bits a color, mínimo 90 píxeles de distancia entre ojos." },
              { n: "5", t: "Postura", d: "Debe permitir una rotación de al menos ±5° frontal en las direcciones previstas." },
              { n: "6", t: "Expresión", d: "Neutral. Evitar sonrisas o guiños. Mirada al lente, salvo impedimentos físicos." },
              { n: "7", t: "Iluminación", d: "Equilibrada y distribuida para lograr tonos naturales y evitar efectos no deseados." },
              { n: "8", t: "Profundidad de campo", d: "Rostro completo enfocado." },
              { n: "9", t: "Obstrucciones", d: "No se permite armazón de lentes. Se permiten accesorios médicos. Deben evitarse elementos que cubran rostro, ojos o frente." },
              { n: "10", t: "Ambiente", d: "Iluminación controlada y captura asistida." },
              { n: "11", t: "Procesamiento", d: "Segmentación/recorte bajo referencia ICAO y extracción automática de características." },
              { n: "12", t: "Calidad", d: "Evaluación automática por software bajo los criterios señalados." },
              { n: "13", t: "Transmisión", d: "Plantilla biométrica o imagen comprimida bajo los formatos previstos por la disposición." },
            ].map((c) => (
              <div key={c.n} className="flex gap-3">
                <span className="shrink-0 font-black text-xs pt-0.5" style={{ color: "#1ECAD3" }}>{c.n}</span>
                <p><strong style={{ color: "rgba(255,255,255,0.85)" }}>{c.t}.</strong> {c.d}</p>
              </div>
            ))}
          </div>
        </DeepDive>

        <P>Esto demuestra que la regulación no trata &ldquo;reconocimiento facial&rdquo; como una sola funcionalidad. Hay al menos cuatro problemas distintos:</P>

        <FlowChain steps={["CAPTURAR CORRECTAMENTE", "DEMOSTRAR PRESENCIA", "EXTRAER / COTEJAR", "PROTEGER EL RESULTADO"]} />

        <Quote>Un algoritmo de reconocimiento facial puede ser preciso y aun así formar parte de un proceso de identidad deficiente.</Quote>

        <InlineCta
          heading="¿Su proceso de captura cumple con estos requerimientos técnicos?"
          cta="Ver guía de captura biométrica"
          href="/guia-captura-kyc"
        />

        {/* ── SECCIÓN 8 ─────────────────────────────────────── */}
        <H2 id="liveness">8. Detección facial, liveness y comparación: tres cosas distintas</H2>

        <CardGrid
          cols={3}
          items={[
            { title: "¿Hay un rostro?", body: "Detección facial: localizar un rostro dentro de la imagen o el video capturado." },
            { title: "¿Hay una persona real presente?", body: "Liveness / PAD / antispoofing: confirmar que lo capturado corresponde a una persona presente, no a una simulación." },
            { title: "¿Es la persona correcta?", body: "Comparación biométrica: cotejar la muestra contra un registro para determinar coincidencia." },
          ]}
        />

        <P>Confundir estas tres capas es un error frecuente al evaluar tecnología biométrica. La regulación exige que la información biométrica sea obtenida directamente de la persona y que las aplicaciones eviten registrar información proveniente de mecanismos que pretendan simular la biometría de otra persona. Esto aparece en los procedimientos vinculados con INE, pasaporte y matrícula consular.</P>

        <P>
          Entre los ataques de presentación conceptuales que este tipo de controles busca mitigar están la
          fotografía, la reproducción en pantalla y otros elementos físicos utilizados para simular biometría. Si
          se menciona la evolución del riesgo digital — como los deepfakes — conviene dejar claro que se trata de
          una evolución tecnológica del riesgo y no de un término que la resolución utilice de manera expresa.
        </P>

        {/* ── SECCIÓN 9 ─────────────────────────────────────── */}
        <H2 id="1-a-1-vs-1-a-n">9. 1:1 y 1:N no resuelven el mismo problema</H2>

        <CardGrid
          cols={2}
          items={[
            {
              title: "1:1 — Autenticación",
              accent: "rgba(30,202,211,0.3)",
              body: (
                <>
                  <span className="italic">&ldquo;¿Esta biometría corresponde con la identidad que estoy intentando autenticar?&rdquo;</span>
                  <br />
                  <br />
                  MUESTRA ACTUAL vs. REGISTRO DE UNA PERSONA. La definición de Autenticación Biométrica del Anexo 71
                  establece una búsqueda sobre los patrones almacenados de un solo individuo. Uso: autenticación
                  posterior de una persona ya enrolada.
                </>
              ),
            },
            {
              title: "1:N — Deduplicación",
              accent: "rgba(42,215,150,0.3)",
              body: (
                <>
                  <span className="italic">&ldquo;¿Esta biometría aparece dentro de mi galería asociada con otra identidad?&rdquo;</span>
                  <br />
                  <br />
                  MUESTRA vs. N REGISTROS. Uso regulatorio destacado: deduplicación en primera captura.
                </>
              ),
            },
          ]}
        />

        <P>
          Una comparación 1:1 puede ser positiva y aun así no responder si la misma persona se encuentra registrada
          bajo identidades diferentes.
        </P>

        <Quote>1:1 confirma una relación declarada. 1:N busca relaciones que quizá el usuario no declaró.</Quote>

        <Callout kind="nota" label="Precisión terminológica — no es una corrección a CNBV">
          El glosario del Anexo 71 incluye una definición de &ldquo;Deduplicación&rdquo; asociada a compresión de
          datos, mientras que las tablas técnicas de captura biométrica utilizan &ldquo;Deduplicación&rdquo; para
          validar que biométricos de clientes o empleados no estén registrados con los datos de otra persona. En
          este artículo utilizamos &ldquo;deduplicación biométrica&rdquo; en el sentido operativo de las tablas de
          captura del Anexo 71: detección de registros biométricos previamente asociados a otra identidad.
        </Callout>

        {/* ── SECCIÓN 10 ─────────────────────────────────────── */}
        <H2 id="90-por-ciento">10. El 90%: qué significa y qué no significa</H2>

        <P>
          Para credencial para votar, la disposición establece que la información biométrica obtenida debe coincidir
          al menos 90% con los registros del INE, bajo los requisitos técnicos definidos por el Instituto. Para
          pasaporte mexicano y matrícula consular aparecen comprobaciones equivalentes frente a SRE, bajo los
          requisitos técnicos correspondientes.
        </P>

        <P>
          Pero eso <strong>no</strong> significa que CNBV exija un threshold universal de 90% para cualquier
          comparación biométrica. El glosario del Anexo define &ldquo;Comparación&rdquo; como el proceso algorítmico
          en el que plantillas biométricas se evalúan mediante puntajes de coincidencia con base en umbrales
          previamente establecidos por la propia institución.
        </P>

        <DataTable
          head={["Contexto", "Umbral"]}
          rows={[
            ["Cotejo contra fuentes oficiales (INE / SRE) en los supuestos correspondientes", "≥ 90%, bajo los requisitos técnicos de cada autoridad"],
            ["Autenticación posterior contra base propia", "Definido por la propia institución"],
            ["Deduplicación 1:N", "Referencia NIST FRVT 1:N — el Anexo no fija ahí un umbral general de 90%"],
          ]}
        />

        <Quote>Un umbral regulatorio no es lo mismo que un umbral operacional.</Quote>

        {/* ── SECCIÓN 11 ─────────────────────────────────────── */}
        <H2 id="huella">11. La huella no desaparece: el modelo sigue siendo multibiométrico</H2>

        <P>
          La resolución no sustituye huella por rostro. El régimen transitorio permite actualmente conformar bases
          para huella dactilar y biometría facial, hasta que la Comisión establezca especificaciones para otros
          biométricos.
        </P>

        <DeepDive title="Technical deep dive: parámetros de captura de huella del Anexo 71">
          <div className="space-y-3">
            <p><strong style={{ color: "rgba(255,255,255,0.85)" }}>Primera captura:</strong> mínimo seis huellas para clientes; diez para empleados, directivos y funcionarios en el parámetro correspondiente; lectores de al menos dos dedos por lectura para primera captura.</p>
            <p><strong style={{ color: "rgba(255,255,255,0.85)" }}>Calidad de imagen:</strong> resolución de 500 ppi; profundidad de 8 bits; rango dinámico mínimo de 200 niveles de gris; toma plana en vivo.</p>
            <p><strong style={{ color: "rgba(255,255,255,0.85)" }}>Proceso:</strong> controles de posición y ángulo; secuencia que evite repetición del mismo dedo; deduplicación; captura asistida; registro biométrico del operador; análisis de calidad conforme a NFIQ; recaptura cuando no se cumple calidad; al menos tres intentos por huella en el supuesto especificado.</p>
            <p><strong style={{ color: "rgba(255,255,255,0.85)" }}>Transmisión:</strong> WSQ hasta 10:1 desde RAW para imágenes de 500 ppi.</p>
            <p><strong style={{ color: "rgba(255,255,255,0.85)" }}>Dispositivos:</strong> duales con referencia EFTS Anexo F / FAP 45; decadactilares con referencias FAP 50 o 60.</p>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "12px" }}>El Anexo diferencia los parámetros de primera captura de los parámetros para autenticación posterior 1:1 con huella.</p>
          </div>
        </DeepDive>

        <P>El nivel de especificidad demuestra que CNBV contempla la biometría como un sistema completo compuesto por sensor, captura, software, calidad, transmisión, seguridad y proceso — no únicamente algoritmo.</P>

        {/* ── SECCIÓN 12 ─────────────────────────────────────── */}
        <H2 id="excepciones">12. Excepciones: el proceso debe funcionar cuando el happy path no funciona</H2>

        <P>
          La resolución contempla personas que, por impedimentos físicos, no pueden proporcionar al menos uno de los
          biométricos requeridos. Esto debe tener procedimientos documentados y constar en el expediente. En
          huella, el Anexo menciona ejemplos como amputaciones, injertos, malformación, lesión permanente,
          prótesis, enfermedad u otras circunstancias. Debe capturarse el mayor número de huellas posible y
          documentar la excepción.
        </P>

        <Quote>Diseñar únicamente el happy path no es diseñar un proceso regulado.</Quote>

        <P>Relacionado con la experiencia del usuario, una buena arquitectura debe contemplar recapturas, baja calidad, excepciones, intervención humana, rutas alternativas, evidencia y revisión.</P>

        {/* ── SECCIÓN 13 ─────────────────────────────────────── */}
        <H2 id="seguridad">13. Seguridad: la regulación llega hasta la infraestructura</H2>

        <P>La disposición exige preservar integridad, conservación, disponibilidad e imposibilidad de manipulación. El Anexo 71 establece, al menos, los siguientes controles:</P>

        <DeepDive title="Technical deep dive: los 14 controles de infraestructura del Anexo 71">
          <ol className="list-decimal pl-5 space-y-2">
            <li><strong style={{ color: "rgba(255,255,255,0.85)" }}>Segregación lógica</strong> de las bases biométricas en la infraestructura.</li>
            <li><strong style={{ color: "rgba(255,255,255,0.85)" }}>Infraestructura dedicada</strong> para almacenar y procesar biométricos.</li>
            <li><strong style={{ color: "rgba(255,255,255,0.85)" }}>Segmentación de red</strong> en segmentos independientes que permitan únicamente tráfico autorizado.</li>
            <li><strong style={{ color: "rgba(255,255,255,0.85)" }}>Configuración segura</strong> de puertos, servicios, permisos, listas de acceso, actualizaciones y configuraciones.</li>
            <li><strong style={{ color: "rgba(255,255,255,0.85)" }}>Identidad de usuarios</strong>: cada usuario de infraestructura debe poder ser identificado inequívocamente.</li>
            <li><strong style={{ color: "rgba(255,255,255,0.85)" }}>Privilegios</strong>: controles específicos sobre administradores de bases, sistemas operativos y otros usuarios privilegiados.</li>
            <li><strong style={{ color: "rgba(255,255,255,0.85)" }}>Logs</strong> de auditoría sobre accesos.</li>
            <li><strong style={{ color: "rgba(255,255,255,0.85)" }}>Cifrado</strong> de la información durante transmisión y almacenamiento.</li>
            <li><strong style={{ color: "rgba(255,255,255,0.85)" }}>Vulnerabilidades</strong>: pruebas para detectar vulnerabilidades y amenazas.</li>
            <li><strong style={{ color: "rgba(255,255,255,0.85)" }}>Pentest</strong>: pruebas de penetración.</li>
            <li><strong style={{ color: "rgba(255,255,255,0.85)" }}>Integridad</strong>: controles que permitan identificar modificaciones de los datos originales.</li>
            <li><strong style={{ color: "rgba(255,255,255,0.85)" }}>Conservación</strong>: mecanismos de conservación de la información.</li>
            <li><strong style={{ color: "rgba(255,255,255,0.85)" }}>Borrado seguro</strong>: impedir que información eliminada sea conocida por terceros no autorizados.</li>
            <li><strong style={{ color: "rgba(255,255,255,0.85)" }}>Restricción de extracción</strong>: controles frente a consulta, extracción, copia o acceso no autorizado.</li>
          </ol>
        </DeepDive>

        <FlowChain steps={["CAPTURA", "TRANSMISIÓN", "PROCESAMIENTO", "BASE BIOMÉTRICA", "AUTENTICACIÓN", "CONSERVACIÓN", "SUPRESIÓN"]} />
        <TagRow tags={["CIFRADO", "ACCESO", "LOGS", "INTEGRIDAD", "SEGMENTACIÓN", "AUDITORÍA"]} />

        <Callout kind="jaak">La seguridad no empieza después del match. Acompaña al dato desde su captura hasta su eliminación.</Callout>
        <Callout kind="jaak">El resultado biométrico puede generarse en milisegundos. El gobierno de ese dato puede durar años.</Callout>

        {/* ── SECCIÓN 14 ─────────────────────────────────────── */}
        <H2 id="base-compartida">14. Base propia no significa base compartida</H2>

        <P>Esta sección es fundamental para la evaluación de proveedores. La regulación establece que la información contenida en bases biométricas de clientes no debe:</P>

        <ul className="list-disc pl-6 space-y-2 mb-6" style={{ color: "rgba(255,255,255,0.68)", fontFamily: FONT }}>
          <li>enajenarse, venderse ni transferirse;</li>
          <li>compartirse ni solicitarse bajo esquemas de intercambio;</li>
          <li>resguardarse para reutilización;</li>
          <li>utilizarse mediante interoperabilidad entre instituciones o terceros</li>
        </ul>
        <P>para realizar las verificaciones contempladas por esta sección. Las verificaciones deben realizarse contra la información contenida en la base conformada por cada institución.</P>

        <Callout kind="regulacion">
          Sin embargo, la regulación sí permite contratar terceros para servicios relacionados con la conformación de
          dichas bases, bajo los requisitos aplicables.
        </Callout>

        <div className="my-8 text-center">
          <p className="text-sm font-bold" style={{ color: "rgba(255,255,255,0.85)", fontFamily: FONT }}>
            PROVEEDOR TECNOLÓGICO <span style={{ color: "#1ECAD3" }}>≠</span> BASE BIOMÉTRICA MULTIINSTITUCIÓN
          </p>
        </div>

        <P>Esto abre preguntas arquitectónicas fundamentales para la debida diligencia tecnológica: tenant isolation, residencia, segregación, procesamiento, retención, ownership, permisos, terminación, eliminación y exportabilidad de evidencia. Estas son preguntas de due diligence tecnológica, no requisitos contractuales específicos que la norma establezca de forma expresa.</P>

        {/* ── SECCIÓN 15 ─────────────────────────────────────── */}
        <H2 id="fin-de-vida">15. ¿Qué ocurre cuando una base deja de utilizarse?</H2>

        <P>Cuando una institución decide dejar de utilizar la base, debe:</P>
        <ol className="list-decimal pl-6 space-y-2 mb-6" style={{ color: "rgba(255,255,255,0.68)", fontFamily: FONT }}>
          <li>realizar el aviso correspondiente a CNBV mediante el Anexo 75, dentro del supuesto y plazo aplicable;</li>
          <li>suprimir los datos biométricos;</li>
          <li>utilizar medidas administrativas, técnicas y físicas que impidan recuperación, acceso o tratamiento no autorizado;</li>
          <li>conservar evidencia documental del procedimiento.</li>
        </ol>

        <Quote>La capacidad de borrar correctamente puede ser tan importante como la capacidad de capturar correctamente.</Quote>

        <P>El offboarding también forma parte de la arquitectura. Una institución que sustituye componentes de su stack debería evaluar desde el inicio qué información reside con el proveedor, cuál reside en infraestructura propia, cómo se segrega, cómo se conserva evidencia, cómo se realiza la terminación, qué debe eliminarse y qué debe mantenerse por razones regulatorias u operativas. Esto no constituye asesoría jurídica sobre portabilidad de datos.</P>

        {/* ── SECCIÓN 16 ─────────────────────────────────────── */}
        <H2 id="validacion-anual">16. Cumplimiento continuo: implementar no es terminar</H2>

        <P>
          La institución que conforme una base debe realizar anualmente una validación respecto de los mecanismos de
          seguridad señalados en el Anexo 71. Después debe enviar a CNBV, dentro del periodo correspondiente, las
          acciones para atender las desviaciones identificadas. La Comisión puede solicitar información adicional.
          Ante incumplimientos técnicos, operativos o de seguridad graves o reiterados, puede — previo el
          procedimiento correspondiente — instruir la suspensión parcial o total, temporal o definitiva, del uso de
          la base.
        </P>

        <P>Además, el proceso de primera captura debe verificarse anualmente por Contraloría Interna — una revisión distinta de la validación de seguridad.</P>

        <ChipChain steps={["DISEÑAR", "IMPLEMENTAR", "OPERAR", "VALIDAR", "AUDITAR", "DETECTAR DESVIACIONES", "CORREGIR", "EVIDENCIAR", "VOLVER A VALIDAR"]} />

        <Quote>El cumplimiento biométrico es un sistema operativo continuo, no un proyecto de implementación.</Quote>

        {/* ── SECCIÓN 17 ─────────────────────────────────────── */}
        <H2 id="evidencia">17. Evidencia: un &ldquo;match&rdquo; no es suficiente</H2>

        <P>La resolución exige evidencia documental en diferentes momentos: cotejo contra autoridades, procesos de conformación, mecanismos alternativos, excepciones, eliminación de datos y acciones correctivas.</P>

        <P>Una arquitectura enterprise debería poder contestar:</P>

        <CardGrid
          cols={3}
          items={[
            { title: "¿QUIÉN?", body: "¿Quién participó en el proceso?" },
            { title: "¿QUÉ?", body: "¿Qué documento y biometría se utilizaron?" },
            { title: "¿CUÁNDO?", body: "¿Cuándo ocurrió cada evento?" },
            { title: "¿DÓNDE?", body: "¿Desde qué canal o proceso?" },
            { title: "¿CÓMO?", body: "¿Qué mecanismos participaron?" },
            { title: "¿CONTRA QUÉ?", body: "¿Qué registro o fuente se utilizó?" },
            { title: "¿CON QUÉ PARÁMETROS?", body: "¿Qué proceso o threshold correspondía?" },
            { title: "¿QUÉ OCURRIÓ?", body: "¿Cuál fue el resultado?" },
            { title: "¿QUÉ EVIDENCIA QUEDÓ?", body: "¿Puede reconstruirse la operación completa?" },
          ]}
        />

        <Callout kind="jaak">El output de una plataforma de identidad no debería reducirse a &ldquo;approved&rdquo; o &ldquo;rejected&rdquo;. Una arquitectura empresarial necesita suficiente contexto para explicar por qué ocurrió el resultado.</Callout>

        {/* ── SECCIÓN 18 ─────────────────────────────────────── */}
        <H2 id="anexo-75">18. El Anexo 75 conecta tecnología con gobierno regulatorio</H2>

        <P>
          Diferentes acciones requieren avisos o solicitudes mediante formatos del Anexo 75. Entre ellos aparecen
          supuestos relacionados con el inicio del uso de una base, bases existentes al entrar en vigor la
          resolución, mecanismos alternativos, documentos y verificaciones alternativas, y el cese del uso de
          determinados mecanismos o bases.
        </P>

        <Quote>La arquitectura técnica y el expediente regulatorio no deberían construirse por separado.</Quote>

        {/* ── SECCIÓN 19 ─────────────────────────────────────── */}
        <H2 id="innovacion">19. La regulación no cierra la puerta a la innovación</H2>

        <P>El artículo 51 Bis 3 permite que CNBV autorice procesos distintos de los contemplados para la conformación de la base. La institución debe presentar, entre otros:</P>
        <ul className="list-disc pl-6 space-y-2 mb-6" style={{ color: "rgba(255,255,255,0.68)", fontFamily: FONT }}>
          <li>descripción detallada del mecanismo;</li>
          <li>aprobación por Consejo;</li>
          <li>infraestructura tecnológica en cada parte del proceso;</li>
          <li>medios de transmisión y de resguardo;</li>
          <li>controles de integridad, correcta lectura e imposibilidad de manipulación;</li>
          <li>conservación y disponibilidad.</li>
        </ul>
        <P>La institución debe conservar evidencia del resultado del cotejo con autoridades.</P>

        <div
          className="my-8 rounded-xl p-6 text-center text-sm font-bold"
          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.85)", fontFamily: FONT }}
        >
          INNOVACIÓN + GOBIERNO + EVIDENCIA + SEGURIDAD + <span style={{ color: "#1ECAD3" }}>AUTORIZACIÓN</span>
        </div>

        <Callout kind="jaak">La norma no prescribe necesariamente una arquitectura inmutable, pero permite innovación exigiendo gobierno, evidencia, seguridad y autorización.</Callout>

        {/* ── SECCIÓN 20 ─────────────────────────────────────── */}
        <H2 id="documentos-alternativos">20. También pueden plantearse documentos y acciones de verificación diferentes</H2>

        <P>
          El artículo 51 Bis 5 permite que CNBV autorice documentos de identificación distintos y acciones de
          verificación distintas. Debe acreditarse que el resultado es fiable para identificar a la persona, y que
          existe algún elemento de identificación validado frente a una autoridad fiscal mexicana o dependencia
          federal que proporcione verificación biométrica.
        </P>

        <P>La solicitud debe incluir, entre otros: descripción detallada; aprobación por Consejo; infraestructura tecnológica; método de validación documental; procedimiento para comprobar que el documento corresponde al portador; y evidencia de efectividad aprobada por el Comité de Riesgos. Cambios posteriores sobre el procedimiento pueden requerir nueva autorización.</P>

        <Quote>Para una institución, innovación tecnológica también significa ser capaz de explicar y demostrar el diseño.</Quote>

        <Callout kind="regulacion">
          Aquí existe una oportunidad para proveedores capaces no únicamente de ofrecer módulos estándar, sino de
          configurar, integrar, diseñar, desarrollar, documentar técnicamente y evolucionar soluciones. Esto no
          significa que JAAK obtenga autorizaciones en nombre de sus clientes, ni que una solución personalizada
          construida sobre JAAK vaya a ser autorizada por CNBV: la autorización siempre corresponde a la institución
          regulada.
        </Callout>

        {/* ── SECCIÓN 21 ─────────────────────────────────────── */}
        <H2 id="conversacion-institucional">21. Una conversación que involucra a toda la institución</H2>

        <DataTable
          head={["Área", "Responsabilidades típicas"]}
          rows={[
            ["Cumplimiento / Regulatorio", "Definir alcance, interpretar supuestos, gestionar avisos y autorizaciones, asegurar evidencia."],
            ["Riesgos", "Evaluar efectividad, definir tolerancias y criterios, participar en mecanismos alternativos."],
            ["Fraude", "Ataques de presentación, suplantación, identidades duplicadas, abuso de enrolamiento."],
            ["Tecnología", "APIs, SDK, bases, integración, performance, disponibilidad."],
            ["Arquitectura", "Componentes, dependencia, despliegue, coexistencia, evolución."],
            ["Seguridad", "Cifrado, acceso, segmentación, pentesting, logs, privilegios."],
            ["Operaciones", "Captura, operador, recaptura, excepciones."],
            ["Contraloría", "Revisión anual del proceso de primera captura."],
            ["Auditoría", "Reconstrucción de eventos, evidencia."],
            ["Consejo", "Aprobación de mecanismos cuando corresponda."],
            ["Comité de Riesgos", "Evaluación de efectividad cuando corresponda."],
            ["Jurídico / Privacidad", "Tratamiento de datos, relación con proveedores, ciclo de vida."],
          ]}
        />

        <Quote>Cuando la identidad se convierte en infraestructura, deja de pertenecer a una sola área.</Quote>

        {/* ── SECCIÓN 22 ─────────────────────────────────────── */}
        <H2 id="evaluar-proveedor">22. 13 preguntas para evaluar —o sustituir— a un proveedor biométrico</H2>

        <NumberedQuestions
          items={[
            "¿La arquitectura permite que nuestra información biométrica permanezca correctamente aislada?",
            "¿Dónde se procesa y dónde se almacena?",
            "¿Qué mecanismos de liveness/PAD utiliza y qué evidencia independiente existe sobre ellos?",
            "¿Soporta los requerimientos de captura que nuestro proceso necesita?",
            "¿Permite autenticación biométrica 1:1?",
            "¿Tiene capacidad real para deduplicación 1:N cuando resulta necesaria?",
            "¿Cómo se integra con INE, RENAPO u otras fuentes que nuestro proceso requiera?",
            "¿Qué evidencia genera por cada operación?",
            "¿Cómo protege la información en tránsito y almacenamiento?",
            "¿Qué controles existen sobre usuarios privilegiados, logs y auditoría?",
            "¿Puede incorporarse a nuestra infraestructura sin reconstruir el flujo completo?",
            "¿Puede coexistir temporalmente con componentes o proveedores existentes durante una transición?",
            "¿Cómo se gestiona el ciclo de vida del dato cuando cambia la arquitectura o termina la relación?",
          ]}
        />

        <InlineCta
          heading="¿Estás revisando tu arquitectura actual de identidad?"
          cta="Conversa con un especialista de JAAK"
          href="/contacto"
        />
        <P>Podemos analizar qué capacidades ya tiene su institución, cuáles necesita complementar y qué componentes tendría sentido evolucionar.</P>

        {/* ── SECCIÓN 23 ─────────────────────────────────────── */}
        <H2 id="matriz-capacidades">23. Del cumplimiento a la arquitectura tecnológica</H2>

        <P>Cómo un requerimiento regulatorio puede traducirse a capacidades tecnológicas — no es una lista de lo que CNBV exige de JAAK.</P>

        <DataTable
          head={["Requerimiento", "Capacidad tecnológica"]}
          rows={[
            ["Identificación", "KYC"],
            ["Captura documental", "OCR / procesamiento documental"],
            ["Presencia", "Liveness / PAD"],
            ["Comparación", "Biometría 1:1"],
            ["Deduplicación", "Reconocimiento 1:N"],
            ["Fuente oficial", "Integraciones"],
            ["CURP / datos", "RENAPO"],
            ["Evidencia", "Trazabilidad / expediente"],
            ["Seguridad", "Cifrado / controles / logs / infraestructura"],
            ["Excepciones", "Workflows configurables"],
            ["Mecanismos alternativos", "Arquitectura adaptable / desarrollo específico"],
          ]}
        />

        {/* ── SECCIÓN 24 ─────────────────────────────────────── */}
        <H2 id="jaak">24. ¿Dónde entra JAAK?</H2>

        <P>
          En JAAK desarrollamos infraestructura de identidad digital. Nuestro enfoque no parte de asumir que todas
          las instituciones necesitan exactamente el mismo flujo, sino de combinar capacidades de identidad,
          biometría, fuentes, riesgo y evidencia de acuerdo con la arquitectura y el proceso que se necesita
          resolver.
        </P>

        <CardGrid
          cols={3}
          items={[
            { title: "Identidad", body: "KYC, OCR, procesamiento documental." },
            { title: "Biometría", body: "Prueba de vida, comparación facial 1:1, reconocimiento 1:N." },
            { title: "Fuentes", body: "INE, RENAPO/CURP e integraciones disponibles y aplicables." },
            { title: "Evidencia", body: "Expediente, trazabilidad, registros del proceso." },
            { title: "Integración", body: "API, SDK, SaaS cuando aplique, integración con infraestructura existente." },
            { title: "Desarrollo", body: "Componentes, flujos, reglas, integraciones particulares, requerimientos específicos." },
          ]}
        />

        <P>Una institución puede necesitar una arquitectura completa o únicamente sustituir o complementar un componente determinado. La modularidad permite pensar la identidad como infraestructura, no como un flujo cerrado.</P>

        <Callout kind="nota" label="Límites de este apartado">
          JAAK no cumple por sí sola toda la resolución: el cumplimiento corresponde a la institución regulada.
          Utilizar JAAK no implica cumplimiento automático, y JAAK no cuenta con una autorización de CNBV específica
          para esta resolución salvo evidencia documental explícita que así lo indique.
        </Callout>

        {/* ── SECCIÓN 25 ─────────────────────────────────────── */}
        <H2 id="capacidades-complementarias">25. Capacidades complementarias: más allá de esta resolución</H2>

        <P>JAAK también dispone de capacidades como listas AML/riesgo, firma digital, evidencia certificada, NOM-151 y otras capas del journey de confianza.</P>

        <Callout kind="nota">Estas capacidades no son obligaciones introducidas por la resolución biométrica analizada en este artículo.</Callout>

        <P>Pueden ser complementarias porque, en la práctica, una institución puede verificar identidad biométrica y posteriormente evaluar señales de riesgo, firmar y conservar evidencia:</P>

        <ChipChain steps={["KYC", "RIESGO", "DECISIÓN", "CONTRATACIÓN", "EVIDENCIA"]} />

        <P>
          Eso construye un journey más amplio, pero no debe mezclarse con la obligación biométrica concreta que
          analiza este artículo. Quien quiera profundizar en firma digital con validez NOM-151 puede revisar{" "}
          <Link href="/blog/que-es-nom-151-contratos-digitales" className="underline" style={{ color: "#1ECAD3" }}>
            qué es la NOM-151 y por qué importa en contratos digitales
          </Link>
          , y en listas de riesgo AML/PLD, la página de{" "}
          <Link href="/listas-de-riesgo-pld-aml" className="underline" style={{ color: "#1ECAD3" }}>
            listas de riesgo PLD/AML
          </Link>
          .
        </P>

        {/* ── SECCIÓN 26 ─────────────────────────────────────── */}
        <H2 id="tecnologia-adaptable">26. Tecnología adaptable: sustituir un componente no debería exigir reconstruir todo</H2>

        <P>
          Las instituciones rara vez parten de una hoja en blanco. Existen canales en producción, core systems,
          aplicaciones móviles, portales, motores antifraude, repositorios, reglas y proveedores que ya forman parte
          de la operación.
        </P>

        <P>Por eso una tecnología enterprise debe considerar integración gradual, coexistencia, modularidad, desacoplamiento, APIs, SDKs, despliegue, migración, observabilidad, continuidad y evolución.</P>

        <Callout kind="capacidad">
          JAAK puede integrarse a capacidades existentes, complementar capas concretas o desarrollar componentes y
          flujos particulares cuando el proceso lo requiera.
        </Callout>

        <P small>La viabilidad técnica, el modelo de transición y las obligaciones regulatorias deben evaluarse para cada arquitectura.</P>

        {/* ── SECCIÓN 27 ─────────────────────────────────────── */}
        <H2 id="tecnologia-con-evidencia">27. Tecnología con evidencia</H2>

        <div
          className="my-8 grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {[
            { name: "ISO/IEC 27001:2022", desc: "Sistema de gestión de seguridad de la información de JAAK." },
            { name: "ISO 9001:2015", desc: "Sistema de gestión de calidad de JAAK." },
            { name: "iBeta Level 1", desc: "Evaluación del motor de prueba de vida de JAAK, según documentación corporativa disponible, alineada a ISO/IEC 30107-3." },
          ].map((c) => (
            <div
              key={c.name}
              className="col-span-2 sm:col-span-1 rounded-xl p-5 text-center"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <p className="text-sm font-black mb-2" style={{ color: "#2AD796", fontFamily: FONT }}>{c.name}</p>
              <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.6)", fontFamily: FONT }}>{c.desc}</p>
            </div>
          ))}
        </div>

        <Callout kind="nota" label="Alcance de estas certificaciones">
          Estas certificaciones no significan &ldquo;JAAK está certificado por CNBV&rdquo; ni que JAAK cumpla el
          Anexo 71 en su totalidad, y no se atribuye una certificación NIST al motor de reconocimiento 1:N sin
          evidencia documental específica que la respalde. Las certificaciones son una pieza de la evaluación
          tecnológica, no un sustituto de la evaluación regulatoria, arquitectónica y operativa que corresponde a
          cada institución.
        </Callout>

        <P>
          Puede revisar el detalle de estas certificaciones y otros controles de seguridad en{" "}
          <Link href="/seguridad" className="underline" style={{ color: "#1ECAD3" }}>
            la página de seguridad de JAAK
          </Link>
          .
        </P>

        {/* ── SECCIÓN 28 ─────────────────────────────────────── */}
        <H2 id="arquitectura-confianza">28. Una arquitectura de confianza no termina en KYC</H2>

        <FlowChain
          steps={[
            "IDENTIDAD — KYC · OCR · biometría · liveness",
            "VALIDACIÓN — INE · RENAPO · fuentes",
            "RIESGO — señales / listas cuando corresponda",
            "DECISIÓN — reglas / operación",
            "CONTRATACIÓN — firma cuando aplique",
            "EVIDENCIA — trazabilidad · expediente · integridad",
          ]}
        />
        <TagRow tags={["TECNOLOGÍA ADAPTABLE — API · SDK · INTEGRACIONES · DESARROLLOS ESPECÍFICOS"]} />

        <P>Cada capa puede operar dentro de una arquitectura integral o incorporarse únicamente donde la institución necesite complementar, sustituir o desarrollar una capacidad.</P>

        <InlineCta
          heading="¿Quiere revisar cómo encaja la verificación de identidad en su arquitectura?"
          cta="Explora las capacidades de KYC de JAAK"
          href="/plataforma/verificacion-identidad"
        />

        {/* ── CIERRE ─────────────────────────────────────── */}
        <H2 id="conclusiones">El reto ya no es reconocer un rostro</H2>

        <P>
          La actualización de CNBV deja una idea especialmente relevante para cualquier institución que esté
          revisando su infraestructura de identidad: una biometría confiable depende de mucho más que un algoritmo
          de comparación.
        </P>

        <P>Requiere enrolamiento, presencia, calidad, fuente oficial, autenticación, deduplicación, infraestructura, seguridad, gobierno, evidencia, revisión y capacidad de evolución.</P>

        <Quote>El reto ya no es reconocer un rostro. Es construir la arquitectura que permite confiar en él y demostrar por qué.</Quote>

        <div className="rounded-2xl p-8 my-12" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
          <h3 className="text-xl font-bold mb-3" style={{ color: "rgba(255,255,255,0.95)", fontFamily: FONT }}>
            Conversemos sobre tu arquitectura de identidad
          </h3>
          <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.65)", fontFamily: FONT }}>
            Si estás evaluando nuevas capacidades, revisando tu proveedor actual o diseñando un proceso diferente,
            podemos analizar contigo la arquitectura tecnológica necesaria.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contacto"
              className="px-6 py-3 rounded-xl font-black text-sm transition-all hover:-translate-y-0.5"
              style={{ background: "#1ECAD3", color: "#202945", fontFamily: FONT }}
            >
              Conversemos sobre tu arquitectura de identidad
            </Link>
            <Link
              href="/plataforma/verificacion-identidad"
              className="px-6 py-3 rounded-xl font-black text-sm transition-all hover:-translate-y-0.5 border"
              style={{ borderColor: "rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.85)", fontFamily: FONT }}
            >
              Conoce las soluciones de identidad de JAAK
            </Link>
          </div>
        </div>

        {/* ── FUENTES ─────────────────────────────────────── */}
        <H2 id="fuentes">Fuentes y referencias</H2>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-sm" style={{ color: "rgba(255,255,255,0.58)", fontFamily: FONT }}>
          <li>
            Resolución que modifica las Disposiciones de carácter general aplicables a las instituciones de crédito
            (biométricos), Diario Oficial de la Federación, 1 de julio de 2026.
          </li>
          <li>Artículo 51 Bis de las Disposiciones de carácter general aplicables a las instituciones de crédito.</li>
          <li>Artículo 51 Bis 2 — conformación de base biométrica propia.</li>
          <li>Artículo 51 Bis 3 — autorización de procesos distintos.</li>
          <li>Artículo 51 Bis 4.</li>
          <li>Artículo 51 Bis 5 — documentos y acciones de verificación alternativas.</li>
          <li>Anexo 71 — requerimientos técnicos de captura, calidad, infraestructura y seguridad biométrica.</li>
          <li>Anexo 75 — formatos de aviso y solicitud ante CNBV.</li>
          <li>Artículos transitorios de la resolución modificatoria.</li>
        </ul>
        <p className="text-xs italic" style={{ color: "rgba(255,255,255,0.4)", fontFamily: FONT }}>
          No se incluye un hipervínculo a la publicación oficial del DOF por no contar con acceso verificado a la
          URL exacta al momento de la publicación de este artículo. Se recomienda consultar el texto oficial
          directamente en dof.gob.mx.
        </p>
      </ArticleLayout>
    </>
  );
}
