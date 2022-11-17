---
sidebar_position: 200
---

# Configuration

e.g. [aqua.yaml](https://github.com/aquaproj/aqua/blob/main/aqua.yaml)

```yaml
registries:
- type: standard
  ref: v3.90.0 # renovate: depName=aquaproj/aqua-registry

packages:
- name: helm/helm@v3.7.0
- name: golangci/golangci-lint@v1.42.1
- import: aqua/*.yaml
```

## Configuration File Path

aqua searches the following configuration files.

1. `--config (-c)` option (environment variable `AQUA_CONFIG`
1. `\.?aqua\.ya?ml` from the current directory to the root directory. If configuration files are found in the multiple directories, aqua read all of them
1. global configuration: environment variable `AQUA_GLOBAL_CONFIG`

To install tools in global configuration files, you have to set `-a` to `aqua install` command.

## Environment variables

* `AQUA_LOG_LEVEL`: (default: `info`) Log level
* `AQUA_CONFIG`: configuration file path
* `AQUA_GLOBAL_CONFIG`: global configuration file paths separated by semicolon `:`
* `AQUA_POLICY_CONFIG`: [policy file](/docs/tutorial-extras/policy-as-code) paths separated by semicolon `:`
* `AQUA_ROOT_DIR`: The directory path where aqua install tools
  * default (linux and macOS): `${XDG_DATA_HOME:-$HOME/.local/share}/aquaproj-aqua`
  * default (windows): `${HOME/AppData/Local}/aquaproj-aqua`
* `AQUA_MAX_PARALLELISM`: (default: `5`) The maximum number of packages which are installed in parallel at the same time
* `AQUA_GITHUB_TOKEN`, `GITHUB_TOKEN`: GitHub Access Token. This is required to install private repository's package
* `AQUA_LOG_COLOR`: Support setting the log coloring by the environment variable `AQUA_LOG_COLOR` (`always|auto|never`)
* `AQUA_PROGRESS_BAR`: The progress bar is disabled by default, but you can enable it by setting the environment variable `AQUA_PROGRESS_BAR` to `true`
* [AQUA_GOOS, AQUA_GOARCH](change-os-arch-for-test)
* [AQUA_EXPERIMENTAL_X_SYS_EXEC](experimental-feature#aqua_experimental_x_sys_exec)

## JSON Schema

* https://github.com/aquaproj/aqua/tree/main/json-schema
* https://github.com/aquaproj/aqua/blob/main/json-schema/aqua-yaml.json
* https://raw.githubusercontent.com/aquaproj/aqua/main/json-schema/aqua-yaml.json

## Configuration attributes

* [registries](#registries): The list of registries
* [packages](#packages): The list of installed packages
* [checksum](checksum): configuration for checksum verification

:::caution
`inline_registry` was removed from `aqua >= v0.9.0`. Please use [local registry](#local-registry).
:::

## `registries`

e.g.

```yaml
registries:
- type: standard
  ref: v3.90.0 # renovate: depName=aquaproj/aqua-registry
```

Registry types

* [standard](#standard-registry): aqua's [Standard Registry](https://github.com/aquaproj/aqua-registry)
* [local](#local-registry): local file
* [github_content](#github_content-registry): Get the registry by GitHub Repository Content API

### `standard` registry

e.g.

```yaml
registries:
- type: standard
  ref: v3.90.0 # renovate: depName=aquaproj/aqua-registry
```

* `ref`: the Registry Version. Please check [Releases](https://github.com/aquaproj/aqua-registry/releases)

This is equivalent to the following definition.

```yaml
registries:
- name: standard
  type: github_content
  repo_owner: aquaproj
  repo_name: aqua-registry
  ref: v3.90.0 # renovate: depName=aquaproj/aqua-registry
  path: registry.yaml
```

You can also specify a commit hash as `ref`.

```yaml
registries:
- type: standard
  ref: 0d1572334a460e5a74f2a6455e510d8a4d6c8e93
```

:::caution
Don't specify a branch name as `ref`, because aqua treats the ref as immutable.

```yaml
registries:
- type: standard
  ref: main # Specify a tag or commit hash
```

:::

### `local` registry

e.g.

```yaml
registries:
- name: local
  type: local
  path: registry.yaml
- name: home
  type: local
  path: $HOME/aqua-registry.yaml
```

* `name`: Registry name
* `path`: The file path. Either absolute path or relative path from `aqua.yaml`. If `path` starts with `$HOME` + `OS specific path separator such as '/'`, it's replaced with the home directory path

Please see [Configuration (registry.yaml)](registry-config).

### `github_content` registry

e.g.

```yaml
registries:
- name: foo
  type: github_content
  repo_owner: aquaproj
  repo_name: aqua-registry
  ref: v3.90.0 # renovate: depName=aquaproj/aqua-registry
  path: registry.yaml
```

* `name`: Registry Name
* `repo_owner`: Repository Owner name
* `repo_name`: Repository name
* `ref`: Repository tag or commit hash. Don't specify a branch name as `ref`, because aqua treats the ref as immutable
* `path`: file path from the repository root directory

## `packages`

e.g.

```yaml
packages:
- name: helm/helm
  version: v3.7.0 # renovate: depName=helm/helm
- name: golangci/golangci-lint@v1.42.1
  registry: standard
```

* `name`: (string, optional) package name. If `import` isn't set, this is required
  * format: `<package name>[@<package version>]`
* `registry`: (string, optional) registry name
  * default value is `standard`
* `version`: (string, optional) package version
* `import`: (string, optional) glob pattern of package files. This is relative path from the configuration file. This is parsed with [filepath.Glob](https://pkg.go.dev/path/filepath#Glob). Please see [Split the list of packages](../tutorial-extras/split-config) too

The following two configuration is equivalent.

```yaml
- name: golangci/golangci-lint@v1.42.1
  registry: standard
```

```yaml
- name: golangci/golangci-lint
  registry: standard
  version: v1.42.1
```

When you want to update the package with Renovate,
the first style is better because you don't have to write code comments for Renovate's Regex Manager.

```yaml
- name: golangci/golangci-lint
  registry: standard
  version: v1.43.0 # renovate: depName=golangci/golangci-lint
```

If the package name in the code comment is wrong, the package version is changed wrongly.

```yaml
- name: golangci/golangci-lint
  registry: standard
  # depName is wrong!
  version: v1.42.1 # renovate: depName=helm/helm
```

On the other hand, you can prevent such a mis configuration by the first style.
