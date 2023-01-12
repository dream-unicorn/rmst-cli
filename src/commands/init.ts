import { Command } from '@oclif/core'
import * as fs from 'fs-extra'

export default class Init extends Command {
  static description = 'Init'

  static examples = []

  static flags = {}

  static args = []

  async run(): Promise<void> {
    fs.copy('./../template', `${process.cwd()}/project`)
  }
}
