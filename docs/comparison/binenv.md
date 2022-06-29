---
sidebar_position: 510
---

# binenv

https://github.com/devops-works/binenv

> One binary to rule them all. Manage all those pesky binaries (kubectl, helm, terraform, ...) easily.

## Pros

* aqua supports more tools than binenv
* aqua provides Renovate Config Preset, so you can update tools by Renovate easily
* aqua supports Windows
* aqua provides the interactive search UI
* aqua supports Lazy Install

## Cons

* aqua doesn't support updating aqua itself
  * binenv provides `update` command

## Difference

aqua forces to pin tool versions.
On the other hand, binenv supports specifying the range of versions.

e.g.

```
kubectl=1.18.8
terraform>0.12
terragrunt~>0.23.0
```

We prefer to pin tool versions.

## Difference between aqua Registry and biennv Distribution

### Common

* Define how to install tools with declarative YAML configuration
  * aqua: [registry.yaml](https://github.com/aquaproj/aqua-registry/blob/main/registry.yaml)
  * binenv: [distributions.yaml](https://github.com/devops-works/binenv/blob/develop/distributions/distributions.yaml)

### Difference

:::caution
We are not familiar with binenv.
So maybe the description about them is wrong.
Your contribution is welcome.
:::

* binenv doesn't support feature like aqua's [version_overrides](/docs/reference/registry-config/version-overrides)
* aqua-registry is maintained by CI continuously
  * e.g. [aqua-registry#3854](https://github.com/aquaproj/aqua-registry/pull/3854#issuecomment-1150481845)
* aqua forces to pin Registry version in `aqua.yaml`. On ther other hand, binenv doesn't support specifying distributions file
* aqua supports `local` registry and `github_content` registry. So you can install tools hosted at private repositories
