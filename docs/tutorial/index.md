---
sidebar_position: 100
---

# Quick Start

aqua is a CLI tool to install CLI tools with declarative YAML configuration.
In this quick start, let's install aqua and install tools with aqua.

## Demo

Please see [Demo](https://asciinema.org/a/498262?autoplay=1).

## Install aqua

[Install](install.md)

Please confirm if aqua is installed correctly.

```console
aqua -v
```

## Docker

If you want to try this tutorial in the clean environment, container is useful.

```bash
docker run --rm -ti debian:bookworm-20231009 bash
```

```bash
apt update
apt install -y curl vim

mkdir ~/workspace
cd ~/workspace
export PATH="${AQUA_ROOT_DIR:-${XDG_DATA_HOME:-$HOME/.local/share}/aquaproj-aqua}/bin:$PATH"
curl -sSfL -O https://raw.githubusercontent.com/aquaproj/aqua-installer/v3.0.1/aqua-installer
echo "fb4b3b7d026e5aba1fc478c268e8fbd653e01404c8a8c6284fdba88ae62eda6a  aqua-installer" | sha256sum -c

chmod +x aqua-installer
./aqua-installer
```

## Create a configuration file

Create a configuration file by `aqua init` command.

```bash
aqua init # aqua.yaml is created
```

aqua.yaml is created.

```yaml
---
# aqua - Declarative CLI Version Manager
# https://aquaproj.github.io/
# checksum:
#   enabled: true
#   require_checksum: true
#   supported_envs:
#   - all
registries:
- type: standard
  ref: v4.155.1 # renovate: depName=aquaproj/aqua-registry
packages:
```

`packages` is still empty, so let's add packages to install them.

## Install tools with aqua

Let's install [GitHub Official CLI](https://cli.github.com/) and [fzf](https://github.com/junegunn/fzf) with aqua.

Add packages to `aqua.yaml`.

```bash
aqua g -i cli/cli junegunn/fzf
```

Packages are added to the field `packages`.

```yaml
packages:
- name: cli/cli@v2.38.0
- name: junegunn/fzf@0.43.0
```

Then run `aqua i`.

```bash
aqua i
```

Congratulation! Tools are installed correctly.

```console
$ command -v gh
/home/foo/.local/share/aquaproj-aqua/bin/gh

$ gh version
gh version 2.38.0 (2023-11-01)
https://github.com/cli/cli/releases/tag/v2.38.0

$ command -v fzf
/home/foo/.local/share/aquaproj-aqua/bin/fzf

$ fzf --version
0.43.0 (d3311d9)
```

aqua installs tools in `${AQUA_ROOT_DIR}`.
