import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "JAAK Guardian Protocol | Robot de Vigilancia Autónomo con IA",
  description:
    "El primer robot de vigilancia autónomo con inteligencia de identidad. Conectividad 5G nativa, visión por computadora y verificación biométrica en tiempo real.",
  openGraph: {
    title: "JAAK Guardian Protocol | Robot de Vigilancia Autónomo con IA",
    description:
      "El primer robot de vigilancia autónomo con inteligencia de identidad. Conectividad 5G nativa, visión por computadora y verificación biométrica en tiempo real.",
    type: "website",
  },
};

function SignalIcon() {
  return (
    <svg
      className="w-8 h-8"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.348 14.652a3.75 3.75 0 010-5.304m5.304 0a3.75 3.75 0 010 5.304m-7.425 2.121a6.75 6.75 0 010-9.546m9.546 0a6.75 6.75 0 010 9.546M5.106 18.894c-3.808-3.807-3.808-9.98 0-13.788m13.788 0c3.808 3.807 3.808 9.98 0 13.788M12 12h.008v.008H12V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
      />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg
      className="w-8 h-8"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.64 0 8.577 3.01 9.964 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.64 0-8.577-3.01-9.964-7.178z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );
}

function FingerprintIcon() {
  return (
    <svg
      className="w-8 h-8"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33"
      />
    </svg>
  );
}

