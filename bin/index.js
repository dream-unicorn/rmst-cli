#!/usr/bin/env node

const { Command } = require('commander')

const init = require('../src/commands/init')
const start = require('../src/commands/start')

const program = new Command()

program.name('rmst-cli').version('0.8.0')

program
  .command('init')
  .description('init 项目')
  .argument('<string>', 'string to split')
  .action(projectName => {
    init(projectName)
  })

program
  .command('start')
  .description('启动项目')
  .action(() => {
    start()
  })

program.parse()
