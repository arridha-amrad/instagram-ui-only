import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "www.instagram.com",
      },
      {
        hostname: "images.pexels.com",
      },
      {
        hostname: "localhost",
      },
      {
        hostname: "static.cdninstagram.com",
      },
      {
        hostname: "instagram.fccu9-3.fna.fbcdn.net",
      },
    ],
  },
};

export default nextConfig;
