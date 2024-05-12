---
sidebar_position: 300
---

# update-checksum-workflow

https://github.com/aquaproj/update-checksum-workflow

GitHub Actions Reusable Workflow to update aqua-checksums.json
If aqua-checksums.json isn't latest, update aqua-checksums.json and push a commit

About aqua's Checksum Verification, please see [the document](/docs/reference/security/checksum) too.

## Workflow

[Workflow](https://github.com/aquaproj/update-checksum-workflow/blob/main/.github/workflows/update-checksum.yaml)

## Requirements

```console
$ aqua g -i int128/ghcp
```

### Example

```yaml
name: update-aqua-checksum
on:
  pull_request:
    paths:
      - aqua.yaml
      - aqua-checksums.json
jobs:
  update-aqua-checksums:
    uses: aquaproj/update-checksum-workflow/.github/workflows/update-checksum.yaml@f367004e7f17e99d30297cd9e89afad30ee1f251 # v1.0.0
    permissions:
      contents: read
    with:
      aqua_policy_config: aqua-policy.yaml
      aqua_version: v2.28.0
      prune: true
    secrets:
      gh_app_id: ${{secrets.APP_ID}}
      gh_app_private_key: ${{secrets.APP_PRIVATE_KEY}}
```
