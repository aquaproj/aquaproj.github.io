---
sidebar_position: 100
---

# Quick Start

aqua is a CLI tool to install CLI tools with declarative YAML configuration.
In this quick start, let's install aqua and install tools with aqua.

## Install aqua

Homebrew

```console
$ brew install aquaproj/aqua/aqua
```

Install script ([aqua-installer](https://github.com/aquaproj/aqua-installer))

```console
$ curl -sSfL \
  https://raw.githubusercontent.com/aquaproj/aqua-installer/v0.3.0/aqua-installer |
  bash
# You can change the install path.
# bash -s -- -i ~/bin/aqua
```

Add `~/.aqua/bin` to the environmenet variable `PATH`.

```console
$ export PATH=$HOME/.aqua/bin:$PATH
```

Confirm if aqua installed correctly.

```console
$ aqua -v
```

## Install tools with aqua

Let's install [GitHub Official CLI](https://cli.github.com/) and [fzf](https://github.com/junegunn/fzf) with aqua.

Write a YAML configuration file `aqua.yaml`.

```yaml
registries:
- type: standard
  ref: v0.10.8 # renovate: depName=aquaproj/aqua-registry

packages:
- name: cli/cli@v2.2.0
- name: junegunn/fzf@0.28.0
```

Then run `aqua i`.

```console
$ aqua i 
INFO[0000] download and unarchive the package            aqua_version=0.8.0 package_name=aqua-proxy package_version=v0.2.0 program=aqua registry=inline
INFO[0000] create a symbolic link                        aqua_version=0.8.0 link_file=/home/foo/.aqua/bin/aqua-proxy new=../pkgs/github_release/github.com/aquaproj/aqua-proxy/v0.2.0/aqua-proxy_linux_amd64.tar.gz/aqua-proxy program=aqua
INFO[0001] create a symbolic link                        aqua_version=0.8.0 link_file=/home/foo/.aqua/bin/gh new=aqua-proxy program=aqua
INFO[0001] create a symbolic link                        aqua_version=0.8.0 link_file=/home/foo/.aqua/bin/fzf new=aqua-proxy program=aqua
INFO[0001] download and unarchive the package            aqua_version=0.8.0 package_name=junegunn/fzf package_version=0.28.0 program=aqua registry=standard
INFO[0001] download and unarchive the package            aqua_version=0.8.0 package_name=cli/cli package_version=v2.2.0 program=aqua registry=standard
```

Congratulation! Tools are installed correctly.

```console
$ command -v gh
/home/foo/.aqua/bin/gh

$ gh version
gh version 2.2.0 (2021-10-25)
https://github.com/cli/cli/releases/tag/v2.2.0

$ command -v fzf
/home/foo/.aqua/bin/fzf

$ fzf --version
0.28.0 (e4c3ecc)
```

aqua installs tools in `~/.aqua` by default.
