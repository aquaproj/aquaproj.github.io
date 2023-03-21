---
sidebar_position: 400
---

# Checksum

## Configuration file path

aqua finds `aqua-checksums.json` and `.aqua-checksums.json`.
`aqua-checksums.json` takes precedence over `.aqua-checksums.json`.
If they don't exist, `aqua-checksums.json` is created.

:::info
The checksum is case insensitive.
:::

## aqua.yaml's checksum configuration

aqua.yaml

```yaml
checksum:
  enabled: true # By default, this is false
  require_checksum: true # By default, this is false
  supported_envs: # By default, all envs are supported
    - darwin
    - linux
registries:
# ...
packages:
# ...
```

- `enabled`: If this is true, the checksum verification is enabled. By default `enabled` is `false`. If `enabled` is false, other settings such as `require_checksum` are ignored
- [`require_checksum`](#require_checksum)
- `supported_envs`: (aqua >= [v1.29.0](https://github.com/aquaproj/aqua/releases/tag/v1.29.0)) If this is set, aqua adds checksums of only specific platforms. This feature makes `aqua-checksums.json` slim and avoids unneeded API call and download assets

### require_checksum

:::caution
The meaning of `require_checksum` was changed in aqua v2.0.0.
:::

#### Environment variable

aqua >= v1.38.0

You can enable `require_checksum` by the environment variable `AQUA_REQUIRE_CHECKSUM`.

```sh
export AQUA_REQUIRE_CHECKSUM=true
```

If `require_checksum` is set in a configuration file, `AQUA_REQUIRE_CHECKSUM` is ignored.

#### aqua v1

If `require_checksum` is true, it fails to install a package when the checksum isn't found in `aqua-checksums.json` and the package's checksum configuration is disabled.
By default, `require_checksum` is `false`.

#### aqua v2

If this is true, it fails to install a package when the checksum isn't found in `aqua-checksums.json`.
By default, `require_checksum` is `false`.
We strongly recommend enabling `require_checksum` to enforce the checksum verification.

To add checksums to `aqua-checksums.json` before installing packages, please run `aqua update-checksum`.

```console
$ aqua update-checksum
```

If you manage `aqua.yaml` with Git, you should manage `aqua-checksums.json` with Git too. And we recommend [updating `aqua-checksums.json` automatically by GitHub Actions](/docs/guides/checksum).
