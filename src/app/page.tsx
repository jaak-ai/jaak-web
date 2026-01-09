import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Clients from "@/components/Clients";
import Certifications from "@/components/Certifications";
import Problem from "@/components/Problem";
import Solutions from "@/components/Solutions";
import Sectors from "@/components/Sectors";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Clients />
        <Certifications />
        <Problem />
        <Solutions />
        <Sectors />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
