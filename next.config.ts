import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    VITE_API_BASE_URL: process.env.VITE_API_BASE_URL,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  poweredByHeader: false,
};

export default nextConfig;
