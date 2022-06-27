---
sidebar_position: 100
---

# Homebrew

## Pros

* clivm supports changing tool versions per project
* clivm forces to pin tool version, which solves the problem due to the different of version
* clivm's command is always `clivm i [-l]`. You don't have to specify tool names. It's user friendly
* clivm is a single binary written in Go, so it is easy to install clivm in a container

## Cons

* clivm's install process is very simple.

    1. Download tool
    1. Unarchive tool in $CLIVM_ROOT_DIR

  clivm doesn't support running commands after unarchiving.
  So clivm doesn't support installing tools which some commands are required.
* clivm doesn't support installing dependent tools automatically

## Homebrew Bundle

With [Homebrew Bundle](https://github.com/Homebrew/homebrew-bundle), you can manage tools with Configuration file same as clivm.
But even if Brewfile is updated, tools aren't updated until `brew bundle` explicitly.

On the other hand, clivm supports [Lazy Install](/docs/tutorial-basics/lazy-install) so the update of clivm.yaml is reflected automatically.
