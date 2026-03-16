/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
};

export default nextConfig;
