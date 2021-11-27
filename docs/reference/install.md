---
sidebar_position: 100
---

# Install

aqua is a single binary written in Go.

1. Install the binary `aqua` in `PATH`
1. add `~/.aqua/bin` to the environment variable `PATH`

## Homebrew

```console
$ brew install aquaproj/aqua/aqua
$ export PATH=$HOME/.aqua/bin:$PATH
```

## Install script

[aqua-installer](https://github.com/aquaproj/aqua-installer)

## GitHub Actions

* [int128/aqua-action](https://github.com/int128/aqua-action)
* [aqua-installer](https://github.com/aquaproj/aqua-installer)

aqua-installer just installs aqua.
On the other hand, [int128/aqua-action](https://github.com/int128/aqua-action) installs aqua and runs `aqua install` and cache tools.

## CircleCI Orb

https://circleci.com/developer/orbs/orb/aquaproj/aqua

## Download from GitHub Releases

https://github.com/aquaproj/aqua/releases
