---
sidebar_position: 447
---

# Create Private Registries

If your GitHub organization has in-house tools,
it is useful to create a private registry in your organization.

aqua provides the framework to build private registries.

The framework has two components.

* [registry-tool](https://github.com/aquaproj/registry-tool): CLI
* [template repository](https://github.com/aquaproj/template-private-aqua-registry)

## How to use

1. [Create a repository from the template repository](https://github.com/aquaproj/template-private-aqua-registry/generate)
1. Replace placeholders `<REPO_OWNER>` and `<REPO_NAME>`
1. Prepare a GitHub App or GitHub Personal Access Token for CI
1. (Optional) Install Renovate App in the repository

## Prepare a GitHub App or GitHub Personal Access Token for CI

To test the registry in CI, GitHub Access Token is required to access private repositories.

We recommend to create a GitHub App and install it to private repositories.
You can also use GitHub Personal Access Token instead of GitHub App.

## Renovate

You can test tool updates in CI using Renovate.
Please install Renovate in repositories.

### Automerge Renovate Pull Requests

If you would like to automerge Renovate Pull Requests, please enable automerge.

ref. [2022-03-29 Automate handling a number of Pull Requests by Renovate in Terraform Monorepo](https://devs.quipper.com/2022/03/29/automate-handling-a-number-of-pull-requests-by-renovate-in-terraform-monorepo.html)

- Enable Automerge
  - Add the job `status-check` to the default branch's branch protection rule's `Status checks that are required.`
- Enable platformAutomerge
