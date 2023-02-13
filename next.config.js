/** @type {import('next').NextConfig} */
const nextConfig = {
  // Change this to `false` to offload compression to nginx (using docker)
  compress: true,
  output: 'standalone',
  generateEtags: false,
  reactStrictMode: true,
  poweredByHeader: false,
  experimental: {
    appDir: true
  },
  images: {
    domains: ['avatars.githubusercontent.com']
  },
  async headers() {
    return [
      {
        source: '/:path',
        headers: securityHeaders
      }
    ];
  }
};

module.exports = nextConfig;

const CSP = `
  default-src 'self';
  script-src 'self';
  style-src 'self'
  font-src 'self';  
`;
const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: CSP.replace(/\s{2,}/g, ' ').trim()
  },
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    // If CSP is not supported by the browser
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin'
  }
];
