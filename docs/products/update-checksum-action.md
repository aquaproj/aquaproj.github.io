---
sidebar_position: 250
---

# update-checksum-action

https://github.com/aquaproj/update-checksum-action

GitHub Actions to update aqua-checksums.json. If aqua-checksums.json isn't latest, update aqua-checksums.json and push a commit

About aqua's Checksum Verification, please see [the document](/docs/reference/security/checksum) too.

## :warning: Please consider autofix.ci or Securefix Action

[We recommend autofix.ci or Securefix Action rather than this action.](/docs/guides/checksum#recommend-autofixci-or-securefix-action-instead-of-update-checksum-action-and-update-checksum-workflow)

## Reusable Workflow

Please see [update-checksum-workflow](https://github.com/aquaproj/update-checksum-workflow).

## Requirements

[aqua](https://aquaproj.github.io/)

:::info
As of update-checksum-action v0.2.5, [ghcp](https://github.com/int128/ghcp) isn't necessary.
:::

## Example

[Workflow](https://github.com/aquaproj/example-update-checksum/blob/main/.github/workflows/test.yaml)

## Inputs

- `working_directory`
- `prune`
- `skip_push`

## Required Environment Variables

- `GITHUB_TOKEN`: GitHub Access Token. This is used to push a commit.

Required permissions: `contents: write`

:::info
~~Unfortunately, fine-grained personal access token is unavailable at the moment because it doesn't support GraphQL API.~~
~~https://github.com/cli/cli/issues/6680~~

2023-04-27 [fine-grained access token supports GraphQL API now.](https://github.blog/changelog/2023-04-27-graphql-improvements-for-fine-grained-pats-and-github-apps/)
:::

## Outputs

Nothing.
