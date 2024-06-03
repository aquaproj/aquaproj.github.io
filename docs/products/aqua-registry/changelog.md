---
sidebar_position: 110
---

# Changelog

This is a changelog of aqua-registry's development workflow.
We have been improving the development workflow continuously.
So sometimes the development workflow is changed.

## 2024-05-24

[#23171](https://github.com/aquaproj/aqua-registry/pull/23171) [#23188](https://github.com/aquaproj/aqua-registry/pull/23188) [#23191](https://github.com/aquaproj/aqua-registry/pull/23191) [#23192](https://github.com/aquaproj/aqua-registry/pull/23192)

The behaviour of `cmdx s`, `cmdx t`, and `cmdx new` were changed.

### `cmdx s`

- `cmdx s` fails if `commit.gpgSign` isn't enabled
  - All commits must be signed. Please see [the document](https://github.com/suzuki-shunsuke/oss-contribution-guide/blob/main/docs/commit-signing.md)
- `cmdx s` fails if files in `pkgs` are changed before scaffolding files
  - This validation prevents unrelated changes from being committed
- `cmdx s` creates a feature branch `feat/<package name>` from the remote branch https://github.com/aquaproj/aqua-registry/tree/main before scaffolding code
  - This prevents old scripts from being executed as much as possible
- **`cmdx s` commits scaffolded codes**
  - This enables us to distinguish scaffolded code from manual changes
- **`cmdx s` doesn't connect to a container when test fails**
  - This is a change of `cmdx t`. `cmdx s` runs `cmdx t` internally

:::caution
Please don't edit the commit by `git commit --amend`, `git rebase`, or somehow.
`cmdx s` creates a commit to distinguish scaffolded code from manual changes.
Please add new commits if you update code.
:::

### `cmdx t`

- **`cmdx t` doesn't connect to a container when test fails**
  - If you want to connect to the container, you can do it by `cmdx con <os> <arch>` command
  - In most cases you don't have to connect to a container, so we changed the behaviour

### `cmdx new`

- `cmdx new` doesn't create a branch and a commit anymore
  - **If you change code manually, you have to commit it before running `cmdx new`**
- `cmdx new` fails if files in `pkgs` or `registry.yaml` has changes
- `cmdx new` fails if the current branch isn't `feat/<package name>`
- **You can omit the argument `pkg`**
  - `cmdx new` gets the package name from the current branch name
