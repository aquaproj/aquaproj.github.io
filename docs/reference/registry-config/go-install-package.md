---
sidebar_position: 1300
---

# `go_install` Package

[#823](https://github.com/aquaproj/aqua/issues/823) [#826](https://github.com/aquaproj/aqua/pull/826), aqua >= [v1.10.0](https://github.com/aquaproj/aqua/releases/tag/v1.10.0) is required.

* `path`: Go package path. If `path` is not set but `repo_owner` and `repo_name` are set, the package path is `github.com/<repo_owner>/<repo_name>`
* `name`: The package name. If `name` is not set but `repo_owner` and `repo_name` are set, the package name is `<repo_owner>/<repo_name>`. If `name`, `repo_owner`, and `repo_name` aren't set, `path` is used as the package name

The package is installed by `go install` command.
So the command `go` is required.
When aqua runs `go install`, aqua sets the environment variable `GOBIN`.

aqua is a CLI Version Manager, you have to specify the version. You can't specify `latest`.

e.g. [golang.org/x/perf/cmd/benchstat](https://pkg.go.dev/golang.org/x/perf/cmd/benchstat), [github.com/volatiletech/sqlboiler/v4](https://github.com/volatiletech/sqlboiler)

registry.yaml

```yaml
packages:
  - type: go_install
    path: golang.org/x/perf/cmd/benchstat
    description: Benchstat computes and compares statistics about benchmarks
  - type: go_install
    path: github.com/volatiletech/sqlboiler/v4
    # specify `asset` when use package ends with major version
    asset: sqlboiler
    description: Generate a Go ORM tailored to your database schema.
```

aqua.yaml

```yaml
registries:
  - name: local
    type: local
    path: registry.yaml
packages:
  - name: golang.org/x/perf/cmd/benchstat
    registry: local
    version: 84e58bfe0a7e5416369e236afa007d5d9c58a0fa
  - name: github.com/volatiletech/sqlboiler/v4
    registry: local
    version: v4.12.0
```

```console
$ aqua i
INFO[0000] download and unarchive the package            aqua_version=1.18.0 env=darwin/amd64 package_name=aqua-proxy package_version=v1.1.2 program=aqua registry=
INFO[0000] create a symbolic link                        aqua_version=1.18.0 env=darwin/amd64 link_file=/Users/shunsukesuzuki/.local/share/aquaproj-aqua/bin/aqua-proxy new=../pkgs/github_release/github.com/aquaproj/aqua-proxy/v1.1.2/aqua-proxy_darwin_amd64.tar.gz/aqua-proxy package_name=aqua-proxy package_version=v1.1.2 program=aqua registry=
INFO[0000] create a symbolic link                        aqua_version=1.18.0 env=darwin/amd64 link_file=/Users/shunsukesuzuki/.local/share/aquaproj-aqua/bin/benchstat new=aqua-proxy program=aqua
INFO[0000] create a symbolic link                        aqua_version=1.18.0 env=darwin/amd64 link_file=/Users/shunsukesuzuki/.local/share/aquaproj-aqua/bin/sqlboiler new=aqua-proxy program=aqua
INFO[0000] Installing a Go tool                          aqua_version=1.18.0 env=darwin/amd64 go_package_path=github.com/volatiletech/sqlboiler/v4@v4.12.0 gobin=/Users/shunsukesuzuki/.local/share/aquaproj-aqua/pkgs/go_install/github.com/volatiletech/sqlboiler/v4/v4.12.0/bin package_name=github.com/volatiletech/sqlboiler/v4 package_version=v4.12.0 program=aqua registry=local
INFO[0000] Installing a Go tool                          aqua_version=1.18.0 env=darwin/amd64 go_package_path=golang.org/x/perf/cmd/benchstat@84e58bfe0a7e5416369e236afa007d5d9c58a0fa gobin=/Users/shunsukesuzuki/.local/share/aquaproj-aqua/pkgs/go_install/golang.org/x/perf/cmd/benchstat/84e58bfe0a7e5416369e236afa007d5d9c58a0fa/bin package_name=golang.org/x/perf/cmd/benchstat package_version=84e58bfe0a7e5416369e236afa007d5d9c58a0fa program=aqua registry=local

$ aqua which benchstat
/Users/shunsukesuzuki/.local/share/aquaproj-aqua/pkgs/go_install/golang.org/x/perf/cmd/benchstat/84e58bfe0a7e5416369e236afa007d5d9c58a0fa/bin/github-compare
% aqua which sqlboiler
/Users/shunsukesuzuki/.local/share/aquaproj-aqua/pkgs/go_install/github.com/volatiletech/sqlboiler/v4/v4.12.0/bin/sqlboiler
```
