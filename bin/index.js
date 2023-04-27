#!/usr/bin/env node

import yargs from 'yargs/yargs'

import init from '../dist/commands/init.js'
import start from '../dist/commands/start.js'

initYargs()

function initYargs() {
  yargs(process.argv.slice(2))
    .command(
      'init [projectName]',
      '初始化项目',
      () => {},
      argv => {
        init(argv.projectName)
      }
    )
    .command(
      'start',
      '初始化项目',
      () => {},
      argv => {
        start()
      }
    )
    .help().argv
}
