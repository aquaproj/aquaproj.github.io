---
sidebar_position: 550
---

# Security

We think security is very important and are working on improving the security of aqua.
aqua should allow you to install and execute tools securely.
In this page, we describe aqua's security perspective and our plan.

## List of Issues and Pull Requests

https://github.com/search?q=org%3Aaquaproj+label%3Asecurity

## Features

* Design
  * aqua doesn't execute external commands except for `go install` and `go build` to install packages
    * This prevents malicious commands from being executed
  * Centrally managed Registry is provided
    * Compared with third party registries, it has low risk to be tampered
* [Checksum Verification](/docs/reference/checksum/)
* [Policy as Code](/docs/tutorial-extras/policy-as-code/)

## Plans

:::caution
This page includes undecided plan.
:::

We are woring on preventing tampering by [Cosign](https://docs.sigstore.dev/cosign/overview) and [SLSA Provenance](https://slsa.dev/provenance/v0.2).

Please see [Cosign and SLSA Provenance Support](/docs/reference/cosign-slsa) too.

* Prevent aqua.yaml from being tampered
  * [Disable Registries other than standard Registry by default (Secure by default)](https://github.com/aquaproj/aqua/issues/1404) [#1413](https://github.com/aquaproj/aqua/pull/1413)
* Prevent aqua from being tampered
  * [Verify aqua with slsa-verifier](https://github.com/aquaproj/aqua/pull/1454)
  * [Verify aqua with slsa-verifier in aqua-installer](https://github.com/aquaproj/aqua-installer/pull/277)
  * Prevent aqua-installer from being tampered
    * Check the checksum of aqua-installer before running aqua-installer
* Prevent packages from being tampered
  * [Support verifying packages with Cosign and slsa-verifier](https://github.com/aquaproj/aqua/pull/1454)
