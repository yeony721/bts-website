// webpack.config.js
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const path = require('path');

module.exports = {
  module: {
    rules: [
        {
            test: /\.vue$/, loader: "vue-loader"
        },   
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
        
        {
            test: /\.s[ac]ss$/i,
            use: ["style-loader","css-loader","sass-loader"],
        },
        {
          test: /\.(png|jpg|gif)$/i,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 4000,
                name: 'images/[name].[ext]',
                esModule: false
              }
            },
          ]
        },
    ]
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'app.js'
  },
  resolve: {
    alias: {
      "vue$": "vue/dist/vue.esm.js",
      '@': path.resolve('src'),
    },
    extensions: ['*', '.js', '.vue', '.json']    
  },
  plugins: [
    new VueLoaderPlugin()
  ]
};