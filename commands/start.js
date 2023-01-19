const { webpack } = require('webpack')
const getWebpackConfig = require('../config/webpack.config')

const WebpackDevServer = require('webpack-dev-server')
const path = require('path')

module.exports = () => {
  const webpackConfig = getWebpackConfig()
  const compiler = webpack(webpackConfig)
  const server = new WebpackDevServer({ port: 3088 }, compiler)

  server.start()
}
