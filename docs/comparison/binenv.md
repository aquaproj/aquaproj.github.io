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

* aqua doesn't support selecting tool versions interactively
  * Maybe aqua will support this feature
* aqua doesn't provide the progress bar for installing tools
  * Maybe aqua will support this feature
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
