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
          use: ["style-loader", "css-loader","sass-loader"],
      },
      {
        // write files under 10k to inline or copy files over 10k
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              fallback: 'file-loader',
              name: 'fonts/[name].[ext]',
            },
          },
        ],
      },
        /*
        {
            test: /\.s[ac]ss$/i,
            use: ["style-loader","css-loader","sass-loader"],
        },
        */
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