---
sidebar_position: 880
---

# Windows Support

`aqua >= v1.11.0`

:::caution
aqua doesn't support Windows yet. You shouldn't use aqua on Windows yet.
:::

aqua doesn't support Windows yet, but we are working on it.

https://github.com/aquaproj/aqua/issues/850

The current Windows Support is still **alpha** version.
Some specification would be changed.

The author [@suzuki-shunsuke](https://github.com/suzuki-shunsuke) doesn't use Windows, so the help of Windows Users is welcome.

## Develop environment

The author [@suzuki-shunsuke](https://github.com/suzuki-shunsuke) tests the Windows Support on the following environments.

* [Amazon Workspaces](https://aws.amazon.com/workspaces/) `Standard with Windows 10 (Server 2019 based) (PCoIP)`
* GitHub Actions' `windows-latest`

## The install path (AQUA_ROOT_DIR)

Currently, the default value of `AQUA_ROOT_DIR` is `${XDG_DATA_HOME:-$HOME/.local/share}/aquaproj-aqua`, but maybe it will be changed.

## Auto complesion of the file extension `.exe`

Coming soon.

## Trouble Shooting

### GitHub Action aqua-installer doesn't work on Windows Runner

We are working on it.

### Windows Support of the Standard Registry

We are working on it.

https://github.com/aquaproj/aqua/issues/850#issuecomment-1153578462

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
