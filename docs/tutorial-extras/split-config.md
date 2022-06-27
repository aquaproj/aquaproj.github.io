---
sidebar_position: 200
---

# Split the list of packages

You can split the list of packages.

e.g.

Directory structure

```
clivm.yaml
clivm/
  conftest.yaml
```

clivm.yaml

```yaml
registries:
- type: standard
  ref: v2.22.0 # renovate: depName=clivm/clivm-registry

packages:
- import: clivm/*.yaml
```

clivm/conftest.yaml

```yaml
packages:
- name: open-policy-agent/conftest@v0.28.2
```

This is useful for CI.
You can execute test and lint only when the specific package is updated.

ex. GitHub Actions' [`on.<push|pull_request>.paths`](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#onpushpull_requestpaths)

```yaml
name: conftest
on:
  pull_request:
    paths:
    - policy/**.rego
    - clivm/conftest.yaml
```
