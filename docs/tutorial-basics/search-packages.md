---
sidebar_position: 200
---

# Search packages

You can search packages by `aqua g` command.

```console
$ aqua g
```

Then an interactive fuzzy zinder is launched (Powered by [ktr0731/go-fuzzyfinder](https://github.com/ktr0731/go-fuzzyfinder)).

```console
  xtaci/kcptun (standard) (kcptun-client, kcptun-server)        ┌─────────────────────────────────────────────────┐
  influxdata/influx-cli (standard) (influx)                     │ cli/cli                                         │
  newrelic/newrelic-cli (standard) (newrelic)                   │                                                 │
  pivotal-cf/pivnet-cli (standard) (pivnet)                     │ https://cli.github.com/                         │
  scaleway/scaleway-cli (standard) (scw)                        │ GitHub’s official command line tool             │
  tfmigrator/cli (standard) (tfmigrator)                        │                                                 │
  aws/copilot-cli (standard) (copilot)                          │                                                 │
  codeclimate/test-reporter (standard)                          │                                                 │
  create-go-app/cli (standard) (cgapp)                          │                                                 │
  harness/drone-cli (standard) (drone)                          │                                                 │
  sigstore/rekor (standard) (rekor-cli)                         │                                                 │
  getsentry/sentry-cli (standard)                               │                                                 │
  rancher/cli (standard) (rancher)                              │                                                 │
  tektoncd/cli (standard) (tkn)                                 │                                                 │
  civo/cli (standard) (civo)                                    │                                                 │
  dapr/cli (standard) (dapr)                                    │                                                 │
  mongodb/mongocli (standard)                                   │                                                 │
  openfaas/faas-cli (standard)                                  │                                                 │
> cli/cli (standard) (gh)                                       │                                                 │
  41/300                                                        │                                                 │
> cli                                                           └─────────────────────────────────────────────────┘

```

Please select `tfmigrator/cli`, then the package configuration is outputted.

```console
$ aqua g
- name: tfmigrator/cli@v0.2.1
```

Please copy and paste the output to aqua.yaml.

```yaml
packages:
- name: cli/cli@v2.2.0
- name: junegunn/fzf@0.28.0
- name: tfmigrator/cli@v0.2.1 # Added
```
