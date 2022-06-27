---
sidebar_position: 1200
---

# `go` Package

:::caution

Use `go_install` package instead of `go` package

For the historical reason, there are two package types building Go tools, `go` and `go_install`.

* `go`: Packages are downloaded from GitHub Archive and are built by `go build` command
* `go_install`: Packages are installed by `go install` command

Basically when you add new packages, we recommend using the `go_install` package instead of the `go` package.

:::

[#798](https://github.com/clivm/clivm/issues/798) [#799](https://github.com/clivm/clivm/issues/799)

clivm >= [v1.7.0](https://github.com/clivm/clivm/releases/tag/v1.7.0) is required.

* `repo_owner`: The repository owner name
* `repo_name`: The repository name

The repository archive is downloaded from GitHub and the package is built by command `go build` when it is installed.
So the command `go` is required.
clivm is a CLI Version Manager, you have to specify the version. Unlike `go install` command, you can't specify the head of the default branch.

e.g. https://github.com/google/wire

registry.yaml

```yaml
packages:
  - type: go
    repo_owner: google
    repo_name: wire
    description: Compile-time Dependency Injection for Go
    files:
      - name: wire
        src: ./cmd/wire
        dir: "wire-{{trimV .Version}}"
```

clivm.yaml

```yaml
registries:
  - name: local
    type: local
    path: registry.yaml
packages:
  - name: google/wire@v0.5.0
    registry: local
```

```console
$ clivm which wire
/home/foo/.local/share/clivm/pkgs/go/github.com/google/wire/v0.5.0/bin/wire

$ clivm install
INFO[0000] create a symbolic link                        clivm_version= env=darwin/arm64 link_file=/home/foo/.local/share/clivm/bin/wire new=clivm-proxy package_name=google/wire package_version=v0.5.0 program=clivm registry=standard
INFO[0000] download and unarchive the package            clivm_version= env=darwin/arm64 package_name=google/wire package_version=v0.5.0 program=clivm registry=standard
INFO[0001] building Go tool                              clivm_version= env=darwin/arm64 exe_path=/home/foo/.local/share/clivm/pkgs/go/github.com/google/wire/v0.5.0/bin/wire file_name=wire go_build_dir=/home/foo/.local/share/clivm/pkgs/go/github.com/google/wire/v0.5.0/src/wire-0.5.0 go_src=./cmd/wire package_name=google/wire package_version=v0.5.0 program=clivm registry=standard
```

From clivm [v1.9.0](https://github.com/clivm/clivm/releases/tag/v1.9.0), if there is no GitHub Repository tag or the latest tag is old, you can specify Git revision instead of tag.

e.g.

```yaml
packages:
  - name: google/wire
    registry: local
    version: 79660af94317b9c466adc39f27f469f1079c779b
```

## File parameter

```yaml
    files:
      - name: wire
        src: ./cmd/wire
        dir: "wire-{{trimV .Version}}"
```

* name: command name
* dir: Directory path where `go build` is run
* src: go build's target path

```
${CLIVM_ROOT_DIR}/pkgs/go/github.com/google/wire/v0.5.0/
  bin/wire
  src/ # GitHub Repository Archive
    wire-0.5.0/ # `go build` is run on this directory
      cmd/wire # build target
```

The following command is run.

```console
$ go build -o "${CLIVM_ROOT_DIR}/pkgs/go/github.com/google/wire/v0.5.0/bin/wire" "./cmd/wire"
```
