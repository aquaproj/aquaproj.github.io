---
sidebar_position: 430
---

# Windows Support

`aqua >= v1.12.0`

[#850](https://github.com/aquaproj/aqua/issues/850)
[Project#4](https://github.com/orgs/aquaproj/projects/4)

The author [@suzuki-shunsuke](https://github.com/suzuki-shunsuke) doesn't use Windows, so the help of Windows Users is welcome.

## Develop environment

The author [@suzuki-shunsuke](https://github.com/suzuki-shunsuke) tests the Windows Support on the following environments.

* [Amazon Workspaces](https://aws.amazon.com/workspaces/) `Standard with Windows 10 (Server 2019 based) (PCoIP)`
* GitHub Actions' `windows-latest`

Terminals

* Command Prompt
* PowerShell
* Git Bash (mingw)

## How to install

There are several installation ways.

1. [Winget](https://learn.microsoft.com/en-us/windows/package-manager/winget/)

From [aqua v2.17.4](https://github.com/aquaproj/aqua/releases/tag/v2.17.4), you can install aqua by Winget.

```sh
winget install aquaproj.aqua
```

:::caution
Due to the mechanism of Winget, it takes a few days at most until we can install the latst version after the latest version has been released.
Everytime a new version is released, we need to send a pull request to [microsoft/winget-pkgs](https://github.com/microsoft/winget-pkgs) and wait until the pull request is merged.
[The list of pull requests](https://github.com/microsoft/winget-pkgs/pulls?q=is%3Aopen+is%3Apr+author%3Asuzuki-shunsuke+aquaproj.aqua+in%3Atitle)
:::

2. [Scoop](https://scoop.sh/)

From [aqua v2.16.2](https://github.com/aquaproj/aqua/releases/tag/v2.16.2), you can also install aqua by Scoop.

```sh
scoop bucket add aquaproj https://github.com/aquaproj/scoop-bucket
scoop install aqua
```

3. Download an asset from [GitHub Releases](https://github.com/aquaproj/aqua/releases) and install an executable binary into `PATH`
4. [go install](/docs/install#go)

## The install path (AQUA_ROOT_DIR)

From aqua v1.12.0, the default value of `AQUA_ROOT_DIR` is `$HOME/AppData/Local/aquaproj-aqua`.

## PATH

* Command Prompt,PowerShell: `AQUA_ROOT_DIR/bat`
* Git Bash: `AQUA_ROOT_DIR/bin`

## The separator of AQUA_GLOBAL_CONFIG

* Command Prompt, PowerShell: `;`
* Git Bash: `:`

## Required Standard Registry Version

Please upgrade [Standard Registry](https://github.com/aquaproj/aqua-registry) to v2.28.1 or later.

## Windows Settings

aqua works even if `Developer Mode` is disabled.
And you don't have to run the terminal as Administrator.

### Windows Security

:::caution
Please change the settings at your own risk.
:::

Security software may prevent aqua from installing and running tools.
In that case, you may have to add `AQUA_ROOT_DIR` to security software's exclusion. 

## Windows Support of installed tools

Note that some tools don't support Windows.
aqua skips installing those tools on Windows with [supported_if](/docs/reference/registry-config/supported-if) or [supported_envs](/docs/reference/registry-config/supported-envs).

### tools written in shell scripts aren't supported

Currently, tools written in shell scripts aren't supported.

## Windows specific features

### Auto complesion of the file extension

Please see [complete_windows_ext](/docs/reference/registry-config/complete-windows-ext).

### Create BAT files and shell scripts instead of symbolic links and aqua-proxy

[#885](https://github.com/aquaproj/aqua/issues/885) [#892](https://github.com/aquaproj/aqua/pull/892) [#893](https://github.com/aquaproj/aqua/issues/893) aqua >= v1.12.0

Reference (Japanese): https://zenn.dev/link/comments/725555a2b1b034

aqua creates executable BAT files and shell scripts in directories `AQUA_ROOT_DIR/bin` and `AQUA_ROOT_DIR/bat` instead of symbolic links.

If you use PowerShell or Command Prompt, please add `AQUA_ROOT_DIR/bat` to the environment variable `PATH`.
Or if you use Git Bash, please add `AQUA_ROOT_DIR/bin` to the environment variable `PATH`.

#### Why is this change needed?

On Windows, there are two problems regarding symbolic links.

1. To create symbolic links, you have to run Terminal (cmd.exe, PowerShell, Git Bash, etc) as Administrator or enable Developer Mode
1. PowerShell has a bug about symbolic link https://github.com/PowerShell/PowerShell/issues/16171

## Trouble Shooting

### GitHub Action aqua-installer doesn't work on Windows Runner

We are working on it.

* https://github.com/aquaproj/aqua-installer/issues/116
* https://github.com/aquaproj/aqua-installer/issues/117

### Interactive Search by `aqua g` doesn't work on Git Bash

The guide of `gh auth login` is helpful.

https://github.com/ktr0731/go-fuzzyfinder/issues/2#issuecomment-1154872091

> You appear to be running in MinTTY without pseudo terminal support.
> 
> MinTTY is the terminal emulator that comes by default with Git
> for Windows. It has known issues with gh's ability to prompt a
> user for input.
> 
> There are a few workarounds to make gh work with MinTTY:
> 
> - Reinstall Git for Windows, checking "Enable experimental support for pseudo consoles".
> 
> ![image](https://user-images.githubusercontent.com/13323303/173531978-21a99818-11ff-4385-962a-64f74e4023db.png)
> 
> - Use a different terminal emulator with Git for Windows like Windows Terminal.
>   You can run "C:\Program Files\Git\bin\bash.exe" from any terminal emulator to continue
>   using all of the tooling in Git For Windows without MinTTY.
> 
> - Prefix invocations of gh with winpty, eg: "winpty gh auth login".
>   NOTE: this can lead to some UI bugs.
