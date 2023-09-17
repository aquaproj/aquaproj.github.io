---
sidebar_position: 500
---

# Uninstall Packages

aqua >= [v2.11.0](https://github.com/aquaproj/aqua/releases/tag/v2.11.0) [#538](https://github.com/aquaproj/aqua/issues/538) [#2248](https://github.com/orgs/aquaproj/discussions/2248) [#2249](https://github.com/aquaproj/aqua/pull/2249)

```console
$ aqua rm --all [-a] # Uninstall all packages
```

```console
$ aqua rm [<registry name>,]<package name> [...] # Uninstall packages
```

```console
$ aqua rm -i # Select packages interactively with a fuzzy finder
```

e.g.

```console
$ aqua rm cli/cli direnv/direnv
```

## Limitation

1. The following package types can't be removed without `--all` option.

- `http`
- `go_install`

2. The fuzzy finder shows all packages, which include not installed packages.
