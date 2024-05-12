---
sidebar_position: 15
---

# Enable Checksum Verification

About Checksum Verification, please see also.

- [Reference](/docs/reference/security/checksum)
- [Configuration](/docs/reference/config/checksum)
- [Registry Configuration](/docs/reference/registry-config/checksum)
- [Usage > aqua update-checksum](/docs/reference/usage#aqua-update-checksum)

## Create a GitHub Repository

[Let's create a GitHub Repository for this tutorial](https://github.com/new).
You can remove the repository after this tutorial.

## Prepare GitHub Access Token

Please create a classic personal access token and add it to Repository Secrets.

- name: GH_TOKEN
- required permissions: `contents: write`

:::caution
GitHub Actions' token `GITHUB_TOKEN` is unavailable.
:::

:::info
~~Unfortunately, fine-grained personal access token is unavailable at the moment because it doesn't support GraphQL API.~~
~~https://github.com/cli/cli/issues/6680~~

2023-04-27 [fine-grained access token supports GraphQL API now.](https://github.blog/changelog/2023-04-27-graphql-improvements-for-fine-grained-pats-and-github-apps/)
:::

:::info
In this time we use a classic personal access token, but we recommend GitHub App or fine-grained access token in terms of security.
:::

## Create aqua.yaml

```sh
aqua init
aqua g -i suzuki-shunsuke/tfcmt
```

## Enable Checksum Verification

By default, checksum verification is disabled.
Let's edit aqua.yaml and enable Checksum Verification.

```yaml
---
checksum:
  enabled: true
registries:
- type: standard
  ref: v4.155.1 # renovate: depName=aquaproj/aqua-registry
packages:
- name: suzuki-shunsuke/tfcmt@v4.2.0
```

## Set up GitHub Actions Workflow

:::caution
For CircleCI Users, please use [circleci-orb-aqua's update-checksum command](https://circleci.com/developer/orbs/orb/aquaproj/aqua#commands-update-checksum) instead.
:::

To create and update `aqua-checksum.json` automatically, let's set up GitHub Actions.

```
mkdir -p .github/workflows
vi .github/workflows/update-aqua-checksum.yaml
```

```yaml
name: update-aqua-checksum
on:
  pull_request:
    paths:
      - aqua.yaml
      - aqua-checksums.json
jobs:
  update-aqua-checksums:
    uses: aquaproj/update-checksum-workflow/.github/workflows/update-checksum.yaml@f367004e7f17e99d30297cd9e89afad30ee1f251 # v1.0.0
    permissions:
      contents: read
    with:
      aqua_version: v2.28.0
      prune: true
    secrets:
      gh_token: ${{secrets.GH_TOKEN}}
      # gh_app_id: ${{secrets.APP_ID}}
      # gh_app_private_key: ${{secrets.APP_PRIVATE_KEY}}
```

We use [update-checksum-action](https://github.com/aquaproj/update-checksum-action).
This action depends on [int128/ghcp](https://github.com/int128/ghcp), so let's install it by aqua.

```
aqua g -i int128/ghcp
```

## Create a pull request

Commit `aqua.yaml` and `.github/workflows/update-aqua-checksum.yaml`.

```sh
git checkout -b ci/aqua-checksum
git add aqua.yaml .github/workflows/update-aqua-checksum.yaml
git commit -m "ci: add aqua.yaml and set up workflow"
git push origin ci/aqua-checksum
```

Create a pull request. Then `aqua-checksums.json` will be created by GitHub Actions.

![image](https://user-images.githubusercontent.com/13323303/224527388-720ce451-bdce-4055-9eed-ba0942615eea.png)

![image](https://user-images.githubusercontent.com/13323303/224527533-8fc150e2-55c1-4ca4-a9c7-f05544fdeccb.png)

## Change a package version

Let's change version.

```sh
sed -i "s/v4.2.0/v4.1.0/" aqua.yaml
```

```diff
-- name: suzuki-shunsuke/tfcmt@v4.2.0
+- name: suzuki-shunsuke/tfcmt@v4.1.0
```

Push a commit.

```sh
git pull origin ci/aqua-checksum
git add aqua.yaml
git commit -m "chore: change tfcmt version"
git push origin "ci/aqua-checksum"
```

Then `aqua-checksums.json` is updated automatically.

![image](https://user-images.githubusercontent.com/13323303/224527976-4ddb1607-9958-4269-8882-3c0657e98a72.png)

![image](https://user-images.githubusercontent.com/13323303/224528023-72aba252-7507-47fa-87b2-dc08eb7f908b.png)

## See how Checksum Verification prevents tampering

Let's see how Checksum Verification prevents tampering.
It's bothersome to tamper assets actually, so in this time let's simulate the situation by tampering checksum in `aqua-checksums.json`.

```sh
git pull origin ci/aqua-checksum
vi aqua-checksums.json
```

```diff
     {
       "id": "github_release/github.com/suzuki-shunsuke/tfcmt/v4.1.0/tfcmt_linux_amd64.tar.gz",
-      "checksum": "A8E55BEA1A5F94F9515FD9C5C3296D1874461BA1DBD158B3FC0ED6A0DB3B7D91",
+      "checksum": "A8E55BEA1A5F94F9515FD9C5C3296D1874461BA1DBD158B3FC0ED6A0DB3B7D92",
       "algorithm": "sha256"
     },
```

Add a GitHub Actions job that runs a tampered package.

```yaml
  test:
    runs-on: ubuntu-latest
    permissions:
      contents: read
    env:
      AQUA_LOG_COLOR: always
      AQUA_REQUIRE_CHECKSUM: "true"
    steps:
      - uses: actions/checkout@ac593985615ec2ede58e132d2e21d2b1cbd6127c # v3.3.0
      - uses: aquaproj/aqua-installer@6ce1f8848ec8e61f14d57bd5d7597057a6dd187c # v3.0.1
        with:
          aqua_version: v2.28.0
        env:
          GITHUB_TOKEN: ${{github.token}}
      - run: tfcmt -v
```

```sh
git add aqua-checksums.json
git commit -m "chore: tamper aqua-checksums.json"
git push origin "ci/aqua-checksum"
```

Then `test` job would fail because the checksum is unmatched.

![image](https://user-images.githubusercontent.com/13323303/224528789-eeda95e7-73b9-46a3-95da-da954087e83b.png)

```
time="2023-03-12T06:36:05Z" level=fatal msg="aqua failed" actual_checksum=A8E55BEA1A5F94F9515FD9C5C3296D1874461BA1DBD158B3FC0ED6A0DB3B7D91 aqua_version=2.28.0 env=linux/amd64 error="checksum is invalid" exe_name=tfcmt expected_checksum=A8E55BEA1A5F94F9515FD9C5C3296D1874461BA1DBD158B3FC0ED6A0DB3B7D92 package=suzuki-shunsuke/tfcmt package_version=v4.1.0 program=aqua
```
