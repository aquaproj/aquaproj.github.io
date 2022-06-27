---
sidebar_position: 500
---

# asdf

https://asdf-vm.com/

## Common

* Support installing tools in local and global
* Have plugin mechanism
* GitHub Actions

## Difference between clivm Registry and asdf Plugin

clivm Registry is different from asdf Plugin.

asdf Plugin

* Create a Repository per tool
* Install tool with Shell Script
* Manage the plugin list in https://github.com/asdf-vm/asdf-plugins

clivm Registry

* Manage multiple tools in a Registry
* Registry is YAML
* There is a Registry named `Standard Registry`
* Install Process is restricted and exteranl commands aren't available

Due to the restriction, clivm can't support some tools.
But clivm Registry Configuration is simple due to this restriction. You don't have to write shell scripts.

### Security

asdf Plugin executes shell scripts, so there is a security concern.
asdf has a [Security Policy](https://github.com/asdf-vm/asdf-plugins#security), but it is difficult to prevent malicious code from being executed mechanically.

clivm doesn't execute the external commands, so it is safe.

### Maintainability, readability, and ownership

When you support a new tool for asdf, you would create an asdf plugin.

* https://asdf-vm.com/plugins/create.html
* https://github.com/asdf-vm/asdf-plugin-template

You have to create a GitHub Repository based on the Template Repository and write shell scripts.
You have to maintain the plugin by yourself.

The quality of shell scripts depends on developers and it may be difficult to read.
The shell script may have some dependencies.
Some third party plugins may not be maintained.

On the other hand, in case of clivm you would create an issue or pull request to clivm's Standard Registry.

Sending a pull request to clivm's Standard Registry is easier than creating an asdf plugin.
You can only write declarative YAML configuration based on existing Registry configuration.

For example, plase see the pull request to support velero.

https://github.com/clivm/clivm-registry/pull/1281

This pull request includes only 11 lines YAML configuration.
The configuration would be maintained in the Standard Registry.
You don't have to maintain it by yourself.
clivm doesn't depend on other than OS and CPU architecture.
clivm's Registry Configuration is easier to read than shell script.

### Plugin Version Management

clivm forces to pin Registry version in clivm.yaml, which ensures the reproductivity.
You can update the Registry version with Renovate easily.

On the other hand, asdf doesn't force to pin the plugin version.

## Continous update

clivm provides Renovate Preset Config and you can easily update tools continuously.
The package name of clivm is same as GitHub Repository owner and name, so you can update it with Renovate's github_release Datasource.

On the other hand, there is an issue to support Renovate Manager for asdf but this isn't supported yet.
And there is no general Renovate Config Preset for asdf.
The asdf plugin name is basically different from GitHub Repository owner and name, so it is difficult to update it with Renovate machanically. You have to write code to update it per tool.

## Behaviour when invoked tool isn't installed

When a tool is invoked but this isn't installed yet,
clivm installs it automatically and executes it.
We name this feature as `Lazy Install`.

On the other hand, asdf doesn't install the tool automatically.
asdf outputs the guide and exits with non zero code.

## clivm's additional features

* [Share clivm configuration for teams and organizations with CLIVM_GLOBAL_CONFIG](https://clivm.github.io/docs/tutorial-extras/team-config)
* [Split the list of packages](https://clivm.github.io/docs/tutorial-extras/split-config)
* CircleCI Orb

## asdf's additional features

### Support existing config files

asdf supports for existing config files .nvmrc, .node-versions, .ruby-version for smooth migration.
On the other hand, clivm doesn't support them.

### List up available tool versions

asdf supports listing up available tool versions.
On the other hand, clivm doesn't support the feature for now.

### Support Optional Scripts

https://asdf-vm.com/plugins/create.html#optional-scripts
