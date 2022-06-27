---
sidebar_position: 50
---

# Common Pros and Cons

## Pros

* clivm supports changing tool versions per project
* clivm forces to pin tool version, which solves the problem due to the different of version
* It is easy to use clivm
  * [clivm manages tools declaratively](/docs/reference/declarative-imperative)
    * clivm's command is always `clivm i [-l]`. You don't have to specify tool names. It's user friendly
* clivm provides Renovate Preset Config
* clivm provides GitHub Actions and CircleCI Orb
* clivm supports Lazy Install
* clivm supports installing tools from the private repositories
* clivm supports Windows, macOS, and Linux

:::info
From clivm v1.12.0, clivm supports Windows.
Please see [Windows Support](/docs/reference/windows-support) too.
:::

## Cons


* clivm's install process is very simple.

    1. Download tool
    1. Unarchive tool in $CLIVM_ROOT_DIR

  clivm doesn't support running commands after unarchiving.
  So clivm doesn't support installing tools which some commands are required.

:::info
clivm supports building Go tools. Pl
Please see [`go` Package](/docs/reference/registry-config/go-package), [`go_install` Package](http://localhost:3000/docs/reference/registry-config/go-install-package), and [blog post](/blog/2022/05/30/support-building-go-tools).
:::

* clivm doesn't support installing dependent tools automatically
