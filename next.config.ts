import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Blog cover images (placeholder posts use Unsplash).
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com", pathname: "/**" }],
  },
};

export default nextConfig;
