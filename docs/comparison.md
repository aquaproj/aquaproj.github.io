---
sidebar_position: 400
---

# Comparison

## Compared tools

* Package Manager such as Homebrew, apt, yum
* pyenv, rbenv, tfenv
* [asdf](https://asdf-vm.com/)
* Manual download and install tools

## Pros

* aqua forces to pin tools version, which solve the problem due to the difference of tool version
* aqua's command is always `aqua i [-l]`. You don't have to specify tool names
* aqua supports both Mac OSX and Linux
* aqua is CI friendly. You can easily cache tools
* aqua is Renovate friendly. You can update tools continuously
* With aqua, you can install the latest version
On the other hand, in case of some package managers you can't install the latest version
* aqua supports installing tools from the private repositories
* aqua supports managing tools version per project
* Tools like pyenv, rbenv, and tfenv are tools for the specific tool. On the other hand, aqua is more general
* aqua is written in Go. aqua doesn't depend on the specific shell
* It is bothersome to download and install tools manually and it is difficult to update tools continuously. aqua automates this process

## Cons

* aqua doesn't support Windows
* aqua's install process is very simple

    1. Download tool
    1. Unarchive tool in ~/.aqua

  aqua doesn't support running commands after unarchiving.
  So aqua doesn't support installing tools which some commands are required.
