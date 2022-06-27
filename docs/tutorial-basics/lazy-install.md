---
sidebar_position: 300
---

# Lazy Install

Let's change the tool version.

```console
# Change cli/cli version to v2.1.0
$ sed -i "s|cli/cli@.*|cli/cli@v2.1.0|" clivm.yaml

$ gh version
INFO[0000] download and unarchive the package            clivm_version=1.3.0 package_name=cli/cli package_version=v2.1.0 program=clivm registry=standard
gh version 2.1.0 (2021-10-14)
https://github.com/cli/cli/releases/tag/v2.1.0
```

You find that `cli/cli@v2.1.0` is installed automatically.
You don't have to run `clivm i` explicitly.
We call this feature as `Lazy Install`.

Note that `Lazy Install` doesn't work if the symbolic link isn't created in `${CLIVM_ROOT_DIR}/bin` yet.
