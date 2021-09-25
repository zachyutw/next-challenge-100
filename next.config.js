const withMDX = require('@next/mdx')();

module.exports = withMDX({
    reactStrictMode: true,
    images: {
        domains: ['images.unsplash.com']
    },
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx']
});
