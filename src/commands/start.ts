import { Command } from '@oclif/core'
import { webpack } from 'webpack'
import { getWebpackConfig } from '../webpack.config'

const WebpackDevServer = require('webpack-dev-server')

export default class Start extends Command {
  static description = 'Say helloqweert 二二'

  static examples = [
    `<%= config.bin %> <%= command.id %>
hello world! (./src/commands/hello/world.ts)
`
  ]

  static flags = {}

  static args = []

  async run(): Promise<void> {
    console.log(123456)
    const webpackConfig = getWebpackConfig()
    const compiler = webpack(webpackConfig)
    const server = new WebpackDevServer({ port: 3088 }, compiler)

    server.start()
  }
}
