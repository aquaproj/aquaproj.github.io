---
sidebar_position: 700
---

# How does Lazy Install work?

In this document we describe how the Lazy Install works.
The Lazy Install is the clivm's characteristic feature, and maybe you feel it like magic.

By `clivm i`, clivm installs [clivm-proxy](https://github.com/clivm/clivm-proxy) regardless the clivm's configuration.

```
$CLIVM_ROOT_DIR/
  bin/
    clivm-proxy -> ../pkgs/github_release/github.com/clivm/clivm-proxy/v0.2.0/clivm-proxy_darwin_amd64.tar.gz/clivm-proxy
  pkgs/
    github_release/github.com/clivm/clivm-proxy/v0.2.0/clivm-proxy_darwin_amd64.tar.gz/clivm-proxy
```

And by `clivm i`, clivm reads the configuration file and creates symbolic links to clivm-proxy in `$CLIVM_ROOT_DIR/bin`.
The symbolic link name is the package's file name.

For example, by the following configuration symbolic links `go` and `gofmt` are created.

clivm.yaml

```yaml
registries:
- name: local
  type: local
  path: registry.yaml

packages:
- name: go
  registry: local
  version: "1.17"
```

registry.yaml

```yaml
packages:
- name: go
  type: http
  url: https://golang.org/dl/go{{.Version}}.{{.OS}}-{{.Arch}}.tar.gz
  files:
  - name: go # the symbolic `go` is created
    src: go/bin/go
  - name: gofmt # the symbolic `gofmt` is created
    src: go/bin/gofmt
```

```
$CLIVM_ROOT_DIR/
  bin/
    go -> clivm-proxy
    gofmt -> clivm-proxy
```

Add `$CLIVM_ROOT_DIR/bin` to the environment variable `PATH`.
When `go version` is executed, `$CLIVM_ROOT_DIR/bin/go` is a symbolic link to clivm-proxy so clivm-proxy is executed.
Then clivm-proxy executes `clivm exec` passing the program name and command line arguments.
In case of `go version`, `clivm exec -- go version` is executed.
`clivm exec` reads the configuration file and finds the package which includes `go` and gets the package versions.
clivm installs the package version in `$CLIVM_ROOT_DIR/pkgs` if it isn't installed yet
Then clivm executes the command `$CLIVM_ROOT_DIR/pkgs/http/golang.org/dl/go1.17.darwin-amd64.tar.gz/go/bin/go version`.

`$CLIVM_ROOT_DIR/bin` is shared by every `clivm.yaml`, so maybe in `clivm exec` the package isn't found.
Please comment out the package `go` and execute `go version` again.

```yaml
registries:
- name: local
  type: local
  path: registry.yaml

packages:
# - name: go
#   registry: local
#   version: "1.17"
```

If the package isn't found in the configuration files,
clivm finds the command from the environment variable `PATH`.
For example, if the `PATH` is `$CLIVM_ROOT_DIR/bin:/usr/local/bin:/bin`, clivm checks the following files.

1. `$CLIVM_ROOT_DIR/bin/go`
1. `/usr/local/bin/go`
1. `/bin/go`

To prevent the infinite loop, clivm ignores the symbolic to clivm-proxy.
`$CLIVM_ROOT_DIR/bin/go` is a symbolic link to clivm-proxy, so this is ignored.
If go is installed in `/usr/local/bin/go`, `/usr/local/bin/go version` is executed.
If `go` isn't found, clivm exits with non zero exit code.
