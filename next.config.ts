import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "www.instagram.com",
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
