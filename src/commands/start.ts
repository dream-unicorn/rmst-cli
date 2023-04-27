import webpack from 'webpack'
import chalk from 'chalk'

import getWebpackConfig from '../config/webpack.config.js'

import WebpackDevServer from 'webpack-dev-server'

const Port = 10001

export default function startDevServer() {
  const webpackConfig = getWebpackConfig()
  const compiler = webpack(webpackConfig)
  const server = new WebpackDevServer({ port: Port }, compiler)

  console.log(chalk.blue('正在启动...'))
  server.start().then(() => {
    const url = chalk.green(`http://localhost:${Port}`)

    console.log(`启动成功: ${url}`)
  })
}
