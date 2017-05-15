const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
// const dependencies = Object.keys(require('../package').dependencies)

module.exports = {
    entry: {
        main: './src/app.js',
    },
    output: {
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, '../dist')
    },
    module: {
        rules: [
            {
                test: /.html$/,
                loader: 'html-loader'
            },
            {
                test: /.scss$/,
                use: ['style-loader', 'css-loader', {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true
                    }
                }]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                loader: 'file-loader'
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)(\?.*$|$)/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
        new HtmlPlugin({
            title: 'Practice app',
            template: 'src/index.html',
            hash: true
        })
    ]
}