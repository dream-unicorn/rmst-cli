import webpack from 'webpack'
import getWebpackConfig from '../config/webpack.config.js'

import WebpackDevServer from 'webpack-dev-server'

export default () => {
  const webpackConfig = getWebpackConfig()
  const compiler = webpack(webpackConfig)
  const server = new WebpackDevServer({ port: 10001 }, compiler)

  server.start()
}
