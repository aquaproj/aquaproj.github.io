---
sidebar_position: 500
---

# Use different version per project

clivm supports changing the tool versions per project.

```console
$ mkdir foo bar
$ vi foo/clivm.yaml
$ vi bar/clivm.yaml
```

```yaml
# foo/clivm.yaml
registries:
- type: standard
  ref: v2.22.0 # renovate: depName=clivm/clivm-registry

packages:
- name: cli/cli@v2.1.0
```

```yaml
# bar/clivm.yaml
registries:
- type: standard
  ref: v2.22.0 # renovate: depName=clivm/clivm-registry

packages:
- name: cli/cli@v2.0.0
```

```console
$ cd foo
$ gh version # In foo, the version is v2.1.0.
gh version 2.1.0 (2021-10-14)
https://github.com/cli/cli/releases/tag/v2.1.0

$ cd ../bar
$ gh version # In foo, the version is v2.0.0.
INFO[0000] download and unarchive the package            clivm_version=1.3.0 package_name=cli/cli package_version=v2.0.0 program=clivm registry=standard
gh version 2.0.0 (2021-08-24)
https://github.com/cli/cli/releases/tag/v2.0.0
```

The version of `gh` is changed seamlessly.

You can install multiple versions in the same laptop and switch the version by project.
