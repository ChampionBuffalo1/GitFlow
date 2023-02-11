/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    appDir: true
  },
  images: {
    domains: ['avatars.githubusercontent.com']
  }
};

module.exports = nextConfig;
