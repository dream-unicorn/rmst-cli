#!/usr/bin/env node
const path = require('path')

const fse = require('fs-extra')

const pp = path.resolve(__dirname, 'template')

console.log(pp)

fse.copySync(pp, `${process.cwd()}/project`)
