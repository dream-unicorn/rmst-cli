const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = () => {
  const entry = `${process.cwd()}/src/index.js`

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
