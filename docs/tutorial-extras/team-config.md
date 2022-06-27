---
sidebar_position: 100
---

# Share clivm configuration for teams and organizations

clivm reads configuration from the environment variable `CLIVM_GLOBAL_CONFIG`.
`CLIVM_GLOBAL_CONFIG` is configuration file paths separated with semicolons `:`.

e.g.

```sh
export CLIVM_GLOBAL_CONFIG="/home/foo/clivm-config/sre.yaml:/home/foo/clivm-config/all.yaml:${CLIVM_GLOBAL_CONFIG:-}"
```

About the priority of configuration, plase see [Configuration File Path](../reference/config/#configuration-file-path).

By default `clivm i` ignores Global Configuration.
If `--all (-a)` is set, clivm installs all packages including Global Configuration.

## How to share clivm configuration for teams and organizations

Let's create the repository in your GitHub Organization,
and add clivm configuration files for your teams and organization into the repository.

e.g.

```
clivm-config/
  all.yaml # clivm configuration for all developers in your organization
  sre.yaml # clivm configuration for your SRE team
```

Then checkout the repository and set the environment variable `CLIVM_GLOBAL_CONFIG`.
If you belong to SRE team,

```sh
export CLIVM_GLOBAL_CONFIG="/home/foo/clivm-config/sre.yaml:/home/foo/clivm-config/all.yaml:${CLIVM_GLOBAL_CONFIG:-}"
```

Otherwise

```sh
export CLIVM_GLOBAL_CONFIG="/home/foo/clivm-config/all.yaml:${CLIVM_GLOBAL_CONFIG:-}"
```
