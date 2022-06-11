---
sidebar_position: 600
---

# Global Configuration

aqua finds the configuration files from the current directory to the root directory.

```console
$ pwd
/tmp
$ gh version
FATA[0000] aqua failed                                   aqua_version=1.3.0 error="command is not found" exe_name=gh program=aqua
```

If you want to install tools regardless the current directory,
let's add the global configuration.
Create a global configuration file and add the path to the environment variable `AQUA_GLOBAL_CONFIG`.
You can change the global configuration file path freely.

```console
$ mkdir -p "${XDG_CONFIG_HOME:-$HOME/.config}/aquaproj-aqua"
$ vi "${XDG_CONFIG_HOME:-$HOME/.config}/aquaproj-aqua/aqua.yaml"
$ export AQUA_GLOBAL_CONFIG=${AQUA_GLOBAL_CONFIG:-}:${XDG_CONFIG_HOME:-$HOME/.config}/aquaproj-aqua/aqua.yaml
```

```yaml
registries:
- type: standard
  ref: v2.22.0 # renovate: depName=aquaproj/aqua-registry

packages:
- name: cli/cli@v2.2.0
- name: junegunn/fzf@0.28.0
```

```console
$ gh version
gh version 2.2.0 (2021-10-25)
https://github.com/cli/cli/releases/tag/v2.2.0
```

## `aqua i` ignores global configuration by default

:::caution
`aqua i` ignores global configuration by default.
To install tools of global configuration by `aqua i`, please set the `-a` option.

```console
$ aqua i -a
```
:::
