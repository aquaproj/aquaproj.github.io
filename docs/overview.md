---
sidebar_position: 100
---

# Overview

aqua is a declarative CLI Version Manager written in Go.
You can manage tool versions with YAML.

e.g. aqua.yaml

```yaml
registries:
- type: standard
  ref: v3.90.0 # renovate: depName=aquaproj/aqua-registry

packages:
- name: cli/cli@v2.2.0
- name: junegunn/fzf@0.28.0
```

The short demo would be useful to understand aqua.

[![asciicast](https://asciinema.org/a/498262.svg)](https://asciinema.org/a/498262?autoplay=1)

You can install tools simply by `aqua i` command.

```console
$ aqua i
```

aqua supports various tools officially.
You can search tools interactively by `aqua g` command.

```console
$ aqua g
```

```console
  newrelic/newrelic-cli (standard) (newrelic)                   ┌ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─
  pivotal-cf/pivnet-cli (standard) (pivnet)                     │  cli/cli
  scaleway/scaleway-cli (standard) (scw)                        │
  tfmigrator/cli (standard) (tfmigrator)                        │  https://cli.github.com/
  aws/copilot-cli (standard) (copilot)                          │  GitHub’cs official command line tool
  codeclimate/test-reporter (standard)                          │
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
  50/399                                                        │
> cli                                                           └ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─
```

To add supported tools, please see [here](tutorial-extras/add-registry.md).

## Usecase

1. [Manage tools in your dotfiles](tutorial-basics/global-config.md)
1. Manage tools for projects
1. [Manage tools for your organization and team](tutorial-extras/team-config.md)
1. [Distribute private tools in your organization](tutorial-extras/private-package.md)

## Why aqua?

Please see [Comparison](comparison/index.md) too.

- Change tool versions per project
  - Unlike Package Manager such as Homebrew, aqua supports changing tool version per project
- Unify tool versions to prevent problems due to version difference
  - aqua makes you specify tool versions strictly
  - aqua supports cross platforms and provides the unified way to manage tools both in local development and CI
- Easy to use
  - This is so important for introducing a tool to a project and having developers use it
- Painless
  - aqua installs tools automatically when they are triggered. You don't have to run `aqua i` everytime tools are updated
  - [Continuous update by Renovate](tutorial-extras/renovate.md)
  - Easy to support new tools. You don't have to maintain plugins or something yourself. You only have to send a pull request to [the Standard Registry](https://github.com/aquaproj/aqua-registry), which is very easy
  - No more shell scripts
    - You don't have to write similar shell scripts to install tools many times. You only have to manage tools declaratively with YAML and run `aqua i`
- [Security](security.md)
  - aqua supports security features such as [Checksum Verification](tutorial-extras/checksum.md), [Policy as Code](tutorial-extras/policy-as-code.md), and [Cosign and SLSA Provenance Support](reference/cosign-slsa.md)
- [Support private packages](tutorial-extras/private-package.md)

## SNS

We share news about aqua using a Twitter Account [@aquaclivm](https://twitter.com/aquaclivm).
We check tweets about aqua, but it is difficult to search tweets about aqua with the keyword "aqua" because aqua is a very common word.
So when you tweet about aqua, please mention @aquaclivm or use the hash tag [#aquaclivm](https://twitter.com/hashtag/aquaclivm).

## GitHub Sponsor

We'll really appreciate if you become a sponsor of this project!

https://github.com/sponsors/aquaproj

## See Also

* [Comparison](/docs/comparison)
* [Quick Start](/docs/tutorial-basics/quick-start)
