/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, _) => {
    config.module.rules.push({
      test: /\.ejs$/,
      loader: "raw-loader",
    })
    return config
  },
}

module.exports = nextConfig
