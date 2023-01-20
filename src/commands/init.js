import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import * as fse from 'fs-extra/esm'

export default projectName => {
  const __filename = fileURLToPath(import.meta.url)
  const __dirname = dirname(__filename)

  const templatePath = resolve(__dirname, '../template')
  const destPath = resolve(process.cwd(), projectName)

  fse.copySync(templatePath, destPath)

  const rmstCliPackageJson = fse.readJsonSync(resolve(__dirname, '../../package.json'))
  const templatePackageJson = fse.readJsonSync(resolve(templatePath, 'package.json'))

  console.log('rmstCliPackageJson.version: ', rmstCliPackageJson.version)

  templatePackageJson.devDependencies['rmst-cli'] = rmstCliPackageJson.version
  templatePackageJson.name = projectName

  const destPackagePath = resolve(destPath, 'package.json')

  console.log(destPackagePath)
  fse.writeJSONSync(destPackagePath, templatePackageJson, { spaces: 2 })

  console.log('初始化完成 123456')
}
