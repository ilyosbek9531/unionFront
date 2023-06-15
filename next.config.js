/** @type {import('next').NextConfig} */
const nextTranslate = require("next-translate");

const nextConfig = nextTranslate({
  reactStrictMode: true,
  images: {
    domains: ["test.cdn.rasta.app"],
  },
});

module.exports = nextConfig;
