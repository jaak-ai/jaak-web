import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import VideoDemo from "./VideoDemo";
import BrandingPreview from "./BrandingPreview";
import SectorSelector from "./SectorSelector";

export const metadata: Metadata = {
  title: "Firma Digital Marca Blanca y Personalizada | JAAK",
  description:
    "Personaliza tu firma digital con los colores, logotipo y mensajes de tu empresa. Configura correos y portal de firma con tecnología JAAK.",
  keywords:
    "firma digital marca blanca, firma electrónica marca blanca, firma digital personalizada, firma electrónica con logo, personalizar portal de firma, branding para firma digital, correos de firma personalizados, plataforma de firma personalizable, firma digital con identidad de marca",
  openGraph: {
    title: "Firma Digital Marca Blanca y Personalizada | JAAK",
    description:
      "Personaliza los correos, el portal de firma y los mensajes que reciben tus clientes con la identidad de tu empresa, sin importar el tipo de firma que utilices.",
    url: "https://jaak.ai/firma-digital-marca-blanca",
    type: "website",
    locale: "es_MX",
  },
  alternates: {
    canonical: "https://jaak.ai/firma-digital-marca-blanca",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://jaak.ai" },
    { "@type": "ListItem", position: 2, name: "Firma Electrónica", item: "https://jaak.ai/firma-electronica" },
    { "@type": "ListItem", position: 3, name: "Firma Digital Marca Blanca", item: "https://jaak.ai/firma-digital-marca-blanca" },
  ],
};

