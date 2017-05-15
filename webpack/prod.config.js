const webpack = require('webpack')
const _ = require('lodash')
const webpackMerge = require('webpack-merge');
const defaultConfig = require('./default.config')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const config = {
    module: {
        rules: [
            {
                test: /.scss$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            }
        ]
    },
    devtool: 'cheap-source-map',
    plugins: [
        new ExtractTextPlugin({
            filename: 'styles.css'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: (module) => {
                return module.context && module.context.includes('node_modules')
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "manifest",
            minChunks: Infinity
        })
    ]
}

module.exports = webpackMerge({ customizeArray })(defaultConfig, config)

function customizeArray(a, b, key) {
    if(key === 'module.rules') {
        return _.uniqBy([...a, ...b], entry => String(entry.test))
    }

    return null
}