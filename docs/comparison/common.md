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
* aqua supports Windows, macOS, and Linux

:::info
From aqua v1.12.0, aqua supports Windows.
Please see [Windows Support](/docs/reference/windows-support) too.
:::

## Cons


* aqua's install process is very simple.

    1. Download tool
    1. Unarchive tool in $AQUA_ROOT_DIR

  aqua doesn't support running commands after unarchiving.
  So aqua doesn't support installing tools which some commands are required.

:::info
aqua supports building Go tools. Pl
Please see [`go` Package](/docs/reference/registry-config/go-package), [`go_install` Package](http://localhost:3000/docs/reference/registry-config/go-install-package), and [blog post](/blog/2022/05/30/support-building-go-tools).
:::

* aqua doesn't support installing dependent tools automatically
