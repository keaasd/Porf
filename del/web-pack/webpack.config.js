const path = require('path');
const HtmlWebpackPlugin = require ('html-webpack-plugin');

module.exports = {
    mode: develop ? 'development' : 'production',
    entry:{
        main: './src/index.js',
        analytics: './src/analitics.js'
    },
    output: {
        filename: '[name].[contanthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Document',
            template: './src/index.html'
        })
        ]
}