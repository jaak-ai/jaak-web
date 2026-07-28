import type { NextConfig } from "next";
import { withContentlayer } from "next-contentlayer2";

const nextConfig: NextConfig = {
  // Empty turbopack config to allow webpack plugins (contentlayer) to work
  turbopack: {},
  async redirects() {
    return [
      // Alias de la landing de listas de riesgo PLD/AML/FT — evita contenido
      // duplicado consolidando todo el tráfico en la URL canónica.
      { source: "/screening-aml", destination: "/listas-de-riesgo-pld-aml", permanent: true },
      { source: "/consulta-listas-riesgo", destination: "/listas-de-riesgo-pld-aml", permanent: true },
      { source: "/listas-de-riesgo", destination: "/listas-de-riesgo-pld-aml", permanent: true },
      { source: "/listas-pld", destination: "/listas-de-riesgo-pld-aml", permanent: true },
    ];
  },
};

export default withContentlayer(nextConfig);
