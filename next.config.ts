import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    images: { remotePatterns: [{ hostname: "*.aceternity.com" }] },
    output: "standalone"
};

export default nextConfig;
