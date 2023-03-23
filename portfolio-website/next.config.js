// /** @type {import('next').NextConfig} */

// const repo = 'portfolio'
// const assetPrefix = `/${repo}/`
// const basePath = `/${repo}`


const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.creative-tim.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },

    ],
    // domains: ['images.unsplash.com'],
  },
}

// const nextConfig   = {
//   images: {
//     loader: 'akamai',
//     path: '',
//   },
//   assetPrefix: './',
// };

// export default   nextConfig;

module.exports = nextConfig
// next.config.js




// module.exports = {
//   assetPrefix: assetPrefix,
//   basePath: basePath,
//   reactStrictMode: true,
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'images.unsplash.com',
//         port: '',
//         pathname: '/**',
//       },
//     ],
//     // domains: ['images.unsplash.com'],
//   },  
// }