---
sidebar_position: 100
---

# Overview

aqua is a declarative CLI Version Manager written in Go.
You can install CLI tools and manage their versions with YAML declaratively.

The short demo would be useful to understand aqua.

[![asciicast](https://asciinema.org/a/457021.svg)](https://asciinema.org/a/457021?autoplay=1)

You write a configuration file `aqua.yaml` and execute the command `aqua i`, then tools are installed.

```yaml
registries:
- type: standard
  ref: v2.5.0 # renovate: depName=aquaproj/aqua-registry

packages:
- name: cli/cli@v2.2.0
- name: junegunn/fzf@0.28.0
```

Unlike Package Manager such as Homebrew, aqua supports changing tool version per project, so aqua is useful to manage tools for your project.
aqua installs a tool automatically when the tool is invoked.
aqua solves the problem due to the difference of tool version by forcing to pin tool version.
aqua supports continuous update with [Renovate](https://docs.renovatebot.com/).
aqua provides [Renovate Preset Config](https://docs.renovatebot.com/config-presets/), so you can update tools very easily.

https://github.com/aquaproj/aqua-renovate-config

aqua provides GitHub Actions, CircleCI Orb, and shell script to install aqua easily.
aqua provides the unified way to install tools both in local development and CI.

aqua provides the Standard Registry. You can install tools which are registered at the Registry easily, and you can search the Registry interactively with `aqua g` command.

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

If you can't find the tool, you can send a pull request.

https://github.com/aquaproj/aqua-registry

## See Also

* [Why I use aqua](https://dev.to/suzukishunsuke/why-i-use-aqua-230)
* [Comparison](/docs/comparison/common)
* [Quick Start](/docs/tutorial-basics/quick-start)
* [Introduce aqua to your repository](/docs/tutorial-extras/introduce-aqua)
* [Install tools globally](/docs/tutorial-extras/global-config)
