---
sidebar_position: 300
---

# Registry Configuration

e.g. [registry.yaml](https://github.com/aquaproj/aqua-registry/blob/main/registry.yaml)

```yaml
packages:
# init: a
- type: github_release
  repo_owner: accurics
  repo_name: terrascan
  asset: 'terrascan_{{trimV .Version}}_{{title .OS}}_{{.Arch}}.tar.gz'
  link: https://docs.accurics.com/projects/accurics-terrascan/en/latest/
  description: Detect compliance and security violations across Infrastructure as Code to mitigate risk before provisioning cloud native infrastructure
  replacements:
    amd64: x86_64
```

* `packages`: The list of packages

## JSON Schema

* https://github.com/aquaproj/aqua/tree/main/json-schema
* https://github.com/aquaproj/aqua/blob/main/json-schema/registry.json
* https://raw.githubusercontent.com/aquaproj/aqua/main/json-schema/registry.json

## Package types

* [github_release](#github_release-package): The package is downloaded from GitHub Releases
* [http](#http-package): The package is donwloaded from the specified URL
* [github_content](#github_content-package): The package is downloaded from GitHub Content
* [github_archive](#github_archive-package): The package is downloaded from GitHub Archive
* [go](#go-package): The package is downloaded from GitHub Archive and is built by `go build` command

## Package's Common attributes

* `type`: (string, required) the package type
* `name`: (string) the package name. This is used to specify the package in `aqua.yaml`. name must be unique in the same registry
* [aliases](#aliases): Aliases of the package
* [files](#files): The list of executable files
* `format`: The asset format (e.g. `zip`, `tar.gz`). This is used to unarchive or decompress the asset. If this isn't specified, aqua tries to specify the format from the file extenstion. If the file isn't archived and isn't compressed, please specify `raw`
* `link`: URL about the package. This is used for `aqua g`
* `description`: The description about the package. This is used for `aqua g`
* [replacements](#replacements-format_overrides): A map which is used to replace some Template Variables like `OS` and `Arch`
* [format_overrides](#replacements-format_overrides): A list of the pair OS and the asset format
* [overrides](#overrides)
* [version_constraint](#version_constraint-version_overrides): [expr](https://github.com/antonmedv/expr)'s expression. The evaluation result must be a boolean
* [version_overrides](#version_constraint-version_overrides)
* [supported_if](#supported_if)
* [rosetta2](#rosetta2)
* [version_filter](#version_filter)
* [version_source](#version_source)

### `aliases`

[#674](https://github.com/aquaproj/aqua/pull/674) [#675](https://github.com/aquaproj/aqua/pull/675) aqua >= v1.5.0 is required

Aliases of packages.

e.g.

```yaml
packages:
- name: ahmetb/kubectx/kubens
  aliases:
  - name: ahmetb/kubens
```

You can use the alias as the package name in `aqua.yaml`, and alias can be used in `aqua g` command.

`aliases` is used to keep the compatibility when the package name is changed.
Sometimes the package name is changed because the repository is renamed or transfered.

### `files`

* `name`: the file name
* `src`: (default: the value of `name`, type: `template string`) the path to the file from the archive file's root.
* `dir`: This is used only for go type package

## `github_release` Package

* `repo_owner`: The repository owner name
* `repo_name`: The repository name
* `asset`: The template string of GitHub Release's asset name
  * e.g. `'lima-{{trimV .Version}}-{{title .OS}}-{{.Arch}}.tar.gz'`

## `http` Package

* `url`: The template string of URL where the package is downloaded
  * e.g. `'https://storage.googleapis.com/kubernetes-release/release/{{.Version}}/bin/{{.OS}}/{{.Arch}}/kubectl'`

## `github_content` Package

* `repo_owner`: The repository owner name
* `repo_name`: The repository name
* `path`: The template string of GitHub Content's file path
  * e.g. `'foo-{{title .OS}}.sh'`

## `github_archive` Package

* `repo_owner`: The repository owner name
* `repo_name`: The repository name

## `go` Package

[#798](https://github.com/aquaproj/aqua/issues/798) [#799](https://github.com/aquaproj/aqua/issues/799)

aqua >= [v1.7.0](https://github.com/aquaproj/aqua/releases/tag/v1.7.0) is required.

* `repo_owner`: The repository owner name
* `repo_name`: The repository name

The repository archive is downloaded from GitHub and the package is built by command `go build` when it is installed.
So the command `go` is required.
aqua is a CLI Version Manager, you have to specify the version. Unlike `go install` command, you can't specify the head of the default branch.

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

aqua.yaml

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
$ aqua which wire
/home/foo/.local/share/aquaproj-aqua/pkgs/go/github.com/google/wire/v0.5.0/bin/wire

$ aqua install
INFO[0000] create a symbolic link                        aqua_version= env=darwin/arm64 link_file=/home/foo/.local/share/aquaproj-aqua/bin/wire new=aqua-proxy package_name=google/wire package_version=v0.5.0 program=aqua registry=standard
INFO[0000] download and unarchive the package            aqua_version= env=darwin/arm64 package_name=google/wire package_version=v0.5.0 program=aqua registry=standard
INFO[0001] building Go tool                              aqua_version= env=darwin/arm64 exe_path=/home/foo/.local/share/aquaproj-aqua/pkgs/go/github.com/google/wire/v0.5.0/bin/wire file_name=wire go_build_dir=/home/foo/.local/share/aquaproj-aqua/pkgs/go/github.com/google/wire/v0.5.0/src/wire-0.5.0 go_src=./cmd/wire package_name=google/wire package_version=v0.5.0 program=aqua registry=standard
```

From aqua [v1.9.0](https://github.com/aquaproj/aqua/releases/tag/v1.9.0), if there is no GitHub Repository tag or the latest tag is old, you can specify Git revision instead of tag.

e.g.

```yaml
packages:
  - name: google/wire
    registry: local
    version: 79660af94317b9c466adc39f27f469f1079c779b
```

### File parameter

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
${AQUA_ROOT_DIR}/pkgs/go/github.com/google/wire/v0.5.0/
  bin/wire
  src/ # GitHub Repository Archive
    wire-0.5.0/ # `go build` is run on this directory
      cmd/wire # build target
```

The following command is run.

```console
$ go build -o "${AQUA_ROOT_DIR}/pkgs/go/github.com/google/wire/v0.5.0/bin/wire" "./cmd/wire"
```

## `replacements`, `format_overrides`

These attributes are inspired to [goreleaser's Archive](https://goreleaser.com/customization/archive/).
If the package is released with [goreleaser](https://goreleaser.com/),
you may copy and paste `replacements` and `format_overrides` from `.goreleaser.yaml`.

e.g.

* replacements
  * [goreleaser.yml](https://github.com/aquasecurity/trivy/blob/v0.19.2/goreleaser.yml#L62-L73)
  * [registry.yaml](https://github.com/aquaproj/aqua-registry/blob/v0.8.0/registry.yaml#L44-L55)
* format_overrides
  * [.goreleaser.yml](https://github.com/iawia002/annie/blob/v0.11.0/.goreleaser.yml#L51-L54)
  * [registry.yaml](https://github.com/aquaproj/aqua-registry/blob/v0.8.0/registry.yaml#L361-L364)

## `overrides`

aqua >= v1.3.0

[#607](https://github.com/aquaproj/aqua/issues/607)

You can override the following attributes on the specific `GOOS` and `GOARCH`.

* replacements
* format
* asset
* url
* files

e.g. On Linux ARM64, `Arch` becomes `aarch64`.

```yaml
  overrides:
  - goos: linux
    replacements:
      arm64: aarch64
```

In case of `replacements`, maps are merged.

Either `goos` or `goarch` is required.

e.g.

```yaml
  asset: arkade
  overrides:
  - goos: linux
    goarch: arm64
    asset: 'arkade-{{.Arch}}'
  - goos: darwin
    goarch: amd64
    asset: 'arkade-darwin'
  - goos: darwin 
    asset: 'arkade-darwin-{{.Arch}}'
```

Even if multiple elements are matched, only first element is applied.
For example, Darwin AMD64 matches with second element but the second element isn't applied beause the first element is matched.

```yaml
  - goos: darwin
    goarch: amd64
    asset: 'arkade-darwin'
  - goos: darwin 
    asset: 'arkade-darwin-{{.Arch}}'
```

## Default values if `repo_owner` and `repo_name` are set

* `name`: `<repo owner>/<repo name>`
* `link`: `https://github.com/<repo owner>/<repo name>`
* `files`: `[{"name":"<repo name>"}]`

For example, in case of `weaveworks/eksctl` the following default values are set.

```yaml
name: weaveworks/eksctl
link: https://github.com/weaveworks/eksctl
files:
- name: eksctl
```

## Template String

Some fields are parsed with [Go's text/template](https://pkg.go.dev/text/template) and [sprig](http://masterminds.github.io/sprig/).

### Common Template Functions

* `trimV`: This is equivalent to `trimPrefix "v"`

### Template Variables

* `OS`: A string which `GOOS` is replaced by `replacements`. If `replacements` isn't set, `OS` is equal to `GOOS`. Basically you should use `OS` for the consistency
* `Arch`: A string which `GOARCH` is replaced by `replacements`. If `replacements` isn't set, `Arch` is equal to `GOARCH`. Basically you should use `OS` for the consistency
* `GOOS`: Go's [runtime.GOOS](https://pkg.go.dev/runtime#pkg-constants)
* `GOARCH`: Go's [runtime.GOARCH](https://pkg.go.dev/runtime#pkg-constants)
* `Version`: Package `version`
* `Format`: Package `format`
* `FileName`: `files[].name`

## `version_constraint`, `version_overrides`

Some package attributes like `asset` and `files` may be different by it's version.
For example, the asset structure of [golang-migrate](https://github.com/golang-migrate/migrate) was changed from v4.15.0.
In that case, the attributes `version_constraint` and `version_overrides` are useful.

e.g.

```yaml
- type: github_release
  repo_owner: golang-migrate
  repo_name: migrate
  asset: 'migrate.{{.OS}}-{{.Arch}}.tar.gz'
  description: Database migrations. CLI and Golang library
  version_constraint: 'semver("> 4.14.1")'
  version_overrides:
  - version_constraint: 'semver("<= 4.14.1")'
    files:
    - name: migrate
      src: 'migrate.{{.OS}}-{{.Arch}}'
```

`version_constraint` is [expr](https://github.com/antonmedv/expr)'s expression.
The evaluation result must be a boolean.

Currently, the following values and functions are accessible in the expression.

* `Version`: (type: `string`) The package version
* `semver`: (type: `func(string) bool`) Tests if the package version satisfies all the constraints. [hashicorp/go-version](https://github.com/hashicorp/go-version) is used
* `semverWithVersion`: (type: `func(constraint, version string) bool`) Tests if the package version satisfies all the constraints. [hashicorp/go-version](https://github.com/hashicorp/go-version) is used
* `trimPrefix`: (type `func(s, prefix string) string`) Go's [strings.TrimPrefix](https://pkg.go.dev/strings#TrimPrefix)

### version_overrides

The list of version override.

The following attributes are supported.

* `type`
* `repo_owner`
* `repo_name`
* `asset`
* `path`
* `format`
* `files`
* `url`
* `replacements`
* `format_overrides`
* `supported_if`
* `rosetta2`

e.g.

```yaml
  version_overrides:
  - version_constraint: 'semver("<= 4.14.1")'
    files:
    - name: migrate
      src: 'migrate.{{.OS}}-{{.Arch}}'
```

## `supported_if`

[#438](https://github.com/aquaproj/aqua/pull/438) [#439](https://github.com/aquaproj/aqua/pull/439)

Some packages are available on only the specific environment.
Some packages are available on only Linux, or some packages don't support Linux ARM64.

`supported_if` is [expr](https://github.com/antonmedv/expr)'s expression.
The evaluation result must be a boolean.

If the evaluation result is `false`, aqua skips installing the package and outputs the debug log.
If `supported_if` isn't set, the package is always installed.

The following values and functions are accessible in the expression.

* `GOOS`: (type: `string`) Go's [runtime.GOOS](https://pkg.go.dev/runtime#pkg-constants)
* `GOARCH`: (type: `string`) Go's [runtime.GOARCH](https://pkg.go.dev/runtime#pkg-constants)

For example, if the following configuration indicates the package doesn't support macOS.

```yaml
supported_if: GOOS != "darwin"
```

## `rosetta2`

[#442](https://github.com/aquaproj/aqua/pull/442) [#444](https://github.com/aquaproj/aqua/pull/444)

If a package isn't built for apple silicon (i.e. `GOOS=darwin, GOARCH=arm64`), you have to install the package built for amd64 (i.e. `GOOS=darwin, GOARCH=amd64`).
With the field `rosetta2`, you don't have to write `if` condition to support such a case.
`rosetta2` must be boolean. By default, `rosetta2` is `false`.

If `rosetta2` is `true` and `GOOS` is `darwin` and `GOARCH` is `arm64`, the template variable `Arch` is interpreted as `GOARCH=amd64`.

AS IS

```yaml
asset: 'argo-{{.OS}}-{{if eq .GOOS "darwin"}}amd64{{else}}{{.Arch}}{{end}}.gz'
```

TO BE

```yaml
rosetta2: true
asset: 'argo-{{.OS}}-{{.Arch}}.gz'
```

## `version_filter`

[v0.8.13](https://github.com/aquaproj/aqua/releases/tag/v0.8.13)

`aqua g` gets the latest version of the package.
If `version_filter` is set, the version which matches with `version_filter` is used.
`version_filter` is [expr](https://github.com/antonmedv/expr)'s expression.
The evaluation result must be a boolean.

This is used in `kubernetes-sigs/kustomize` to exclude [releases of kyaml](https://github.com/kubernetes-sigs/kustomize/releases?q=kyaml&expanded=true).

```yaml
- type: github_release
  repo_owner: kubernetes-sigs
  repo_name: kustomize
  asset: 'kustomize_{{trimPrefix "kustomize/" .Version}}_{{.OS}}_{{.Arch}}.tar.gz'
  version_filter: 'Version startsWith "kustomize/"'
```

## `version_source`

[#811](https://github.com/aquaproj/aqua/pull/811) aqua >= [v1.8.0](https://github.com/aquaproj/aqua/releases/tag/v1.8.0)

By default, `aqua g` gets the latest version from GitHub Releases.
By setting `version_source: github_tag`, aqua gets from GitHub Repository Tag instead of GitHub Releases.
This is useful for tools without GitHub Releases.
