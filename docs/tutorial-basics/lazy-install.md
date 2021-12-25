---
sidebar_position: 300
---

# Lazy Install

Let's change the tool version.

```console
# Change cli/cli version from v2.2.0 to v2.1.0
$ sed -i "s|cli/cli@v2\.2\.0|cli/cli@v2.1.0|" aqua.yaml

$ gh version
INFO[0000] download and unarchive the package            aqua_version=0.8.7 package_name=cli/cli package_version=v2.1.0 program=aqua registry=standard
gh version 2.1.0 (2021-10-14)
https://github.com/cli/cli/releases/tag/v2.1.0
```

You find that `cli/cli@v2.1.0` is installed automatically.
You don't have to run `aqua i` explicitly.
We call this feature as `Lazy Install`.

Note that `Lazy Install` doesn't work if the symbolic link isn't created in `~/.aqua/bin` yet.
