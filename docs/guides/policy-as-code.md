---
sidebar_position: 20
---

# Policy as Code

`aqua >= v2.3.0`

Policy is a feature to restrict the package installation and execution.
The main purpose of Policy is to improve the security by preventing malicious tools from being executed.

If you use only Standard Registry, you don't have to care of Policy.
From aqua v2, aqua allows only Standard Registry by default.
This means aqua prevents malicious tools from being executed via malicious Registries by default.

If you use non Standard Registries, you have to create a Policy file to allow them.

## Getting Started

Create `aqua.yaml`.

```sh
aqua init
```

Create a local Registry.

```sh
aqua gr suzuki-shunsuke/ci-info > registry.yaml
```

Edit `aqua.yaml`

```sh
vi aqua.yaml
```

```yaml
registries:
- type: standard
  ref: v3.150.0
- name: local
  type: local
  path: registry.yaml
packages:
```

```sh
aqua g -i local,suzuki-shunsuke/ci-info
```

`aqua i` would fail because local Registry isn't allowed by default.

```console
$ aqua i
ERRO[0000] install the package                           aqua_version= doc="https://aquaproj.github.io/docs/reference/codes/002" env=darwin/arm64 error="this package isn't allowed" package_name=suzuki-shunsuke/ci-info package_version=v2.1.2 program=aqua registry=local
FATA[0000] aqua failed                                   aqua_version= env=darwin/arm64 error="it failed to install some packages" program=aqua
```

To use non Standard Registry, you have to do the following things.

1. Create a `.git` directory
1. Create `aqua-policy.yaml`
1. Allow the Policy file

`.git` directory is required so that aqua finds a Policy file.

```sh
git init # Create .git
aqua policy init # Create aqua-policy.yaml
vi aqua-policy.yaml
```

```yaml
registries:
  - name: local
    type: local
    path: registry.yaml
  - type: standard
    ref: semver(">= 3.0.0")
packages:
  - registry: local
  - registry: standard
```

`aqua i` outputs a warning and still fails because the Policy file isn't allowed yet. Please see the warning.

```console
$ aqua i
WARN[0000] The policy file is ignored unless it is allowed by "aqua policy allow" command.

$ aqua policy allow "/Users/shunsukesuzuki/Documents/test/aqua/policy-git/aqua-policy.yaml"

If you want to keep ignoring the policy file without the warning, please run "aqua policy deny" command.

$ aqua policy deny "/Users/shunsukesuzuki/Documents/test/aqua/policy-git/aqua-policy.yaml"

   aqua_version= env=darwin/arm64 policy_file=/Users/shunsukesuzuki/Documents/test/aqua/policy-git/aqua-policy.yaml program=aqua
ERRO[0000] install the package                           aqua_version= doc="https://aquaproj.github.io/docs/reference/codes/002" env=darwin/arm64 error="this package isn't allowed" package_name=suzuki-shunsuke/ci-info package_version=v2.1.2 program=aqua registry=local
FATA[0000] aqua failed                                   aqua_version= env=darwin/arm64 error="it failed to install some packages" program=aqua
```

According to the warning, run `aqua policy allow` command.

:::caution
Before running `aqua policy allow`, please check if the Policy file doesn't allow malicious Packages.
:::

```sh
aqua policy allow "/Users/shunsukesuzuki/Documents/test/aqua/policy-git/aqua-policy.yaml"
```

Run `aqua i` again, then it would succeed.

```console
$ aqua i
INFO[0000] download and unarchive the package            aqua_version= env=darwin/arm64 package_name=suzuki-shunsuke/ci-info package_version=v2.1.2 program=aqua registry=local
```

## See also

- [Reference](/docs/reference/security/policy-as-code)
