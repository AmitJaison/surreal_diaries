import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'surreal-diaries.vercel.app',
        pathname: '/**',
      },
    ],
  },
  // other config options here
};

export default nextConfig;
