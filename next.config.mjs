/** @type {import('next').NextConfig} */
const pathPrefix = process.env.NODE_ENV === "production" ? "/isra-page" : "";

const nextConfig = {
  output: "export",
  assetPrefix: pathPrefix,
  basepath: pathPrefix,
};

export default nextConfig;
