import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "jaak.ai",
      },
      {
        protocol: "https",
        hostname: "*.hubspotusercontent-na1.net",
      },
      {
        protocol: "https",
        hostname: "*.hubspotusercontent10.net",
      },
    ],
  },
};

export default nextConfig;
