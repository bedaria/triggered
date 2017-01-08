module.exports = {
  entry: [
    './client/index.js'
  ],
  output: {
    path: __dirname + '/client/dist',
    filename: "bundle.js"
  },
  externals: {
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel",
        query: { presets: ['es2015', 'react', 'stage-1'] }
      }
    ]
  }
}
