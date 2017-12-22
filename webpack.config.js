var path = require('path')
module.exports = {
  entry: "./src/calculator.js",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "calculator.bundle.js"
  },
  module: {
    rules: [
      {
        test: /\*.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options:{
            preset: ['babel-preset-env']
          }
        }
      }
    ]
  }
}