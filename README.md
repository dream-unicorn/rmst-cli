# oclif-hello-world

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [oclif-hello-world](#oclif-hello-world)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->
```sh-session
$ npm install -g rmst-cli
$ rmst-cli COMMAND
running command...
$ rmst-cli (--version)
rmst-cli/0.0.2 win32-x64 node-v16.14.0
$ rmst-cli --help [COMMAND]
USAGE
  $ rmst-cli COMMAND
...
```
<!-- usagestop -->

# Commands

<!-- commands -->
* [`rmst-cli help [COMMAND]`](#rmst-cli-help-command)
* [`rmst-cli plugins`](#rmst-cli-plugins)
* [`rmst-cli plugins:install PLUGIN...`](#rmst-cli-pluginsinstall-plugin)
* [`rmst-cli plugins:inspect PLUGIN...`](#rmst-cli-pluginsinspect-plugin)
* [`rmst-cli plugins:install PLUGIN...`](#rmst-cli-pluginsinstall-plugin-1)
* [`rmst-cli plugins:link PLUGIN`](#rmst-cli-pluginslink-plugin)
* [`rmst-cli plugins:uninstall PLUGIN...`](#rmst-cli-pluginsuninstall-plugin)
* [`rmst-cli plugins:uninstall PLUGIN...`](#rmst-cli-pluginsuninstall-plugin-1)
* [`rmst-cli plugins:uninstall PLUGIN...`](#rmst-cli-pluginsuninstall-plugin-2)
* [`rmst-cli plugins update`](#rmst-cli-plugins-update)
* [`rmst-cli start`](#rmst-cli-start)

## `rmst-cli help [COMMAND]`

Display help for rmst-cli.

```
USAGE
  $ rmst-cli help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for rmst-cli.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.22/src/commands/help.ts)_

## `rmst-cli plugins`

List installed plugins.

```
USAGE
  $ rmst-cli plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ rmst-cli plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.1.12/src/commands/plugins/index.ts)_

## `rmst-cli plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ rmst-cli plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ rmst-cli plugins add

EXAMPLES
  $ rmst-cli plugins:install myplugin 

  $ rmst-cli plugins:install https://github.com/someuser/someplugin

  $ rmst-cli plugins:install someuser/someplugin
```

## `rmst-cli plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ rmst-cli plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ rmst-cli plugins:inspect myplugin
```

## `rmst-cli plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ rmst-cli plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ rmst-cli plugins add

EXAMPLES
  $ rmst-cli plugins:install myplugin 

  $ rmst-cli plugins:install https://github.com/someuser/someplugin

  $ rmst-cli plugins:install someuser/someplugin
```

## `rmst-cli plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ rmst-cli plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ rmst-cli plugins:link myplugin
```

## `rmst-cli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ rmst-cli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ rmst-cli plugins unlink
  $ rmst-cli plugins remove
```

## `rmst-cli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ rmst-cli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ rmst-cli plugins unlink
  $ rmst-cli plugins remove
```

## `rmst-cli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ rmst-cli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ rmst-cli plugins unlink
  $ rmst-cli plugins remove
```

## `rmst-cli plugins update`

Update installed plugins.

```
USAGE
  $ rmst-cli plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

## `rmst-cli start`

Say helloqweert 二二

```
USAGE
  $ rmst-cli start

DESCRIPTION
  Say helloqweert 二二

EXAMPLES
  $ rmst-cli start
  hello world! (./src/commands/hello/world.ts)
```

_See code: [dist/commands/start.ts](https://github.com/%E6%A1%8C%E9%9D%A2/hello-world/blob/v0.0.2/dist/commands/start.ts)_
<!-- commandsstop -->
