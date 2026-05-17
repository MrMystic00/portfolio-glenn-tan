import type { NextConfig } from "next";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'your-s3-bucket-name.s3.amazonaws.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};


export default nextConfig;
