---
sidebar_position: 600
---

# Global Configuration

clivm finds the configuration files from the current directory to the root directory.

```console
$ pwd
/tmp
$ gh version
FATA[0000] clivm failed                                   clivm_version=1.3.0 error="command is not found" exe_name=gh program=clivm
```

If you want to install tools regardless the current directory,
let's add the global configuration.
Create a global configuration file and add the path to the environment variable `CLIVM_GLOBAL_CONFIG`.
You can change the global configuration file path freely.

```console
$ mkdir -p "${XDG_CONFIG_HOME:-$HOME/.config}/clivm"
$ vi "${XDG_CONFIG_HOME:-$HOME/.config}/clivm/clivm.yaml"
$ export CLIVM_GLOBAL_CONFIG=${CLIVM_GLOBAL_CONFIG:-}:${XDG_CONFIG_HOME:-$HOME/.config}/clivm/clivm.yaml
```

```yaml
registries:
- type: standard
  ref: v2.22.0 # renovate: depName=clivm/clivm-registry

packages:
- name: cli/cli@v2.2.0
- name: junegunn/fzf@0.28.0
```

```console
$ gh version
gh version 2.2.0 (2021-10-25)
https://github.com/cli/cli/releases/tag/v2.2.0
```

## `clivm i` ignores global configuration by default

:::caution
`clivm i` ignores global configuration by default.
To install tools of global configuration by `clivm i`, please set the `-a` option.

```console
$ clivm i -a
```
:::
