---
sidebar_position: 50
---

# Update packages by Renovate

```json
{
  "extends": [
    "github>aquaproj/aqua-renovate-config#1.1.0"
  ]
}
```

![image](https://user-images.githubusercontent.com/13323303/176582627-44f27c48-213b-44da-b18f-d4d482ef2f56.png)

aqua manages package and registry versions,
so it is important to update them continuously.
aqua doesn't provide sub commands like `aqua update` or options like `aqua install --update`.
We recommend to manage `aqua.yaml` with Git and update versions by [Renovate](https://docs.renovatebot.com/) or something.

Using Renovate's [Regex Manager](https://docs.renovatebot.com/modules/manager/regex/), you can update versions.

We provide the Renovate Preset Configuration [aqua-renovate-config](https://github.com/aquaproj/aqua-renovate-config). For the detail, please see the [README](https://github.com/aquaproj/aqua-renovate-config).

Example pull requests by Renovate.

* [chore(deps): update dependency golangci/golangci-lint to v1.42.0](https://github.com/aquaproj/aqua/pull/193)
* [chore(deps): update dependency aquaproj/aqua-registry to v0.2.2](https://github.com/aquaproj/aqua/pull/194)
