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

- `enabled`: If this is true, the checksum verification is enabled
- `require_checksum`: If this is true, it fails to install a package when the checksum isn't found in `aqua-checksums.json` and the package's checksum configuration is disabled.
  By default, `require_checksum` is false and if the checksum isn't found the package is installed
- `supported_envs`: (aqua >= [v1.29.0](https://github.com/aquaproj/aqua/releases/tag/v1.29.0)) If this is set, aqua adds checksums of only specific platforms. This feature makes `aqua-checksums.json` slim and avoids unneeded API call and download assets
