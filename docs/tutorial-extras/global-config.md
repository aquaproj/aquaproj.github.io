---
sidebar_position: 50
---

# Install tools globally

By managing your Global Configuration in a GitHub Repository,
you can set up your new laptop quickly and update tools continously.
You can manage tools as code.

For example, [@suzuki-shunsuke](https://github.com/suzuki-shunsuke) manages his Global Configuration in https://github.com/suzuki-shunsuke/my-aqua-config , and creates the symbolic link to the repository in `~/.aqua/global`.

```console
$ git clone suzuki-shunsuke/my-aqua-config
$ ln -s $PWD/my-aqua-config ~/.aqua/global
$ cd my-aqua-config
$ aqua i -l
```
