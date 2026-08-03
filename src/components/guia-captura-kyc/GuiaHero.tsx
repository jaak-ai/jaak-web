import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function GuiaHero() {
  return (
    <section className="gradient-bg py-24 md:py-28" aria-labelledby="guia-hero-h1">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
        <div>
          <div className="mb-6" style={{ color: "var(--hp-text-hi)" }}>
            <Breadcrumbs
              items={[
                { name: "Inicio", href: "/" },
                { name: "Verificación de identidad (KYC)", href: "/docs/verificar-identidad" },
                { name: "Guía de captura" },
              ]}
            />
          </div>
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6"
            style={{ background: "rgba(45,182,193,0.12)", border: "1px solid rgba(45,182,193,0.32)", color: "#7fe3ea" }}
          >
            📐 Basada en principios de estándares internacionales — ISO/IEC, NIST, ICAO
          </span>
          <h1 id="guia-hero-h1" className="text-4xl sm:text-5xl font-black text-white leading-tight text-balance">
            Cómo realizar una verificación KYC correctamente
          </h1>
          <p className="text-lg leading-relaxed max-w-xl mt-5" style={{ color: "var(--hp-text-md)" }}>
            Una guía visual y gratuita para completar su verificación de identidad a la primera. Aprenda a capturar su
            documento y su rostro, y a superar la prueba de vida, evitando los errores más comunes de iluminación,
            encuadre y reflejos.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <a
              href="#checklist"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white transition-all hover:opacity-90"
              style={{ background: "var(--accent)", boxShadow: "0 0 25px rgba(45,182,193,0.3)" }}
            >
              Comenzar la guía →
            </a>
            <Link
              href="/kyc-demo-autoservicio"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl font-semibold transition-all"
              style={{ background: "var(--hp-ghost-btn-bg)", border: "1px solid var(--hp-ghost-btn-border)", color: "var(--hp-ghost-btn-color)" }}
            >
              Ver demo de KYC
            </Link>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden border" style={{ borderColor: "var(--hp-card-border)", boxShadow: "0 20px 50px -12px rgba(0,0,0,.45)" }}>
          <Image
            src="/images/guia-captura-kyc/hero-guia-captura-kyc.jpg"
            alt="Persona capturando su identificación oficial con la cámara de su celular"
            width={1200}
            height={675}
            priority
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
