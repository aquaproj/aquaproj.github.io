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
  abiosoft/colima (standard)                     ┌ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─
  corneliusweig/ketall (standard)                │  cli/cli
  corneliusweig/rakkess (standard)               │
  golangci/golangci-lint (standard)              │  https://cli.github.com/
  minamijoyo/hcledit (standard)                  │  GitHub’(s official command line tool
  stackrox/kube-linter (standard)                │
  CircleCI-Public/circleci-cli (standard)        │
  codeclimate/test-reporter (standard)           │
  getsentry/sentry-cli (standard)                │
  newrelic/newrelic-cli (standard)               │
  aws/copilot-cli (standard)                     │
  create-go-app/cli (standard)                   │
  harness/drone-cli (standard)                   │
  mongodb/mongocli (standard)                    │
  openfaas/faas-cli (standard)                   │
  tfmigrator/cli (standard)                      │
  rancher/cli (standard)                         │
  dapr/cli (standard)                            │
> cli/cli (standard)                             │
  28/229                                         │
> cli                                            └ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─
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
