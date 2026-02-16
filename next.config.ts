import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  redirects: async () => {
    return [
      {
        source: '/gh',
        destination: 'https://github.com/DGoel1602',
        permanent: true,
      }
    ];
  }
};

export default nextConfig;
