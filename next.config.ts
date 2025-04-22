import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'www.codewithfaraz.com',
      pathname: '/tools/**',
    }],
  },

};

export default nextConfig;
