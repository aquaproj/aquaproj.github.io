---
sidebar_position: 1250
---

# Minisign Support

- `aqua >= v2.31.0` [#2978](https://github.com/aquaproj/aqua/pull/2978) [#2994](https://github.com/aquaproj/aqua/pull/2994)

aqua supports verifying packages with [minisign](https://github.com/jedisct1/minisign) to install some packages securely.
For example, [zig](https://ziglang.org/download/) is signed by minisign.

## Example

```yaml
packages:
  - type: http
    repo_owner: ziglang
    repo_name: zig
    # ...
    minisign:
      type: http
      url: https://ziglang.org/builds/zig-{{.OS}}-{{.Arch}}-{{.Version}}.{{.Format}}.minisig
      public_key: "RWSGOq2NVecA2UPNdBUZykf1CCb147pkmdtYxgb3Ti+JO/wCYvhbAb/U"
```
