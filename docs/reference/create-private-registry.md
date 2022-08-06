---
sidebar_position: 447
---

# Create Private Registries

If your GitHub organization has in-house tools,
it is useful to create a private registry in your organization.

aqua provides the framework to build private registries.

The framework has the following components.

* [registry-tool](https://github.com/aquaproj/registry-tool): CLI
* [template repository](https://github.com/aquaproj/template-private-aqua-registry)
* [registry-action](https://github.com/aquaproj/registry-action): GitHub Actions

## How to use

1. [Create a repository from the template repository](https://github.com/aquaproj/template-private-aqua-registry/generate)
1. Replace placeholders `<REPO_OWNER>` and `<REPO_NAME>`
1. Prepare a GitHub App or GitHub Personal Access Token for CI
1. (Optional) Install Renovate App in the repository

## Prepare a GitHub App or GitHub Personal Access Token for CI

To test the registry in CI, GitHub Access Token is required to access private repositories.

We recommend to create a GitHub App and install it to private repositories.
You can also use GitHub Personal Access Token instead of GitHub App.

Then please set GitHub App ID and Private Key or Personal Access Token at GitHub Secrets and fix GitHub Actions Workflow `test` using secrets.

e.g.

```yaml
      - name: Generate token
        id: generate_token
        uses: tibdex/github-app-token@v1
        with:
          app_id: ${{ secrets.APP_ID }}
          private_key: ${{ secrets.APP_PRIVATE_KEY }}

      - uses: aquaproj/registry-action/test@v0.1.0
        with:
          goos: ${{ matrix.env.goos }}
          goarch: ${{ matrix.env.goarch }}
          go_version: "1.18.5"
        env:
          GITHUB_TOKEN: ${{ steps.generate_token.outputs.token }}
```

## Renovate

You can test tool updates in CI using Renovate.
Please install Renovate in repositories.

### Automerge Renovate Pull Requests

If you would like to automerge Renovate Pull Requests, please enable automerge.

ref. [2022-03-29 Automate handling a number of Pull Requests by Renovate in Terraform Monorepo](https://devs.quipper.com/2022/03/29/automate-handling-a-number-of-pull-requests-by-renovate-in-terraform-monorepo.html)

- Enable Automerge
  - Add the job `status-check` to the default branch's branch protection rule's `Status checks that are required.`
- Enable platformAutomerge
