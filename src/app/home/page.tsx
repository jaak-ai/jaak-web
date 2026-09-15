import type { Metadata } from "next";
import HomepageSections from "@/components/HomepageSections";
import PageViewTracker from "@/components/PageViewTracker";

/**
 * `/home`: misma experiencia que `/`, con URL propia para medir campañas.
 * No se indexa y canonicaliza a la home para evitar contenido duplicado.
 */
export const metadata: Metadata = {
  title: "JAAK - Reduce fraude y cumple regulación sin perder clientes",
  alternates: {
    canonical: "https://jaak.ai/",
  },
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
    },
  },
};

export default function HomeAlias() {
  return (
    <>
      <PageViewTracker page="home" />
      <HomepageSections />
    </>
  );
}
