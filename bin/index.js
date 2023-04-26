#!/usr/bin/env node

import { Command } from 'commander'
import path from 'path'

import init from '../dist/commands/init.js'
import start from '../dist/commands/start.js'

const program = new Command()

program.name('rmst-cli').version('0.8.0')

program
  .command('init')
  .description('init 项目')
  .argument('<string>', 'string to split')
  .action(projectName => {
    init(projectName)

    console.log('projectName: ', projectName)
  })

program
  .command('start')
  .description('启动项目')
  .action(() => {
    start()
  })

program.parse()
