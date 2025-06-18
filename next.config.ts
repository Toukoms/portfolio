import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["images.unsplash.com", "raw.githubusercontent.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "*",
        port: "",
        search: "",
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        pathname: "*",
        port: "",
        search: "",
      },
    ],
  },
};

export default nextConfig;
