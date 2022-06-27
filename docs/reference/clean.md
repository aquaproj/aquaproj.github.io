---
sidebar_position: 500
---

# Clean unused packages

aqua installs packages in `$CLIVM_ROOT_DIR}/pkgs` and doesn't remove them.
Even if you change the package version, aqua doesn't remove the old package.
If `${CLIVM_ROOT_DIR}/pkgs` consumes the disk usage and you want it to be slim, you can remove packages in `${CLIVM_ROOT_DIR}/pkgs` by yourself.

The simplest way is to remove `${CLIVM_ROOT_DIR}`.

```console
$ rm -R "~/.local/share/clivm"
```

By keeping `${CLIVM_ROOT_DIR}/bin`, you can install tools by the Lazy Install without running `aqua i`.

You can also remove the specific package or package version.

```console
$ rm -R ~/.local/share/clivm/pkgs/github_release/github.com/suzuki-shunsuke/akoi
```

```console
$ rm -R ~/.local/share/clivm/pkgs/github_release/github.com/suzuki-shunsuke/akoi/v2.2.0
```

```console
$ rm -R ~/.local/share/clivm/pkgs/github_release/github.com/suzuki-shunsuke
```