function ShieldExclamationIcon() {
  return (
    <svg
      className="w-6 h-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z"
      />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      className="w-6 h-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

function ExclamationTriangleIcon() {
  return (
    <svg
      className="w-6 h-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
      />
    </svg>
  );
}

export default function GuardianPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-24 overflow-hidden">
        {/* Glow effect */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] opacity-30 blur-[120px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, #0066ff 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          {/* Tag */}
          <span className="inline-block px-4 py-1.5 mb-8 text-sm font-medium tracking-wide text-white/80 border border-white/20 rounded-lg">
            Nuevo · Serie A 2025
          </span>

          {/* H1 con glow */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
            <span className="relative">
              JAAK{" "}
              <span
                className="text-[#0066ff]"
                style={{
                  textShadow: "0 0 60px rgba(0, 102, 255, 0.5)",
                }}
              >
                Guardian
              </span>{" "}
              Protocol
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-xl sm:text-2xl md:text-3xl font-medium text-white/90 mb-4 tracking-tight">
            El primer robot de vigilancia autónomo con inteligencia de identidad
          </p>

          {/* Subtítulo */}
          <p className="text-lg sm:text-xl text-white/60 mb-12 max-w-3xl mx-auto">
            Conectividad 5G nativa, visión por computadora y verificación
            biométrica en tiempo real
          </p>

          {/* Stat chips */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <span className="px-5 py-2.5 text-sm font-medium text-white/90 bg-white/5 border border-white/10 rounded-lg">
              &lt;8ms latencia 5G
            </span>
            <span className="px-5 py-2.5 text-sm font-medium text-white/90 bg-white/5 border border-white/10 rounded-lg">
              99.4% precisión IA
            </span>
            <span className="px-5 py-2.5 text-sm font-medium text-white/90 bg-white/5 border border-white/10 rounded-lg">
              24/7 operación
            </span>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contacto"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-[#0066ff] hover:bg-[#0052cc] transition-colors rounded-lg"
            >
              Solicitar reunión
            </a>
            <a
              href="/nosotros"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white/90 border border-white/20 hover:border-white/40 hover:bg-white/5 transition-colors rounded-lg"
            >
              Ver el mercado
            </a>
          </div>
        </div>
      </section>

      {/* El problema */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-center mb-20">
            Vigilancia sin identidad
            <br />
            <span className="text-white/60">es vigilancia ciega</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 mb-6 text-white/80 border border-white/20 rounded-lg">
                <ShieldExclamationIcon />
              </div>
              <h3 className="text-xl font-semibold mb-3">Sin verificación</h3>
              <p className="text-white/60">
                Las cámaras tradicionales graban rostros sin saber quién es
                quién. Reactivas, no preventivas.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 mb-6 text-white/80 border border-white/20 rounded-lg">
                <ClockIcon />
              </div>
              <h3 className="text-xl font-semibold mb-3">Respuesta tardía</h3>
              <p className="text-white/60">
                Minutos críticos perdidos entre detección e identificación.
                Cuando actúas, ya es tarde.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 mb-6 text-white/80 border border-white/20 rounded-lg">
                <ExclamationTriangleIcon />
              </div>
              <h3 className="text-xl font-semibold mb-3">Falsos positivos</h3>
              <p className="text-white/60">
                Sistemas genéricos que alertan todo y nada. Tu equipo ignora las
                alertas porque ya no confía.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats impact */}
      <section className="py-32 px-6 border-t border-b border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            <div className="px-6 py-8 text-center">
              <div className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#0066ff] mb-2">
                &lt;8ms
              </div>
              <div className="text-sm sm:text-base text-white/60 uppercase tracking-wide">
                Latencia 5G
              </div>
            </div>
            <div className="px-6 py-8 text-center">
              <div className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-2">
                99.4%
              </div>
              <div className="text-sm sm:text-base text-white/60 uppercase tracking-wide">
                Precisión IA
              </div>
            </div>
            <div className="px-6 py-8 text-center">
              <div className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-2">
                24/7
              </div>
              <div className="text-sm sm:text-base text-white/60 uppercase tracking-wide">
                Operación
              </div>
            </div>
            <div className="px-6 py-8 text-center">
              <div className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#0066ff] mb-2">
                $4.2B
              </div>
              <div className="text-sm sm:text-base text-white/60 uppercase tracking-wide">
                TAM LATAM 2028
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tecnología */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-center mb-6">
            Tres capas de inteligencia
          </h2>
          <p className="text-xl text-white/60 text-center mb-20 max-w-2xl mx-auto">
            Cada componente diseñado para trabajar en perfecta sincronía
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border border-white/10 rounded-lg bg-white/[0.02]">
              <div className="mb-6 text-[#0066ff]">
                <SignalIcon />
              </div>
              <h3 className="text-2xl font-semibold mb-3">5G Nativo</h3>
              <p className="text-white/60 leading-relaxed">
                Conectividad de ultra baja latencia que permite decisiones en
                tiempo real sin depender de infraestructura local.
              </p>
            </div>

            <div className="p-8 border border-white/10 rounded-lg bg-white/[0.02]">
              <div className="mb-6 text-[#0066ff]">
                <EyeIcon />
              </div>
              <h3 className="text-2xl font-semibold mb-3">
                Visión por Computadora
              </h3>
              <p className="text-white/60 leading-relaxed">
                Detección de comportamientos anómalos, tracking multi-objeto y
                análisis contextual del entorno.
              </p>
            </div>

            <div className="p-8 border border-white/10 rounded-lg bg-white/[0.02]">
              <div className="mb-6 text-[#0066ff]">
                <FingerprintIcon />
              </div>
              <h3 className="text-2xl font-semibold mb-3">
                Biometría en Tiempo Real
              </h3>
              <p className="text-white/60 leading-relaxed">
                Verificación facial instantánea contra bases de datos
                autorizadas. Identidad confirmada, no asumida.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mercado */}
      <section className="py-32 px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight mb-4">
            <span className="text-[#0066ff]">$4.2B</span> TAM
          </div>
          <p className="text-2xl sm:text-3xl text-white/90 mb-4">LATAM 2028</p>
          <div className="inline-block px-6 py-3 mb-12 text-lg font-semibold text-[#0066ff] border border-[#0066ff]/30 rounded-lg">
            0 competidores locales
          </div>
          <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
            El mercado de seguridad inteligente en Latinoamérica está dominado
            por soluciones importadas sin adaptación local. Guardian Protocol es
            el primer sistema diseñado desde cero para la región.
          </p>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-8">
            ¿Listo para redefinir
            <br />
            <span className="text-[#0066ff]">la seguridad</span>?
          </h2>
          <a
            href="/contacto"
            className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold text-white bg-[#0066ff] hover:bg-[#0052cc] transition-colors rounded-lg"
          >
            Solicitar reunión
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