const faqItems = [
  {
    question: "¿Qué puedo personalizar?",
    answer:
      "Desde la sección Branding puedes personalizar los colores del portal de firma y del botón de acción, el logotipo, el nombre comercial, el correo de soporte, el asunto de los correos, el título y subtítulo del encabezado, el saludo, el mensaje principal, el texto del botón, los mensajes de seguridad y ayuda, la fecha límite y el pie del correo.",
  },
  {
    question: "¿Puedo usar mi propio logotipo?",
    answer:
      "Sí. Puedes subir el logotipo de tu empresa para que aparezca en los correos y en el portal de firma que ve el firmante.",
  },
  {
    question: "¿Puedo cambiar los colores del portal?",
    answer:
      "Sí. Puedes definir el color de fondo del portal de firma y el color del botón principal de acción, de forma independiente uno del otro.",
  },
  {
    question: "¿Puedo personalizar los correos?",
    answer:
      "Sí. Puedes personalizar el asunto, el título, el saludo, el mensaje principal, el texto del botón y el pie de cada correo que reciben tus firmantes.",
  },
  {
    question: "¿La personalización funciona con todos los tipos de firma?",
    answer:
      "Sí. La personalización se aplica a la experiencia del firmante y puede usarse con cualquiera de los tipos de firma disponibles en JAAK: firma simple, NOM-151, biométrica o con KYC.",
  },
  {
    question: "¿Puedo utilizar variables dinámicas?",
    answer:
      "Sí. Puedes insertar datos como el nombre del firmante, el tipo de documento o la fecha límite, para que cada envío se personalice automáticamente sin editar cada correo de forma manual.",
  },
  {
    question: "¿Puedo configurar un correo de soporte?",
    answer:
      "Sí. Puedes definir la dirección de correo que verá el firmante si tiene dudas sobre el documento o el proceso de firma.",
  },
  {
    question: "¿Puedo adaptar los mensajes por sector?",
    answer:
      "Sí. Los textos de la sección Branding son tuyos: puedes redactarlos según tu sector, el tipo de documento o el tono que usas habitualmente con tus clientes.",
  },
  {
    question: "¿La configuración requiere desarrollo?",
    answer:
      "No. La personalización se realiza directamente desde la sección Branding de la plataforma, sin necesidad de código ni de configurar cada correo de forma manual.",
  },
  {
    question: "¿Puedo utilizar la firma digital como marca blanca?",
    answer:
      "Sí. Empresas, partners, marketplaces y equipos que integran firma dentro de su propio producto pueden ofrecer la experiencia de firma con su propia identidad.",
  },
  {
    question: "¿Los cambios se reflejan en nuevas solicitudes?",
    answer:
      "Sí. La configuración que guardas en Branding se aplica a las nuevas solicitudes de firma que envíes a partir de ese momento.",
  },
  {
    question: "¿Puedo ver una vista previa antes de guardar?",
    answer:
      "Sí. Puedes revisar cómo se verá el correo y el portal de firma con tu configuración aplicada antes de guardar los cambios.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function FirmaDigitalMarcaBlancaPage() {
  return (
    <>
      <ScrollReveal />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main>
        {/* ── HERO ──────────────────────────────────────────────── */}
        <section
          id="hero"
          className="pt-32 pb-20 relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #071020 0%, #071A28 100%)" }}
          aria-labelledby="hero-heading"
        >
          <div
            className="absolute -top-24 -right-24 w-[28rem] h-[28rem] rounded-full opacity-20 blur-3xl pointer-events-none"
            aria-hidden="true"
            style={{ background: "linear-gradient(135deg, #1ECAD3, #2AD796)" }}
          />
          <div
            className="absolute bottom-0 -left-32 w-80 h-80 rounded-full opacity-10 blur-3xl pointer-events-none"
            aria-hidden="true"
            style={{ background: "#8B5CF6" }}
          />
          <div data-sr className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-xs text-gray-600 mb-8" aria-label="Navegación">
              <Link href="/firma-electronica" className="hover:text-[#1ECAD3] transition-colors">
                Firma Electrónica
              </Link>
              <span aria-hidden="true">›</span>
              <span className="text-gray-400">Marca Blanca</span>
            </nav>

            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6"
              style={{ background: "rgba(30,202,211,0.1)", border: "1px solid rgba(30,202,211,0.25)", color: "#1ECAD3" }}
            >
              Personalización · Marca blanca
            </div>

            <h1 id="hero-heading" className="text-4xl sm:text-5xl font-black text-white leading-tight mb-6">
              Firma digital con{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #1ECAD3, #2AD796)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                la identidad de tu marca
              </span>
            </h1>

            <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mb-8">
              Personaliza los correos, el portal de firma, los colores y los mensajes que reciben tus clientes, sin
              importar el tipo de firma que utilices.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <Link
                href="#video"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white transition-all hover:opacity-90"
                style={{ background: "#1ECAD3", boxShadow: "0 0 25px rgba(30,202,211,0.3)" }}
              >
                Ver cómo funciona
              </Link>
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl font-semibold text-gray-400 transition-all hover:text-white"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                Solicitar una demo
              </Link>
            </div>

            <div data-sr-grid className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: "🎨", text: "Colores y logotipo en cada correo" },
                { icon: "🖥", text: "Portal de firma con tu identidad" },
                { icon: "✍️", text: "Mensajes que tú controlas" },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-3 p-4 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(30,202,211,0.35)]"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <span className="text-xl flex-shrink-0" aria-hidden="true">{item.icon}</span>
                  <span className="text-sm text-gray-300 font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROBLEMA ──────────────────────────────────────────── */}
        <section id="problema" className="py-20" style={{ background: "#070E1A" }} aria-labelledby="problema-heading">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div data-sr className="text-center mb-12 max-w-2xl mx-auto">
              <h2 id="problema-heading" className="text-2xl sm:text-3xl font-black text-white mb-4">
                Muchos contratos importantes se envían desde una plataforma que no se ve como tu empresa
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                Cuando la experiencia de firma no refleja tu marca, el firmante recibe menos señales de que el
                documento realmente viene de ti.
              </p>
            </div>
            <div data-sr-grid className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: "✉️", title: "Correos genéricos", desc: "El firmante recibe un correo que no se parece a los que normalmente le envía tu empresa." },
                { icon: "🏷️", title: "Logos que no corresponden", desc: "El logotipo que ve el firmante es el de la plataforma de firma, no el de tu negocio." },
                { icon: "💬", title: "Mensajes desconectados del proceso", desc: "El texto del correo o del portal no explica con claridad por qué llegó ese documento." },
                { icon: "🤔", title: "Dudas sobre quién envía el documento", desc: "El firmante no siempre identifica de inmediato con quién está tratando." },
                { icon: "🔀", title: "Experiencias distintas entre canales", desc: "El correo, el portal y el documento pueden sentirse como pasos de empresas distintas." },
                { icon: "🚩", title: "Menor confianza en el proceso", desc: "Cuando algo se ve genérico, es más fácil que el firmante dude antes de continuar." },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 p-5 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(255,255,255,0.16)]"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <span className="text-xl flex-shrink-0" aria-hidden="true">{item.icon}</span>
                  <div>
                    <div className="text-sm font-bold text-white mb-1">{item.title}</div>
                    <div className="text-xs text-gray-500 leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROPUESTA DE VALOR ────────────────────────────────── */}
        <section
          id="propuesta-valor"
          className="py-20 relative overflow-hidden"
          style={{ background: "#0A1628" }}
          aria-labelledby="propuesta-heading"
        >
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[36rem] h-[36rem] rounded-full opacity-[0.07] blur-3xl pointer-events-none"
            aria-hidden="true"
            style={{ background: "linear-gradient(135deg, #1ECAD3, #2AD796)" }}
          />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div data-sr>
              <h2 id="propuesta-heading" className="text-2xl sm:text-3xl font-black text-white mb-6">
                La experiencia de firma también{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #1ECAD3, #2AD796)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  comunica quién eres
                </span>
              </h2>
              <p className="text-gray-400 text-base leading-relaxed max-w-2xl mx-auto mb-4">
                Cada documento que tu organización envía a firma es también un punto de contacto con tu marca. Con
                JAAK, esa experiencia no se limita al envío de un documento: se convierte en una extensión de tu
                identidad, tu comunicación y tus procesos.
              </p>
              <p className="text-gray-400 text-base leading-relaxed max-w-2xl mx-auto">
                El firmante reconoce quién le envía el documento, entiende por qué lo recibe y sabe con claridad qué
                debe hacer para continuar. Sin importar si el proceso empieza en el correo, sigue en el portal o
                termina en el documento firmado.
              </p>
            </div>
          </div>
        </section>

        {/* ── FUNCIONALIDADES ───────────────────────────────────── */}
        <section id="funcionalidades" className="py-20" style={{ background: "#070E1A" }} aria-labelledby="funcionalidades-heading">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div data-sr className="text-center mb-12 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-5" style={{ background: "rgba(30,202,211,0.08)", border: "1px solid rgba(30,202,211,0.2)", color: "#1ECAD3" }}>
                Sección Branding
              </div>
              <h2 id="funcionalidades-heading" className="text-2xl sm:text-3xl font-black text-white mb-4">
                Todo lo que puedes{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #1ECAD3, #2AD796)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  personalizar
                </span>
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                Desde un solo lugar, configuras la identidad visual y el tono de comunicación de toda la experiencia
                de firma.
              </p>
            </div>
            <div data-sr-grid className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                {
                  icon: "🎨",
                  title: "Colores",
                  desc: "Define el color del portal de firma y el color del botón de acción.",
                  benefit: "El firmante reconoce visualmente tu marca desde el primer momento.",
                  example: "Botón de firma en el color corporativo de tu empresa, no en el color por defecto de JAAK.",
                },
                {
                  icon: "🏷️",
                  title: "Marca",
                  desc: "Sube tu logotipo y define el nombre comercial que verá el firmante.",
                  benefit: "El destinatario identifica de inmediato quién le envía el documento.",
                  example: "El correo llega firmado como tu empresa, no como JAAK.",
                },
                {
                  icon: "📝",
                  title: "Textos",
                  desc: "Personaliza el título, el subtítulo, el saludo, el mensaje principal y el texto del botón.",
                  benefit: "La comunicación suena a tu empresa, con el tono que usas con tus clientes.",
                  example: "“Hola Ana, tu contrato está listo para firma” en lugar de un mensaje genérico.",
                },
                {
                  icon: "📧",
                  title: "Correo de soporte",
                  desc: "Define la dirección de correo donde el firmante puede resolver dudas sobre el documento.",
                  benefit: "El firmante contacta directamente a tu equipo, no a un canal externo.",
                  example: "soporte@tuempresa.com en lugar de una dirección genérica.",
                },
                {
                  icon: "🖥",
                  title: "Portal de firma",
                  desc: "El espacio donde el firmante revisa y firma el documento adopta tus colores, tu logotipo y tus mensajes.",
                  benefit: "La experiencia se mantiene consistente del correo al documento firmado.",
                  example: "El portal conserva la misma identidad que el correo que lo invitó a firmar.",
                },
                {
                  icon: "👁",
                  title: "Vista previa",
                  desc: "Revisa cómo se verá el correo y el portal antes de guardar los cambios.",
                  benefit: "Confirmas el resultado antes de que tus firmantes lo reciban.",
                  example: "Revisa el correo completo con tu configuración antes de activarlo.",
                },
                {
                  icon: "🔤",
                  title: "Variables dinámicas",
                  desc: "Inserta datos que cambian según el firmante o el documento, como nombre o fecha límite.",
                  benefit: "Un mensaje personalizado sirve para todos los envíos, sin editar cada correo a mano.",
                  example: "“Hola {{nombre}}, tu documento vence el {{fecha_limite}}.”",
                },
                {
                  icon: "🛡️",
                  title: "Mensajes de seguridad y ayuda",
                  desc: "Define los textos que explican al firmante cómo verificar el documento y dónde pedir ayuda.",
                  benefit: "Reduce la desconfianza y las dudas durante el proceso de firma.",
                  example: "Un aviso breve que indica qué hacer si el firmante tiene dudas sobre el documento.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(30,202,211,0.35)]"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <span className="text-2xl mb-3 block" aria-hidden="true">{item.icon}</span>
                  <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-3">{item.desc}</p>
                  <p className="text-xs font-semibold mb-3" style={{ color: "#1ECAD3" }}>{item.benefit}</p>
                  <p className="text-xs text-gray-500 leading-relaxed italic">{item.example}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRUÉBALO TÚ MISMO ─────────────────────────────────── */}
        <section
          id="pruebalo"
          className="py-20 relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #0A1628 0%, #0E1F35 100%)" }}
          aria-labelledby="pruebalo-heading"
        >
          <div
            className="absolute -top-20 left-1/2 -translate-x-1/2 w-[40rem] h-72 rounded-full opacity-[0.08] blur-3xl pointer-events-none"
            aria-hidden="true"
            style={{ background: "linear-gradient(90deg, #1ECAD3, #2AD796, #8B5CF6)" }}
          />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div data-sr className="text-center mb-12 max-w-2xl mx-auto">
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-5"
                style={{ background: "rgba(139,92,246,0.1)", border: "1px solid rgba(139,92,246,0.25)", color: "#A78BFA" }}
              >
                Interactivo
              </div>
              <h2 id="pruebalo-heading" className="text-2xl sm:text-3xl font-black text-white mb-4">
                Pruébalo tú mismo
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                Elige un color y escribe el nombre de tu empresa. Así de rápido cambia la experiencia que ve tu
                firmante.
              </p>
            </div>
            <div data-sr>
              <BrandingPreview />
            </div>
          </div>
        </section>

        {/* ── CÓMO FUNCIONA ─────────────────────────────────────── */}
        <section id="como-funciona" className="py-20" style={{ background: "#0A1628" }} aria-labelledby="flujo-heading">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div data-sr className="text-center mb-12">
              <h2 id="flujo-heading" className="text-2xl sm:text-3xl font-black text-white mb-4">
                Cómo funciona
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xl mx-auto">
                Configuras tu marca una sola vez. No necesitas personalizar manualmente cada correo que envías.
              </p>
            </div>
            <div data-sr-grid className="space-y-4">
              {[
                { step: "1", title: "Ingresa a Branding", desc: "Accede a la sección Branding dentro de la plataforma JAAK." },
                { step: "2", title: "Configura los colores", desc: "Define el color del portal de firma y el color del botón de acción." },
                { step: "3", title: "Agrega tu marca", desc: "Sube tu logotipo y define el nombre comercial que verá el firmante." },
                { step: "4", title: "Personaliza los textos", desc: "Ajusta el asunto, el encabezado, el saludo, el mensaje principal y los mensajes de seguridad y ayuda." },
                { step: "5", title: "Revisa y guarda", desc: "Verifica la vista previa y guarda. La configuración se aplica a tus nuevas solicitudes de firma." },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex items-start gap-5 p-5 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(30,202,211,0.35)]"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <span
                    className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-sm font-black"
                    style={{ background: "rgba(30,202,211,0.12)", color: "#1ECAD3", border: "1px solid rgba(30,202,211,0.3)" }}
                    aria-hidden="true"
                  >
                    {item.step}
                  </span>
                  <div>
                    <div className="text-sm font-bold text-white mb-1">{item.title}</div>
                    <div className="text-xs text-gray-500 leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── EJEMPLO REALISTA ──────────────────────────────────── */}
        <section id="ejemplo" className="py-20" style={{ background: "#070E1A" }} aria-labelledby="ejemplo-heading">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div data-sr className="text-center mb-10 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-5" style={{ background: "rgba(42,215,150,0.08)", border: "1px solid rgba(42,215,150,0.2)", color: "#2AD796" }}>
                Ejemplo ilustrativo
              </div>
              <h2 id="ejemplo-heading" className="text-2xl sm:text-3xl font-black text-white mb-4">
                Así se vería para una inmobiliaria
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                <strong className="text-gray-300">JAAK Inmobiliaria</strong> envía un{" "}
                <strong className="text-gray-300">Contrato de Compraventa</strong> a un cliente. Este es un caso
                ficticio, solo para mostrar cómo se adapta la solución.
              </p>
            </div>
            <div
              data-sr
              className="max-w-xl mx-auto rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(42,215,150,0.2)", boxShadow: "0 0 40px rgba(42,215,150,0.05)" }}
            >
              <div className="px-6 py-4" style={{ background: "rgba(42,215,150,0.08)", borderBottom: "1px solid rgba(42,215,150,0.15)" }}>
                <div className="text-[11px] uppercase tracking-wider text-gray-500 mb-1">Asunto</div>
                <div className="text-sm font-semibold text-white">
                  JAAK Inmobiliaria: tu Contrato de Compraventa está listo para firma
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-gray-500 mb-1">Título</div>
                  <div className="text-sm text-gray-200 font-semibold">Firma tu Contrato de Compraventa</div>
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-gray-500 mb-1">Saludo</div>
                  <div className="text-sm text-gray-400">Hola Ana,</div>
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-gray-500 mb-1">Mensaje principal</div>
                  <div className="text-sm text-gray-400 leading-relaxed">
                    JAAK Inmobiliaria te envía el Contrato de Compraventa de tu propiedad para firma. Revisa el
                    documento y confirma tu firma antes de la fecha límite.
                  </div>
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-gray-500 mb-1">Botón</div>
                  <div
                    className="inline-flex items-center px-5 py-2.5 rounded-lg text-sm font-bold text-white"
                    style={{ background: "#2AD796" }}
                  >
                    Firmar Contrato de Compraventa
                  </div>
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-gray-500 mb-1">Seguridad</div>
                  <div className="text-xs text-gray-500 leading-relaxed">
                    Este documento fue enviado por JAAK Inmobiliaria. Verifica que el remitente coincida con tu
                    asesor antes de firmar.
                  </div>
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-gray-500 mb-1">Ayuda</div>
                  <div className="text-xs text-gray-500 leading-relaxed">
                    ¿Tienes dudas sobre tu contrato? Escríbenos a soporte@jaakinmobiliaria.mx
                  </div>
                </div>
                <div className="pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
                  <div className="text-[11px] uppercase tracking-wider text-gray-500 mb-1">Pie del correo</div>
                  <div className="text-xs text-gray-600">JAAK Inmobiliaria · Este correo fue generado para tu proceso de compraventa.</div>
                </div>
              </div>
            </div>
            <p className="text-center text-xs text-gray-600 mt-6 max-w-lg mx-auto">
              El ejemplo es ilustrativo. Cada empresa define sus propios textos, colores y logotipo desde Branding.
            </p>
          </div>
        </section>

        {/* ── POR SECTOR ────────────────────────────────────────── */}
        <section id="sectores" className="py-20" style={{ background: "#0A1628" }} aria-labelledby="sectores-heading">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div data-sr className="text-center mb-12 max-w-2xl mx-auto">
              <h2 id="sectores-heading" className="text-2xl sm:text-3xl font-black text-white mb-4">
                Se adapta al contexto de cada operación
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                La personalización es la misma capacidad para todos, pero cada sector la usa a su manera.
              </p>
            </div>
            <div data-sr>
              <SectorSelector />
            </div>
          </div>
        </section>

        {/* ── TIPOS DE FIRMA ────────────────────────────────────── */}
        <section id="tipos-firma" className="py-20" style={{ background: "#070E1A" }} aria-labelledby="tipos-heading">
          <div data-sr className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 id="tipos-heading" className="text-2xl sm:text-3xl font-black text-white mb-4">
              Funciona con cualquier tipo de firma
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              La personalización de marca es independiente del nivel de evidencia que necesites. Puedes usarla junto
              con firma simple, NOM-151, biométrica o con verificación KYC, según lo que tu operación requiera.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { href: "/firma-electronica", label: "Firma Electrónica" },
                { href: "/firma-electronica-simple", label: "Firma Simple" },
                { href: "/firma-electronica-nom-151", label: "Firma NOM-151" },
                { href: "/firma-electronica-biometrica", label: "Firma Biométrica" },
                { href: "/firma-electronica-kyc", label: "Firma con KYC" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold px-4 py-2.5 rounded-xl transition-all hover:bg-white/10 hover:-translate-y-0.5"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#1ECAD3" }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── MARCA BLANCA ──────────────────────────────────────── */}
        <section
          id="marca-blanca"
          className="py-20 relative overflow-hidden"
          style={{ background: "#0A1628" }}
          aria-labelledby="whitelabel-heading"
        >
          <div
            className="absolute top-10 right-0 w-96 h-96 rounded-full opacity-[0.08] blur-3xl pointer-events-none"
            aria-hidden="true"
            style={{ background: "linear-gradient(135deg, #1ECAD3, #2AD796)" }}
          />
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div data-sr className="text-center mb-12 max-w-2xl mx-auto">
              <h2 id="whitelabel-heading" className="text-2xl sm:text-3xl font-black text-white mb-4">
                ¿Para quién es útil una experiencia marca blanca?
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                Cualquier organización que envía documentos a firma en nombre propio o de sus clientes puede
                beneficiarse de una experiencia con su propia identidad.
              </p>
            </div>
            <div data-sr-grid className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-14">
              {[
                { icon: "🏢", label: "Empresas" },
                { icon: "🧩", label: "Plataformas" },
                { icon: "🤝", label: "Partners" },
                { icon: "🛒", label: "Marketplaces" },
                { icon: "⚙️", label: "Proveedores tecnológicos" },
                { icon: "🔗", label: "Equipos que integran firma en su producto" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center text-center gap-2 p-5 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(30,202,211,0.35)]"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <span className="text-xl" aria-hidden="true">{item.icon}</span>
                  <span className="text-xs font-semibold text-gray-300">{item.label}</span>
                </div>
              ))}
            </div>

            <div data-sr className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div
                className="rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
                style={{ background: "rgba(30,202,211,0.06)", border: "1px solid rgba(30,202,211,0.2)" }}
              >
                <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#1ECAD3" }}>
                  Personalización desde plataforma
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Configuras colores, logotipo, textos y mensajes directamente desde la sección Branding de JAAK, sin
                  necesidad de desarrollo. Ideal para empezar a personalizar tu experiencia de firma de inmediato.
                </p>
              </div>
              <div
                className="rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)" }}
              >
                <div className="text-xs font-bold uppercase tracking-widest mb-2 text-gray-400">
                  Experiencia integrada / enterprise
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Para equipos de producto y tecnología que integran la firma dentro de su propio producto o
                  plataforma, manteniendo su identidad de marca a lo largo del flujo. Habla con nuestro equipo para
                  conocer las opciones de integración disponibles.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── VIDEO DEMO ────────────────────────────────────────── */}
        <section
          id="video"
          className="py-20 relative overflow-hidden"
          style={{ background: "#070E1A" }}
          aria-labelledby="video-heading"
        >
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[32rem] h-56 rounded-full opacity-[0.08] blur-3xl pointer-events-none"
            aria-hidden="true"
            style={{ background: "linear-gradient(90deg, #1ECAD3, #2AD796)" }}
          />
          <div data-sr className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 id="video-heading" className="text-2xl sm:text-3xl font-black text-white mb-4">
              Mira cómo personalizar tu experiencia de firma
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              Configura colores, logotipo, mensajes y portal de firma desde una sola sección.
            </p>
            <VideoDemo />
            <div className="mt-8">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white transition-all hover:opacity-90"
                style={{ background: "#1ECAD3", boxShadow: "0 0 25px rgba(30,202,211,0.3)" }}
              >
                Solicitar una demo
              </Link>
            </div>
          </div>
        </section>

        {/* ── BENEFICIOS ────────────────────────────────────────── */}
        <section id="beneficios" className="py-20" style={{ background: "#0A1628" }} aria-labelledby="beneficios-heading">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 data-sr id="beneficios-heading" className="text-2xl sm:text-3xl font-black text-white mb-10 text-center">
              Beneficios de{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #1ECAD3, #2AD796)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                personalizar tu firma digital
              </span>
            </h2>
            <div data-sr-grid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { icon: "🏷️", title: "Reconocimiento de marca", desc: "Tu logotipo y colores acompañan todo el proceso de firma." },
                { icon: "🔍", title: "Mayor claridad para el firmante", desc: "El destinatario entiende con facilidad quién le escribe y por qué." },
                { icon: "🔗", title: "Comunicación coherente", desc: "El mismo tono y la misma identidad del correo al portal." },
                { icon: "⚡", title: "Menor fricción", desc: "Una experiencia reconocible reduce las dudas antes de firmar." },
                { icon: "💼", title: "Experiencia profesional", desc: "El proceso se siente parte de tu operación, no de un tercero." },
                { icon: "📞", title: "Soporte visible", desc: "El firmante sabe a quién contactar si tiene dudas sobre el documento." },
                { icon: "🧭", title: "Adaptación al contexto", desc: "Ajusta los mensajes a cada tipo de operación o sector." },
                { icon: "✅", title: "Consistencia total", desc: "Correo, portal y documento comparten la misma identidad visual." },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(30,202,211,0.35)]"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <span className="text-xl mb-3 block" aria-hidden="true">{item.icon}</span>
                  <h3 className="text-sm font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────────── */}
        <section id="faq" className="py-20" style={{ background: "#070E1A" }} aria-labelledby="faq-heading">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div data-sr className="text-center mb-10">
              <h2 id="faq-heading" className="text-2xl sm:text-3xl font-black text-white mb-4">
                Preguntas frecuentes
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                Resuelve tus dudas sobre la personalización y la marca blanca en JAAK.
              </p>
            </div>
            <div data-sr className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
              {faqItems.map((item, index) => (
                <details
                  key={item.question}
                  className="group"
                  style={{
                    borderBottom: index === faqItems.length - 1 ? "none" : "1px solid rgba(255,255,255,0.07)",
                    background: "rgba(255,255,255,0.02)",
                  }}
                >
                  <summary className="cursor-pointer list-none px-6 py-5 flex items-start justify-between gap-4 text-sm font-semibold text-gray-200 hover:text-white transition-colors">
                    {item.question}
                    <span className="flex-shrink-0 text-lg text-gray-500 group-open:rotate-45 transition-transform" aria-hidden="true">
                      +
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-sm text-gray-400 leading-relaxed">{item.answer}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA FINAL ─────────────────────────────────────────── */}
        <section id="contacto" className="py-20" style={{ background: "#0A1628" }} aria-labelledby="cta-heading">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              data-sr
              className="rounded-3xl p-8 md:p-12 overflow-hidden relative text-center"
              style={{ background: "linear-gradient(135deg, #202945, #071426)", border: "1px solid rgba(30,202,211,0.15)", boxShadow: "0 0 80px rgba(30,202,211,0.07)" }}
            >
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 blur-3xl pointer-events-none" aria-hidden="true" style={{ background: "#1ECAD3" }} />
              <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full opacity-10 blur-3xl pointer-events-none" aria-hidden="true" style={{ background: "#8B5CF6" }} />

              <h2 id="cta-heading" className="text-3xl sm:text-4xl font-black text-white mb-4">
                Haz que cada firma también{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #1ECAD3, #2AD796)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  represente a tu empresa
                </span>
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto mb-10">
                Configura colores, logotipo, mensajes y portal de firma desde la sección Branding de JAAK.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-base transition-all hover:opacity-90"
                  style={{ background: "#1ECAD3", boxShadow: "0 0 30px rgba(30,202,211,0.3)" }}
                >
                  Solicitar una demo
                </Link>
                <Link
                  href="/autoservicio"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-base transition-all hover:bg-white/10"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.15)", color: "#E2E8F0" }}
                >
                  Probar la plataforma
                </Link>
              </div>
              <p className="text-xs text-gray-500">Sin contrato ni permanencia para empezar a personalizar tu firma.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
