import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import dirFilename from '../utils/dirFilename.js'

export default function webpackConfig(): webpack.Configuration {
  const entry = path.resolve(process.cwd(), 'src', 'index.ts')
  console.log('entry', entry)

  const { __dirname } = dirFilename()

  return {
    entry,
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'index_bundle.js'
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: `${process.cwd()}/public/index.html`
      })
    ],

    mode: 'development',
    watch: true,
    devtool: 'source-map',
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.jsx']
    },
    stats: 'errors-warnings',
    infrastructureLogging: {
      level: 'none'
    },
    // 配置模块规则
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          },
          exclude: '/node-modules/'
        }
      ]
    }
  }
}
