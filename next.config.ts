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
      {
        protocol: "https",
        hostname: "**.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
      {
        protocol: "https",
        hostname: "2zw74dh6lj.ufs.sh",
        pathname: "/f/**",
      }
    ],
  },
};

export default nextConfig;
