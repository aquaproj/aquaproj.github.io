---
sidebar_position: 445
---

# Registry Style Guide

:::caution
If you develop your custom registry, you don't have to conform this style guide.
But the guide would be useful to write good and consistent configuration.
:::

## Scaffold configuration by `aqua gr` command

First, we recommend to scaffold configuration by `aqua gr` command.

[Scaffold Registry Configuration](scaffold-registry).

## Format with prettier

https://prettier.io/

```console
$ npm i -g prettier
```

```console
$ prettier -w registry.yaml
```

## Remove spaces in the template `{{ ` and ` }}`

:thumbsup:

```yaml
asset: tfcmt_{{.OS}}_{{.Arch}}.tar.gz
```

:thumbsdown:

```yaml
asset: tfcmt_{{ .OS }}_{{ .Arch }}.tar.gz
```

## Remove characters `.!` from the end of the description

:thumbsup:

```yaml
description: A command-line tool that makes git easier to use with GitHub
```

:thumbsdown:

```yaml
description: A command-line tool that makes git easier to use with GitHub.
```

## Trim spaces

:thumbsup:

```yaml
description: A command-line tool that makes git easier to use with GitHub
```

:thumbsdown:

```yaml
description: "  A command-line tool that makes git easier to use with GitHub  "
```

## Remove unneeded quotes of strings

:thumbsup:

```yaml
description: A command-line tool that makes git easier to use with GitHub
```

:thumbsdown:

```yaml
description: "A command-line tool that makes git easier to use with GitHub"
```

## Avoid `if` and `for` statement in templates

:thumbsup:

```yaml
asset: foo.{{.Format}}
format: tar.gz
overrides:
  - goos: windows
    format: zip
```

:thumbsdown:

```yaml
asset: 'foo.{{if eq .GOOS "windows"}}zip{{else}}tar.gz{{end}}'
```

## `version_overrides` Style Guide

e.g.

```yaml
# Latest setting
version_constraint: semver(">= 5.0.0")
version_overrides:
  - version_constraint: semver(">= 4.0.0")
    # ...
  - version_constraint: semver(">= 3.0.0")
    # ...
  - version_constraint: "true" # Oldest setting
```

## If the `format` is `raw`, `files[].src` isn't needed

:thumbsup:

```yaml
format: raw
files:
  - name: swagger
```

:thumbsdown:

```yaml
format: raw
files:
  - name: swagger
    src: swagger_{{.OS}}_{{.Arch}} # unneeded
```

## Consideration about Rust

:warning: The author [@suzuki-shunsuke](https://github.com/suzuki-shunsuke) isn't familiar with Rust. If you have any opinion, please let us know.

- linux: use the asset for not `gnu` but `musl` if both of them are supported
  - ref: https://github.com/aquaproj/aqua-registry/pull/2153#discussion_r805116879
- windows: use the asset for not `gnu` but `msvc` if both of them are supported
  - ref: https://rust-lang.github.io/rustup/installation/windows.html

:thumbsup:

```yaml
replacements:
  linux: unknown-linux-musl
  windows: pc-windows-msvc
```

:thumbsdown:

```yaml
replacements:
  linux: unknown-linux-gnu
  windows: pc-windows-gnu
```

## Use `overrides` instead of `format_overrides`

:thumbsup:

```yaml
format: tar.gz
overrides:
  - goos: windows
    format: zip
```

:thumbsdown:

```yaml
format: tar.gz
format_overrides:
  - goos: windows
    format: zip
```

## Don't use emojis as much as possible

In some environments, emojis are corrupted. e.g. https://github.com/aquaproj/aqua/pull/1004#issuecomment-1183710603

:thumbsup:

```yaml
description: CLI and Go library for CODEOWNERS files
```

:thumbsdown:

```yaml
description: 🔒 CLI and Go library for CODEOWNERS files
```

## Omit the setting which is equivalent to the default value

When `repo_owner` and `repo_name` are set, you can omit some attributes.

:thumbsup:

```yaml
repo_owner: weaveworks
repo_name: eksctl
```

:thumbsdown:

```yaml
repo_owner: weaveworks
repo_name: eksctl
name: weaveworks/eksctl
link: https://github.com/weaveworks/eksctl
files:
  - name: eksctl
```

## Use `aliases` only for keeping the compatibility

Please see [here](/docs/reference/registry-config/aliases#use-aliases-only-for-keeping-the-compatibility)

## Use `supported_envs` rather than `supported_if`

Please see [the caution](/docs/reference/registry-config/supported-if).

## Select `type` according to the following order

1. github_release
1. github_content
1. github_archive
1. http
1. go_install

For example, you can also use `http` type to install the package from GitHub Releases, but in that case you should use `github_release` rather than `http`.

## Use `go_install` rather than `go`

Please see [the caution](/docs/reference/registry-config/go-package).
