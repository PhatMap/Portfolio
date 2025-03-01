const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: isProd ? "/my-profile" : "", 
  assetPrefix: isProd ? "/my-profile/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
