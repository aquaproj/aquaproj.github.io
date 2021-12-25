---
sidebar_position: 500
---

# Use different version per project

aqua supports changing the tool versions per project.

```console
$ mkdir foo bar
$ vi foo/aqua.yaml
$ vi bar/aqua.yaml
```

```yaml
# foo/aqua.yaml
registries:
- type: standard
  ref: v0.12.1 # renovate: depName=aquaproj/aqua-registry

packages:
- name: cli/cli@v2.1.0
```

```yaml
# bar/aqua.yaml
registries:
- type: standard
  ref: v0.12.1 # renovate: depName=aquaproj/aqua-registry

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
INFO[0000] download and unarchive the package            aqua_version=0.8.7 package_name=cli/cli package_version=v2.0.0 program=aqua registry=standard
gh version 2.0.0 (2021-08-24)
https://github.com/cli/cli/releases/tag/v2.0.0
```

The version of `gh` is changed seamlessly.

You can install multiple versions in the same laptop and switch the version by project.
