---
sidebar_position: 700
---

# How does Lazy Install work?

In this document we describe how the Lazy Install works.
The Lazy Install is the aqua's characteristic feature, and maybe you feel it like magic.

By `aqua i`, aqua installs [aqua-proxy](https://github.com/aquaproj/aqua-proxy) regardless the aqua's configuration.

```
$AQUA_ROOT_DIR/
  bin/
    aqua-proxy -> ../pkgs/github_release/github.com/aquaproj/aqua-proxy/v0.2.0/aqua-proxy_darwin_amd64.tar.gz/aqua-proxy
  pkgs/
    github_release/github.com/aquaproj/aqua-proxy/v0.2.0/aqua-proxy_darwin_amd64.tar.gz/aqua-proxy
```

And by `aqua i`, aqua reads the configuration file and creates symbolic links to aqua-proxy in `$AQUA_ROOT_DIR/bin`.
The symbolic link name is the package's file name.

For example, by the following configuration symbolic links `go` and `gofmt` are created.

aqua.yaml

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
$AQUA_ROOT_DIR/
  bin/
    go -> aqua-proxy
    gofmt -> aqua-proxy
```

Add `$AQUA_ROOT_DIR/bin` to the environment variable `PATH`.
When `go version` is executed, `$AQUA_ROOT_DIR/bin/go` is a symbolic link to aqua-proxy so aqua-proxy is executed.
Then aqua-proxy executes `aqua exec` passing the program name and command line arguments.
In case of `go version`, `aqua exec -- go version` is executed.
`aqua exec` reads the configuration file and finds the package which includes `go` and gets the package versions.
aqua installs the package version in `$AQUA_ROOT_DIR/pkgs` if it isn't installed yet
Then aqua executes the command `$AQUA_ROOT_DIR/pkgs/http/golang.org/dl/go1.17.darwin-amd64.tar.gz/go/bin/go version`.

`$AQUA_ROOT_DIR/bin` is shared by every `aqua.yaml`, so maybe in `aqua exec` the package isn't found.
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
aqua finds the command from the environment variable `PATH`.
For example, if the `PATH` is `$AQUA_ROOT_DIR/bin:/usr/local/bin:/bin`, aqua checks the following files.

1. `$AQUA_ROOT_DIR/bin/go`
1. `/usr/local/bin/go`
1. `/bin/go`

To prevent the infinite loop, aqua ignores the symbolic to aqua-proxy.
`$AQUA_ROOT_DIR/bin/go` is a symbolic link to aqua-proxy, so this is ignored.
If go is installed in `/usr/local/bin/go`, `/usr/local/bin/go version` is executed.
If `go` isn't found, aqua exits with non zero exit code.
