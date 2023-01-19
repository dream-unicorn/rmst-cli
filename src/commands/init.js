const path = require('path')
const fse = require('fs-extra')

module.exports = projectName => {
  const templatePath = path.resolve(__dirname, '../template')
  const destPath = `${process.cwd()}/${projectName}`

  fse.copySync(templatePath, destPath)

  console.log(path.resolve(__dirname, '../../package.json'))
  console.log(path.resolve(templatePath, 'package.json'))

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
