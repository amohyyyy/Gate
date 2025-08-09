import { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true
  },
  images: {
    // Add any external domains you will load images from
    domains: ["firebasestorage.googleapis.com", "localhost"]
  },
  typescript: {
    ignoreBuildErrors: false
  }
};

export default nextConfig;
