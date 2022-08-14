---
sidebar_position: 1100
---

# Checksum Verification

:::caution
This feature is still prerelease, and isn't merged into the default branch.
This feature is disabled by default, but in future we will release this feature and enable by default.
:::

[#427](https://github.com/aquaproj/aqua/issues/427)

## Overview

Checksum Verification is a feature checking if the downloaded asset is correct with checksum.
Checksum Verification prevent the supply chain attack and allows you to install tools securely.

By default, checksum verification is disabled.
To enable it, please add the configuration to `aqua.yaml`.

```yaml
checksum:
  enabled: true
registries:
  - type: standard
    ref: v3.26.1 # renovate: depName=aquaproj/aqua-registry
packages:
  - name: golangci/golangci-lint@v1.46.2
```

aqua creates a file `.aqua-checksums.json` in the same directory as aqua configuration file `aqua.yaml` and writes checksums to `.aqua-checksums.json`.

:::caution
`.aqua-checksums.json` is created and updated by `aqua` automatically, so you don't have to update this file manually.
:::

This file has pairs of asset unique id and checksum.

e.g.

```json
{
  "checksums": {
    "github_archive/github.com/b3nj5m1n/xdg-ninja/v0.2.0.1": "f4f9ab4500e7cf865ff8b68c343537e27b9ff1e6068cb1387e516e608f77cec8",
    "github_archive/github.com/bats-core/bats-core/v1.7.0": "ac70c2a153f108b1ac549c2eaa4154dea4a7c1cc421e3352f0ce6ea49435454e",
  }
}
```

Many tools publish checksum files, so aqua gets checksums from them.

e.g.

* [Terraform](https://releases.hashicorp.com/terraform/1.2.7/terraform_1.2.7_SHA256SUMS)
* [GitHub CLI](https://github.com/cli/cli/releases/download/v2.14.4/gh_2.14.4_checksums.txt)

When a tool is installed, aqua verifies the checksum as the following.

1. Download the tool in the temporal directory
1. Calculate the checksum from the downloaded file
1. Get the expected checksum
1. If the actual checksum is different from the expected checksum, make the installation failure
1. If the checksum isn't found in `.aqua-checksums.json`, the expected checksum is added to `.aqua-checksums.json`
1. Install the tool

aqua gets the expected from the following sources.

1. `.aqua-checksums.json`
1. checksum files that each tools publish
1. If the tool doesn't publish checkfum files, aqua treats the checksum calculated from the downloaded asset as the expected checksum

## `aqua update-checksum` command

You can create or update `.aqua-checksums.json` without installing tools by `aqua update-checksum` command.

```console
$ aqua update-checksum
```

## Question: Should `.aqua-checksums.json` be managed with Git?

Coming soon

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
        checksum: ^(.{64})
        file: "^.{64}\\s+(\\S+)$"
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
  checksum: ^(.{64})
  file: "^.{64}\\s+(\\S+)$"
```

aqua extracts pairs of checkfum and asset name using regular expressions.
