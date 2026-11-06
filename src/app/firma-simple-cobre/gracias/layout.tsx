import type { Metadata } from "next";

const PATH = "/firma-simple-cobre/gracias";

export const metadata: Metadata = {
  title: { absolute: "Gracias por su compra de Firma Simple | JAAK" },
  description:
    "Confirmación de compra de Firma Simple de JAAK.",
  alternates: { canonical: PATH },
  robots: { index: false, follow: false },
  openGraph: { title: "Gracias por su compra de Firma Simple | JAAK", description: "Confirmación de compra de Firma Simple de JAAK.", url: PATH, locale: "es_MX", type: "website" },
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
