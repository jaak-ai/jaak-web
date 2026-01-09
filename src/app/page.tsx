import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SubHero from "@/components/SubHero";
import Services from "@/components/Services";
import Differentiator from "@/components/Differentiator";
import TargetAudience from "@/components/TargetAudience";
import Integration from "@/components/Integration";
import Trust from "@/components/Trust";
import FinalCTA from "@/components/FinalCTA";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SubHero />
        <Services />
        <Differentiator />
        <TargetAudience />
        <Integration />
        <Trust />
        <FinalCTA />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
