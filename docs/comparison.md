---
sidebar_position: 400
---

# Comparison

## Compared tools

* Package Manager such as Homebrew, apt, yum
  * [Homebrew Bundle](https://github.com/Homebrew/homebrew-bundle)
* pyenv, rbenv, tfenv, and etc
* [asdf](https://asdf-vm.com/)
* Manual download and install tools
* GitHub Actions (Many GitHub Actions for a tool installs the tool automatically before executing it)

## Package Manager such as Homebrew, apt, and yum

### Pros

* Package Manager such as Homebrew doesn't support changing tool versions per project.
* Unlike these tools, aqua forces to pin tool version, which solves the problem due to the different of version.
* aqua's command is always `aqua i [-l]`. You don't have to specify tool names. It's user friendly.

### Cons

* aqua's install process is very simple.

    1. Download tool
    1. Unarchive tool in ~/.aqua

  aqua doesn't support running commands after unarchiving.
  So aqua doesn't support installing tools which some commands are required.
* aqua doesn't support installing dependent tools automatically

## Homebrew Bundle

With [Homebrew Bundle](https://github.com/Homebrew/homebrew-bundle), you can manage tools with Configuration file same as aqua.
But even if Brewfile is updated, tools aren't updated until `brew bundle` explicitly.

On the other hand, aqua supports [Lazy Install](tutorial-basics/lazy-install) so the update of aqua.yaml is reflected automatically.

## pyenv, rbenv, tfenv, and etc

### Pros

These tools are specialized for the specific tool such as Python, Ruby, and Terraform.
aqua is more general.
aqua is written in Go, so aqua doesn't depend on the specific shell.

### Cons

aqua doesn't support building the tool when installing. So aqua doesn't support tools which the build is required.

## GitHub Actions

Many GitHub Actions installs the tool automatically before executing it.
For example, [GitHub Actions for golangci-lint](https://golangci-lint.run/usage/install#github-actions) installs golangci-lint automatically.
It's very easy to use, but there are some problems.

* Some GitHub Actions don't force to pin the tool version, which may raise the problem
* When you pin the tool version, you have to update the tool version continuously.
  Update Automation tool such as Dependabot and Renovate don't update it automatically.
  In case of Renovate, you have to configure Regex Manager per tool
* GitHub Actions doesn't support installing tools for local development
* It is difficult to unify the tool version in local development and CI

aqua solves these problems.

* aqua forces to pin the tool version
* aqua provides [Renovate Preset](https://github.com/aquaproj/aqua-renovate-config), so you can update tools by Renovate without configuring
* aqua supports both local development and CI
* you can use the same tool version in local development and CI naturally

## Manual download and install tools

It is bothersome to download and install tools manually and it is difficult to update tools continuously.
aqua automates this process.

## Others

### Pros

* aqua supports installing tools from the private repositories

### Cons

* aqua doesn't support Windows
