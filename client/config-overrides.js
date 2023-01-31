const webpack = require('webpack')

module.exports = function override(config, env) {
    config.resolve.alias = {
        stream: require.resolve('stream-browserify'),
        buffer: require.resolve('buffer')
    }
    config.plugins.push(
        new webpack.ProvidePlugin({
            process: "process/browser.js"
        })
    )
    console.log(JSON.stringify(config))
    return config
}