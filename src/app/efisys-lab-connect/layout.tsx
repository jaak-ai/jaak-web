import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EFISYS Lab Connect 2026 | JAAK",
  description:
    "Evento del sector tecnológico financiero en Oaxaca. JAAK como co-anfitrión. 07 de mayo de 2026, Hotel Fortín Plaza. Registro gratuito.",
  openGraph: {
    title: "EFISYS Lab Connect 2026 | JAAK Co-anfitrión",
    description:
      "Encuentro de colaboración del sector tecnológico financiero. 07 de mayo de 2026, Oaxaca, Oax. Registro sin costo.",
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
