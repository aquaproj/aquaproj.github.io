---
sidebar_position: 1150
---

# Cosign and SLSA Provenance Support

- `aqua >= v1.26.0`
- `aqua-installer >= v2.0.0`

aqua supports verifying aqua and packages with [Cosign](https://docs.sigstore.dev/cosign/overview/) and [slsa-verifier](https://github.com/slsa-framework/slsa-verifier).

:::caution
You don't have to install Cosign and slsa-verifier, because aqua installs Cosign automatically and slsa-verifier is embedded to aqua as Go library.
:::

## Verify aqua-installer and aqua

You can install aqua by the following one liner.

```sh
curl -sSfL https://raw.githubusercontent.com/aquaproj/aqua-installer/v1.1.2/aqua-installer | bash
```

But the one liner is a bit dangerous because aqua-installer may be tampered.

Instead of the one liner, you can install aqua-installer and aqua more safely.

1. Download and verify aqua-installer's checksum

```sh
curl -sSfL -O https://raw.githubusercontent.com/aquaproj/aqua-installer/v1.1.3-3/aqua-installer
echo "5891b5b522d5df086d0ff0b110fbd9d21bb4fc7163af34d08286a2e846f6be03  aqua-installer" | sha256sum -c
chmod +x aqua-installer
```

You have to update the checksum everytime aqua-installer is updated, but aqua-installer isn't updated so frequently.

2. Install aqua with aqua-installer. aqua-installer verifies aqua with slsa-verifier.

```sh
./aqua-installer [-v <version>]
```

Please see the log. You can confirm aqua is verified with slsa-verifier.

```
Verified signature against tlog entry index 9416012 at URL: https://rekor.sigstore.dev/api/v1/log/entries/24296fb24b8ad77ab3b84a722d163f24874e228e00239ac1e6397c26f40fe7f9f8fea4f791b6079d
Verified build using builder https://github.com/slsa-framework/slsa-github-generator/.github/workflows/generator_generic_slsa3.yml@refs/tags/v1.4.0 at commit 27cf519fb90cd1d7260786d2e5292431d0e66b7d
aqua version 1.25.1-9 (27cf519fb90cd1d7260786d2e5292431d0e66b7d)
```

If aqua is tampered the installation failed.

```
INFO[0001] verify a package with slsa-verifier           aqua_version=1.25.1-9 env=linux/arm64 new_version=v1.25.1-8 package_name=aquaproj/aqua package_version=v1.25.1-8 program=aqua registry=
Verified signature against tlog entry index 9411733 at URL: https://rekor.sigstore.dev/api/v1/log/entries/24296fb24b8ad77a62548bb933b391d4488def2532680f0fd1d3f3ba054724e170c704a98b3ffe5b
FATA[0002] aqua failed                                   aqua_version=1.25.1-9 env=linux/arm64 error="download aqua: verify a package with slsa-verifier: run slsa-verifier's verify-artifact command: expected hash '01a05bd85fc06d117433114890abcdd704c7cd8cf97e3263b9b5deb35f869d90' not found: artifact hash does not match provenance subject" new_version=v1.25.1-8 program=aqua
```

## Verify packages

aqua supports verifying packages with Cosign and slsa-verifier, but it requires the following things.

1. The tool publishes the signature or SLSA Provenance
1. The package has the setting for Cosign or SLSA Provenance

### Verify packages with Cosign

At the moment, there are very few tools publishing the signature with Cosign.

For example, [tflint](https://github.com/terraform-linters/tflint) publishes the signature in [GitHub Releases](https://github.com/terraform-linters/tflint/releases).

And the standard registry has the setting of cosign for tflint.

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

Let's install tflint.

```sh
aqua init
aqua g -i terraform-linters/tflint
aqua i
```

Please see the log. You can confirm tflint is verified with Cosign.

```
INFO[0000] download and unarchive the package            aqua_version=1.25.1-9 env=linux/arm64 package_name=terraform-linters/tflint package_version=v0.43.0 program=aqua registry=standard
INFO[0000] downloading a checksum file                   aqua_version=1.25.1-9 env=linux/arm64 package_name=terraform-linters/tflint package_version=v0.43.0 program=aqua registry=standard
INFO[0001] verify a checksum file with Cosign            aqua_version=1.25.1-9 env=linux/arm64 package_name=terraform-linters/tflint package_version=v0.43.0 program=aqua registry=standard
tlog entry verified with uuid: 2420d1cb4b4a6e97a210fba4e6c9faa5a9b86e023e1152f18bb277de1312f114 index: 7409550
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
INFO[0000] download and unarchive the package            aqua_version=1.25.1-9 env=linux/arm64 package_name=aquaproj/example-go-slsa-provenance package_version=v0.1.2 program=aqua registry=standard
INFO[0001] verify a package with slsa-verifier           aqua_version=1.25.1-9 env=linux/arm64 package_name=aquaproj/example-go-slsa-provenance package_version=v0.1.2 program=aqua registry=standard
Verified signature against tlog entry index 9476343 at URL: https://rekor.sigstore.dev/api/v1/log/entries/24296fb24b8ad77a92eb2665ca9575614bc6b0833267eca755ca5d2e8d5a563c2b70c310dad3c0f6
Verified build using builder https://github.com/slsa-framework/slsa-github-generator/.github/workflows/generator_generic_slsa3.yml@refs/tags/v1.4.0 at commit 4581df55e03c5155801ad10b88b19e42f99d8861
```

If the package is tampered, the installation failed.

```
INFO[0000] download and unarchive the package            aqua_version=1.25.1-9 env=linux/arm64 package_name=aquaproj/example-go-slsa-provenance package_version=v0.1.1 program=aqua registry=standard
INFO[0001] verify a package with slsa-verifier           aqua_version=1.25.1-9 env=linux/arm64 package_name=aquaproj/example-go-slsa-provenance package_version=v0.1.1 program=aqua registry=standard
Verified signature against tlog entry index 9476343 at URL: https://rekor.sigstore.dev/api/v1/log/entries/24296fb24b8ad77a92eb2665ca9575614bc6b0833267eca755ca5d2e8d5a563c2b70c310dad3c0f6
ERRO[0003] install the package                           aqua_version=1.25.1-9 env=linux/arm64 error="verify a package with slsa-verifier: run slsa-verifier's verify-artifact command: expected tag 'refs/tags/v0.1.1', got 'refs/tags/v0.1.2': tag used to generate the binary does not match provenance" package_name=aquaproj/example-go-slsa-provenance package_version=v0.1.1 program=aqua registry=standard
FATA[0003] aqua failed                                   aqua_version=1.25.1-9 env=linux/arm64 error="it failed to install some packages" program=aqua
```
