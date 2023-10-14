---
sidebar_position: 300
---

# Update registries and packages by update command

:::info
You can update them by Renovate too.
Please see [Update packages by Renovate](renovate.md) too.
:::

[#1657](https://github.com/aquaproj/aqua/issues/1657) [#2329](https://github.com/aquaproj/aqua/pull/2329) aqua >= v2.14.0

You can update registries and packages by `aqua update (up)` command.

If no argument is passed, all registries and packages are updated to the latest.

```sh
# Update all packages and registries to the latest versions
aqua update
```

This command has an alias "up"

```sh
aqua up
```

This command

- gets the latest version from GitHub Releases, GitHub Tags, and crates.io and updates aqua.yaml
- doesn't install packages

## Updated configuration file paths

This command finds a configuration file `aqua.yaml` according to [the rule](/docs/reference/config/#configuration-file-path) and updates only one file.
Once this command finds one file, it stops searching other aqua.yaml.

So if you want to update other files, please change the current directory or specify the configuration file path with the option `-c`.

```sh
aqua -c foo/aqua.yaml update
```

## Update only registries

If you want to update only registries, please use the `--only-registry [-r]` option.

```sh
# Update only registries
aqua update -r
```

## Update only packages

If you want to update only packages, please use the `--only-package [-p]` option.

```sh
# Update only packages
aqua update -p
```

## Update only specific commands

You can specify packages with command names. aqua finds packages that have these commands and updates them.

```sh
aqua update <command name> [<command name> ...]
```

e.g.

```sh
# Update cli/cli
aqua update gh
```

## Select packages with Fuzzy Finder

If you want to update only specific packages, please use the `-i` option.
You can select packages with the fuzzy finder.
If `-i` option is used, registries aren't updated.

```sh
# Select updated packages with fuzzy finder
aqua update -i
```

## Select the package version with Fuzzy Finder

If you want to select versions, please use the `-s` option.
You can select versions with the fuzzy finder. You can not only update but also downgrade packages.

```sh
# Select updated packages and versions with fuzzy finder
aqua update -i -s
```

## The field `version` is ignored

This command doesn't update packages if the `version` field is used.

```yaml
packages:
  - name: cli/cli@v2.0.0 # Update
  - name: gohugoio/hugo
    version: v0.118.0 # Doesn't update
```

So if you don't want to update specific packages, the `version` field is useful.

## commit hashes are ignored

This command doesn't update commit hashes.

```yaml
packages:
  - name: google/pprof@d04f2422c8a17569c14e84da0fae252d9529826b # Doesn't update
```
