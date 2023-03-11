---
sidebar_position: 100
---

# Quick Start

aqua is a CLI tool to install CLI tools with declarative YAML configuration.
In this quick start, let's install aqua and install tools with aqua.

## Demo

Please see [Demo](https://asciinema.org/a/498262?autoplay=1).

## Install aqua

Homebrew

```console
brew install aquaproj/aqua/aqua
```

[aqua-installer](https://github.com/aquaproj/aqua-installer)

```console
curl -sSfL -O https://raw.githubusercontent.com/aquaproj/aqua-installer/v2.0.2/aqua-installer
echo "acbb573997d664fcb8df20a8a5140dba80a4fd21f3d9e606e478e435a8945208  aqua-installer" | sha256sum -c
chmod +x aqua-installer
./aqua-installer
```

Add `${AQUA_ROOT_DIR}/bin` to the environmenet variable `PATH`.

```console
export PATH="${AQUA_ROOT_DIR:-${XDG_DATA_HOME:-$HOME/.local/share}/aquaproj-aqua}/bin:$PATH"
```

Confirm if aqua is installed correctly.

```console
aqua -v
```

If you want to try this tutorial in the clean environment, container is useful.

```sh
docker run --rm -ti alpine:3.17.0 sh
```

```sh
apk add curl bash sudo
adduser -u 1000 -G wheel -D foo
visudo # Uncomment "%wheel ALL=(ALL) NOPASSWD: ALL"
su foo
mkdir ~/workspace
cd ~/workspace

export PATH="${AQUA_ROOT_DIR:-${XDG_DATA_HOME:-$HOME/.local/share}/aquaproj-aqua}/bin:$PATH"
curl -sSfL -O https://raw.githubusercontent.com/aquaproj/aqua-installer/v2.0.2/aqua-installer
echo "acbb573997d664fcb8df20a8a5140dba80a4fd21f3d9e606e478e435a8945208  aqua-installer" | sha256sum -c
chmod +x aqua-installer
./aqua-installer
```

## Create a configuration file

Create a configuration file by `aqua init` command.

```console
$ aqua init # aqua.yaml is created
$ cat aqua.yaml
---
# aqua - Declarative CLI Version Manager
# https://aquaproj.github.io/
registries:
- type: standard
  ref: v3.90.0 # renovate: depName=aquaproj/aqua-registry
packages:
```

`packages` is still empty, so let's add packages to install them.

## Install tools with aqua

Let's install [GitHub Official CLI](https://cli.github.com/) and [fzf](https://github.com/junegunn/fzf) with aqua.

Add packages to `aqua.yaml`.

```console
$ aqua g -i cli/cli junegunn/fzf
```

```yaml
---
# aqua - Declarative CLI Version Manager
# https://aquaproj.github.io/
registries:
- type: standard
  ref: v3.90.0 # renovate: depName=aquaproj/aqua-registry
packages:
- name: cli/cli@v2.2.0
- name: junegunn/fzf@0.28.0
```

Then run `aqua i`.

```console
$ aqua i 
INFO[0000] download and unarchive the package            aqua_version=1.19.2 package_name=aqua-proxy package_version=v0.2.1 program=aqua registry=
INFO[0001] create a symbolic link                        aqua_version=1.19.2 link_file=/home/foo/.local/share/aquaproj-aqua/bin/aqua-proxy new=../pkgs/github_release/github.com
/aquaproj/aqua-proxy/v0.2.1/aqua-proxy_linux_amd64.tar.gz/aqua-proxy program=aqua
INFO[0001] create a symbolic link                        aqua_version=1.19.2 link_file=/home/foo/.local/share/aquaproj-aqua/bin/gh new=aqua-proxy program=aqua
INFO[0001] create a symbolic link                        aqua_version=1.19.2 link_file=/home/foo/.local/share/aquaproj-aqua/bin/fzf new=aqua-proxy program=aqua
INFO[0001] download and unarchive the package            aqua_version=1.19.2 package_name=cli/cli package_version=v2.2.0 program=aqua registry=standard
INFO[0001] download and unarchive the package            aqua_version=1.19.2 package_name=junegunn/fzf package_version=0.28.0 program=aqua registry=standard
```

Congratulation! Tools are installed correctly.

```console
$ command -v gh
/home/foo/.local/share/aquaproj-aqua/bin/gh

$ gh version
gh version 2.2.0 (2021-10-25)
https://github.com/cli/cli/releases/tag/v2.2.0

$ command -v fzf
/home/foo/.local/share/aquaproj-aqua/bin/fzf

$ fzf --version
0.28.0 (e4c3ecc)
```

aqua installs tools in `${AQUA_ROOT_DIR}`.
