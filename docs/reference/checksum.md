---
sidebar_position: 1100
---

# Checksum Verification

`aqua >= v1.20.0`

[#427](https://github.com/aquaproj/aqua/issues/427)

## Tutorial

Please see the [tutorial](/docs/tutorial-extras/checksum).

## Configuration file path

aqua finds `aqua-checksums.json` and `.aqua-checksums.json`.
`aqua-checksums.json` takes precedence over `.aqua-checksums.json`.
If they don't exist, `aqua-checksums.json` is created.

:::info
The checksum is case insensitive.
:::

## How it works

When a tool is installed, aqua verifies the checksum as the following.

1. Download the tool in the temporal directory
1. Calculate the checksum from the downloaded file
1. Get the expected checksum
1. If the actual checksum is different from the expected checksum, make the installation failure
1. If the checksum isn't found in `aqua-checksums.json`, the expected checksum is added to `aqua-checksums.json`
1. Install the tool

aqua gets the expected checksum from the following sources.

1. `aqua-checksums.json`
1. checksum files that each tools publish
1. If the tool doesn't publish checkfum files, aqua treats the checksum calculated from the downloaded asset as the expected checksum

## aqua-registry version

From [v3.90.0](https://github.com/aquaproj/aqua-registry/releases/tag/v3.90.0), aqua-registry supports the checksum verification.

## aqua.yaml's checksum configuration

aqua.yaml

```yaml
checksum:
  enabled: true # By default, this is false
  require_checksum: true # By default, this is false
registries:
# ...
packages:
# ...
```

- `enabled`: If this is true, the checksum verification is enabled
- `require_checksum`: If this is true, it fails to install a package when the checksum isn't found in `aqua-checksums.json` and the package's checksum configuration is disabled.
  By default, `require_checksum` is false and if the checksum isn't found the package is installed

## Registry's checksum configuration

Each registry's package configuration has the configuration about checksum.

e.g. [GitHub CLI](https://github.com/aquaproj/aqua-registry/blob/109811850abf8ec34f8715f3384ba8218f05ec1d/pkgs/cli/cli/registry.yaml)

```yaml
packages:
  - type: github_release
    repo_owner: cli
    repo_name: cli
    # ...
    checksum:
      type: github_release
      asset: gh_{{trimV .Version}}_checksums.txt
      file_format: regexp
      algorithm: sha256
      pattern:
        checksum: ^(\b[A-Fa-f0-9]{64}\b)
        file: "^\\b[A-Fa-f0-9]{64}\\b\\s+(\\S+)$"
```

e.g. [ArgoCD CLI](https://github.com/aquaproj/aqua-registry/blob/109811850abf8ec34f8715f3384ba8218f05ec1d/pkgs/argoproj/argo-cd/registry.yaml)

```yaml
packages:
  - type: github_release
    repo_owner: argoproj
    repo_name: argo-cd
    # ...
    asset: argocd-{{.OS}}-{{.Arch}}
    checksum:
      type: github_release
      asset: "{{.Asset}}.sha256"
      file_format: raw
      algorithm: sha256
```

## Generate and patch checksum configuration automatically

It is bothersome to write the checksum configuration manually, so aqua supports scaffolding the configuration.

[aqua gr](scaffold-registry) scaffolds the checksum configuration too.

And you can also patch the checksum configuration to the existing registries by [aqua-registry patch-checksum command](https://github.com/aquaproj/registry-tool/blob/main/USAGE.md#aqua-registry-patch-checksum).

:::caution
The scaffolding isn't perfect, so sometimes you have to fix the code manually.
:::

### `enabled`

You can enable or disable the checksum download by `enabled` attribute.

```yaml
packages:
  - type: github_release
    repo_owner: argoproj
    repo_name: argo-cd
    # ...
    checksum:
      enabled: false
```

By default, checkdum download is disabled.

### checksum `algorithm`

The following `algorithm` are supported.

* `sha256`
* `sha512`
* `md5`

### checksum `type`

The following `type` are supported.

- `github_release`
- `http`

`github_release` requires the following attributes.

- `asset`: GitHub Release Asset name. The format is a Go's `text/template` string

`http` requires the following attributes.

- `url`: Checksum file's download URL. The format is a Go's `text/template` string

### checksum `file_format`

The following `file_format` are supported.

- `regexp`
- `raw`

`regexp` requires the following attributes.

- `pattern.checksum`:
- `pattern.file`:

```yaml
pattern:
  checksum: ^(\b[A-Fa-f0-9]{64}\b)
  file: "^\\b[A-Fa-f0-9]{64}\\b\\s+(\\S+)$"
```

aqua extracts pairs of checkfum and asset name using regular expressions.
If the checksum file includes only one checksum, you can omit `pattern.file`.
