/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for Vercel
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Note: For redirects with static export, use vercel.json or _redirects file
  // See GCA_REDIRECT_OPTIONS.md for domain redirect setup
};

module.exports = nextConfig;
