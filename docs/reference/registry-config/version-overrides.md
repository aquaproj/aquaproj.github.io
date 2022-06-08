---
sidebar_position: 1800
---

# `version_constraint`, `version_overrides`

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

## version_overrides

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
