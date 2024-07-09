/** @type {import('next').NextConfig} */
const pathPrefix = process.env.NODE_ENV === 'production'
? '/isra-page'
: '';

const nextConfig = {
    assetPrefix: pathPrefix,
    basepath: pathPrefix,
    env: {
        pathPrefix,
    },
};

export default nextConfig;
