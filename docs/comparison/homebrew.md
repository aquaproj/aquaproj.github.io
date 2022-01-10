---
sidebar_position: 100
---

# Homebrew

## Pros

* aqua supports changing tool versions per project
* aqua forces to pin tool version, which solves the problem due to the different of version
* aqua's command is always `aqua i [-l]`. You don't have to specify tool names. It's user friendly
* aqua is a single binary written in Go, so it is easy to install aqua in a container

## Cons

* aqua's install process is very simple.

    1. Download tool
    1. Unarchive tool in $AQUA_ROOT_DIR

  aqua doesn't support running commands after unarchiving.
  So aqua doesn't support installing tools which some commands are required.
* aqua doesn't support installing dependent tools automatically

## Homebrew Bundle

With [Homebrew Bundle](https://github.com/Homebrew/homebrew-bundle), you can manage tools with Configuration file same as aqua.
But even if Brewfile is updated, tools aren't updated until `brew bundle` explicitly.

On the other hand, aqua supports [Lazy Install](/docs/tutorial-basics/lazy-install) so the update of aqua.yaml is reflected automatically.
