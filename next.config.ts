import type { NextConfig } from "next";
import { withContentlayer } from "next-contentlayer2";

const nextConfig: NextConfig = {
  // Empty turbopack config to allow webpack plugins (contentlayer) to work
  turbopack: {},
};

export default withContentlayer(nextConfig);
