---
title: "clivm - Declarative CLI Version Manager"
date: 2021-09-08T09:32:46+09:00
authors:
- suzuki-shunsuke
---

<head>
  <link rel="canonical" href="https://dev.to/suzukishunsuke/clivm-declarative-cli-version-manager-1ibe" />
</head>

Original Post: https://dev.to/suzukishunsuke/clivm-declarative-cli-version-manager-1ibe

In this post, I introduce [clivm](https://clivm.github.io), which is a declarative CLI Version Manager. 
You can install CLI tools and manage their versions with YAML declaratively.
Mainly the following use cases are assumed.

* Install tools in CI/CD
* Install tools for repository's local development
* Install tools in your laptop

clivm supports the `Lazy Install` and Sharable Configuration mechanism named `Registry`.
Compared to other package manager like `Homebrew`, clivm supports switching tool versions per `clivm.yaml`.
Of course, you can use clivm with other package managers too.

You can install clivm with [clivm-installer](https://github.com/aquaproj/aqua-installer).

```console
$ curl -sSfL \
  https://raw.githubusercontent.com/aquaproj/aqua-installer/v1.0.0/clivm-installer |
  bash -s -- -i ~/bin/clivm -v v1.9.0
```

You can install clivm with Homebrew too.

```console
$ brew install aquaproj/aqua/aqua
```

For example, let's install jq with clivm. Write the following `clivm.yaml`.

```yaml
registries:
- type: standard
  ref: v2.19.0 # renovate: depName=aquaproj/aqua-registry
packages:
- name: stedolan/jq
  version: jq-1.5
```

And run `clivm i -l`.

```console
$ clivm i -l
```

The option `-l` is important. By this option, the symbolic links are created in `~/.clivm/bin` but the downloading tools is skipped.
This is the feature named `Lazy Install`.

Tools are installed in `~/.local/share/clivm`. Let's add `~/.local/share/clivm/bin` to the environment variable `PATH`.

```console
$ export PATH=$HOME/.local/share/clivm/bin:$PATH
```

Let's check if jq installed correctly.

```console
$ jq --version
INFO[0000] download and unarchive the package            package_name=jq package_version=jq-1.5 program=clivm registry=standard
jq-1.5
```

The output `INFO[0000] download and unarchive the package            package_name=jq package_version=jq-1.5 program=clivm registry=standard` indicates that jq is installed automatically before jq is executed.

clivm searches the configuration file `[.]clivm.y[a]ml` from the current directory to the root directory.

```console
$ cd foo
$ jq --version
jq-1.5

$ cd ../..
$ jq --version
FATA[0000] clivm failed                                   error="command is not found" exe_name=jq program=clivm
```

Let's update jq from 1.5 to 1.6.

```yaml
packages:
- name: stedolan/jq
  version: jq-1.6
```

And run `jq --version`.
Before jq is executed, jq is installed automatically.

```console
$ jq --version
INFO[0000] download and unarchive the package            package_name=jq package_version=jq-1.6 program=clivm registry=standard
jq-1.6
```

Let's downgrade jq from 1.6 to 1.5.

```yaml
packages:
- name: stedolan/jq
  version: jq-1.5
```

```console
$ jq --version
jq-1.5
```

The version of tool is changed seamlessly.
You don't have to execute `clivm`.

By adding `clivm.yaml` in each Git repositories, you can manage tools for each repositories.
Developers can use the same version, which prevents the problem due to the difference of tool versions.
clivm supports both MacOS and Linux, so even if you are working on MacOS and CI is run on Linux, you can manage tools with the same clivm.yaml.

clivm installs tools in `~/.local/share/clivm` and shares tools across multiple `clivm.yaml`, so the same version of the same tool is installed only at once.
It saves time and disk usage.

clivm supports the Global configuration.
This is useful to install tools in your laptop regardless the specific project.
Like `dotfiles`, it is good to manage the Global Configuration with Git and share it with your multiple laptops.

## Registry

clivm supports the Sharable Configuration mechanism named `Registry`.

You can install jq with the simple configuration.

```yaml
registries:
- type: standard
  ref: v2.19.0

packages:
- name: stedolan/jq
  version: jq-1.5
```

In the above configuration, the [Standard Registry](https://github.com/aquaproj/aqua-registry) is being used.
The Standard Registry is the Registry maintained by clivm's maintainers.

Please see the configuration.

https://github.com/aquaproj/aqua-registry/blob/v2.19.0/pkgs/stedolan/jq/registry.yaml

```yaml
packages:
  - type: github_release
    repo_owner: stedolan
    repo_name: jq
    asset: "jq-{{.OS}}"
    format: raw
    description: Command-line JSON processor
    replacements:
      darwin: osx-amd64
      linux: linux64
      windows: win64.exe
```

This is the configuration to download jq from GitHub Releases.
Using the Standard Registry, you can install tools very easily without complicated configuration.

You can search the tool from the Registries with `clivm g` command.
Please add the Registries to your clivm.yaml's registries, and run `clivm g`.

```yaml
registries:
- type: standard
  ref: v2.19.0
```

```console
$ clivm g
```

`clivm g` launches the interactive UI and you can search the package by fuzzy search.

```console
  influxdata/influx-cli (standard) (influx)                     ┌ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─
  newrelic/newrelic-cli (standard) (newrelic)                   │  cli/cli
  pivotal-cf/pivnet-cli (standard) (pivnet)                     │
  scaleway/scaleway-cli (standard) (scw)                        │  https://github.com/cli/cli
  tfmigrator/cli (standard) (tfmigrator)                        │  GitHub’cs official command line tool
  aws/copilot-cli (standard) (copilot)                          │
  create-go-app/cli (standard) (cgapp)                          │
  harness/drone-cli (standard) (drone)                          │
  sigstore/rekor (standard) (rekor-cli)                         │
  getsentry/sentry-cli (standard)                               │
  grafana/loki/logcli (standard)                                │
  knative/client (standard) (kn)                                │
  rancher/cli (standard) (rancher)                              │
  tektoncd/cli (standard) (tkn)                                 │
  civo/cli (standard) (civo)                                    │
  dapr/cli (standard) (dapr)                                    │
  mongodb/mongocli (standard)                                   │
  openfaas/faas-cli (standard)                                  │
> cli/cli (standard) (gh)                                       │
  50/433                                                        │
> cli                                                           └ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─
```

If the tool you need isn't found, please create the issue or send the pull request to the [Standard Registry](https://github.com/aquaproj/aqua-registry)!
By adding various packages to the Standard Registry, clivm becomes more useful and attractive.
Your contribution is needed!

It is also easy to create your own Registries.
Just create GitHub Repositories and add Registry Configuration like [the Standard Registry](https://github.com/aquaproj/aqua-registry/blob/main/registry.yaml) and add it to `clivm.yaml`'s registries.
The private repository is also supported.

e.g.

```yaml
registries:
  - name: aquaproj/aqua-registry
    type: github_content
    repo_owner: clivm
    repo_name: clivm-registry
    ref: v2.19.0
    path: registry.yaml
```

## Cotinuous update by Renovate

clivm manages package and registry versions,
so it is important to update them continuously.
clivm doesn't provide sub commands like `clivm update` or options like `clivm install --update`.
It is recommended to manage `clivm.yaml` with Git and update versions by [Renovate](https://docs.renovatebot.com/).

Using Renovate's [Regex Manager](https://docs.renovatebot.com/modules/manager/regex/), you can update versions.

The Renovate Preset Configuration https://github.com/aquaproj/aqua-renovate-config is useful.
For the detail, please see the [README](https://github.com/aquaproj/aqua-renovate-config).

## Summary

In this post, I introduced [clivm](https://clivm.github.io), which is a declarative CLI Version Manager. 
You can install CLI tools and manage their versions with YAML declaratively.
clivm supports the `Lazy Install` and Sharable Configuration mechanism named `Registry`.

You can search tools from Registries by `clivm g` command.
If the tool you need isn't found, please create the issue or send the pull request to the [Standard Registry](https://github.com/aquaproj/aqua-registry)!
By adding various packages to the Standard Registry, clivm becomes more useful and attractive.
Your contribution is needed!
