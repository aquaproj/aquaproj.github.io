---
sidebar_position: 400
---

# version_source

[#811](https://github.com/clivm/clivm/pull/811) clivm >= [v1.8.0](https://github.com/clivm/clivm/releases/tag/v1.8.0)

By default, `clivm g` gets the latest version from GitHub Releases.
By setting `version_source: github_tag`, clivm gets from GitHub Repository Tag instead of GitHub Releases.
This is useful for tools without GitHub Releases.
