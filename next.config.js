module.exports = {
  images: {
    domains: ["a-us.storyblok.com"],
  },
  webpack(config) {
    // Handle SVGs
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            svgoConfig: {
              plugins: [{ name: "prefixIds", active: false }],
            },
          },
        },
      ],
    })

    // Graphql
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: "graphql-tag/loader",
    })

    return config
  },
  generateBuildId: () => "build",
}
