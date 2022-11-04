---
sidebar_position: 75
---

# Update aqua by `aqua update-aqua` command

`aqua >= v1.22.0`

[v1.22.0](https://github.com/aquaproj/aqua/releases/tag/v1.22.0) [#1041](https://github.com/aquaproj/aqua/issues/1041) [#1060](https://github.com/aquaproj/aqua/issues/1060)

You can update aqua easily by `aqua update-aqua` command.

```console
$ aqua update-aqua [version]
```

aqua is installed in `$AQUA_ROOT_DIR/bin/aqua`.
By default, the latest version is installed, but you can also specify the version with an argument.

You can't specify the install path. We think you don't have to change the install path.

e.g.

```console
$ aqua update-aqua # Install the latest version
$ aqua update-aqua v1.20.0 # Install aqua v1.20.0
```
