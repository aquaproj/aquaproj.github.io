---
sidebar_position: 150
---

# Registry

`Registry` is a `clivm`'s core concept.
`Registry` defines the package list and how to install them.

In `clivm.yaml`, you specify Registries in `registries`.

```yaml
registries:
- type: standard
  ref: v2.22.0 # renovate: depName=clivm/clivm-registry

packages:
- name: cli/cli@v2.2.0
- name: junegunn/fzf@0.28.0
```

You don't have to define how to install tools yourself because it is defined in the Registry.
Registry is reusable across multiple configuration.

## Standard Registry

In the above configuration, the Standard Registry v2.22.0 is used.
The Standard Registry is a registry that we maintain.

https://github.com/clivm/clivm-registry

## Create your own Registry

Please see the following document.

* [Add Packages to Registry](/docs/tutorial-extras/add-registry)
* [Install private packages](/docs/tutorial-extras/private-package)
