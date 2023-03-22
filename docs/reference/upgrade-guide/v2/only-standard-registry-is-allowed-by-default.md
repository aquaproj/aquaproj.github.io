---
sidebar_position: 100
---

# Only standard registry is allowed by default

[#1404](https://github.com/aquaproj/aqua/issues/1404) [#1516](https://github.com/aquaproj/aqua/pull/1516)

If you don't set policies, aqua uses the default policy allowing only standard registries.
If you set policies the default policy is ignored.

## Why this change is needed

This change makes aqua secure by default.
Almost users don't need registries other than standard registry.
Other registries are useful but also can be abused.

## How to migrate

:::info
If it is difficult to configure Policy as we describe below, you can also disable Policy by the environment variable. Please see [here](/docs/reference/security/policy-as-code/#disable-policy)
Note that we don't recommend disabling Policy in terms of security.
:::

If you use only standard registry, you don't have to do anything.
Otherwise you have to set policies to allow registries other than standard registry.
About policies, please see [here](/docs/reference/security/policy-as-code/).

If non Standard Registries are used in Global Configuration, it is useful to set `AQUA_POLICY_CONFIG` in `.bashrc` or something.

e.g. .bashrc

```sh
export AQUA_GLOBAL_CONFIG="$HOME/repos/src/github.com/aquaproj/aqua-registry/aqua-all.yaml"
export AQUA_POLICY_CONFIG="$HOME/repos/src/github.com/aquaproj/aqua-registry/aqua-policy.yaml"
```

If non Standard Registries are used in non Global Configuration, it would be useful to set `AQUA_POLICY_CONFIG` by [direnv](https://github.com/direnv/direnv) or something.

e.g. .envrc

```sh
export AQUA_POLICY_CONFIG=$PWD/aqua-policy.yaml:$AQUA_POLICY_CONFIG
```

You can specify multiple policy files in `AQUA_POLICY_CONFIG` with `:` and empty stings are ignored.
