---
sidebar_position: 400
---

# GitHub Actions

Many GitHub Actions installs the tool automatically before executing it.
For example, [GitHub Actions for golangci-lint](https://golangci-lint.run/usage/install#github-actions) installs golangci-lint automatically.
It's very easy to use, but there are some problems.

* Some GitHub Actions don't force to pin the tool version, which may raise the problem
* When you pin the tool version, you have to update the tool version continuously.
  Update Automation tool such as Dependabot and Renovate don't update it automatically.
  In case of Renovate, you have to configure Regex Manager per tool
* GitHub Actions doesn't support installing tools for local development
* It is difficult to unify the tool version in local development and CI

aqua solves these problems.

* aqua forces to pin the tool version
* aqua provides [Renovate Preset](https://github.com/clivm/aqua-renovate-config), so you can update tools by Renovate without configuring
* aqua supports both local development and CI
* you can use the same tool version in local development and CI naturally
