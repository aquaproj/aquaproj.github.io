---
sidebar_position: 150
---

# Registry

`Registry` is a `aqua`'s core concept.
`Registry` defines the package list and how to install them.

In `aqua.yaml`, you specify Registries in `registries`.

```yaml
registries:
- type: standard
  ref: v3.27.0 # renovate: depName=aquaproj/aqua-registry

packages:
- name: cli/cli@v2.2.0
- name: junegunn/fzf@0.28.0
```

You don't have to define how to install tools yourself because it is defined in the Registry.
Registry is reusable across multiple configuration.

## Standard Registry

In the above configuration, the Standard Registry v2.22.0 is used.
The Standard Registry is a registry that we maintain.

https://github.com/aquaproj/aqua-registry

## Create your own Registry

Please see the following document.

* [Add Packages to Registry](/docs/tutorial-extras/add-registry)
* [Install private packages](/docs/tutorial-extras/private-package)
