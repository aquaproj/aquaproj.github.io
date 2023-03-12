---
sidebar_position: 150
---

# Install

aqua is a single binary written in Go.

1. Install the binary `aqua` in `PATH`
1. add `${AQUA_ROOT_DIR}/bin` to the environment variable `PATH`

:::info
If you use aqua combined with other version manager such as asdf,
please add `${AQUA_ROOT_DIR}/bin` to the environment variable `PATH` after other version manager.
For detail, please see [here](/docs/reference/use-aqua-with-other-tools).
:::

:::info
[Shell Completion](/docs/reference/config/shell-completion)
:::

## Windows

Pleaase see [here](/docs/reference/windows-support#how-to-install).

## Homebrew

```sh
brew install aquaproj/aqua/aqua
export PATH="${AQUA_ROOT_DIR:-${XDG_DATA_HOME:-$HOME/.local/share}/aquaproj-aqua}/bin:$PATH"
```

## Install script, GitHub Actions

[aqua-installer](/docs/products/aqua-installer)

## Go

```sh
go install github.com/aquaproj/aqua/cmd/aqua@latest
```

## Download from GitHub Releases

https://github.com/aquaproj/aqua/releases
