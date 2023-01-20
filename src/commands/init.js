import path from 'path'
import * as fse from 'fs-extra/esm'
import dirFilename from '../utils/dirFilename.js'

export default projectName => {
  const { __dirname } = dirFilename()

  const templatePath = path.resolve(__dirname, '../template')
  const destPath = path.resolve(process.cwd(), projectName)

  fse.copySync(templatePath, destPath)

  const rmstCliPackageJson = fse.readJsonSync(path.resolve(__dirname, '../../package.json'))
  const templatePackageJson = fse.readJsonSync(path.resolve(templatePath, 'package.json'))

  console.log('rmstCliPackageJson.version: ', rmstCliPackageJson.version)

  templatePackageJson.devDependencies['rmst-cli'] = rmstCliPackageJson.version
  templatePackageJson.name = projectName

  const destPackagePath = path.resolve(destPath, 'package.json')

  console.log(destPackagePath)
  fse.writeJSONSync(destPackagePath, templatePackageJson, { spaces: 2 })

  console.log('初始化完成 123456')
}
