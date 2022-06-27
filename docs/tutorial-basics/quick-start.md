---
sidebar_position: 100
---

# Quick Start

clivm is a CLI tool to install CLI tools with declarative YAML configuration.
In this quick start, let's install clivm and install tools with clivm.

## Demo

Please see [Demo](https://asciinema.org/a/498262?autoplay=1).

## Quick Start with Katacoda

You can do the Quick Start with [Katacoda](https://www.katacoda.com/).
You don't have to install anything in your laptop.
The content is same as this document.

https://www.katacoda.com/szksh/scenarios/clivm-quick-start

ref. [Source code of the scenario](https://github.com/suzuki-shunsuke/katacoda-scenarios/tree/master/clivm-quick-start)

## Install clivm

Homebrew

```console
$ brew install clivm/clivm/clivm
```

Install script ([clivm-installer](https://github.com/clivm/clivm-installer))

```console
$ curl -sSfL \
  https://raw.githubusercontent.com/clivm/clivm-installer/v1.0.0/clivm-installer |
  bash
# You can change the install path.
# bash -s -- -i ~/bin/clivm
```

Add `${CLIVM_ROOT_DIR}/bin` to the environmenet variable `PATH`.

```console
$ export PATH="${CLIVM_ROOT_DIR:-${XDG_DATA_HOME:-$HOME/.local/share}/clivm}/bin:$PATH"
```

Confirm if clivm is installed correctly.

```console
$ clivm -v
```

If you want to try this tutorial in the clean environment, container is useful.

```console
$ docker run --rm -ti alpine:3.15.0 sh
# apk add curl
# curl -sSfL \
  https://raw.githubusercontent.com/clivm/clivm-installer/v1.0.0/clivm-installer |
  sh
# adduser -D foo
# su foo
$ mkdir ~/workspace
$ cd ~/workspace
$ export PATH="${CLIVM_ROOT_DIR:-${XDG_DATA_HOME:-$HOME/.local/share}/clivm}/bin:$PATH"
```

## Create a configuration file

Create a configuration file by `clivm init` command.

```console
$ clivm init # clivm.yaml is created
$ cat clivm.yaml
---
# clivm - Declarative CLI Version Manager
# https://clivm.github.io/
registries:
- type: standard
  ref: v2.22.0 # renovate: depName=clivm/clivm-registry
packages:
```

`packages` is still empty, so let's add packages to install them.

## Install tools with clivm

Let's install [GitHub Official CLI](https://cli.github.com/) and [fzf](https://github.com/junegunn/fzf) with clivm.

Add packages to `clivm.yaml`.

```console
$ clivm g -i cli/cli junegunn/fzf
```

```yaml
---
# clivm - Declarative CLI Version Manager
# https://clivm.github.io/
registries:
- type: standard
  ref: v2.22.0 # renovate: depName=clivm/clivm-registry
packages:
- name: cli/cli@v2.2.0
- name: junegunn/fzf@0.28.0
```

Then run `clivm i`.

```console
$ clivm i 
INFO[0000] download and unarchive the package            clivm_version=1.3.0 package_name=clivm-proxy package_version=v0.2.1 program=clivm registry=
INFO[0001] create a symbolic link                        clivm_version=1.3.0 link_file=/home/foo/.local/share/clivm/bin/clivm-proxy new=../pkgs/github_release/github.com
/clivm/clivm-proxy/v0.2.1/clivm-proxy_linux_amd64.tar.gz/clivm-proxy program=clivm
INFO[0001] create a symbolic link                        clivm_version=1.3.0 link_file=/home/foo/.local/share/clivm/bin/gh new=clivm-proxy program=clivm
INFO[0001] create a symbolic link                        clivm_version=1.3.0 link_file=/home/foo/.local/share/clivm/bin/fzf new=clivm-proxy program=clivm
INFO[0001] download and unarchive the package            clivm_version=1.3.0 package_name=cli/cli package_version=v2.2.0 program=clivm registry=standard
INFO[0001] download and unarchive the package            clivm_version=1.3.0 package_name=junegunn/fzf package_version=0.28.0 program=clivm registry=standard
```

Congratulation! Tools are installed correctly.

```console
$ command -v gh
/home/foo/.local/share/clivm/bin/gh

$ gh version
gh version 2.2.0 (2021-10-25)
https://github.com/cli/cli/releases/tag/v2.2.0

$ command -v fzf
/home/foo/.local/share/clivm/bin/fzf

$ fzf --version
0.28.0 (e4c3ecc)
```

clivm installs tools in `${CLIVM_ROOT_DIR}`.
