var path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  context: path.resolve(__dirname, 'client', 'js', 'app'),
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'client', 'js', 'dist'),
    filename: 'index.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
				exclude: /(node_modules)/,
				use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        exclude: /(node_modules)/,
        use: [{
            loader: "style-loader" // creates style nodes from JS strings
        }, {
            loader: "css-loader" // translates CSS into CommonJS
        }, {
            loader: "sass-loader" // compiles Sass to CSS
        }],
        // loader: 'style-loader!css-loader!stylus-loader',
      },
    ]
  }
};

// module.exports = {
//   devtool: 'source-map',
// 	context: path.resolve(__dirname, 'client', 'js'),
// 	entry: './index.js',
// 	output: {
// 		path: path.resolve(__dirname, 'client', 'js', 'dist'),
// 		filename: 'home.bundle.js',
// 	},
//   module: {
//     rules: [
//       {
//         test: /\.js?$/,
//         exclude: /(node_modules|bower_components)/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['react']
//           }
//         }
        // loader: 'babel-loader',
        // options: {
        //   presets: ['react'],
        //   plugins: [
        //     'babel-plugin-react-html-attrs',
        //     'transform-object-rest-spread',
        //     'transform-decorators-legacy',
        //   ]
        // },
      // },
      // {
      //   test: /\.scss$/,
      //   exclude: /(node_modules|bower_components)/,
      //   use: [{
      //       loader: "style-loader" // creates style nodes from JS strings
      //   }, {
      //       loader: "css-loader" // translates CSS into CommonJS
      //   }, {
      //       loader: "sass-loader" // compiles Sass to CSS
      //   }],
      //   // loader: 'style-loader!css-loader!stylus-loader',
      // }
//     ]
//   }
// };
