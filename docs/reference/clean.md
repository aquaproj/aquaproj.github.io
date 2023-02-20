---
sidebar_position: 500
---

# Uninstall Packages

[#538](https://github.com/aquaproj/aqua/issues/538) [#1651](https://github.com/orgs/aquaproj/discussions/1651)

aqua installs packages in `$AQUA_ROOT_DIR}/pkgs` and doesn't remove them.
Even if you change the package version, aqua doesn't remove the old package.

**aqua doesn't have a command to uninstall packages, because we think the feature is unnecessary.**
To keep aqua simple, it is important not to implement unnecessary features.

For aqua, `uninstall a package` can mean the following things.

1. Remove a package from `aqua.yaml`
1. Remove symbolic links in PATH `$AQUA_ROOT_DIR/bin`
1. Remove packages from `$AQUA_ROOT_DIR/pkgs`

> 1. Remove a package from `aqua.yaml`

Please edit `aqua.yaml` with editor.

> 2. Remove symbolic links in PATH `$AQUA_ROOT_DIR/bin`

Basically, you don't have to remove links because aqua supports finding commands from `PATH` if the command isn't found in `aqua.yaml`.

[How does Lazy Install work?](lazy-install.md)

> If the package isn't found in the configuration files,
> aqua finds the command from the environment variable `PATH`.

If you want to remove links by all means, you can remove links by `rm "$(which COMMAND)"`.

> 3. Remove packages from `$AQUA_ROOT_DIR/pkgs`

Unlike decades, currently the storage is large and cheap.

If the storage is not exhausted, normally you don't have to remove old packages.
And if if the storage is exhausted, you should remove `${AQUA_ROOT_DIR}/pkgs` rather than picking out removed packages one by one.

aqua reinstalls packages automatically by Lazy Install, so you don't have to reinstall them explicitly.

```console
$ rm -R "~/.local/share/aquaproj-aqua/pkgs"
```

If you want to uninstall the specific package or package version by all means, you can do them by simply remove directories.

```console
$ rm -R ~/.local/share/aquaproj-aqua/pkgs/github_release/github.com/suzuki-shunsuke/akoi
```

```console
$ rm -R ~/.local/share/aquaproj-aqua/pkgs/github_release/github.com/suzuki-shunsuke/akoi/v2.2.0
```
