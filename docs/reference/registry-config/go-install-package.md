---
sidebar_position: 1300
---

# `go_install` Package

[#823](https://github.com/clivm/clivm/issues/823) [#826](https://github.com/clivm/clivm/pull/826), clivm >= [v1.10.0](https://github.com/clivm/clivm/releases/tag/v1.10.0) is required.

* `path`: Go package path. If `path` is not set but `repo_owner` and `repo_name` are set, the package path is `github.com/<repo_owner>/<repo_name>`
* `name`: The package name. If `name` is not set but `repo_owner` and `repo_name` are set, the package name is `<repo_owner>/<repo_name>`. If `name`, `repo_owner`, and `repo_name` aren't set, `path` is used as the package name

The package is installed by `go install` command.
So the command `go` is required.
When clivm runs `go install`, clivm sets the environment variable `GOBIN`.

clivm is a CLI Version Manager, you have to specify the version. You can't specify `latest`.

e.g. [golang.org/x/perf/cmd/benchstat](https://pkg.go.dev/golang.org/x/perf/cmd/benchstat)

registry.yaml

```yaml
packages:
  - type: go_install
    path: golang.org/x/perf/cmd/benchstat
    description: Benchstat computes and compares statistics about benchmarks
```

clivm.yaml

```yaml
registries:
  - name: local
    type: local
    path: registry.yaml
packages:
  - name: golang.org/x/perf/cmd/benchstat
    registry: local
    version: 84e58bfe0a7e5416369e236afa007d5d9c58a0fa
```

```console
$ clivm i
INFO[0000] create a symbolic link                        clivm_version= env=darwin/arm64 link_file=/Users/shunsukesuzuki/.local/share/clivm/bin/benchstat new=clivm-proxy package_name=golang.org/x/perf/cmd/benchstat package_version=84e58bfe0a7e5416369e236afa007d5d9c58a0fa program=clivm registry=local
INFO[0000] Installing a Go tool                          clivm_version= env=darwin/arm64 go_package_path=golang.org/x/perf/cmd/benchstat@84e58bfe0a7e5416369e236afa007d5d9c58a0fa gobin=/Users/shunsukesuzuki/.local/share/clivm/pkgs/go_install/golang.org/x/perf/cmd/benchstat/84e58bfe0a7e5416369e236afa007d5d9c58a0fa/bin package_name=golang.org/x/perf/cmd/benchstat package_version=84e58bfe0a7e5416369e236afa007d5d9c58a0fa program=clivm registry=local
go: downloading golang.org/x/perf v0.0.0-20220411212318-84e58bfe0a7e

$ clivm which benchstat
/Users/shunsukesuzuki/.local/share/clivm/pkgs/go_install/golang.org/x/perf/cmd/benchstat/84e58bfe0a7e5416369e236afa007d5d9c58a0fa/bin/github-compare
```
