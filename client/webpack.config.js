import webpack from 'webpack';

module.exports = {
  resolve: {
    fallback: {
      "buffer": require.resolve("buffer")
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      // you must `npm install buffer` to use this.
      Buffer: ['buffer', 'Buffer']
    })
  ]
}