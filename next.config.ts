import type { NextConfig } from "next";
import { withContentlayer } from "next-contentlayer2";

const nextConfig: NextConfig = {
  // Empty turbopack config to allow webpack plugins (contentlayer) to work
  turbopack: {},
  async redirects() {
    return [
      {
        source: "/plataforma/firma-electronica",
        destination: "/firma-electronica",
        permanent: true,
      },
    ];
  },
};

export default withContentlayer(nextConfig);
