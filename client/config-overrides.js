const webpack = require('webpack')

module.exports = function override(config, env) {
    // config.resolve.fallback = {
    //     buffer: require.resolve('buffer'),
    // }
    config = {
        resolve: {
            fallback:{
                buffer: require.resolve('buffer'),
                crypto: require.resolve("crypto-browserify"),
                stream: require.resolve("stream-browserify"),
                assert: require.resolve("assert"),
                http: require.resolve("stream-http"),
                https: require.resolve("https-browserify"),
                os: require.resolve("os-browserify"),
                url: require.resolve("url")
            }
        }
    }
    config.plugins.push(
        new webpack.ProvidePlugin({
            Buffer: ['buffer', 'Buffer'],
            process: 'process/browser'
        })
    )
    return config
}