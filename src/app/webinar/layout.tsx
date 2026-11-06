import type { Metadata } from "next";

const PATH = "/webinar";

export const metadata: Metadata = {
  title: { absolute: "Banca, fintech y neobancos: un mismo estándar de identidad y cumplimiento | JAAK" },
  description:
    "Banca, fintech y neobancos convergen hacia el mismo estándar de identidad y cumplimiento. Conozca el enfoque de JAAK.",
  alternates: { canonical: PATH },
  openGraph: { title: "Banca, fintech y neobancos: un mismo estándar de identidad y cumplimiento | JAAK", description: "Banca, fintech y neobancos convergen hacia el mismo estándar de identidad y cumplimiento. Conozca el enfoque de JAAK.", url: PATH, locale: "es_MX", type: "website" },
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
