---
sidebar_position: 70
---

# Checksum Verification

* [Blog Post written in Japanese](https://zenn.dev/shunsuke_suzuki/articles/aqua-checksum-verification)

:::info
Please give your feedback! [GitHub Discussions](https://github.com/aquaproj/aqua/discussions/1297)
:::

Checksum Verification is a feature verifying downloaded assets with checksum.
Checksum Verification prevents the supply chain attack and allows you to install tools securely.

By default, checksum verification is disabled.
To enable it, please add the configuration to `aqua.yaml`.

```yaml
checksum:
  enabled: true
registries:
  - type: standard
    ref: v3.90.0 # renovate: depName=aquaproj/aqua-registry
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

Many tools publish checksum files, so aqua gets checksums from them.

e.g.

* [Terraform](https://releases.hashicorp.com/terraform/1.2.7/terraform_1.2.7_SHA256SUMS)
* [GitHub CLI](https://github.com/cli/cli/releases/download/v2.14.4/gh_2.14.4_checksums.txt)

If no checksum file for a tool is published, aqua can also get checksums by downloading assets and calculating checksums.

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

## Getting Started

Install aqua v1.20.0 or later.

```console
$ aqua -v
aqua version 1.22.0 (869d7b46a0697a5938dffd02a7ea219406762bf2)
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
INFO[0000] updating a package checksum                   aqua_version=1.22.0 env=darwin/arm64 package_name=suzuki-shunsuke/tfcmt package_registry=standard package_version=v4.0.0 program=aqua

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
INFO[0000] download and unarchive the package            aqua_version=1.22.0 env=darwin/arm64 package_name=suzuki-shunsuke/tfcmt package_version=v4.0.0 program=aqua registry=standard
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
INFO[0000] download and unarchive the package            aqua_version=1.22.0 env=darwin/arm64 package_name=suzuki-shunsuke/tfcmt package_version=v4.0.0 program=aqua registry=standard
ERRO[0000] install the package                           actual_checksum=372986BFADDBFEB680329341568FC4FBA0D6FA651B941BF4154585B7BAAA67DB aqua_version=1.22.0 env=darwin/arm64 error="checksum is invalid" expected_checksum="&{github_release/github.com/suzuki-shunsuke/tfcmt/v4.0.0/tfcmt_darwin_arm64.tar.gz 372986BFADDBFEB680329341568FC4FBA0D6FA651B941BF4154585B7BAAA67D0 sha256}" package_name=suzuki-shunsuke/tfcmt package_version=v4.0.0 program=aqua registry=standard
FATA[0000] aqua failed                                   aqua_version=1.22.0 env=darwin/arm64 error="it failed to install some packages" program=aqua
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
INFO[0000] download and unarchive the package            aqua_version=1.22.0 env=darwin/arm64 exe_path=/Users/shunsukesuzuki/.local/share/aquaproj-aqua/pkgs/github_release/github.com/suzuki-shunsuke/tfcmt/v4.0.0/tfcmt_darwin_arm64.tar.gz/tfcmt package=suzuki-shunsuke/tfcmt package_name=suzuki-shunsuke/tfcmt package_version=v4.0.0 program=aqua registry=standard
FATA[0001] aqua failed                                   actual_checksum=372986BFADDBFEB680329341568FC4FBA0D6FA651B941BF4154585B7BAAA67DB aqua_version=1.22.0 env=darwin/arm64 error="checksum is invalid" expected_checksum="&{github_release/github.com/suzuki-shunsuke/tfcmt/v4.0.0/tfcmt_darwin_arm64.tar.gz 372986BFADDBFEB680329341568FC4FBA0D6FA651B941BF4154585B7BAAA67D0 sha256}" program=aqua
```

Let's fix .aqua-chcksums.json, then you can install tfcmt.

```console
$ cp aqua-checksums.json.orig aqua-checksums.json
$ tfcmt -v
INFO[0000] download and unarchive the package            aqua_version=1.22.0 env=darwin/arm64 exe_path=/Users/shunsukesuzuki/.local/share/aquaproj-aqua/pkgs/github_release/github.com/suzuki-shunsuke/tfcmt/v4.0.0/tfcmt_darwin_arm64.tar.gz/tfcmt package=suzuki-shunsuke/tfcmt package_name=suzuki-shunsuke/tfcmt package_version=v4.0.0 program=aqua registry=standard
tfcmt version 4.0.0 (047e980d083da80303e6e8f4ebf6d5c9e7859716)
```

### Autoupdate `aqua-checksums.json` by GitHub Actions

https://github.com/aquaproj/example-update-checksum

## Question: Should `aqua-checksums.json` be managed with Git?

Yes. You should manage `aqua-checksums.json` with Git.

## Reference

Please see [reference](/docs/reference/checksum) too.
