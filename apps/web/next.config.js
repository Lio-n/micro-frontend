/** @type {import('next').NextConfig} */
const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

const cdn = process.env.MEDIALIT_SERVER
  ? process.env.MEDIALIT_CDN || process.env.MEDIALIT_SERVER
  : 'medialit-prod.s3.ap-southeast-1.amazonaws.com';

console.log('process.env.NEXT_PRIVATE_LOCAL_WEBPACK - ', process.env.NEXT_PRIVATE_LOCAL_WEBPACK);
const nextConfig = {
  env: {
    NEXT_PRIVATE_LOCAL_WEBPACK: process.env.NEXT_PRIVATE_LOCAL_WEBPACK,
  },
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: [cdn, 'amador.edu.do', 'lh3.googleusercontent.com', 'via.placeholder.com', '.cloudfront.net'],
  },
  webpack(config, { isServer }) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'web',
        filename: 'static/chunks/remoteEntry.js',
        remotes: {
          monkey_dashboard: 'monkey_dashboard@http://localhost:3001/remoteEntry.js',
        },
      })
    );

    return config;
  },
};

module.exports = nextConfig;
