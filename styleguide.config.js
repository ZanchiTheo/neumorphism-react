const path = require("path")

module.exports = {
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        }
      ]
    }
  },
  title: "React Neumorphism Components Library",
  styleguideDir: "dist-docs",
  moduleAliases: {
    "neumorphism-react": path.resolve(__dirname, "src")
  }
}