---
sidebar_position: 100
---

# Install

aqua is a single binary written in Go.

1. Install the binary `aqua` in `PATH`
1. add `${AQUA_ROOT_DIR}/bin` to the environment variable `PATH`

## Windows

Pleaase see [here](/docs/reference/windows-support#how-to-install).

## Homebrew

```console
$ brew install aquaproj/aqua/aqua
$ export PATH="${AQUA_ROOT_DIR:-${XDG_DATA_HOME:-$HOME/.local/share}/aquaproj-aqua}/bin:$PATH"
```

## Install script

[aqua-installer](https://github.com/aquaproj/aqua-installer)

## GitHub Actions

* [aqua-installer](https://github.com/aquaproj/aqua-installer)

## CircleCI Orb

https://circleci.com/developer/orbs/orb/aquaproj/aqua

## Download from GitHub Releases

https://github.com/aquaproj/aqua/releases
