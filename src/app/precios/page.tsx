import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PreciosClient from "./PreciosClient";

export const metadata: Metadata = {
  title: "Precios – Autoservicio, Enterprise y Alianzas",
  description:
    "Precios de verificación de identidad (KYC), firma electrónica y biometría. Desde autoservicio inmediato hasta infraestructura Enterprise con SLA formal. Cumplimiento regulatorio para sectores financieros en México.",
  keywords: [
    "precios KYC",
    "precios verificación de identidad",
    "precios firma electrónica",
    "KYC México precios",
    "biometría precios",
    "JAAK precios",
    "Enterprise KYC",
    "autoservicio verificación",
    "compliance precios",
  ],
  openGraph: {
    title: "Precios – JAAK | Autoservicio, Enterprise y Alianzas",
    description:
      "Desde autoservicio inmediato hasta infraestructura Enterprise con SLA formal y soporte especializado. Precios diseñados según tu nivel de operación.",
    url: "https://jaak.ai/precios",
  },
  alternates: {
    canonical: "https://jaak.ai/precios",
  },
};

export default function PreciosPage() {
  return (
    <>
      <Header />
      <main>
        <PreciosClient />
      </main>
      <Footer />
    </>
  );
}
