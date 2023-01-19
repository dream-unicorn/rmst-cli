const path = require('path')
const fse = require('fs-extra')

module.exports = projectName => {
  const templatePath = path.resolve(__dirname, '../template')
  const destPath = `${process.cwd()}/${projectName}`

  fse.copySync(templatePath, destPath)

  const rmstCliPackageJson = fse.readJsonSync(path.resolve(__dirname, '../package.json'))
  const templatePackageJson = fse.readJsonSync(path.resolve(templatePath, 'package.json'))

  console.log('rmstCliPackageJson.version: ', rmstCliPackageJson.version)

  templatePackageJson.devDependencies['rmst-cli'] = rmstCliPackageJson.version
  templatePackageJson.name = projectName
  fse.writeJSONSync(destPath + '/package.json', templatePackageJson, { spaces: 2 })

  console.log('初始化完成!!')
}
