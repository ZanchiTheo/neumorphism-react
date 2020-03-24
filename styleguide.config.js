const path = require("path")

module.exports = {
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.svg$/,
          use: [
            {
              loader: 'svg-url-loader',
              options: {
                limit: 10000,
              },
            },
          ],
        },
      ]
    },
  },
  title: "React Neumorphism Components Library",
  styleguideDir: "dist-docs",
  moduleAliases: {
    "react-neucomponents": path.resolve(__dirname, "src")
  }
}