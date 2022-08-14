---
sidebar_position: 1100
---

# Checksum Verification

:::caution
This feature is still prerelease, and isn't merged into the default branch.
This feature is disabled by default, but in future we will release this feature and enable by default.
:::

[#427](https://github.com/aquaproj/aqua/issues/427)

## Release tag, Development branch

This feature is still prerelease, and isn't merged into the default branch.
Until this feature will be released, we will publish prerelease versions.
The prerelease version includes the word `checksum`.

e.g. [v1.20.0-1-checksum](https://github.com/aquaproj/aqua/releases/tag/v1.20.0-1-checksum)

We are developing this feature in the pull request [#1070](https://github.com/aquaproj/aqua/pull/1070).

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

## aqua-registry version

From [v3.27.0](https://github.com/aquaproj/aqua-registry/releases/tag/v3.27.0), aqua-registry supports the checksum verification.

## Getting Started

Install the prerelease version.

```console
$ aqua -v
aqua version 1.20.0-1-checksum (0b058960d4ead348a27a1629770840a0ed69cbe8)
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
  ref: v3.27.0 # renovate: depName=aquaproj/aqua-registry
packages:
```

And add `suzuki-shunsuke/tfcmt` by `aqua g` command.

```console
$ aqua g -i suzuki-shunsuke/tfcmt
```

```yaml
packages:
- name: suzuki-shunsuke/tfcmt@v3.4.0
```

Run `aqua update-checksum`.

```console
$ aqua update-checksum
INFO[0000] updating a package checksum                   aqua_version=1.20.0-1-checksum env=darwin/arm64 package_name=suzuki-shunsuke/tfcmt package_registry=standard package_version=v3.4.0 program=aqua

$ cat .aqua-checksums.json
{
  "checksums": {
    "github_release/github.com/suzuki-shunsuke/tfcmt/v3.4.0/tfcmt_darwin_amd64.tar.gz": "e98e4216a0ec38d8a4c08a8ba0b3d3df97c022d79ffdf4b8083be6c39d2208d3",
    "github_release/github.com/suzuki-shunsuke/tfcmt/v3.4.0/tfcmt_darwin_arm64.tar.gz": "bd223ccee50da1b853a9be5c56696d4114e8aac8c2feb3820dff41877d6e64cd",
    "github_release/github.com/suzuki-shunsuke/tfcmt/v3.4.0/tfcmt_linux_amd64.tar.gz": "f186c3d6b9cb8ded099124a3ef3869e13a23b0272c99a0ab434b89c3ed73ee6e",
    "github_release/github.com/suzuki-shunsuke/tfcmt/v3.4.0/tfcmt_linux_arm64.tar.gz": "2b1dc97b5ef2d58d2480d1020a38293c0831e51d6ba6118cb4954d01c32e584f",
    "github_release/github.com/suzuki-shunsuke/tfcmt/v3.4.0/tfcmt_windows_amd64.tar.gz": "9748b9895bed85390c8820c5ced0b84134240113d3f15fbfa8aadd8f4476393d",
    "github_release/github.com/suzuki-shunsuke/tfcmt/v3.4.0/tfcmt_windows_arm64.tar.gz": "0cfa9f56f626f4ab4c0cacfed22616c984d568d70bd67721d052c39749047f84"
  }
}
```

If tfcmt v3.4.0 is already installed, please uninstall once.

```console
$ aqua which tfcmt
/Users/shunsukesuzuki/.local/share/aquaproj-aqua/pkgs/github_release/github.com/suzuki-shunsuke/tfcmt/v3.4.0/tfcmt_darwin_arm64.tar.gz/tfcmt

$ rm -Rf /Users/shunsukesuzuki/.local/share/aquaproj-aqua/pkgs/github_release/github.com/suzuki-shunsuke/tfcmt/v3.4.0
```

And run `aqua i`. tfcmt will be installed successfully.

```console
$ aqua i
INFO[0000] download and unarchive the package            aqua_version=1.20.0-1-checksum env=darwin/arm64 package_name=suzuki-shunsuke/tfcmt package_version=v3.4.0 program=aqua registry=standard
```

To confirm the checksum verification, let's edit the checksum in `.aqua-checksums.json` intentionally.

```console
$ cp .aqua-checksums.json .aqua-checksums.json.orig
$ vi .aqua-checksums.json
$ diff .aqua-checksums.json .aqua-checksums.json.orig 
4c4
<     "github_release/github.com/suzuki-shunsuke/tfcmt/v3.4.0/tfcmt_darwin_arm64.tar.gz": "bd223ccee50da1b853a9be5c56696d4114e8aac8c2feb3820dff41877d6e64c0",
---
>     "github_release/github.com/suzuki-shunsuke/tfcmt/v3.4.0/tfcmt_darwin_arm64.tar.gz": "bd223ccee50da1b853a9be5c56696d4114e8aac8c2feb3820dff41877d6e64cd",
```

And try to reinstall tfcmt.

```console
$ rm -Rf /Users/shunsukesuzuki/.local/share/aquaproj-aqua/pkgs/github_release/github.com/suzuki-shunsuke/tfcmt/v3.4.0
$ aqua i
INFO[0000] download and unarchive the package            aqua_version=1.20.0-1-checksum env=darwin/arm64 package_name=suzuki-shunsuke/tfcmt package_version=v3.4.0 program=aqua registry=standard
ERRO[0000] install the package                           actual_checksum=bd223ccee50da1b853a9be5c56696d4114e8aac8c2feb3820dff41877d6e64cd aqua_version=1.20.0-1-checksum env=darwin/arm64 error="checksum is invalid" expected_checksum=bd223ccee50da1b853a9be5c56696d4114e8aac8c2feb3820dff41877d6e64c0 package_name=suzuki-shunsuke/tfcmt package_version=v3.4.0 program=aqua registry=standard
FATA[0000] aqua failed                                   aqua_version=1.20.0-1-checksum env=darwin/arm64 error="it failed to install some packages" program=aqua
```

Then it failed to install tfcmt v3.4.0 because the checksum is wrong.
Of course, tfcmt v3.4.0 isn't installed.

```console
$ ls /Users/shunsukesuzuki/.local/share/aquaproj-aqua/pkgs/github_release/github.com/suzuki-shunsuke/tfcmt/v3.4.0
gls: cannot access '/Users/shunsukesuzuki/.local/share/aquaproj-aqua/pkgs/github_release/github.com/suzuki-shunsuke/tfcmt/v3.4.0': No such file or directory
```

The checksum verification also works in the lazy install.

```console
$ tfcmt -v
INFO[0000] download and unarchive the package            aqua_version=1.20.0-1-checksum env=darwin/arm64 exe_path=/Users/shunsukesuzuki/.local/share/aquaproj-aqua/pkgs/github_release/github.com/suzuki-shunsuke/tfcmt/v3.4.0/tfcmt_darwin_arm64.tar.gz/tfcmt package=suzuki-shunsuke/tfcmt package_name=suzuki-shunsuke/tfcmt package_version=v3.4.0 program=aqua registry=standard
FATA[0001] aqua failed                                   actual_checksum=bd223ccee50da1b853a9be5c56696d4114e8aac8c2feb3820dff41877d6e64cd aqua_version=1.20.0-1-checksum env=darwin/arm64 error="checksum is invalid" expected_checksum=bd223ccee50da1b853a9be5c56696d4114e8aac8c2feb3820dff41877d6e64c0 program=aqua
```

Let's fix .aqua-chcksums.json, then you can install tfcmt v3.4.0.


```console
$ cp .aqua-checksums.json.orig .aqua-checksums.json
$ tfcmt -v
INFO[0000] download and unarchive the package            aqua_version=1.20.0-1-checksum env=darwin/arm64 exe_path=/Users/shunsukesuzuki/.local/share/aquaproj-aqua/pkgs/github_release/github.com/suzuki-shunsuke/tfcmt/v3.4.0/tfcmt_darwin_arm64.tar.gz/tfcmt package=suzuki-shunsuke/tfcmt package_name=suzuki-shunsuke/tfcmt package_version=v3.4.0 program=aqua registry=standard
tfcmt version 3.4.0 (0258ad962fad8cfd6d5eb82bd48b113435d932ff)
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
