const path = require("path")

module.exports = {
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
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
    "neumorphism-react": path.resolve(__dirname, "src")
  }
}