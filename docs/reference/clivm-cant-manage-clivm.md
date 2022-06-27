---
sidebar_position: 850
---

# clivm doesn't support installing clivm

clivm doesn't support installing clivm.
You shouldn't write the configuration to install the command `clivm` with clivm,
because it causes the infinite loop.

From clivm v0.8.6 (clivm-proxy v0.2.1), clivm prevents the infinite loop.

```console
# Create the symbolic link accidentally
$ ln -s ~/.local/share/clivm/bin/clivm-proxy ~/.local/share/clivm/bin/clivm
$ clivm i
[ERROR] the command "clivm" can't be executed via clivm-proxy to prevent the infinite loop
```

If you encounter the error `[ERROR] the command "clivm" can't be executed via clivm-proxy to prevent the infinite loop`,
remove the symbolic link `$CLIVM_ROOT_DIR/bin/clivm`.

```console
$ rm $CLIVM_ROOT_DIR/bin/clivm
```
