---
sidebar_position: 700
---

# Lazy Install

`Lazy Install` is a feature that aqua installs a tool when the tool is executed if the tool version isn't installed yet.

The following example shows GitHub CLI is installed when `gh version` is executed.

```console
$ gh version
INFO[0000] download and unarchive the package            aqua_version=1.19.2 package_name=cli/cli package_version=v2.1.0 program=aqua registry=standard
gh version 2.1.0 (2021-10-14)
https://github.com/cli/cli/releases/tag/v2.1.0
```

## Benefit

- You can install tools that really needed
- You don't have to run `aqua i` to update packages
- You can ensure executed tool versions

## Disable Lazy Install

[#2058](https://github.com/orgs/aquaproj/discussions/2058) aqua >= v2.9.0

Lazy Install is enabled by default, but you can disable it with the environment variable `AQUA_DISABLE_LAZY_INSTALL`.

e.g.

```sh
export AQUA_DISABLE_LAZY_INSTALL=true
```

If Lazy Install is disabled, the command would fail if the package isn't installed in advance.

e.g.

```console
$ tfcmt -v
FATA[0000] aqua failed                                   aqua_version= doc="https://aquaproj.github.io/docs/reference/codes/006" env=darwin/arm64 error="the executable file isn't installed yet. Lazy Install is disabled" exe_name=tfcmt package=suzuki-shunsuke/tfcmt package_version=v1.0.0 program=aqua
```

Disabling Lazy Install is useful to improve the security and keep the governance. You can prevent malicious commands from being installed and executed via Lazy Install. And you can also prevent aqua.yaml from being overwritten.

This is especially useful for CI of Monorepo.

The purpose is same with aqua's Policy, but disabling Lazy Install is simpler than Policy.

## How does Lazy Install work?

:::caution
On Windows, [aqua-proxy](https://github.com/aquaproj/aqua-proxy) and symbolic links aren't used.
Please see [here](/docs/reference/windows-support#create-bat-files-and-shell-scripts-instead-of-symbolic-links-and-aqua-proxy)
:::

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
