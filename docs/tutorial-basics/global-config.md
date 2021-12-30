---
sidebar_position: 600
---

# Global Configuration

aqua finds the configuration files from the current directory to the root directory.

```console
$ pwd
/tmp
$ gh version
FATA[0000] aqua failed                                   aqua_version=0.8.7 error="command is not found" exe_name=gh program=aqua
```

If you want to install tools regardless the current directory,
let's add the global configuration `~/.aqua/global/aqua.yaml`.

```console
$ mkdir ~/.aqua/global
$ vi ~/.aqua/global/aqua.yaml
```

```yaml
registries:
- type: standard
  ref: v0.12.3 # renovate: depName=aquaproj/aqua-registry

packages:
- name: cli/cli@v2.2.0
- name: junegunn/fzf@0.28.0
```

```console
$ gh version
gh version 2.2.0 (2021-10-25)
https://github.com/cli/cli/releases/tag/v2.2.0
```

You can add Global Configuration by the environment variable `AQUA_GLOBAL_CONFIG`.
