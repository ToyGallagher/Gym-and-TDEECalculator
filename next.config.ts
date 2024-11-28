import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['fakestoreapi.com'], // เพิ่ม hostname ที่ต้องการอนุญาต
  },
};

export default nextConfig;