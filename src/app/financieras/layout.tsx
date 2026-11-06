import type { Metadata } from "next";

const PATH = "/financieras";

export const metadata: Metadata = {
  title: { absolute: "KYC y cumplimiento AML/LAFT para financieras y SOFOMES | JAAK" },
  description:
    "Verificación de identidad biométrica, liveness y firma digital NOM-151 para SOFOMES, fintechs y entidades financieras reguladas en México.",
  alternates: { canonical: PATH },
  openGraph: { title: "KYC y cumplimiento AML/LAFT para financieras y SOFOMES | JAAK", description: "Verificación de identidad biométrica, liveness y firma digital NOM-151 para SOFOMES, fintechs y entidades financieras reguladas en México.", url: PATH, locale: "es_MX", type: "website" },
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
