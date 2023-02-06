---
sidebar_position: 20
---

# Keep configuration files in one directory

aqua >= v1.33.0 [#1595](https://github.com/aquaproj/aqua/issues/1595)

aqua has several configuration files such as `aqua.yaml`, [aqua-checksums.json](checksum.md), [policy file](policy-as-code.md), and [imported files](split-config.md).

e.g.

```
aqua.yaml
aqua-checksums.json
aqua-policy.yaml # You can rename freely
aqua/ # You can rename freely
  terraform.yaml
  ...
```

From aqua v1.33.0, aqua supports keeping configuration files in one directory.

e.g.

```
aqua/ # or .aqua
  aqua.yaml
  aqua-checksums.json
  policy.yaml # You can rename freely
  imports/ # You can rename freely
    terraform.yaml
    ...
```

This is useful to keep the working directory clean.
