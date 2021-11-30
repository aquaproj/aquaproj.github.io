---
sidebar_position: 400
---

# Install private packages

Of course, [Standard Registry](https://github.com/aquaproj/aqua-registry) doesn't include private repositories.
So you have to write Registry Configuration by yourself.

The environment variable `GITHUB_TOKEN` or `AQUA_GITHUB_TOKEN` is required.

Please see the Registry Configuration in the Standard Registry.

https://github.com/aquaproj/aqua-registry/blob/v0.10.10/registry.yaml#L1838-L1842

```yaml
- type: github_release
  repo_owner: suzuki-shunsuke
  repo_name: tfcmt
  asset: 'tfcmt_{{.OS}}_{{.Arch}}.tar.gz'
  description: Fork of mercari/tfnotify
```

`suzuki-shunsuke/tfcmt` is actually a public package, but let's assume this is a private package.

In that case, you have to write Registry Configuration as the following.

### inline_registry

ref. [inline_registry](../reference/config#inline_registry)

```yaml
# aqua.yaml
inline_registry:
  packages:
  - type: github_release
    repo_owner: suzuki-shunsuke
    repo_name: tfcmt
    asset: 'tfcmt_{{.OS}}_{{.Arch}}.tar.gz'

packages:
- name: suzuki-shunsuke/tfcmt
  registry: inline # inline registry
```

### local registry

ref. [local registry](../reference/config#local-registry)

```yaml
# registry.yaml
packages:
- type: github_release
  repo_owner: suzuki-shunsuke
  repo_name: tfcmt
  asset: 'tfcmt_{{.OS}}_{{.Arch}}.tar.gz'
```

```yaml
# aqua.yaml
registries:
- name: foo
  type: local
  path: registry.yaml

packages:
- name: suzuki-shunsuke/tfcmt
  registry: local # local registry
```

### github_content

ref. [github_content registry](../reference/config#github_content-registry)

Create a repository for Registry and add Registry Configuration.

```yaml
# registry.yaml
packages:
- type: github_release
  repo_owner: suzuki-shunsuke
  repo_name: tfcmt
  asset: 'tfcmt_{{.OS}}_{{.Arch}}.tar.gz'
```

```yaml
# aqua.yaml
registries:
- name: foo
  type: github_content
  repo_owner: suzuki-shunsuke
  repo_name: private-aqua-registry # private repository
  ref: v0.1.0
  path: registry.yaml

packages:
- name: suzuki-shunsuke/tfcmt
  registry: local # local registry
```
