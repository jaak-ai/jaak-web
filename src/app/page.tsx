import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Results from "@/components/Results";
import UseCases from "@/components/UseCases";
import Implementation from "@/components/Implementation";
import Compliance from "@/components/Compliance";
import FinalCTA from "@/components/FinalCTA";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <Problem />
        <Solution />
        <Results />
        <UseCases />
        <Implementation />
        <Compliance />
        <FinalCTA />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
