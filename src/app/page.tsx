import Header from "@/components/Header";
import HeroRegulated from "@/components/HeroRegulated";
import ClientLogos from "@/components/ClientLogos";
import RegulatoryProof from "@/components/RegulatoryProof";
import RegulatoryProblem from "@/components/RegulatoryProblem";
import JaakSolution from "@/components/JaakSolution";
import ComplianceEvidence from "@/components/ComplianceEvidence";
import RegulatedUseCases from "@/components/RegulatedUseCases";
import BusinessOutcomes from "@/components/BusinessOutcomes";
import ImplementationSteps from "@/components/ImplementationSteps";
import FinalCTA from "@/components/FinalCTA";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroRegulated />
        <ClientLogos />
        <RegulatoryProof />
        <RegulatoryProblem />
        <JaakSolution />
        <ComplianceEvidence />
        <RegulatedUseCases />
        <BusinessOutcomes />
        <ImplementationSteps />
        <FinalCTA />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
