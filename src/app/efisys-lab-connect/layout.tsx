import type { Metadata } from "next";

const CANONICAL_URL = "https://jaak.ai/efisys-lab-connect";

export const metadata: Metadata = {
  title: "EFISYS Lab Connect 2026 | JAAK",
  description:
    "Evento del sector tecnológico financiero en Oaxaca. JAAK como co-anfitrión. 07 de mayo de 2026, Hotel Fortín Plaza. Registro gratuito.",
  alternates: {
    canonical: CANONICAL_URL,
  },
  openGraph: {
    title: "EFISYS Lab Connect 2026 | JAAK Co-anfitrión",
    description:
      "Encuentro de colaboración del sector tecnológico financiero. 07 de mayo de 2026, Oaxaca, Oax. Registro sin costo.",
    url: CANONICAL_URL,
    type: "website",
    locale: "es_MX",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function EfisysLabConnectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
