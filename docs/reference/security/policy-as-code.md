---
sidebar_position: 80
---

# Policy as Code

`aqua >= v1.24.0`

[#1306](https://github.com/aquaproj/aqua/issues/1306)

aqua supports defining the policy of package installation and execution for security.
If you try to install or execute packages violating the policy, it would fail.

## Getting Started

Create `aqua.yaml`.

```sh
aqua init
aqua g -i hashicorp/terraform
```

Create a policy file `aqua-policy.yaml`.

```sh
aqua init-policy
```

```yaml
---
# aqua Policy
# https://aquaproj.github.io/docs/security/policy-as-code
registries:
- type: standard
  ref: semver(">= 3.0.0")
packages:
- registry: standard
```

This policy allows only the Standard Registry.

Please set the absolute path to the policy file to the environment variable `AQUA_POLICY_CONFIG`.
`AQUA_POLICY_CONFIG` is policy file paths separated with semicolons `:`.

```console
export AQUA_POLICY_CONFIG=$PWD/aqua-policy.yaml
```

Let's create a Local Registry.

registry.yaml

```yaml
packages:
  - type: github_release
    repo_owner: suzuki-shunsuke
    repo_name: github-comment
    description: CLI to create a GitHub comment
    asset: github-comment_{{trimV .Version}}_{{.OS}}_{{.Arch}}.tar.gz
    version_constraint: semver(">= 4.3.0")
    version_overrides:
      - version_constraint: "true"
        rosetta2: true
        supported_envs:
          - darwin
          - amd64
  - type: github_release
    repo_owner: suzuki-shunsuke
    repo_name: tfcmt
    asset: tfcmt_{{.OS}}_{{.Arch}}.tar.gz
    version_constraint: semver(">= 3.2.5")
    version_overrides:
      - version_constraint: "true"
        supported_envs:
          - darwin
          - linux
```

aqua.yaml

```yaml
registries:
- type: standard
  ref: v3.90.0 # renovate: depName=aquaproj/aqua-registry
- name: local
  type: local
  path: registry.yaml
packages:
- name: hashicorp/terraform@v1.3.4
```

Add packages.

```console
aqua g -i local,suzuki-shunsuke/tfcmt local,suzuki-shunsuke/github-comment
```

Let's install.

```console
$ aqua i
ERRO[0000] install the package                           aqua_version=1.24.0 doc="https://aquaproj.github.io/docs/reference/codes/002" env=darwin/arm64 error="this package isn't allowed" package_name=suzuki-shunsuke/github-comment package_version=v5.0.0 program=aqua registry=local
ERRO[0000] install the package                           aqua_version=1.24.0 doc="https://aquaproj.github.io/docs/reference/codes/002" env=darwin/arm64 error="this package isn't allowed" package_name=suzuki-shunsuke/tfcmt package_version=v4.0.0 program=aqua registry=local
INFO[0000] download and unarchive the package            aqua_version=1.24.0 env=darwin/arm64 package_name=hashicorp/terraform package_version=v1.3.4 program=aqua registry=standard
FATA[0002] aqua failed                                   aqua_version=1.24.0 env=darwin/arm64 error="it failed to install some packages" program=aqua
```

:tada: Violated packages can't be installed expectedly.
They can't be executed too.

```console
$ tfcmt -v
FATA[0000] aqua failed                                   aqua_version=1.24.0 doc="https://aquaproj.github.io/docs/reference/codes/002" env=darwin/arm64 error="validate the installed package for security: this package isn't allowed" exe_name=tfcmt package=suzuki-shunsuke/tfcmt package_version=v4.0.0 policy_files="[/Users/shunsukesuzuki/Documents/test/aqua/pr-1308-2/aqua-policy.yaml]" program=aqua
```

`local` Registry and `github_content` Registry are useful, but they can also be abused. Almost users don't need them, so you can reduce the security risk by forbidding them.

You can also allow only the specific Registries.

aqua-policy.yaml

```yaml
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

Then you can install and execute them.

```console
$ tfcmt -v
INFO[0000] download and unarchive the package            aqua_version=1.24.0 env=darwin/arm64 exe_name=tfcmt exe_path=/Users/shunsukesuzuki/.local/share/aquaproj-aqua/pkgs/github_release/github.com/suzuki-shunsuke/tfcmt/v4.0.0/tfcmt_darwin_arm64.tar.gz/tfcmt package=suzuki-shunsuke/tfcmt package_name=suzuki-shunsuke/tfcmt package_version=v4.0.0 program=aqua registry=local
tfcmt version 4.0.0 (047e980d083da80303e6e8f4ebf6d5c9e7859716)

$ github-comment -v
INFO[0000] download and unarchive the package            aqua_version=1.24.0 env=darwin/arm64 exe_name=github-comment exe_path=/Users/shunsukesuzuki/.local/share/aquaproj-aqua/pkgs/github_release/github.com/suzuki-shunsuke/github-comment/v5.0.0/github-comment_5.0.0_darwin_arm64.tar.gz/github-comment package=suzuki-shunsuke/github-comment package_name=suzuki-shunsuke/github-comment package_version=v5.0.0 program=aqua registry=local
github-comment version 5.0.0 (64d3b0b4fd3b8b05bd43e7dde9a7181577b34d70)
```

You can also allow only the specific packages.

aqua-policy.yaml

```yaml
registries:
- type: standard
  ref: semver(">= 3.0.0")
- name: local
  type: local
  path: registry.yaml
packages:
- registry: standard
- name: suzuki-shunsuke/tfcmt
  registry: local
```

Then you can execute tfcmt but can't execute github-comment.

```console
$ tfcmt -v
tfcmt version 4.0.0 (047e980d083da80303e6e8f4ebf6d5c9e7859716)

$ github-comment -v
FATA[0000] aqua failed                                   aqua_version=1.24.0 doc="https://aquaproj.github.io/docs/reference/codes/002" env=darwin/arm64 error="validate the installed package for security: this package isn't allowed" exe_name=github-comment package=suzuki-shunsuke/github-comment package_version=v5.0.0 policy_files="[/Users/shunsukesuzuki/Documents/test/aqua/pr-1308-2/aqua-policy.yaml]" program=aqua
```

You can also restrict the package version.
The syntax is same as [version_overrides and version_constraint](/docs/registry-config/version-overrides).
The expression engine [expr](https://github.com/antonmedv/expr) is used and the version constraint is evaluated with [hashicorp/go-version](https://github.com/hashicorp/go-version).

Let's allow `tfcmt >= 4.0.0`.

aqua-policy.yaml

```yaml
registries:
- type: standard
  ref: semver(">= 3.0.0")
- name: local
  type: local
  path: registry.yaml
packages:
- registry: standard
- name: suzuki-shunsuke/tfcmt
  registry: local
  version: semver(">= 4.0.0")
```

You can execute tfcmt v4.0.0.

```console
$ tfcmt -v
tfcmt version 4.0.0 (047e980d083da80303e6e8f4ebf6d5c9e7859716)
```

But you can't execute tfcmt v3.0.0.

```yaml
- name: suzuki-shunsuke/tfcmt@v3.0.0 # downgrade
  registry: local
```

```console
$ tfcmt -v
FATA[0000] aqua failed                                   aqua_version=1.24.0 doc="https://aquaproj.github.io/docs/reference/codes/002" env=darwin/arm64 error="validate the installed package for security: this package isn't allowed" exe_name=tfcmt package=suzuki-shunsuke/tfcmt package_version=v3.0.0 policy_files="[/Users/shunsukesuzuki/Documents/test/aqua/pr-1308-2/aqua-policy.yaml]" program=aqua
```

You can allow `github_content` Registry.

```yaml
registries:
  - name: aqua-registry
    type: github_content
    repo_owner: aquaproj
    repo_name: aqua-registry
    ref: semver(">= 3.0.0")
    path: registry.yaml
```

If you omit a version constraint `ref` of `github_content` registry or `standard` registry, any versions are allowed.

```yaml
registries:
  - type: standard
  - name: aqua-registry
    type: github_content
    repo_owner: aquaproj
    repo_name: aqua-registry
    path: registry.yaml
```

## Benefit

### Protect your development environment and CI from threat

We strongly recommend setting Policy to protect your development environment (your laptop and remote development environment) and CI from threat.
In your development environment, you should create a Policy file and set `AQUA_POLICY_CONFIG` in `.bashrc` or `.zshrc` or something.
`local` Registry and `github_content` Registry are useful, but they can also be abused. Almost users don't need them, so you can reduce the security risk by forbidding them.

:::info
We consider to disable registries other than `standard` Registry by default.
Please see the issue and give your feedback. [#1404](https://github.com/aquaproj/aqua/issues/1404)
:::

### Reduce the burden of code review keeping the security

Policy as Code reduces the burden of the code review and improves the security.

About Policy as Code, please see the document of Sentinel by Hashicorp.

https://docs.hashicorp.com/sentinel/concepts/policy-as-code

Policy works as guardrail and allows you to update `aqua.yaml` freely unless `aqua.yaml` violates Policy.
Especially, this is useful to automerge pull requests by Renovate safely.

If the code review is required to update `aqua.yaml`,
the burden of the code review would increase in proportion to the frequency of pull requests.
Developers get tired of reviewing, reviews become messy, and problems are more likely to be overlooked.
If Policy allows you to accept the change of aqua.yaml without review, the burden would be resolved.
Even if the code review is still required, developers don't have to check points reviewed by Policy.

### In case of Monorepo

If you manage many `aqua.yaml` in Monorepo,
you have to check if all of them have no problem in terms of security.
A policy file is independent of `aqua.yaml`, so you can use the same policy file for multiple `aqua.yaml`.
A security team can manage a policy file, while product teams can manage `aqua.yaml`.

For example, [tfaction](https://suzuki-shunsuke.github.io/tfaction/docs/), which is GitHub Actions Workflows for Terraform Monorepo, assumes that tools such as Terraform, tfsec, and tflint are managed per working directory.
This is useful to update tools per working directory gradually, but it is difficult for a team such security team or SRE team to review all `aqua.yaml` in a large Monorepo.
So you have to leave the management of `aqua.yaml` to each teams, but you also have to keep the governance and security.

Policy file is useful for it.
