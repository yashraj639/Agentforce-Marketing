import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // allow any CDN/domain (you can restrict if needed)
      },
      {
        protocol: "https",
        hostname: "", 
      },
    ],
  },
};

export default nextConfig;
