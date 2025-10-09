const path = require('path'); // pre-defined module in NodeJS
const webpack = require('webpack'); // installed
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'bundle.[contenthash:8].js'
    },
    target: ['web', 'es5'],
    module: {
        rules: [{
            test : /\.js$/,
            use: 'babel-loader'
        },
        {
            test : /\.ts$/,
            use: 'ts-loader'
        },
        {
            test : /\.css$/,
            use: ['css-loader', 'style-loader']
        }
    ]
    },
     plugins: [new HtmlWebpackPlugin({
        template: './src/index.html'
     })],
}