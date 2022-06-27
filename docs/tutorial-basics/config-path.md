---
sidebar_position: 550
---

# Configuration file path

```yaml
# clivm.yaml
registries:
- type: standard
  ref: v2.22.0 # renovate: depName=clivm/clivm-registry

packages:
- name: cli/cli@v2.1.0
- name: junegunn/fzf@0.28.0
- name: tfmigrator/cli@v0.2.1
```

```yaml
# bar/clivm.yaml
registries:
- type: standard
  ref: v2.22.0 # renovate: depName=clivm/clivm-registry

packages:
- name: cli/cli@v2.0.0
```

clivm finds configuration files from the current directory to the root directory.

```console
$ pwd
/home/foo/workspace/bar
$ mkdir zoo
$ cd zoo

$ gh version # find the configuration file /home/foo/workspace/bar/clivm.yaml
gh version 2.0.0 (2021-08-24)
https://github.com/cli/cli/releases/tag/v2.0.0
```

clivm reads configuration files until the tool is found.

tfmigrator isn't found in `../clivm.yaml`, but is found in `../../clivm.yaml`.

```console
$ tfmigrator -v
INFO[0000] download and unarchive the package            clivm_version=1.3.0 package_name=tfmigrator/cli package_version=v0.2.1 program=clivm registry=standard
tfmigrator version 0.2.1 (3993c0824016673338530f4e7e8966c35efa5706)
```

If the configuration file isn't found and the tool isn't installed outside clivm, the command fails.

```console
$ cd /tmp
$ gh version
FATA[0000] clivm failed                                   clivm_version=1.3.0 error="command is not found" exe_name=gh program=clivm
```
