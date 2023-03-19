---
sidebar_position: 400
---

# Change the meaning of `require_checksum` and Enable `require_checksum` by default

[#1681](https://github.com/aquaproj/aqua/issues/1681) [#1686](https://github.com/aquaproj/aqua/pull/1686) 

[require_checksum](/docs/reference/config/checksum) is enabled by default when the checksum verification is enabled.

And the meaning of `require_checksum` is changed.

AS IS

If `require_checksum` is true, it fails to install a package when the checksum isn't found in `aqua-checksums.json` and the package's checksum configuration is disabled.
By default, `require_checksum` is `false`.

TO BE

If this is true, it fails to install a package when the checksum isn't found in `aqua-checksums.json`.
By default, `require_checksum` is `true`.

## Why this change is needed

To enforce the checksum verification and improve the security.
Checksum Verification has a trade off between security and user experience.
`require_checksum` was disabled for user experience in aqua v1, but we decided to make `require_checksum` enabled by default from aqua v2.

`require_checksum` will be changed from aqua v2.

- https://github.com/aquaproj/aqua/issues/1656

Note that checksum verification is still disabled by default.
We think it is a bit difficult to enable checksum verification by default in terms of user experience.
Unfortunately, many users don't think checksum verification is mandatory.

## How to migrate

We recommend updating aqua-checksums.json by GitHub Actions.

- [Enable Checksum Verification](/docs/guides/checksum)
