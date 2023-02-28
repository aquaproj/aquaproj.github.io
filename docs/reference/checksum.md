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
  supported_envs: # By default, all envs are supported
    - darwin
    - linux
registries:
# ...
packages:
# ...
```

- `enabled`: If this is true, the checksum verification is enabled
- [require_checksum](#require_checksum)
- `supported_envs`: (aqua >= [v1.29.0](https://github.com/aquaproj/aqua/releases/tag/v1.29.0)) If this is set, aqua adds checksums of only specific platforms. This feature makes `aqua-checksums.json` slim and avoids unneeded API call and download assets

### require_checksum

If this is true, it fails to install a package when the checksum isn't found in `aqua-checksums.json`.
By default, `require_checksum` is false and even if the checksum isn't found the package is installed, which means the checksum isn't necessarily verified. This isn't good in terms of security.
We strongly recommend enabling `require_checksum` to enforce the checksum verification.

To add checksums to `aqua-checksums.json` before installing packages, please run `aqua update-checksum --deep`.

```console
$ aqua update-checksum [--deep]
```

If you manage `aqua.yaml` with Git, you should manage `aqua-checksums.json` with Git too. And we recommend [updating `aqua-checksums.json` automatically by GitHub Actions](https://github.com/aquaproj/example-update-checksum).

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

## Remove unused checksums with `-prune` option

aqua >= [v1.28.0](https://github.com/aquaproj/aqua/releases/tag/v1.28.0)

When tools are updated, checksums for old versions are basically unneeded.
Or when we remove some tools from `aqua.yaml`, checksums for those tools would be unneeded.

You can remove unused checksums by setting `-prune` option.

```
aqua update-checksum -prune
```

## Verify checksums of Registries

aqua >= [v1.30.0](https://github.com/aquaproj/aqua/releases/tag/v1.30.0)

[#1491](https://github.com/aquaproj/aqua/issues/1491) [#1508](https://github.com/aquaproj/aqua/pull/1508)

aqua verifies checksums of Registries if Checksum Verification is enabled.

aqua.yaml

```yaml
checksum:
  enabled: true
```

aqua-checksums.json

```json
{
  "checksums": [
    {
      "id": "registries/github_content/github.com/aquaproj/aqua-registry/v3.114.0/registry.yaml",
      "checksum": "b5b922c4d64609e536daffec6e480d0fed3ee56b16320a10c38ae12df7f045e8b20a0c05ec66eb28146cee42559e5e6c4e4bc49ce89ffe48a5640999cc6248bd",
      "algorithm": "sha512"
    }
  ]
}
```

If the checksum is invalid, it would fail to install Registries.

```
ERRO[0000] install the registry                          actual_checksum=b5b922c4d64609e536daffec6e480d0fed3ee56b16320a10c38ae12df7f045e8b20a0c05ec66eb28146cee42559e5e6c4e4bc49ce89ffe48a5640999cc6248be aqua_version= env=darwin/arm64 error="check a registry's checksum: checksum is invalid" exe_name=starship expected_checksum=b5b922c4d64609e536daffec6e480d0fed3ee56b16320a10c38ae12df7f045e8b20a0c05ec66eb28146cee42559e5e6c4e4bc49ce89ffe48a5640999cc6248bd program=aqua registry_name=standard
FATA[0000] aqua failed                                   aqua_version= env=darwin/arm64 error="it failed to install some registries" exe_name=starship program=aqua
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

* `sha1` (aqua >= [v1.29.0](https://github.com/aquaproj/aqua/releases/tag/v1.29.0))
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
