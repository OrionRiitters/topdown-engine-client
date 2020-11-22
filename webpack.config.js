const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: "./src",
    output: {
        path:path.resolve(__dirname, "dist"),
        publicPath: "./"
    },
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                pathRewrite: {'^/api' : ''}
              }
        },
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 8000,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: [
                        '@babel/preset-env',
                        '@babel/preset-react'
                    ]
                  }
                }
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
          })
    ]
}