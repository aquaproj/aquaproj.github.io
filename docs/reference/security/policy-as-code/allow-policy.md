---
sidebar_position: 100
---

# Git Repository root's policy file and policy commands

`aqua >= v2.3.0`

[#1789](https://github.com/aquaproj/aqua/issues/1789) [1808](https://github.com/aquaproj/aqua/pull/1808)

## Overview

`Git Repository root's policy file` is a Policy file in the Git Repository root directory.

```
.git/ # Git Repository root
aqua-policy.yaml
.aqua-policy.yaml
aqua/aqua-policy.yaml
.aqua/aqua-policy.yaml
```

:::caution
The file extension `.yml` isn't supported at the moment.
:::

Before aqua executes or installs packages, aqua searches `Git Repository root's policy file`.
aqua searches the Git repository root directory from the current directory to the root directory.

- If `Git Repository root's policy file` isn't found, it is same as usual.
- If `Git Repository root's policy file` is found, aqua checks if the policy file is already allowed or not.
- If `Git Repository root's policy file` is already allowed, aqua uses `Git Repository root's policy file` as Policy.
- If `Git Repository root's policy file` isn't allowed, aqua outputs the warning and ignores `Git Repository root's policy file`.

`aqua policy allow` command is a command to allow a policy file.

```console
$ aqua policy allow [<policy file path>]
```

If no argument is given, aqua allows `Git Repository root's policy file`.

Even if you allow a policy file once, you have to allow the policy file again if the policy file is modified.

:::caution
Before you run `aqua policy allow` command, you should confirm the content of aqua-policy.yaml.
If untrusted Registries are used, you shouldn't run `aqua policy allow`.
:::

`aqua policy deny` command is a command to deny a policy file.

```console
$ aqua policy deny [<policy file path>]
```

If no argument is given, aqua allows `Git Repository root's policy file`.

`aqua policy deny` is used to ignore `Git Repository root's policy file` and suppress the warning.

## How to use

1. Add `Git Repository root's policy file` to your Git repository
1. Run `aqua policy allow` in the repository

## Why this feature is needed

To improve the user experience of non Standard Registries.
To set up Policy easily keeping the security.

To use non Standard Registries, you had to set the environment variable `AQUA_POLICY_CONFIG`.
But it is bothersome, especially in the team development because all members have to set the environment variable `AQUA_POLICY_CONFIG`.
Some tools such as `direnv` are useful to set environment variables, but it is undesirable to ask users to install additional tools for aqua.

So we would like to apply a policy without `AQUA_POLICY_CONFIG`, but at the same time we have to keep the security.

## Design consideration

Sometimes security and convenience are conflicted, so we have to be careful not to harm security for convenience.
To keep the security, I think aqua should ask users to allow `Git Repository root's policy file` explicitly.
This means aqua should not apply `Git Repository root's policy file` without user's approval.
So aqua asks users to allow `Git Repository root's policy file` using `aqua policy allow` command.

:::info
Unlike `Git Repository root's policy file`, aqua uses policy files in `AQUA_POLICY_CONFIG` without your approval.
Because

- To keep the compatibility
- Unlike `Git Repository root's policy file`, the environment variable `AQUA_POLICY_CONFIG` is set by you, so aqua regards `AQUA_POLICY_CONFIG` as your approval
:::

## Getting Started

1. create a Git repository
1. create aqua.yaml and aqua-policy.yaml
1. create a local Registry registry.yaml
1. update aqua.yaml
1. Confirm the warning
1. try to use a local Registry
1. Run `aqua policy deny`
1. try to use a local Registry
1. Run `aqua policy allow`

Set up the environment with Docker.

```
docker run --rm -ti alpine:3.17.0 sh
```

```
apk add curl bash sudo git
adduser -u 1000 -G wheel -D foo
visudo # Uncomment "%wheel ALL=(ALL) NOPASSWD: ALL"
su foo
mkdir ~/workspace
cd ~/workspace

export PATH="${AQUA_ROOT_DIR:-${XDG_DATA_HOME:-$HOME/.local/share}/aquaproj-aqua}/bin:$PATH"
curl -sSfL -O https://raw.githubusercontent.com/aquaproj/aqua-installer/v2.0.2/aqua-installer
echo "acbb573997d664fcb8df20a8a5140dba80a4fd21f3d9e606e478e435a8945208  aqua-installer" | sha256sum -c
chmod +x aqua-installer
./aqua-installer
```

```
git init
aqua init
aqua policy set
aqua gr suzuki-shunsuke/ci-info > registry.yaml
vi aqua-policy.yaml
vi aqua.yaml
aqua g -i cli/cli local,suzuki-shunsuke/ci-info
```

aqua.yaml

```yaml
---
# aqua - Declarative CLI Version Manager
# https://aquaproj.github.io/
# checksum:
#   enabled: true
#   require_checksum: true
#   supported_envs:
#   - all
registries:
- type: standard
  ref: v3.149.0 # renovate: depName=aquaproj/aqua-registry
- name: local
  type: local
  path: registry.yaml
packages:
- name: cli/cli@v2.25.1
- name: suzuki-shunsuke/ci-info@v2.1.2
  registry: local
```

aqua-policy.yaml

```yaml
---
# aqua Policy
# https://aquaproj.github.io/
registries:
- type: standard
  ref: semver(">= 3.0.0")
- name: local
  type: local
  path: registry.yaml
packages:
- registry: standard
- registry: local
```

Run `aqua i -l`, then the warning is outputted.

```console
~/workspace $ aqua i -l
INFO[0000] download and unarchive the package            aqua_version=2.3.0-1 env=linux/arm64 package_name=aqua-proxy package_version=v1.1.4 program=aqua registry=
INFO[0001] create a symbolic link                        aqua_version=2.3.0-1 command=aqua-proxy env=linux/arm64 package_name=aqua-proxy package_version=v1.1.4 program=aqua registry=
WARN[0001] The policy file is ignored unless it is allowed by aqua policy allow command.

$ aqua policy allow "/home/foo/workspace/aqua-policy.yaml"

If you want to keep ignoring the policy file without the warning, please run policy deny command.

$ aqua policy deny "/home/foo/workspace/aqua-policy.yaml"

   aqua_version=2.3.0-1 env=linux/arm64 policy_file=/home/foo/workspace/aqua-policy.yaml program=aqua
INFO[0001] create a symbolic link                        aqua_version=2.3.0-1 command=gh env=linux/arm64 program=aqua
INFO[0001] create a symbolic link                        aqua_version=2.3.0-1 command=ci-info env=linux/arm64 program=aqua
```

It failed to run `ci-info` because the policy isn't allowed yet.

```console
~/workspace $ ci-info --help
WARN[0000] The policy file is ignored unless it is allowed by aqua policy allow command.

$ aqua policy allow "/home/foo/workspace/aqua-policy.yaml"

If you want to keep ignoring the policy file without the warning, please run policy deny command.

$ aqua policy deny "/home/foo/workspace/aqua-policy.yaml"

   aqua_version=2.3.0-1 env=linux/arm64 exe_name=ci-info package=suzuki-shunsuke/ci-info package_version=v2.1.2 policy_file=/home/foo/workspace/aqua-policy.yaml program=aqua
FATA[0000] aqua failed                                   aqua_version=2.3.0-1 doc="https://aquaproj.github.io/docs/reference/codes/002" env=linux/arm64 error="validate the installed package for security: this package isn't allowed" exe_name=ci-info package=suzuki-shunsuke/ci-info package_version=v2.1.2 policy_files="[]" program=aqua
```

gh succeeded because Standard Registry is allowed by default, but the warning is still outputted.

```console
~/workspace $ gh version
WARN[0000] The policy file is ignored unless it is allowed by aqua policy allow command.

$ aqua policy allow "/home/foo/workspace/aqua-policy.yaml"

If you want to keep ignoring the policy file without the warning, please run policy deny command.

$ aqua policy deny "/home/foo/workspace/aqua-policy.yaml"

   aqua_version=2.3.0-1 env=linux/arm64 exe_name=gh package=cli/cli package_version=v2.25.1 policy_file=/home/foo/workspace/aqua-policy.yaml program=aqua
INFO[0000] download and unarchive the package            aqua_version=2.3.0-1 env=linux/arm64 exe_name=gh package=cli/cli package_name=cli/cli package_version=v2.25.1 program=aqua registry=standard
gh version 2.25.1 (2023-03-21)
https://github.com/cli/cli/releases/tag/v2.25.1
```

Run `aqua policy deny`

```
aqua policy deny
```

ci-info still failed but the warning is suppressed.

```console
$ ci-info --help
FATA[0000] aqua failed                                   aqua_version=2.3.0-1 doc="https://aquaproj.github.io/docs/reference/codes/002" env=linux/arm64 error="validate the installed package for security: this package isn't allowed" exe_name=ci-info package=suzuki-shunsuke/ci-info package_version=v2.1.2 policy_files="[]" program=aqua
```

Run `aqua policy allow`.

```
aqua policy allow
```

Then ci-info succeeded without the warning.

```console
$ ci-info --version
INFO[0000] download and unarchive the package            aqua_version=2.3.0-1 env=linux/arm64 exe_name=ci-info package=suzuki-shunsuke/ci-info package_name=suzuki-shunsuke/ci-info package_version=v2.1.2 program=aqua registry=local
ci-info version 2.1.2 (4a047e648dd0b9d0de1be356421d5d043c38d080)
```

Modify aqua-policy.yaml, then the warning is outputted again.

```
echo "" >> aqua-policy.yaml
```

```console
~/workspace $ gh version
WARN[0000] The policy file is ignored unless it is allowed by aqua policy allow command.

$ aqua policy allow "/home/foo/workspace/aqua-policy.yaml"

If you want to keep ignoring the policy file without the warning, please run policy deny command.

$ aqua policy deny "/home/foo/workspace/aqua-policy.yaml"

   aqua_version=2.3.0-1 env=linux/arm64 exe_name=gh package=cli/cli package_version=v2.25.1 policy_file=/home/foo/workspace/aqua-policy.yaml program=aqua
gh version 2.25.1 (2023-03-21)
https://github.com/cli/cli/releases/tag/v2.25.1
```

 Run `aqua policy allow` again, then the warning is resolved.

```console
$ aqua policy allow
$ gh version
gh version 2.25.1 (2023-03-21)
https://github.com/cli/cli/releases/tag/v2.25.1
```
