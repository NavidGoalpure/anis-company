/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/webp'],
    swcMinify: true,
    disableStaticImages: false,
  },
};

module.exports = nextConfig;
// const config = {
//   reactStrictMode: true,
//   swcMinify: true,
//   // Configure pageExtensions to include md and mdx
//   pageExtensions: ['ts', 'tsx', 'js', 'jsx'],

//   //
//   experimental: {
//     nextScriptWorkers: true,
//   },
//   compiler: {
//     // Enables the styled-components SWC transform
//     styledComponents: true,
//   },

//   i18n: {
//     locales: ['en', 'fa', 'zh'],
//     defaultLocale: 'en',
//     localeDetection: false,
//   },
//   images: {
//     formats: ['image/webp'],
//     domains: ['binsta.dev', 'lh3.googleusercontent.com', 'cdn.sanity.io'],
//     disableStaticImages: false,
//   },
// };
