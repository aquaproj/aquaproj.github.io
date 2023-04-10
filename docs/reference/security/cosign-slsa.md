---
sidebar_position: 1150
---

# Cosign and SLSA Provenance Support

- `aqua >= v1.26.0`
- `aqua-installer >= v2.0.0`

Japanese: [Cosign と SLSA による aqua CLI Version Manager の Security 改善](https://zenn.dev/shunsuke_suzuki/articles/aqua-cosign-slsa)

aqua supports verifying aqua and packages with [Cosign](https://docs.sigstore.dev/cosign/overview/) and [slsa-verifier](https://github.com/slsa-framework/slsa-verifier).

:::caution
You don't have to install Cosign and slsa-verifier, because aqua installs Cosign automatically and slsa-verifier is embedded to aqua as Go library.
:::

## Getting Started

First, let's create a container to try this tutorial in clean environment.

```
docker run --rm -ti alpine:3.17.0 sh
```

```
apk add curl bash sudo
adduser -u 1000 -G wheel -D foo
visudo # Uncomment "%wheel ALL=(ALL) NOPASSWD: ALL"
su foo
mkdir ~/workspace
cd ~/workspace
export PATH="${AQUA_ROOT_DIR:-${XDG_DATA_HOME:-$HOME/.local/share}/aquaproj-aqua}/bin:$PATH"
```

## Verify aqua-installer with checksum

You can install aqua by the following one liner.

```sh
curl -sSfL https://raw.githubusercontent.com/aquaproj/aqua-installer/v2.1.1/aqua-installer | bash
```

But the one liner is a bit dangerous because aqua-installer may be tampered.

You can verify aqua-installer with checksum.

```sh
curl -sSfL -O https://raw.githubusercontent.com/aquaproj/aqua-installer/v2.1.1/aqua-installer
echo "c2af02bdd15da6794f9c98db40332c804224930212f553a805425441f8331665  aqua-installer" | sha256sum -c
chmod +x aqua-installer
```

You have to update the checksum everytime aqua-installer is updated, but aqua-installer isn't updated so frequently.

## Verify aqua

Let's install aqua with aqua-installer. aqua-installer verifies aqua with slsa-verifier.

```sh
./aqua-installer
```

Please see the log. You can confirm aqua is verified with slsa-verifier.

```
INFO[0001] verify a package with slsa-verifier           aqua_version=1.26.2 env=linux/arm64 new_version=v1.26.2 package_name=aquaproj/aqua package_version=v1.26.2 program=aqua registry=
Verified signature against tlog entry index 9918167 at URL: https://rekor.sigstore.dev/api/v1/log/entries/24296fb24b8ad77a4f5de5310f955deac79a5e8f16363b66a038bc6436fd330668a2933d69c75228
Verified build using builder https://github.com/slsa-framework/slsa-github-generator/.github/workflows/generator_generic_slsa3.yml@refs/tags/v1.4.0 at commit d37dec79a9b96c85592eb24d69f9972cbd176f9a
```

If aqua is tampered the installation would fail.

## Verify packages

aqua supports verifying packages with Cosign and slsa-verifier, but it requires the following things.

1. A tool publishes signature or SLSA Provenance
1. A package has settings for Cosign or SLSA Provenance

At the moment, there are very few tools publishing signature or SLSA Provenance, but we hope many tools publishes them in future.

### Verify packages with Cosign

For example, [tflint](https://github.com/terraform-linters/tflint) publishes signature in [GitHub Releases](https://github.com/terraform-linters/tflint/releases).

And standard registry has a setting of cosign for tflint.

[registry.yaml](https://github.com/aquaproj/aqua-registry/blob/726e274fade1a6fc71cde029f858893131b38078/pkgs/terraform-linters/tflint/registry.yaml#L11-L25)

```yaml
    checksum:
      type: github_release
      asset: checksums.txt
      file_format: regexp
      algorithm: sha256
      pattern:
        checksum: ^(\b[A-Fa-f0-9]{64}\b)
        file: "^\\b[A-Fa-f0-9]{64}\\b\\s+(\\S+)$"
      cosign:
        cosign_experimental: true
        opts:
          - --signature
          - https://github.com/terraform-linters/tflint/releases/download/{{.Version}}/checksums.txt.keyless.sig
          - --certificate
          - https://github.com/terraform-linters/tflint/releases/download/{{.Version}}/checksums.txt.pem
```

Let's install tflint. To verify checksum's signature, you have to enable [Checksum Verification](/docs/guides/checksum).

```sh
aqua init
vi aqua.yaml # Enable checksum verification
aqua g -i terraform-linters/tflint
aqua i
```

Please see the log. You can confirm Cosign is installed automatically.

```
INFO[0000] download and unarchive the package            aqua_version=1.26.2 env=linux/arm64 package_name=sigstore/cosign package_version=v1.13.1 program=aqua registry=
INFO[0008] downloading a checksum file                   aqua_version=1.26.2 env=linux/arm64 package_name=sigstore/cosign package_version=v1.13.1 program=aqua registry=
```

And tflint is verified with Cosign.

```
INFO[0002] verify a checksum file with Cosign            aqua_version=1.26.2 env=linux/arm64 package_name=terraform-linters/tflint package_version=v0.44.0 program=aqua registry=standard
tlog entry verified with uuid: fab3e75f7e01ac757d8ddab411a7fd0c8b35c4ea2d0cb31c4c5bfdbe7ac5cf42 index: 9877371
Verified OK
```

### Verify packages with slsa-verifier

[aquaproj/example-go-slsa-provenance](https://github.com/aquaproj/example-go-slsa-provenance) publishes SLSA Provenance,
so let's install it.

```sh
aqua g -i aquaproj/example-go-slsa-provenance
aqua i
```

Please see the log. You can confirm the package is verified with slsa-verifier.

```
INFO[0000] verify a package with slsa-verifier           aqua_version=1.26.2 env=linux/arm64 package_name=aquaproj/example-go-slsa-provenance package_version=v0.1.2 program=aqua registry=standard
Verified signature against tlog entry index 9476343 at URL: https://rekor.sigstore.dev/api/v1/log/entries/24296fb24b8ad77a92eb2665ca9575614bc6b0833267eca755ca5d2e8d5a563c2b70c310dad3c0f6
Verified build using builder https://github.com/slsa-framework/slsa-github-generator/.github/workflows/generator_generic_slsa3.yml@refs/tags/v1.4.0 at commit 4581df55e03c5155801ad10b88b19e42f99d8861
```

If the package is tampered, the installation would fail.
Let's try to install example-go-slsa-provenance v0.1.1, which was tamperred intentionally for the demonstration.

```
vi aqua.yaml # Change the version to v0.1.1
aqua i
```

Then the installation would fail expectedly.

```
INFO[0002] verify a package with slsa-verifier           aqua_version=1.26.2 env=linux/arm64 package_name=aquaproj/example-go-slsa-provenance package_version=v0.1.1 program=aqua registry=standard
Verified signature against tlog entry index 9476343 at URL: https://rekor.sigstore.dev/api/v1/log/entries/24296fb24b8ad77a92eb2665ca9575614bc6b0833267eca755ca5d2e8d5a563c2b70c310dad3c0f6
ERRO[0004] install the package                           aqua_version=1.26.2 env=linux/arm64 error="verify a package with slsa-verifier: run slsa-verifier's verify-artifact command: expected tag 'refs/tags/v0.1.1', got 'refs/tags/v0.1.2': tag used to generate the binary does not match provenance" package_name=aquaproj/example-go-slsa-provenance package_version=v0.1.1 program=aqua registry=standard
FATA[0004] aqua failed                                   aqua_version=1.26.2 env=linux/arm64 error="it failed to install some packages" program=aqua
```

## See also

- Registry Configuration
  - [cosign](/docs/reference/registry-config/cosign)
  - [slsa_provenance](/docs/reference/registry-config/slsa-provenance)
