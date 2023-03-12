---
sidebar_position: 1700
---

# Template String

Some fields are parsed with [Go's text/template](https://pkg.go.dev/text/template) and [sprig](http://masterminds.github.io/sprig/).

:::caution
The following sprig functions are removed for security reason.

* [env](http://masterminds.github.io/sprig/os.html)
* [expandenv](http://masterminds.github.io/sprig/os.html)
* [getHostByName](http://masterminds.github.io/sprig/network.html)
:::

## Common Template Functions

* `trimV`: This is equivalent to `trimPrefix "v"`

## Template Variables

* `OS`: A string which `GOOS` is replaced by `replacements`. If `replacements` isn't set, `OS` is equal to `GOOS`. Basically you should use `OS` for the consistency
* `Arch`: A string which `GOARCH` is replaced by `replacements`. If `replacements` isn't set, `Arch` is equal to `GOARCH`. Basically you should use `OS` for the consistency
* `GOOS`: Go's [runtime.GOOS](https://pkg.go.dev/runtime#pkg-constants)
* `GOARCH`: Go's [runtime.GOARCH](https://pkg.go.dev/runtime#pkg-constants)
* `Version`: Package `version`
* `SemVer`: Package version that [version_prefix](version-prefix.md) is trimmed from `Version`. For example, if `Version` is `cli/v1.0.0` and `version_prefix` is `cli/`, then `SemVer` is `v1.0.0`
* `Format`: Package `format`
* `FileName`: `files[].name`
