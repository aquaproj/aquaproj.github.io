---
sidebar_position: 150
---

# Install

aqua is a single binary written in Go.

1. Install the binary `aqua` in `PATH`
1. Set the environment variable `PATH`
1. [(Optional) Shell completion](/docs/reference/config/shell-completion)

## 1. Install the binary `aqua` in `PATH`

- [Homebrew](#homebrew)
- Windows
  - [Winget](#winget)
  - [Scoop](#scoop)
- [aqua-installer (Shell Script)](/docs/products/aqua-installer#shell-script)
- [aqua-installer (GitHub Actions)](/docs/products/aqua-installer#github-actions)
- [CircleCI Orb](/docs/products/circleci-orb-aqua)
- [go install](#go-install)
- [Dev Container Feature](https://github.com/aquaproj/devcontainer-features/tree/main/src/aqua-installer)
- [Download prebuilt binaries from GitHub Releases](#download-prebuilt-binaries-from-github-releases)

### Homebrew

```sh
brew install aquaproj/aqua/aqua
```

### Winget

From [aqua v2.17.4](https://github.com/aquaproj/aqua/releases/tag/v2.17.4), you can install aqua by [Winget](https://learn.microsoft.com/en-us/windows/package-manager/winget/).

```sh
winget install aquaproj.aqua
```

:::caution
Due to the mechanism of Winget, it takes a few days at most until we can install the latest version after the latest version has been released.
Everytime a new version is released, we need to send a pull request to [microsoft/winget-pkgs](https://github.com/microsoft/winget-pkgs) and wait until the pull request is merged.
[The list of pull requests](https://github.com/microsoft/winget-pkgs/pulls?q=is%3Aopen+is%3Apr+author%3Asuzuki-shunsuke+aquaproj.aqua+in%3Atitle)
:::

### Scoop

From [aqua v2.16.2](https://github.com/aquaproj/aqua/releases/tag/v2.16.2), you can also install aqua by [Scoop](https://scoop.sh/).

```sh
scoop bucket add aquaproj https://github.com/aquaproj/scoop-bucket
scoop install aqua
```

### go install

```sh
go install github.com/aquaproj/aqua/v2/cmd/aqua@latest
```

### Download prebuilt binaries from GitHub Releases

https://github.com/aquaproj/aqua/releases

## 2. Set the environment variable `PATH`

:::info
From aqua v2.8.0, `aqua root-dir` command is available.

```bash
export PATH="$(aqua root-dir)/bin:$PATH"
```
:::

:::tip
If you use aqua combined with other version manager such as asdf,
please add `${AQUA_ROOT_DIR}/bin` to the environment variable `PATH` after other version manager.
For detail, please see [here](/docs/reference/use-aqua-with-other-tools).
:::

### Linux, macOS

```sh
export PATH="${AQUA_ROOT_DIR:-${XDG_DATA_HOME:-$HOME/.local/share}/aquaproj-aqua}/bin:$PATH"
```

### Windows

About Windows, please see [here](/docs/reference/windows-support) too.

- Git Bash (mingw)
- PowerShell
- Command Prompt

#### Git Bash (mingw)

```sh
export PATH="${AQUA_ROOT_DIR:-${XDG_DATA_HOME:-${LOCALAPPDATA:-$HOME/AppData/Local}}/aquaproj-aqua}/bin:$PATH"
```

The order of priority is as follows:

1. `$AQUA_ROOT_DIR/bin`: If `$AQUA_ROOT_DIR` is set
1. `$XDG_DATA_HOME/aquaproj-aqua/bin`: If `$XDG_DATA_HOME` is set
1. `$LOCALAPPDATA/aquaproj-aqua/bin`: If `$LOCALAPPDATA` is set
1. `$HOME/AppData/Local/aquaproj-aqua/bin`

#### PowerShell

```sh
Set-Item Env:Path "$Env:LOCALAPPDATA\aquaproj-aqua\bat;$Env:LOCALAPPDATA\aquaproj-aqua\bin;$Env:Path"
```

If `LOCALAPPDATA` isn't set,

```sh
Set-Item Env:Path "$Env:HOMEPATH\AppData\Local\aquaproj-aqua\bat;$Env:HOMEPATH\AppData\Local\aquaproj-aqua\bin;$Env:Path"
```

You can customize the path with the environment variable `AQUA_ROOT_DIR`.

```sh
Set-Item Env:Path "$Env:AQUA_ROOT_DIR\bat;$Env:AQUA_ROOT_DIR\bin;$ENV:Path"
```

#### Command Prompt

```sh
SET PATH=%LOCALAPPDATA%\aquaproj-aqua\bat;%LOCALAPPDATA%\aquaproj-aqua\bin;%PATH%
```

If `LOCALAPPDATA` isn't set,

```sh
SET PATH=%HOMEPATH%\AppData\Local\aquaproj-aqua\bat;%HOMEPATH%\AppData\Local\aquaproj-aqua\bin;%PATH%
```

You can also customize the path with the environment variable `AQUA_ROOT_DIR`.

```sh
SET PATH=%AQUA_ROOT_DIR%\bat;%AQUA_ROOT_DIR%\bin;%PATH%
```
