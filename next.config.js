// const withPlugins = require('next-compose-plugins');
// const optimizedImages = require('next-optimized-images');

// const nextConfiguration = {
//   target: 'serverless', //will output independent pages that don't require a monolithic server. It's only compatible with next start or Serverless deployment platforms (like ZEIT Now) — you cannot use the custom server API.
// };

// module.exports = withPlugins([optimizedImages], nextConfiguration);

// /**
//  * @type {import('next').NextConfig}
//  */
// const nextConfig = {
//   output: "export",

// };

// module.exports = nextConfig;

// next.config.js
const path = require("path");

module.exports = {
  webpack: (config, { isServer }) => {
    // Add a rule for handling image files
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg)$/i,
      use: [
        {
          loader: "file-loader",
          options: {
            publicPath: "/_next",
            name: "static/media/[name].[ext]",
          },
        },
      ],
    });

    return config;
  },
};
