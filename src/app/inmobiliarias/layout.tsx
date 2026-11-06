import type { Metadata } from "next";

const PATH = "/inmobiliarias";

export const metadata: Metadata = {
  title: { absolute: "KYC biométrico y firma electrónica para inmobiliarias | JAAK" },
  description:
    "Verifique a sus clientes sin papel con KYC biométrico y firma electrónica NOM-151 para operaciones inmobiliarias en México.",
  alternates: { canonical: PATH },
  openGraph: { title: "KYC biométrico y firma electrónica para inmobiliarias | JAAK", description: "Verifique a sus clientes sin papel con KYC biométrico y firma electrónica NOM-151 para operaciones inmobiliarias en México.", url: PATH, locale: "es_MX", type: "website" },
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
