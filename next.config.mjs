/** @type {import('next').NextConfig} */
const pathPrefix = process.env.NODE_ENV === 'production'
? '/isra-page'
: '';

const nextConfig = {
    assetPrefix: pathPrefix,
    basepath: "/isra-page",
    env: {
        pathPrefix,
    },
};

export default nextConfig;
