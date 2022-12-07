---
sidebar_position: 1150
---

# Verify signatures with Cosign

- `aqua >= v1.26.0`
- `aqua-registry >= v3.103.0`
- `aqua-installer >= v2.0.0`


aqua supports verifying signatures with [Cosign](https://docs.sigstore.dev/cosign/overview/).

- Verify aqua-installer and aqua
- Verify registryies
  - Verify the standard registry
  - Verify `github_content` registries
- Verify packages

## Requirements

Please [install Cosign](https://docs.sigstore.dev/cosign/installation/).

Standard Registry also supports Cosign.

```sh
aqua g -i sigstore/cosign
```

If Cosign isn't installed, the verification is skipped without error.

## Verify aqua-installer and aqua

You can install aqua by the following one liner.

```sh
curl -sSfL https://raw.githubusercontent.com/aquaproj/aqua-installer/v1.1.2/aqua-installer | bash
```

But the one liner is a bit dangerous because aqua-installer may be tampered.

Instead of the one liner, you can install aqua-installer and aqua more safely.

1. Download and verify aqua-installer.

```sh
curl -sSfL -O https://github.com/aquaproj/aqua-installer/releases/download/v1.1.3-3/aqua-installer
COSIGN_EXPERIMENTAL=1 cosign verify-blob \
  --signature https://github.com/aquaproj/aqua-installer/releases/download/v1.1.3-3/aqua-installer.sig \
  --certificate https://github.com/aquaproj/aqua-installer/releases/download/v1.1.3-3/aqua-installer.pem \
  aqua-installer
```

2. Install aqua with aqua-installer. aqua-installer verifies aqua with Cosign.

```sh
./aqua-installer [-v <version>]
```

Please see the log. You can confirm aqua is verified with Cosign.

```
```

## Verify the standard registry

aqua verifies the standard registry by default before installing the registry.

aqua-registry >= `v3.103.0`.

## Verify `github_content` registry

If you manage `github_content` registry and want to verify it, you have to add settings in `aqua.yaml`.

e.g.

```yaml
registries:
  - name: foo
    type: github_content
    repo_owner: aquaproj
    repo_name: aqua-registry
    ref: v3.90.0 # renovate: depName=aquaproj/aqua-registry
    path: registry.yaml
    cosign:
      cosign_experimental: true
      opts:
        - --signature
        - https://github.com/aquaproj/aqua-registry/releases/download/{{.Version}}/registry.yaml.sig
        - --certificate
        - https://github.com/aquaproj/aqua-registry/releases/download/{{.Version}}/registry.yaml.pem
```

You can specify options of `cosign verify-blob` command in `opts`.
If key files, certificates, or signatures are hosted at a private repository, you have to set `key`, `signature`, and `certificate`. 

e.g.

```yaml
registries:
  - name: foo
    type: github_content
    repo_owner: aquaproj
    repo_name: aqua-registry
    ref: v3.90.0 # renovate: depName=aquaproj/aqua-registry
    path: registry.yaml
    cosign:
      cosign_experimental: true
      certificate:
        type: github_release
        asset: registry.yaml.pem
      key:
        type: github_release
        asset: registry.yaml.key
      signature:
        type: github_release
        asset: registry.yaml.sig
```

## Verify packages

aqua supports verifying packages with Cosign, but it requires the following things.

1. The tool have to publish the signature with Cosign
1. The setting of registry package is required

At the moment, there are very few tools publishing the signature with Cosign.

For example, [tflint](https://github.com/terraform-linters/tflint) publishes the signature in [GitHub Releases](https://github.com/terraform-linters/tflint/releases).

And the standard registry has the setting of cosign for tflint.

```sh
aqua init
aqua g -i terraform-linters/tflint
aqua i
```

Please see the log. You can confirm tflint is verified with Cosign.

```

```
