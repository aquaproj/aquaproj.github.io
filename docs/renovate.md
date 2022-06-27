# Renovate Integration

clivm manages package and registry versions,
so it is important to update them continuously.
clivm doesn't provide sub commands like `clivm update` or options like `clivm install --update`.
We recommend to manage `clivm.yaml` with Git and update versions by [Renovate](https://docs.renovatebot.com/) or something.

Using Renovate's [Regex Manager](https://docs.renovatebot.com/modules/manager/regex/), you can update versions.

We provide the Renovate Preset Configuration [clivm-renovate-config](https://github.com/clivm/clivm-renovate-config). For the detail, please see the [README](https://github.com/clivm/clivm-renovate-config).

Example pull requests by Renovate.

* [chore(deps): update dependency golangci/golangci-lint to v1.42.0](https://github.com/clivm/clivm/pull/193)
* [chore(deps): update dependency clivm/clivm-registry to v0.2.2](https://github.com/clivm/clivm/pull/194)
