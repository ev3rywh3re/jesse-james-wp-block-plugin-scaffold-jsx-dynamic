const path = require('path');

module.exports = {
  entry: './src/index.js', // Entry point for your block's JavaScript
  output: {
    path: path.resolve(__dirname, 'build'), // Output directory for bundled files
    filename: '[name].js' // Output filename pattern
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Match JavaScript files
        exclude: /node_modules/, // Exclude node_modules directory
        use: {
          loader: 'babel-loader', // Use Babel loader for transpilation
        }
      },
      {
        test: /\.css$/, // Match CSS files
        use: ['style-loader', 'css-loader'] // Use style-loader and css-loader for CSS handling
      },
      {
        test: /\.json$/, // Match JSON files
        use: 'file-loader' // Use FileLoader to handle JSON files
      }
    ]
  },
  
};
