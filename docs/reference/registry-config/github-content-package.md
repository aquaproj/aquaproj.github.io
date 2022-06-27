---
sidebar_position: 1000
---

# `github_content` Package

e.g. [clivm/clivm-installer](https://github.com/clivm/clivm-registry/blob/main/pkgs/clivm/clivm-installer/registry.yaml)

```yaml
packages:
  - type: github_content
    repo_owner: clivm
    repo_name: clivm-installer
    path: clivm-installer
    description: Install clivm quickly
```

## Required fields

* type
* repo_owner
* repo_name
* path: The template string of GitHub Content's file path
  * e.g. `'foo-{{title .OS}}.sh'`
