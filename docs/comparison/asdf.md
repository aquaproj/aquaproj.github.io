---
sidebar_position: 500
---

# asdf

https://asdf-vm.com/

## Blogs

* [2021-12-23 Why I use aqua](https://dev.to/suzukishunsuke/why-i-use-aqua-230)
* [2021-12-09 aqua と asdf の違い](https://zenn.dev/shunsuke_suzuki/articles/compare-aqua-with-asdf)
* [2021-12-10 新しいツールへの対応を asdf と aqua で比較](https://zenn.dev/shunsuke_suzuki/articles/create-asdf-plugin-to-compare-aqua)

## Common

* Support installing tools in local and global
* Have plugin mechanism
* GitHub Actions

## Difference between aqua Registry and asdf Plugin

aqua Registry is different from asdf Plugin.

asdf Plugin

* Create a Repository per tool
* Install tool with Shell Script
* Manage the plugin list in https://github.com/asdf-vm/asdf-plugins

aqua Registry

* Manage multiple tools in a Registry
* Registry is YAML
* There is a Registry named `Standard Registry`
* Install Process is restricted and exteranl commands aren't available

Due to the restriction, aqua can't support some tools.
But aqua Registry Configuration is simple due to this restriction. You don't have to write shell scripts.

### Security

asdf Plugin executes shell scripts, so there is a security concern.
asdf has a [Security Policy](https://github.com/asdf-vm/asdf-plugins#security), but it is difficult to prevent malicious code from being executed mechanically.

aqua doesn't execute the external commands, so it is safe.

### Maintainability, readability, and ownership

When you support a new tool for asdf, you would create an asdf plugin.

* https://asdf-vm.com/plugins/create.html
* https://github.com/asdf-vm/asdf-plugin-template

You have to create a GitHub Repository based on the Template Repository and write shell scripts.
You have to maintain the plugin by yourself.

The quality of shell scripts depends on developers and it may be difficult to read.
The shell script may have some dependencies.
Some third party plugins may not be maintained.

On the other hand, in case of aqua you would create an issue or pull request to aqua's Standard Registry.

Sending a pull request to aqua's Standard Registry is easier than creating an asdf plugin.
You can only write declarative YAML configuration based on existing Registry configuration.

For example, plase see the pull request to support velero.

https://github.com/aquaproj/aqua-registry/pull/1281

This pull request includes only 11 lines YAML configuration.
The configuration would be maintained in the Standard Registry.
You don't have to maintain it by yourself.
aqua doesn't depend on other than OS and CPU architecture.
aqua's Registry Configuration is easier to read than shell script.

### Plugin Version Management

aqua forces to pin Registry version in aqua.yaml, which ensures the reproductivity.
You can update the Registry version with Renovate easily.

On the other hand, asdf doesn't force to pin the plugin version.

## Continous update

aqua provides Renovate Preset Config and you can easily update tools continuously.
The package name of aqua is same as GitHub Repository owner and name, so you can update it with Renovate's github_release Datasource.

On the other hand, there is an issue to support Renovate Manager for asdf but this isn't supported yet.
And there is no general Renovate Config Preset for asdf.
The asdf plugin name is basically different from GitHub Repository owner and name, so it is difficult to update it with Renovate machanically. You have to write code to update it per tool.

## Behaviour when invoked tool isn't installed

When a tool is invoked but this isn't installed yet,
aqua installs it automatically and executes it.
We name this feature as `Lazy Install`.

On the other hand, asdf doesn't install the tool automatically.
asdf outputs the guide and exits with non zero code.

## aqua's additional features

* [Share aqua configuration for teams and organizations with AQUA_GLOBAL_CONFIG](https://aquaproj.github.io/docs/tutorial-extras/team-config)
* [Split the list of packages](https://aquaproj.github.io/docs/tutorial-extras/split-config)
* CircleCI Orb

## asdf's additional features

### Support existing config files

asdf supports for existing config files .nvmrc, .node-versions, .ruby-version for smooth migration.
On the other hand, aqua doesn't support them.

### Support Optional Scripts

https://asdf-vm.com/plugins/create.html#optional-scripts
