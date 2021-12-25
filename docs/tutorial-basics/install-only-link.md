---
sidebar_position: 400
---

# `aqua i`'s `-l` option

You added [tfmigrator/cli](https://github.com/tfmigrator/cli) in [Search packages](search-packages), but it isn't installed yet.

```console
$ command -v tfmigrator # command is not found

```

Let's run `aqua i -l`.

```console
$ aqua i -l
INFO[0000] create a symbolic link                        aqua_version=0.8.7 link_file=/home/foo/.aqua/bin/tfmigrator new=aqua-proxy program=aqua
```

The command would exit immediately, because the tool isn't downloaded and installed yet.

The command `aqua i` installs all tools at once.
But when the option `-l` is set, `aqua i` creates only symbolic links in `~/.aqua/bin` and skips downloading and installing tools.

Even if downloading and installing are skipped, you can execute the tool thanks for [Lazy Install](lazy-install).

```console
$ tfmigrator -v
INFO[0000] download and unarchive the package            aqua_version=0.8.7 package_name=tfmigrator/cli package_version=v0.2.1 program=aqua registry=standard
tfmigrator version 0.2.1 (3993c0824016673338530f4e7e8966c35efa5706)
```

`-l` option is useful for local development, because you can install only tools which are needed for you.
