const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('./package.json');

module.exports = {
  mode: 'development',
  devServer: {
    port: 5002,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': '*',
    }
  },
  module: {
    rules: [
      {
        /* The following line to ask babel 
             to compile any file with extension
             .js */
        test: /\.js?$/,
        /* exclude node_modules directory from babel. 
            Babel will not compile any files in this directory*/
        exclude: /node_modules/,
        // To Use babel Loader
        loader:
          'babel-loader',
        options: {
          presets: [
            '@babel/preset-env' /* to transfer any advansed ES to ES5 */,
            '@babel/preset-react',
          ], // to compile react to ES5
        },
      },
    ],
  },
  output: {
    // library: {
    //   type: "module"
    // }
  },
  experiments: {
    outputModule: true,
  },
  plugins: [
    new ModuleFederationPlugin(
      {
        name: 'nova_react_app',
        filename:
          'remoteEntry.js',
        exposes: {
          './ReactApp':
            './src/bootstrap.js',
        },
        shared: packageJson.dependencies,
        library: {
          type: "module"
        }
      }
    ),
    new HtmlWebpackPlugin({
      template:
        './public/index.html',
    }),
  ],
};