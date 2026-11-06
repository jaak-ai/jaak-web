import type { Metadata } from "next";

const PATH = "/bancos";

export const metadata: Metadata = {
  title: { absolute: "Biometría bancaria propia: liveness, facial search y KYC | JAAK" },
  description:
    "Infraestructura biométrica para banca en México: Liveness Detection, Facial Search, KYC y Bus Biométrico operados por JAAK.",
  alternates: { canonical: PATH },
  openGraph: { title: "Biometría bancaria propia: liveness, facial search y KYC | JAAK", description: "Infraestructura biométrica para banca en México: Liveness Detection, Facial Search, KYC y Bus Biométrico operados por JAAK.", url: PATH, locale: "es_MX", type: "website" },
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
