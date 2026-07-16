import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root so Turbopack never infers a parent dir as root
  // (fixes "Can't resolve 'tailwindcss'" when other lockfiles exist above).
  turbopack: { root: __dirname },
};

export default nextConfig;
