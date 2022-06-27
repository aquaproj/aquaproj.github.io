---
sidebar_position: 600
---

# aliases

[#674](https://github.com/clivm/aqua/pull/674) [#675](https://github.com/clivm/aqua/pull/675) aqua >= v1.5.0 is required

Aliases of packages.

e.g.

```yaml
packages:
- name: ahmetb/kubectx/kubens
  aliases:
  - name: ahmetb/kubens
```

You can use the alias as the package name in `aqua.yaml`, and alias can be used in `aqua g` command.

`aliases` is used to keep the compatibility when the package name is changed.
Sometimes the package name is changed because the repository is renamed or transfered.

