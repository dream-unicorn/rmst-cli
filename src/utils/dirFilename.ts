import path from 'path'
import url from 'url'

export default () => {
  const __filename = url.fileURLToPath(import.meta.url)
  const __dirname = path.dirname(__filename)

  return { __filename, __dirname }
}
