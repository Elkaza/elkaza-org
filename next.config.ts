import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV !== 'production';
const analyticsOrigin = 'https://analytics.elkaza.at';
const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "frame-ancestors 'none'",
  "object-src 'none'",
  "form-action 'self'",
  "img-src 'self' blob: data:",
  "font-src 'self'",
  "style-src 'self' 'unsafe-inline'",
  `script-src 'self' ${analyticsOrigin} 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ''}`,
  `connect-src 'self' ${analyticsOrigin}`,
  ...(isDev ? [] : ['upgrade-insecure-requests']),
].join('; ');

const nextConfig: NextConfig = {
  devIndicators: false,
  experimental: {
    globalNotFound: true,
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'Content-Security-Policy',
            value: contentSecurityPolicy,
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          }
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/contact',
        destination: '/en/contact',
        permanent: true,
      },
      {
        source: '/certifications',
        destination: '/en/certifications',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
