---
sidebar_position: 50
---

# Install tools globally

By managing your Global Configuration in a GitHub Repository,
you can set up your new laptop quickly and update tools continously.
You can manage tools as code.

For example, [@suzuki-shunsuke](https://github.com/suzuki-shunsuke) manages his Global Configuration in https://github.com/suzuki-shunsuke/my-aqua-config , and creates the symbolic link to the repository in `~/.config/aquaproj-aqua`.

```console
$ git clone suzuki-shunsuke/my-aqua-config
$ ln -s $PWD/my-aqua-config ~/.config/aquaproj-aqua
$ cd my-aqua-config
$ aqua i -l
$ export AQUA_GLOBAL_CONFIG=${AQUA_GLOBAL_CONFIG:-}:${XDG_CONFIG_HOME:-$HOME/.config}/aquaproj-aqua/aqua.yaml
```
