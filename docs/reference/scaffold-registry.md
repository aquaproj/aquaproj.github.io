---
sidebar_position: 440
---

# Scaffold Registry Configuration

aqua >= [v1.14.0](https://github.com/aquaproj/aqua/releases/tag/v1.14.0)

`aqua generate-registry (gr)` scaffolds Registry Configuration.

This feature allows you to add packages to Registries easily.
New contributors can contribute to the Standard Registry easily.
And it decreases the burden to add many packages to a Registry.

:::caution
Note that you probably fix generated code manually.
Generated code is not perfect and may be wrong.
It is just a template.
:::

[Usage](usage.md#aqua-generate-registry)

e.g.

```console
$ aqua gr cli/cli
packages:
  - type: github_release
    repo_owner: cli
    repo_name: cli
    asset: gh_{{trimV .Version}}_{{.OS}}_{{.Arch}}.{{Format}}
    format: tar.gz
    description: GitHub’s official command line tool
    replacements:
      darwin: macOS
    overrides:
      - goos: windows
        format: zip
    supported_envs:
      - darwin
      - linux
      - amd64
    rosetta2: true
```

## Generate `version_overrides` by `--deep` option

aqua >= v1.34.0 [#1655](https://github.com/aquaproj/aqua/issues/1655) [#1662](https://github.com/aquaproj/aqua/pull/1662)

By default, `aqua gr` doesn't generate [version_constraint and version_overrides](/docs/reference/registry-config/version-overrides/).
You can generate them by `--deep` option.
And you can also output testdata to a file by `--out-testdata` option.

:::caution
If `--deep` option is set GitHub API is called per GitHub Release, so it may cause GitHub API rate limiting if there are many GitHub Releases. You can set GitHub access token via environment variables `GITHUB_TOKEN` or `AQUA_GITHUB_TOKEN`.
:::

You can try this feature by [GitHub Actions workflow_dispatch event](https://docs.github.com/en/actions/managing-workflow-runs/manually-running-a-workflow).

https://github.com/aquaproj/generate-registry-deep

e.g. https://github.com/aquaproj/generate-registry-deep/actions/runs/4263618160

```console
$ aqua gr --deep --out-testdata pkg.yaml cloudspannerecosystem/wrench
```

testdata

```yaml
packages:
  - name: cloudspannerecosystem/wrench@v1.3.3
  - name: cloudspannerecosystem/wrench
    version: v1.3.0
  - name: cloudspannerecosystem/wrench
    version: v1.1.0
  - name: cloudspannerecosystem/wrench
    version: v1.0.0
```

Generate Registry

```yaml
packages:
  - type: github_release
    repo_owner: cloudspannerecosystem
    repo_name: wrench
    description: wrench - Schema management tool for Cloud Spanner -
    asset: wrench_{{trimV .Version}}_{{.OS}}_{{.Arch}}.tar.gz
    checksum:
      type: github_release
      asset: wrench_{{trimV .Version}}_checksums.txt
      file_format: regexp
      algorithm: sha256
      pattern:
        checksum: "^(\\b[A-Fa-f0-9]{64}\\b)"
        file: "^\\b[A-Fa-f0-9]{64}\\b\\s+(\\S+)$"
    version_constraint: semver(">= 1.3.3")
    version_overrides:
      - version_constraint: semver(">= 1.3.0")
        supported_envs:
          - linux
          - darwin
      - version_constraint: semver(">= 1.1.0")
        asset: wrench_{{.OS}}_{{.Arch}}
        format: raw
        supported_envs:
          - linux
          - darwin
        checksum:
          enabled: false
      - version_constraint: semver("< 1.1.0")
        asset: wrench_{{.OS}}_{{.Arch}}
        format: raw
        supported_envs:
          - linux/amd64
          - darwin
        rosetta2: true
        checksum:
          enabled: false
```
