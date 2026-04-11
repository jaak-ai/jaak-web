import Header from "@/components/Header";
import HeroRegulated from "@/components/HeroRegulated";
import ClientLogos from "@/components/ClientLogos";
import RegulatoryProof from "@/components/RegulatoryProof";
import RegulatoryProblem from "@/components/RegulatoryProblem";
import JaakSolution from "@/components/JaakSolution";
import ComplianceEvidence from "@/components/ComplianceEvidence";
import RegulatedUseCases from "@/components/RegulatedUseCases";
import BusinessOutcomes from "@/components/BusinessOutcomes";
import RecentBlogPosts from "@/components/RecentBlogPosts";
import ImplementationSteps from "@/components/ImplementationSteps";
import FinalCTA from "@/components/FinalCTA";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

// FAQ Schema dedicado para la homepage - mejora detección por Perplexity y otros AI crawlers
const homeFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Qué es la verificación de identidad KYC?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "KYC (Know Your Customer) es el proceso regulatorio mediante el cual las instituciones financieras verifican la identidad de sus clientes para prevenir fraude y lavado de dinero. En México es obligatorio bajo la Ley Federal para la Prevención e Identificación de Operaciones con Recursos de Procedencia Ilícita (LFPIORPI), regulada por la Unidad de Inteligencia Financiera (UIF) y la Comisión Nacional Bancaria y de Valores (CNBV)."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo cumple JAAK con las regulaciones CNBV y UIF?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "JAAK genera evidencia legal auditable en cada verificación de identidad, cumpliendo con los requerimientos de la CNBV (Comisión Nacional Bancaria y de Valores), UIF (Unidad de Inteligencia Financiera), LFPIORPI, NOM-151-SCFI-2016 para firma electrónica, y estándares internacionales AML/CFT. Cada proceso de verificación incluye prueba de vida, OCR de documentos oficiales y biometría facial con anti-spoofing."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué diferencia a JAAK de otras soluciones de verificación de identidad en México?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "JAAK es la única plataforma mexicana que combina KYC (verificación de personas físicas), KYB (verificación de personas morales) y firma electrónica avanzada en una sola solución. Utiliza tecnología biométrica 100% propia sin depender de proveedores externos como AWS Rekognition o Azure Face, garantizando control total de datos sensibles y cumplimiento con la Ley Federal de Protección de Datos Personales (LFPDPPP)."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué es KYB y por qué es importante para empresas reguladas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "KYB (Know Your Business) es el proceso de verificación de personas morales que incluye validación de acta constitutiva, poderes notariales, RFC, representantes legales y cumplimiento AML. Es obligatorio para instituciones financieras bajo las disposiciones de la CNBV y para actividades vulnerables bajo LFPIORPI. JAAK automatiza el proceso reduciendo tiempos de semanas a horas."
      }
    },
    {
      "@type": "Question",
      "name": "¿La firma electrónica de JAAK tiene validez legal en México?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. La firma electrónica de JAAK (Signa) cumple con la NOM-151-SCFI-2016, el Código de Comercio y la Ley de Firma Electrónica Avanzada. Genera constancias de conservación con sello de tiempo, garantiza no repudio y tiene plena validez probatoria ante tribunales mexicanos, PROFECO, CONDUSEF y autoridades regulatorias."
      }
    }
  ]
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqSchema) }}
      />
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
        <RecentBlogPosts />
        <ImplementationSteps />
        <FinalCTA />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
