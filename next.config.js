module.exports = {
  images: {
    domains: ["a-us.storyblok.com"],
  },
  webpack(config) {
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
    return config
  },
  generateBuildId: () => "build",
}
