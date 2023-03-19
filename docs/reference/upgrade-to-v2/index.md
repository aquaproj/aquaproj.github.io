---
sidebar_position: 10
---

# Upgrade aqua from v1 to v2

The release of v2 includes several breaking changes.
Most important change is that **only standard registry is allowed by default**.
This breaking change makes aqua secure by default.
Other changes are not so important as the registry restriction, but these changes makes aqua simple.

[Pull Requests and Issues](https://github.com/aquaproj/aqua/milestone/96?closed=1)

## Breaking Changes

- [#1404](https://github.com/aquaproj/aqua/issues/1404) [#1516](https://github.com/aquaproj/aqua/pull/1516) [Only standard registry is allowed by default](only-standard-registry-is-allowed-by-default.md)
- [#1410](https://github.com/aquaproj/aqua/issues/1410) [#1516](https://github.com/aquaproj/aqua/pull/1516) [If `AQUA_CONFIG` or `-c` option is set, aqua doesn't search configuration files recursively](aqua-config.md)
- [#1409](https://github.com/aquaproj/aqua/issues/1409) [#1516](https://github.com/aquaproj/aqua/pull/1516) [Fix the default `files[].name`](fix-default-files-name.md)
- [#1681](https://github.com/aquaproj/aqua/issues/1681) [#1686](https://github.com/aquaproj/aqua/pull/1686) [Enable `require_checksum` by default](enable-require_checksum-by-default.md)
- [#1572](https://github.com/aquaproj/aqua/pull/1572) [#1573](https://github.com/aquaproj/aqua/issues/1573) [Change the implementation of `semver` and `semverWithVersion`](change-semver.md)
- [#1691](https://github.com/aquaproj/aqua/issues/1691) [#1694](https://github.com/aquaproj/aqua/pull/1694) [install: Deprecate `--test` option and change the default behaviour same as one with `--test` option](deprecate-install-test-option.md)
- [#1769](https://github.com/aquaproj/aqua/issues/1769) [#1770](https://github.com/aquaproj/aqua/pull/1770) [Deprecate `update-checksum`'s `--deep` option and change the default behaviour same as `--deep` option](deprecate-update-checksum-deep-option.md)

Removed some features.

- [#1408](https://github.com/aquaproj/aqua/issues/1408) [#1516](https://github.com/aquaproj/aqua/pull/1516) [Remove the package type `go`](remove-type-go.md)
- [#1411](https://github.com/aquaproj/aqua/issues/1411) [#1516](https://github.com/aquaproj/aqua/pull/1516) [Remove `supported_if`](remove-supported_if.md)
