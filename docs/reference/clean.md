---
sidebar_position: 500
---

# Uninstall Packages

aqua installs packages in `$AQUA_ROOT_DIR}/pkgs` and doesn't remove them.
Even if you change the package version, aqua doesn't remove the old package.

**aqua doesn't have a command to uninstall packages, because we think the feature is unneeded.**
To keep aqua simple, it is important not to implement unneeded features.

You don't have to uninstall packages unless the storage is insufficient.
And if the storage is insufficient, you can remove the directory `${AQUA_ROOT_DIR}/pkgs`.

```console
$ rm -R "~/.local/share/aquaproj-aqua/pkgs"
```

aqua reinstalls packages automatically by Lazy Install, so you don't have to reinstall them explicitly.

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
