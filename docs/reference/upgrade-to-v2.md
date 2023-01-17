---
sidebar_position: 1250
---

# Upgrade aqua from v1 to v2

The release of v2 includes several breaking changes.
Most important change is that **only standard registry is allowed by default**.
This breaking change makes aqua secure by default.
Other changes are not so important as the registry restriction, but these changes makes aqua simple.

## Breaking Changes

- [#1404](https://github.com/aquaproj/aqua/issues/1404) [#1516](https://github.com/aquaproj/aqua/pull/1516) Only standard registry is allowed by default
- [#1410](https://github.com/aquaproj/aqua/issues/1410) [#1516](https://github.com/aquaproj/aqua/pull/1516) If `AQUA_CONFIG` or `-c` option is set, aqua doesn't search configuration files recursively
- [#1409](https://github.com/aquaproj/aqua/issues/1409) [#1516](https://github.com/aquaproj/aqua/pull/1516) Fix the default `files[].name`

Removed some features.

- [#1408](https://github.com/aquaproj/aqua/issues/1408) [#1516](https://github.com/aquaproj/aqua/pull/1516) Remove the package type [go](https://aquaproj.github.io/docs/reference/registry-config/go-package)
- [#1411](https://github.com/aquaproj/aqua/issues/1411) [#1516](https://github.com/aquaproj/aqua/pull/1516) Remove [supported_if](https://aquaproj.github.io/docs/reference/registry-config/supported-if)

## Only standard registry is allowed by default

[#1404](https://github.com/aquaproj/aqua/issues/1404) [#1516](https://github.com/aquaproj/aqua/pull/1516)

If you don't set policies, aqua uses the default policy allowing only standard registries.
If you set policies the default policy is ignored.

### Why this change is needed

This change makes aqua secure by default.
Almost users don't need registries other than standard registry.
Other registries are useful but also can be abused.

### How to migrate

If you use only standard registry, you don't have to do anything.
Otherwise you have to set policies to allow registries other than standard registry.
About policies, please see the document.

https://aquaproj.github.io/docs/tutorial-extras/policy-as-code/

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

## If `AQUA_CONFIG` or `-c` option is set, aqua doesn't search configuration files recursively

[#1410](https://github.com/aquaproj/aqua/issues/1410) [#1516](https://github.com/aquaproj/aqua/pull/1516)

### Why this change is needed

If we specify the configuration file path explicitly, we would like to use the configuration file and shouldn't use other configuration files.
The current behaviour is a bit confusing and causes unneeded package installation.

## Fix the default `files[].name`

[#1409](https://github.com/aquaproj/aqua/issues/1409) [#1516](https://github.com/aquaproj/aqua/pull/1516)

If the package has a `name` field, the `name` is split with `/` and the last element is used as the default file name.

For example, please see the following example.

```yaml
name: cert-manager/cert-manager/cmctl
repo_owner: cert-manager
repo_name: cert-manager
```

Then in aqua v1 the default setting of `files` is the following.

```yaml
files:
- name: cert-manager
```

On the other hand, in aqua v2 the default setting of `files` is the following.

```yaml
files:
- name: cmctl
```

### Why this change is needed

We think aqua v2's default setting is better than aqua v1 in many cases.

### How to migrate

If you maintain registries, you might have to fix them.

## Remove the package type `go`

[#1408](https://github.com/aquaproj/aqua/issues/1408) [#1516](https://github.com/aquaproj/aqua/pull/1516)

### Why this change is needed

To make aqua simple.
You should use [go_install](https://aquaproj.github.io/docs/reference/registry-config/go-install-package) instead of `go` package.

## Remove supported_if

[#1411](https://github.com/aquaproj/aqua/issues/1411) [#1516](https://github.com/aquaproj/aqua/pull/1516)

### Why this change is needed

From aqua v1.12.0 or later, we strongly recommend [supported_envs](https://aquaproj.github.io/docs/reference/registry-config/supported-envs) instead of supported_if. supported_envs is simpler than supported_if, and better in terms of the performance.
