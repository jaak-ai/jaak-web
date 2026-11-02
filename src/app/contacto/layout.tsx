import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacta con el equipo de JAAK para solicitar una demostracion de nuestra plataforma de verificacion de identidad, KYC, KYB y firma electronica. Nuestro equipo comercial se pondrá en contacto contigo.",
  openGraph: {
    title: "Contacto | JAAK",
    description:
      "Contacta con el equipo de JAAK para solicitar una demostracion de nuestra plataforma de verificacion de identidad, KYC, KYB y firma electronica.",
    url: "https://jaak.ai/contacto",
  },
  alternates: {
    canonical: "https://jaak.ai/contacto",
  },
};

export default function ContactoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
