import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  redirects: async () => {
    return [
      {
        source: '/gh/:path*',
        destination: 'https://github.com/DGoel1602/:path*',
        permanent: true,
      }
    ];
  }
};

export default nextConfig;
