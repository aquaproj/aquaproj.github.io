---
sidebar_position: 1000
---

# `github_content` Package

e.g. [clivm/aqua-installer](https://github.com/clivm/aqua-registry/blob/main/pkgs/clivm/aqua-installer/registry.yaml)

```yaml
packages:
  - type: github_content
    repo_owner: clivm
    repo_name: aqua-installer
    path: aqua-installer
    description: Install aqua quickly
```

## Required fields

* type
* repo_owner
* repo_name
* path: The template string of GitHub Content's file path
  * e.g. `'foo-{{title .OS}}.sh'`
