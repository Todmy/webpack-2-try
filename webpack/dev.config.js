const webpackMerge = require('webpack-merge');
const defaultConfig = require('./default.config')
const {
    HotModuleReplacementPlugin,
    NamedModulesPlugin
} = require('webpack')

const config = {
    output: {
        filename: '[name].bundle.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        hot: true,
        open: true
    },
    plugins: [
        new HotModuleReplacementPlugin(),
        new NamedModulesPlugin()
    ]
}

module.exports =  webpackMerge(defaultConfig, config)
