---
sidebar_position: 600
---

# Global Configuration

aqua finds the configuration files from the current directory to the root directory.
If you want to install tools regardless the current directory,
let's add the global configuration `~/.aqua/global/aqua.yaml`.

```console
$ mkdir ~/.aqua/global
$ vi ~/.aqua/global/aqua.yaml
```

```yaml
registries:
- type: standard
  ref: v0.10.8 # renovate: depName=suzuki-shunsuke/aqua-registry

packages:
- name: cli/cli@v2.2.0
- name: junegunn/fzf@0.28.0
```

You can add Global Configuration by the environment variable `AQUA_GLOBAL_CONFIG`.
