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
