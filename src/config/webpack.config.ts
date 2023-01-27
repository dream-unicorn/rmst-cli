import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import dirFilename from '../utils/dirFilename.js'

export default (): webpack.Configuration => {
  const entry = `${process.cwd()}/src/index.js`

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
    stats: 'errors-only'
  }
}
