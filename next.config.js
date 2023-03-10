/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    runtime: "edge",
  },
};

module.exports = (phase, { defaultConfig }) => {
  return {
    distDir: ".next",
    ...defaultConfig,
    swcMinify: true,
    compiler: {
      styledComponents: true,
    },
    async redirects() {
      return [
        {
          source: "/home",
          destination: "/",
          permanent: true,
        },
        {
          source: "/service",
          destination: "/",
          permanent: true,
        },
        {
          source: "/industry",
          destination: "/",
          permanent: true,
        },
        {
          source: "/technology",
          destination: "/",
          permanent: true,
        },
        {
          source: "/customer",
          destination: "/",
          permanent: true,
        },
        {
          source: "/contact-us",
          destination: "/",
          permanent: true,
        },
        {
          source: "/blogs",
          destination: "/",
          permanent: true,
        },
      ];
    },
    nextConfig,
    images: {
      domains: [
        "images.unsplash.com",
        "wembleypark.com",
        "images.ctfassets.net",
        "ezgif.com",
        "media.giphy.com",
        "convertio.co",
        "interone-next1.web.app",
        "cdn.dribbble.com"
      ],
      output:"standalone",
      path: '/_next/image',
      loader: 'default',
      // formats: ['image/png', 'image/webp'], 
      quality: 75,
    },
    webpack: (config) => {
      // config.resolve = {
      //   ...config.resolve,
      //   fallback: {
      //     fs: false,
      //     path: false,
      //     os: false,
      //   },
      // };
      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      });
      return config;
    },
  };
};
