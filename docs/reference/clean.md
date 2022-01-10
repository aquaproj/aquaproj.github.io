---
sidebar_position: 500
---

# Clean unused packages

aqua installs packages in `$AQUA_ROOT_DIR}/pkgs` and doesn't remove them.
Even if you change the package version, aqua doesn't remove the old package.
If `${AQUA_ROOT_DIR}/pkgs` consumes the disk usage and you want it to be slim, you can remove packages in `${AQUA_ROOT_DIR}/pkgs` by yourself.

The simplest way is to remove `${AQUA_ROOT_DIR}`.

```console
$ rm -R "~/.local/share/aquaproj-aqua"
```

By keeping `${AQUA_ROOT_DIR}/bin`, you can install tools by the Lazy Install without running `aqua i`.

You can also remove the specific package or package version.

```console
$ rm -R ~/.local/share/aquaproj-aqua/pkgs/github_release/github.com/suzuki-shunsuke/akoi
```

```console
$ rm -R ~/.local/share/aquaproj-aqua/pkgs/github_release/github.com/suzuki-shunsuke/akoi/v2.2.0
```

```console
$ rm -R ~/.local/share/aquaproj-aqua/pkgs/github_release/github.com/suzuki-shunsuke
```
