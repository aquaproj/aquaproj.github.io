---
sidebar_position: 300
---

# Add Packages to Registry

You can install tools registered in the [Standard Registry](https://github.com/aquaproj/aqua-registry) easily.

You can search packages from Registries by `aqua g`.
Please see [Search Packages](../tutorial-basics/search-packages).

If tools aren't found, you have some options.

* [Create an issue for request](https://github.com/aquaproj/aqua-registry/issues)
* [Send a Pull Request to the Standard Registry](https://github.com/aquaproj/aqua-registry#request-for-new-packages)
* Write Registry Configuration
  * [local registry](../reference/config#local-registry)
  * [github_content registry](../reference/config#github_content-registry)

## Write Registry Configuration

* [Registry Style Guide](../reference/registry-style-guide)
* [Registry Configuration](../reference/registry-config)

## Use `local` Registry

Please see the Registry Configuration in the Standard Registry.

https://github.com/aquaproj/aqua-registry/blob/v0.10.10/registry.yaml#L1838-L1842

```yaml
- type: github_release
  repo_owner: suzuki-shunsuke
  repo_name: tfcmt
  asset: 'tfcmt_{{.OS}}_{{.Arch}}.tar.gz'
  description: Fork of mercari/tfnotify
```

`suzuki-shunsuke/tfcmt` is actually included in the Standard Registry, but let's assume this isn't included in the Standard Registry.

In that case, please write the following configuration.

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
- name: suzuki-shunsuke/tfcmt@v3.2.4
  registry: foo
```

## Create a GitHub Repository for Registry

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
- name: suzuki-shunsuke/tfcmt@v3.2.4
  registry: foo
```
