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
* [Checksum Verification](checksum.md)
* [Policy as Code](policy-as-code.md)
* [Cosign and SLSA Provenance Support](cosign-slsa.md)

## Plans

:::caution
The plan in undecided.
:::

* Prevent aqua.yaml from being tampered
  * [Disable Registries other than standard Registry by default (Secure by default)](https://github.com/aquaproj/aqua/issues/1404) [#1413](https://github.com/aquaproj/aqua/pull/1413)
