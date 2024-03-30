---
sidebar_position: 200
---

# Split the list of packages

You can split the list of packages.

e.g.

Directory structure

```
aqua.yaml
aqua/
  conftest.yaml
```

aqua.yaml

```yaml
registries:
- type: standard
  ref: v4.155.1  # renovate: depName=aquaproj/aqua-registry

packages:
- import: aqua/*.yaml
```

aqua/conftest.yaml

```yaml
packages:
- name: open-policy-agent/conftest@v0.28.2
```

This is useful for CI.
You can execute test and lint only when the specific package is updated.

e.g. GitHub Actions' [`on.<push|pull_request>.paths`](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#onpushpull_requestpaths)

```yaml
name: conftest
on:
  pull_request:
    paths:
    - policy/**.rego
    - aqua/conftest.yaml
```

## :bulb: Renovate Config Preset

To update split files by Renovate, please use the preset [aquaproj/aqua-renovate-config:file](https://github.com/aquaproj/aqua-renovate-config#file-preset)

e.g.

```json
{
  "extends": [
    "github>aquaproj/aqua-renovate-config:file#2.2.1(aqua/conftest\\.yaml)"
  ]
}
```

You can also use the regular expression.

```json
{
  "extends": [
    "github>aquaproj/aqua-renovate-config:file#2.2.1(aqua/.*\\.ya?ml)"
  ]
}
```
