---
sidebar_position: 550
---

# Security

:::caution
This page includes undecided plan.
:::

We think security is very important and are working on improving the security of aqua.
You should be able to install and execute tools securely by aqua.
In this page, we describe aqua's security perspective and our plan.

## List of Issues and Pull Requests

https://github.com/search?q=org%3Aaquaproj+label%3Asecurity

## Features

* Design
  * aqua doesn't execute external commands except for `go install` and `go build` to install packages
    * This prevents malicious commands from being executed
  * Centrally managed Registry is provided
    * Compared with third party registries, it has low risk to be tampered
* [Checksum Verification](https://aquaproj.github.io/docs/reference/checksum/)
* [Policy as Code](https://aquaproj.github.io/docs/tutorial-extras/policy-as-code/)

## Plans

We are woring on preventing tampering by keyless signing with [Cosign](https://docs.sigstore.dev/cosign/overview).

Please see [Verify signatures with Cosign](/docs/reference/cosign).

* Prevent aqua.yaml from being tampered
  * [Disable Registries other than standard Registry by default (Secure by default)](https://github.com/aquaproj/aqua/issues/1404) [#1413](https://github.com/aquaproj/aqua/pull/1413)
* Prevent aqua from being tampered
  * [Sign aqua with Cosign](https://github.com/aquaproj/aqua/issues/1391)
  * Prevent aqua-installer from being tampered
    * [Sign aqua-installer with Cosign](https://github.com/aquaproj/aqua-installer/issues/256)
  * [Verify aqua in aqua-installer](https://github.com/aquaproj/aqua-installer/issues/276)
* Prevent packages from being tampered
  * [Support verifying packages with Cosign](https://github.com/aquaproj/aqua/pull/1393)
* Prevent Registries from being tampered
  * [Sign aqua-registry with Cosign](https://github.com/aquaproj/aqua-registry/issues/8296)
  * [Verify Registry with Cosign](https://github.com/aquaproj/aqua/issues/1379)
