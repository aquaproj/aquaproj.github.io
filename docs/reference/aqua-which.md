---
sidebar_position: 800
---

# Get an executable file by `clivm which`

`clivm which` outputs the absolute path of the executable file.

```console
$ clivm which <COMMAND>
```

e.g.

```console
$ which golangci-lint
/home/foo/.local/share/clivm/bin/golangci-lint

$ clivm which golangci-lint
/home/foo/.local/share/clivm/pkgs/github_release/github.com/golangci/golangci-lint/v1.42.1/golangci-lint-1.42.1-linux-amd64.tar.gz/golangci-lint-1.42.1-linux-amd64/golangci-lint
```

If you want to copy the executable file to the other path, `clivm which` is useful.

e.g.

```console
$ cp "$(clivm which golangci-lint)" src/golangci-lint
```
