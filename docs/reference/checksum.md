---
sidebar_position: 1100
---

# Checksum Verification

:::caution
This feature is still beta.
To use this feature, use the prerelease version including the word `checksum`.

e.g. [v1.20.0-8-checksum](https://github.com/aquaproj/aqua/releases/tag/v1.20.0-8-checksum)

Or from [v1.20.0-1](https://github.com/aquaproj/aqua/releases/tag/v1.20.0-1), you can use this feature by setting the environment variable `AQUA_EXPERIMENTAL_CHECKSUM_VERIFICATION` to `true`.

```sh
export AQUA_EXPERIMENTAL_CHECKSUM_VERIFICATION=true
```
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
    ref: v3.27.0 # renovate: depName=aquaproj/aqua-registry
packages:
  - name: golangci/golangci-lint@v1.46.2
```

aqua creates or updates a file `aqua-checksums.json` in the same directory as aqua configuration file `aqua.yaml` and writes checksums.

e.g. `aqua-checksums.json`

```json
{
  "checksums": [
    {
      "id": "github_release/github.com/golangci/golangci-lint/v1.49.0/golangci-lint-1.49.0-darwin-amd64.tar.gz",
      "checksum": "20cd1215e0420db8cfa94a6cd3c9d325f7b39c07f2415a02d111568d8bc9e271",
      "algorithm": "sha256"
    },
    {
      "id": "github_release/github.com/golangci/golangci-lint/v1.49.0/golangci-lint-1.49.0-darwin-arm64.tar.gz",
      "checksum": "cabb1a4c35fe1dadbe5a81550a00871281a331e7660cd85ae16e936a7f0f6cfc",
      "algorithm": "sha256"
    }
  ]
}
```

:::info
aqua finds `aqua-checksums.json` and `.aqua-checksums.json`.
`aqua-checksums.json` takes precedence over `.aqua-checksums.json`.
If they don't exist, `aqua-checksums.json` is created.
:::

:::info
The checksum is case insensitive.
:::

Many tools publish checksum files, so aqua gets checksums from them.

e.g.

* [Terraform](https://releases.hashicorp.com/terraform/1.2.7/terraform_1.2.7_SHA256SUMS)
* [GitHub CLI](https://github.com/cli/cli/releases/download/v2.14.4/gh_2.14.4_checksums.txt)

When a tool is installed, aqua verifies the checksum as the following.

1. Download the tool in the temporal directory
1. Calculate the checksum from the downloaded file
1. Get the expected checksum
1. If the actual checksum is different from the expected checksum, make the installation failure
1. If the checksum isn't found in `aqua-checksums.json`, the expected checksum is added to `aqua-checksums.json`
1. Install the tool

aqua gets the expected from the following sources.

1. `aqua-checksums.json`
1. checksum files that each tools publish
1. If the tool doesn't publish checkfum files, aqua treats the checksum calculated from the downloaded asset as the expected checksum

## `aqua update-checksum` command

You can create or update `aqua-checksums.json` without installing tools by `aqua update-checksum` command.

```console
$ aqua update-checksum
```

By default, `aqua update-checksum` doesn't add checksums if the package's checksum configuration is disabled.

e.g. https://github.com/aquaproj/aqua-registry/blob/66c791c3cbbeb8847d175fbe2530a921539bbd8f/registry.yaml#L4192-L4205

```yaml
  - type: github_release
    repo_owner: cycloidio
    repo_name: terracognita
    asset: terracognita-{{.OS}}-{{.Arch}}.tar.gz
    checksum:
      enabled: false
```

If `-deep` option is set, `aqua update-checksum` downloads assets and calculate checksums.

```console
$ aqua update-checksum -deep
INFO[0001] downloading an asset to calculate the checksum  aqua_version= asset_name=terracognita-darwin-amd64.tar.gz checksum_env=darwin/amd64 env=linux/amd64 package_name=cycloidio/terracognita package_registry=standard package_version=v0.8.1 program=aqua
INFO[0008] downloading an asset to calculate the checksum  aqua_version= asset_name=terracognita-windows-amd64.tar.gz checksum_env=windows/amd64 env=linux/amd64 package_name=cycloidio/terracognita package_registry=standard package_version=v0.8.1 program=aqua
INFO[0014] downloading an asset to calculate the checksum  aqua_version= asset_name=terracognita-linux-amd64.tar.gz checksum_env=linux/amd64 env=linux/amd64 package_name=cycloidio/terracognita package_registry=standard package_version=v0.8.1 program=aqua
```

### Automate updating `aqua-checksums.json` in CI

https://github.com/aquaproj/example-update-checksum

## aqua-registry version

From [v3.27.0](https://github.com/aquaproj/aqua-registry/releases/tag/v3.27.0), aqua-registry supports the checksum verification.

## Getting Started

Install the prerelease version.

```console
$ aqua -v
aqua version 1.20.0-1 (3577858929cbcdd608c3cab80315b8b0ec1efda0)
```

Set the environment variable `AQUA_EXPERIMENTAL_CHECKSUM_VERIFICATION` to `true`.

```console
$ export AQUA_EXPERIMENTAL_CHECKSUM_VERIFICATION=true
```

Scaffold `aqua.yaml` and edit to enable the checksum verification.

```console
$ aqua init
$ vi aqua.yaml
```

```yaml
---
# aqua - Declarative CLI Version Manager
# https://aquaproj.github.io/
checksum:
  enabled: true
registries:
- type: standard
  ref: v3.66.0 # renovate: depName=aquaproj/aqua-registry
packages:
```

And add `suzuki-shunsuke/tfcmt` by `aqua g` command.

```console
$ aqua g -i suzuki-shunsuke/tfcmt
```

```yaml
packages:
- name: suzuki-shunsuke/tfcmt@v4.0.0
```

Run `aqua update-checksum`.

```console
$ aqua update-checksum
INFO[0000] updating a package checksum                   aqua_version=1.20.0-1 env=darwin/arm64 package_name=suzuki-shunsuke/tfcmt package_registry=standard package_version=v4.0.0 program=aqua

$ cat aqua-checksums.json
{
  "checksums": [
    {
      "id": "github_release/github.com/suzuki-shunsuke/tfcmt/v4.0.0/tfcmt_darwin_amd64.tar.gz",
      "checksum": "346d43e34ee990c26ebcbc80936bea6d6f524bcc446aa74d1f07c42708fc480b",
      "algorithm": "sha256"
    },
    {
      "id": "github_release/github.com/suzuki-shunsuke/tfcmt/v4.0.0/tfcmt_darwin_arm64.tar.gz",
      "checksum": "372986bfaddbfeb680329341568fc4fba0d6fa651b941bf4154585b7baaa67db",
      "algorithm": "sha256"
    },
    {
      "id": "github_release/github.com/suzuki-shunsuke/tfcmt/v4.0.0/tfcmt_linux_amd64.tar.gz",
      "checksum": "e950763e64504e40a45c75c81a35d115f98f164264e159e4e4b7e2534d3d8087",
      "algorithm": "sha256"
    },
    {
      "id": "github_release/github.com/suzuki-shunsuke/tfcmt/v4.0.0/tfcmt_linux_arm64.tar.gz",
      "checksum": "8ce944ccaf7ff5a150b256d75d8fe3d04ba741d5586bb5f100b9df80294f14fa",
      "algorithm": "sha256"
    },
    {
      "id": "github_release/github.com/suzuki-shunsuke/tfcmt/v4.0.0/tfcmt_windows_amd64.tar.gz",
      "checksum": "2228e167f3ddf61e6ccfd30648cf649f7b18d98eb6b2150e6c3522183628bda9",
      "algorithm": "sha256"
    },
    {
      "id": "github_release/github.com/suzuki-shunsuke/tfcmt/v4.0.0/tfcmt_windows_arm64.tar.gz",
      "checksum": "5435b0d4cca909f752dce456fd186bef2de994f7d1c24665fa8507e9d6019e5b",
      "algorithm": "sha256"
    }
  ]
}
```

If tfcmt v4.0.0 is already installed, please uninstall once.

```console
$ aqua which tfcmt
/Users/shunsukesuzuki/.local/share/aquaproj-aqua/pkgs/github_release/github.com/suzuki-shunsuke/tfcmt/v4.0.0/tfcmt_darwin_arm64.tar.gz/tfcmt

$ rm -Rf /Users/shunsukesuzuki/.local/share/aquaproj-aqua/pkgs/github_release/github.com/suzuki-shunsuke/tfcmt/v4.0.0
```

And run `aqua i`. tfcmt will be installed successfully.

```console
$ aqua i
INFO[0000] download and unarchive the package            aqua_version=1.20.0-1 env=darwin/arm64 package_name=suzuki-shunsuke/tfcmt package_version=v4.0.0 program=aqua registry=standard
```

To confirm the checksum verification, let's edit the checksum in `aqua-checksums.json` intentionally.

```console
$ cp aqua-checksums.json aqua-checksums.json.orig
$ vi aqua-checksums.json
$ diff aqua-checksums.json aqua-checksums.json.orig 
10c10
<       "checksum": "372986bfaddbfeb680329341568fc4fba0d6fa651b941bf4154585b7baaa67d0",
---
>       "checksum": "372986bfaddbfeb680329341568fc4fba0d6fa651b941bf4154585b7baaa67db",
```

And try to reinstall tfcmt.

```console
$ rm -Rf /Users/shunsukesuzuki/.local/share/aquaproj-aqua/pkgs/github_release/github.com/suzuki-shunsuke/tfcmt/v4.0.0
$ aqua i
INFO[0000] download and unarchive the package            aqua_version=1.20.0-1 env=darwin/arm64 package_name=suzuki-shunsuke/tfcmt package_version=v4.0.0 program=aqua registry=standard
ERRO[0000] install the package                           actual_checksum=372986BFADDBFEB680329341568FC4FBA0D6FA651B941BF4154585B7BAAA67DB aqua_version=1.20.0-1 env=darwin/arm64 error="checksum is invalid" expected_checksum="&{github_release/github.com/suzuki-shunsuke/tfcmt/v4.0.0/tfcmt_darwin_arm64.tar.gz 372986BFADDBFEB680329341568FC4FBA0D6FA651B941BF4154585B7BAAA67D0 sha256}" package_name=suzuki-shunsuke/tfcmt package_version=v4.0.0 program=aqua registry=standard
FATA[0000] aqua failed                                   aqua_version=1.20.0-1 env=darwin/arm64 error="it failed to install some packages" program=aqua
```

Then it failed to install tfcmt because the checksum is wrong.
Of course, tfcmt isn't installed.

```console
$ ls /Users/shunsukesuzuki/.local/share/aquaproj-aqua/pkgs/github_release/github.com/suzuki-shunsuke/tfcmt/v4.0.0
gls: cannot access '/Users/shunsukesuzuki/.local/share/aquaproj-aqua/pkgs/github_release/github.com/suzuki-shunsuke/tfcmt/v4.0.0': No such file or directory
```

The checksum verification also works in the lazy install.

```console
$ tfcmt -v
INFO[0000] download and unarchive the package            aqua_version=1.20.0-1 env=darwin/arm64 exe_path=/Users/shunsukesuzuki/.local/share/aquaproj-aqua/pkgs/github_release/github.com/suzuki-shunsuke/tfcmt/v4.0.0/tfcmt_darwin_arm64.tar.gz/tfcmt package=suzuki-shunsuke/tfcmt package_name=suzuki-shunsuke/tfcmt package_version=v4.0.0 program=aqua registry=standard
FATA[0001] aqua failed                                   actual_checksum=372986BFADDBFEB680329341568FC4FBA0D6FA651B941BF4154585B7BAAA67DB aqua_version=1.20.0-1 env=darwin/arm64 error="checksum is invalid" expected_checksum="&{github_release/github.com/suzuki-shunsuke/tfcmt/v4.0.0/tfcmt_darwin_arm64.tar.gz 372986BFADDBFEB680329341568FC4FBA0D6FA651B941BF4154585B7BAAA67D0 sha256}" program=aqua
```

Let's fix .aqua-chcksums.json, then you can install tfcmt.


```console
$ cp aqua-checksums.json.orig aqua-checksums.json
$ tfcmt -v
INFO[0000] download and unarchive the package            aqua_version=1.20.0-1 env=darwin/arm64 exe_path=/Users/shunsukesuzuki/.local/share/aquaproj-aqua/pkgs/github_release/github.com/suzuki-shunsuke/tfcmt/v4.0.0/tfcmt_darwin_arm64.tar.gz/tfcmt package=suzuki-shunsuke/tfcmt package_name=suzuki-shunsuke/tfcmt package_version=v4.0.0 program=aqua registry=standard
tfcmt version 4.0.0 (047e980d083da80303e6e8f4ebf6d5c9e7859716)
```

## Question: Should `aqua-checksums.json` be managed with Git?

It's up to you, but we think you should manage `aqua-checksums.json` with Git.

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
