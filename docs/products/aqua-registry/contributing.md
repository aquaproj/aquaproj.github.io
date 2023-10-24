---
sidebar_position: 100
---

# Contributing

How to contribute to Standard Registry. https://github.com/aquaproj/aqua-registry

## See also

- :star: [OSS Contribution Guide](https://github.com/suzuki-shunsuke/oss-contribution-guide)
- :star: [Registry Style Guide](https://aquaproj.github.io/docs/develop-registry/registry-style-guide)
- [Registry Configuration](/docs/reference/registry-config/)
- [Change `GOOS` and `GOARCH` for testing](/docs/develop-registry/change-os-arch-for-test)

## Should you create an Issue before sending a Pull Request?

Basically, you don't have to create an Issue before sending a Pull Request.
But if the pull request requires the discussion before reviewing, you have to create an Issue in advance.

For example, you don't have to create an Issue in the following cases.

- Add a package
- Fix a typo

On the other hand, for example if you want to change the directory structure in `pkgs` or the workflow adding a package,
you have to create an Issue and describe what is changed and why the change is needed.

## aqua can't support some tools' plugin mechanism

Some tools have the plugin mechanism.

e.g.

- [GitHub CLI Extension](https://docs.github.com/en/github-cli/github-cli/creating-github-cli-extensions)
- [Terraform provider](https://developer.hashicorp.com/terraform/language/providers)
- [Gauge plugin](https://docs.gauge.org/plugin.html?os=macos&language=java&ide=null)
- etc

aqua simply installs commands in PATH (`AQUA_ROOT_DIR/bin`), but some of these plugins expect to be installed in the other location.
If aqua can't support the plugin, we will reject the pull request adding the plugin to aqua-registry.

So if you send a pull request adding a plugin to aqua-registry, please check if aqua can support the plugin.
We aren't necessarily familiar with the plugin, so please explain where the plugin expects to be installed and how the plugin works in the pull request description.

If you don't know well, please create a pull request and consult us.

## Requirements

- [aqua](https://aquaproj.github.io/docs/install)
- Docker

Please use the latest version.

## Set up

```sh
git clone https://github.com/aquaproj/aqua-registry
cd aqua-registry
aqua i -l # Install dependencies
```

## cmdx - Task Runner

We use [cmdx](https://github.com/suzuki-shunsuke/cmdx) as a task runner.
cmdx is installed by [Set up](#set-up) already.
We also use Docker to run tests in a container.
Please run `cmdx help` and `cmdx help <task>` to show the help.

```sh
cmdx help
cmdx help scaffold
```

## How to add a package

1. Scaffold configuration: `cmdx s <package name>`
1. Fix generated files `pkgs/<package name>/{pkg.yaml,registry.yaml`
1. Run test: `cmdx t <package name>`
1. Repeat the step 2 and 3 until packages are installed properly
1. Update registry.yaml: `cmdx gr`
1. Create a pull request: `cmdx new <package name>`

:::info
If you face GitHub API rate limiting, please set the GitHub Access token with environment variable `GITHUB_TOKEN` or `AQUA_GITHUB_TOKEN`.

e.g.

```sh
export GITHUB_TOKEN=<YOUR PERSONAL ACCESS TOKEN>
```
:::

:::info
When you update `pkgs/**/registry.yaml`, you have to run `cmdx gr` to reflect the update to `registry.yaml` on the repository root directory.
:::

## Supported OS and CPU Architecture

Please consider the following OS and CPU Architecture.

- OS
  - windows
  - darwin
  - linux
- CPU Architecture
  - amd64
  - arm64

We test the registry in CI on the above environments by GitHub Actions' build matrix.

## Test multiple versions

If the package has the field [version_overrides](/docs/reference/registry-config/version-overrides),
please add not only the latest version but also old versions in `pkg.yaml` to test if old versions can be installed properly.

e.g. [pkg.yaml](https://github.com/aquaproj/aqua-registry/blob/main/pkgs/scaleway/scaleway-cli/pkg.yaml) [registry.yaml](https://github.com/aquaproj/aqua-registry/blob/main/pkgs/scaleway/scaleway-cli/registry.yaml)

```yaml
packages:
  - name: scaleway/scaleway-cli@v2.12.0
  - name: scaleway/scaleway-cli
    version: v2.4.0
```

:warning: Don't use the short syntax `<package name>@<version>` for the old version to prevent Renovate from updating the old version.

:thumbsdown:

```yaml
packages:
  - name: scaleway/scaleway-cli@v2.12.0
  - name: scaleway/scaleway-cli@v2.12.0
```
