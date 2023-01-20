#!/usr/bin/env node

import { Command } from 'commander'

import init from '../src/commands/init.js'
import start from '../src/commands/start.js'

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
