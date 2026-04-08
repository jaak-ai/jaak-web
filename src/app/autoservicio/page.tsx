import Link from "next/link";
import AutoservicioPricingGrid from "@/components/AutoservicioPricingGrid";
import AutoservicioFlujoTabs from "@/components/AutoservicioFlujoTabs";

// ─── Section 1: Hero ─────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section
      className="relative overflow-hidden pt-32 pb-24 min-h-screen flex items-center"
      style={{ background: "linear-gradient(135deg, #0D1833 0%, #12183F 50%, #0E1133 100%)" }}
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Animated orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="orb-drift-1 absolute rounded-full opacity-20"
          style={{
            width: 520,
            height: 520,
            top: "-12%",
            right: "-8%",
            background: "radial-gradient(circle, #1ecad3 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="orb-drift-2 absolute rounded-full opacity-15"
          style={{
            width: 480,
            height: 480,
            bottom: "-15%",
            left: "-10%",
            background: "radial-gradient(circle, #655dc6 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="orb-drift-3 absolute rounded-full opacity-10"
          style={{
            width: 360,
            height: 360,
            top: "35%",
            left: "40%",
            background: "radial-gradient(circle, #2a60d4 0%, transparent 70%)",
            filter: "blur(50px)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium"
            style={{
              background: "rgba(30,202,211,0.1)",
              border: "1px solid rgba(30,202,211,0.3)",
              color: "#1ecad3",
            }}
          >
            <span
              className="inline-block w-2 h-2 rounded-full animate-pulse"
              style={{ background: "#1ecad3" }}
            />
            Sin equipo de ventas · Sin esperar demos
          </span>
        </div>

        {/* Headline */}
        <h1
          className="text-center font-extrabold leading-[1.1] mb-6"
          style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", color: "#fff" }}
        >
          Firma y verifica identidades{" "}
          <span
            style={{
              backgroundImage: "linear-gradient(90deg, #1ecad3, #655dc6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            desde hoy
          </span>
        </h1>

        <p
          className="text-center max-w-2xl mx-auto mb-10 text-lg leading-relaxed"
          style={{ color: "rgba(255,255,255,0.55)" }}
        >
          Compra en línea, activa al instante y empieza a operar sin integración de API.
          Pago único, sin contratos ni suscripciones. Escala cuando quieras.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link
            href="https://autoservicio.jaak.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white transition-all duration-200 hover:scale-105 hover:shadow-2xl"
            style={{
              background: "linear-gradient(135deg, #1ecad3, #655dc6)",
              boxShadow: "0 8px 32px rgba(30,202,211,0.3)",
            }}
          >
            Compra ahora →
          </Link>
          <a
            href="#como-funciona"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all duration-200 hover:bg-white/10"
            style={{
              border: "1.5px solid rgba(255,255,255,0.2)",
              color: "rgba(255,255,255,0.8)",
            }}
          >
            Cómo funciona
          </a>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-6">
          {[
            { icon: "⚡", text: "Activación en minutos" },
            { icon: "🔒", text: "Cumplimiento NOM-151 · LFEA" },
            { icon: "💳", text: "Pago único sin contratos" },
            { icon: "🏢", text: "Plataforma No-code" },
          ].map((b, i) => (
            <div
              key={i}
              className="flex items-center gap-2 text-sm"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              <span>{b.icon}</span>
              <span>{b.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Section 2: How it Works (light) ─────────────────────────────────────────
function ComoFuncionaSection() {
  return (
    <section
      id="como-funciona"
      className="py-20 scroll-mt-24"
      style={{ background: "#f8fafc" }}
    >
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-14">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest mb-4 px-3 py-1 rounded-full"
            style={{ background: "#f0fffe", color: "#0e7490", border: "1px solid #a7f3f0" }}
          >
            ¿Cómo funciona?
          </span>
          <h2
            className="text-4xl md:text-5xl font-extrabold mb-4"
            style={{ color: "#111827" }}
          >
            Del pago al primer uso{" "}
            <span
              style={{
                backgroundImage: "linear-gradient(90deg, #1ecad3, #655dc6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              en minutos
            </span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            Sin reuniones de ventas, sin demos. Sigue el flujo paso a paso y empieza a operar hoy mismo.
          </p>
        </div>

        <AutoservicioFlujoTabs />
      </div>
    </section>
  );
}

// ─── Section 3: Pricing (dark) ───────────────────────────────────────────────
function PricingSection() {
  return (
    <section
      className="py-20"
      style={{
        background: "linear-gradient(135deg, #212A45 0%, #0E1133 50%, #212A45 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest mb-4 px-3 py-1 rounded-full"
            style={{ background: "rgba(30,202,211,0.1)", color: "#1ecad3", border: "1px solid rgba(30,202,211,0.25)" }}
          >
            Precios
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Pago único, sin contratos
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-lg">
            Elige el volumen que necesitas. Activa al instante y escala cuando quieras.
          </p>
        </div>

        <AutoservicioPricingGrid />

        {/* Condiciones */}
        <div
          className="mt-10 rounded-2xl p-6 md:p-8 text-center"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <p className="text-white/60 text-sm">
            * Los precios no incluyen IVA. Los volúmenes adquiridos tienen vigencia de 12 meses desde la activación.
            Disponible para personas morales con domicilio fiscal en México.{" "}
            <Link
              href="/precios#autoservicio"
              className="underline text-white/40 hover:text-white/70 transition-colors"
            >
              Ver todos los precios y condiciones
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Section 4: Sin fricción (light) ─────────────────────────────────────────
function SinFriccionSection() {
  const features = [
    {
      icon: "⚡",
      title: "Sin integración de API",
      desc: "Configura todo desde la plataforma web. Empieza a operar sin escribir una línea de código.",
      color: "#1ecad3",
    },
    {
      icon: "🏢",
      title: "Tu marca, no la nuestra",
      desc: "Tu logo aparece en documentos y notificaciones. Tus clientes solo ven tu empresa.",
      color: "#655dc6",
    },
    {
      icon: "📋",
      title: "Plantillas reutilizables",
      desc: "Crea plantillas de documentos frecuentes y reutiliza flujos de firma con un clic.",
      color: "#1ecad3",
    },
    {
      icon: "📊",
      title: "Dashboard centralizado",
      desc: "Gestiona expedientes, evidencias y estatus en tiempo real desde un solo lugar.",
      color: "#655dc6",
    },
    {
      icon: "🔒",
      title: "Cumplimiento incluido",
      desc: "NOM-151, LFEA y evidencias digitales incluidas en todos los planes. Sin costo adicional.",
      color: "#1ecad3",
    },
    {
      icon: "📈",
      title: "Escala cuando quieras",
      desc: "Empieza con el volumen que necesitas hoy. Compra más cuando lo necesites, sin contratos.",
      color: "#655dc6",
    },
  ];

  return (
    <section className="py-20" style={{ background: "#fff" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest mb-4 px-3 py-1 rounded-full"
            style={{ background: "#f0fffe", color: "#0e7490", border: "1px solid #a7f3f0" }}
          >
            Sin fricción
          </span>
          <h2
            className="text-4xl md:text-5xl font-extrabold mb-4"
            style={{ color: "#111827" }}
          >
            Diseñado para que{" "}
            <span
              style={{
                backgroundImage: "linear-gradient(90deg, #1ecad3, #655dc6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              arranques solo
            </span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            Sin demos, sin sales engineers, sin esperas. Todo lo que necesitas está en la plataforma.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 transition-all duration-200 hover:-translate-y-1"
              style={{
                background: "#fff",
                border: "1.5px solid #f3f4f6",
                boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                style={{ background: `${f.color}14` }}
              >
                {f.icon}
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Section 5: Final CTA (dark) ─────────────────────────────────────────────
function FinalCTASection() {
  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0D1833 0%, #12183F 60%, #1a1150 100%)" }}
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Orb */}
      <div
        className="absolute inset-0 pointer-events-none flex items-center justify-center"
      >
        <div
          style={{
            width: 600,
            height: 600,
            background: "radial-gradient(circle, rgba(101,93,198,0.18) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <h2
          className="font-extrabold mb-6 leading-[1.1]"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#fff" }}
        >
          Empieza hoy mismo.{" "}
          <span
            style={{
              backgroundImage: "linear-gradient(90deg, #1ecad3, #655dc6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Sin esperar.
          </span>
        </h2>
        <p
          className="text-lg mb-10 max-w-xl mx-auto leading-relaxed"
          style={{ color: "rgba(255,255,255,0.5)" }}
        >
          Compra en línea, activa al instante. Sin contratos, sin demos, sin equipo de ventas.
          Tu primer flujo activo en menos de 30 minutos.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="https://autoservicio.jaak.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white transition-all duration-200 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #1ecad3, #655dc6)",
              boxShadow: "0 8px 32px rgba(30,202,211,0.25)",
            }}
          >
            Ir a autoservicio.jaak.ai →
          </Link>
          <Link
            href="/precios"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all duration-200 hover:bg-white/10"
            style={{
              border: "1.5px solid rgba(255,255,255,0.2)",
              color: "rgba(255,255,255,0.75)",
            }}
          >
            Ver todos los precios
          </Link>
        </div>

        <div
          className="flex flex-wrap justify-center gap-6 text-sm"
          style={{ color: "rgba(255,255,255,0.35)" }}
        >
          {["⚡ Activación en minutos", "🔒 NOM-151 incluido", "💳 Sin suscripciones", "🏢 Plataforma No-code"].map((t, i) => (
            <span key={i}>{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function AutoservicioPage() {
  return (
    <main>
      <HeroSection />
      <ComoFuncionaSection />
      <PricingSection />
      <SinFriccionSection />
      <FinalCTASection />
    </main>
  );
}
