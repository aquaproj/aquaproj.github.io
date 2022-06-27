---
sidebar_position: 100
---

# Install

clivm is a single binary written in Go.

1. Install the binary `clivm` in `PATH`
1. add `${CLIVM_ROOT_DIR}/bin` to the environment variable `PATH`

## Windows

Pleaase see [here](/docs/reference/windows-support#how-to-install).

## Homebrew

```console
$ brew install clivm/clivm/clivm
$ export PATH="${CLIVM_ROOT_DIR:-${XDG_DATA_HOME:-$HOME/.local/share}/clivm}/bin:$PATH"
```

## Install script

[clivm-installer](https://github.com/clivm/clivm-installer)

## GitHub Actions

* [clivm-installer](https://github.com/clivm/clivm-installer)

## CircleCI Orb

https://circleci.com/developer/orbs/orb/clivm/clivm

## Download from GitHub Releases

https://github.com/clivm/clivm/releases
