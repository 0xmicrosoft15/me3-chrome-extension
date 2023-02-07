const { isPlainObject } = require('@mui/utils')
const webpack = require('webpack')

module.exports = function override(config, env) {
    const alias = config.resolve.alias || {}
    Object.assign(alias, {
        stream: require.resolve("stream-browserify"),
        buffer: require.resolve("buffer"),
    })
    config.resolve.alias = alias
    // config.resolve.alias = {
    //     stream: require.resolve('stream-browserify'),
    //     buffer: require.resolve('buffer'),
    // }
    config.plugins = (config.plugins || []).concat([
        new webpack.ProvidePlugin({
          process: "process/browser",
          Buffer: ["buffer", "Buffer"],
        })
    ])
    // config.plugins.push(
    //     new webpack.ProvidePlugin({
    //         process: "process/browser.js"
    //     })
    // )
    
    //npm run build to print out webpack JSON object
    // console.log(JSON.stringify(config))
    return config
}