---
sidebar_position: 800
---

# Get an executable file by `aqua which`

`aqua which` outputs the absolute path of the executable file.

```console
$ aqua which <COMMAND>
```

e.g.

```console
$ which golangci-lint
/home/foo/.local/share/aquaproj-aqua/bin/golangci-lint

$ aqua which golangci-lint
/home/foo/.local/share/aquaproj-aqua/pkgs/github_release/github.com/golangci/golangci-lint/v1.42.1/golangci-lint-1.42.1-linux-amd64.tar.gz/golangci-lint-1.42.1-linux-amd64/golangci-lint
```

If you want to copy the executable file to the other path, `aqua which` is useful.

e.g.

```console
$ cp "$(aqua which golangci-lint)" src/golangci-lint
```
