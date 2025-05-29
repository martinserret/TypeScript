const path = require('path')
const CleanPlugin = require('clean-webpack-plugin'); // Import the CleanWebpackPlugin to clean the output directory before each build

module.exports = {
  mode: 'production', //  Set the mode to production for optimized builds
  entry: './src/app.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // Absolute path to the output directory
  },
  devServer: {
    static: [
      {
        directory: path.join(__dirname),
      },
    ],
  },
  module: {
    rules: [
      {
        test: /\.ts$/, // Regular expression to match TypeScript files
        use: 'ts-loader', // Use ts-loader to compile TypeScript files
        exclude: /node_modules/, // Exclude node_modules directory
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js'], // Resolve these extensions
  },
  plugins:[
    new CleanPlugin.CleanWebpackPlugin() // Use CleanWebpackPlugin to clean the output directory before each build (dist)
  ]
};

// mode: 'production' is used to enable optimizations for production builds, such as minification and tree shaking. This reduces the size of the output bundle and improves performance in production environments.
// plugins: extra extensions you can add to your Webpack workflow which will basically be apply to the entire project.

// the package clean-webpack-plugin must be installed.
// new CleanPlugin.CleanWebpackPlugin(): Use CleanWebpackPlugin to clean the output directory before each build

// delete the line devtool: 'inline-source-map' as it is not needed in production builds.
// delete the line publicPath: '/dist/' as it is not needed in production builds.