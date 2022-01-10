---
sidebar_position: 50
---

# Common Pros and Cons

## Pros

* aqua supports changing tool versions per project
* aqua forces to pin tool version, which solves the problem due to the different of version
* It is easy to use aqua
  * [aqua manages tools declaratively](/docs/reference/declarative-imperative)
    * aqua's command is always `aqua i [-l]`. You don't have to specify tool names. It's user friendly
* aqua provides Renovate Preset Config
* aqua provides GitHub Actions and CircleCI Orb
* aqua supports Lazy Install
* aqua supports installing tools from the private repositories

## Cons

* aqua doesn't support Windows
* aqua's install process is very simple.

    1. Download tool
    1. Unarchive tool in $AQUA_ROOT_DIR

  aqua doesn't support running commands after unarchiving.
  So aqua doesn't support installing tools which some commands are required.
* aqua doesn't support installing dependent tools automatically
