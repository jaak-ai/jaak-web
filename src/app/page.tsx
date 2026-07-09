import Header from "@/components/Header";
import HomepageThemeShell from "@/components/HomepageThemeShell";
import HomepageHero from "@/components/HomepageHero";
import ClientLogos from "@/components/ClientLogos";
import HomepageProblem from "@/components/HomepageProblem";
import HomepageProductFlow from "@/components/HomepageProductFlow";
import HomepageKYCComponents from "@/components/HomepageKYCComponents";
import HomepageDifferentiator from "@/components/HomepageDifferentiator";
import HomepageIndustries from "@/components/HomepageIndustries";
import HomepageProducts from "@/components/HomepageProducts";
import HomepageAutoservicioCTA from "@/components/HomepageAutoservicioCTA";
import HomepageTrust from "@/components/HomepageTrust";
import HomepageFinalCTA from "@/components/HomepageFinalCTA";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import VerificationFlowAnimation from "@/components/VerificationFlowAnimation";

export default function Home() {
  return (
    <>
      <Header />
      <HomepageThemeShell>
        <ScrollReveal />
        <main>
          {/* S1 — Hero */}
          <HomepageHero />
          {/* Prueba social */}
          <ClientLogos />
          {/* S2 — Problema */}
          <HomepageProblem />
          {/* S3 — Flujo de producto */}
          <HomepageProductFlow />
          {/* S3.5 — Animación de verificación 0-30s */}
          <section className="section-padding">
            <VerificationFlowAnimation />
          </section>
          {/* S4 — Componentes KYC */}
          <HomepageKYCComponents />
          {/* S5 — Diferenciador */}
          <HomepageDifferentiator />
          {/* S6 — Industrias */}
          <HomepageIndustries />
          {/* S7 — Productos */}
          <HomepageProducts />
          {/* S7.5 — CTA Autoservicio (descubribilidad en contenido) */}
          <HomepageAutoservicioCTA />
          {/* S8 — Prueba / confianza */}
          <HomepageTrust />
          {/* S9 — CTA final */}
          <HomepageFinalCTA />
          <ContactForm />
        </main>
        <Footer />
      </HomepageThemeShell>
    </>
  );
}
