---
sidebar_position: 2000
---

# cosign

- `aqua > v1.26.0`

Please see [Cosign and SLSA Provenance Support](/docs/reference/security/cosign-slsa) too.

## Fields

- cosign_experimental (boolean): If `true`, `cosign verify-blob` is run with the environment variable `COSIGN_EXPERIMENTAL=1`
- opts ([]string): [cosign verify-blob](https://docs.sigstore.dev/signing/quickstart/#verifying-a-signed-blob) options
- signature
  - type (string): `github_release` or `http`
  - repo_owner (string) (optional):
  - repo_name (string) (optional):
  - url (string) (`http` requires):
  - asset (string) (`github_release` requires):
- key
  - same as `signature`
- certificate
  - same as `signature`

e.g.

```yaml
cosign:
  cosign_experimental: true
  opts:
    - --signature
    - https://github.com/terraform-linters/tflint/releases/download/{{.Version}}/checksums.txt.keyless.sig
    - --certificate
    - https://github.com/terraform-linters/tflint/releases/download/{{.Version}}/checksums.txt.pem
```

```yaml
cosign:
  cosign_experimental: true
  signature:
    type: github_release
    asset: checksums.txt.keyless.sig
  certificate:
    type: github_release
    asset: checksums.txt.pem
```
