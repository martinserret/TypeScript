const path = require('path')

module.exports = {
  entry: './src/app.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // Absolute path to the output directory
    publicPath: '/dist/' // Public URL of the output directory when referenced in the browser
  },
  devtool : 'inline-source-map', // Enable source maps for easier debugging
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
};

// module: in the end is just a file. We tell Webpack how to work with different file types it finds (ts, js, html, css, etc.). In our case: only TypeScript files.
// resolve: which file extensions Webpack should resolve. By default, it only resolves .js files, so we add .ts to it.
// devtool: tells webpack that there will be generated source maps. This is useful for debugging, as it allows you to see the original TypeScript code in the browser's developer tools instead of the compiled JavaScript code.
// devServer: configuration for the development server. It serves files from the current directory (__dirname) and allows you to access your application in the browser during development.