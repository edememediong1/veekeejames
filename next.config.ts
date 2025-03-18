import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  
};

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'veekeejames.com',
        port: '',
        pathname: '/',
        search: '',
      },
    ],
  },
}

export default nextConfig;
