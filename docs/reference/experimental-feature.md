---
sidebar_position: 900
---

# Experimental Feature

[#725](https://github.com/aquaproj/aqua/issues/725), `aqua >= v1.6.0`

aqua supports the mechanithm for experimental features.
They are disabled by default, but you can enable them with environment variables or somehow.

Maybe experimental features would become enabled by default, or maybe they would be aborted.
aqua conforms semantic versioning, so when there are breaking changes we release major update.
But experimental features are exception of semantic versioning, so maybe we abort them in the minor or patch update.

## AQUA_EXPERIMENTAL_X_SYS_EXEC

[#710](https://github.com/aquaproj/aqua/issues/710) [#715](https://github.com/aquaproj/aqua/pull/715) [#726](https://github.com/aquaproj/aqua/pull/726), `aqua >= v1.6.0`

To enable this feature, please set `true` to the enviornment variable `AQUA_EXPERIMENTAL_X_SYS_EXEC`.

```console
$ export AQUA_EXPERIMENTAL_X_SYS_EXEC=true
````

:::caution
Note that there is a known issue of this feature on macOS, so we don't recommend this feature for macOS users. [#729](https://github.com/aquaproj/aqua/issues/729)
:::

By default, aqua executes commands as sub commands.

Let's run Neovim with aqua and check the process true.

```console
$ pstree -s nvim
```

```
     \-+= 00719 shunsukesuzuki -zsh
       \-+= 09955 shunsukesuzuki nvim
         \-+- 09956 shunsukesuzuki aqua exec -- nvim
           \--- 09957 shunsukesuzuki /Users/shunsukesuzuki/.local/share/clivm/pkgs/github_release/github.com/neovim/neovim/v0.7.0/nvim-macos.tar.gz/nvim-osx64/bin/nvim
```

You can confirm three processes are started.
By enabling this feature, aqua executes commands by [execve(2)](https://pkg.go.dev/golang.org/x/sys/unix#Exec),

```
     \-+= 00719 shunsukesuzuki -zsh
       \--= 10188 shunsukesuzuki nvim
```

You can confirm only one process is started.
